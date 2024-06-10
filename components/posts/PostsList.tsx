"use client"
import React from 'react';
import styles from "./posts.module.css"

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <div className={styles.cardAll}>
            <div className={styles.cardBody}>
                <h1 className={styles.cardTitle} key={product.id}>{product.title}</h1>
                <span className={styles.description}>{product.description}</span>
            </div>
            <img src={product.image} alt={product.title} className={styles.image} />
        </div>
    
      ))}
    </ul>
  );
};

export default ProductList;
