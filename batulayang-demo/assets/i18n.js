(() => {
  const PAIRS = [["Stay", "Menginap"], ["Experience", "Pengalaman"], ["Facilities", "Fasilitas"], ["Location", "Lokasi"], ["Live Website", "Website Aktif"], ["REAL CLIENT PROJECT · PUNCAK, BOGOR", "PROYEK KLIEN NYATA · PUNCAK, BOGOR"], ["Stay closer", "Menginap lebih dekat"], ["to nature.", "dengan alam."], ["Glamping, cabin, forest air, and slow moments in the highlands of Puncak.", "Glamping, cabin, udara hutan, dan momen yang lebih tenang di dataran tinggi Puncak."], ["Explore the stay", "Jelajahi Penginapan"], ["Visit live site ↗", "Kunjungi website aktif ↗"], ["Client website design", "Desain website klien"], ["Delivered & handed over", "Selesai & sudah handover"], ["SCROLL", "GULIR"], ["A quiet escape,", "Pelarian yang tenang,"], ["designed around the forest.", "dirancang menyatu dengan hutan."], ["At the highlands of Puncak, The Batulayang combines the experience of staying in nature with modern comfort—from glamping and domes to cabins.", "Di ketinggian Puncak, The Batulayang menggabungkan pengalaman menginap di alam dengan kenyamanan modern—dari glamping dan dome hingga cabin."], ["stay concepts", "konsep menginap"], ["guest support", "dukungan tamu"], ["forest escape", "pelarian ke alam"], ["PROJECT STACK", "STACK PROYEK"], ["Built for a real hospitality client.", "Dibangun untuk klien hospitality nyata."], ["The delivered website combined a WordPress hospitality setup with visual page building, commerce/content capabilities, responsive frontend work, and an external reservation flow.", "Website yang diserahkan memadukan setup hospitality WordPress dengan visual page building, kemampuan commerce/content, frontend responsif, dan alur reservasi eksternal."], ["STAY COLLECTION", "KOLEKSI PENGINAPAN"], ["Choose your way", "Pilih cara Anda"], ["to stay outside.", "menikmati alam."], ["Three distinct ways to experience the same forest: soft canvas, panoramic dome, or warm timber cabin.", "Tiga cara berbeda untuk menikmati hutan yang sama: canvas nyaman, dome panorama, atau cabin kayu yang hangat."], ["Glamping Safari", "Glamping Safari"], ["Canvas comfort for a closer-to-nature stay.", "Kenyamanan canvas untuk pengalaman yang lebih dekat dengan alam."], ["Glamping Dome", "Glamping Dome"], ["Panoramic geometry framed by forest.", "Bentuk panoramik yang dibingkai oleh hutan."], ["Forest Cabin", "Forest Cabin"], ["Warm timber, privacy, and pine air.", "Kayu hangat, privasi, dan udara pinus."], ["AFTER DARK", "SETELAH SENJA"], ["Campfire stories,", "Cerita di api unggun,"], ["forest nights.", "malam di hutan."], ["A space to gather after sunset—campfire, mountain air, and time that moves more slowly.", "Ruang untuk berkumpul setelah matahari turun—api unggun, udara pegunungan, dan waktu yang berjalan lebih pelan."], ["Discover the destination ↗", "Jelajahi destinasi ↗"], ["BEYOND THE STAY", "LEBIH DARI SEKADAR MENGINAP"], ["Move through", "Jelajahi"], ["the landscape.", "bentang alam."], ["Private trails, flowing water, mountain air, and simple outdoor rituals turn a stay into a fuller experience.", "Jalur privat, aliran air, udara pegunungan, dan aktivitas luar ruang sederhana membuat pengalaman menginap terasa lebih utuh."], ["PRIVATE NATURE ACCESS", "AKSES ALAM PRIVAT"], ["Hike · Stream · Explore", "Hiking · Aliran Air · Jelajah"], ["COMFORT IN NATURE", "KENYAMANAN DI ALAM"], ["Everything you need.", "Semua yang Anda butuhkan."], ["Nothing you don’t.", "Tanpa yang berlebihan."], ["The experience balances quiet nature with practical comfort for short escapes and slow weekends.", "Pengalaman ini menyeimbangkan ketenangan alam dengan kenyamanan praktis untuk liburan singkat dan akhir pekan yang santai."], ["Starlink Wi-Fi", "Wi-Fi Starlink"], ["Fast connectivity when you need to reconnect.", "Koneksi cepat saat Anda perlu kembali terhubung."], ["Campfire Area", "Area Api Unggun"], ["A shared ritual for colder evenings.", "Ritual kebersamaan untuk malam yang lebih dingin."], ["Private Trails", "Jalur Privat"], ["Walking routes surrounded by mountain vegetation.", "Jalur berjalan yang dikelilingi vegetasi pegunungan."], ["Coffee and dining within the destination.", "Kopi dan kuliner di dalam kawasan."], ["Private Parking", "Parkir Privat"], ["Convenient access for weekend arrivals.", "Akses nyaman untuk kedatangan akhir pekan."], ["24h Concierge", "Concierge 24 Jam"], ["Guest assistance throughout the stay.", "Bantuan untuk tamu selama menginap."], ["PANORAMIC STAY", "PENGINAPAN PANORAMIK"], ["Wake up inside", "Bangun di dalam"], ["a different frame.", "bingkai yang berbeda."], ["The Dome turns the surrounding landscape into part of the room—light, trees, and changing weather become the view.", "Dome menjadikan lanskap sekitar sebagai bagian dari ruang—cahaya, pepohonan, dan perubahan cuaca menjadi pemandangan."], ["PUNCAK · WEST JAVA", "PUNCAK · JAWA BARAT"], ["Close enough for a weekend.", "Cukup dekat untuk akhir pekan."], ["Far enough to feel away.", "Cukup jauh untuk terasa benar-benar pergi."], ["Visit official website ↗", "Kunjungi website resmi ↗"], ["Portfolio showcase of a real client project. The live website is currently owned and operated by the client.", "Showcase portfolio dari proyek klien nyata. Website aktif saat ini dimiliki dan dioperasikan oleh klien."], ["PROJECT STATUS", "STATUS PROYEK"], ["Delivered · Handover completed", "Selesai · Handover tuntas"], ["LIVE PROOF", "BUKTI LIVE"], ["The Batulayang · Client Project Showcase", "The Batulayang · Showcase Proyek Klien"], ["Booking Integration", "Integrasi Booking"]];
  const lookup = new Map();
  PAIRS.forEach(([en,id]) => { lookup.set(en, {en,id}); lookup.set(id, {en,id}); });
  let lang = localStorage.getItem('ivannyLang');
  if(lang !== 'en' && lang !== 'id') lang = document.documentElement.lang === 'en' ? 'en' : 'id';
  document.documentElement.lang = lang;

  const style = document.createElement('style');
  style.textContent = `
    .site-lang-switch{display:inline-flex;align-items:center;gap:.15rem;flex:0 0 auto;padding:.28rem;border:1px solid rgba(127,127,127,.28);border-radius:999px;background:rgba(255,255,255,.10);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);font:700 10px/1 system-ui,sans-serif;letter-spacing:.05em;color:inherit;cursor:pointer}
    .site-lang-switch span{min-width:29px;padding:.42rem .38rem;border-radius:999px;text-align:center;opacity:.58;transition:.2s}
    .site-lang-switch[data-theme="light"] span.active{background:#111;color:#fff;opacity:1}
    .site-lang-switch[data-theme="dark"] span.active{background:#fff;color:#111;opacity:1}
    [data-lang-slot]{display:inline-flex;align-items:center;flex:0 0 auto}
    @media(max-width:600px){.site-lang-switch{font-size:9px;padding:.2rem}.site-lang-switch span{min-width:25px;padding:.36rem .28rem}}
  `;
  document.head.appendChild(style);

  function pairFor(value) {
    const key = String(value ?? '').trim().replace(/\s+/g,' ');
    return lookup.get(key);
  }
  function translated(value) {
    const pair = pairFor(value);
    return pair ? pair[lang] : value;
  }
  function translateTextNode(node) {
    if(!node || !node.nodeValue) return;
    const raw = node.nodeValue, trimmed = raw.trim().replace(/\s+/g,' ');
    const pair = lookup.get(trimmed);
    if(!pair) return;
    const pre = (raw.match(/^\s*/) || [''])[0], post = (raw.match(/\s*$/) || [''])[0];
    node.nodeValue = pre + pair[lang] + post;
  }
  function translateElement(el) {
    if(!(el instanceof Element)) return;
    ['placeholder','title','aria-label','alt'].forEach(attr => {
      const val = el.getAttribute(attr);
      if(!val) return;
      const pair = pairFor(val);
      if(pair) el.setAttribute(attr,pair[lang]);
    });
  }
  function syncSwitch() {
    document.querySelectorAll('.site-lang-switch').forEach(btn => {
      btn.querySelector('[data-code="en"]')?.classList.toggle('active',lang==='en');
      btn.querySelector('[data-code="id"]')?.classList.toggle('active',lang==='id');
      btn.setAttribute('aria-label',lang==='en'?'Switch language to Indonesian':'Ganti bahasa ke Inggris');
    });
  }
  function apply(root=document.body, notify=false) {
    if(!root) return;
    if(root.nodeType===Node.TEXT_NODE) translateTextNode(root);
    if(root.nodeType===Node.ELEMENT_NODE) translateElement(root);
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let n; while((n=walker.nextNode())) translateTextNode(n);
    if(root.querySelectorAll) root.querySelectorAll('*').forEach(translateElement);
    document.documentElement.lang=lang;
    syncSwitch();
    if(notify) window.dispatchEvent(new CustomEvent('site-language-change',{detail:{lang}}));
  }
  function createSwitch() {
    const slot=document.querySelector('[data-lang-slot]');
    if(!slot || slot.querySelector('.site-lang-switch')) return;
    const btn=document.createElement('button');
    btn.type='button'; btn.className='site-lang-switch';
    const context=slot.closest('header')||slot;
    const color=getComputedStyle(context).color;
    btn.dataset.theme = /255\s*,\s*255\s*,\s*255/.test(color) ? 'dark' : 'light';
    btn.innerHTML='<span data-code="en">ENG</span><span data-code="id">IND</span>';
    btn.addEventListener('click',()=>{lang=lang==='en'?'id':'en';localStorage.setItem('ivannyLang',lang);apply(document.body,true);});
    slot.appendChild(btn);
  }
  const obs=new MutationObserver(muts=>{
    muts.forEach(m=>m.addedNodes.forEach(n=>{ if(n.nodeType===1||n.nodeType===3) apply(n,false); }));
  });
  createSwitch();
  apply(document.body,true);
  obs.observe(document.body,{childList:true,subtree:true});
  window.SiteLanguage={get lang(){return lang},set(value){if(value==='en'||value==='id'){lang=value;localStorage.setItem('ivannyLang',lang);apply(document.body,true)}},t:translated,apply};
})();
