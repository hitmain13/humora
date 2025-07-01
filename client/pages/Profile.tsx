import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-glass-border">
        <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F32890c9d769e420f993df6a7c6d5461f%2Fbcc1ecc187d54e1a8e170d8c5471fb1e?format=webp&width=800"
              alt="Humora"
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Humora
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="text-foreground hover:text-white glass-hover px-4"
            >
              Dashboard
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/moods")}
              className="text-foreground hover:text-white glass-hover px-4"
            >
              Histórico
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/report")}
              className="text-foreground hover:text-white glass-hover px-4"
            >
              Relatórios
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 pt-32">
        <Card className="glass-effect border-glass-border">
          <CardHeader className="p-8 text-center">
            <CardTitle className="text-3xl font-light text-foreground">
              Perfil do Usuário
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-12 px-8">
            <p className="text-muted-foreground mb-6 text-lg">
              Esta página será implementada em breve com configurações de perfil
              e preferências personalizadas.
            </p>
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-4 metal-shine"
            >
              Voltar ao Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
