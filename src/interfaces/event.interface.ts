/* eslint-disable no-unused-vars */
export enum EventCategory {
  Seminar = "Seminar",
}

export interface Event {
  id: string;
  title: string;
  eventCategory: EventCategory;
  speaker: string;
  start: Date;
  end: Date;
  location: string;
  contact: string;
  moreInfo: string;
}

export interface EventGroup {
  [key: string]: Event[];
}