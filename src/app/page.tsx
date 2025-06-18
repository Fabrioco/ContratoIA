import {
  ClockIcon,
  PenIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      aria-label="Página inicial do ContratoAI"
      className="flex flex-col h-screen w-screen items-center justify-between text-center text-purple-700"
    >
      <section
        aria-label="Introdução"
        className="flex flex-col gap-4 bg-white p-4 w-full h-1/2"
      >
        <h1
          aria-label="Crie contratos freelance com IA"
          className="text-3xl font-bold"
        >
          Crie contratos freelance com IA
        </h1>
        <p
          aria-label="Utilize a inteligência artificial para gerar contratos profissionais, personalizados e seguros em minutos."
          className="text-lg md:w-1/2 md:mx-auto"
        >
          Utilize a inteligência artificial para gerar contratos profissionais,
          personalizados e seguros em minutos.
        </p>
        <article
          role="group"
          aria-label="Opções para criar um contrato"
          className="flex flex-col items-center gap-4"
        >
          <Link
            href="/chat"
            aria-label="Criar contrato com ajuda da IA (Chat)"
            role="link"
            className="bg-purple-700 text-white px-4 py-2 rounded-md border border-solid border-purple-700 hover:bg-purple-800 hover:shadow-md active:bg-white active:text-purple-700 active:border-purple-700 active:shadow-lg cursor-pointer"
          >
            Criar contrato com ajuda da IA (Chat)
          </Link>
          <Link
            href="/form"
            aria-label="Preencher formulário manual"
            role="link"
            className="bg-purple-700 text-white px-4 py-2 rounded-md border border-solid border-purple-700 hover:bg-purple-800 hover:shadow-md active:bg-white active:text-purple-700 active:border-purple-700 active:shadow-lg cursor-pointer"
          >
            Preencher formulário manual
          </Link>
        </article>
      </section>

      <section
        aria-label="Vantagens"
        className="flex flex-col md:flex-row gap-4 items-center justify-center bg-gray-50 p-4 w-full h-1/2"
      >
        <div
          role="article"
          aria-label="Rápido"
          className="flex flex-col items-center justify-center"
        >
          <ClockIcon size={32} weight="bold" />
          <h2 className="font-semibold text-2xl">Rápido</h2>
          <p className="text-lg">
            Gere contratos em segundos com base nas suas necessidades.
          </p>
        </div>

        <div
          role="article"
          aria-label="Personalizado"
          className="flex flex-col items-center justify-center"
        >
          <PenIcon size={32} weight="bold" />
          <h2 className="font-semibold text-2xl">Personalizado</h2>
          <p className="text-lg">
            Adapte o contrato ao tipo de serviço que será prestado.
          </p>
        </div>

        <div
          role="article"
          aria-label="Seguro"
          className="flex flex-col items-center justify-center"
        >
          <ShieldCheckIcon size={32} weight="bold" />
          <h2 className="font-semibold text-2xl">Seguro</h2>
          <p className="text-lg">
            Termos legais pensados para proteger ambas as partes.
          </p>
        </div>
      </section>
    </main>
  );
}
