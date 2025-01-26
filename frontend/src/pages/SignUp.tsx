import { Scale } from "lucide-react";
import { useEffect } from "react";
import { SignUpForm } from "../components/SignInSignUp/auth/SignUpForm";
import { Toggle } from "../components/ui/Toggle";
import useGoogleAuth from "../hooks/googleAuth";
import useReducerPlus from "../hooks/useReducerPlus";
import { globalState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { Role } from "../lib/types";
import { gLoginReq } from "../lib/auth";

export const SignUp = () => {

  const { glogin, guser } = useGoogleAuth();

  const navigate = useNavigate();

  const { set, user } = globalState();
  const [state, update] = useReducerPlus({
    isLoading: false,
    error: "",
    email: "",
    role: Role.CLIENT,
    password: "",
  });
  
  // const createGuser = async () => {
  //   try {
  //     if (!guser) {
  //       return;
  //     }
  //     const accessToken = guser.accessToken;

  //     update({
  //       isLoading: true,
  //     });
  //     const [data, err] = await gLoginReq({ accessToken, role: state?.role });
  //     if (err) {
  //       update({
  //         error: err.message,
  //         isLoading: false,
  //       });
  //       // toast.error(err.message);
  //       return;
  //     }
  //     set({
  //       user: data,
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     update({
  //       isLoading: false,
  //     });
  //   }
  // };

  useEffect(() => {
    if (user) {
      user.role === Role.LAWYER ? navigate("/lawyer/dashboard"): navigate('/client/dashboard');
    }
  }, [user]);

  // useEffect(() => {
  //   if (guser) {
  //     createGuser();
  //   }
  // }, [guser]);

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:flex bg-blue-900 text-white p-12 flex-col justify-between">
        <div className="flex items-center space-x-2">
          <Scale size={32} />
          <span className="text-2xl font-serif">LegalConnect</span>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Simplify Your Legal Journey
          </h1>
          <p className="text-lg text-blue-100">
            Join thousands of clients and lawyers making legal services
            accessible and seamless.
          </p>
        </div>
        <div className="text-sm text-blue-200">
          © {new Date().getFullYear()} LegalConnect. All rights reserved.
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Get Started with LegalConnect
            </h2>
            <p className="text-gray-600 mt-2">Getting started is easy!!</p>
            <div className="mt-6 flex justify-center">
              <Toggle
                options={["Client", "Lawyer"]}
                selected={state.role === Role.CLIENT ? Role.CLIENT : Role.LAWYER}
                onChange={(value) =>
                  update({ role: value as Role})
                }
              />
            </div>
          </div>
          <SignUpForm role={state.role} gLogin={gLoginReq} />
        </div>
      </div>
    </div>
  );
};
