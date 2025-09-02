// src/components/sections/ContactForm.tsx
import React, { useState } from "react";
import { Button } from "../common/Button";

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // hook up to API / backend here
      await new Promise(res => setTimeout(res, 700));
      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        <label className="flex flex-col">
          <span className="text-sm mb-1">Name</span>
          <input name="name" value={form.name} onChange={handleChange} required className="rounded-xl border px-4 py-3" />
        </label>
        <label className="flex flex-col">
          <span className="text-sm mb-1">Email</span>
          <input name="email" value={form.email} onChange={handleChange} type="email" required className="rounded-xl border px-4 py-3" />
        </label>
        <label className="md:col-span-2 flex flex-col">
          <span className="text-sm mb-1">Message</span>
          <textarea name="message" value={form.message} onChange={handleChange} rows={6} required className="rounded-xl border px-4 py-3" />
        </label>
        <div className="md:col-span-2">
          <Button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Message"}</Button>
          {status === "ok" && <p className="mt-2 text-sm text-green-600">Thanks — message sent.</p>}
          {status === "error" && <p className="mt-2 text-sm text-red-600">Something went wrong.</p>}
        </div>
      </form>
    </section>
  );
};
