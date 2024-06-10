"use client"
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <span className={styles.credits}>Made with love at NFactorial in 2024.</span>
    </div>
  )
}

export default Footer