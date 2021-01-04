import React, {useEffect, useState} from 'react'

export default function App(){
  const [resourceType, setResourceType] = useState('post')
  const [items,setItems] = useState([])


  useEffect(()=>{
    console.log('resource changed')
    return () =>{
      console.log('return from resource change')
    }
    //gets called everytime
//clean up
  },[resourceType])


  return(
  <>
  <div>
    <button onClick={()=> setResourceType('posts')}>Posts</button>
    <button onClick={()=> setResourceType('users')}>Users</button>
    <button onClick={()=> setResourceType('comments')}>Comments</button>
  </div>
  <h1>{resourceType}</h1>
 
 
  </>
)
}
//useeefect: anytime you wanted to have a side effect occur when your component, props change

// import React, {useEffect, useState} from 'react'

// export default function App(){
//   const [windowWidth, setwindowWidth] = useState(window.innerWidth)

//   const handleResize = ()=>{
//     setwindowWidth(window.innerWidth)
//   }

//   useEffect(()=>{
//     window.addEventListener('resize', handleResize)
//     return()=>{
//       window.removeEventListener('resize', handleResize)
//     }
//   },[])

//   return(
//   <div>{windowWidth}</div>
// )
// }