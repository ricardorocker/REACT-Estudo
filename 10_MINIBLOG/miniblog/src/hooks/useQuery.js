import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export const useQuery = () => {
  // ?q=TESTE
  const { search } = useLocation();

  // Retorna um objeto com varios atributos, inclusive "get"
  return useMemo(() => new URLSearchParams(search), [search]);
};
