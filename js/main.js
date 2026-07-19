// AIDIRL site — shared behaviour
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  // Back to top button
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("visible", window.scrollY > 480);
    }, { passive: true });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // Theme card expand ("Learn more")
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".theme-card");
      var expanded = card.classList.toggle("expanded");
      btn.textContent = expanded ? "Show less \u2212" : "Learn more +";
      btn.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  });

  // Publications filter
  var filterButtons = document.querySelectorAll(".pub-filter-btn");
  var pubItems = document.querySelectorAll(".pub-item");
  if (filterButtons.length && pubItems.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var filter = btn.getAttribute("data-filter");
        pubItems.forEach(function (item) {
          var match = filter === "all" || item.getAttribute("data-category") === filter;
          item.style.display = match ? "" : "none";
        });
        document.querySelectorAll(".pub-group-label").forEach(function (label) {
          var group = label.nextElementSibling;
          // groups are wrapped divs; handled separately if used
        });
      });
    });
  }
})();
