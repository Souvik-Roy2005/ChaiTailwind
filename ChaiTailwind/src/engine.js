import { parseClass } from "./parser.js";
import { applyStyle } from "./utilities.js";
import { observeDOM } from "./observer.js";

function processElement(element) {
  const classes = [...element.classList];

  classes.forEach(cls => {
    if (cls.startsWith("chai-")) {
      const parsed = parseClass(cls);

      if (parsed) {
        applyStyle(element, parsed);
        element.classList.remove(cls);
      }
    }
  });
}

function init() {
  const elements = document.querySelectorAll("*");
  elements.forEach(processElement);
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  observeDOM(processElement);
});