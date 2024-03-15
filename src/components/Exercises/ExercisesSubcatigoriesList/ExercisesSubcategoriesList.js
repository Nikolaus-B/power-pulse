import { ExercisesSubcategoriesItem } from '../ExercisesSubcatigoriesItem/ExercisesSubcategoriesItem';
import React, { useState, useEffect } from 'react';
import {
  Ul,
  Input,
  RadioBtns,
  Container,
} from './ExercisesSubcatigoriesList.styled';
import { Loader } from '../../Loader/Loader';

const sliderSizes = {
  small: 10,
  medium: 9,
  large: 10,
};

export const ExercisesSubcategoriesList = ({
  category,
  subcategories,
  onSelect,
}) => {
  const [viewportSize, setViewportSize] = useState('medium');
  const [currentPage, setCurrentPage] = useState(0);
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

  const filterItemsByCategory = (subcategories, category) => {
    return subcategories.filter(item => item.filter === category);
  };

  const muscles = filterItemsByCategory(subcategories, 'Muscles');
  const subMuscles = muscles.map(item => item._id);
  const equipment = filterItemsByCategory(subcategories, 'Equipment');
  const subEquiment = equipment.map(item => item._id);
  const bodyParts = filterItemsByCategory(subcategories, 'Body parts');
  const subBodyParts = bodyParts.map(item => item._id);

  useEffect(() => {
    setCurrentPage(0);
  }, [category]);

  const handlePageClick = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [subcategories]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {category === 'Muscles' ? (
            <Container>
                <Ul>
                  <ExercisesSubcategoriesItem
                    filters={subcategories}
                    subcategory={subMuscles}
                    onSelect={onSelect}
                    currentPage={currentPage}
                  />
                </Ul>
              {subMuscles.length > sliderSizes[viewportSize] && (
                <RadioBtns>
                  {Array.from(
                    Array(
                      Math.ceil(subMuscles.length / sliderSizes[viewportSize])
                    ).keys()
                  ).map(page => (
                    <label key={page}>
                      <Input
                        type="radio"
                        name="page"
                        value={page}
                        checked={currentPage === page}
                        onChange={() => handlePageClick(page)}
                      />
                    </label>
                  ))}
                </RadioBtns>
              )}
            </Container>
          ) : category === 'Equipment' ? (
            <Container>
                <Ul>
                  <ExercisesSubcategoriesItem
                    filters={subcategories}
                    subcategory={subEquiment}
                    onSelect={onSelect}
                    currentPage={currentPage}
                  />
                </Ul>
              {subEquiment.length > sliderSizes[viewportSize] && (
                <RadioBtns>
                  {Array.from(
                    Array(
                      Math.ceil(subEquiment.length / sliderSizes[viewportSize])
                    ).keys()
                  ).map(page => (
                    <label key={page}>
                      <Input
                        type="radio"
                        name="page"
                        value={page}
                        checked={currentPage === page}
                        onChange={() => handlePageClick(page)}
                      />
                    </label>
                  ))}
                </RadioBtns>
              )}
            </Container>
          ) : (
            <Container>
                <Ul>
                  <ExercisesSubcategoriesItem
                    filters={subcategories}
                    subcategory={subBodyParts}
                    onSelect={onSelect}
                    currentPage={currentPage}
                  />
                </Ul>
              {subBodyParts.length > sliderSizes[viewportSize] && (
                <RadioBtns>
                  {Array.from(
                    Array(
                      Math.ceil(subBodyParts.length / sliderSizes[viewportSize])
                    ).keys()
                  ).map(page => (
                    <label key={page}>
                      <Input
                        type="radio"
                        name="page"
                        value={page}
                        checked={currentPage === page}
                        onChange={() => handlePageClick(page)}
                      />
                    </label>
                  ))}
                </RadioBtns>
              )}
            </Container>
          )}
        </>
      )}
    </>
  );
};
