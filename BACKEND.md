# Backend Requirements

This portfolio site is a Next.js front end with a single backend dependency:
**Supabase**, used to persist contact-form submissions from `ContactSection.tsx`.

## 1. Environment variables

The Supabase client ([`src/integrations/supabase/client.ts`](src/integrations/supabase/client.ts))
reads two public env vars. Copy `.env.example` to `.env.local` and fill them in:

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Project URL, e.g. `https://uwxdmrcellnjsdgvhqcb.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Publishable / anon key (browser-safe) |

Both are found in **Supabase Dashboard → Project Settings → API**. They are
exposed to the browser, so never put the `service_role` key here.

```bash
cp .env.example .env.local
# then edit .env.local with the real anon key
```

> The client is initialized lazily, so the project still **builds** without
> these vars set — but the contact form will throw a configuration error at
> runtime until they are provided.

## 2. Database

One table is required: `public.portfolio`. Schema, constraints, and Row Level
Security policy are defined in
[`supabase/migrations/0001_create_portfolio_table.sql`](supabase/migrations/0001_create_portfolio_table.sql).

| Column | Type | Notes |
| --- | --- | --- |
| `id` | `uuid` | PK, defaults to `gen_random_uuid()` |
| `name` | `text` | not null, 1–100 chars |
| `email` | `text` | not null, ≤255 chars |
| `message` | `text` | not null, 1–1000 chars |
| `created_at` | `timestamptz` | not null, defaults to `now()` |

### Security model

RLS is **enabled**. A single policy allows the `anon` and `authenticated`
roles to `INSERT` (the public contact form). There is no public `SELECT`
policy, so submissions are **not** readable from the browser — read them from
the dashboard or a trusted server using the service-role key.

## 3. Applying the migration

Using the Supabase CLI (recommended):

```bash
supabase db push          # apply migrations to the linked project
# or run locally:
supabase start
supabase db reset
```

Or paste the contents of the migration file into the **SQL Editor** in the
Supabase dashboard and run it.

## 4. Verifying

1. `cp .env.example .env.local` and add the real anon key.
2. Apply the migration (above).
3. `npm run dev`, open the site, and submit the contact form.
4. Confirm a new row appears in **Table Editor → portfolio**.
