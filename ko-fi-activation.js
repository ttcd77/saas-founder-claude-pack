// ko-fi-activation.js
// Single activation point: paste your Ko-fi product link into window.__KOFI_CONFIG__.productLink
// and every CTA on every page transforms from "Notify Me" form into a "Buy Now" button.
// No per-page changes needed. Zero-code activation.
(function() {
  var cfg = window.__KOFI_CONFIG__;
  if (!cfg || !cfg.productLink || cfg.productLink.trim() === '') return;

  var productLink = cfg.productLink.trim();
  // Append UTM params for analytics tracking
  var utm = cfg.utmParams || 'utm_source=github_pages&utm_medium=website&utm_campaign=direct_buy';
  var sep = productLink.indexOf('?') === -1 ? '?' : '&';
  var fullLink = productLink + sep + utm;

  var price = cfg.price || '$14';
  var label = cfg.label || 'Buy Now';

  // Buy button HTML — matches site style (dark theme, green accent)
  var buyHtml =
    '<div class="kofi-buy-active" style="text-align:center;">' +
      '<a href="' + fullLink + '" ' +
         'class="cta-btn" ' +
         'target="_blank" ' +
         'rel="noopener" ' +
         'style="font-size:17px;padding:16px 40px;display:inline-block;text-decoration:none;">' +
        label +
      '</a>' +
      '<p style="color:var(--text-muted);font-size:13px;margin-top:10px;">' +
        'Secure payment via Ko-fi. Instant download after purchase. 30-day guarantee.' +
      '</p>' +
    '</div>';

  // Replace all kofi-replace wrappers with buy buttons
  var targets = document.querySelectorAll('.kofi-replace');
  for (var i = 0; i < targets.length; i++) {
    targets[i].innerHTML = buyHtml;
  }
})();
