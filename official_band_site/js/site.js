/* Kimberley Pipe Band — page behaviour. Content lives in site-data.js. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* Ridgeline: the Purcell skyline drawn under heroes and above the footer */
  var RIDGE = '<svg viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M0 100L0 64 58.5 57 104.9 42 143.2 51 195.6 23 236.0 38 282.4 30 326.7 12 363.0 34 413.4 44 461.8 27 512.3 37 558.7 15 601.0 5 641.3 25 693.8 40 752.3 31 802.7 45 853.1 28 895.5 17 935.8 33 986.2 41 1038.7 24 1087.1 35 1139.5 18 1179.8 28 1230.3 47 1278.7 39 1331.1 52 1389.6 46 1440.0 55 L1440 100Z"/></svg>';
  $$("[data-ridge]").forEach(function (el) { el.innerHTML = RIDGE; });

  /* Menu on phones */
  var btn = $(".menu-btn"), nav = $("#nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Close" : "Menu";
    });
  }

  /* Links to the Tattoo site and band email come from site-data.js */
  if (typeof TATTOO_URL !== "undefined") $$("[data-tattoo]").forEach(function (a) { a.href = TATTOO_URL; });
  if (typeof BAND_EMAIL !== "undefined") $$("[data-email]").forEach(function (a) {
    var subj = a.getAttribute("data-email");
    a.href = "mailto:" + BAND_EMAIL + (subj ? "?subject=" + encodeURIComponent(subj) : "");
    if (!a.textContent.trim()) a.textContent = BAND_EMAIL;
  });
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Events (Home) ---------- */
  var evList = $("#events");
  if (evList && typeof EVENTS !== "undefined") {
    var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var today = new Date(); today.setHours(0, 0, 0, 0);
    function d(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
    var upcoming = EVENTS.filter(function (e) { return d(e.end || e.date) >= today; })
      .sort(function (a, b) { return d(a.date) - d(b.date); });
    if (!upcoming.length) {
      evList.innerHTML = '<li><div class="when"><b>Soon</b></div><div><h3>Next season’s dates are on the way</h3><p>Check back in the spring, or follow us on Facebook for the latest.</p></div></li>';
    } else {
      evList.innerHTML = upcoming.map(function (e) {
        var s = d(e.date), en = e.end ? d(e.end) : null;
        var day = en && en.getDate() !== s.getDate() ? s.getDate() + "–" + en.getDate() : s.getDate();
        var days = Math.round((s - today) / 864e5);
        var tag = days <= 0 ? "On now" : days === 1 ? "Tomorrow" : days < 60 ? "In " + days + " days" : "Save the date";
        return '<li' + (e.big ? ' class="big"' : '') + '><div class="when"><b>' + day + '</b><span>' + MONTHS[s.getMonth()] + " " + s.getFullYear() + '</span></div>' +
          '<div><h3>' + esc(e.name) + '</h3><p>' + esc(e.place) + (e.note ? " — " + esc(e.note) : "") + '</p></div>' +
          '<span class="tag">' + tag + '</span></li>';
      }).join("");
    }
  }
  var reg = $("#regulars");
  if (reg && typeof REGULARS !== "undefined") {
    reg.innerHTML = REGULARS.map(function (r) { return "<li>" + esc(r.name) + " <small>" + esc(r.when) + "</small></li>"; }).join("");
  }

  /* ---------- Members (Our Story) ---------- */
  var dlg = $("#bio");
  function initials(n) { return n.replace(/^The /, "").split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2); }
  function card(m, i) {
    var img = m.photo ? '<img src="img/members/' + esc(m.photo) + '" alt="" loading="lazy" onerror="this.remove()">' : "";
    return '<button class="member" type="button" data-i="' + i + '"><div class="ph"><span class="initials" aria-hidden="true">' + esc(initials(m.name)) + "</span>" + img + "</div>" +
      "<b>" + esc(m.name) + "</b><span>" + esc(m.role) + "</span>" + (m.since ? "<em>Member since " + esc(m.since) + "</em>" : "") + "</button>";
  }
  if (typeof MEMBERS !== "undefined") {
    ["lead", "pipes", "drums"].forEach(function (g) {
      var box = $("#members-" + g);
      if (!box) return;
      box.innerHTML = MEMBERS.map(function (m, i) { return m.group === g ? card(m, i) : ""; }).join("");
    });
    $$(".member").forEach(function (b) {
      b.addEventListener("click", function () {
        var m = MEMBERS[+b.getAttribute("data-i")];
        var qa = [["First event with the band", m.first], ["Started learning", m.age], ["First tune learned", m.tune],
          ["Away from the band", m.hobbies], ["Favourite tune or set", m.fav], ["Least favourite tune", m.least]]
          .filter(function (r) { return r[1]; })
          .map(function (r) { return "<dt>" + r[0] + "</dt><dd>" + esc(r[1]) + "</dd>"; }).join("");
        $("#bio-body").innerHTML =
          '<div class="bio">' + (m.photo ? '<img src="img/members/' + esc(m.photo) + '" alt="' + esc(m.name) + '">' : '<div></div>') +
          '<div class="inner"><h3 id="bio-title">' + esc(m.name) + '</h3><p class="role">' + esc(m.role) + (m.since ? ", member since " + esc(m.since) : "") + "</p>" +
          (qa ? "<dl>" + qa + "</dl>" : "<p>Profile coming soon.</p>") + "</div></div>";
        dlg.showModal();
      });
    });
  }
  /* Photo lightbox (history trail) */
  var lb = $("#lightbox");
  $$("[data-full]").forEach(function (b) {
    b.addEventListener("click", function () {
      $("#lightbox-img").src = b.getAttribute("data-full");
      $("#lightbox-img").alt = b.getAttribute("data-cap") || "";
      $("#lightbox-cap").textContent = b.getAttribute("data-cap") || "";
      lb.showModal();
    });
  });
  $$("dialog").forEach(function (dl) {
    dl.addEventListener("click", function (e) { if (e.target === dl || e.target.classList.contains("close")) dl.close(); });
  });

  /* ---------- Listen & Watch ---------- */
  var tr = $("#tracks");
  if (tr && typeof TRACKS !== "undefined") {
    tr.innerHTML = TRACKS.map(function (t, i) {
      return '<li><span class="n">' + (i + 1) + '</span><div><b>' + esc(t.title) + '</b><small>Played by ' + esc(t.players) + '</small></div>' +
        '<audio controls preload="none" src="audio/' + esc(t.file) + '">Your browser can’t play this recording.</audio></li>';
    }).join("");
  }
  var vids = $("#videos");
  if (vids && typeof VIDEOS !== "undefined") {
    vids.innerHTML = VIDEOS.map(function (v) {
      var inner = v.youtube
        ? '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(v.youtube) + '" title="' + esc(v.title) + '" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>'
        : '<img src="img/gallery/' + esc(v.poster) + '" alt="" loading="lazy"><span class="soon">Video coming soon</span>';
      return '<div class="video"><div class="frame">' + inner + '</div><h3>' + esc(v.title) + '</h3><p>' + esc([v.year, v.note].filter(Boolean).join(", ")) + "</p></div>";
    }).join("");
  }

  /* ---------- Booking form: opens the visitor's email app ---------- */
  var form = $("#enquiry");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = function (n) { return (form.elements[n].value || "").trim(); };
      var body = [
        "Name: " + f("name"), "Phone or email: " + f("contact"), "Looking for: " + f("type"),
        "Date: " + (f("date") || "Not sure yet"), "Time: " + (f("time") || "Not sure yet"),
        "Occasion: " + f("occasion"), "Where: " + f("where"), "", f("details")
      ].join("\n");
      window.location.href = "mailto:" + BAND_EMAIL + "?subject=" + encodeURIComponent("Booking request: " + f("type") + (f("date") ? ", " + f("date") : "")) + "&body=" + encodeURIComponent(body);
      $("#sent").hidden = false;
    });
  }
})();
