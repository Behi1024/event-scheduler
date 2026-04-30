import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  // Token prüfen
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Logout
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/signin");
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-purple-600">Event Scheduler</div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-600 font-semibold" : "hover:text-purple-600"
          }
        >
          Home
        </NavLink>
        {token && (
          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive
                ? "text-purple-600 font-semibold"
                : "hover:text-purple-600"
            }
          >
            Create Event
          </NavLink>
        )}
        {token && (
          <NavLink
            to="/my-events"
            className={({ isActive }) =>
              isActive
                ? "text-purple-600 font-semibold"
                : "hover:text-purple-600"
            }
          >
            My Events
          </NavLink>
        )}
      </div>

      {/* Auth Buttons */}
      {token ? (
        // Eingeloggt - Logout-Button anzeigen
        <div className="flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Log out
          </button>
        </div>
      ) : (
        // Nicht eingeloggt - Login und Signup anzeigen
        <div className="flex items-center gap-3">
          <Link to="/signin" className="text-gray-600 hover:text-purple-600">
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}
