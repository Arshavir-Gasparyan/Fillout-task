"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CircleCheckIcon from "../../icons/CircleCheckIcon";
import CircleInfoIcon from "../../icons/CircleInfoIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import MoreIcon from "../../icons/MoreIcon";
import { Page, PageType } from "../types/pages";
import { pagesMap } from "../constants/pagesMap";

const initialPages: Page[] = [
  {
    id: uuidv4(),
    title: "Info",
    description:
      "General overview or introductory information about this section.",
    type: "Info",
    startIcon: <CircleInfoIcon />,
    endIcon: <MoreIcon />,
  },
  {
    id: uuidv4(),
    title: "Details",
    description:
      "Specific information, fields, or data relevant to the current topic.",
    type: "Details",
    startIcon: <DocumentIcon />,
    endIcon: <MoreIcon />,
  },
  {
    id: uuidv4(),
    title: "Other",
    description:
      "Additional or miscellaneous content not covered in other sections.",
    type: "Other",
    startIcon: <DocumentIcon />,
    endIcon: <MoreIcon />,
  },
  {
    id: uuidv4(),
    title: "Ending",
    description:
      "Final section to summarize, confirm, or submit the entered information.",
    type: "Ending",
    startIcon: <CircleCheckIcon />,
    endIcon: <MoreIcon />,
  },
];

export default function usePages() {
  const [pages, setPages] = useState(initialPages);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);

  function updatePages(value: Page[]) {
    setPages(value);
  }

  function addPage(type: PageType, index?: number) {
    const newPage = { ...pagesMap[type], id: uuidv4() };

    setPages((prevPages) => {
      const copy = [...prevPages];
      const insertIndex = index !== undefined ? index : copy.length;

      copy.splice(insertIndex, 0, newPage);

      setActivePageIndex(insertIndex);

      return copy;
    });
  }

  function duplicatePage(index: number) {
    const newPage = { ...pages[index], id: uuidv4() };

    setPages((prevPages) => {
      const copy = [...prevPages];
      const insertIndex = index + 1;

      copy.splice(insertIndex, 0, newPage);

      setActivePageIndex(insertIndex);

      return copy;
    });
  }

  function renamePage(value: string, id: string) {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === id ? { ...page, title: value } : page,
      ),
    );
  }

  function deletePage(index: number) {
    if (pages.length === 1) return;

    setPages((prevPages) => {
      const copy = [...prevPages];
      copy.splice(index, 1);

      const isDeletingFirst = index === 0;
      const isDeletingLast = index === prevPages.length - 1;

      if (isDeletingFirst) {
        setActivePageIndex(0);
      } else if (isDeletingLast) {
        setActivePageIndex(index - 1);
      } else {
        setActivePageIndex(index);
      }

      return copy;
    });
  }

  return {
    pages,
    activePageIndex,
    updatePages,
    addPage,
    deletePage,
    duplicatePage,
    renamePage,
    setActivePageIndex,
  };
}
