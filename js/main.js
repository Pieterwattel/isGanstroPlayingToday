(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    var yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    var btn = document.getElementById("demo-btn");
    var out = document.getElementById("demo-output");
    if (btn && out) {
      btn.addEventListener("click", function () {
        out.textContent = "JavaScript is connected.";
      });
    }
  });
})();
