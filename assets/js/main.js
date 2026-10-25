const iconMap={mark:`<svg class="icon" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg>`,arrow:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,up:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>`,star:`<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"/></svg>`,globe:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="12" cy="12" r="9.25"/><path d="M12 2.75c2.6 2.3 4 5.8 4 9.25s-1.4 6.95-4 9.25c-2.6-2.3-4-5.8-4-9.25s1.4-6.95 4-9.25zM2.75 12h18.5"/></svg>`,x:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 4l16 16M20 4 4 20"/></svg>`,dot:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none"/></svg>`,menu:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,whatsapp:`<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.84 9.84 0 0 0-8.46 14.86L2.05 22l5.28-1.48A9.91 9.91 0 1 0 12.04 2Zm0 17.99a8.06 8.06 0 0 1-4.11-1.13l-.29-.17-3.13.88.84-3.05-.19-.31a8.07 8.07 0 1 1 6.88 3.78Zm4.43-6.05c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/></svg>`,email:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,instagram:`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`};
document.querySelectorAll('[data-icon]').forEach(el=>{const k=el.dataset.icon;if(iconMap[k])el.innerHTML=iconMap[k]});

let currentLang=localStorage.getItem('ivannyLang')==='id'?'id':'en';
document.documentElement.lang=currentLang;
const I18N={
  'Skip to content':'Lewati ke konten',
  'Development discipline, QA precision, and clean delivery.':'Disiplin pengembangan, ketelitian QA, dan delivery yang rapi.',
  'Loading':'Memuat',
  'Home':'Beranda',
  'Work':'Karya',
  'Skills':'Keahlian',
  'Profile':'Profil',
  'Contact':'Kontak',
  'Local time':'Waktu lokal',
  'Menu':'Menu',
  'Full Stack Developer · Software Tester':'Full Stack Developer · Software Tester',
  'Build clean.':'Bangun dengan rapi.',
  'Test deeply.':'Uji secara menyeluruh.',
  'Ship confidently.':'Rilis dengan percaya diri.',
  'Development + QA mindset':'Mindset Development + QA',
  "Let's Talk":'Mari Bicara',
  'View Work':'Lihat Karya',
  'Full Stack':'Full Stack',
  'Frontend to deployment.':'Dari frontend hingga deployment.',
  'Quality Assurance':'Quality Assurance',
  'Validate every flow.':'Validasi setiap alur.',
  'Problem Solving':'Problem Solving',
  'Debug with context.':'Debug dengan konteks.',
  'Experience with':'Pengalaman dengan',
  'Core skills':'Keahlian utama',
  'Live Demo':'Live Demo',
  'QA Report':'Laporan QA',
  'See more':'Lihat lainnya',
  'Show less':'Tampilkan lebih sedikit',
  'Information Systems · S.Kom':'Sistem Informasi · S.Kom',
  'Pondok Aren, Tangerang South':'Pondok Aren, Tangerang Selatan',
  'Scroll to explore ↓':'Gulir untuk menjelajah ↓',
  'Building across frontend, backend, databases, testing, and deployment.':'Membangun dari frontend, backend, database, testing, hingga deployment.',
  'Find me online':'Temukan saya online',
  'Code':'Kode',
  'Test':'Uji',
  'Ship':'Rilis',
  'Experience':'Pengalaman',
  'Selected Work':'Karya Pilihan',
  'Full Stack + QA — 2026':'Full Stack + QA — 2026',
  'Full Stack Development — 2026':'Pengembangan Full Stack — 2026',
  'Developed an end-to-end furniture ordering system covering ready-stock catalog, custom consultation, QRIS payment verification, production progress, supervisor QC, shipment, and customer order tracking.':'Mengembangkan sistem pemesanan furniture end-to-end yang mencakup katalog ready stock, konsultasi custom, verifikasi pembayaran QRIS, progress produksi, QC supervisor, pengiriman, dan tracking pesanan customer.',
  'Developed and tested a web-based financial management system, validating authentication, transaction workflows, responsive interfaces, frontend/backend functionality, and system performance before deployment.':'Mengembangkan dan menguji sistem manajemen keuangan berbasis web dengan memvalidasi autentikasi, alur transaksi, antarmuka responsif, fungsi frontend/backend, serta performa sistem sebelum deployment.',
  'Functional Testing':'Functional Testing',
  'Responsive UI':'UI Responsif',
  'Quality Assurance — 2025':'Quality Assurance — 2025',
  'Performed functional testing against requirements, identified bugs and functional issues, and prepared testing reports to support system improvement.':'Melakukan functional testing berdasarkan requirement, mengidentifikasi bug dan masalah fungsional, serta menyiapkan laporan pengujian untuk mendukung peningkatan sistem.',
  'Manual Testing':'Manual Testing',
  'Bug Reporting':'Pelaporan Bug',
  'Requirements':'Requirement',
  'Web Development — 2024–2025':'Pengembangan Web — 2024–2025',
  'Developed and maintained web-based applications using PHP, Laravel, CodeIgniter, React, and Node.js, including feature implementation, debugging, and performance improvement.':'Mengembangkan dan memelihara aplikasi berbasis web menggunakan PHP, Laravel, CodeIgniter, React, dan Node.js, termasuk implementasi fitur, debugging, dan peningkatan performa.',
  'Web Development — 2024':'Pengembangan Web — 2024',
  'Developed and maintained website functionality, improved responsive frontend features, created an activity schedule management system, and built a company profile website.':'Mengembangkan dan memelihara fungsi website, meningkatkan fitur frontend responsif, membuat sistem pengelolaan jadwal kegiatan, serta membangun website company profile.',
  'Frontend':'Frontend',
  'Responsive Web':'Web Responsif',
  'Web Systems':'Sistem Web',
  'What I do best':'Keahlian utama saya',
  'Full Stack Development':'Full Stack Development',
  'React, Laravel, Node.js, Golang, Python, SQL, WordPress, Tailwind CSS.':'React, Laravel, Node.js, Golang, Python, SQL, WordPress, Tailwind CSS.',
  'Responsive Frontend':'Frontend Responsif',
  'Interfaces designed to stay clear and usable across screen sizes.':'Antarmuka yang dirancang agar tetap jelas dan nyaman digunakan di berbagai ukuran layar.',
  'Manual and functional testing, bug identification, test reporting, SRS understanding.':'Manual dan functional testing, identifikasi bug, test reporting, serta pemahaman SRS.',
  'Debugging & Delivery':'Debugging & Delivery',
  'Requirement analysis, debugging, database integration, performance improvement, deployment.':'Analisis requirement, debugging, integrasi database, peningkatan performa, dan deployment.',
  'By the numbers':'Dalam angka',
  'Breadth across development and testing.':'Cakupan pengalaman development dan testing.',
  'Core web technologies':'Teknologi web utama',
  'Databases listed in QA stack':'Database dalam stack QA',
  'QA capabilities':'Kemampuan QA',
  'Core disciplines: Dev + QA':'Disiplin utama: Dev + QA',
  'Have a role or project in mind?':'Punya posisi atau proyek?',
  "Let's build it.":'Mari kita bangun.',
  'Start a conversation':'Mulai percakapan',
  'Full Stack Developer and Software Tester with an Information Systems background and hands-on experience in web development, QA, debugging, documentation, and delivery.':'Full Stack Developer dan Software Tester berlatar Sistem Informasi dengan pengalaman langsung dalam pengembangan web, QA, debugging, dokumentasi, dan delivery.',
  'Explore':'Jelajahi',
  'Email':'Email',
  'WhatsApp':'WhatsApp',
  'Connect':'Terhubung',
  '© 2026 Ivanny Rafii Fahrezi. All rights reserved.':'© 2026 Ivanny Rafii Fahrezi. Hak cipta dilindungi.',
  'Top':'Atas',
  'Close':'Tutup',
  'Local time —':'Waktu lokal —',
  'Start a conversation →':'Mulai percakapan →',
  "Let's connect":'Mari terhubung',
  'Contact me directly.':'Hubungi saya langsung.',
  'Choose WhatsApp, email, or Instagram — no contact form or third-party submission service.':'Pilih WhatsApp, email, atau Instagram — tanpa form kontak atau layanan pengiriman pihak ketiga.',
  'Client Company Profile · Node.js — 2026':'Company Profile Klien · Node.js — 2026',
  'Designed and developed a responsive company profile for a coffee venue in Puncak, combining authentic brand imagery, venue storytelling, dynamic content delivery, location discovery, and a customer inquiry flow.':'Merancang dan mengembangkan company profile responsif untuk venue kopi di Puncak, memadukan visual brand autentik, storytelling venue, penyajian konten dinamis, informasi lokasi, dan alur pertanyaan pelanggan.',
  'WordPress Hospitality · Client Project':'WordPress Hospitality · Proyek Klien',
  'Designed and delivered a commercial WordPress hospitality website for a real client in Puncak, combining Elementor, WooCommerce, PHP, responsive frontend work, and external booking integration before final handover to the business.':'Merancang dan menyerahkan website hospitality komersial berbasis WordPress untuk klien nyata di Puncak, memadukan Elementor, WooCommerce, PHP, frontend responsif, dan integrasi booking eksternal sebelum handover akhir kepada bisnis.',
  'View Project':'Lihat Proyek',
  'Live Website':'Website Aktif',
  'Real Client Project · Industrial Website':'Proyek Klien Nyata · Website Industri',
  'Designed and developed a responsive client website for construction and metal fabrication services, showcasing rolling doors, garage doors, glass partitions, stainless-steel work, laser cutting, business booths, and direct customer contact flows.':'Merancang dan mengembangkan website klien yang responsif untuk layanan konstruksi dan fabrikasi logam, menampilkan rolling door, pintu garasi, partisi kaca, pekerjaan stainless steel, laser cutting, booth usaha, dan alur kontak pelanggan langsung.',
  'Our Clients & Partners':'Klien & Partner Kami',
  'Available balance':'Saldo tersedia',
  'this month':'bulan ini',
  'Income':'Pemasukan',
  'Latest transaction':'Transaksi terbaru',
  'Student Request':'Pengajuan Mahasiswa',
  'Passed':'Lulus',
  'Requirement validated':'Requirement tervalidasi',
  'Functional flow checked':'Alur fungsional diperiksa',
  'Verification':'Verifikasi',
  'Real Client Project · Hospitality':'Proyek Klien Nyata · Hospitality',
  'Live Website ↗':'Website Aktif ↗',
  'View Project ↗':'Lihat Proyek ↗',

};
const ABOUT_COPY={
  en:'I build and test web products end to end — from responsive interfaces and business logic to database integration, debugging, functional validation, and production delivery.',
  id:'Saya membangun dan menguji produk web secara end to end — dari antarmuka responsif dan business logic hingga integrasi database, debugging, validasi fungsional, dan delivery ke production.'
};
function translateText(text){return currentLang==='id'?(I18N[text]||text):text}

