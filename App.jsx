import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import './Content.css'
import Style from './Style'
function App() {
  let num="summer";
  return (
    <>
    <Header />
    <p>{JSON.stringify({num:"sureka",age:19})}</p>
    <Style />
    <p style={{backgroundColor:'lightgreen'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem culpa tempora perferendis nulla autem quas, impedit in officiis, vel aliquam aspernatur. Quo doloribus rem magnam distinctio architecto dolores sunt.</p>
     <ul className='bg'><li>cse</li>
     <li>cys</li></ul> 
    </>
  )
}

export default App
