'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');
const contentPath = path.join(__dirname, 'data', 'content.json');

function readContent() {
  return JSON.parse(fs.readFileSync(contentPath, 'utf8'));
}

app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));
app.use(express.urlencoded({ extended: false, limit: '32kb' }));
app.use(express.static(publicDir, { extensions: ['html'], maxAge: '1h' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'asmaralaya-company-profile', runtime: 'node' });
});

app.get('/api/content', (_req, res) => {
  const content = readContent();
  res.set('Cache-Control', 'public, max-age=300');
  res.json(content);
});

app.get('/api/venue', (_req, res) => {
  res.json(readContent().venue);
});

app.get('/api/experiences', (_req, res) => {
  res.json(readContent().experiences);
});

app.get('/api/gallery', (_req, res) => {
  res.json(readContent().gallery);
});

app.post('/api/inquiry', (req, res) => {
  const name = String(req.body?.name || '').trim();
  const contact = String(req.body?.contact || '').trim();
  const message = String(req.body?.message || '').trim();

  const errors = {};
  if (name.length < 2 || name.length > 80) errors.name = 'Nama harus 2–80 karakter.';
  if (contact.length < 5 || contact.length > 120) errors.contact = 'Kontak tidak valid.';
  if (message.length < 10 || message.length > 1000) errors.message = 'Pesan harus 10–1000 karakter.';

  if (Object.keys(errors).length) {
    return res.status(422).json({ ok: false, errors });
  }

  return res.status(202).json({
    ok: true,
    message: 'Inquiry tervalidasi. Demo ini tidak mengirim atau menyimpan data pelanggan.',
    preview: { name, contact }
  });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Asmaralaya Coffee demo running on http://localhost:${PORT}`);
});
