import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

//I import all the functions of the components directly from components (which will use index.js where all the imports are made)

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Coding']);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories]);
    }
 
  return (
    <div>
        <h1>GifExpertApp</h1> 

        <AddCategory 
            onNewCategory = { (event) => onAddCategory(event) }
        />

        { 
            categories.map( ( category ) => (
                <GifGrid key={ category } category={ category }/>
            ) )
        }

    </div>
  )
};
