import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/navbar'
import Home from './component/pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailPage from './component/pages/detailPage'

function App() {
  const data = [
    {
        applicationId:"1",
        applicationNo: "Eik/23w/TEC/7434",
        applicationCategory:"TEC",
        applicationModel:"EKIOS-121",
        applicationEst:"10/05/2024",
        applicationAct:"10/02/2024",
        applicationName:"Tec Application",
        applicationStatus:"FOR"
    },
    {
        applicationId:"2",
        applicationNo: "Eik/23w/TEC/5238",
        applicationCategory:"TEC",
        applicationModel:"EKIOS-141",
        applicationEst:"10/05/2024",
        applicationAct:"10/02/2024",
        applicationName:"Wps Application",
        applicationStatus:"BOM"
        
    }
]
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route>
              <Route path="/" element ={<Home data={data}/>}/>
              <Route path="/detail/:id" element={<DetailPage data={data}/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
