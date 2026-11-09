"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export function useSubmit() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const form = new FormData(event.target);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
      website: form.get("website"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Gagal mengirim pesan.");

      toast.success("Pesan berhasil dikirim!");
      event.target.reset();
    } catch (err) {
      toast.error("Terjadi kesalahan. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  }
  
  return { loading, handleSubmit };
}