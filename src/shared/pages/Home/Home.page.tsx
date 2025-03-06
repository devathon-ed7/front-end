import { useProducts } from "@/modules/products/hooks/useProducts";
import { GeneralProducts, MonthlyMovements } from "@/shared/components";

export const HomePage = () => {
  const { products } = useProducts();
  const totalProducts = products.length;
  const activeProducts = products.filter(({ stock }: { stock: number }) => stock >= 1).length;
  const inactiveProducts = products.filter(({ stock }: { stock: number }) => stock < 0).length;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-800 text-center">
        Bienvenido al sistema de inventario
      </h1>
      <div className="flex justify-between mt-4">
        <GeneralProducts
          totalProducts={totalProducts}
          activeProducts={activeProducts}
          inactiveProducts={inactiveProducts}
        />
        <MonthlyMovements />
      </div>
    </div>
  );
}