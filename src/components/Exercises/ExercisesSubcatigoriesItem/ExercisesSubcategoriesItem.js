import React, { useState, useEffect } from "react";
import { Li, SubTitle, CategoryTitle } from "./ExercisesSubcatigoriesItem.styled";

const sliderSizes = {
  small: 5,
  medium: 9,
  large: 10
};

export const ExercisesSubcategoriesItem = ({ subcategory, filters, onSelect }) => {
    
    const [viewportSize, setViewportSize] = useState('medium');
  const [currentPage, setCurrentPage] = useState(0);
  const [categoriesToShow, setCategoriesToShow] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setViewportSize('small');
      } else if (width >= 600 && width < 1000) {
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
  }, [currentPage, subcategory, viewportSize]);

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

    
    return (
        <>
            {categoriesToShow.map((category, index) => {
                const item = filters.find(item => item._id.$oid === category);
                const handleClick = () => {
                    onSelect(item.name);
                };
                return (
                    <Li key={item._id.$oid}
                        style={{
                            backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${item.imgURL})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                        onClick={handleClick}>
                        <SubTitle>{item.name}</SubTitle>
                        <CategoryTitle>{item.filter}</CategoryTitle>
                    </Li>
                );
            })}
      <button onClick={handleClickPrev} disabled={currentPage === 0}>
        Prev
      </button>
      <button onClick={handleClickNext} disabled={currentPage === Math.ceil(subcategory.length / sliderSizes[viewportSize]) - 1}>
        Next
      </button>
    </>
        // <>
        //     {subcategory.map(id => {
        //         const item = filters.find(item => item._id.$oid === id); 
        //         const handleClick = () => {
        //             onSelect(item.name); 
        //         };
        //             return (
        //                 <Li key={item._id.$oid}
        //                     style={{
        //                         backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${item.imgURL})`,
        //                         backgroundSize: 'cover', 
        //                         backgroundPosition: 'center', 
        //                         backgroundRepeat: 'no-repeat'
        //                     }}
        //                     onClick={handleClick}>
        //                     <SubTitle>{item.name}</SubTitle>
        //                     <CategoryTitle>{item.filter}</CategoryTitle>
        //                 </Li>
        //             );
        //     })}
        // </>
    )
}