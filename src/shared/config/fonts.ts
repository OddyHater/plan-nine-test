import { Roboto_Flex } from "next/font/google";

export const robotoFlex = Roboto_Flex({
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-roboto-flex",
  axes: [
    "slnt", "GRAD", "XOPQ", "XTRA", "YOPQ", "YTAS", "YTDE", "YTFI", "YTLC", "YTUC", 'wdth'
  ]
})
