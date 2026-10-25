(() => {
  const PAIRS = [["Loading...", "Memuat..."], ["Find A Location", "Cari Lokasi"], ["Home", "Beranda"], ["About", "Tentang"], ["Service", "Layanan"], ["Contact", "Kontak"], ["Contact Us", "Hubungi Kami"], ["CONSTRUCTION INDUSTRY", "INDUSTRI KONSTRUKSI"], ["Build Quality, Create Innovation", "Bangun Kualitas, Wujudkan Inovasi"], ["Glass, Aluminium, Stainless Steel, and More — Solutions for Every Need", "Solusi Kaca, Aluminium, Stainless Steel, dll. Untuk Segala Kebutuhan Anda"], ["About Us", "Tentang Kami"], ["Your Trusted Partner for Construction Projects", "Partner Terpercaya untuk Proyek Konstruksi Anda"], ["Fast & Responsive Service", "Layanan Cepat & Responsif"], ["Quality Production & Installation", "Produksi & Pemasangan Berkualitas"], ["Designing, producing, and installing custom aluminium & stainless products", "Merancang, memproduksi, dan memasang produk aluminium & stainless sesuai kebutuhan"], ["Creating glass partitions, stair railings, and showcases with modern designs", "Membuat partisi kaca, railing tangga, dan etalase dengan desain modern"], ["Building durable fences, canopies, rolling doors, and folding gates", "Membangun pagar, kanopi, rolling door, dan folding gate yang kokoh & tahan lama"], ["Years of Experience", "Tahun Pengalaman"], ["Contact Me", "Hubungi Saya"], ["We provide professional construction-industry services for our customers", "Kami menyediakan layanan Industri Konstruksi profesional untuk pelanggan kami"], ["Consult now", "Konsultasi sekarang"], ["Our Services", "Layanan Kami"], ["The Best Services for You", "Layanan Terbaik Untuk Anda"], ["We provide production and installation services for aluminium, iron, glass, and stainless-steel products. Choose a service to immediately view examples of our work.", "Kami menyediakan jasa produksi dan pemasangan aneka produk aluminium, besi, kaca, dan stainless steel. Pilih layanan untuk melihat langsung contoh hasil pekerjaan kami."], ["Iron Garage Door", "Pintu Garasi Besi"], ["Glass Partition", "Partisi Kaca"], ["Business Booth", "Booth Usaha"], ["Stainless Steel", "Stainless Steel"], ["Active selection", "Pilihan aktif"], ["Fabrication and installation of strong, precise iron garage doors tailored to building requirements.", "Pembuatan dan pemasangan pintu garasi besi yang kokoh, presisi, dan disesuaikan dengan kebutuhan bangunan."], ["Consult This Service", "Konsultasikan Layanan"], ["Have a construction need?", "Punya kebutuhan konstruksi?"], ["Discuss your project with the Berkah Rolling Door team.", "Diskusikan proyek Anda dengan tim Berkah Rolling Door."], ["Start Consultation", "Mulai Konsultasi"], ["Specialist in rolling doors, garage doors, glass partitions, business booths, laser cutting, stainless steel, and custom construction needs.", "Spesialis rolling door, pintu garasi, partisi kaca, booth usaha, laser cutting, stainless steel, dan kebutuhan konstruksi custom."], ["Transactions only through official website contacts", "Transaksi hanya melalui kontak resmi website"], ["Navigation", "Navigasi"], ["Operating Hours", "Jam Operasional"], ["Monday – Friday", "Senin – Jumat"], ["Saturday", "Sabtu"], ["Sunday", "Minggu"], ["Closed", "Libur"], ["All rights reserved.", "All rights reserved."], ["Designed by", "Designed by"], ["Custom kitchen-set work with neat, functional construction tailored to room dimensions and user needs.", "Pengerjaan kitchen set custom dengan konstruksi rapi, fungsional, dan menyesuaikan ukuran ruang serta kebutuhan pengguna."], ["Glass partitions for homes, offices, shops, and commercial spaces with precise installation and a modern appearance.", "Partisi kaca untuk rumah, kantor, toko, dan ruang komersial dengan pemasangan presisi dan tampilan modern."], ["Custom business booths for culinary, retail, and exhibition needs with strong construction and a recognizable appearance.", "Booth usaha custom untuk kebutuhan kuliner, retail, dan pameran dengan konstruksi kuat dan tampilan yang mudah dikenali."], ["Rolling doors for shops, warehouses, garages, and commercial buildings with strong construction options and practical operation.", "Rolling door untuk toko, gudang, garasi, dan bangunan komersial dengan pilihan konstruksi yang kuat dan praktis digunakan."], ["Laser-cutting work for decorative panels, facades, fences, and custom needs with precise cutting results.", "Pengerjaan laser cutting untuk panel dekoratif, fasad, pagar, dan kebutuhan custom dengan hasil potongan yang presisi."], ["Stainless-steel fabrication for work tables, business equipment, kitchens, and other custom construction needs.", "Fabrikasi stainless steel untuk meja kerja, perlengkapan usaha, dapur, dan kebutuhan konstruksi custom lainnya."], ["work example", "contoh pekerjaan"], ["we are a company engaged in goods & services, producing various aluminium, iron, glass & stainless steel products, showcases, glass partitions, stainless stair railings, structural iron, fences, canopies, rolling doors, folding gates, and more.", "kami adalah perusahaan yg bergerak di bidang barang & jasa, memproduksi aneka jenis produk aluminium, besi, kaca & stainless steel, etalase, partisi kaca, railing tangga stainless, besi konstruksi, pagar, kanopi, rolling door, folding gate, dll."], ["© Berkah Rolling Door. All rights reserved.", "© Berkah Rolling Door. Hak cipta dilindungi."]];
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
