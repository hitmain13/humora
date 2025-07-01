import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background hero-gradient flex items-center justify-center p-6">
      {/* Floating gradient orbs */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-gradient-blue/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-gradient-pink/20 rounded-full blur-3xl animate-pulse delay-1500 pointer-events-none"></div>

      <Card className="w-full max-w-md glass-effect border-glass-border relative z-10">
        <CardHeader className="text-center p-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F32890c9d769e420f993df6a7c6d5461f%2Fbcc1ecc187d54e1a8e170d8c5471fb1e?format=webp&width=800"
            alt="Humora"
            className="w-16 h-16 mx-auto mb-6"
          />
          <CardTitle className="text-3xl font-light text-foreground mb-3">
            Criar conta no Humora
          </CardTitle>
          <p className="text-muted-foreground text-lg">
            Comece sua jornada de autoconhecimento emocional
          </p>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-foreground font-medium">
                Nome completo
              </Label>
              <Input
                id="name"
                placeholder="Seu nome"
                required
                className="glass-effect border-glass-border focus:border-white/30 text-foreground placeholder:text-muted-foreground h-12"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="glass-effect border-glass-border focus:border-white/30 text-foreground placeholder:text-muted-foreground h-12"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="password" className="text-foreground font-medium">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                required
                className="glass-effect border-glass-border focus:border-white/30 text-foreground h-12"
              />
            </div>
            <div className="space-y-3">
              <Label
                htmlFor="confirmPassword"
                className="text-foreground font-medium"
              >
                Confirmar senha
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                className="glass-effect border-glass-border focus:border-white/30 text-foreground h-12"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-white/90 font-semibold py-6 text-lg metal-shine"
            >
              Criar conta
            </Button>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <Button
                  variant="link"
                  className="p-0 text-gradient-purple hover:text-gradient-blue"
                  onClick={() => navigate("/login")}
                >
                  Entrar
                </Button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
