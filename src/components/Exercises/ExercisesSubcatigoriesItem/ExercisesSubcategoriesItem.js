import React from "react";
import { Li, SubTitle } from "./ExercisesSubcatigoriesItem.styled";

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
                                backgroundImage: `url(${item.imgURL})`,
                                backgroundColor: `rgba(4, 4, 4, 0.5)`,
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center', 
                                backgroundRepeat: 'no-repeat'
                            }}
                            // onClick={() => onSelect(subcategory.name)}
                            onClick={handleClick}>
                            <SubTitle>{item.name}</SubTitle>
                            {item.filter}
                        </Li>
                    );
            })}
        </>
    )
}