import { addClass } from './js/header.js';
import { fetchNews } from './api/news.js';
import { fetchProject } from './api/project.js';
import { innerHTMLEducation, innerHTMLHistory } from './js/work.js';

addClass();
fetchNews();
fetchProject();
innerHTMLEducation();
innerHTMLHistory();