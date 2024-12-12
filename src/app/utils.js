export function paginateData(data, currentPage, perPage) {
  // Validate inputs
  if (!Array.isArray(data)) throw new Error('Data must be an array');
  if (currentPage < 1) throw new Error('Current page must be positive');
  if (perPage < 1) throw new Error('Items per page must be positive');

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  return {
    PaginatedItems: data.slice(startIndex, endIndex),
    pagination: {
      currentPage,
      perPage,
      totalItems,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1
    }
  };
};


export function slugToText(slug) {
  if (!slug) return '';
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}