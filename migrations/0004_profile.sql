alter table site_contact add column if not exists youtube text not null default '';
alter table site_contact add column if not exists tiktok text not null default '';
alter table site_contact add column if not exists instagram text not null default '';

update site_contact
set youtube = 'https://www.youtube.com/@mahmoudnagibmotivation',
    tiktok = 'https://www.tiktok.com/@growwithmahmoud',
    instagram = 'https://www.instagram.com/grow.withmahmoud'
where id = 1
  and youtube = ''
  and tiktok = ''
  and instagram = '';

create table if not exists site_profile (
  id integer primary key,
  portrait text not null default ''
);

insert into site_profile (id, portrait)
values (1, '')
on conflict (id) do nothing;

create table if not exists site_skills (
  id serial primary key,
  label text not null,
  note text not null default '',
  sort integer not null default 0
);

insert into site_skills (label, note, sort)
select label, note, sort
from (
  values
    ('Python & Pandas'::text, 'Cleaning and aggregation'::text, 1),
    ('Excel', 'PivotTables and formulas', 2),
    ('SQL', 'Queries and joins', 3),
    ('Visualization', 'Charts that explain', 4),
    ('Reporting', 'Findings and next steps', 5)
) as seed(label, note, sort)
where not exists (select 1 from site_skills);
