/* =========================================================
   Kimberley Pipe Band - shared script
   ========================================================= */

/* ---------------------------------------------------------
   100th TATTOO LINK - change this ONE line to update every
   "100th Tattoo" link on the site.
   --------------------------------------------------------- */
var TATTOO_URL = "https://kimberleypipeband.github.io/";

(function () {
  "use strict";

  /* Tattoo links */
  document.querySelectorAll("[data-tattoo]").forEach(function (a) {
    a.href = TATTOO_URL;
  });

  /* Top bar turns solid after scrolling */
  var bar = document.querySelector(".topbar");
  function onScroll() {
    if (bar) bar.classList.toggle("solid", window.scrollY > 80);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var burger = document.querySelector(".hamburger");
  if (burger) {
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    document.querySelectorAll(".menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) burger.click();
    });
  }

  /* Tabs on desktop, accordion on phones */
  document.querySelectorAll(".tabs").forEach(function (box) {
    var tabs = Array.prototype.slice.call(box.querySelectorAll(".tab"));
    var panels = Array.prototype.slice.call(box.querySelectorAll(".panel"));
    function select(i, focus) {
      tabs.forEach(function (t, j) {
        t.setAttribute("aria-selected", i === j ? "true" : "false");
        t.tabIndex = i === j ? 0 : -1;
        panels[j].hidden = i !== j;
      });
      if (focus) tabs[i].focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(i); });
      t.addEventListener("keydown", function (e) {
        var n = tabs.length;
        if (e.key === "ArrowRight") { e.preventDefault(); select((i + 1) % n, true); }
        if (e.key === "ArrowLeft") { e.preventDefault(); select((i - 1 + n) % n, true); }
        if (e.key === "Home") { e.preventDefault(); select(0, true); }
        if (e.key === "End") { e.preventDefault(); select(n - 1, true); }
      });
    });
    panels.forEach(function (p, i) {
      var btn = p.querySelector(".acc-btn");
      if (!btn) return;
      if (i === 0) { p.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
      btn.addEventListener("click", function () {
        var open = p.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
    select(0);
  });

  /* Missing member photo: show initials instead */
  document.querySelectorAll(".member img").forEach(function (img) {
    function swap() {
      var name = img.alt.split(",")[0];
      var ini = name.split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2);
      var d = document.createElement("div");
      d.className = "initials";
      d.setAttribute("role", "img");
      d.setAttribute("aria-label", img.alt);
      d.textContent = ini;
      img.replaceWith(d);
    }
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap);
  });

  /* Missing video file: show the poster with "Video coming soon" */
  document.querySelectorAll(".video").forEach(function (box) {
    var v = box.querySelector("video");
    var src = box.querySelector("source");
    var soon = box.querySelector(".soon");
    if (!v || !src) return;
    if (soon && v.poster) soon.style.backgroundImage = "linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)), url('" + v.getAttribute("poster") + "')";
    function missing() { box.classList.add("missing"); }
    src.addEventListener("error", missing);
    if (location.protocol.indexOf("http") === 0 && window.fetch) {
      fetch(src.getAttribute("src"), { method: "HEAD" }).then(function (r) {
        if (!r.ok) missing();
      }).catch(function () {});
    }
  });

  /* Lightbox for member and gallery photos */
  var lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Photo viewer");
  lb.innerHTML =
    '<button class="lb-btn lb-close" aria-label="Close">&times;</button>' +
    '<button class="lb-btn lb-prev" aria-label="Previous photo">&#8249;</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button class="lb-btn lb-next" aria-label="Next photo">&#8250;</button>';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector("img");
  var lbCap = lb.querySelector("figcaption");
  var group = [], idx = 0, lastFocus = null;

  function show(i) {
    idx = (i + group.length) % group.length;
    var item = group[idx];
    lbImg.src = item.src;
    lbImg.alt = item.alt;
    lbCap.textContent = item.caption;
    var many = group.length > 1;
    lb.querySelector(".lb-prev").style.display = many ? "" : "none";
    lb.querySelector(".lb-next").style.display = many ? "" : "none";
  }
  function open(name, i) {
    group = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox="' + name + '"]'))
      .filter(function (b) { return b.querySelector("img"); })
      .map(function (b) {
        var img = b.querySelector("img");
        return { src: img.getAttribute("src"), alt: img.alt, caption: b.getAttribute("data-caption") || img.alt, el: b };
      });
    if (!group.length) return;
    var start = 0;
    group.forEach(function (g, j) { if (g.el === i) start = j; });
    lastFocus = document.activeElement;
    show(start);
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
    lb.querySelector(".lb-close").focus();
  }
  function close() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  document.querySelectorAll("[data-lightbox]").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.querySelector("img")) open(b.getAttribute("data-lightbox"), b);
    });
  });
  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", function () { show(idx - 1); });
  lb.querySelector(".lb-next").addEventListener("click", function () { show(idx + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
})();
