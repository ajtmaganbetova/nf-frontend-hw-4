import Hero from "@/components/hero/hero";
import "./globals.css";
import React from "react";
import ProductsPage from "@/components/posts/Posts";

export default function Home() {
  return (
      <div className="container">
        <div className="wrapper">
            <Hero name="Products"/>
             <ProductsPage />
            <hr />
        </div>
    </div>
  );
}
