'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/UI/card";
import { ChartContainer, ChartTooltip } from "@/shared/components/UI/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { useIsMobile } from "@/shared/hooks/use-mobile";
import { useDataDashboard } from "../hooks/useDataDashboard";
import { ProductStats } from "../interfaces/dashboard.interface";

interface TopProductsChartProps {
  products: ProductStats[];
}

export function TopProductsChart({ products }: TopProductsChartProps) {
  const isMobile = useIsMobile();
  const {chartConfig } = useDataDashboard()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Productos principales</CardTitle>
        <CardDescription>
          Los productos más activos del inventario
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ChartContainer
          config={chartConfig}
          className="w-full h-full"
        >
          <BarChart
            data={products}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            layout={isMobile ? "vertical" : "horizontal"}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey={isMobile ? "stock" : "name"} type={isMobile ? "number" : "category"} />
            <YAxis dataKey={isMobile ? "name" : "stock"} type={isMobile ? "category" : "number"} />
            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-popover text-popover-foreground p-2 rounded-md shadow border">
                      <p className="font-bold">{payload[0].payload.name}</p>
                      <p className="text-sm">{`Stock: ${payload[0].payload.stock}`}</p>
                      <p className="text-sm">{`Transacciones: ${payload[0].payload.transactions}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="stock" fill="#8884d8" name="Stock" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}