(function () {
  "use strict";

  /* Flashlight: update CSS variables on card mousemove */
  function initFlashlightCards() {
    document.querySelectorAll(".flashlight-card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width) * 100;
        var y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", x + "%");
        card.style.setProperty("--my", y + "%");
      });
      card.addEventListener("mouseleave", function () {
        card.style.setProperty("--mx", "50%");
        card.style.setProperty("--my", "50%");
      });
    });
  }

  /* Rotate words: pages, products, marketing */
  var words = ["pages", "products", "marketing"];
  var wordIndex = 0;
  var slotEl = document.getElementById("word-slot");

  function initWordRotator() {
    if (!slotEl) return;
    slotEl.innerHTML = "";
    words.forEach(function (w, i) {
      var span = document.createElement("span");
      span.textContent = w;
      if (i === 0) span.classList.add("is-active");
      slotEl.appendChild(span);
    });
    var spans = slotEl.querySelectorAll("span");
    setInterval(function () {
      spans[wordIndex].classList.remove("is-active");
      wordIndex = (wordIndex + 1) % words.length;
      spans[wordIndex].classList.add("is-active");
    }, 2800);
  }

  /* Holodex: mark center item on resize / load */
  function updateHolodex() {
    var tracks = document.querySelectorAll(".holodex-track");
    tracks.forEach(function (track) {
      var items = track.querySelectorAll(".holodex-item");
      var n = items.length;
      if (!n) return;
      var mid = Math.floor(n / 2);
      items.forEach(function (el, i) {
        el.classList.remove("is-center", "is-left", "is-right");
        if (i === mid) el.classList.add("is-center");
        else if (i < mid) el.classList.add("is-left");
        else el.classList.add("is-right");
      });
    });
  }

  /* IntersectionObserver: fade + slide + blur per element */
  function initReveal() {
    var sections = document.querySelectorAll(".reveal-section");
    if (!sections.length) return;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    sections.forEach(function (s) {
      io.observe(s);
    });
  }

  /* Animate vertical beam stops (SVG) */
  function initBeamSvg() {
    var stops = document.querySelectorAll(".beam-stop-animated");
    var t = 0;
    function tick() {
      t += 0.02;
      stops.forEach(function (stop, i) {
        var phase = t + i * 0.4;
        var o = 0.15 + Math.sin(phase) * 0.45 + 0.35;
        stop.setAttribute("stop-opacity", String(Math.max(0, Math.min(1, o))));
      });
      requestAnimationFrame(tick);
    }
    if (stops.length) requestAnimationFrame(tick);
  }

  document.addEventListener("DOMContentLoaded", function () {
    initFlashlightCards();
    initWordRotator();
    updateHolodex();
    window.addEventListener("resize", updateHolodex);
    initReveal();
    initBeamSvg();
  });
})();
