import { ExercisesSubcategoriesItem } from '../ExercisesSubcatigoriesItem/ExercisesSubcategoriesItem'
import React from 'react'
import { Ul } from './ExercisesSubcatigoriesList.styled';

export const ExercisesSubcategoriesList = ({ category, filters, onSelect }) => {
    const filterItemsByCategory = (filters, category) => {
    return filters.filter(item => item.filter === category);
    };
    const muscles = filterItemsByCategory(filters, "Muscles");
    const subMuscles= muscles.map(item => item._id.$oid)
    const equipment = filterItemsByCategory(filters, "Equipment");
    const subEquiment = equipment.map(item => item._id.$oid);
    const bodyParts = filterItemsByCategory(filters, "Body parts");
    const subBodyParts = bodyParts.map(item => item._id.$oid);
    
    return (
        <Ul> 
            {category === "Muscles" ? <ExercisesSubcategoriesItem filters={filters} subcategory={subMuscles} onSelect={onSelect}/>
            : category === 'Equipment' ? <ExercisesSubcategoriesItem filters={filters} subcategory={subEquiment} onSelect={onSelect}/>
                    : <ExercisesSubcategoriesItem filters={filters} subcategory={subBodyParts} onSelect={onSelect}/>}
        </Ul>
    )
}
