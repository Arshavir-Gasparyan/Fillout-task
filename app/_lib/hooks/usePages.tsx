"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CircleCheckIcon from "../../icons/CircleCheckIcon";
import CircleInfoIcon from "../../icons/CircleInfoIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import MoreIcon from "../../icons/MoreIcon";
import { Page, PageType } from "../types/pages";
import { pagesMap } from "../constants/pagesMap";

// Create a default list of initial pages
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

// Utility to generate a new page with a unique ID
const createPageWithId = (type: PageType): Page => ({
  ...pagesMap[type],
  id: uuidv4(),
});

export default function usePages() {
  const [pages, setPages] = useState<Page[]>(initialPages);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const updatePages = (updatedPages: Page[]) => {
    setPages(updatedPages);
  };

  const addPage = (type: PageType, index?: number) => {
    const newPage = createPageWithId(type);
    setPages((prev) => {
      const newPages = [...prev];
      const insertAt = index ?? newPages.length;
      newPages.splice(insertAt, 0, newPage);
      setActivePageIndex(insertAt);
      return newPages;
    });
  };

  const duplicatePage = (index: number) => {
    const duplicatedPage = { ...pages[index], id: uuidv4() };
    setPages((prev) => {
      const newPages = [...prev];
      newPages.splice(index + 1, 0, duplicatedPage);
      setActivePageIndex(index + 1);
      return newPages;
    });
  };

  const renamePage = (newTitle: string, id: string) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id === id ? { ...page, title: newTitle } : page,
      ),
    );
  };

  const deletePage = (index: number) => {
    if (pages.length === 1) return;

    setPages((prev) => {
      const newPages = [...prev];
      newPages.splice(index, 1);

      const newActiveIndex =
        index === 0
          ? 0
          : index >= newPages.length
            ? newPages.length - 1
            : index;

      setActivePageIndex(newActiveIndex);
      return newPages;
    });
  };

  return {
    pages,
    activePageIndex,
    updatePages,
    addPage,
    duplicatePage,
    renamePage,
    deletePage,
    setActivePageIndex,
  };
}
