import '@/index.css'
import { Route, Routes } from 'react-router'
import ErrorPage from '@/pages/ErrorPage'
import LoginPage from '@/pages/LoginPage'
import DashboardPage from '@/pages/DashboardPage'
import PatientInformationPage from '@/pages/PatientInformationPage'
import HospitalInformationPage from './pages/HospitalInformationPage'
import ApplicationReasonPage from './pages/ApplicationReasonPage'
import ConsentPage from './pages/ConsentPage'
import ThankYouPage from './pages/ThankYouPage'

function App() {
  return (
    <Routes>
      <Route path='*' element={<ErrorPage />} />
      <Route index element={<LoginPage />} />
      <Route path="/dashboard/:id" element={<DashboardPage />} />
      <Route path="/patient-information/:id" element={<PatientInformationPage />} />
      <Route path="/hospital-info/:id" element={<HospitalInformationPage />} />
      <Route path="/application-reason/:id" element={<ApplicationReasonPage />} />
      <Route path="/consent/:id" element={<ConsentPage />} />
      <Route path="/thank-you/:id" element={<ThankYouPage />} />
    </Routes>
  )
}

export default App
