import Home from './Home.js';
import Courses from './Courses.js';
import Gallery from './Gallery'
import Shop from './Shop.js';
import About from './About.js';

export default [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/courses',
    Component: Courses
  },
  {
    path: '/gallery',
    Component: Gallery
  },
  {
    path: '/shop',
    Component: Shop
  },
  {
    path: '/about',
    Component: About
  }
];