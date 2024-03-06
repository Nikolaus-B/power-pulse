export const selectProducts = state => state.products.products;

export const selectCategories = state => state.products.categories;

export const selectRecommended = state => state.products.recommended;

export const selectNotRecommended = state => state.products.notRecommended;

export const selectFilter = state => state.products.filter;

export const selectQuery = state => state.products.filter.query;

export const selectCategory = state => state.products.filter.category;

export const selectIsRecommended = state => state.products.filter.isRecommended;


