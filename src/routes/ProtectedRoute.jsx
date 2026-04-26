import { Navigate } from "react-router-dom";

// Prüfen ob der Benutzer eingeloggt ist
export default function ProtectedRoute({ children }) {
  // Token aus localStorage lesen
  const token = localStorage.getItem("token");

  // Kein Token - zur Login-Page weiterleiten
  if (!token) {
    return <Navigate to="/signin" />;
  }

  // Token vorhanden - Page anzeigen
  return children;
}
