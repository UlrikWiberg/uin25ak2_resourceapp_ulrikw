import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Resources from './components/Resources'

function App() {
  

  return (
    <Layout>
      <Routes>
        <Route path="/category/:category" element={<Resources />} />
      </Routes>
    </Layout>
  )
}

export default App
