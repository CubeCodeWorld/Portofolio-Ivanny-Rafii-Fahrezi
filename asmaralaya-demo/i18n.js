(() => {
  const PAIRS = [["Home", "Beranda"], ["About", "Tentang"], ["Experience", "Pengalaman"], ["Gallery", "Galeri"], ["Location", "Lokasi"], ["Contact", "Kontak"], ["Contact Us", "Hubungi Kami"], ["COFFEE PEACEFULLY IN NATURE", "NGOPI TENANG DI TENGAH ALAM"], ["A place to pause and enjoy coffee, mist, cool air, and the calming landscapes of Puncak.", "Tempat singgah untuk menikmati kopi, kabut, udara sejuk, dan pemandangan alam Puncak yang menenangkan."], ["View Location", "Lihat Lokasi"], ["Chat WhatsApp", "Chat WhatsApp"], ["Scroll to explore", "Scroll untuk menjelajah"], ["ABOUT ASMARALAYA", "TENTANG ASMARALAYA"], ["About Asmaralaya", "Tentang Asmaralaya"], ["Asmaralaya Coffee is a place to pause in Cisarua, Puncak, where coffee, nature, and togetherness meet. With cool mountain air and open green scenery, Asmaralaya offers a warm atmosphere for taking a break from routine.", "Asmaralaya Coffee adalah ruang singgah di kawasan Cisarua, Puncak, yang mempertemukan kopi, alam, dan kebersamaan. Dengan udara pegunungan yang sejuk dan panorama hijau yang terbuka, Asmaralaya menghadirkan suasana hangat untuk berhenti sejenak dari rutinitas."], ["Nature", "Alam"], ["In harmony with nature and the surrounding environment", "Selaras dengan alam dan lingkungan sekitar"], ["Quality Coffee", "Kopi Berkualitas"], ["Selected coffee with the best flavors", "Kopi pilihan dengan rasa terbaik"], ["Togetherness", "Kebersamaan"], ["A warm and comfortable atmosphere for everyone", "Suasana hangat dan nyaman untuk semua"], ["The Experience We Offer", "Pengalaman yang Kami Tawarkan"], ["Enjoy coffee with misty views and the cool air of Puncak.", "Nikmati kopi dengan pemandangan kabut dan udara sejuk khas Puncak."], ["Warm and comfortable for conversations, work, or quiet time alone.", "Suasana hangat dan nyaman untuk ngobrol, bekerja, atau menyendiri."], ["Signature coffee, snacks, and warm dishes for Puncak's cool weather.", "Kopi signature, camilan, dan sajian hangat untuk menemani udara sejuk Puncak."], ["Green corners, a coffee bar, and a distinctive misty atmosphere for capturing moments.", "Sudut hijau, coffee bar, dan atmosfer berkabut yang khas untuk mengabadikan momen."], ["Moments at Asmaralaya", "Momen di Asmaralaya"], ["Asmaralaya visuals — authentic venue atmosphere, dishes, and landscapes.", "Visual Asmaralaya — suasana, sajian, dan lanskap asli venue."], ["CONTACT ASMARALAYA", "HUBUNGI ASMARALAYA"], ["Have a question before visiting?", "Punya pertanyaan sebelum berkunjung?"], ["Send a quick question about the atmosphere, access, or your visit. In the Node.js version, this form is validated through the Express API. In the static demo, the message is directed to the official WhatsApp.", "Kirim pertanyaan singkat mengenai suasana, akses, atau kunjungan. Pada versi Node.js, formulir ini divalidasi melalui Express API. Pada static demo, pesan diarahkan ke WhatsApp resmi."], ["Name", "Nama"], ["Message", "Pesan"], ["Send Question", "Kirim Pertanyaan"], ["Your Name", "Nama Anda"], ["Write your question...", "Tulis pertanyaan Anda..."], ["VISIT US", "KUNJUNGI KAMI"], ["Find Asmaralaya Coffee", "Temukan Asmaralaya Coffee"], ["Open Google Maps", "Buka Google Maps"], ["Asmaralaya Coffee is a café in Puncak, Bogor, offering quality coffee, calming natural views, and a warm atmosphere for every special moment.", "Asmaralaya Coffee adalah kafe di Puncak Bogor yang menghadirkan kopi berkualitas, pemandangan alam yang menenangkan, dan suasana hangat untuk setiap momen istimewa Anda."], ["© 2026 Asmaralaya Coffee. All Rights Reserved.", "© 2026 Asmaralaya Coffee. Hak cipta dilindungi."], ["© Web Design by Cube Code World", "© Design Web By Cube Code World"], ["Explore", "Jelajahi"], ["Puncak Nature Tourism", "Wisata Alam Puncak"], ["Nearby Places", "Tempat Sekitar"], ["Gunung Mas Tea Plantation", "Kebun Teh Gunung Mas"], ["Cilember Waterfall", "Curug Cilember"], ["Camping Lake", "Danau Perkemahan"], ["Nearby Culinary Spots", "Kuliner Sekitar"], ["Route & Access", "Rute & Akses"], ["Static demo: message forwarded to the official WhatsApp.", "Static demo: pesan diteruskan ke WhatsApp resmi."], ["Something went wrong. Please try again.", "Terjadi kesalahan. Silakan coba lagi."], ["Validation was not successful.", "Validasi belum berhasil."], ["Visitors enjoying coffee in the outdoor area of Asmaralaya Coffee during misty weather", "Pengunjung menikmati kopi di area outdoor Asmaralaya Coffee saat berkabut"], ["Asmaralaya Coffee barista preparing a drink at the coffee bar", "Barista Asmaralaya Coffee menyiapkan minuman di coffee bar"], ["Fried meatball tofu, cireng, mix platter, and coffee at Asmaralaya Coffee", "Tahu bakso goreng, cireng, mix platter, dan kopi di Asmaralaya Coffee"], ["Asmaralaya Coffee & Roastery in a misty atmosphere", "Asmaralaya Coffee & Roastery dengan suasana berkabut"], ["Two Asmaralaya Coffee drinks without promotional overlay", "Dua minuman Asmaralaya Coffee tanpa overlay promosi"], ["Fried meatball tofu, cireng, mix platter, coffee, and the view at Asmaralaya Coffee", "Tahu bakso goreng, cireng, mix platter, kopi, dan pemandangan Asmaralaya Coffee"], ["Toast and chocolate-cheese grilled banana with Asmaralaya Coffee drinks", "Roti bakar dan pisang bakar coklat keju dengan minuman Asmaralaya Coffee"], ["Visitors enjoying coffee at an outdoor table at Asmaralaya Coffee", "Pengunjung menikmati kopi di meja outdoor Asmaralaya Coffee"], ["Asmaralaya Coffee barista at the coffee bar", "Barista Asmaralaya Coffee di coffee bar"], ["Asmaralaya Coffee & Roastery identity at the bar area", "Identitas Asmaralaya Coffee & Roastery di area bar"], ["Misty atmosphere at Asmaralaya Coffee", "Suasana berkabut di Asmaralaya Coffee"], ["EXPERIENCE", "PENGALAMAN"], ["GALLERY", "GALERI"], ["Puncak, Bogor, West Java", "Puncak, Bogor, Jawa Barat"], ["Asmaralaya Coffee | Coffee Peacefully in Nature", "Asmaralaya Coffee | Ngopi Tenang di Tengah Alam"], ["Mountain View", "Pemandangan Gunung"], ["Cozy Ambience", "Suasana Nyaman"], ["Coffee & Bites", "Kopi & Camilan"], ["Photo Spot", "Spot Foto"]];
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
