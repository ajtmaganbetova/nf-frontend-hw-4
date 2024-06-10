"use client"
import React from 'react';
import useProducts from '../../hooks/useProducts';
import PostsList from './PostsList';
import styles from "./posts.module.css"

const Posts = () => {
  const { data, error, isLoading } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products</div>;
  }

  return (
    <div className={styles.container}>
      <div>{data && <PostsList products={data} />}</div>
      {/* <div className={styles.cardImage}></div> */}
    </div>
  );
};

export default Posts;
