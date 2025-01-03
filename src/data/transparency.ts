import type { ChartData, Chart as ChartObject } from "chart.js";
import { Chart } from "chart.js";

Chart.defaults.font.size = 16;

type Year = "2017" | "2018" | "2019" | "2022" | "2023" | "2024";

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
  2017: 52030,
  2018: 87200,
  2019: 92600,
  2022: 35500,
  2023: 106300,
  2024: 111600,
};

const yearlyIncome: Record<Year, number> = {
  2017: 54621,
  2018: 79400,
  2019: 98000,
  2022: 52000,
  2023: 115200,
  2024: 103300,
};

const yearlyExpenses: Record<Year, number> = {
  2017: 43355,
  2018: 64800,
  2019: 92650,
  2022: 32853,
  2023: 97400,
  2024: 99800,
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
      label: "Income",
      data: Object.values(yearlyIncome),
      backgroundColor: "#65d3bb",
    },
    {
      label: "Expenses",
      data: Object.values(yearlyExpenses),
      backgroundColor: "#ff6078",
    },
  ],
};

type ExpensesBreakdown = {
  venue: number;
  speakers: number;
  merchandise: number;
  photoVideo: number;
  collaborators: number;
  tools: number;
};

type IncomeBreakdown = {
  tickets: number;
  sponsors: number;
};

const expenses: Record<Year, ExpensesBreakdown> = {
  2024: {
    venue: 36400,
    speakers: 34300,
    merchandise: 3500,
    photoVideo: 6900,
    collaborators: 15000,
    tools: 3600,
  },
  2023: {
    venue: 53700,
    speakers: 21800,
    merchandise: 5000,
    photoVideo: 4900,
    collaborators: 8500,
    tools: 3500,
  },
  2022: {
    venue: 12650,
    speakers: 8200,
    merchandise: 4600,
    photoVideo: 2600,
    collaborators: 3400,
    tools: 1350,
  },
  2019: {
    venue: 42200,
    speakers: 33300,
    merchandise: 4000,
    photoVideo: 2800,
    collaborators: 6200,
    tools: 4150,
  },
  2018: {
    venue: 35000,
    speakers: 17800,
    merchandise: 5500,
    photoVideo: 2100,
    collaborators: 2300,
    tools: 2100,
  },
  2017: {
    venue: 24100,
    speakers: 14500,
    merchandise: 1000,
    photoVideo: 1800,
    collaborators: 500,
    tools: 1250,
  },
};

const income: Record<Year, IncomeBreakdown> = {
  2024: {
    tickets: 76300,
    sponsors: 27000,
  },
  2023: {
    tickets: 85200,
    sponsors: 30000,
  },
  2022: {
    tickets: 26500,
    sponsors: 25500,
  },
  2019: {
    tickets: 74000,
    sponsors: 24000,
  },
  2018: {
    tickets: 70000,
    sponsors: 19700,
  },
  2017: {
    tickets: 38000,
    sponsors: 16700,
  },
};

const EXPENSES_LABELS: Record<keyof ExpensesBreakdown, string> = {
  venue: "Venue",
  speakers: "Speakers' experience",
  merchandise: "Merchandise",
  photoVideo: "Photo & Video",
  collaborators: "External collaborators",
  tools: "Tools and digital services",
};

const INCOME_LABELS: Record<keyof IncomeBreakdown, string> = {
  tickets: "Tickets",
  sponsors: "Sponsors",
};

export const getExpensesChartData = (year: Year = "2023"): ChartData => ({
  labels: Object.keys(expenses[year]).map(
    (k) => EXPENSES_LABELS[k as keyof ExpensesBreakdown],
  ),
  datasets: [
    {
      data: Object.values(expenses[year]),
      backgroundColor: colorPalette,
    },
  ],
});

export const getIncomeChartData = (year: Year = "2023"): ChartData => ({
  labels: Object.keys(income[year]).map(
    (k) => INCOME_LABELS[k as keyof IncomeBreakdown],
  ),
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
  (a, b) => (Number(a) > Number(b) ? -1 : 1),
);

export const createBarChart = (node: HTMLCanvasElement) => {
  return new Chart(node, {
    type: "bar",
    data: yearlyGrowth,
    options: {
      color: "#fff",
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => `€${context.parsed.y / 1000}k`,
          },
        },
      },
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
            callback: (val) => `€${Number(val) / 1000}k`,
          },
        },
      },
    },
  });
};

export const createDoughnutChart = (
  node: HTMLCanvasElement,
  data: ChartData,
) => {
  return new Chart(node, {
    type: "doughnut",
    data,
    options: {
      color: "#202022",
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => `€${Number(context.parsed) / 1000}k`,
          },
        },
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
