export type Organization = {
  name: string;
  url: string;
  imgName: string;
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
