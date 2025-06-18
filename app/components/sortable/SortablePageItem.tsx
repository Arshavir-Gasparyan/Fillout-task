"use client";

import React, { useRef, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Button from "../elements/Button";
import PopperMenu from "../elements/PopperMenu";
import SettingsMenu from "../menu/SettingsMenu";
import PageInsertTrigger from "../elements/PageInsertTrigger";
import Modal from "../elements/Modal";
import { Page, PageType } from "@/app/_lib/types/pages";

interface Props {
  page: Page;
  index: number;
  activePageIndex: number;
  lastIndex: number;
  onSetActivePageIndex: (index: number) => void;
  onPageAdd: (type: PageType, index: number) => void;
  onPageDelete: (index: number) => void;
  onPageDuplicate: (index: number) => void;
  onPageRename: (value: string, id: string) => void;
}

export default function SortablePageItem({
  page,
  index,
  activePageIndex,
  lastIndex,
  onSetActivePageIndex,
  onPageAdd,
  onPageDelete,
  onPageDuplicate,
  onPageRename,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: page.id });

  const itemRef = useRef<HTMLDivElement>(null);

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    zIndex: isDragging ? 50 : "auto",
  };

  const handleSubmit = (value: string) => {
    if (!value) {
      setIsModalOpen(false);
      return;
    }

    onPageRename(value, page.id);
    setIsModalOpen(false);
  };

  const isActive = activePageIndex === index;

  return (
    <div className="flex items-center">
      <div
        ref={(node) => {
          setNodeRef(node);
          itemRef.current = node;
        }}
        style={style}
        {...attributes}
        {...listeners}
      >
        <Button
          onClick={() => onSetActivePageIndex(index)}
          isActive={isActive}
          startIcon={page.startIcon}
          className="relative"
          endIcon={
            isActive && (
              <PopperMenu icon={page.endIcon}>
                {(close) => (
                  <SettingsMenu
                    close={close}
                    onRename={() => setIsModalOpen(true)}
                    onDuplicate={() => onPageDuplicate(index)}
                    onDelete={() => onPageDelete(index)}
                  />
                )}
              </PopperMenu>
            )
          }
        >
          {page.title}
        </Button>
      </div>
      {index < lastIndex && (
        <PageInsertTrigger onPageAdd={(type) => onPageAdd(type, index + 1)} />
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
