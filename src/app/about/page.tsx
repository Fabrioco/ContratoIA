import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-8 h-screen w-screen items-center justify-between text-center text-purple-700 p-4">
      <section
        id="inicio"
        aria-label="Missão do projeto"
        className="flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold">Missão do projeto</h2>
        <p className="text-lg md:w-1/2 md:mx-auto">
          Nossa missão é simplificar a criação de contratos para freelancers,
          oferecendo praticidade e segurança com o apoio da inteligência
          artificial.
        </p>
      </section>

      <section
        id="funciona-form"
        aria-label="Como funciona o formulário"
        className="flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold">Como funciona o formulário?</h2>
        <p className="text-lg md:w-1/2 md:mx-auto">
          Você preenche algumas informações básicas, como{" "}
          <strong> nome do cliente</strong>,<strong> tipo de serviço</strong>,{" "}
          <strong> valor</strong> e <strong> prazo</strong>, e nosso sistema
          gera <strong> automaticamente</strong> um contrato{" "}
          <strong>personalizado</strong> para você.
        </p>
      </section>

      <section
        id="funciona-chat"
        aria-label="Como funciona o chat com IA"
        className="flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold">Como funciona o chat com IA?</h2>
        <p className="text-lg md:w-1/2 md:mx-auto">
          Vocês enviam mensagens para a inteligência artificial, ela responde
          com um contrato personalizado para você.
        </p>
      </section>

      <section
        id="vantagens"
        aria-label="Vantagens do sistema"
        className="flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold">Vantagens de usar nosso sistema</h2>
        <ul className="text-lg md:mx-auto flex flex-col gap-2 text-start">
          <li>✅ Geração de contrato em segundos</li>
          <li>✅ Interface simples e intuitiva</li>
          <li>
            ✅ Otimizado para freelancers e pequenos prestadores de serviço
          </li>
          <li>✅ Possibilidade de exportar em PDF</li>
        </ul>
      </section>

      <section
        id="sobre"
        aria-label="Sobre o criador"
        className="flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold">Sobre o criador</h2>
        <p className="text-lg md:w-1/2 md:mx-auto">
          Este projeto foi criado por{" "}
          <Link
            href="https://github.com/Fabrioco"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Fabrício Oliveira Lopes
          </Link>
          , um desenvolvedor apaixonado por tecnologia e soluções para o mercado
          freelancer.
        </p>
      </section>
    </main>
  );
}
