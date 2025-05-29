import React from 'react'

function Footer() {
  return (
    <div>

<div>
  {/* Your page content would go here */}
  <div className="min-h-screen">
    {/* Content area */}
  </div>
  {/* Footer */}
  <footer className="bg-gray-800 text-white pt-12 pb-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between">
        {/* University Info */}
        <div className="mb-8 md:mb-0 md:w-1/4">
          <div className="flex items-center mb-4">
            <i className="fas fa-graduation-cap text-2xl mr-2 text-blue-400" />
            <span className="text-xl font-bold">University Name</span>
          </div>
          <p className="text-gray-400 mb-4">
            Department of Computer Science<br />
            Faculty of Engineering<br />
            City, Country
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">FYP Guidelines</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Submission Deadlines</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Evaluation Forms</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Past Projects</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">University Library</a></li>
          </ul>
        </div>
        {/* Resources */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Research Papers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Templates</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Style Guide</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Citation Tools</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Plagiarism Checker</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="fas fa-envelope mr-2 text-blue-400" />
              <a href="mailto:fyp@university.edu" className="text-gray-400 hover:text-white">fyp@university.edu</a>
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone-alt mr-2 text-blue-400" />
              <span className="text-gray-400">+123 456 7890</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-map-marker-alt mr-2 text-blue-400" />
              <span className="text-gray-400">CS Department, Room 205</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-clock mr-2 text-blue-400" />
              <span className="text-gray-400">Mon-Fri: 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright and bottom links */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-sm">
            © 2023 University Name. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
</div>








    </div>
  )
}

export default Footer