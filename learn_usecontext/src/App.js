import React, {useState} from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import ClassContextComponent from './ClassContextComponent'
import {ThemeProvider } from './ThemeContext'

export const ThemeContext = React.createContext()

// export default function App(){
//   const[darkTheme, setDarkTheme] = useState(true)

//   function toggleTheme(){  setDarkTheme(prevDarkTheme => !prevDarkTheme)
//   }

return(

<ThemeProvider >
  <FunctionContextComponent/>
</ThemeProvider>
//wrapping all the the logic for handling states, updating state and pushing out differents values to all of children
)

}