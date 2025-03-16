import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Resources from './components/Resources'
/*importerer Layout og Resource komponentet, og Route og Routes fra react-router-dom slik at jeg kan sette opp
en Route til Resource komponentet med riktig kategori i path */

function App() {
  
  return (
    /*Setter opp route til riktig kategori i Resources innenfor Layout komponeneten*/
    <Layout>
      <Routes>
        <Route path="/category/:category" element={<Resources />} />
      </Routes>
    </Layout>
  )
}

export default App
