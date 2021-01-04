import React,{useContext, useState} from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme(){
    return useContext(ThemeContext)
}
export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}
//give easy access to different values
export function ThemeProvider({ children}){
    const [darkTheme,setDarkTheme]= useState(true)
//create state
    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
//update state
    return(
        <ThemeContext.Provider value={darkTheme}>
    
            <ThemeUpdateContext value={toggleTheme}>
            {children}
            </ThemeUpdateContext>

        </ThemeContext.Provider>
    )    //persist data
}