import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = state => state.products.products;

export const selectCategories = state => state.products.categories;

export const selectRecommended = state => state.products.recommended;

export const selectNotRecommended = state => state.products.notRecommended;

export const selectFilter = state => state.products.filter;

export const selectQuery = state => state.products.filter.query;

export const selectCategory = state => state.products.filter.category;

export const selectIsRecommended = state => state.products.filter.isRecommended;

export const selectVisibleProducts = createSelector(
    [selectProducts, selectFilter],
    (products, {query, category, recommended}) => {
        let visibleProducts = [...products];
        if (recommended !== 'all') {
            if (recommended === 'recommended') {
                
            }
        }
        if (query !== '') {
            return visibleProducts.filter(product => 
                product.title.toLowerCase().includes(query.toLowerCase())
              );
        }
        if (category !== '') {
            return visibleProducts.filter(product => 
                product.category.toLowerCase().includes(query.toLowerCase())
              );
        }
      
    }
  );


