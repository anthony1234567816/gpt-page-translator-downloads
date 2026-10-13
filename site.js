(() => {
  'use strict';
  const config = window.GPT_SITE_RELEASE || {};
  const prefix = 'https://github.com/anthony1234567816/gpt-page-translator-downloads/';
  const safeVersion = value => typeof value === 'string' && /^\d+\.\d+\.\d+$/.test(value);
  const verifiedLink = (kind, value) => {
    if (typeof value !== 'string' || !safeVersion(config.helperVersion)) return false;
    try {
      const url = new URL(value);
      if (url.origin !== 'https://github.com' || url.username || url.password || url.search || url.hash) return false;
      const base = prefix + 'releases/';
      const version = config.helperVersion;
      const suffix = {exe:`download/v${version}/GPT-Page-Translator-Windows-x64-Setup-${version}.exe`,zip:`download/v${version}/GPT-Page-Translator-Windows-x64-${version}.zip`,sha256:`download/v${version}/SHA256SUMS-${version}.txt`,release:`tag/v${version}`}[kind];
      return Boolean(suffix) && url.href === base + suffix;
    } catch { return false; }
  };
  for (const [selector,value] of [['[data-helper-version]',config.helperVersion],['[data-extension-version]',config.extensionVersion]]) {
    if (safeVersion(value)) document.querySelectorAll(selector).forEach(el => { el.textContent = value; });
  }
  const ready = config.published === true && ['exe','zip','sha256','release'].every(kind => verifiedLink(kind,config[kind]));
  if (ready) {
    document.querySelectorAll('[data-download]').forEach(el => {
      const kind = el.dataset.download;
      if (!verifiedLink(kind,config[kind])) return;
      const link = document.createElement('a');
      link.href = config[kind]; link.className = el.className;
      link.textContent = {exe:'Windows 보조 프로그램 다운로드 ↓',zip:'Windows ZIP',sha256:'SHA-256'}[kind];
      if (kind !== 'exe') { link.target='_blank'; link.rel='noopener noreferrer'; }
      el.replaceWith(link);
    });
    document.querySelectorAll('[data-release-link]').forEach(el => { el.href=config.release; });
    document.querySelectorAll('[data-release-status]').forEach(el => { el.textContent=`v${config.helperVersion} · 공식 GitHub Release`; });
    document.querySelectorAll('.release-footnote').forEach(el => { el.textContent=`보조 프로그램 v${config.helperVersion}의 파일과 SHA-256은 위 GitHub Release에서 확인할 수 있습니다.`; });
  }
  const images = {
    source:{src:'assets/source.webp',alt:'실제 확장에서 외국어 페이지를 감지해 번역 시작을 안내하는 영어 샘플 기사 화면',caption:'실제 확장의 외국어 감지 안내 화면입니다. 위 버튼으로 번역 결과도 확인할 수 있습니다.'},
    translated:{src:'assets/translated.webp',alt:'실제 GPT Page Translator가 영어 샘플 기사를 한국어로 번역한 화면',caption:'같은 샘플 기사를 실제 확장으로 번역한 결과입니다. 스크린샷 내부 UI와 문구는 수정하지 않았습니다.'}
  };
  const image=document.getElementById('comparison-image'),caption=document.getElementById('comparison-caption');
  document.querySelectorAll('[data-screen]').forEach(button => {
    button.addEventListener('click',() => {
      const state=images[button.dataset.screen]; if(!state||!image) return;
      image.src=state.src;image.alt=state.alt;if(caption)caption.textContent=state.caption;
      document.querySelectorAll('[data-screen]').forEach(other => { other.setAttribute('aria-pressed',String(other===button)); });
    });
  });
  document.querySelectorAll('.mobile-menu').forEach(menu => {
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click',() => menu.removeAttribute('open')));
    menu.addEventListener('keydown',event => {if(event.key==='Escape'){menu.removeAttribute('open');menu.querySelector('summary')?.focus();}});
  });
  const platform = navigator.userAgentData?.platform || navigator.platform || '';
  if (/mac/i.test(platform)) document.querySelectorAll('[data-mac-notice]').forEach(el => {el.hidden=false;});
})();
