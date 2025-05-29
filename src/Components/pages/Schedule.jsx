import React, { useState } from 'react';
import { 
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaSearch,
  FaPlus,
  FaVideo,
  FaMapMarkerAlt,
  FaEllipsisV,
  FaChevronLeft,
  FaChevronRight,
  FaRegCalendarCheck,
  FaChartPie,
  FaRegBell
} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState('day'); // 'day', 'week', 'month'
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock schedule data
  const events = [
    {
      id: 1,
      title: "Project Proposal Review",
      student: "Ali Ahmed",
      date: new Date(2023, 2, 15, 14, 0),
      endDate: new Date(2023, 2, 15, 15, 0),
      type: "meeting",
      location: "Room 205",
      description: "Review of initial project proposal and research questions",
      preparation: ["Read proposal document", "Prepare feedback notes"],
      status: "confirmed",
      project: "AI Based Grading System"
    },
    {
      id: 2,
      title: "Progress Check-in",
      student: "Sara Khan",
      date: new Date(2023, 2, 16, 11, 30),
      endDate: new Date(2023, 2, 16, 12, 15),
      type: "video",
      location: "Zoom",
      description: "Mid-term progress discussion and next steps",
      preparation: ["Review progress report", "Check GitHub commits"],
      status: "confirmed",
      project: "Blockchain Attendance"
    },
    {
      id: 3,
      title: "Thesis Draft Review",
      student: "Usman Malik",
      date: new Date(2023, 2, 17, 16, 0),
      endDate: new Date(2023, 2, 17, 17, 30),
      type: "meeting",
      location: "Office 12",
      description: "Detailed review of chapters 1-3",
      preparation: ["Print draft copy", "Prepare rubric"],
      status: "tentative",
      project: "IoT Smart Campus"
    },
    {
      id: 4,
      title: "Final Presentation Practice",
      student: "Fatima Riaz",
      date: new Date(2023, 2, 20, 10, 0),
      endDate: new Date(2023, 2, 20, 11, 0),
      type: "meeting",
      location: "Conference Room B",
      description: "Dry run of final presentation",
      preparation: ["Review presentation guidelines", "Prepare evaluation form"],
      status: "confirmed",
      project: "VR Learning Platform"
    },
    {
      id: 5,
      title: "Project Demo",
      student: "Ahmed Hassan",
      date: new Date(2023, 2, 22, 13, 0),
      endDate: new Date(2023, 2, 22, 14, 30),
      type: "meeting",
      location: "Lab 3",
      description: "Final system demonstration",
      preparation: ["Test demo environment", "Prepare checklist"],
      status: "confirmed",
      project: "Automated Timetable"
    }
  ];

  // Helper functions
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const formatDateTime = (date) => {
    return date.toLocaleString([], { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  const navigateTime = (amount, unit) => {
    const newDate = new Date(currentDate);
    if (unit === 'day') newDate.setDate(newDate.getDate() + amount);
    if (unit === 'week') newDate.setDate(newDate.getDate() + (amount * 7));
    if (unit === 'month') newDate.setMonth(newDate.getMonth() + amount);
    setCurrentDate(newDate);
  };

  const getDayEvents = () => {
    return events.filter(event => 
      event.date.getDate() === currentDate.getDate() &&
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getFullYear() === currentDate.getFullYear()
    ).sort((a, b) => a.date - b.date);
  };

  const getWeekEvents = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    
    return events.filter(event => 
      event.date >= startOfWeek && event.date <= endOfWeek
    ).sort((a, b) => a.date - b.date);
  };

  const getMonthEvents = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    return events.filter(event => 
      event.date >= startOfMonth && event.date <= endOfMonth
    ).sort((a, b) => a.date - b.date);
  };

  const getCurrentEvents = () => {
    if (viewMode === 'day') return getDayEvents();
    if (viewMode === 'week') return getWeekEvents();
    return getMonthEvents();
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'tentative': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Schedule</h1>
          <p className="text-gray-500">Manage your meetings and appointments</p>
        </div>
        <div className="flex space-x-3">
          <button 
            className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => setShowAddModal(true)}
          >
            <FaRegCalendarCheck className="mr-2" />
            Availability
          </button>
          <button 
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => setShowAddModal(true)}
          >
            <FaPlus className="mr-2" />
            New Event
          </button>
        </div>
      </div>

      {/* View Controls */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button 
              className={`px-3 py-1 rounded-lg ${viewMode === 'day' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setViewMode('day')}
            >
              Day
            </button>
            <button 
              className={`px-3 py-1 rounded-lg ${viewMode === 'week' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setViewMode('week')}
            >
              Week
            </button>
            <button 
              className={`px-3 py-1 rounded-lg ${viewMode === 'month' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setViewMode('month')}
            >
              Month
            </button>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={() => navigateTime(-1, viewMode)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <FaChevronLeft />
            </button>
            <div className="mx-4 text-lg font-medium">
              {viewMode === 'day' && currentDate.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              {viewMode === 'week' && `Week of ${formatDate(new Date(currentDate.getTime() - (currentDate.getDay() * 86400000)))}`}
              {viewMode === 'month' && currentDate.toLocaleDateString([], { month: 'long', year: 'numeric' })}
            </div>
            <button 
              onClick={() => navigateTime(1, viewMode)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <FaChevronRight />
            </button>
          </div>
          
          <button className="flex items-center px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            <FaChartPie className="mr-2 text-gray-600" />
            <span>Stats</span>
          </button>
        </div>
      </div>

      {/* Calendar and Events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Events Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {viewMode === 'day' ? "Today's Schedule" : 
               viewMode === 'week' ? "This Week's Schedule" : "This Month's Schedule"}
            </h2>
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search events..." 
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {viewMode === 'day' ? (
            <div className="space-y-4">
              {getDayEvents().length > 0 ? (
                getDayEvents().map(event => (
                  <div 
                    key={event.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      event.type === "video" ? "border-blue-500 bg-blue-50" : "border-green-500 bg-green-50"
                    } cursor-pointer hover:shadow-md transition`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-800">{event.title}</h3>
                          <span className={`ml-2 text-xs px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                            {event.status}
                          </span>
                        </div>
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <FaUser className="mr-1" />
                          <span>{event.student} • {event.project}</span>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <FaEllipsisV />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <FaClock className="mr-1" />
                        <span>{formatTime(event.date)} - {formatTime(event.endDate)}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        {event.type === "video" ? (
                          <>
                            <FaVideo className="mr-1" />
                            <span>{event.location}</span>
                          </>
                        ) : (
                          <>
                            <FaMapMarkerAlt className="mr-1" />
                            <span>{event.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <FaCalendarAlt className="mx-auto text-4xl text-gray-300 mb-2" />
                  <p>No events scheduled for today</p>
                </div>
              )}
            </div>
          ) : viewMode === 'week' ? (
            <div className="space-y-6">
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const day = new Date(currentDate);
                day.setDate(day.getDate() - day.getDay() + dayIndex);
                const dayEvents = events.filter(event => 
                  event.date.getDate() === day.getDate() &&
                  event.date.getMonth() === day.getMonth() &&
                  event.date.getFullYear() === day.getFullYear()
                ).sort((a, b) => a.date - b.date);
                
                return (
                  <div key={dayIndex} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center mb-2">
                      <h3 className="font-medium text-gray-800">
                        {day.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}
                      </h3>
                      <span className="ml-2 text-sm text-gray-500">
                        {dayEvents.length} {dayEvents.length === 1 ? 'event' : 'events'}
                      </span>
                    </div>
                    {dayEvents.length > 0 ? (
                      <div className="space-y-3 ml-4">
                        {dayEvents.map(event => (
                          <div 
                            key={event.id}
                            className={`p-3 rounded-lg border-l-2 ${
                              event.type === "video" ? "border-blue-500 bg-blue-50" : "border-green-500 bg-green-50"
                            } cursor-pointer hover:shadow-sm transition`}
                            onClick={() => setSelectedEvent(event)}
                          >
                            <div className="flex justify-between">
                              <div className="truncate">
                                <p className="font-medium text-gray-800 truncate">{event.title}</p>
                                <p className="text-xs text-gray-600">
                                  {formatTime(event.date)} • {event.student}
                                </p>
                              </div>
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                                {event.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400 ml-4">No scheduled events</p>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-7 gap-1">
              {/* Month view header */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
              
              {/* Month view days */}
              {Array.from({ length: 42 }).map((_, index) => {
                const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                const day = new Date(startOfMonth);
                day.setDate(index - startOfMonth.getDay() + 1);
                
                const isCurrentMonth = day.getMonth() === currentDate.getMonth();
                const isToday = day.toDateString() === new Date().toDateString();
                const dayEvents = events.filter(event => 
                  event.date.getDate() === day.getDate() &&
                  event.date.getMonth() === day.getMonth() &&
                  event.date.getFullYear() === day.getFullYear()
                );
                
                return (
                  <div 
                    key={index}
                    className={`min-h-24 p-1 border border-gray-100 ${
                      isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-400'
                    }`}
                  >
                    <div className={`text-right p-1 text-sm ${
                      isToday ? 'bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center ml-auto' : ''
                    }`}>
                      {day.getDate()}
                    </div>
                    <div className="space-y-1 mt-1">
                      {dayEvents.slice(0, 2).map(event => (
                        <div 
                          key={event.id}
                          className={`text-xs p-1 rounded truncate ${
                            event.type === "video" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                          }`}
                          onClick={() => setSelectedEvent(event)}
                        >
                          {formatTime(event.date)} {event.title.substring(0, 10)}...
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-gray-500 text-center">
                          +{dayEvents.length - 2} more
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Event Details */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {selectedEvent ? "Event Details" : "Upcoming Events"}
          </h2>
          
          {selectedEvent ? (
            <div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-800">{selectedEvent.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(selectedEvent.status)}`}>
                  {selectedEvent.status}
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    <FaUser className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Student</p>
                    <p className="text-gray-800">{selectedEvent.student}</p>
                    <p className="text-sm text-gray-600">{selectedEvent.project}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    <FaCalendarAlt className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date & Time</p>
                    <p className="text-gray-800">{formatDateTime(selectedEvent.date)}</p>
                    <p className="text-sm text-gray-600">
                      Duration: {Math.round((selectedEvent.endDate - selectedEvent.date) / 60000)} minutes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    {selectedEvent.type === "video" ? (
                      <FaVideo className="text-gray-600" />
                    ) : (
                      <FaMapMarkerAlt className="text-gray-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-800">{selectedEvent.location}</p>
                    {selectedEvent.type === "video" && (
                      <p className="text-sm text-blue-600 mt-1">Video conference link will be shared</p>
                    )}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">Description</p>
                  <p className="text-gray-800">{selectedEvent.description}</p>
                </div>
                
                {selectedEvent.preparation && selectedEvent.preparation.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-2">Preparation Needed</p>
                    <ul className="list-disc list-inside text-gray-800 space-y-1">
                      {selectedEvent.preparation.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="mt-6 space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                  <FaRegBell className="mr-2" />
                  Set Reminder
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition">
                    Reschedule
                  </button>
                  <button className="bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-md font-medium text-gray-800 mb-3">Next 3 Events</h3>
              <div className="space-y-3">
                {events
                  .filter(event => event.date > new Date())
                  .sort((a, b) => a.date - b.date)
                  .slice(0, 3)
                  .map(event => (
                    <div 
                      key={event.id}
                      className="p-3 rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer transition"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium text-gray-800">{event.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {formatDateTime(event.date)} • {event.student}
                      </p>
                    </div>
                  ))
                }
              </div>
              
              <div className="mt-6">
                <h3 className="text-md font-medium text-gray-800 mb-2">Schedule Stats</h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">
                      {events.filter(e => e.status === 'confirmed').length}
                    </p>
                    <p className="text-xs text-green-800">Confirmed</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-600">
                      {events.filter(e => e.status === 'tentative').length}
                    </p>
                    <p className="text-xs text-yellow-800">Tentative</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">
                      {events.filter(e => e.type === 'video').length}
                    </p>
                    <p className="text-xs text-blue-800">Video Calls</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Event</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Meeting with..."
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <input 
                      type="time" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="60"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>In-person Meeting</option>
                    <option>Video Call</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location/Zoom Info</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Room 205 or Zoom link"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  onClick={() => setShowAddModal(false)}
                >
                  Save Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;