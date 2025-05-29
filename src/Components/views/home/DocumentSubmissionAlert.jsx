import React from 'react'

function DocumentSubmissionAlert() {
  return (
    <div> 

<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="px-6 py-4 border-b border-gray-200">
    <h3 className="text-lg font-semibold text-gray-800">Pending Approvals</h3>
  </div>
  <div className="p-6">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <svg className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <div className="ml-4">
        <h4 className="text-base font-medium text-gray-900">Documents Awaiting Review</h4>
        <p className="text-sm text-gray-500 mt-1">You have 3 student submissions that need your approval.</p>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-700">Chapter 2 - John Doe</span>
            <span className="text-gray-500">2 days ago</span>
          </div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-700">Proposal - Alice Smith</span>
            <span className="text-gray-500">1 day ago</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700">Final Report - Michael Brown</span>
            <span className="text-gray-500">4 hours ago</span>
          </div>
        </div>
        <div className="mt-4">
          <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Review Submissions
          </button>
        </div>
      </div>
    </div>
  </div>
</div>






    </div>
  )
}

export default DocumentSubmissionAlert