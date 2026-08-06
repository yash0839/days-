import React from 'react'
import Card from './componente/Card'
import Button from './componente/Butten'

const App = () => {
  return (
    <div className='px-10 h-sreen bg-black text-white'>
      <Card user='yash' age={20}/>
      <Card user='ritesh' age={19} />
      <Card user='rohit' age={21} />
      <Card user='nikhil' age={20} />

      <Button  text='Buy Now'/>
      <Button text='Explore Courses'/> 
    
    </div>
  )
}

export default App
