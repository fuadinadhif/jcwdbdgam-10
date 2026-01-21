export interface User {
  id: number;
  name: string;
  email: string;
  role: "CUSTOMER" | "EVENT_ORGANIZER";
}
