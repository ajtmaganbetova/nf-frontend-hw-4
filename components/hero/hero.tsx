"use client"
import React from 'react'
import styles from './hero.module.css'

interface pageTitle {
  name: string;
}

const Hero: React.FC<pageTitle> = ({ name }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
    </div>
  )
}

export default Hero