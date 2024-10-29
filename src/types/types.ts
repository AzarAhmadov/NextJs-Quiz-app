import { ReactNode } from "react";

export type TypeTitle = {
  children: ReactNode;
};

export type TypeCard = {
  children: ReactNode;
  item: {
    label: string;
    icon: string;
    color: string;
    link: string;
  };
  variants:boolean
  handleClick?: (link: string) => void;
  icon?: boolean;
};
