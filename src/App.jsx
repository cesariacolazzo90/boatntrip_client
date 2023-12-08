import './App.css'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import Navigation from '../src/components/Navigation/Navigation'


// TODO: REVISAR LAS EXPRESIONES, CLASES Y NOMBRES EN CASTELLANO
function App() {

  return (

    <div className="App">

      <Navigation />
      <AppRoutes />
      <Footer />
    </div >
  )
}

export default App