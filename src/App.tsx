import { BrowserRouter, Routes , Route } from "react-router-dom"
import Navbar from "./components/NavbarComponents/navbar"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"

import { About } from "./pages/About"
import './App.css'
import { ShoppingCartProvider } from "./Context/shoppingCartContext"
import { Signup } from "./pages/Signup"
import { StepperForm } from "./components/StepperFom/StepperForm"
function App() {
  return (
    
    <BrowserRouter>
    <ShoppingCartProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/store" element={<Store/>} />
      <Route path="/stepper" element={<StepperForm/>} />
      <Route path="/signup"element={<Signup/>}/>
    </Routes>
    </ShoppingCartProvider>
    </BrowserRouter>  
  )
};

export default App
