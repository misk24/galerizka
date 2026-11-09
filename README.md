# Galeriz.ka

Website jasa jahit busana custom di Lombok, dibangun dengan Next.js App Router.

## Menjalankan project

Jalankan `npm install`, lalu `npm run dev`. Buka http://localhost:3000.

## Perintah

- `npm run dev`: development server.
- `npm run lint`: ESLint.
- `npm run build`: production build.
- `npm run start`: menjalankan production build.

## Struktur project

- `app/`: App Router, root layout, metadata, dan API routes.
- `components/layout/`: navbar, menu mobile, dan footer.
- `components/sections/`: bagian halaman seperti Hero, About, Services, Portfolio, CTA, dan Contact.
- `components/ui/`: komponen UI reusable.
- `constants/`: navigasi, kontak, dan tautan sosial.
- `hooks/`: custom React hooks.
- `public/`: gambar dan aset statis.

## Form kontak

Endpoint `POST /api/contact` memakai Zod untuk validasi dan Resend untuk pengiriman email.

Environment variable wajib: `RESEND_API_KEY`.

Jangan commit file `.env` atau credential ke repository. Form memiliki batas ukuran request, batas panjang field, HTML escaping, dan honeypot dasar. Rate limiting berbasis penyimpanan bersama belum dikonfigurasi. Aktifkan sebelum penggunaan publik agar endpoint tidak mudah disalahgunakan pada deployment serverless.

## Sebelum deployment

Pastikan environment variable tersedia pada Preview dan Production. Jalankan lint dan production build sebelum merge ke branch utama.
