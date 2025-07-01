import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="ghost"
      className="text-foreground hover:text-white glass-hover"
      onClick={() => navigate("/")}
    >
      <ArrowLeft />
      Voltar
    </Button>
  );
};
