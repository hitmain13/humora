import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Heart,
  TrendingUp,
  FileText,
  Sparkles,
  ArrowRight,
  Calendar,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/header";
import { CompanyIcon } from "@/components/company-icon";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-40 hero-gradient">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge
            variant="secondary"
            className="mb-8 glass-effect border-glass-border px-4 py-2 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 mr-2 text-gradient-blue" />
            Novo: Análise com IA avançada
          </Badge>

          <h1 className="text-6xl md:text-8xl font-light text-foreground mb-8 tracking-tight">
            Monitore suas emoções com{" "}
            <span className="gradient-text font-normal">
              inteligência artificial
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Registre seu humor diário, visualize padrões e receba insights
            personalizados para melhorar seu bem-estar emocional.
          </p>

          <div className="flex items-center justify-center gap-6 flex-wrap z-10">
            <Button
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="text-lg px-8 py-4 bg-white text-black hover:bg-white/90 font-semibold metal-shine h-14 z-10"
            >
              Começar agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 glass-effect border-glass-border hover:border-white/30 text-foreground h-14 glass-hover z-10"
            >
              Ver demonstração
            </Button>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center -mt-24 w-full max-w-5xl mx-auto animate-levitate -z-10">
            <div className="absolute -inset-x-20 -bottom-20 bg-gradient-to-r from-gradient-purple/5 to-gradient-blue/10 blur-3xl rounded-full"></div>
            <img
              src="/hero-mock-up.png"
              alt="Humora app mock-up"
              className="relative max-w-[512px] h-auto rounded-2xl z-0"
            />
          </div>
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-purple/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-blue/20 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-pink/20 rounded-full blur-3xl animate-pulse delay-2000 pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <Badge className="mb-6 glass-effect border-glass-border px-4 py-2 text-sm">
            Recursos Avançados
          </Badge>
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight">
            Tudo que você precisa para{" "}
            <span className="gradient-text">entender suas emoções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ferramentas simples e poderosas para o autoconhecimento emocional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="glass-effect border-glass-border glass-hover group">
            <CardHeader className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gradient-purple to-gradient-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-foreground mb-3">
                Registro Diário
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                Registre seu humor, energia e acontecimentos importantes do dia
                com interface intuitiva
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-effect border-glass-border glass-hover group">
            <CardHeader className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gradient-blue to-gradient-pink rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-foreground mb-3">
                Visualizações
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                Gráficos interativos e dashboards avançados para acompanhar suas
                tendências emocionais
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-effect border-glass-border glass-hover group">
            <CardHeader className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gradient-pink to-gradient-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-foreground mb-3">
                Análise com IA
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                Insights personalizados e resumos semanais gerados
                automaticamente por inteligência artificial
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-effect border-glass-border glass-hover group">
            <CardHeader className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gradient-yellow to-gradient-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-foreground mb-3">
                Relatórios
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                Exporte relatórios detalhados em PDF para compartilhar com
                profissionais de saúde
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
            Confiável e Seguro
          </p>
          <div className="flex items-center justify-center gap-12 opacity-60">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-medium">Certificado ISO</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6" />
              <span className="text-sm font-medium">LGPD Compliant</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6" />
              <span className="text-sm font-medium">
                Aprovado por Psicólogos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="relative">
          <Card className="glass-effect border-glass-border overflow-hidden">
            <div className="absolute inset-0 gradient-bg opacity-30"></div>
            <CardContent className="relative p-16 text-center">
              <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight leading-tight">
                O futuro do seu{" "}
                <span className="gradient-text">bem-estar emocional</span>{" "}
                começa aqui
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Junte-se a milhares de pessoas que já transformaram sua saúde
                mental com o Humora e nossa tecnologia de IA.
              </p>
              <div className="flex items-center justify-center gap-6">
                <Button
                  size="lg"
                  onClick={() => navigate("/register")}
                  className="text-lg px-8 py-4 bg-white text-black hover:bg-white/90 font-semibold metal-shine h-14"
                >
                  Criar conta gratuita
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 glass-effect border-glass-border hover:border-white/30 text-foreground h-14 glass-hover"
                >
                  Falar conosco
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-glass-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <CompanyIcon className="w-10 h-10" />
                <span className="text-2xl font-bold text-foreground">
                  Humora
                </span>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                A plataforma mais avançada para monitoramento emocional com
                inteligência artificial. Transforme sua saúde mental com
                insights personalizados.
              </p>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Produto</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Análise IA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Relatórios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Empresa</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Carreiras
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Termos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-glass-border">
            <p className="text-muted-foreground">
              © 2025 Humora. Todos os direitos reservados. Feito com 🍇 by{" "}
              <a
                href="https://www.linkedin.com/in/fabio-matsumoto/"
                className="underline underline-offset-1"
              >
                Matsu
              </a>
            </p>
            <div className="flex items-center space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
