"use client";

import { useState } from "react";

export function useSubmit() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) return;

    setFeedback({ type: "", message: "" });
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
            "Formulir email belum tersedia saat ini. Pesan Anda belum dikirim. Silakan coba kembali nanti."
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

      setFeedback({ type: "success", message: "Pesan berhasil dikirim!" });
      formElement.reset();
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan jaringan. Silakan coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  }

  return { loading, feedback, handleSubmit };
}
