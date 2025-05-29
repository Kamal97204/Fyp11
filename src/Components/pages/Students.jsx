import React, { useState, useEffect } from 'react';
import { 
  FaSearch,
  FaFilter,
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaChartLine,
  FaEllipsisV,
  FaPlus,
  FaUserEdit,
  FaTrash,
  FaRegSun,
  FaRegMoon,
  FaTimes
} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Students = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    regNo: '',
    email: '',
    phone: '',
    project: '',
    progress: 0,
    status: 'Active',
    lastMeeting: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  // Initialize with mock data
  useEffect(() => {
    const mockStudents = [
      {
        id: 1,
        name: "Ali Ahmed",
        regNo: "CS-2023-01",
        email: "ali.ahmed@university.edu",
        phone: "+1234567890",
        project: "AI Based Grading System",
        progress: 65,
        status: "Active",
        lastMeeting: "Mar 10, 2023"
      },
      {
        id: 2,
        name: "Sara Khan",
        regNo: "CS-2023-02",
        email: "sara.khan@university.edu",
        phone: "+1234567891",
        project: "Blockchain Attendance System",
        progress: 40,
        status: "Needs Help",
        lastMeeting: "Mar 5, 2023"
      },
      {
        id: 3,
        name: "Usman Malik",
        regNo: "CS-2023-03",
        email: "usman.malik@university.edu",
        phone: "+1234567892",
        project: "IoT Smart Campus",
        progress: 80,
        status: "On Track",
        lastMeeting: "Mar 1, 2023"
      },
      {
        id: 4,
        name: "Fatima Riaz",
        regNo: "CS-2023-04",
        email: "fatima.riaz@university.edu",
        phone: "+1234567893",
        project: "VR Learning Platform",
        progress: 30,
        status: "Behind Schedule",
        lastMeeting: "Feb 25, 2023"
      }
    ];
    setStudents(mockStudents);
  }, []);

  // Apply dark mode to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const statusColors = {
    "Active": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "On Track": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Needs Help": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "Behind Schedule": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
  };

  const handleAddStudent = () => {
    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    const studentToAdd = {
      ...newStudent,
      id: newId,
      progress: parseInt(newStudent.progress) || 0
    };
    setStudents([...students, studentToAdd]);
    setShowAddStudentModal(false);
    setNewStudent({
      name: '',
      regNo: '',
      email: '',
      phone: '',
      project: '',
      progress: 0,
      status: 'Active',
      lastMeeting: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    });
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
    if (selectedStudent && selectedStudent.id === id) {
      setSelectedStudent(null);
    }
  };

  const handleUpdateStudent = (updatedStudent) => {
    setStudents(students.map(student => 
      student.id === updatedStudent.id ? updatedStudent : student
    ));
    setSelectedStudent(updatedStudent);
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.regNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.project.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All Status' || student.status === statusFilter;
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'active' && student.status === 'Active') ||
                      (activeTab === 'needshelp' && student.status === 'Needs Help');
    
    return matchesSearch && matchesStatus && matchesTab;
  });

  return (
    <div className={`min-h-screen p-6 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Students</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your FYP students and their progress</p>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {isDarkMode ? <FaRegSun /> : <FaRegMoon />}
          </button>
          <button 
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => setShowAddStudentModal(true)}
          >
            <FaPlus className="mr-2" />
            Add Student
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className={`p-4 rounded-xl shadow-sm mb-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <select 
              className={`px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All Status</option>
              <option>Active</option>
              <option>On Track</option>
              <option>Needs Help</option>
              <option>Behind Schedule</option>
            </select>
            <button className={`flex items-center px-3 py-2 rounded-lg transition ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
              <FaFilter className="mr-2 text-gray-600 dark:text-gray-300" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={`flex border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} mb-6`}>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'all' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
          onClick={() => setActiveTab('all')}
        >
          All Students
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'active' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
          onClick={() => setActiveTab('active')}
        >
          Active
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'needshelp' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
          onClick={() => setActiveTab('needshelp')}
        >
          Needs Help
        </button>
      </div>

      {/* Students List and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Students List */}
        <div className="lg:col-span-2 rounded-xl shadow-sm overflow-hidden">
          <div className={`overflow-x-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className={isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Student
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Project
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Progress
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr 
                      key={student.id} 
                      className={`hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} cursor-pointer ${selectedStudent?.id === student.id ? (isDarkMode ? 'bg-gray-700' : 'bg-blue-50') : ''}`}
                      onClick={() => setSelectedStudent(student)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-600'}`}>
                            <FaUserGraduate />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium dark:text-white">{student.name}</div>
                            <div className="text-sm dark:text-gray-400">{student.regNo}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm dark:text-white truncate max-w-xs">{student.project}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              student.progress > 70 ? 'bg-green-500' : 
                              student.progress > 40 ? 'bg-yellow-500' : 'bg-red-500'
                            }`} 
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs dark:text-gray-400 mt-1">{student.progress}%</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[student.status]}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteStudent(student.id);
                          }}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                      No students found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Student Details */}
        <div className={`p-6 rounded-xl shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-xl font-semibold dark:text-white mb-6">Student Details</h2>
          {selectedStudent ? (
            <div>
              <div className="flex items-center mb-4">
                <div className={`flex-shrink-0 h-16 w-16 rounded-full flex items-center justify-center text-2xl ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-600'}`}>
                  <FaUserGraduate />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium dark:text-white">{selectedStudent.name}</h3>
                  <p className="dark:text-gray-400">{selectedStudent.regNo}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm dark:text-gray-400 mb-1">Project Title</p>
                  <p className="dark:text-white">{selectedStudent.project}</p>
                </div>
                
                <div>
                  <p className="text-sm dark:text-gray-400 mb-1">Progress Status</p>
                  <div className="flex items-center">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[selectedStudent.status]} mr-2`}>
                      {selectedStudent.status}
                    </span>
                    <span className="text-sm dark:text-gray-400">{selectedStudent.progress}% complete</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                    <div 
                      className={`h-2 rounded-full ${
                        selectedStudent.progress > 70 ? 'bg-green-500' : 
                        selectedStudent.progress > 40 ? 'bg-yellow-500' : 'bg-red-500'
                      }`} 
                      style={{ width: `${selectedStudent.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm dark:text-gray-400 mb-1">Email</p>
                    <p className="dark:text-white flex items-center">
                      <FaEnvelope className="mr-1 text-gray-500 dark:text-gray-400" />
                      {selectedStudent.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm dark:text-gray-400 mb-1">Phone</p>
                    <p className="dark:text-white flex items-center">
                      <FaPhone className="mr-1 text-gray-500 dark:text-gray-400" />
                      {selectedStudent.phone}
                    </p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm dark:text-gray-400 mb-1">Last Meeting</p>
                  <p className="dark:text-white">{selectedStudent.lastMeeting}</p>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <button 
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
                  onClick={() => {
                    const updatedProgress = prompt("Enter new progress percentage:", selectedStudent.progress);
                    if (updatedProgress !== null) {
                      handleUpdateStudent({
                        ...selectedStudent,
                        progress: parseInt(updatedProgress) || 0,
                        status: 
                          updatedProgress > 70 ? 'On Track' : 
                          updatedProgress > 40 ? 'Active' : 'Behind Schedule'
                      });
                    }
                  }}
                >
                  <FaUserEdit className="mr-2" />
                  Update Progress
                </button>
                <button className="flex-1 bg-gray-100 dark:bg-gray-700 dark:text-white text-gray-800 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                  View Documents
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <FaUserGraduate className="mx-auto text-4xl text-gray-300 dark:text-gray-600 mb-2" />
              <p>Select a student to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Student Modal */}
      {showAddStudentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`rounded-xl shadow-lg p-6 w-full max-w-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold dark:text-white">Add New Student</h3>
              <button 
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                onClick={() => setShowAddStudentModal(false)}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Full Name</label>
                <input
                  type="text"
                  className={`w-full p-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Registration No</label>
                <input
                  type="text"
                  className={`w-full p-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  value={newStudent.regNo}
                  onChange={(e) => setNewStudent({...newStudent, regNo: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  className={`w-full p-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  value={newStudent.email}
                  onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Phone</label>
                <input
                  type="tel"
                  className={`w-full p-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  value={newStudent.phone}
                  onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Project Title</label>
                <input
                  type="text"
                  className={`w-full p-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  value={newStudent.project}
                  onChange={(e) => setNewStudent({...newStudent, project: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Initial Progress (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className={`w-full p-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  value={newStudent.progress}
                  onChange={(e) => setNewStudent({...newStudent, progress: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Status</label>
                <select
                  className={`w-full p-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  value={newStudent.status}
                  onChange={(e) => setNewStudent({...newStudent, status: e.target.value})}
                >
                  <option value="Active">Active</option>
                  <option value="On Track">On Track</option>
                  <option value="Needs Help">Needs Help</option>
                  <option value="Behind Schedule">Behind Schedule</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                onClick={() => setShowAddStudentModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={handleAddStudent}
                disabled={!newStudent.name || !newStudent.regNo}
              >
                Add Student
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;