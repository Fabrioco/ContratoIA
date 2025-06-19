"use client";

import { FormEvent, useState } from "react";

export default function FormContact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    if (!res.ok) {
      alert("Erro ao enviar email");
      throw new Error("Erro ao enviar email");
    }

    alert("Email enviado com sucesso!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        type="text"
        placeholder="Seu nome"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="email"
        placeholder="Seu email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="text"
        placeholder="Assunto"
        name="subject"
        id="subject"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={10}
        placeholder="Sua mensagem"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
