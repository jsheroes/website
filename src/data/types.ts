export type Discount = {
  percentage: number;
  code: string;
};

export type Organization = {
  name: string;
  url: string;
  imgName: string;
  overrideBgColor?: string;
  discount?: Discount;
};

export type AgendaItem =
  | {
      type: "placeholder";
      imgName: string;
      timeSlot: string;
      content: string;
      description?: string;
      /** Sessions on the alternative stage run beside the main-stage talks. */
      stage?: "main" | "alternative";
    }
  | {
      type: "talk";
      timeSlot: string;
      speakers: string[];
    };
