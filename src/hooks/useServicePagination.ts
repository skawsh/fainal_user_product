import { useState, useMemo } from 'react';

export function useServicePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(0);

  const paginatedItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const hasNext = (currentPage + 1) * itemsPerPage < items.length;
  const hasPrevious = currentPage > 0;

  const next = () => {
    if (hasNext) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const previous = () => {
    if (hasPrevious) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return {
    currentItems: paginatedItems,
    hasNext,
    hasPrevious,
    next,
    previous,
  };
}