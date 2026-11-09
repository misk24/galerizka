import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Nama wajib diisi").max(100, "Nama maksimal 100 karakter"),
  email: z.string().trim().email("Email tidak valid").max(254, "Email maksimal 254 karakter"),
  subject: z.string().trim().max(150, "Subjek maksimal 150 karakter").optional().default(""),
  message: z.string().trim().min(1, "Pesan wajib diisi").max(5000, "Pesan maksimal 5000 karakter"),
  website: z.string().max(500, "Kolom honeypot terlalu panjang").optional(),
}).strict();
