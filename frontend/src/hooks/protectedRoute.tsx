import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { globalState } from "../store/store";
import useReducerPlus from "./useReducerPlus";
import { Role } from "../lib/types";
// import BarLoader from "./components/barLoader";

export const RequireAuth = ({ children, role }: { children: ReactElement, role?: Role }) => {
  const { user } = globalState();
  const navigate = useNavigate();
  const [state, update] = useReducerPlus({ isLoading: true });

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    } else {
      if (user.role === role){
        update({ isLoading: false });
        return;
      } else {
        navigate("/signin")
        return
      }
    }
  }, [user, navigate]);

  if (state.isLoading) {
    return <div>Loading</div>;
  }
  return children;
};