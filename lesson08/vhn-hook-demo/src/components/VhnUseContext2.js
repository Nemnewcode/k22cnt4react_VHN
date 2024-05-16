import React, { useContext } from 'react'
import { ThemeContext } from './VhnUseContext'

export default function VhnUseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h2>VhnUseContext2</h2>
      <p>
        <b>2210900050</b>
        <b>Vu Hoai Nam</b>
        <b>K22CNT4</b>
      </p>
    </div>
  )
}
