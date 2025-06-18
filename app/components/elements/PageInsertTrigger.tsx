import React, { useState } from "react";
import PlusIcon from "../../icons/PlusIcon";
import { PageType } from "../../_lib/types/pages";
import NewPageMenu from "../menu/NewPageMenu";
import PopperMenu from "./PopperMenu";

interface Props {
  onPageAdd: (type: PageType) => void;
}

export default function PageInsertTrigger({ onPageAdd }: Props) {
  const [hovered, setHovered] = useState(false);
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const handleOnClick = (type: PageType) => {
    onPageAdd(type);
  };

  const showPlus = hovered || isPopperOpen;

  return (
    <div
      className="relative flex h-8 items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        if (!isPopperOpen) setHovered(false);
      }}
    >
      <div
        className={`transition-all duration-300 ${
          showPlus ? "w-[56px]" : "w-[20px]"
        }`}
      />
      <div
        className={`absolute transition-opacity duration-300 ${
          showPlus ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <PopperMenu
          icon={
            <button className="flex cursor-pointer items-center justify-center rounded-full border border-[#E1E1E1] bg-white p-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.02)]">
              <PlusIcon />
            </button>
          }
          onOpen={() => setIsPopperOpen(true)}
          onClose={() => {
            setIsPopperOpen(false);
            setHovered(false);
          }}
        >
          {(close) => (
            <NewPageMenu
              close={() => {
                close();
                setIsPopperOpen(false);
                setHovered(false);
              }}
              onClick={handleOnClick}
            />
          )}
        </PopperMenu>
      </div>
    </div>
  );
}
