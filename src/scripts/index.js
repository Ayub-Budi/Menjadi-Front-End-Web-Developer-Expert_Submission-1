import 'regenerator-runtime'; /* for async await transpile */
import '../styles/content.css';
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/responsive.css';

import './component/app-hero';

import App from './view/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

console.log('Hello Coders! :)');
