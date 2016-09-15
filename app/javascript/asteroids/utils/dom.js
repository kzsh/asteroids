/**
 * get the dimensions of the browser window
 * @returns {Object} {h: Number, w: Number}
 */
export function getWindowDimensions() {
var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  x = w.innerWidth || e.clientWidth || g.clientWidth,
  y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  return {
    h: y,
    w: x
  };
}
