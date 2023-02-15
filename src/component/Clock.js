import React, { useEffect, useState } from 'react'

export default function Clock() {
    const time= new Date().toLocaleTimeString();
    const [currentTime,setCurrentTime]=useState(time);

    useEffect(()=>{
        setInterval(()=>{
            const time= new Date().toLocaleTimeString();
            setCurrentTime(time);
            // console.log(time);
        },1000)
    },[time])
  return (
    <div className='time'>
        {currentTime}
    </div>
  )
}

