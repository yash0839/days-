import React from 'react'

const App = () => {

  function btnClicked() {
    console.log('button is click');
  }
  return (
    <div>
      <button
      onClick={btnClicked}
       className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2'>
        Click to Download
      </button>
    </div>
  )
}

export default App
