import React from 'react'
import Card from "./components/Card"
import DisplayCard from "./components/DisplayCard"

function App() {
  return (<>
  <div className="grid md:flex">
  <Card />
  <DisplayCard/>
  </div>
  </>
    
  )
}

export default App