import { SitesSelector } from "./sites-selector";

const highlights = [
  "Solucoes sob medida para empresas que precisam organizar processos, dados e operacoes digitais.",
  "Atendimento proximo, com foco em entender o contexto do cliente antes de propor tecnologia.",
  "Projetos simples de manter, pensados para crescer junto com o negocio.",
];

const services = [
  "Desenvolvimento de sistemas web",
  "Automacao de processos",
  "Consultoria em tecnologia",
  "Integracoes e manutencao de software",
];

const createdSites = [
  {
    description:
      "Sistema para gestao de veiculos, clientes, atendimentos e rotinas comerciais.",
    loginUrl: "https://crm-veiculos-vbpassos-projects.vercel.app/login",
    name: "crm-veiculos",
    url: "https://crm-veiculos-vbpassos-projects.vercel.app/",
  },
  {
    description:
      "Site para consultas e acesso rapido a informacoes organizadas em uma interface simples.",
    name: "consulta",
    url: "https://consultascpc.vercel.app/",
  },
  {
    description:
      "Projeto para organizacao de agendas, horarios e solicitacoes de atendimento.",
    name: "agendamentos",
    url: "https://agendamentos-project.vercel.app",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2ec] text-[#201916]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#201916]/10 pb-6">
          <a className="text-xl font-semibold tracking-tight" href="#inicio">
            VPSoft
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#5f514a] sm:flex">
            <a className="transition hover:text-[#201916]" href="#quem-somos">
              Quem somos
            </a>
            <a className="transition hover:text-[#201916]" href="#sites">
              Sites
            </a>
            <a className="transition hover:text-[#201916]" href="#biografia">
              Biografia
            </a>
            <a className="transition hover:text-[#201916]" href="#contato">
              Contato
            </a>
          </nav>
        </header>

        <div
          id="inicio"
          className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#8c5a3c]">
              Tecnologia com clareza
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Software simples, confiavel e feito para resolver problemas reais.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f514a]">
              A VPSoft desenvolve solucoes digitais para apoiar negocios que
              precisam melhorar processos, ganhar produtividade e transformar
              ideias em sistemas uteis no dia a dia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#201916] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#3a2d27]"
                href="#contato"
              >
                Falar sobre um projeto
              </a>
              <a
                className="rounded-full border border-[#201916]/20 px-6 py-3 text-center text-sm font-semibold transition hover:border-[#201916]/50"
                href="#quem-somos"
              >
                Conhecer a VPSoft
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#201916]/10 bg-white/70 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8c5a3c]">
              Atuacao
            </p>
            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  className="rounded-2xl bg-[#f6f2ec] px-5 py-4 font-medium"
                  key={service}
                >
                  {service}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section
        id="quem-somos"
        className="border-y border-[#201916]/10 bg-white px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8c5a3c]">
              Quem somos
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Uma empresa de tecnologia focada em parceria.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#5f514a]">
            <p>
              A VPSoft nasceu para aproximar tecnologia da rotina das empresas.
              Em vez de criar sistemas complicados, trabalhamos para entregar
              ferramentas objetivas, bem organizadas e alinhadas ao jeito como
              cada cliente opera.
            </p>
            <p>
              Nosso compromisso e transformar necessidades de negocio em
              solucoes digitais praticas, com comunicacao clara durante todo o
              processo: diagnostico, desenvolvimento, entrega e evolucao.
            </p>
            <div className="grid gap-4 pt-2 md:grid-cols-3">
              {highlights.map((item) => (
                <article
                  className="rounded-2xl border border-[#201916]/10 bg-[#f6f2ec] p-5 text-base leading-7"
                  key={item}
                >
                  {item}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sites" className="px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8c5a3c]">
              Sites criados
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Acesse os projetos ja publicados.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f514a]">
              Selecione um dos sites desenvolvidos para abrir o projeto em uma
              nova aba.
            </p>
          </div>

          <div className="grid gap-6">
            <SitesSelector sites={createdSites} />
            <div className="grid gap-4 md:grid-cols-3">
              {createdSites.map((site) => (
                <a
                  className="rounded-2xl border border-[#201916]/10 bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#8c5a3c]/40"
                  href={site.url}
                  key={site.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p className="font-semibold">{site.name}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5f514a]">
                    {site.url.replace("https://", "")}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="biografia"
        className="border-t border-[#201916]/10 bg-white px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-[#201916] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9b899]">
              Biografia
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Vanessa Passos
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Profissional de tecnologia e fundadora da VPSoft, atua na criacao
              de solucoes digitais para apoiar empresas na organizacao de seus
              processos e na melhoria da produtividade.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#5f514a]">
            <p>
              Ao longo da sua trajetoria, Vanessa desenvolveu uma visao pratica
              sobre tecnologia: sistemas devem facilitar o trabalho, reduzir
              retrabalho e permitir que equipes tomem decisoes com mais
              seguranca.
            </p>
            <p>
              Sua atuacao combina escuta, planejamento e desenvolvimento de
              software, sempre buscando solucoes adequadas ao tamanho e a
              realidade de cada negocio.
            </p>
            <p>
              Esta biografia pode ser ajustada com formacao, experiencias,
              projetos realizados, certificacoes e conquistas profissionais.
            </p>
          </div>
        </div>
      </section>

      <footer
        id="contato"
        className="border-t border-[#201916]/10 bg-white px-6 py-10 sm:px-10 lg:px-12"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">VPSoft</p>
            <p className="mt-1 text-sm text-[#5f514a]">
              Software para organizar ideias, processos e resultados.
            </p>
          </div>
          <a
            className="text-sm font-semibold text-[#8c5a3c] transition hover:text-[#201916]"
            href="mailto:contato@vbpassos.dev"
          >
            contato@vbpassos.dev
          </a>
        </div>
      </footer>
    </main>
  );
}
