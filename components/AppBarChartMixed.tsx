"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A mixed bar chart"

const chartConfig = {
  nota_media: {
    label: "Nota Média",
  },
  Branca: {
    label: "Branca",
    color: "#8EC5FF",
  },
  "Não declarado": {
    label: "Não declarado",
    color: "#2B7FFF",
  },
  Parda: {
    label: "Parda",
    color: "#155DFC",
  },
  Amarela: {
    label: "Amarela",
    color: "#1447E6",
  },
  Preta: {
    label: "Preta",
    color: "#193CB8",
  },
  Indígena: {
    label: "Indígena",
    color: "#0F1F6E",
  },
} satisfies ChartConfig

const chartData = [
  { cor_raca: "Branca", nota_media: 562.0, fill: "var(--color-Branca)" },
  { cor_raca: "Não declarado", nota_media: 523.3, fill: "var(--color-Não declarado)" },
  { cor_raca: "Parda", nota_media: 521.1, fill: "var(--color-Parda)" },
  { cor_raca: "Amarela", nota_media: 512.5, fill: "var(--color-Amarela)" },
  { cor_raca: "Preta", nota_media: 509.1, fill: "var(--color-Preta)" },
  { cor_raca: "Indígena", nota_media: 491.6, fill: "var(--color-Indígena)" },
]

export function ChartBarMixed() {
  return (
    <div className="w-full">
      <h1 className="text-lg font-medium mb-6">Desempenho por Cor/Raça - ENEM PE</h1>
      <ChartContainer 
        config={chartConfig}
        className="min-h-[200px] w-full"
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{
            left: 0,
            top: 10,
            right: 10,
            bottom: 10,
          }}
        >
          <YAxis
            dataKey="cor_raca"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label || value
            }
          />
          <XAxis dataKey="nota_media" type="number" hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="nota_media" layout="vertical" radius={5} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default ChartBarMixed
