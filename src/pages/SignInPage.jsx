import { Link } from "react-router-dom";

export default function SignInPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      
      <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg md:grid-cols-2">
        
        {/* LEFT → FORM */}
        <div className="flex flex-col justify-center p-10">
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">
              Welcome Back
            </h1>
            <p className="text-slate-500">
              Sign in to your account
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
            />

            <button className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold hover:opacity-90">
              Sign In
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-violet-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>

        {/* RIGHT → ILLUSTRATION / AVATAR */}
        <div className="hidden items-center justify-center bg-violet-50 md:flex">
          
          <div className="flex flex-col items-center gap-6">
            
            {/* Avatar placeholder */}
            <div className="h-28 w-28 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold shadow-md">
              ?
            </div>

            {/* Text */}
            <p className="text-center text-slate-500 max-w-xs">
              Discover events, connect with people and grow your network.
            </p>

            {/* Decorative shapes */}
            <div className="flex gap-2 mt-4">
              <div className="h-16 w-6 rounded-full bg-violet-300" />
              <div className="h-24 w-6 rounded-full bg-violet-500" />
              <div className="h-20 w-6 rounded-full bg-purple-400" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}