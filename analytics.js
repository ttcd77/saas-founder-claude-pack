// analytics.js — localStorage-based privacy-first pageview tracker
// No cookies, no external services, no accounts needed.
// Data stays in the visitor's browser. Dashboard at /analytics.html

(function(){
  if (typeof window === 'undefined') return;

  var KEY_RAW = '_sa_pv_raw';
  var KEY_SUMMARY = '_sa_pv_summary';
  var MAX_RAW = 1000;

  function nowISO(){ return new Date().toISOString(); }

  function getUTMs(){
    var p = new URL(window.location.href).searchParams;
    var u = {};
    ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','ref'].forEach(function(k){
      var v = p.get(k);
      if (v) u[k] = v;
    });
    return u;
  }

  function getReferrer(){
    try {
      var r = document.referrer;
      if (!r) return 'direct';
      var host = new URL(r).hostname.replace(/^www\./,'');
      return host;
    } catch(e){ return 'direct'; }
  }

  function pv(){
    var entry = {
      ts: nowISO(),
      path: window.location.pathname,
      ref: getReferrer(),
      utm: getUTMs(),
      sw: window.screen.width
    };

    // Store raw entries
    try {
      var raw = JSON.parse(localStorage.getItem(KEY_RAW) || '[]');
      raw.push(entry);
      if (raw.length > MAX_RAW) raw = raw.slice(-MAX_RAW);
      localStorage.setItem(KEY_RAW, JSON.stringify(raw));
    } catch(e){}

    // Update summary
    try {
      var s = JSON.parse(localStorage.getItem(KEY_SUMMARY) || '{"total":0,"pages":{},"refs":{},"utms":{},"days":{},"first_ts":null,"last_ts":null}');
      s.total = (s.total || 0) + 1;
      s.last_ts = entry.ts;
      if (!s.first_ts) s.first_ts = entry.ts;

      var page = entry.path || '/';
      s.pages[page] = (s.pages[page] || 0) + 1;

      var ref = entry.ref || 'direct';
      s.refs[ref] = (s.refs[ref] || 0) + 1;

      var day = entry.ts.slice(0,10);
      s.days[day] = (s.days[day] || 0) + 1;

      var utms = entry.utm;
      for (var k in utms){
        if (!s.utms[k]) s.utms[k] = {};
        var v = utms[k];
        s.utms[k][v] = (s.utms[k][v] || 0) + 1;
      }

      localStorage.setItem(KEY_SUMMARY, JSON.stringify(s));
    } catch(e){}
  }

  // Fire on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pv);
  } else {
    pv();
  }
})();
