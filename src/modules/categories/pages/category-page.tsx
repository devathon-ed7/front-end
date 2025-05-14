import { useCategories } from "../hooks/use-categories";

export const CategoryPage = () => {
  const { categories, isLoading, isError, error } = useCategories();

  if (isLoading) {
    return <div>Cargando categorías...</div>;
  }

  if (isError) {
    if (error !== null) {
      return <div>Error: {error.message}</div>;
    }
  }
  return (
    <div>
      <h1>Categorías:</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};
