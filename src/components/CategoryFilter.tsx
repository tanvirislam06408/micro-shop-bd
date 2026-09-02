"use client";

import { ProductCategory } from "@/types/product";

interface CategoryFilterProps {
  categories: ProductCategory[];
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
              isSelected
                ? "bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/20 scale-[1.02]"
                : "bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-purple-200/80"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
