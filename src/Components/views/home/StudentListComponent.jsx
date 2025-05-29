import React from 'react'

function StudentListComponent() {
  return (
    <div><div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">My Students</h3>
    </div>
    <div className="divide-y divide-gray-200">
      {/* Student 1 */}
      <div className="px-6 py-4 flex items-center hover:bg-gray-50">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 font-medium">JD</span>
        </div>
        <div className="ml-4 flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">On Track</span>
          </div>
          <p className="text-sm text-gray-500">CS-2023-01 | AI Chatbot Development</p>
        </div>
        <div className="ml-4">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View</button>
        </div>
      </div>
      {/* Student 2 */}
      <div className="px-6 py-4 flex items-center hover:bg-gray-50">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
          <span className="text-purple-600 font-medium">AS</span>
        </div>
        <div className="ml-4 flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Alice Smith</p>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Needs Help</span>
          </div>
          <p className="text-sm text-gray-500">CS-2023-02 | Blockchain Implementation</p>
        </div>
        <div className="ml-4">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View</button>
        </div>
      </div>
    </div>
    <div className="px-6 py-4 border-t border-gray-200 text-center">
      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All Students (8)</button>
    </div>
  </div>
  
  </div>
  )
}

export default StudentListComponent