export type AgendaItem =
  | {
      type: "placeholder";
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
