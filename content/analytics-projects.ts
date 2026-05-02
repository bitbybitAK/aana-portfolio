import type { AnalyticsProject } from '@/types/content';

export const analyticsProjects: AnalyticsProject[] = [
  {
    id: 'botm-recommender',
    slug: 'botm-recommender',
    number: '01',
    title: 'Book-of-the-month recommender',
    why: 'A small system that reads my Goodreads and surfaces a monthly pick. Same pattern as content recs at scale, just for one user.',
    stack: ['SQL', 'Python', 'scikit-learn'],
    githubUrl: '#',
    chartType: 'bar',
  },
  {
    id: 'modeling-epidemics',
    slug: 'modeling-epidemics',
    number: '02',
    title: 'Modeling Epidemics, replicated',
    why: 'Re-implemented the SIR model. Then asked: what does this look like applied to product virality?',
    stack: ['Python', 'numpy', 'Tableau'],
    githubUrl: '#',
    chartType: 'line',
  },
  {
    id: 'placeholder-third-project',
    slug: 'placeholder-third-project',
    number: '03',
    title: '[ a third project, optional ]',
    why: '[ a one-paragraph why. what was the question. why does it matter. ]',
    stack: ['stack', 'stack'],
    githubUrl: '#',
    chartType: 'bar',
  },
];
