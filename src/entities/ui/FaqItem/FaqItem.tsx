import React, {JSX} from 'react';
import { Tooltip } from "@/shared/ui";
import Image from "next/image";

interface Props {
  icon: string;
  content: string | JSX.Element;
  tooltipText: string;
}

export const FaqItem = ({ icon, content, tooltipText }: Props) => {
  return (
    <div className={'flex gap-1.5 items-center'}>
      <div className={'flex items-center justify-center p-[5px] bg-white rounded-md'}>
        <Image src={icon} alt={''} width={13.5} height={13.5} />
      </div>
      { content }
      <Tooltip content={tooltipText} />
    </div>
  );
};