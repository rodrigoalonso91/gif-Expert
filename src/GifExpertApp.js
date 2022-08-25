import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory'	;
import { GifGrid } from './components/GifGrid'         

export const GifExpertApp = ({defaultCategories = []}) => {

    const [category, setCategory] = useState( defaultCategories );

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategory} />
            <hr />
            <ol>
                { category.map(category => <GifGrid key={category} category={category} limit="10" />) }
            </ol>
        </>
    );
};