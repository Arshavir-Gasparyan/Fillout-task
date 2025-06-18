"use client";

import React from "react";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortablePageItem from "./SortablePageItem";
import { Page, PageType } from "@/app/_lib/types/pages";

interface Props {
  pages: Page[];
  activePageIndex: number;
  onSetActivePageIndex: (index: number) => void;
  onPageAdd: (type: PageType, index: number) => void;
  onPageDelete: (index: number) => void;
  onPageDuplicate: (index: number) => void;
  onPageRename: (value: string, id: string) => void;
}

export default function SortablePageList({
  pages,
  activePageIndex,
  onSetActivePageIndex,
  onPageAdd,
  onPageDelete,
  onPageDuplicate,
  onPageRename,
}: Props) {
  return (
    <SortableContext
      items={pages.map((p) => p.id)}
      strategy={horizontalListSortingStrategy}
    >
      <div className="flex items-center bg-[linear-gradient(to_right,_#c0c0c0_50%,_transparent_50%)] bg-[length:5px_1.5px] bg-center bg-repeat-x">
        {pages.map((page, index) => (
          <SortablePageItem
            key={page.id}
            page={page}
            index={index}
            activePageIndex={activePageIndex}
            onSetActivePageIndex={onSetActivePageIndex}
            onPageAdd={onPageAdd}
            onPageDelete={onPageDelete}
            onPageDuplicate={onPageDuplicate}
            onPageRename={onPageRename}
            lastIndex={pages.length - 1}
          />
        ))}
      </div>
    </SortableContext>
  );
}
