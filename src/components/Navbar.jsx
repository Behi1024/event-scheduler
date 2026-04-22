import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <div className="text-xl font-bold text-purple-600">
        Event Scheduler
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-gray-700">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/create" className="hover:text-purple-600">Create Event</Link>
        <Link to="/my-events" className="hover:text-purple-600">My Events</Link>
      </div>

      {/* Auth Buttons */}
    
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
    </nav>
  );
}