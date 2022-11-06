import Link from 'next/link';
import React from 'react';
import { getRecipes } from '../../utils';

export default async function Recipes() {
  const recipes = await getRecipes();

  return (
    <div>
      <h1>Recipes</h1>
      {recipes?.map((recipe) => (
        <Link href={`/recipes/${recipe.attributes.slug}`} key={recipe.id}>
          {recipe.attributes.title}
        </Link>
      ))}
    </div>
  );
}