function applyAdaptiveGrid(){const FONT_BASE=16,baseWidth=1920,coef=.6666,w=innerWidth,widthReduction=((baseWidth-w)/baseWidth)*100,size=FONT_BASE-(FONT_BASE*(widthReduction*coef))/100;if(size>FONT_BASE)document.documentElement.style.fontSize=size+'px';else document.documentElement.style.removeProperty('font-size')}applyAdaptiveGrid();addEventListener('resize',applyAdaptiveGrid);
let lenis={stop(){},start(){},raf(){}};import('lenis').then(({default:Lenis})=>{lenis=new Lenis({smoothWheel:true});const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}).catch(()=>console.info('Lenis unavailable; native scroll enabled.'));window.scrollTo(0,0);
let lockCount=0;function stopScroll(){lockCount++;lenis.stop?.();document.documentElement.classList.add('no-scroll')}function startScroll(){lockCount=Math.max(0,lockCount-1);if(!lockCount){lenis.start?.();document.documentElement.classList.remove('no-scroll')}}
function scrollToId(id){const el=document.getElementById(id);if(!el)return;const top=el.getBoundingClientRect().top+scrollY;setTimeout(()=>window.scrollTo({top,behavior:'smooth'}),40)}
const loader=document.getElementById('loader'),fill=document.getElementById('fill'),counter=document.getElementById('counter');stopScroll();let ready=false;const FILL_MS=1300,start=performance.now();const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;function loadTick(now){const t=Math.min(1,(now-start)/FILL_MS),p=Math.round(ease(t)*100);fill.style.width=p+'%';counter.textContent=String(p).padStart(3,'0');if(t<1)requestAnimationFrame(loadTick);else{setTimeout(()=>loader.classList.add('exit'),80);setTimeout(()=>{ready=true;loader.remove();startScroll();playHero()},800)}}requestAnimationFrame(loadTick);
function playHero(){const d=(el,delay)=>setTimeout(()=>el?.classList.add('is-ready'),delay);document.getElementById('header').classList.add('ready');setTimeout(()=>document.getElementById('heroWatermark').classList.add('ready'),300);d(document.getElementById('heroEyebrow'),200);setTimeout(()=>{const h=document.getElementById('heroHeadline');h.classList.add('play');[...h.querySelectorAll('.inner')].forEach((x,i)=>x.style.transitionDelay=(i*120)+'ms')},250);d(document.getElementById('heroCard'),400);d(document.getElementById('partners'),550);d(document.getElementById('heroRating'),650);d(document.getElementById('heroCtas'),750);d(document.getElementById('statusBar'),900)}

