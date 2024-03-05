import React from 'react';
import { Ul, Category} from "./ExercisesCategories.styled"

export const ExercisesCategories = ({onSelect }) => {
    const categories = ["Body parts", "Muscles", "Equipment"]
    const handleClick = (category) => {
        onSelect(category);
    };

    return (
            <Ul position="relative" variant="unstyled">
                {categories.map((category, index) => (
                        <Category position="relative" variant="unstyled" key={index} onClick={() => handleClick(category)}>
                            {category}
                        </Category>
                ))}
            </Ul>
    )
};
