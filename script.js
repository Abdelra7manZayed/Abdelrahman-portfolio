document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const loader = document.getElementById('pageLoader');
  const header = document.querySelector('.header');
  const themeToggle = document.getElementById('themeToggle');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const floatResume = document.getElementById('floatResume');
  const backTop = document.getElementById('backTop');
  const cursorGlow = document.getElementById('cursorGlow');
  const cursorRing = document.getElementById('cursorRing');
  const cursorDot = document.getElementById('cursorDot');

  window.addEventListener('load', () => setTimeout(() => loader?.classList.add('hidden'), 300));
  if (document.readyState === 'complete') loader?.classList.add('hidden');

  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
  themeToggle?.addEventListener('click', () => {
    const next = (root.getAttribute('data-theme') || 'dark') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next); localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
  });

  navToggle?.addEventListener('click', () => { navMenu?.classList.toggle('open'); navToggle.classList.toggle('open'); });
  navMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { navMenu.classList.remove('open'); navToggle?.classList.remove('open'); }));

  const onScroll = () => { const y = scrollY; header?.classList.toggle('scrolled', y > 20); floatResume?.classList.toggle('visible', y > 450); backTop?.classList.toggle('visible', y > 600); };
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
  backTop?.addEventListener('click', () => scrollTo({top:0, behavior:'smooth'}));

  if (matchMedia('(pointer:fine)').matches) {
    document.body.classList.add('custom-cursor'); let mx=0,my=0,rx=0,ry=0,raf=null;
    document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; if(cursorDot){cursorDot.style.left=mx+'px';cursorDot.style.top=my+'px'} if(cursorGlow){cursorGlow.style.left=mx+'px';cursorGlow.style.top=my+'px'} if(!raf){const tick=()=>{rx+=(mx-rx)*.18;ry+=(my-ry)*.18;if(cursorRing){cursorRing.style.left=rx+'px';cursorRing.style.top=ry+'px'} if(Math.abs(mx-rx)>.3||Math.abs(my-ry)>.3)raf=requestAnimationFrame(tick);else raf=null};raf=requestAnimationFrame(tick)}});
    document.querySelectorAll('a,button,.project-card,.usp-card,.cert-card,.viz-card,.timeline-item,.lead-card,.metric,.stat').forEach(el=>{el.addEventListener('mouseenter',()=>cursorRing?.classList.add('hovering'));el.addEventListener('mouseleave',()=>cursorRing?.classList.remove('hovering'))});
  }

  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => entries.forEach(e => {if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}), {threshold:.08, rootMargin:'0px 0px -40px 0px'});
  revealEls.forEach(el=>observer.observe(el));

  const sections=document.querySelectorAll('section[id]'); const links=document.querySelectorAll('.nav-menu a[href^="#"]');
  const navObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')===`#${e.target.id}`))}),{threshold:.3}); sections.forEach(s=>navObserver.observe(s));

  const profile=document.querySelector('.profile-card');
  if(profile && matchMedia('(pointer:fine)').matches){profile.addEventListener('mousemove',e=>{const r=profile.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;profile.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-6px)`});profile.addEventListener('mouseleave',()=>profile.style.transform='')}

  document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.project-v2').forEach(card=>{card.style.display=(f==='all'||card.dataset.category===f)?'':'none'})}));

  const modal=document.getElementById('demoModal'), video=document.getElementById('demoVideo'), title=document.getElementById('modalTitle');
  document.querySelectorAll('.demo-btn').forEach(btn=>btn.addEventListener('click',()=>{title.textContent=btn.dataset.title;video.src=btn.dataset.video;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');video.play().catch(()=>{})}));
  document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',()=>{video.pause();video.removeAttribute('src');video.load();modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))document.querySelector('[data-close-modal]')?.click()});
});
