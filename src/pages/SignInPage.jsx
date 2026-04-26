import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signInIllustration from "../assets/images/signin-illustration.png";

export default function SignInPage() {
  // Page wechseln
  const navigate = useNavigate();

  // Felder speichern
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Formular abschicken
  async function handleSubmit() {
    setError("");

    try {
      // Daten an die API schicken
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        },
      );

      // Antwort lesen
      const data = await response.json();

      // Fehler anzeigen
      if (!response.ok) {
        setError(data.error || "Invalid email or password");
        return;
      }

      // Token speichern
      localStorage.setItem("token", data.token);

      // Zur Startseite weiterleiten
      navigate("/");
    } catch {
      // Server nicht erreichbar
      setError("Could not connect to server");
    }
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 items-center md:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
          <p className="mt-1 text-slate-500">Sign in to your account</p>

          <div className="mt-6 space-y-4">
            {/* E-Mail Feld */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
            />

            {/* Passwort Feld */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
            />

            {/* Fehlermeldung */}
            {error && <p className="text-sm text-red-500">{error}</p>}

            {/* Abschicken */}
            <button
              onClick={handleSubmit}
              className="h-12 w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold hover:opacity-90"
            >
              Sign In
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-violet-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center relative">
          <img
            src={signInIllustration}
            alt="Sign in"
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
