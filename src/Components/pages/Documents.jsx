import React, { useState } from 'react';
import { 
  FaSearch,
  FaFilter,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFileCode,
  FaFileImage,
  FaFileAlt,
  FaDownload,
  FaShare,
  FaTrash,
  FaEllipsisV,
  FaFolder,
  FaFolderOpen,
  FaCloudUploadAlt
} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Documents = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Mock documents data
  const documents = [
    {
      id: 1,
      name: "Project Proposal.pdf",
      type: "pdf",
      size: "2.4 MB",
      uploadedBy: "Ali Ahmed",
      date: "Mar 15, 2023",
      category: "Proposals",
      status: "Approved"
    },
    {
      id: 2,
      name: "Literature Review.docx",
      type: "word",
      size: "1.8 MB",
      uploadedBy: "Sara Khan",
      date: "Mar 10, 2023",
      category: "Chapters",
      status: "Pending Review"
    },
    {
      id: 3,
      name: "Research Data.xlsx",
      type: "excel",
      size: "4.2 MB",
      uploadedBy: "Usman Malik",
      date: "Mar 5, 2023",
      category: "Data",
      status: "Approved"
    },
    {
      id: 4,
      name: "System Architecture.png",
      type: "image",
      size: "3.1 MB",
      uploadedBy: "Fatima Riaz",
      date: "Feb 28, 2023",
      category: "Designs",
      status: "Revisions Needed"
    },
    {
      id: 5,
      name: "Source Code.zip",
      type: "code",
      size: "8.5 MB",
      uploadedBy: "Ahmed Hassan",
      date: "Feb 25, 2023",
      category: "Code",
      status: "Approved"
    },
    {
      id: 6,
      name: "Final Report.pdf",
      type: "pdf",
      size: "5.7 MB",
      uploadedBy: "Zainab Ali",
      date: "Feb 20, 2023",
      category: "Reports",
      status: "Pending Review"
    }
  ];

  const fileIcons = {
    pdf: <FaFilePdf className="text-red-500 text-xl" />,
    word: <FaFileWord className="text-blue-500 text-xl" />,
    excel: <FaFileExcel className="text-green-500 text-xl" />,
    image: <FaFileImage className="text-yellow-500 text-xl" />,
    code: <FaFileCode className="text-purple-500 text-xl" />,
    default: <FaFileAlt className="text-gray-500 text-xl" />
  };

  const statusColors = {
    "Approved": "bg-green-100 text-green-800",
    "Pending Review": "bg-yellow-100 text-yellow-800",
    "Revisions Needed": "bg-red-100 text-red-800"
  };

  const toggleFileSelection = (id) => {
    setSelectedFiles(prev => 
      prev.includes(id) 
        ? prev.filter(fileId => fileId !== id) 
        : [...prev, id]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Documents</h1>
          <p className="text-gray-500">Manage all FYP documents and submissions</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <FaCloudUploadAlt className="mr-2" />
          Upload Documents
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search documents..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2">
            <select className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Categories</option>
              <option>Proposals</option>
              <option>Chapters</option>
              <option>Reports</option>
              <option>Data</option>
              <option>Designs</option>
              <option>Code</option>
            </select>
            <select className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Status</option>
              <option>Approved</option>
              <option>Pending Review</option>
              <option>Revisions Needed</option>
            </select>
            <button className="flex items-center px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
              <FaFilter className="mr-2 text-gray-600" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('all')}
        >
          All Documents
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'recent' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('recent')}
        >
          Recent
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'shared' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('shared')}
        >
          Shared With Me
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'myuploads' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('myuploads')}
        >
          My Uploads
        </button>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className={`bg-white rounded-xl shadow-sm border ${selectedFiles.includes(doc.id) ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'} overflow-hidden hover:shadow-md transition cursor-pointer`}
            onClick={() => toggleFileSelection(doc.id)}
          >
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  {fileIcons[doc.type] || fileIcons.default}
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900 truncate max-w-[180px]">{doc.name}</h3>
                    <p className="text-xs text-gray-500">{doc.size}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <FaEllipsisV />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded-full ${statusColors[doc.status] || 'bg-gray-100 text-gray-800'}`}>
                  {doc.status}
                </span>
                <span className="text-xs text-gray-500">{doc.date}</span>
              </div>
            </div>
            {selectedFiles.includes(doc.id) && (
              <div className="bg-blue-50 px-4 py-2 flex justify-between border-t border-blue-100">
                <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                  <FaDownload className="mr-1" /> Download
                </button>
                <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                  <FaShare className="mr-1" /> Share
                </button>
                <button className="text-red-600 hover:text-red-800 text-sm flex items-center">
                  <FaTrash className="mr-1" /> Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* List View Toggle and Stats */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing {documents.length} documents
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md">Grid View</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200">List View</button>
        </div>
      </div>

      {/* Folders Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Folders</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer">
            <div className="flex flex-col items-center">
              <FaFolder className="text-yellow-500 text-3xl mb-2" />
              <span className="text-sm font-medium text-center">Proposals</span>
              <span className="text-xs text-gray-500">12 files</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer">
            <div className="flex flex-col items-center">
              <FaFolder className="text-blue-500 text-3xl mb-2" />
              <span className="text-sm font-medium text-center">Chapters</span>
              <span className="text-xs text-gray-500">24 files</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer">
            <div className="flex flex-col items-center">
              <FaFolder className="text-green-500 text-3xl mb-2" />
              <span className="text-sm font-medium text-center">Reports</span>
              <span className="text-xs text-gray-500">8 files</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer">
            <div className="flex flex-col items-center">
              <FaFolder className="text-purple-500 text-3xl mb-2" />
              <span className="text-sm font-medium text-center">Data</span>
              <span className="text-xs text-gray-500">15 files</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer">
            <div className="flex flex-col items-center">
              <FaFolder className="text-red-500 text-3xl mb-2" />
              <span className="text-sm font-medium text-center">Designs</span>
              <span className="text-xs text-gray-500">7 files</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer">
            <div className="flex flex-col items-center">
              <FaFolderOpen className="text-indigo-500 text-3xl mb-2" />
              <span className="text-sm font-medium text-center">Code</span>
              <span className="text-xs text-gray-500">19 files</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;