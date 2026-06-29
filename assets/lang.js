
(function(){
  function setLang(lang){
    if(lang !== 'en') lang = 'vi';
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    try{ localStorage.setItem('vdtvpn_lang', lang); }catch(e){}
    document.querySelectorAll('[data-set-lang]').forEach(function(btn){
      btn.setAttribute('aria-pressed', btn.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });
  }
  var saved = 'vi';
  try{ saved = localStorage.getItem('vdtvpn_lang') || ((navigator.language || '').toLowerCase().startsWith('vi') ? 'vi' : 'en'); }catch(e){}
  setLang(saved);
  document.addEventListener('click', function(e){
    var btn = e.target.closest('[data-set-lang]');
    if(btn) setLang(btn.getAttribute('data-set-lang'));
  });
})();
