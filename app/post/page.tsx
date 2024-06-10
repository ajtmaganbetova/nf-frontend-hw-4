import React from 'react'
import styles from "./postPage.module.css"
import Hero from '@/components/hero/hero'
import PostsForm from '@/components/posts/PostsForm';


export default function Product() {
  return (
    <div className={styles.container}>
        <Hero name="Post a product"/>
        <PostsForm/>
    </div>
  )
}
