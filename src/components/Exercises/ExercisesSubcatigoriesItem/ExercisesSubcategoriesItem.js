import React, { useState, useEffect } from 'react';
import {
  Li,
  SubTitle,
  CategoryTitle,
} from './ExercisesSubcatigoriesItem.styled';
import { Loader } from '../../Loader/Loader';

const sliderSizes = {
  small: 10,
  medium: 9,
  large: 10,
};

export const ExercisesSubcategoriesItem = ({
  subcategory,
  filters,
  onSelect,
  currentPage,
}) => {
  const [viewportSize, setViewportSize] = useState('medium');
  const [categoriesToShow, setCategoriesToShow] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewportSize('small');
      } else if (width >= 768 && width < 1440) {
        setViewportSize('medium');
      } else {
        setViewportSize('large');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const startIndex = currentPage * sliderSizes[viewportSize];
    const endIndex = startIndex + sliderSizes[viewportSize];
    setCategoriesToShow(subcategory.slice(startIndex, endIndex));
    setLoading(false);
  }, [currentPage, subcategory, viewportSize]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {categoriesToShow.map((category, index) => {
        const item = filters.find(item => item._id === category);
        const handleClick = () => {
          onSelect(item.name);
        };
        return (
          <Li
            key={item._id}
            style={{
              backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${item.imgURL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={handleClick}
          >
            <SubTitle>{item.name}</SubTitle>
            <CategoryTitle>{item.filter}</CategoryTitle>
          </Li>
        );
      })}
    </>
  );
};
