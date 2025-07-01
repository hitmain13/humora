import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background hero-gradient flex items-center justify-center p-6">
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-purple/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-blue/20 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>

      <Card className="w-full max-w-md glass-effect border-glass-border relative z-10">
        <CardHeader className="text-center p-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F32890c9d769e420f993df6a7c6d5461f%2Fbcc1ecc187d54e1a8e170d8c5471fb1e?format=webp&width=800"
            alt="Humora"
            className="w-16 h-16 mx-auto mb-6"
          />
          <CardTitle className="text-3xl font-light text-foreground mb-3">
            Entrar no Humora
          </CardTitle>
          <p className="text-muted-foreground text-lg">
            Acesse sua conta para continuar monitorando suas emoções
          </p>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <form onSubmit={handleSubmit} className="space-y-6">
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
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-white/90 font-semibold py-6 text-lg metal-shine"
            >
              Entrar
            </Button>
            <div className="text-center space-y-4">
              <Button
                variant="link"
                onClick={() => navigate("/forgot-password")}
                className="text-muted-foreground hover:text-foreground"
              >
                Esqueci minha senha
              </Button>
              <p className="text-sm text-muted-foreground">
                Não tem uma conta?{" "}
                <Button
                  variant="link"
                  className="p-0 text-gradient-purple hover:text-gradient-blue"
                  onClick={() => navigate("/register")}
                >
                  Cadastre-se
                </Button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
