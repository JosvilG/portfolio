import React, { useState } from "react";
import { Button } from "./ui/button";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Por favor, introduce un email válido.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch("https://formspree.io/f/xgvykpnw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess("¡Mensaje enviado correctamente!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(data?.errors?.[0]?.message || "Error al enviar el mensaje.");
      }
    } catch (err) {
      setError("Error de conexión. Intenta de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex flex-col items-center gap-2 mb-6">
        <p className="text-neutral-300 text-lg">
          <span className="font-semibold">Teléfono:</span>{" "}
          <a href="tel:+34650851990" className="hover:underline">
            +34 650 851 990
          </a>
        </p>
        <p className="text-neutral-300 text-lg">
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:josepvilchezgarcia@gmail.com"
            className="hover:underline"
          >
            josepvilchezgarcia@gmail.com
          </a>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full px-4 py-3 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Mensaje"
            rows={5}
            className="w-full px-4 py-3 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        {success && <p className="text-green-400 text-sm">{success}</p>}
        <Button
          type="submit"
          className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white border-0"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
