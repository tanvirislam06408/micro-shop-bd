"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { ProductCategory } from "@/types/product";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("All");

  const categories: ProductCategory[] = [
    "All",
    "AI Subscriptions",
    "AI Tools",
    "Design Tools",
    "Productivity",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-16 md:py-24 bg-purple-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Digital Marketplace</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Popular AI Products & Subscriptions
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Choose the premium AI tools you need at affordable prices with
            instant WhatsApp delivery in Bangladesh.
          </p>

          {/* Category Filter */}
          <div className="pt-4 flex justify-center">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </motion.div>

        {/* Product Cards Grid with AnimatePresence on Category Change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 bg-white rounded-3xl border border-purple-100 p-8"
          >
            <p className="text-slate-600 font-medium">
              No products found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
