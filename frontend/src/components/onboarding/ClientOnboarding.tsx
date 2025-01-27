import { Eye, EyeOff } from "lucide-react";
import useReducerPlus from "../../hooks/useReducerPlus";
import { Role } from "../../lib/types";
import { Input } from "../ui/Input";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { globalState } from "../../store/store";
import { signUp } from "../../lib/api";

const ClientOnBoarding = () => {
  const navigate = useNavigate();
  const { set } = globalState();

  const [showPassword, setShowPassword] = useState(false);

  const [state, update] = useReducerPlus({
    isLoading: false,
    firstName: "",
    lastName: "",
    error: "",
    email: "",
    role: Role.CLIENT,
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add sign up logic here
    if (state.password !== state.confirmPassword) {
      alert("Password doesnt match.");
      return;
    }
    try {
      update({
        isLoading: true,
      });
      const options = {
        email: state.email,
        password: state.password,
        role: Role.CLIENT,
        firstName: state.firstName,
        lastName: state.lastName,
      };
      const [data, err] = await signUp(options);
      if (err) {
        update({
          error: err.message,
          isLoading: false,
        });
        update({
          isLoading: false,
        });
        return;
      }
      set({
        user: data,
      });
      navigate("/client/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      update({
        isLoading: false,
      });
    }
  };

  return (
    <div className="space-y-6 w-full max-w-2xl">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="First Name"
            required
            value={state.firstName}
            onChange={(e) => update({ firstName: e.target.value })}
          />
          <Input
            label="Last Name"
            required
            value={state.lastName}
            onChange={(e) => update({ lastName: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            required
            value={state.email}
            onChange={(e) => update({ email: e.target.value })}
          />
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              required
              value={state.password}
              onChange={(e) => update({ password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[34px] text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <Input
            label="Confirm Password"
            type="password"
            required
            value={state.confirmPassword}
            onChange={(e) => update({ confirmPassword: e.target.value })}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </form>
      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          type="submit"
          onClick={() => navigate('/signin')}
          className="text-blue-900 hover:text-blue-800 font-medium"
        >
          Sign in!
        </button>
      </p>
    </div>
  );
};

export default ClientOnBoarding;
