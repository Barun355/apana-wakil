import { Scale } from 'lucide-react';
import { SignInForm } from '../components/SignInSignUp/auth/SignInForm';

export const SignIn = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      
      <div className="hidden md:flex bg-blue-900 text-white p-12 flex-col justify-between">
        <div className="flex items-center space-x-2">
          <Scale size={32} />
          <span className="text-2xl font-serif">LegalConnect</span>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Simplify Your Legal Journey</h1>
          <p className="text-lg text-blue-100">
            Join thousands of clients and lawyers making legal services accessible and seamless.
          </p>
        </div>
        <div className="text-sm text-blue-200">
          © {new Date().getFullYear()} LegalConnect. All rights reserved.
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Login into your account</p>
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};