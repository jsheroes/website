import type { ChartData, Chart as ChartObject } from "chart.js";
import { Chart } from "chart.js/auto";

Chart.defaults.font.size = 16;

type Year = "2017" | "2018" | "2019" | "2022" | "2023";

const colorPalette = [
  "#0098ff",
  "#ff6078",
  "#ffcc67",
  "#65d3bb",
  "#6b7ba4",
  "#ffb0a8",
  "#bbab50",
  "#35038b",
];

const yearlyBudget: Record<Year, number> = {
  2017: 30000,
  2018: 40000,
  2019: 50000,
  2022: 70000,
  2023: 105000,
};

const yearlyExpenses: Record<Year, number> = {
  2017: 30000,
  2018: 40000,
  2019: 50000,
  2022: 80000,
  2023: 106300,
};

export const yearlyGrowth: ChartData = {
  labels: Object.keys(yearlyBudget),
  datasets: [
    {
      label: "Budget",
      data: Object.values(yearlyBudget),
      backgroundColor: "#ffcc67",
    },
    {
      label: "Expenses",
      data: Object.values(yearlyExpenses),
      backgroundColor: "#65d3bb",
    },
  ],
};

type MoneyBreakdown = Record<string, number>;

const expenses: Record<Year, MoneyBreakdown> = {
  2023: {
    "Food & drinks": 41500,
    "Travel & Accommodation": 21800,
    Merchendise: 5000,
    "Photo & Video": 4900,
    "Design & Sketch Artist": 3500,
    Operational: 3000,
    Fees: 2500,
    MC: 2000,
  },
  2022: {
    "Food & drinks": 35500,
    "Travel & Accommodation": 10800,
    Merchendise: 5000,
    "Photo & Video": 4900,
    "Design & Sketch Artist": 3500,
    Operational: 3000,
    Fees: 2500,
    MC: 2000,
  },
  2019: {},
  2018: {},
  2017: {},
};

const income: Record<Year, MoneyBreakdown> = {
  2023: {
    Tickets: 84000,
    Sponsors: 30000,
  },
  2022: {
    Tickets: 70000,
    Sponsors: 20000,
  },
  2019: {},
  2018: {},
  2017: {},
};

export const getExpensesChartData = (year: Year = "2023"): ChartData => ({
  labels: Object.keys(expenses[year]),
  datasets: [
    {
      data: Object.values(expenses[year]),
      backgroundColor: colorPalette,
    },
  ],
});

export const getIncomeChartData = (year: Year = "2023"): ChartData => ({
  labels: Object.keys(income[year]),
  datasets: [
    {
      data: Object.values(income[year]),
      backgroundColor: colorPalette,
    },
  ],
});

export const updateExpenses = (chart: ChartObject, year: Year) => {
  chart.data.datasets[0].data = Object.values(expenses[year]);
  chart.update();
};

export const updateIncome = (chart: ChartObject, year: Year) => {
  chart.data.datasets[0].data = Object.values(income[year]);
  chart.update();
};

export const yearsForBreakdownSelect: string[] = Object.keys(expenses).sort(
  (a, b) => (Number(a) > Number(b) ? -1 : 1)
);

export const createBarChart = (node: HTMLCanvasElement) => {
  return new Chart(node, {
    type: "bar",
    data: yearlyGrowth,
    options: {
      color: "#fff",

      scales: {
        x: {
          grid: {
            color: "#606062",
          },
          ticks: {
            color: "#fff",
          },
        },
        y: {
          grid: {
            color: "#606062",
          },
          ticks: {
            color: "#fff",
          },
        },
      },
    },
  });
};

export const createDoughnutChart = (
  node: HTMLCanvasElement,
  data: ChartData
) => {
  return new Chart(node, {
    type: "doughnut",
    data,
    options: {
      color: "#202022",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
          },
        },
      },
    },
  });
};
