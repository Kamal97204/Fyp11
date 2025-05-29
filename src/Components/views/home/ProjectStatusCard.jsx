import React from 'react'

function ProjectStatusCard() {
  return (
    <div><div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-semibold text-gray-800">Project Progress</h3>
      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Ongoing</span>
    </div>
    <div className="mb-4">
      <h4 className="text-sm text-gray-500 mb-1">Completion</h4>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '65%'}} />
      </div>
      <p className="text-right text-xs text-gray-500 mt-1">65% completed</p>
    </div>
    <div className="grid grid-cols-3 gap-4 text-center">
      <div>
        <p className="text-2xl font-bold text-blue-600">3</p>
        <p className="text-xs text-gray-500">Chapters Done</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-green-600">12</p>
        <p className="text-xs text-gray-500">Meetings Held</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-yellow-600">2</p>
        <p className="text-xs text-gray-500">Pending Tasks</p>
      </div>
    </div>
  </div></div>
  )
}

export default ProjectStatusCard