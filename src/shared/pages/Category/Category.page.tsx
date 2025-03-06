import { CardProductLayout } from "@/shared/layouts";

export const CategoryPage = () => {
  return (
    <div>
      <CardProductLayout
        name="Nombre"
        stock={200}
        category="categoria"
        imageUrl=""
        price={"20"}
      />
    </div>
  );
};
