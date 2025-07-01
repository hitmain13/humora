import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Brain,
  Heart,
  Plus,
  TrendingUp,
  Calendar,
  Smile,
  Frown,
  Meh,
  ChevronDown,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/header";

const moodOptions = [
  { value: "1", label: "Muito baixo", icon: Frown, color: "text-red-500" },
  { value: "2", label: "Baixo", icon: Frown, color: "text-orange-500" },
  { value: "3", label: "Neutro", icon: Meh, color: "text-yellow-500" },
  { value: "4", label: "Bom", icon: Smile, color: "text-green-500" },
  { value: "5", label: "Excelente", icon: Smile, color: "text-purple-500" },
];

const energyOptions = [
  { value: "1", label: "Muito baixa" },
  { value: "2", label: "Baixa" },
  { value: "3", label: "Moderada" },
  { value: "4", label: "Alta" },
  { value: "5", label: "Muito alta" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mood: "",
    energy: "",
    impulsivity: false,
    sleptWell: false,
    events: "",
    observations: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registro salvo:", formData);
    // Here you would send the data to your API
  };

  const recentEntries = [
    {
      date: "Hoje",
      mood: 4,
      energy: 3,
      events: "Reunião importante no trabalho",
    },
    { date: "Ontem", mood: 3, energy: 4, events: "Dia tranquilo em casa" },
    { date: "Anteontem", mood: 5, energy: 5, events: "Encontro com amigos" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto p-6 pt-32">
        <div className="mb-12 text-center">
          <Badge className="mb-6 glass-effect border-glass-border px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2 text-gradient-purple" />
            Powered by AI
          </Badge>
          <h1 className="text-5xl md:text-6xl font-light text-foreground mb-4 tracking-tight">
            Seu <span className="gradient-text">bem-estar emocional</span> hoje
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Como você está se sentindo? Registre suas emoções e receba insights
            personalizados para melhorar sua saúde mental.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mood Entry Form */}
          <div className="lg:col-span-2">
            <Card className="glass-effect border-glass-border">
              <CardHeader className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br bg-white rounded-2xl flex items-center justify-center mb-4">
                  <Plus className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-2">
                  Novo Registro
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  Registre como você está se sentindo agora e receba insights
                  personalizados
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="mood">Humor (1-5)</Label>
                      <Select
                        value={formData.mood}
                        onValueChange={(value) =>
                          setFormData({ ...formData, mood: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Como está seu humor?" />
                        </SelectTrigger>
                        <SelectContent>
                          {moodOptions.map((option) => {
                            const Icon = option.icon;
                            return (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                <div className="flex items-center gap-2">
                                  <Icon className={`w-4 h-4 ${option.color}`} />
                                  {option.label}
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="energy">Energia (1-5)</Label>
                      <Select
                        value={formData.energy}
                        onValueChange={(value) =>
                          setFormData({ ...formData, energy: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Qual seu nível de energia?" />
                        </SelectTrigger>
                        <SelectContent>
                          {energyOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="impulsivity"
                        className="text-sm font-medium"
                      >
                        Senti-me impulsivo(a) hoje
                      </Label>
                      <Switch
                        id="impulsivity"
                        checked={formData.impulsivity}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, impulsivity: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="sleptWell"
                        className="text-sm font-medium"
                      >
                        Dormi bem na noite passada
                      </Label>
                      <Switch
                        id="sleptWell"
                        checked={formData.sleptWell}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, sleptWell: checked })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="events">Acontecimentos importantes</Label>
                    <Textarea
                      id="events"
                      placeholder="Descreva os principais eventos do seu dia..."
                      value={formData.events}
                      onChange={(e) =>
                        setFormData({ ...formData, events: e.target.value })
                      }
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="observations">Observações adicionais</Label>
                    <Textarea
                      id="observations"
                      placeholder="Outras reflexões sobre como você está se sentindo..."
                      value={formData.observations}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          observations: e.target.value,
                        })
                      }
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-white/90 font-semibold py-6 text-lg metal-shine"
                  >
                    Salvar Registro
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="glass-effect border-glass-border glass-hover">
              <CardHeader className="p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gradient-blue to-gradient-pink rounded-xl flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Resumo Semanal
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Humor médio</span>
                  <Badge className="glass-effect border-glass-border text-foreground">
                    3.8/5
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Energia média</span>
                  <Badge className="glass-effect border-glass-border text-foreground">
                    3.5/5
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Registros esta semana
                  </span>
                  <Badge className="glass-effect border-glass-border text-foreground">
                    5/7
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full glass-effect border-glass-border hover:border-white/30 text-foreground glass-hover"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Ver gráficos
                </Button>
              </CardContent>
            </Card>

            {/* Recent Entries */}
            <Card className="glass-effect border-glass-border glass-hover">
              <CardHeader className="p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gradient-pink to-gradient-yellow rounded-xl flex items-center justify-center mb-3">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Registros Recentes
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 space-y-4">
                {recentEntries.map((entry, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {entry.date}
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge className="glass-effect border-glass-border text-xs text-foreground">
                          H: {entry.mood}/5
                        </Badge>
                        <Badge className="glass-effect border-glass-border text-xs text-foreground">
                          E: {entry.energy}/5
                        </Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {entry.events}
                    </p>
                    {index < recentEntries.length - 1 && (
                      <Separator className="bg-glass-border" />
                    )}
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full glass-effect border-glass-border hover:border-white/30 text-foreground glass-hover"
                >
                  Ver todos os registros
                </Button>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="glass-effect border-glass-border glass-hover">
              <CardHeader className="p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gradient-yellow to-gradient-purple rounded-xl flex items-center justify-center mb-3">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Insight da Semana
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Você tem mostrado maior estabilidade emocional nos últimos
                  dias. Continue mantendo sua rotina de sono para melhores
                  resultados!
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full glass-effect border-glass-border hover:border-white/30 text-foreground glass-hover"
                >
                  Ver análise completa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
