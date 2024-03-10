import { Title } from 'components/Title/Title';
import { ExercisesCategories } from "components/Exercises/ExercisesCatigories/ExercisesCategories"
import {ExercisesSubcategoriesList} from "components/Exercises/ExercisesSubcatigoriesList/ExercisesSubcategoriesList"
import React, { useState, useEffect} from 'react';
// import {filters} from 'components/Exercises/filters'
import { ExercisesList } from 'components/Exercises/ExercisesList/ExercisesList';
import {GlobalStyle} from "../components/GlobalStyle"
import { Icon } from 'components/Icon/Icon';
import { Button, Svg } from 'components/Exercises/ExercisesPage.styled'
// import { useSelector } from 'react-redux';
// import { selectExercises, selectSubcatigories } from '../redux/exercises/exercisesSelectors';
import { fetchFilters } from 'exercisesApi';
// import { fetchExercises, fetchFilters } from '../redux/exercises/operations';


function ExercisesPage() {
  const [subCategories, setSubCategories] = useState([]);
 

  useEffect(() => {
    async function getSubcategory() {
      try {
        const subcategory = await fetchFilters();
        setSubCategories(subcategory);
      } catch (error) {
      }
    }
    getSubcategory();
  }, []);

 
  // const exercises = useSelector(selectExercises);
  // const filters = useSelector(selectSubcatigories);

  const [selectedCategory, setSelectedCategory] = useState("Body parts");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [showBackButton, setShowBackButton] = useState(false);
  const [title, setTitle] = useState('Exercises');

  const handleSubcategorySelect = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName);
    setTitle(subcategoryName);
    setShowBackButton(true);
  };

  const handleBackButtonClick = () => {
    setSelectedSubcategory(null);
    setTitle('Exercises');
    setShowBackButton(false);
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }
  return (
    <>
      <div className='container'>
        {showBackButton && <Button onClick={handleBackButtonClick}><Svg>
          <Icon width={16} height={16} iconid={'arrow-back'} />
        </Svg>Back</Button>}
      <Title title={title} />
      <ExercisesCategories onSelect={handleCategorySelect} selectedCategory={selectedCategory} />
        
      {selectedSubcategory ? (
          <ExercisesList selectedCategory={selectedCategory} subCategory={selectedSubcategory} />
        ) : (
              <ExercisesSubcategoriesList
                category={selectedCategory}
                subcategories={subCategories}
                onSelect={handleSubcategorySelect}
                />
      )}
      </div>
      <GlobalStyle/>
    </>
      
    )
}

export default ExercisesPage;
