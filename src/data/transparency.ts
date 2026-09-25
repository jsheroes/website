/** Budget, income and expenses per edition, in euros. There was no 2020 edition. */

export type Year = "2017" | "2018" | "2019" | "2022" | "2023" | "2024" | "2025";

const yearlyBudget: Record<Year, number> = {
  2017: 52030,
  2018: 87200,
  2019: 92600,
  2022: 35500,
  2023: 106300,
  2024: 111600,
  2025: 83000,
};

const yearlyIncome: Record<Year, number> = {
  2017: 54621,
  2018: 79400,
  2019: 98000,
  2022: 52000,
  2023: 115200,
  2024: 103300,
  2025: 85200,
};

const yearlyExpenses: Record<Year, number> = {
  2017: 43355,
  2018: 64800,
  2019: 92650,
  2022: 32853,
  2023: 97400,
  2024: 99800,
  2025: 76700,
};

export const years = Object.keys(yearlyBudget) as Year[];

export const yearly = years.map((year) => ({
  year,
  budget: yearlyBudget[year],
  income: yearlyIncome[year],
  expenses: yearlyExpenses[year],
}));

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

export const expensesBreakdown: Record<Year, ExpensesBreakdown> = {
  2025: {
    venue: 27300,
    speakers: 23600,
    merchandise: 1600,
    photoVideo: 6900,
    collaborators: 13900,
    tools: 3700,
  },
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

export const incomeBreakdown: Record<Year, IncomeBreakdown> = {
  2025: {
    tickets: 57200,
    sponsors: 28000,
  },
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

export const EXPENSES_LABELS: Record<keyof ExpensesBreakdown, string> = {
  venue: "Venue",
  speakers: "Speakers' experience",
  merchandise: "Merchandise",
  photoVideo: "Photo & Video",
  collaborators: "External collaborators",
  tools: "Tools and digital services",
};

export const INCOME_LABELS: Record<keyof IncomeBreakdown, string> = {
  tickets: "Tickets",
  sponsors: "Sponsors",
};

/** Newest first, for the year selector. */
export const yearsForBreakdownSelect: Year[] = [...years].reverse();

/** Slice colours, in order. */
export const palette = [
  "var(--color-accent-blue)",
  "var(--color-accent-pink)",
  "var(--color-accent-orange)",
  "var(--color-accent-green)",
  "#6b7ba4",
  "#ffb0a8",
];
