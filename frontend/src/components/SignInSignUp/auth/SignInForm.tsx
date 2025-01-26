import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/button";
import { globalState } from "../../../store/store";
import useReducerPlus from "../../../hooks/useReducerPlus";
import { Role } from "../../../lib/types";
import { signIn } from "../../../lib/auth";

export const SignInForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { set, user } = globalState();
  const [state, update] = useReducerPlus({
    isLoading: false,
    error: "",
    email: "",
    role: Role.LAWYER,
    password: "",
  });

  useEffect(() => {
    
    if (user) {
      if (user.role === Role.CLIENT) {
        navigate("/client/dashboard");
      } else {
        navigate("/lawyer/dashboard");
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", state.role);
    // Add sign up logic here
    try {
      update({
        isLoading: true,
      });
      console.log("sigin: ", state);
      const [data, err] = await signIn({
        email: state.email,
        password: state.password,
        role: state.role,
      });
      console.log(`Sign In: ${data}`);
      if (err) {
        update({
          error: err.message,
          isLoading: false,
        });
        update({
          isLoading: false,
        });
        console.log(err);
        return;
      }
      set({
        user: data,
      });
      console.log(`Role Signin: ${data.role}`);
      if (data.role?.toLowerCase() === "lawyer") {
        navigate("/lawyer/dashboard");
      } else {
        navigate("/client/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      update({
        isLoading: false,
      });
    }
  };

  return (
    <form className="space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
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
          onChange={(e) =>
            update({ password: e.target.value })
          }
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[34px] text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-blue-900 focus:ring-blue-900"
            checked={state.role !== Role.CLIENT ? true : false}
            onChange={(e) => {
              update({
                role: !e.target.checked ? Role.CLIENT : Role.LAWYER,
              });
            }}
          />
          <span className="text-sm text-gray-600">As Lawyer</span>
        </label>
        <button
          type="button"
          onClick={() => navigate("/recover-password")}
          className="text-sm text-red-500 hover:text-red-600"
        >
          Recover Password
        </button>
      </div>

      <Button type="submit" fullWidth disabled={state.isLoading ? true: false}>
        Log In
      </Button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="text-blue-900 hover:text-blue-800 font-medium"
        >
          Sign up!
        </button>
      </p>
    </form>
  );
};
