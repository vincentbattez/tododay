console.log("ready!");

// Import les librairies
import './lib/unelib';
import * as inlineSVG from '../../node_modules/inline-svg/dist/inlineSVG.min';
inlineSVG.init();

// Import toutes les pages et le commun
import Router from './util/Router';
import common from './common';
import homepage from './pages/homepage';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // Commun
  common,
  // Toutes les autres pages
  homepage,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());