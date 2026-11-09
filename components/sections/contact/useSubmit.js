"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export function useSubmit() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
      website: form.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 503) {
          throw new Error(
            "Formulir email sementara belum tersedia. Silakan hubungi kami melalui WhatsApp."
          );
        }
        if (response.status === 429) {
          throw new Error(
            "Terlalu banyak percobaan. Tunggu beberapa menit sebelum mencoba lagi."
          );
        }
        throw new Error(
          result.error || "Pesan gagal dikirim. Silakan coba lagi nanti."
        );
      }

      if (result.ok !== true) {
        throw new Error("Status pengiriman tidak dapat dipastikan. Silakan coba lagi.");
      }

      toast.success("Pesan berhasil dikirim!");
      formElement.reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan jaringan. Silakan coba lagi."
      );
    } finally {
      setLoading(false);
    }
  }

  return { loading, handleSubmit };
}
