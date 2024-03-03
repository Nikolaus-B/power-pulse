import React from "react";
import { Li } from "./ExercisesSubcatigoriesItem.styled";
// import {filters } from 'components/Exercises/filters' 

export const ExercisesSubcategoriesItem = ({subcategory, filters}) => {
    // const foundItems = filters.filter(item => subcategory.includes(item.id));
    // const name = foundItems.map(item => item.name);
    // const photo = foundItems.map(item => item.photo);
    // const category = foundItems.map(item => item.filter);
    return (
        <>
            {subcategory.map(id => {
                const item = filters.find(item => item._id.$oid === id); // Найти элемент по id
                    return (
                        <Li key={item._id.$oid}
                            style={{
                                backgroundImage: `url(${item.imgURL})`,
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center', 
                                backgroundRepeat: 'no-repeat'}}>
                            <span>{item.name}</span>
                            {item.filter}
                        </Li>
                    );
            })}
        </>
    )
}
// const itemPhoto = data.find(e => e.bodyPart === item || e.equipment === item || e.target === item);
// style={{ backgroundImage: `url(${itemPhoto.imgURL})` }}