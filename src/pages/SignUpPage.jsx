import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg md:grid-cols-2">
        
        {/* LEFT → FORM */}
        <div className="flex flex-col justify-center p-10">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">
              Create Account
            </h1>
            <p className="text-slate-500">
              Join and start creating events
            </p>
          </div>

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

            <button className="h-12 w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 font-semibold text-white hover:opacity-90">
              Sign Up
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-violet-600">
              Sign in
            </Link>
          </p>
        </div>

        {/* RIGHT → ILLUSTRATION / AVATAR */}
        <div className="hidden items-center justify-center bg-violet-50 md:flex">
          <div className="flex flex-col items-center gap-6">
            
            {/* Avatar placeholder */}
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-xl font-bold text-white shadow-md">
              ?
            </div>

            {/* Text */}
            <p className="max-w-xs text-center text-slate-500">
              Create your profile, join events and start building your own community.
            </p>

            {/* Decorative shapes */}
            <div className="mt-4 flex gap-2">
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