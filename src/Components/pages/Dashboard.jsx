import React from 'react';
import { 
  FaUsers, 
  FaProjectDiagram, 
  FaFileAlt, 
  FaCalendarAlt, 
  FaChartLine,
  FaBell,
  FaSearch
} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Dashboard = () => {
  // Mock data
  const stats = [
    { title: "Total Students", value: 8, icon: <FaUsers />, color: "from-blue-500 to-blue-400" },
    { title: "Active Projects", value: 5, icon: <FaProjectDiagram />, color: "from-green-500 to-green-400" },
    { title: "Pending Documents", value: 3, icon: <FaFileAlt />, color: "from-amber-500 to-amber-400" },
    { title: "Upcoming Meetings", value: 2, icon: <FaCalendarAlt />, color: "from-purple-500 to-purple-400" }
  ];

  const recentStudents = [
    { name: "Ali Ahmed", project: "AI Based Grading System", progress: 65, avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sara Khan", project: "Blockchain Attendance", progress: 40, avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Usman Malik", project: "IoT Smart Campus", progress: 80, avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Fatima Riaz", project: "VR Learning Platform", progress: 30, avatar: "https://randomuser.me/api/portraits/women/2.jpg" }
  ];

  const upcomingDeadlines = [
    { title: "Proposal Submission", date: "March 15, 2023", daysLeft: 5, priority: "high" },
    { title: "Mid-Term Evaluation", date: "April 5, 2023", daysLeft: 21, priority: "medium" },
    { title: "Final Report Submission", date: "May 20, 2023", daysLeft: 66, priority: "low" }
  ];

  const recentActivities = [
    { action: "Sara submitted Chapter 2", time: "2 hours ago" },
    { action: "Meeting with Ali scheduled", time: "Yesterday" },
    { action: "Usman requested feedback", time: "2 days ago" },
    { action: "New project proposal received", time: "1 week ago" }
  ];

  // Button click handlers
  const handleViewAllStudents = () => {
    console.log("View all students clicked");
    // Add navigation logic here
  };

  const handleViewAllProjects = () => {
    console.log("View all projects clicked");
    // Add navigation logic here
  };

  const handleViewCalendar = () => {
    console.log("View calendar clicked");
    // Add navigation logic here
  };

  const handleStudentClick = (studentName) => {
    console.log(`Student ${studentName} clicked`);
    // Add navigation logic here
  };

  const handleQuickAction = (action) => {
    console.log(`${action} quick action clicked`);
    // Add specific logic for each action
  };

  const handleNotificationClick = () => {
    console.log("Notification bell clicked");
    // Add notification logic here
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log("Search for:", e.target.value);
      // Add search logic here
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-500">Welcome back, Professor Smith</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={handleSearch}
            />
          </div>
          <button 
            className="relative p-2 rounded-full bg-white shadow-sm text-gray-500 hover:text-gray-700"
            onClick={handleNotificationClick}
          >
            <FaBell />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div className="flex items-center">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-r ${stat.color} p-6 rounded-xl shadow-md text-white transform transition-all hover:scale-105 cursor-pointer`}
            onClick={index === 0 ? handleViewAllStudents : 
                     index === 1 ? handleViewAllProjects : 
                     index === 2 ? () => handleQuickAction('Documents') : 
                     () => handleQuickAction('Meetings')}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium opacity-80">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                {React.cloneElement(stat.icon, { className: "text-xl" })}
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span>View all</span>
              <FiArrowUpRight className="ml-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Student Progress */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Student Progress</h2>
            <button 
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
              onClick={handleViewAllStudents}
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentStudents.map((student, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition cursor-pointer"
                onClick={() => handleStudentClick(student.name)}
              >
                <img 
                  src={student.avatar} 
                  alt={student.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm mr-4"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-800 truncate">{student.name}</h3>
                  <p className="text-sm text-gray-500 truncate">{student.project}</p>
                </div>
                <div className="w-32">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        student.progress > 70 ? 'bg-green-500' : 
                        student.progress > 40 ? 'bg-yellow-500' : 'bg-red-500'
                      }`} 
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                  <span className={`text-xs mt-1 ${
                    student.progress > 70 ? 'text-green-600' : 
                    student.progress > 40 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {student.progress}% complete
                  </span>
                </div>
                <button 
                  className="ml-4 p-2 text-gray-400 hover:text-blue-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStudentClick(student.name);
                  }}
                >
                  <FiArrowUpRight />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Recent Activities */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button 
                className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                onClick={() => handleQuickAction('Add Project')}
              >
                <div className="p-3 bg-blue-100 rounded-full text-blue-600 mb-2">
                  <FaProjectDiagram />
                </div>
                <span className="text-sm font-medium">Add Project</span>
              </button>
              <button 
                className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition"
                onClick={() => handleQuickAction('Schedule')}
              >
                <div className="p-3 bg-green-100 rounded-full text-green-600 mb-2">
                  <FaCalendarAlt />
                </div>
                <span className="text-sm font-medium">Schedule</span>
              </button>
              <button 
                className="flex flex-col items-center justify-center p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition"
                onClick={() => handleQuickAction('Review')}
              >
                <div className="p-3 bg-amber-100 rounded-full text-amber-600 mb-2">
                  <FaFileAlt />
                </div>
                <span className="text-sm font-medium">Review</span>
              </button>
              <button 
                className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition"
                onClick={handleViewAllStudents}
              >
                <div className="p-3 bg-purple-100 rounded-full text-purple-600 mb-2">
                  <FaUsers />
                </div>
                <span className="text-sm font-medium">Students</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-500 mr-3">
                    <FaBell className="text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Upcoming Deadlines</h2>
          <button 
            className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            onClick={handleViewCalendar}
          >
            View Calendar
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingDeadlines.map((deadline, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg border-l-4 ${
                deadline.priority === "high" ? "border-red-500 bg-red-50" :
                deadline.priority === "medium" ? "border-amber-500 bg-amber-50" :
                "border-green-500 bg-green-50"
              } cursor-pointer`}
              onClick={() => console.log(`Deadline ${deadline.title} clicked`)}
            >
              <h3 className="font-medium text-gray-800">{deadline.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{deadline.date}</p>
              <div className="flex items-center mt-3">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  deadline.priority === "high" ? "bg-red-100 text-red-800" :
                  deadline.priority === "medium" ? "bg-amber-100 text-amber-800" :
                  "bg-green-100 text-green-800"
                }`}>
                  {deadline.daysLeft} days remaining
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;