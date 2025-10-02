import { ReactNode } from "react";

interface BotonProps {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
}

function BotonCarga({ children, isLoading, onClick }: BotonProps) {
  return (
    <button
      type="button"
      disabled={isLoading}
      className={`btn btn-${isLoading === true ? "secondary" : "primary"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BotonCarga;
