import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  // Update active link when route changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('#mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
      if (userDropdownOpen && !event.target.closest('#user-menu-button')) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen, userDropdownOpen]);

  // Navigation links data
  const navLinks = [
    { path: '/', name: 'Dashboard', icon: 'fa-home' },
    { path: '/projects', name: 'Projects', icon: 'fa-project-diagram' },
    { path: '/students', name: 'Students', icon: 'fa-users' },
    { path: '/schedule', name: 'Schedule', icon: 'fa-calendar-alt' },
    { path: '/documents', name: 'Documents', icon: 'fa-file-alt' },
    { path: '/login', name: 'Login/Signout', icon: 'fa-sign-in-alt' }
  ];

  return (
    <nav className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <i className="fas fa-graduation-cap text-2xl mr-2" />
              <span className="text-xl font-bold">FYP Supervisor</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:ml-6 md:flex md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                  activeLink === link.path
                    ? 'bg-blue-800 text-white'
                    : 'hover:bg-blue-600 text-blue-100'
                }`}
              >
                <i className={`fas ${link.icon} mr-2`} />
                {link.name}
              </Link>
            ))}
          </div>

          {/* User Profile and Mobile Menu Button */}
          <div className="flex items-center">
            {/* Notifications (Desktop) */}
            <div className="hidden md:block relative mr-4">
              <button
                className="p-1 rounded-full hover:bg-blue-600 focus:outline-none transition-colors"
                aria-label="Notifications"
              >
                <i className="fas fa-bell" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
              </button>
            </div>

            {/* User Profile Dropdown (Desktop) */}
            <div className="hidden md:ml-3 md:relative">
              <div>
                <button
                  id="user-menu-button"
                  className="flex items-center text-sm rounded-full focus:outline-none transition-colors"
                  onClick={toggleUserDropdown}
                  aria-expanded={userDropdownOpen}
                  aria-label="User menu"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <i className="fas fa-user" />
                  </div>
                  <span className="ml-2">Dr. Supervisor</span>
                  <i
                    className={`fas fa-chevron-down ml-1 text-xs transition-transform ${
                      userDropdownOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown menu */}
              {userDropdownOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white text-gray-800 z-50"
                  onMouseLeave={() => setUserDropdownOpen(false)}
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <i className="fas fa-user mr-2" /> Your Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <i className="fas fa-cog mr-2" /> Settings
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <i className="fas fa-sign-out-alt mr-2" /> Sign out
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden -mr-2 flex items-center">
              <button
                id="mobile-menu-button"
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-600 focus:outline-none transition-colors"
                onClick={toggleMobileMenu}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <i className="fas fa-times" />
                ) : (
                  <i className="fas fa-bars" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium flex items-center transition-colors ${
                activeLink === link.path
                  ? 'bg-blue-800 text-white'
                  : 'hover:bg-blue-600 text-blue-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className={`fas ${link.icon} mr-3`} />
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile User Profile Section */}
        <div className="pt-4 pb-3 border-t border-blue-800">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                <i className="fas fa-user" />
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium">Dr. Supervisor</div>
              <div className="text-sm font-medium text-blue-200">
                supervisor@university.edu
              </div>
            </div>
            <button className="ml-auto p-1 rounded-full hover:bg-blue-600 focus:outline-none">
              <i className="fas fa-bell" />
              <span className="sr-only">View notifications</span>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
            </button>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <Link
              to="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fas fa-user mr-3" /> Your Profile
            </Link>
            <Link
              to="/settings"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fas fa-cog mr-3" /> Settings
            </Link>
            <Link
              to="/logout"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fas fa-sign-out-alt mr-3" /> Sign out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;