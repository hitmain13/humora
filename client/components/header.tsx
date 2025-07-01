import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-glass-border">
      <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <button
          className="flex items-center space-x-3"
          onClick={() => navigate("/")}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F32890c9d769e420f993df6a7c6d5461f%2F146fc03c343146459ddb91594750a5ab?format=webp&width=800"
            alt="Humora"
            className="w-12 h-16"
          />
          <span className="text-2xl font-bold text-foreground tracking-tight">
            Humora
          </span>
        </button>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/login")}
            className="text-foreground hover:text-white glass-hover"
          >
            Entrar
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="bg-white text-black hover:bg-white/90 font-semibold px-6 metal-shine"
          >
            Cadastrar-se
          </Button>
        </div>
      </div>
    </nav>
  );
};
