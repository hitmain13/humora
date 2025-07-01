import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { CompanyIcon } from "./company-icon";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-glass-border">
      <div className="flex items-center justify-between py-2 px-4 sm:p-4 max-w-7xl mx-auto">
        <button
          className="flex items-center space-x-3"
          onClick={() => navigate("/")}
        >
          <CompanyIcon />
          <span className="text-2xl font-bold text-foreground tracking-tight hidden sm:block">
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
