export interface Recipe {
  id: number;
  attributes: {
    title: string;
    description: string;
    ingredients: string;
    steps: string;
    slug: string;
  };
}

export interface PageProps {
  params: { slug: string };
  searchParams?: { id: string };
}
