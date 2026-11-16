alter table site_profile add column if not exists about_lead text not null default '';
alter table site_profile add column if not exists about_more text not null default '';

update site_profile
set about_lead = 'I am a junior data analyst in Nairobi. I take a raw file, check what can be trusted, and turn it into a comparison a team can use.',
    about_more = 'The dashboards on this site cover supermarket sales, bank branch performance, and student scores. Each one names the result, the figure behind it, and the next step.'
where id = 1
  and about_lead = '';
