'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/UI/card";
import { ChartContainer, ChartTooltip, ChartLegend } from "@/shared/components/UI/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { useDataDashboard } from "../hooks/useDataDashboard";
import { MonthlyTransaction } from "../interfaces/dashboard.interface";

interface TransactionChartProps {
  transactions: MonthlyTransaction[];
}

export function TransactionChart({ transactions }: TransactionChartProps) {
  const {chartConfig} = useDataDashboard()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transacciones por mes</CardTitle>
        <CardDescription>
          Entradas y salidas de inventario
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ChartContainer 
          config={chartConfig} 
          className="w-full h-full"
        >
          <LineChart data={transactions} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-popover text-popover-foreground p-2 rounded-md shadow border">
                      <p className="font-bold">{`${label}`}</p>
                      <p className="text-sm text-[var(--color-inbound)]">{`Entradas: ${payload[0].value}`}</p>
                      <p className="text-sm text-[var(--color-outbound)]">{`Salidas: ${payload[1].value}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line 
              type="monotone" 
              dataKey="inbound" 
              name="Entradas" 
              stroke="var(--color-inbound)" 
              activeDot={{ r: 8 }}
            />
            <Line 
              type="monotone" 
              dataKey="outbound" 
              name="Salidas" 
              stroke="var(--color-outbound)" 
            />
            <ChartLegend />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}