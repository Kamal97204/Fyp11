import React, { useState } from 'react';
import { 
  FaSearch,
  FaFilter,
  FaPlus,
  FaProjectDiagram,
  FaUserGraduate,
  FaChartLine,
  FaCalendarAlt,
  FaFileAlt,
  FaCode,
  FaDatabase,
  FaTasks,
  FaRegClock,
  FaRegCheckCircle,
  FaRegComments,
  FaEllipsisV,
  FaDownload,
  FaShare,
  FaRegStar,
  FaStar
} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock projects data
  const projects = [
    {
      id: 1,
      title: "AI Based Grading System",
      student: "Ali Ahmed",
      description: "An intelligent system that automatically grades student assignments using machine learning algorithms",
      progress: 65,
      status: "In Development",
      startDate: "2023-01-15",
      deadline: "2023-05-30",
      lastUpdated: "2023-03-20",
      category: "Machine Learning",
      technologies: ["Python", "TensorFlow", "Flask"],
      tasks: [
        { id: 1, name: "Data Collection", completed: true },
        { id: 2, name: "Model Training", completed: true },
        { id: 3, name: "Web Interface", completed: false },
        { id: 4, name: "Testing", completed: false }
      ],
      documents: 5,
      meetings: 3,
      starred: true,
      supervisorComments: [
        { date: "2023-02-10", comment: "Good progress on data collection. Need more diverse samples." },
        { date: "2023-03-05", comment: "Model accuracy needs improvement. Try different architectures." }
      ]
    },
    {
      id: 2,
      title: "Blockchain Attendance System",
      student: "Sara Khan",
      description: "Decentralized attendance tracking system using blockchain technology for tamper-proof records",
      progress: 40,
      status: "Initial Development",
      startDate: "2023-02-01",
      deadline: "2023-06-15",
      lastUpdated: "2023-03-18",
      category: "Blockchain",
      technologies: ["Solidity", "React", "Node.js"],
      tasks: [
        { id: 1, name: "Smart Contract Development", completed: true },
        { id: 2, name: "Frontend UI", completed: false },
        { id: 3, name: "API Integration", completed: false }
      ],
      documents: 3,
      meetings: 2,
      starred: false,
      supervisorComments: [
        { date: "2023-02-20", comment: "Smart contract logic looks solid. Document the code properly." }
      ]
    },
    {
      id: 3,
      title: "IoT Smart Campus",
      student: "Usman Malik",
      description: "Network of IoT devices across campus to monitor and optimize energy usage",
      progress: 80,
      status: "Testing",
      startDate: "2022-11-10",
      deadline: "2023-04-25",
      lastUpdated: "2023-03-15",
      category: "IoT",
      technologies: ["Arduino", "Python", "MQTT"],
      tasks: [
        { id: 1, name: "Hardware Setup", completed: true },
        { id: 2, name: "Data Collection", completed: true },
        { id: 3, name: "Dashboard Development", completed: true },
        { id: 4, name: "System Testing", completed: false }
      ],
      documents: 8,
      meetings: 5,
      starred: true,
      supervisorComments: [
        { date: "2023-01-15", comment: "Excellent hardware implementation. Focus on data visualization next." },
        { date: "2023-02-28", comment: "Dashboard looks promising. Add more analytics features." }
      ]
    },
    {
      id: 4,
      title: "VR Learning Platform",
      student: "Fatima Riaz",
      description: "Virtual reality environment for immersive educational experiences",
      progress: 30,
      status: "Design Phase",
      startDate: "2023-03-01",
      deadline: "2023-07-10",
      lastUpdated: "2023-03-12",
      category: "VR/AR",
      technologies: ["Unity", "C#", "Blender"],
      tasks: [
        { id: 1, name: "Concept Design", completed: true },
        { id: 2, name: "3D Modeling", completed: false },
        { id: 3, name: "VR Implementation", completed: false }
      ],
      documents: 2,
      meetings: 1,
      starred: false,
      supervisorComments: []
    }
  ];

  const statusColors = {
    "Design Phase": "bg-purple-100 text-purple-800",
    "Initial Development": "bg-blue-100 text-blue-800",
    "In Development": "bg-yellow-100 text-yellow-800",
    "Testing": "bg-green-100 text-green-800",
    "Completed": "bg-gray-100 text-gray-800"
  };

  const toggleStar = (id) => {
    // In a real app, you would update the state or make an API call
    console.log(`Toggled star for project ${id}`);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.student.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'starred' && project.starred) ||
                      (activeTab === 'active' && project.status !== "Completed") ||
                      (activeTab === 'category' && project.category === "Machine Learning"); // Example category filter
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">FYP Projects</h1>
          <p className="text-gray-500">Manage and track all Final Year Projects</p>
        </div>
        <button 
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => setShowAddModal(true)}
        >
          <FaPlus className="mr-2" />
          New Project
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <select className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Categories</option>
              <option>Machine Learning</option>
              <option>Blockchain</option>
              <option>IoT</option>
              <option>VR/AR</option>
              <option>Web Development</option>
            </select>
            <select className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Status</option>
              <option>Design Phase</option>
              <option>Initial Development</option>
              <option>In Development</option>
              <option>Testing</option>
              <option>Completed</option>
            </select>
            <button className="flex items-center px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
              <FaFilter className="mr-2 text-gray-600" />
              <span>Advanced</span>
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
          All Projects
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'starred' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('starred')}
        >
          Starred
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'active' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('active')}
        >
          Active
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'category' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('category')}
        >
          Machine Learning
        </button>
      </div>

      {/* Projects List and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="text-sm border-0 focus:ring-2 focus:ring-blue-500 rounded">
                <option>Recent</option>
                <option>Progress</option>
                <option>Deadline</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="space-y-4">
              {filteredProjects.map(project => (
                <div 
                  key={project.id}
                  className={`p-4 rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer transition ${selectedProject?.id === project.id ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4 text-blue-600">
                        <FaProjectDiagram className="text-xl" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-800">{project.title}</h3>
                          <button 
                            className="ml-2 text-gray-400 hover:text-yellow-500"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleStar(project.id);
                            }}
                          >
                            {project.starred ? <FaStar className="text-yellow-400" /> : <FaRegStar />}
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{project.student}</p>
                        <div className="flex items-center mt-2 space-x-3">
                          <span className={`text-xs px-2 py-1 rounded-full ${statusColors[project.status]}`}>
                            {project.status}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center">
                            <FaRegClock className="mr-1" />
                            Due {project.deadline}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaEllipsisV />
                    </button>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Progress: {project.progress}%</span>
                      <span className="text-xs text-gray-500">
                        {project.tasks.filter(t => t.completed).length}/{project.tasks.length} tasks
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          project.progress > 70 ? 'bg-green-500' : 
                          project.progress > 40 ? 'bg-yellow-500' : 'bg-red-500'
                        }`} 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FaProjectDiagram className="mx-auto text-4xl text-gray-300 mb-3" />
              <h3 className="text-lg font-medium text-gray-500">No projects found</h3>
              <p className="text-gray-400 mt-1">Try adjusting your search or filters</p>
              <button 
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setShowAddModal(true)}
              >
                Create New Project
              </button>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {selectedProject ? "Project Details" : "Project Overview"}
          </h2>
          
          {selectedProject ? (
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-gray-800">{selectedProject.title}</h3>
                    <button 
                      className="ml-2 text-gray-400 hover:text-yellow-500"
                      onClick={() => toggleStar(selectedProject.id)}
                    >
                      {selectedProject.starred ? <FaStar className="text-yellow-400" /> : <FaRegStar />}
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">{selectedProject.student}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${statusColors[selectedProject.status]}`}>
                  {selectedProject.status}
                </span>
              </div>
              
              <p className="text-gray-800 mb-4">{selectedProject.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Start Date</p>
                  <p className="text-gray-800 flex items-center">
                    <FaCalendarAlt className="mr-2 text-gray-400" />
                    {selectedProject.startDate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Deadline</p>
                  <p className="text-gray-800 flex items-center">
                    <FaRegClock className="mr-2 text-gray-400" />
                    {selectedProject.deadline}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Category</p>
                  <p className="text-gray-800">{selectedProject.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                  <p className="text-gray-800">{selectedProject.lastUpdated}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Progress</p>
                  <span className="text-sm text-gray-500">{selectedProject.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div 
                    className={`h-2.5 rounded-full ${
                      selectedProject.progress > 70 ? 'bg-green-500' : 
                      selectedProject.progress > 40 ? 'bg-yellow-500' : 'bg-red-500'
                    }`} 
                    style={{ width: `${selectedProject.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Start</span>
                  <span>Deadline</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-800 flex items-center">
                    <FaTasks className="mr-2 text-blue-500" />
                    Tasks
                  </h4>
                  <span className="text-sm text-gray-500">
                    {selectedProject.tasks.filter(t => t.completed).length}/{selectedProject.tasks.length} completed
                  </span>
                </div>
                <div className="space-y-2">
                  {selectedProject.tasks.map(task => (
                    <div key={task.id} className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={task.completed}
                        onChange={() => {}}
                        className="rounded text-blue-600 focus:ring-blue-500 mr-2"
                      />
                      <span className={`text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                        {task.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 flex items-center mb-3">
                  <FaCode className="mr-2 text-purple-500" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 flex items-center mb-3">
                  <FaRegComments className="mr-2 text-green-500" />
                  Supervisor Comments
                </h4>
                {selectedProject.supervisorComments.length > 0 ? (
                  <div className="space-y-3">
                    {selectedProject.supervisorComments.map((comment, index) => (
                      <div key={index} className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>{comment.date}</span>
                        </div>
                        <p className="text-gray-800">{comment.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400">No comments yet</p>
                )}
              </div>
              
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                  <FaFileAlt className="mr-2" />
                  View Documents
                </button>
                <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition">
                  Add Comment
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-gray-800 mb-2">Projects Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold">{projects.length}</p>
                    <p className="text-xs text-gray-500">Total Projects</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {projects.filter(p => p.status === "Testing" || p.status === "Completed").length}
                    </p>
                    <p className="text-xs text-gray-500">In Testing/Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%
                    </p>
                    <p className="text-xs text-gray-500">Average Progress</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {projects.filter(p => p.starred).length}
                    </p>
                    <p className="text-xs text-gray-500">Starred Projects</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-medium text-gray-800 mb-3">Recent Activities</h3>
              <div className="space-y-3">
                {projects
                  .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
                  .slice(0, 3)
                  .map(project => (
                    <div 
                      key={project.id}
                      className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium text-gray-800 truncate">{project.title}</h4>
                        <span className="text-xs text-gray-500">{project.lastUpdated}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{project.student}</p>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div 
                          className={`h-1.5 rounded-full ${
                            project.progress > 70 ? 'bg-green-500' : 
                            project.progress > 40 ? 'bg-yellow-500' : 'bg-red-500'
                          }`} 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))
                }
              </div>
              
              <h3 className="font-medium text-gray-800 mt-6 mb-3">Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {Array.from(new Set(projects.map(p => p.category))).map(category => (
                  <div key={category} className="bg-gray-100 p-2 rounded-lg">
                    <p className="font-medium">{category}</p>
                    <p className="text-xs text-gray-500">
                      {projects.filter(p => p.category === category).length} projects
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Project</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="AI Based Grading System"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select Student</option>
                    <option>Ali Ahmed</option>
                    <option>Sara Khan</option>
                    <option>Usman Malik</option>
                    <option>Fatima Riaz</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Machine Learning</option>
                    <option>Blockchain</option>
                    <option>IoT</option>
                    <option>VR/AR</option>
                    <option>Web Development</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Design Phase</option>
                    <option>Initial Development</option>
                    <option>In Development</option>
                    <option>Testing</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Brief description of the project..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Technologies</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Python, TensorFlow, Flask (comma separated)"
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
                  Create Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;