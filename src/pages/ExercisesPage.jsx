import { Title } from 'components/Title/Title';
import { ExercisesCategories } from "components/Exercises/ExercisesCatigories/ExercisesCategories"
import {ExercisesSubcategoriesList} from "components/Exercises/ExercisesSubcatigoriesList/ExercisesSubcategoriesList"
import React, { useState, useEffect} from 'react';
import { ExercisesList } from 'components/Exercises/ExercisesList/ExercisesList';
import {GlobalStyle} from "../components/GlobalStyle"
import { Icon } from 'components/Icon/Icon';
import { Button, PageContainer, Svg, TitleWrap} from 'components/Exercises/ExercisesPage.styled'
import { fetchFilters } from '../API/exercisesApi';

function ExercisesPage() {
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Body parts");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [showBackButton, setShowBackButton] = useState(false);
  const [title, setTitle] = useState('Exercises');
 
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
    setSelectedSubcategory(null);
    setSelectedCategory(category);
    setTitle('Exercises');
    setShowBackButton(false);
  }
  return (
    <>
      {selectedSubcategory ? 
      <>
        <PageContainer className='container'>
          {showBackButton && <Button onClick={handleBackButtonClick}><Svg>
            <Icon width={16} height={16} iconid={'arrow-back'} />
          </Svg>Back</Button>}
        <TitleWrap>
          <Title title={title} />
          <ExercisesCategories onSelect={handleCategorySelect} selectedCategory={selectedCategory} />
        </TitleWrap>
          
        {selectedSubcategory ? (
            <ExercisesList selectedCategory={selectedCategory} subCategory={selectedSubcategory} />
          ) : (
                <ExercisesSubcategoriesList
                  category={selectedCategory}
                  subcategories={subCategories}
                  onSelect={handleSubcategorySelect}
                  />
        )}
        </PageContainer>
        <GlobalStyle/>
      </>
    : <>
      <div className='container'>
        {showBackButton && <Button onClick={handleBackButtonClick}><Svg>
          <Icon width={16} height={16} iconid={'arrow-back'} />
        </Svg>Back</Button>}
      <TitleWrap>
        <Title title={title} />
        <ExercisesCategories onSelect={handleCategorySelect} selectedCategory={selectedCategory} />
      </TitleWrap>
        
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
    </>}
      
    </>
      
    )
}

export default ExercisesPage;
