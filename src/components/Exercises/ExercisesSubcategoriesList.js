import { ExercisesSubcategoriesItem } from './ExercisesSubcategoriesItem'
import React from 'react'

export const ExercisesSubcategoriesList = ({ category, data }) => {
    const uniqueBodyParts = [...new Set(data.map(item => item.bodyPart))];
    // const uniqueEquipment = [...new Set(data.map(item => item.equipment))];
    // const uniqueTargets = [...new Set(data.map(item => item.target))];
    // const { target, equipment, bodyPart, _id , gifUrl} = data.item;
    return (
        <ul > 
            {/* {category === "Muscles" ? <ExercisesSubcategoriesItem url={gifUrl} category={category} subcategory={target}  />
        : category === 'Equipment' ? <ExercisesSubcategoriesItem url={gifUrl} category={category} subcategory={equipment}  />
                    : <ExercisesSubcategoriesItem url={gifUrl} category={category} subcategory={bodyPart} />} */}
            <ExercisesSubcategoriesItem category={category} subcategory={uniqueBodyParts} />
        </ul>
    )
}
// key={_id.$oid}