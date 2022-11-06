import { Recipe } from '../types';
import { fetchCMS } from './fetch-cms';

const STRAPI_URL = process.env.STRAPI_URL;

export async function getRecipes(): Promise<Recipe[]> {
  const { data } = await fetchCMS(`${STRAPI_URL}/api/recipes`);
  return data;
}

export async function getRecipe(slug: string): Promise<Recipe> {
  const { data } = await fetchCMS(`${STRAPI_URL}/api/recipes/${slug}`);
  return data;
}
