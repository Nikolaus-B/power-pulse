import React from "react";

export const ExercisesSubcategoriesItem = ({ category, subcategory}) => {
    // const liStyle = {
    // backgroundImage: {data.item.gifUrl},
    // };
    return (
        <li>
            <p>{category}</p>
            <p>{subcategory}</p>
        </li>
    )
}