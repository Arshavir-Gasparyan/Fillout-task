import React from "react";
import DeleteIcon from "../../icons/DeleteIcon";
import DuplicateIcon from "../../icons/DuplicateIcon";
import RenameIcon from "../../icons/RenameIcon";

interface Props {
  close: VoidFunction;
  onRename: VoidFunction;
  onDuplicate: VoidFunction;
  onDelete: VoidFunction;
}

export default function SettingsMenu({
  close,
  onRename,
  onDuplicate,
  onDelete,
}: Props) {
  return (
    <div className="w-[240px] text-[#1A1A1A]">
      <h4 className="border-b-[0.5px] border-[#E1E1E1] p-3 text-left text-[16px] font-medium">
        Settings
      </h4>
      <ul className="flex flex-col items-start gap-3.5 p-3 text-left text-[14px] font-normal">
        <li
          className="flex w-full gap-1.5"
          onClick={() => {
            onRename();
            close();
          }}
        >
          <RenameIcon />
          Rename
        </li>
        <li
          className="flex w-full gap-1.5"
          onClick={() => {
            onDuplicate();
            close();
          }}
        >
          <DuplicateIcon />
          Duplicate
        </li>
        <li
          className="flex w-full gap-1.5 border-t-[0.5px] border-[#E1E1E1] pt-3 text-[#EF494F]"
          onClick={() => {
            onDelete();
            close();
          }}
        >
          <DeleteIcon />
          Delete
        </li>
      </ul>
    </div>
  );
}
