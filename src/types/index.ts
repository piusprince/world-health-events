export interface HealthEvent {
  name: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface HealthEvents {
  [month: string]: HealthEvent[];
}