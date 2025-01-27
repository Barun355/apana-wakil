import { Eye, EyeOff } from "lucide-react";
import useReducerPlus from "../../hooks/useReducerPlus";
import { Role } from "../../lib/types";
import { Input } from "../ui/Input";
import { useState } from "react";
import { Button } from "@mui/material";
import { globalState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../lib/api";

const LawyerOnboarding = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { set } = globalState();
  const navigate = useNavigate();

  const [state, update] = useReducerPlus({
    isLoading: false,
    firstName: "",
    lastName: "",
    error: "",
    email: "",
    role: Role.LAWYER,
    password: "",
    confirmPassword: "",
    Lawyer: {
      profile_description: "",
      yoe: 0,
      specialization: "",
      license_number: "",
      bar_association_membership: "",
      consultationFee: 0,
      website: "",
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add sign up logic here
    if (state.password !== state.confirmPassword) {
      alert("Password doesnt match.");
      return;
    }

    console.log(state);

    try {
      update({
        isLoading: true,
      });
      const options = {
        email: state.email,
        password: state.password,
        role: Role.LAWYER,
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
      navigate("/lawyer/dashboard");
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
          <Input
            label="Specialization"
            required
            value={state.Lawyer.specialization}
            onChange={(e) =>
              update({ Lawyer: { specialization: e.target.value } })
            }
          />
          <Input
            label="Experience (years)"
            type="number"
            required
            value={state.Lawyer.yoe}
            onChange={(e) =>
              update({ Lawyer: { yoe: Number(e.target.value) } })
            }
          />
          <Input
            label="Bar License Number"
            required
            value={state.Lawyer.bar_association_membership}
            onChange={(e) =>
              update({ Lawyer: { bar_association_membership: e.target.value } })
            }
          />
          {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Photo <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer rounded-md font-medium text-blue-900 hover:text-blue-800">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div> */}
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

export default LawyerOnboarding;
