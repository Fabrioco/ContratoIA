import FormContact from "@/ui/contact/formContact/page";

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-8 p-4 h-screen w-screen items-center justify-between text-center text-purple-700">
      <h1 className="text-3xl font-bold">Entre em contato</h1>
      <section className="flex flex-col gap-4">
        <FormContact />
      </section>
    </main>
  );
}
