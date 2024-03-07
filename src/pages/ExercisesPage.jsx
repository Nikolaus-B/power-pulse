import { Title } from 'components/Title/Title';
import { ExercisesCategories } from "components/Exercises/ExercisesCatigories/ExercisesCategories"
import {ExercisesSubcategoriesList} from "components/Exercises/ExercisesSubcatigoriesList/ExercisesSubcategoriesList"
import React, { useState} from 'react';
import {filters} from 'components/Exercises/filters'
import { ExercisesList } from 'components/Exercises/ExercisesList/ExercisesList';
import {GlobalStyle} from "../components/GlobalStyle"
import { Icon } from 'components/Icon/Icon';
import { Button, Svg } from 'components/Exercises/ExercisesPage.styled'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchExercises, fetchFilters } from '../redux/exercises/operations';


function ExercisesPage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchExercises());
  //   dispatch(fetchFilters());
  // }, [dispatch]);

  // const exercises = useSelector(fetchExercises);
  // const filters = useSelector(fetchFilters);

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
      <ExercisesCategories onSelect={handleCategorySelect} selectedCategory={selectedCategory}/>
      
      {selectedSubcategory ? (
        <ExercisesList subCategory={selectedSubcategory} />
        ) : (
              <ExercisesSubcategoriesList
                category={selectedCategory}
                subcategories={filters}
                onSelect={handleSubcategorySelect}
                filters={filters}
                />
      )}
      </div>
      <GlobalStyle/>
    </>
      
    )
}

export default ExercisesPage;
