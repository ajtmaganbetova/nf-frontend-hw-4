"use client"
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import styles from "./posts.module.css"
import axiosInstance from '@/services/axiosInstance';

interface ProductFormData {
  title: string;
  description: string;
  images: File[];
}

const ProductForm: React.FC = () => {
  const [productData, setProductData] = useState<ProductFormData>({
    title: '',
    description: '',
    images: [],
  });

  const queryClient = useQueryClient();

  const createProductMutation = useMutation<any, unknown, ProductFormData>(
    async (newProductData) => {
      const formData = new FormData();
      formData.append('title', newProductData.title);
      formData.append('description', newProductData.description);
      newProductData.images.forEach((image, index) => {
        formData.append(`image${index + 1}`, image);
      });

      const response = await axiosInstance.post('/products', formData);
      return response.data;
    },
    {
      onSuccess: () => {
        console.log('Product created successfully');
        queryClient.invalidateQueries('products');
      },
      onError: (error) => {
        console.error('Error creating product:', error);
      },
    }
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createProductMutation.mutateAsync(productData);
      setProductData({
        title: '',
        description: '',
        images: [],
      });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imagesArray = Array.from(files);
      setProductData({
        ...productData,
        images: imagesArray,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.productForm}>
      <input
        type="text"
        name="title"
        placeholder="Product Name"
        value={productData.title}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={productData.description}
        onChange={handleInputChange}
        required
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleFileChange}
        multiple // allow multiple file selection
      />
      <div>
        {productData.images.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} className={styles.imagePreview} />
        ))}
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;