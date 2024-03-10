import { ExercisesSubcategoriesItem } from '../ExercisesSubcatigoriesItem/ExercisesSubcategoriesItem'
import React from 'react'
import { Ul } from './ExercisesSubcatigoriesList.styled';

export const ExercisesSubcategoriesList = ({ category, subcategories, onSelect }) => {
    const filterItemsByCategory = (subcategories, category) => {
    return subcategories.filter(item => item.filter === category);
    };
    
    const muscles = filterItemsByCategory(subcategories, "Muscles");
    console.log(muscles)
    const subMuscles= muscles.map(item => item._id)
    const equipment = filterItemsByCategory(subcategories, "Equipment");
    const subEquiment = equipment.map(item => item._id);
    const bodyParts = filterItemsByCategory(subcategories, "Body parts");
    const subBodyParts = bodyParts.map(item => item._id);
    
    return (
        <Ul> 
            {category === "Muscles" ? <ExercisesSubcategoriesItem filters={subcategories} subcategory={subMuscles} onSelect={onSelect}/>
            : category === 'Equipment' ? <ExercisesSubcategoriesItem filters={subcategories} subcategory={subEquiment} onSelect={onSelect}/>
                    : <ExercisesSubcategoriesItem filters={subcategories} subcategory={subBodyParts} onSelect={onSelect}/>}
        </Ul>
    )
}
