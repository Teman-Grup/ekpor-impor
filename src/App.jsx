import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Pages
import HomePage from './pages/HomePage'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/admin/login" />
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin setAuth={setIsAuthenticated} />} />
        
        {/* Protected Admin Routes */}
        <Route 
          path="/admin/dashboard/*" 
          element={
            <ProtectedRoute>
              <AdminDashboard setAuth={setIsAuthenticated} />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
