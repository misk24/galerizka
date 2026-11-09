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

Environment variable wajib:

| Variable | Fungsi |
| --- | --- |
| `RESEND_API_KEY` | API key Resend untuk mengirim email kontak. |
| `CONTACT_FROM_EMAIL` | Alamat pengirim pada domain yang sudah diverifikasi di Resend. |
| `CONTACT_TO_EMAIL` | Alamat inbox tujuan untuk pesan dari formulir kontak. |
| `KV_REST_API_URL` | URL REST Redis dari integrasi Vercel KV/Redis. |
| `KV_REST_API_TOKEN` | Token akses REST Redis. |

Salin `.env.example` menjadi `.env.local`, lalu isi nilai asli dari dashboard Resend dan integrasi Redis. Jangan pernah memasukkan nilai credential asli ke Git. File `.env*` diabaikan Git, kecuali template `.env.example`.

Form memiliki batas ukuran request 16 KiB, batas panjang field, HTML escaping, honeypot dasar, dan rate limiting berbasis Redis. Rate limit membatasi 5 request per IP dalam jendela 10 menit. Jika Redis tidak tersedia, endpoint mengembalikan 503 agar perlindungan tidak diam-diam dinonaktifkan. Atur `CONTACT_FROM_EMAIL` ke alamat pada domain yang sudah diverifikasi di Resend dan `CONTACT_TO_EMAIL` ke inbox penerima. Kedua nilai ini wajib di Preview dan Production. Jangan gunakan alamat sender onboarding bawaan Resend untuk formulir publik.

## Sebelum deployment

Pastikan environment variable tersedia pada Preview dan Production. Jalankan lint dan production build sebelum merge ke branch utama.
