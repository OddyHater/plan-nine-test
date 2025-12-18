import { ComponentPropsWithoutRef, ElementType } from "react";

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'body-sm'
  | 'caption';

export type TypographyWeight =
  | 'regular' // 400
  | 'medium' // 500
  | 'semibold' // 600
  | 'black'; // 900

export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'description'
  | 'danger'

export type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
} & ComponentPropsWithoutRef<T>;