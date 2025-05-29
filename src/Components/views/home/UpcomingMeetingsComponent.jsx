import React from 'react'

function UpcomingMeetingsComponent() {
  return (
    <div><div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
      <h3 className="text-lg font-semibold text-gray-800">Upcoming Meetings</h3>
      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">+ Add Meeting</button>
    </div>
    <div className="divide-y divide-gray-200">
      {/* Meeting 1 */}
      <div className="px-6 py-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Project Review</p>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Today</span>
            </div>
            <p className="text-sm text-gray-500">With John Doe (AI Chatbot Development)</p>
            <div className="mt-1 flex items-center text-sm text-gray-500">
              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              2:00 PM - 3:00 PM | Room 205
            </div>
          </div>
        </div>
      </div>
      {/* Meeting 2 */}
      <div className="px-6 py-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-green-100 rounded-lg p-2">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Thesis Discussion</p>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">Tomorrow</span>
            </div>
            <p className="text-sm text-gray-500">With Alice Smith (Blockchain Implementation)</p>
            <div className="mt-1 flex items-center text-sm text-gray-500">
              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              10:00 AM - 11:30 AM | Online
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default UpcomingMeetingsComponent