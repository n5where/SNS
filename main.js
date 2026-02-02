// main.js

/**
 * SNS Dashboard Main Script
 * Handles dynamic initialization for widgets.
 */

console.log('SNS Dashboard initialized.');

// Twitter (X) Widget Loader
// Explicitly loads the widgets.js to ensure rendering, especially in some SPA or preview environments.
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

// Fallback: If the widget doesn't render automatically, try to flush it after load.
document.addEventListener('DOMContentLoaded', () => {
    if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
    }
});