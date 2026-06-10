-- Backend requirement for the contact form (ContactSection.tsx).
-- Creates the `portfolio` table that stores contact-form submissions and
-- locks it down with Row Level Security so anonymous visitors can only INSERT.

create table if not exists public.portfolio (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null check (char_length(name) between 1 and 100),
  email      text        not null check (char_length(email) <= 255),
  message    text        not null check (char_length(message) between 1 and 1000),
  created_at timestamptz not null default now()
);

-- Enable Row Level Security. With RLS on and no policies, all access is denied
-- by default — we then explicitly grant only what the form needs.
alter table public.portfolio enable row level security;

-- Allow anonymous (and authenticated) visitors to submit the contact form.
create policy "Anyone can submit a contact message"
  on public.portfolio
  for insert
  to anon, authenticated
  with check (true);

-- NOTE: there is deliberately no SELECT / UPDATE / DELETE policy for the anon
-- role, so submitted messages are not publicly readable. Read them from the
-- Supabase dashboard or via the service-role key on a trusted server.

create index if not exists portfolio_created_at_idx
  on public.portfolio (created_at desc);
