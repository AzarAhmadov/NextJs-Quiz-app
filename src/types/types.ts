import { ReactNode } from "react";

export type TypeTitle = {
  children: ReactNode;
};

export type TypeCard = {
  children: ReactNode;
  item?: {
    label: string;
    icon: string;
    color: string;
    link: string;
  };
  wrong?: boolean;
  correct?: boolean;
  selectedOption?: boolean;
  options?: string;
  variantsText?: string;
  variants: boolean;
  handleClick?: () => void;
  icon?: boolean;
};

export type TypeQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  item: any;
};

export type TypeCategory = {
  getFindCatagory: {
    color: string;
    label: string;
    icon: string;
    link: string;
  };
};
