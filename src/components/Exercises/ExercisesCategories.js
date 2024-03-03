import React from 'react';
import { Ul} from "./ExercisesCategories.styled"

export const ExercisesCategories = ({onSelect }) => {
    const categories = ["Body parts", "Muscles", "Equipment"]
    const handleClick = (category) => {
        onSelect(category);
    };

    return (
            <Ul>
                {categories.map((category, index) => (
                        <li position="relative" variant="unstyled" key={index} onClick={() => handleClick(category)}>
                            {category}
                        </li>
                ))}
            </Ul>
    )
};
