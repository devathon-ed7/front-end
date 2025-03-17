'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/UI/card";
import { ChartContainer, ChartTooltip, ChartLegend } from "@/shared/components/UI/chart";
import { PieChart, Pie, Cell } from "recharts";
import { CategoryStock } from "../interfaces/dashboard.interface";
import { useDataDashboard } from "../hooks/useDataDashboard";

interface CategoryPieChartProps {
  categories: CategoryStock[];
}

export function CategoryPieChart({ categories }: CategoryPieChartProps) {
  const {chartConfig,CHART_COLORS} = useDataDashboard()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventario por Categoría</CardTitle>
        <CardDescription>
          Distribución del stock actual
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ChartContainer 
          config={chartConfig} 
          className="w-full h-full"
        >
          <PieChart margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <Pie
              data={categories}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="stock"
              nameKey="name"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {categories.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
              ))}
            </Pie>
            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-popover text-popover-foreground p-2 rounded-md shadow border">
                      <p className="font-bold">{`${payload[0].name}`}</p>
                      <p className="text-sm">{`Stock: ${payload[0].value}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <ChartLegend />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}