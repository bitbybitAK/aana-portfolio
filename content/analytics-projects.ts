import type { AnalyticsProject } from '@/types/content';

export const analyticsProjects: AnalyticsProject[] = [
  {
    id: 'botm-recommender',
    slug: 'botm-recommender',
    number: '01',
    title: 'Book of the Month recommender',
    why: 'A data analysis of 80+ Book of the Month picks from 2018 to 2025, surfacing patterns in editorial taste through SQL window functions and Python visualization.',
    stack: ['Python', 'DuckDB', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/bitbybitAK/Book-Of-the-Month',
    chartType: 'bar',
  },
  {
    id: 'clinical-trials-insights',
    slug: 'clinical-trials-insights',
    number: '02',
    title: 'Clinical Trials Insights',
    why: 'A full ETL pipeline pulling clinical trial metadata from ClinicalTrials.gov, processed in PostgreSQL, served through Grafana dashboards.',
    stack: ['Python', 'PostgreSQL', 'Grafana', 'Docker'],
    githubUrl: 'https://github.com/bitbybitAK/clinicaltrialinsights',
    chartType: 'line',
  },
  {
    id: 'hr-analytics',
    slug: 'hr-analytics',
    number: '03',
    title: 'HR Analytics',
    why: 'An HR analytics dashboard in Tableau covering attrition, satisfaction, department-level breakdowns. Designed for non-technical decision-makers.',
    stack: ['Tableau', 'Excel', 'Statistics'],
    githubUrl: 'https://github.com/bitbybitAK/HR-Analytics',
    chartType: 'bar',
  },
];
