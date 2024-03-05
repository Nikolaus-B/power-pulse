import React from "react";
import { Li, SubTitle, CategoryTitle } from "./ExercisesSubcatigoriesItem.styled";

export const ExercisesSubcategoriesItem = ({ subcategory, filters, onSelect }) => {
    
    return (
        <>
            {subcategory.map(id => {
                const item = filters.find(item => item._id.$oid === id); 
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
        </>
    )
}