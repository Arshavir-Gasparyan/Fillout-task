import { ReactElement, ReactNode } from "react";

export type PageType = "Info" | "Details" | "Other" | "Ending";

export interface Page {
  id: string;
  title: string;
  description: string;
  type: PageType;
  startIcon: ReactNode;
  endIcon: ReactElement;
}
