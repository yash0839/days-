import React from 'react'

const Card = (props) => {
    console.log(props.user);
  return (
    <div className=' border-2 border-red-500 m2 rounded h-40 px-5 py-3 w-4= flex justify-center items-center'>
        <h1 className='text-4xl font-semibold'>{props.user}</h1>
    </div>
  )
}

export default Card
