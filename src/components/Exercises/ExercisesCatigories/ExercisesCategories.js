import React from 'react';
import { Ul, Category} from "./ExercisesCategories.styled"

export const ExercisesCategories = ({onSelect, selectedCategory }) => {
    const categories = ["Body parts", "Muscles", "Equipment"]
    const handleClick = (category) => {
        onSelect(category);
    };

    return (
            <Ul>
                {categories.map((category, index) => (
                    <li key={index}
                            onClick={() => handleClick(category)}
                            >
                        <Category selected={category === selectedCategory}>
                                {category}
                        </Category>
                    </li>
                ))}
            </Ul>
    )
};
