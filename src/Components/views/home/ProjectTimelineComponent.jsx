import React from 'react'

function ProjectTimelineComponent() {
  return (
    <div>

<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="px-6 py-4 border-b border-gray-200">
    <h3 className="text-lg font-semibold text-gray-800">Project Timeline</h3>
  </div>
  <div className="px-6 py-4">
    <div className="flow-root">
      <ul className="-mb-8">
        {/* Item 1 */}
        <li>
          <div className="relative pb-8">
            <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
            <div className="relative flex space-x-3">
              <div>
                <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm text-gray-500">Project <span className="font-medium text-gray-900">proposal</span> approved</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2023-09-20">Sep 20</time>
                </div>
              </div>
            </div>
          </div>
        </li>
        {/* Item 2 */}
        <li>
          <div className="relative pb-8">
            <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
            <div className="relative flex space-x-3">
              <div>
                <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </span>
              </div>
              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm text-gray-500">Chapter <span className="font-medium text-gray-900">1-3</span> submitted</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2023-10-15">Oct 15</time>
                </div>
              </div>
            </div>
          </div>
        </li>
        {/* Item 3 */}
        <li>
          <div className="relative pb-8">
            <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
            <div className="relative flex space-x-3">
              <div>
                <span className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center ring-8 ring-white">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm text-gray-500">Mid-term <span className="font-medium text-gray-900">evaluation</span></p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2023-11-10">Nov 10</time>
                </div>
              </div>
            </div>
          </div>
        </li>
        {/* Item 4 */}
        <li>
          <div className="relative pb-8">
            <div className="relative flex space-x-3">
              <div>
                <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm text-gray-500">Final <span className="font-medium text-gray-900">submission</span> deadline</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2023-12-20">Dec 20</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProjectTimelineComponent