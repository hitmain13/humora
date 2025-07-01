import { CompanyIcon } from "@/components/company-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Report() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-glass-border">
        <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <CompanyIcon className="w-10 h-10" />
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
              onClick={() => navigate("/profile")}
              className="text-foreground hover:text-white glass-hover px-4"
            >
              Perfil
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 pt-32">
        <Card className="glass-effect border-glass-border">
          <CardHeader className="p-8 text-center">
            <CardTitle className="text-3xl font-light text-foreground">
              Relatórios PDF
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-12 px-8">
            <p className="text-muted-foreground mb-6 text-lg">
              Esta página será implementada em breve com geração de relatórios
              PDF personalizados com insights de IA.
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
