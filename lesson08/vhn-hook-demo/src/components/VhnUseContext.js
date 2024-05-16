import React, { useContext, useState } from 'react'
import VhnUseContext1 from './VhnUseContext1';
export const ThemeContext = createContext(); //tao ngu canh de chia se
export default function VhnUseContext() {
    //state
    const [theme,setTheme] = useState('red');

  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <h2>Demo useContext</h2>
      <VhnUseContext1 />
    </div>
    </ThemeContext.Provider>
  )
}
