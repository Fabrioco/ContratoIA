import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section id="inicio" aria-label="Missão do projeto">
        <h2>Missão do projeto</h2>
        <p>
          Nossa missão é simplificar a criação de contratos para freelancers,
          oferecendo praticidade e segurança com o apoio da inteligência
          artificial.
        </p>
      </section>

      <section aria-label="Como funciona o formulário">
        <h2>Como Funciona o formulário?</h2>
        <p>
          Você preenche algumas informações básicas, como{" "}
          <strong> nome do cliente</strong>,<strong> tipo de serviço</strong>,{" "}
          <strong> valor</strong> e <strong> prazo</strong>, e nosso sistema
          gera <strong> automaticamente</strong> um contrato{" "}
          <strong>personalizado</strong> para você.
        </p>
      </section>

      <section aria-label="Como funciona o chat com IA">
        <h2>Como funciona o chat com IA?</h2>
        <p>
          Vocês enviam mensagens para a inteligência artificial, ela responde
          com um contrato personalizado para vocês.
        </p>
      </section>

      <section aria-label="Vantagens do sistema">
        <h2>Vantagens de usar nosso sistema</h2>
        <ul>
          <li>✅ Geração de contrato em segundos</li>
          <li>✅ Interface simples e intuitiva</li>
          <li>
            ✅ Otimizado para freelancers e pequenos prestadores de serviço
          </li>
          <li>✅ Possibilidade de exportar em PDF</li>
        </ul>
      </section>

      <section id="sobre" aria-label="Sobre o criador">
        <h2>Sobre o criador</h2>
        <p>
          Este projeto foi criado por{" "}
          <Link href="https://github.com/Fabrioco">
            Fabrício Oliveira Lopes
          </Link>
          , um desenvolvedor apaixonado por tecnologia e soluções para o mercado
          freelancer.
        </p>
      </section>
    </main>
  );
}
