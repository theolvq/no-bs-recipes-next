import React from 'react';
import { PageProps } from '../../../types';
import { getRecipe, getRecipes } from '../../../utils';

export async function generateStaticParams() {
  const recipes = await getRecipes();
  if (!recipes) return;
  return recipes.map((recipe) => ({ slug: recipe.attributes.slug }));
}

export default async function RecipePage({ params, searchParams }: PageProps) {
  const { slug } = params;
  const recipe = await getRecipe(slug);
  const { id } = recipe;

  return (
    <div>
      <h1>Individual Recipe</h1>
      <p>{searchParams?.id}</p>
    </div>
  );
}
