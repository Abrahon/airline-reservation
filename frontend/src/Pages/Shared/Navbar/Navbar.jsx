import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../context/AuthProvider";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const {user,logOut} = useContext(AuthContext);
    console.log(user)
    

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleServicesDropdown = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const togglePagesDropdown = () => {
        setIsPagesOpen(!isPagesOpen);
    };

    console.log(user?.displayName);

    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((err) => console.log(err));
    };
    return (
      <div>
        <nav className="sticky top-0 z-50 bg-red-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <h1 className="font-bold text-2xl text-white hover:text-green-600 italic">
                    WingBooker
                    </h1>
                  </Link>
                </div>
              </div>
    
              {/* Mobile Menu Toggle */}
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={toggleNavbar}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none"
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg
                    className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
    
              {/* Desktop Menu */}
              <div className={`hidden md:flex items-center`}>
                <div className="ml-4 flex items-center md:ml-6 gap-4">
                  <Link to="/" className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link to="/about" className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                  <Link to="/contact" className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
                  <Link to="/dashboard" className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
    
                  {user?.email ? (
                    <>
                      <span className="text-green-300 font-semibold">
                        {user.displayName || "User"}
                      </span>
                      <button
                        onClick={handleLogOut}
                        className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link to="/login" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                      Sign In
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
    
          {/* Mobile menu */}
          <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="/about" className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
              <Link to="/contact" className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
              {user?.email ? (
                <>
                  <span className="block text-green-300 font-semibold px-3">Hi, {user.displayName || "User"}</span>
                  <button
                    onClick={handleLogOut}
                    className="text-white bg-red-600 hover:bg-red-700 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
    
};

export default Navbar;