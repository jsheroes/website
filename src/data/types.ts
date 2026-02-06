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
    }
  | {
      type: "talk";
      timeSlot: string;
      speakers: string[];
    };
