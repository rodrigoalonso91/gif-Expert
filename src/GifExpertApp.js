import React from 'react';
import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid'         

export const GifExpertApp = () => {

    const [category, setCategory] = useState(['Guitar']);

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