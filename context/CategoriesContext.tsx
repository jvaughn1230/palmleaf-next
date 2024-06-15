"use client";

import React, { useContext, useState, useEffect, createContext } from "react";
import { getCategoriesAndDocuments } from "@/utils/firebase";
import { CategoryType } from "@/types";

const CategoriesContext = createContext([]);

export const CategoriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategoriesAndDocuments();
      setCategories((categoriesData) => categoriesData);
      console.log(categoriesData);
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => useContext(CategoriesContext);
