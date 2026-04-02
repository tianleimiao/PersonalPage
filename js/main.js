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

  function initHeroOnView() {
    var panels = document.querySelectorAll("[data-hero-on-view]");
    if (!panels.length) return;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );
    panels.forEach(function (el) {
      io.observe(el);
    });
  }

  /* Canvas Particles for Hero 1 */
  function initParticles() {
    var canvas = document.getElementById("hero-particles");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var width, height;
    var particles = [];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    function Particle() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 1.5 + 0.5;
    }

    Particle.prototype.update = function () {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    };

    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(59, 130, 246, 0.5)";
      ctx.fill();
    };

    for (var i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "rgba(59, 130, 246, " + (0.2 - dist / 600) + ")";
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initFlashlightCards();
    initWordRotator();
    updateHolodex();
    window.addEventListener("resize", updateHolodex);
    initReveal();
    initBeamSvg();
    initHeroOnView();
    initParticles();
  });
})();