const stickyHeader=document.getElementById('header');
function syncStickyHeader(){stickyHeader?.classList.toggle('scrolled',window.scrollY>36)}
window.addEventListener('scroll',syncStickyHeader,{passive:true});
syncStickyHeader();

function updateClock(){const d=new Date(),h=d.getHours()%12||12,m=String(d.getMinutes()).padStart(2,'0'),ap=d.getHours()>=12?'pm':'am',monthsEn=['January','February','March','April','May','June','July','August','September','October','November','December'],monthsId=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],months=currentLang==='id'?monthsId:monthsEn,time=`${h}:${m}${ap}`,date=currentLang==='id'?`${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`:`${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;document.getElementById('clockTime').textContent=time;document.getElementById('clockDate').textContent=date;document.getElementById('overlayTime').textContent=time}updateClock();setInterval(updateClock,1000);
const navOverlay=document.getElementById('navOverlay'),menuBtn=document.getElementById('menuBtn'),closeMenu=document.getElementById('closeMenu');function openMenu(){navOverlay.classList.add('open');stopScroll();navOverlay.querySelectorAll('.overlay-nav button').forEach((b,i)=>b.style.transitionDelay=(80+i*45)+'ms')}function shutMenu(){navOverlay.classList.remove('open');startScroll()}menuBtn.onclick=openMenu;closeMenu.onclick=shutMenu;
const modal=document.getElementById('contactModal'),modalClose=document.getElementById('modalClose');function openModal(){if(navOverlay.classList.contains('open')){navOverlay.classList.remove('open');startScroll()}modal.classList.add('open');stopScroll();setTimeout(()=>modal.querySelector('.contact-choice')?.focus(),250)}function closeModal(){modal.classList.remove('open');startScroll()}modalClose.onclick=closeModal;modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(modal.classList.contains('open'))closeModal();else if(navOverlay.classList.contains('open'))shutMenu()}});
document.querySelectorAll('[data-contact]').forEach(x=>x.addEventListener('click',openModal));document.querySelectorAll('[data-scroll]').forEach(x=>x.addEventListener('click',()=>{if(navOverlay.classList.contains('open'))shutMenu();scrollToId(x.dataset.scroll)}));const slideVisuals={
  fullstack:`<svg viewBox="0 0 64 64" role="img" aria-label="Full Stack Development"><rect class="visual-soft" x="7" y="10" width="50" height="44" rx="11"></rect><rect class="visual-stroke" x="12" y="15" width="40" height="30" rx="5"></rect><path class="visual-stroke" d="M12 22h40"></path><circle class="visual-fill" cx="17" cy="18.5" r="1.3"></circle><circle class="visual-fill" cx="21" cy="18.5" r="1.3" opacity=".7"></circle><path class="visual-stroke" d="m25 29-5 4 5 4M39 29l5 4-5 4M35 26l-6 14"></path><path class="visual-stroke visual-white" d="M24 50h16"></path></svg>`,
  qa:`<svg viewBox="0 0 64 64" role="img" aria-label="Quality Assurance"><path class="visual-soft" d="M32 7 52 15v15c0 13-8.1 22.7-20 27-11.9-4.3-20-14-20-27V15L32 7Z"></path><path class="visual-stroke" d="M32 10 49 17v13c0 10.8-6.4 19.1-17 23.3C21.4 49.1 15 40.8 15 30V17l17-7Z"></path><path class="visual-stroke" d="m23 31 6 6 12-13"></path><circle class="visual-fill" cx="32" cy="31" r="2.1"></circle></svg>`,
  debug:`<svg viewBox="0 0 64 64" role="img" aria-label="Problem Solving and Debugging"><circle class="visual-soft" cx="32" cy="31" r="24"></circle><path class="visual-stroke" d="M24 24h16v20H24zM28 20h8M32 16v4M19 28h5M19 35h5M40 28h5M40 35h5M28 28v8M36 28v8"></path><circle class="visual-stroke" cx="42.5" cy="43.5" r="7.5"></circle><path class="visual-stroke" d="m48 49 6 6"></path><path class="visual-stroke" d="m39.5 43.5 2 2 4-4"></path></svg>`
};
const slides=[{caption:'Full Stack',title:'Frontend to deployment.',visual:'fullstack'},{caption:'Quality Assurance',title:'Validate every flow.',visual:'qa'},{caption:'Problem Solving',title:'Debug with context.',visual:'debug'}],cap=document.getElementById('slideCaption'),ttl=document.getElementById('slideTitle'),dots=document.getElementById('dots'),heroSlideVisual=document.getElementById('heroSlideVisual');let slide=0;
function renderSlideVisual(key,animate=true){if(!heroSlideVisual)return;const apply=()=>{heroSlideVisual.innerHTML=slideVisuals[key]||slideVisuals.fullstack;heroSlideVisual.classList.remove('swap-out')};if(!animate){apply();return}heroSlideVisual.classList.add('swap-out');setTimeout(apply,150)}
slides.forEach((_,i)=>{const d=document.createElement('span');d.className='dot'+(i===0?' active':'');dots.appendChild(d)});
function setSlide(step){slide=(slide+step+slides.length)%slides.length;ttl.style.opacity='0';ttl.style.transform=`translateY(${step>0?12:-12}px)`;renderSlideVisual(slides[slide].visual,true);setTimeout(()=>{cap.textContent=translateText(slides[slide].caption);ttl.textContent=translateText(slides[slide].title);ttl.style.transform=`translateY(${step>0?-12:12}px)`;requestAnimationFrame(()=>{ttl.style.opacity='1';ttl.style.transform='translateY(0)'})},120);[...dots.children].forEach((d,i)=>d.classList.toggle('active',i===slide))}
document.getElementById('nextSlide').onclick=e=>{e.stopPropagation();setSlide(1)};document.getElementById('prevSlide').onclick=e=>{e.stopPropagation();setSlide(-1)};document.getElementById('heroCardClick').onclick=()=>setSlide(1);renderSlideVisual(slides[0].visual,false);
const about=document.getElementById('aboutWords'),txt=about.dataset.text;about.innerHTML=txt.split(' ').map((w,i)=>`<span class="word ${i>14?'muted-word':''}">${w}</span>`).join(' ');
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target;if(el.classList.contains('reveal-heading')){el.querySelectorAll('.inner').forEach((x,i)=>x.style.transitionDelay=(i*100)+'ms');el.classList.add('play')}else if(el===about){about.dataset.revealed='1';[...about.querySelectorAll('.word')].forEach((w,i)=>setTimeout(()=>w.classList.add('play'),i*35))}else if(el.classList.contains('band')){[...el.children].forEach((x,i)=>setTimeout(()=>x.classList.add('is-ready'),i*120))}else if(el.classList.contains('work-grid')){[...el.children].forEach((x,i)=>setTimeout(()=>x.classList.add('is-ready'),i*90))}else if(el.closest?.('#services')&&el.tagName==='UL'){[...el.children].forEach((x,i)=>setTimeout(()=>x.classList.add('is-ready'),i*80))}else if(el.classList.contains('stats-panel')){el.classList.add('is-ready');el.querySelectorAll('.stat-item').forEach((x,i)=>setTimeout(()=>x.classList.add('is-ready'),i*90))}else el.classList.add('in');io.unobserve(el)}),{threshold:.18});document.querySelectorAll('.reveal,.reveal-heading,.about-location,.about-footer,.band,.work-grid,#services> .shell > ul,.stats-panel').forEach(el=>io.observe(el));io.observe(about);
const statItems=[...document.querySelectorAll('.stat-item')];let lastStat=0;function updateStats(){const now=performance.now();if(now-lastStat<30)return;lastStat=now;const vh=innerHeight;statItems.forEach(el=>{const r=el.getBoundingClientRect(),start=vh,end=vh/2-r.height/2,p=Math.max(0,Math.min(1,(start-r.top)/(start-end))),v=Math.round(p*Number(el.dataset.value));el.querySelector('.stat-num span').textContent=v});}addEventListener('scroll',updateStats,{passive:true});addEventListener('resize',updateStats);updateStats();

const i18nEntries=[];
function captureI18nTextNodes(){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let node;
  while((node=walker.nextNode())){
    if(node.parentElement?.closest('#aboutWords'))continue;
    const raw=node.nodeValue,key=raw.trim();
    if(I18N[key])i18nEntries.push({node,en:key,prefix:(raw.match(/^\s*/)||[''])[0],suffix:(raw.match(/\s*$/)||[''])[0]});
  }
}
function syncSkillsToggleLabel(){
  const card=document.getElementById('partners'),label=document.getElementById('skillsMoreLabel'),btn=document.getElementById('skillsMoreBtn');
  if(!card||!label||!btn)return;
  const expanded=card.classList.contains('expanded');
  label.textContent=expanded?(currentLang==='id'?'Tampilkan lebih sedikit':'Show less'):(currentLang==='id'?'Lihat lainnya':'See more');
  btn.setAttribute('aria-expanded',expanded?'true':'false');
}
document.getElementById('skillsMoreBtn')?.addEventListener('click',()=>{
  document.getElementById('partners')?.classList.toggle('expanded');
  syncSkillsToggleLabel();
});

function renderAboutLanguage(){
  const aboutEl=document.getElementById('aboutWords');
  if(!aboutEl)return;
  const words=ABOUT_COPY[currentLang].split(' '),muteFrom=currentLang==='id'?16:15,revealed=aboutEl.dataset.revealed==='1';
  aboutEl.dataset.text=ABOUT_COPY[currentLang];
  aboutEl.innerHTML=words.map((w,i)=>`<span class="word ${i>=muteFrom?'muted-word':''}${revealed?' play':''}">${w}</span>`).join(' ');
}
function applyLanguage(lang,save=true){
  currentLang=lang==='id'?'id':'en';
  document.documentElement.lang=currentLang;
  i18nEntries.forEach(entry=>{
    if(!entry.node.isConnected)return;
    const value=currentLang==='id'?(I18N[entry.en]||entry.en):entry.en;
    entry.node.nodeValue=entry.prefix+value+entry.suffix;
  });
  renderAboutLanguage();
  document.querySelectorAll('[data-en-placeholder]').forEach(el=>{el.placeholder=currentLang==='id'?(el.dataset.idPlaceholder||el.dataset.enPlaceholder):el.dataset.enPlaceholder});
  document.title=currentLang==='id'?'Ivanny Rafii Fahrezi — Full Stack Developer & Software Tester':'Ivanny Rafii Fahrezi — Full Stack Developer & Software Tester';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content=currentLang==='id'?'Portofolio Ivanny Rafii Fahrezi — Full Stack Developer dan Software Tester dengan pengalaman pengembangan web, QA, debugging, UI responsif, dan deployment.':'Portfolio of Ivanny Rafii Fahrezi — Full Stack Developer and Software Tester with hands-on web development, QA, debugging, responsive UI, and deployment experience.';
  const switcher=document.getElementById('langSwitch');
  if(switcher){
    switcher.querySelector('.lang-en')?.classList.toggle('active',currentLang==='en');
    switcher.querySelector('.lang-id')?.classList.toggle('active',currentLang==='id');
    switcher.setAttribute('aria-label',currentLang==='en'?'Switch language to Indonesian':'Ganti bahasa ke Inggris');
    switcher.title=currentLang==='en'?'Switch to Indonesian':'Ganti ke Bahasa Inggris';
  }
  if(typeof slides!=='undefined'&&typeof slide!=='undefined'){
    cap.textContent=translateText(slides[slide].caption);
    ttl.textContent=translateText(slides[slide].title);
    if(typeof renderSlideVisual==='function')renderSlideVisual(slides[slide].visual,false);
  }
  syncSkillsToggleLabel();
  updateClock();
  if(save)localStorage.setItem('ivannyLang',currentLang);
}
const placeholderMap={
  'Your name':'Nama Anda',
  'you@company.com':'anda@perusahaan.com',
  'A few words about the role, project, timeline, or collaboration.':'Ceritakan singkat tentang posisi, proyek, timeline, atau kolaborasi.'
};
document.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(el=>{el.dataset.enPlaceholder=el.placeholder;el.dataset.idPlaceholder=placeholderMap[el.placeholder]||el.placeholder});
captureI18nTextNodes();
document.getElementById('langSwitch')?.addEventListener('click',()=>applyLanguage(currentLang==='en'?'id':'en'));
applyLanguage(currentLang,false);
// CV files are served as normal PDF assets and open in the browser PDF viewer.
// Hero photo is intentionally static; cursor-driven reveal removed.
