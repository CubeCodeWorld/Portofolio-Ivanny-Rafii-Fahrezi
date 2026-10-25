const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>80)});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id&&id!=='#'){const el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}}));
