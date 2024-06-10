"use client"
import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link';

const AuthLinks = () => {
  const status: string = "notauthenticated";

  return (
    <div>
    {status === "notauthenticated" ? (<Link href="/login">Log in</Link>) : (<span className={styles.link}>Log out</span>)}
    </div>
  )
}

export default AuthLinks
