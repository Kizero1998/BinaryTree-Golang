import './App.css';
import { useEffect, useMemo, useState } from 'react';

export default function App() {
  const [number, setNumber]= useState(0)
  const [dark,setDark] =useState(false)
  const doubleNumber = useMemo(()=>{
    return slowFunction(number)
  }, [number])
//if the return value are the same, useMemo can skip the rerender of that function.
  const themeStyle = useMemo(()=>{
    return{ backgroundColor: dark ? 'black': 'white', color: dark ? 'white' : 'black'}
  }, [dark])
//Referential equality. Make sure the reference of an object or an array is the same as the last time
// that you render to make sure you only update the reference of that object whenever the content of the object
// change instead of updating every time you render.
useEffect(()=>{console.log('Theme Changed')},
[themeStyle])

  return (
   <>
    <input type="number" value={number} onChange={e =>setNumber(parseInt(e.target.value))} />
    <button onClick={()=> setDark(prevDark=> !prevDark)}>Change Theme</button>
    <div style={themeStyle}>{doubleNumber}</div>
   </>
  )
}
function slowFunction(num){
 
  for(let i=0; i<= 999999; i++){}
  return num*2
}