"use client"

import { ThemeContext } from '@/context/ThemeContext'
import React, { ReactNode, useContext } from 'react'

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children })=> {
    const theme = useContext(ThemeContext)
  return (
    <div className={theme?.theme}>{children}</div>
  )
}

export default ThemeProvider