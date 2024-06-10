"use client"
import React from 'react'
import Image from 'next/image'
import styles from './navbar.module.css'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>OLX alike</div>
        <div className={styles.links}>
            <ThemeToggle/>
            <Link href="/">About</Link>
            <Link href="/post">Post a product</Link>
            <AuthLinks/>
        </div>
    </div>
  )
}

export default Navbar