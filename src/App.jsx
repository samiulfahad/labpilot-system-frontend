import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import LabRegistrationForm from './pages/addLab'
import Labs from './pages/labs'
import Payment from './pages/payment'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route path="/add-lab" element={<LabRegistrationForm />} />
        <Route path="/all-labs" element={<Labs />} />
        <Route path="/payment" element={<Payment />} />
        
      </Routes>
    </Layout>
  )
}

export default App
