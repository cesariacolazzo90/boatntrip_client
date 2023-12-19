import './App.css'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import Navigation from '../src/components/Navigation/Navigation'



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