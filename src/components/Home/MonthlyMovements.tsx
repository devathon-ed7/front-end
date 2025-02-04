export const MonthlyMovements = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Movimientos del mes</h2>
      <div className="flex justify-between">
        <div className="border border-purple-500 p-2">
          <p># Entradas:</p>
          <p># Salidas:</p>
        </div>
      </div>
    </div>
  );
};