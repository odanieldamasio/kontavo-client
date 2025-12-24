import { a } from 'framer-motion/client';
export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-card border-b border-[#EBEEEC] z-50 backdrop-blur-sm bg-card/80">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="text-lg font-semibold text-foreground">
             <img
                src="/imgs/logo-black.svg"
                alt="Kontavo Brand"
                className="!w-[120px] !h-auto !max-w-none inline-block rounded-lg"

              />
          </div>
          <a href="/login" className="inline-flex items-center justify-center gap-3 rounded-md text-sm font-medium transition-colors [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-foreground text-background hover:bg-foreground/90">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Entrar
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance leading-tight">
                Simplifique suas finanças com o Kontavo
              </h1>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Controle receitas, despesas e veja suas movimentações de forma clara e organizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/login" className="inline-flex items-center justify-center gap-3 rounded-md text-sm font-medium transition-colors [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#0a1033] text-white hover:bg-[#1e40af]">
                  Começar agora
                </a>
              </div>
            </div>

            {/* Right: Dashboard Image */}
            <div className="relative">
              <img
                src="/financial-dashboard-mockup-with-charts-and-transac.png"
                alt="Dashboard Kontavo"
                className="w-full rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground text-balance">
              Tudo que você precisa para gerenciar suas finanças
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Recursos essenciais para manter o controle total do seu negócio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Benefit Card 1 */}
            <div className="p-6 border-[#EBEEEC] border bg-white rounded-lg hover:border-accent/50 transition-colors group">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1.5">Acompanhe receitas e despesas</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Registre todas as suas movimentações financeiras de forma simples e rápida.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="p-6 border-[#EBEEEC] border bg-white rounded-lg hover:border-accent/50 transition-colors group">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1.5">Visualize seu saldo em tempo real</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Tenha uma visão clara do seu saldo atual e histórico financeiro.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="p-6 border-[#EBEEEC] border bg-white rounded-lg hover:border-accent/50 transition-colors group">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1.5">Veja gráficos de crescimento mensal</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Acompanhe a evolução das suas finanças com gráficos intuitivos.
              </p>
            </div>

            {/* Benefit Card 4 */}
            <div className="p-6 border-[#EBEEEC] border bg-white rounded-lg hover:border-accent/50 transition-colors group">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1.5">Tome decisões com clareza financeira</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Dados organizados para decisões mais inteligentes no seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 border-[#EBEEEC] border bg-white rounded-lg text-center space-y-4">
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground text-balance">
              Controle financeiro simplificado
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              O Kontavo foi desenvolvido para pequenos empreendedores e freelancers que precisam de uma solução simples
              e eficiente para gerenciar suas finanças. Com uma interface intuitiva e recursos essenciais, você mantém o
              controle total do seu negócio sem complicações.
            </p>
            <a href="/login" className="inline-flex items-center justify-center gap-3 rounded-md text-sm font-medium transition-colors [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#0a1033] text-white hover:bg-[#1e40af]">
              Começar gratuitamente
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-[#EBEEEC] py-6 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-xs">© 2025 Kontavo – Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
