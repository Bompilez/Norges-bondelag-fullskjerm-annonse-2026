(function(){
  var d = document;
  var s = d.currentScript || d.getElementsByTagName('script')[d.getElementsByTagName('script').length - 1];
  var params = new URLSearchParams(s.src.split('?')[1] || '');
  var clickURL = params.get('clickUrlParam') || '';

  var i = d.createElement('iframe');
  i.src = 'https://bompilez.github.io/Norges-bondelag/custom.html?click=' + clickURL;
  i.style.border = 'none';
  i.style.width = '100vw';
  i.style.height = '100vh';
  i.setAttribute('frameborder', '0');
  i.setAttribute('scrolling', 'no');
  s.parentNode.replaceChild(i, s);
})();
