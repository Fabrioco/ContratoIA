import {
  ClockIcon,
  PenIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function HomePage() {
  return (
    <main aria-label="Página inicial do ContratoAI">
      <section aria-label="Introdução">
        <h1>Crie contratos freelance com IA</h1>
        <p>
          Utilize a inteligência artificial para gerar contratos profissionais,
          personalizados e seguros em minutos.
        </p>
        <article role="group" aria-label="Opções para criar um contrato">
          <Link
            href="/chat"
            aria-label="Criar contrato com ajuda da IA (Chat)"
            role="link"
          >
            <ClockIcon size={32} weight="bold" color="white" />
            Criar contrato com ajuda da IA (Chat)
          </Link>
          <Link
            href="/form"
            aria-label="Preencher formulário manual"
            role="link"
          >
            <PenIcon size={32} weight="bold" color="white" />
            Preencher formulário manual
          </Link>
        </article>
      </section>

      <section aria-label="Vantagens">
        <div role="article" aria-label="Rápido">
          <ClockIcon size={32} weight="bold" color="white" />
          <h2>Rápido</h2>
          <p>Gere contratos em segundos com base nas suas necessidades.</p>
        </div>

        <div role="article" aria-label="Personalizado">
          <PenIcon size={32} weight="bold" color="white" />
          <h2>Personalizado</h2>
          <p>Adapte o contrato ao tipo de serviço que será prestado.</p>
        </div>

        <div role="article" aria-label="Seguro">
          <ShieldCheckIcon size={32} weight="bold" color="white" />
          <h2>Seguro</h2>
          <p>Termos legais pensados para proteger ambas as partes.</p>
        </div>
      </section>
    </main>
  );
}
