import '@/index.css'
import { Route, Routes } from 'react-router'
import ErrorPage from '@/pages/ErrorPage'
import LoginPage from '@/pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <Routes>
      <Route path='*' element={<ErrorPage />} />
      <Route index element={<LoginPage />} />
      <Route path="/dashboard/:id" element={<DashboardPage />} />
    </Routes>
  )
}

export default App
