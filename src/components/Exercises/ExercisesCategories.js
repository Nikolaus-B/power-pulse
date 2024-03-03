import React from 'react';

export const ExercisesCategories = ({onSelect }) => {
    const categories = ["Body parts", "Muscles", "Equipment"]
    const handleClick = (category) => {
        onSelect(category);
    };

    return (
            <ul>
                {categories.map((category, index) => (
                    <li key={index} onClick={() => handleClick(category)}>
                        {category}
                    </li>
                ))}
            </ul>
    )
};
