
const skills = [
  "ERP e sistemas empresariais",
  "Delphi e SQL Server",
  "React e Next.js",
  "APIs e integrações",
  "Automação de processos",
  "WhatsApp e Twilio",
  "Boletos e integrações bancárias",
  "NF-e e rotinas fiscais",
  "ASP.NET",
];

const projects = [
  {
    description:
      "Gestão de veículos, clientes, leads, atendimentos e campanhas integradas ao WhatsApp.",
    name: "CRM de Veículos",
    url: "https://crm-veiculos-vbpassos-projects.vercel.app/",
  },
  {
    description:
      "Emissão de boletos, cadastros financeiros e processos de envio por e-mail e WhatsApp.",
    name: "Sistema Financeiro",
    url: "https://financas-vpsoft.vercel.app/",
  },
  {
    description:
      "Interface para consultas de crédito e organização do histórico de resultados.",
    name: "Consulta SCPC",
    url: "https://consultascpc.vercel.app/",
  },
  {
    description:
      "Organização de agendas, horários e solicitações de atendimento.",
    name: "Agendamentos",
    url: "https://agendamentos-project.vercel.app/",
  },
];

const experience = [
  "Desenvolvimento e evolução de sistemas ERP",
  "Modelagem de dados e rotinas em SQL Server",
  "Integrações fiscais, bancárias e de mensageria",
  "Modernização de aplicações com tecnologias web",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2ec] text-[#201916]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
        <header className="flex items-center justify-between border-b border-[#201916]/10 pb-6">
          <a href="#inicio" className="flex items-center gap-3 font-semibold">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#201916] text-sm text-white">
              VP
            </span>
            <span>Vanessa Passos</span>
          </a>

          <nav className="hidden gap-6 text-sm font-medium text-[#5f514a] sm:flex">
            <a href="#sobre">Sobre</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#experiencia">Experiência</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <section
          id="inicio"
          className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1fr_0.55fr]"
        >
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#8c5a3c]">
              Desenvolvimento de software para empresas
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Transformo processos empresariais em sistemas integrados.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f514a]">
              Sou Vanessa Passos, desenvolvedora especializada em ERP,
              integrações, automação de processos e soluções web. Uno
              conhecimento técnico e visão de negócio para criar ferramentas
              que melhoram controle, produtividade e tomada de decisão.
            </p>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#8c5a3c]">
              ERP • Integrações fiscais • WhatsApp Business • Sistemas web
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:passos.vanessa@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio"
                className="rounded-full bg-[#201916] px-6 py-3 text-sm font-semibold text-white"
              >
                Falar sobre um projeto
              </a>

              <a
                href="#projetos"
                className="rounded-full border border-[#201916]/20 px-6 py-3 text-sm font-semibold"
              >
                Ver projetos
              </a>
            </div>
          </div>

          <div className="mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-[3rem] border border-[#201916]/10 bg-white shadow-sm">
            <div className="text-center">
              <span className="mx-auto flex size-28 items-center justify-center rounded-full bg-[#201916] text-4xl font-semibold text-white">
                VP
              </span>
              <p className="mt-5 font-semibold">Vanessa Passos</p>
              <p className="mt-1 text-sm text-[#8c5a3c]">
                Software • Processos • Integrações
              </p>
            </div>
          </div>
        </section>
      </section>

      <section id="sobre" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8c5a3c]">
            Sobre mim
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Tecnologia com visão prática.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f514a]">
            Sou desenvolvedora e atuo criando sistemas que ajudam empresas a
            organizar informações, melhorar rotinas e reduzir retrabalho. Tenho
            experiência com ERP, banco de dados, integrações, sistemas web e
            automações.
          </p>
        </div>
      </section>

      <section id="habilidades" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8c5a3c]">
            Habilidades
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Áreas em que atuo.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl bg-white p-5 font-medium shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="bg-[#201916] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9b899]">
            Experiência
          </p>

          <div className="mt-4 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-4xl font-semibold">
              Tecnologia aplicada à operação real das empresas.
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {experience.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8c5a3c]">
            Projetos
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Alguns projetos desenvolvidos.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.url}
                href={project.url}
                rel="noopener noreferrer"
                target="_blank"
                className="group rounded-2xl border border-[#201916]/10 bg-[#f6f2ec] p-6 transition hover:-translate-y-1 hover:border-[#8c5a3c]/40 hover:shadow-md"
              >
                <p className="font-semibold">{project.name}</p>
                <p className="mt-3 text-sm leading-6 text-[#5f514a]">
                  {project.description}
                </p>
                <p className="mt-3 text-sm font-medium text-[#8c5a3c] transition group-hover:text-[#201916]">
                  Abrir projeto
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#201916]/10 bg-white px-6 py-10 sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8c5a3c]">
            Disponibilidade
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold">
            Também colaboro em projetos freelance para outras empresas.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#5f514a]">
            Estou disponível para projetos pontuais de desenvolvimento,
            integrações, automações e apoio na evolução de sistemas existentes.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:passos.vanessa@gmail.com?subject=Projeto%20freelance"
              className="rounded-full bg-[#201916] px-6 py-3 text-sm font-semibold text-white"
            >
              Entrar em contato
            </a>
            <a
              href="https://github.com/vbpassosdev"
              rel="noopener noreferrer"
              target="_blank"
              className="rounded-full border border-[#201916]/20 px-6 py-3 text-sm font-semibold"
            >
              Ver GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-[#201916]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">Vanessa Passos</p>
          <div className="flex flex-wrap gap-5 text-sm text-[#8c5a3c]">
            <a href="mailto:passos.vanessa@gmail.com">
              passos.vanessa@gmail.com
            </a>
            <a
              href="https://github.com/vbpassosdev"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vanessabpassos"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/5519997027091"
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp: (19) 99702-7091
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
