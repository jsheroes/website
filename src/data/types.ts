export type Person = {
  name: string;
  title: string;
  company?: string;
  imgName: string;
};

export type Organization = {
  name: string;
  url: string;
  imgName: string;
};

export type AgendaItem =
  | {
      type: "placeholder";
      timeSlot: string;
      content: string;
    }
  | {
      type: "talk";
      timeSlot: string;
      speakers: string[];
    };
