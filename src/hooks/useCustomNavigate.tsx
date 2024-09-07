import { useNavigate } from "react-router-dom";
import uiStore from "../stores/UIStore.ts";

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  return (page) => {
    navigate(page);
    uiStore.setPage(page);
  };
};
