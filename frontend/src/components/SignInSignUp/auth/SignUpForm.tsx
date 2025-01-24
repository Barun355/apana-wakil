import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/button";
import { signUp } from "../../../lib/auth";
import { globalState } from "../../../store/store";
import useReducerPlus from "../../../hooks/useReducerPlus";
import { option } from "framer-motion/client";

interface SignUpFormProps {
  userType: "client" | "lawyer" | "";
  gLogin: any;
}

export const SignUpForm = ({ userType, gLogin }: SignUpFormProps) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    ...(userType === "lawyer" && {
      practiceArea: "",
      experience: "",
      barLicenseNumber: "",
      photo: null as File | null,
    }),
  });

  const { set, user } = globalState();
  const [state, update] = useReducerPlus({
    isLoading: false,
    error: "",
    email: "",
    role: "",
    password: "",
  });

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up 47:", userType);
    // Add sign up logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Password doesnt match.");
      return;
    }
    try {
      update({
        isLoading: true,
      });
      const options = {
        email: formData.email,
        password: formData.password,
        role: userType.toUpperCase(),
        firstName: formData.name.split(" ")[0],
        lastName: formData.name.split(" ")[1],
      }
      console.log(option)
      const [data, err] = await signUp(options);
      console.log(`Sign Up 64: ${data}`);
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
      data.role?.toLowerCase() === 'lawyer' ?navigate('/lawyer/dashboard'): navigate('/client/dashboard')
    } catch (error) {
      console.log(error);
    } finally {
      update({
        isLoading: false,
      });

      // setFormData({
      //   name: "",
      //   email: "",
      //   password: "",
      //   confirmPassword: "",
      //   phone: "",
      //   address: "",
      //   ...(userType === "lawyer" && {
      //     practiceArea: "",
      //     experience: "",
      //     barLicenseNumber: "",
      //     photo: null as File | null,
      //   }),
      // });

    }
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files?.[0]) {
  //     setFormData({ ...formData, photo: e.target.files[0] });
  //   }
  // };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
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
          <Input
            label="Confirm Password"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          {/* <Input
            label="Phone Number"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <Input
            label="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          /> */}

          {/* {userType === "lawyer" && (
            <>
              <Input
                label="Practice Area"
                required
                value={formData.practiceArea}
                onChange={(e) =>
                  setFormData({ ...formData, practiceArea: e.target.value })
                }
              />
              <Input
                label="Experience (years)"
                type="number"
                required
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
              />
              <Input
                label="Bar License Number"
                required
                value={formData.barLicenseNumber}
                onChange={(e) =>
                  setFormData({ ...formData, barLicenseNumber: e.target.value })
                }
              />
              <div>
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
              </div>
            </>
          )} */}
        </div>

        <Button type="submit" fullWidth onClick={handleSubmit}>
          Sign Up
        </Button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signin")}
            className="text-blue-900 hover:text-blue-800 font-medium"
          >
            Sign in!
          </button>
        </p>
      </form>
      {/* <Button type="submit" fullWidth onClick={gLogin}>
        Google Login
      </Button> */}
    </>
  );
};
