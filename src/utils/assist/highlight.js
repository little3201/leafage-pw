import Hljs from "highlight.js";
import "highlight.js/styles/default.css";

const Highlight = {};

Highlight.install = Vue => {
  Vue.directive("highlight", el => {
    let blocks = el.querySelectorAll("pre code");

    blocks.forEach(block => {
      Hljs.highlightBlock(block);
    });
  });
};

export default Highlight;
