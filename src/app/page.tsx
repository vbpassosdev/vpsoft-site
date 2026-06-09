
const skills = [
  "Desenvolvimento de sistemas",
  "Delphi",
  "SQL Server",
  "React / Next.js",
  "APIs e integrações",
  "Automação de processos",
  "ERP",
  "WhatsApp / Twilio",
  "Boletos e NF-e",
];

const projects = [
  {
    name: "CRM de Veículos",
    url: "https://crm-veiculos-vbpassos-projects.vercel.app/",
  },
  {
    name: "Sistema Financeiro",
    url: "https://financas-vpsoft.vercel.app/",
  },
  {
    name: "Consulta SCPC",
    url: "https://consultascpc.vercel.app/",
  },
  {
    name: "Agendamentos",
    url: "https://agendamentos-project.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2ec] text-[#201916]">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10">
        <header className="flex items-center justify-between border-b border-[#201916]/10 pb-6">
          <a href="#inicio" className="text-xl font-semibold">
            Vanessa Passos
          </a>

          <nav className="hidden gap-6 text-sm font-medium text-[#5f514a] sm:flex">
            <a href="#sobre">Sobre</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <section id="inicio" className="flex flex-1 items-center py-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#8c5a3c]">
              Desenvolvedora de Software
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Olá, eu sou Vanessa Passos.
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#5f514a]">
              Trabalho com desenvolvimento de sistemas, integrações, automação
              de processos e soluções digitais para empresas. Minha experiência
              une programação, análise de processos e visão prática de negócio.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="#habilidades"
                className="rounded-full bg-[#201916] px-6 py-3 text-sm font-semibold text-white"
              >
                Ver habilidades
              </a>

              <a
                href="#projetos"
                className="rounded-full border border-[#201916]/20 px-6 py-3 text-sm font-semibold"
              >
                Ver projetos
              </a>
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

      <section id="projetos" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
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
                <p className="mt-3 text-sm font-medium text-[#8c5a3c] transition group-hover:text-[#201916]">
                  Abrir projeto
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer id="contato" className="px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 border-t border-[#201916]/10 pt-8">
          <p className="font-semibold">Vanessa Passos</p>
          <a
            href="mailto:contato@vbpassos.dev"
            className="text-sm text-[#8c5a3c]"
          >
            contato@vbpassos.dev
          </a>
        </div>
      </footer>
    </main>
  );
}
