"use client";

import { FormEvent, useState } from "react";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Preencha todos os campos");
      return;
    }
    try {
      setIsLoading(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        alert("Erro ao enviar email");
        throw new Error("Erro ao enviar email");
      }

      alert("Email enviado com sucesso!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Seu nome"
        name="name"
        id="name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        value={formData.name}
        className="w-full px-4 py-2 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
      />
      <input
        type="email"
        placeholder="Seu email"
        name="email"
        id="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        value={formData.email}
        className="w-full px-4 py-2 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
      />
      <input
        type="text"
        placeholder="Assunto"
        name="subject"
        id="subject"
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        value={formData.subject}
        className="w-full px-4 py-2 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
      />
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={10}
        placeholder="Sua mensagem"
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        value={formData.message}
        className="w-full px-4 py-2 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 cursor-pointer active:bg-white active:text-purple-700 active:shadow-lg"
      >
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
