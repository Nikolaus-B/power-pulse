import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = state => state.products.products;

export const selectCategories = state => state.products.categories;

export const selectIsRecommended = state => state.products.isRecommended;

export const selectFilter = state => state.products.filter;

export const selectQuery = state => state.products.filter.query;

export const selectCategory = state => state.products.filter.category;

export const selectRecommended = state => state.products.filter.recommended;

export const selectVisibleProducts = createSelector(
    [selectProducts, selectFilter, selectIsRecommended],
    (products, {query, category, recommended}, isRecommended) => {
        let visibleProducts = [...products];
        if (recommended !== 'all') {
            if (recommended === 'recommended') {
               visibleProducts = isRecommended.recommendedProducts;
            }
            if (recommended === 'not recommended') {
                visibleProducts = isRecommended.notRecommendedProducts;
            }
        }
        if (query !== '') {
            visibleProducts = visibleProducts.filter(product => 
                product.title.toLowerCase().includes(query.toLowerCase())
              );
        }
        if (category !== '') {
            visibleProducts = visibleProducts.filter(product => 
                product.category.toLowerCase().includes(category.toLowerCase())
              );
        }
      return visibleProducts;
    }
  );


