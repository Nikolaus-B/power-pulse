export const selectCategories = state => state.products.categories;

export const selectQuery = state => state.products.filter.query;

export const selectCategory = state => state.products.filter.category;

export const selectRecommended = state => state.products.filter.recommended;
