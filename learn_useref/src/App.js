import React, {useEffect, useState, useRef} from 'react';
import './App.css';

// export default function App() {
//   const [name,setName]= useState('')
//   const renderCount = useRef(0)
 
//   useEffect(()=>{
//     renderCount.current = renderCount.current + 1
//     //useRef will not make component to rerender.
//     //Similar to State. Store prev value and it persist between render. But not cause you to rerender like State.
//     // setRenderCount(prevRenderCount => prevRenderCount + 1) // will run forever
//   })
//   return (
// <>
//     <input value={name} onChange={ e => setName(e.target.value)}/>
//     <div>My name is{name}</div>
//     <div>I render {renderCount} times</div>
// </>
//   )
// }
export default function App() {
  const [name,setName]= useState('')
  const prevName = useRef('')
 
  useEffect(()=>{
    prevName.current = name
  },[name] )
  return (
//no way to persist data between render in hooks other than State and Ref.
<>

    <input value={name} onChange={ e => setName(e.target.value)}/>
    <div>My name is{name} and is used to be {prevName.current}</div>
</>
  )
}