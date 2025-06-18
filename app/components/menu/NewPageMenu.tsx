import React from "react";
import CircleCheckIcon from "../../icons/CircleCheckIcon";
import CircleInfoIcon from "../../icons/CircleInfoIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import { PageType } from "../../_lib/types/pages";

interface Props {
  close: VoidFunction;
  onClick: (type: PageType) => void;
}

export default function NewPageMenu({ close, onClick }: Props) {
  const handleOnClick = (type: PageType) => {
    onClick(type);
    close();
  };

  return (
    <div className="w-[240px] text-[#1A1A1A]">
      <h4 className="border-b-[0.5px] border-[#E1E1E1] p-3 text-left text-[16px] font-medium">
        Add New Page
      </h4>
      <ul className="flex flex-col items-start gap-3.5 p-3 text-left text-[14px] font-normal">
        <li
          className="flex w-full cursor-pointer gap-1.5"
          onClick={() => handleOnClick("Info")}
        >
          <CircleInfoIcon color="#9DA4B2" />
          Info
        </li>
        <li
          className="flex w-full cursor-pointer gap-1.5"
          onClick={() => handleOnClick("Details")}
        >
          <DocumentIcon color="#9DA4B2" />
          Details
        </li>
        <li
          className="flex w-full cursor-pointer gap-1.5"
          onClick={() => handleOnClick("Other")}
        >
          <DocumentIcon color="#9DA4B2" />
          Other
        </li>
        <li
          className="flex w-full cursor-pointer gap-1.5"
          onClick={() => handleOnClick("Ending")}
        >
          <CircleCheckIcon color="#9DA4B2" />
          Ending
        </li>
      </ul>
    </div>
  );
}
