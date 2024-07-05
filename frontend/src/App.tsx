import {  createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import {ThemeProvider , CssBaseline, Box } from "@mui/material"
import { themeSettings } from "./themes"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./scenes/navbar"
import Dashboard from "./scenes/dashboard"

function App() {
const theme = useMemo(()=>createTheme(themeSettings),[])  ;
  return (
    <>
    <BrowserRouter>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/predictions" element={<Dashboard/>}/>
        <Route path="*" element={<div>No page here</div>}/>

      </Routes>
    </Box>
  </ThemeProvider>
  </BrowserRouter>
    </>
  )
}

export default App
