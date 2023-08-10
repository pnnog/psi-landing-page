import Home from "pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ToastEmailContextProvider } from "common/context/ToastEmail"

function App() {

  return (
    <BrowserRouter>

      <ToastEmailContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </ToastEmailContextProvider>

    </BrowserRouter>
  )
}

export default App
