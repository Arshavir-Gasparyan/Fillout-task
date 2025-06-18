"use client";

import React, { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";

import PlusIcon from "../icons/PlusIcon";
import Button from "./elements/Button";
import SortablePageList from "./sortable/SortablePageList";
import PopperMenu from "./elements/PopperMenu";
import NewPageMenu from "./menu/NewPageMenu";
import { Page, PageType } from "../types/page";

interface Props {
  pages: Page[];
  activePageIndex: number;
  updatePages: (value: Page[]) => void;
  onPageAdd: (type: PageType, index?: number) => void;
  onPageDelete: (index: number) => void;
  onPageDuplicate: (index: number) => void;
  onPageRename: (value: string, id: string) => void;
  onSetActivePageIndex: (index: number) => void;
}

export default function Navigation({
  pages,
  activePageIndex,
  updatePages,
  onSetActivePageIndex,
  onPageAdd,
  onPageDelete,
  onPageDuplicate,
  onPageRename,
}: Props) {
  const [isClient, setIsClient] = useState(false);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!active || !over || active.id === over.id) return;

    const oldIndex = pages.findIndex((p) => p.id === active.id);
    const newIndex = pages.findIndex((p) => p.id === over.id);
    if (oldIndex !== -1 && newIndex !== -1) {
      const reordered = arrayMove(pages, oldIndex, newIndex);
      updatePages(reordered);
      onSetActivePageIndex(newIndex);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="mt-6 flex items-center">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToHorizontalAxis]}
      >
        <SortablePageList
          pages={pages}
          activePageIndex={activePageIndex}
          onSetActivePageIndex={onSetActivePageIndex}
          onPageAdd={onPageAdd}
          onPageDelete={onPageDelete}
          onPageDuplicate={onPageDuplicate}
          onPageRename={onPageRename}
        />
      </DndContext>

      <div className="relative left-5">
        <PopperMenu
          icon={
            <Button
              isActive={true}
              startIcon={<PlusIcon width={16} height={16} />}
            >
              Add Page
            </Button>
          }
        >
          {(close) => (
            <NewPageMenu
              close={() => close()}
              onClick={(type) => {
                onPageAdd(type);
                onSetActivePageIndex(pages.length);
              }}
            />
          )}
        </PopperMenu>
      </div>
    </div>
  );
}
