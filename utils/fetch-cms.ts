export async function fetchCMS(url: string) {
  try {
    const data = await fetch(url, {
      headers: {
        Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
      },
    });
    return await data.json();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
  }
}
