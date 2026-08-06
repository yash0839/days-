import React,{useState} from 'react'
import './App.css'


const App = () => {

  const [marks, setMarks] = useState([45,67,89,23,56]);

  function graceStudent() {
    const newMarks = marks.map(function(elem){
      if(elem > 95){
        return elem 
      }else{
        return elem + 5
      }
    })
    setMarks(newMarks)
  }
  


  return (
    <div>
      {marks.map(function (elem, idx){
        return <h1 key={idx}>Student{idx +1}= {elem} ({elem=>33? 'PASS': 'FAIL'})</h1>
      })}
      <button onClick = {graceStudent}> Give them grace</button>
    </div>
  )
}

export default App

