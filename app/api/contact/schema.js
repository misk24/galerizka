import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  subject: z.string().optional(),
  message: z.string().min(1, "Pesan wajib diisi"),
});
