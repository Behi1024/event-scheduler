import { Link } from "react-router-dom";
import signUpIllustration from "../assets/images/signup-illustration.png";

export default function SignUpPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 items-center md:grid-cols-[0.9fr_1.1fr]">
        
        {/* LEFT → FORM */}
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900">
            Create Account
          </h1>
          <p className="mt-1 text-slate-500">
            Join and start creating events
          </p>

          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
            />

            <button className="h-12 w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold hover:opacity-90">
              Sign Up
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/signin" className="text-violet-600 font-medium">
              Sign in
            </Link>
          </p>
        </div>

        {/* RIGHT → HERO IMAGE */}
        <div className="hidden md:flex items-center justify-center relative">
          <img
            src={signUpIllustration}
            alt="Sign up"
            className="
              w-[560px]
              lg:w-[640px]
              xl:w-[700px]
              max-w-none
              object-contain
              translate-x-[-20px]
            "
          />
        </div>
      </div>
    </div>
  );
}