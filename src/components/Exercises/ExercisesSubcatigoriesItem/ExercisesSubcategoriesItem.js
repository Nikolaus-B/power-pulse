import React, { useState, useEffect } from "react";
import { Li, SubTitle, CategoryTitle, Input, RadioBtns } from "./ExercisesSubcatigoriesItem.styled";

const sliderSizes = {
  small: 10,
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
        setCurrentPage(0); 
    }, [subcategory]);

    useEffect(() => {
        const startIndex = currentPage * sliderSizes[viewportSize];
        const endIndex = startIndex + sliderSizes[viewportSize];
        setCategoriesToShow(subcategory.slice(startIndex, endIndex));
    }, [currentPage, subcategory, viewportSize]);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };
    
    return (
      <>
        {categoriesToShow.map((category, index) => {
                const item = filters.find(item => item._id === category);
                const handleClick = () => {
                    onSelect(item.name);
                };
                return (
                    <Li key={item._id}
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
        {subcategory.length > sliderSizes[viewportSize] && (
          <RadioBtns>
            {Array.from(Array(Math.ceil(subcategory.length / sliderSizes[viewportSize])).keys()).map((page) => (
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
          </RadioBtns>)}
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