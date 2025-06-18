import CircleCheckIcon from "../icons/CircleCheckIcon";
import CircleInfoIcon from "../icons/CircleInfoIcon";
import DocumentIcon from "../icons/DocumentIcon";
import MoreIcon from "../icons/MoreIcon";
import { Page, PageType } from "../types/page";

export const pagesMap: Record<PageType, Page> = {
  ["Info"]: {
    id: "",
    title: "Info",
    description:
      "General overview or introductory information about this section.",
    type: "Info",
    startIcon: <CircleInfoIcon />,
    endIcon: <MoreIcon />,
  },
  ["Details"]: {
    id: "",
    title: "Details",
    description:
      "Specific information, fields, or data relevant to the current topic.",
    type: "Details",
    startIcon: <DocumentIcon />,
    endIcon: <MoreIcon />,
  },
  ["Other"]: {
    id: "",
    title: "Other",
    description:
      "Additional or miscellaneous content not covered in other sections.",
    type: "Other",
    startIcon: <DocumentIcon />,
    endIcon: <MoreIcon />,
  },
  ["Ending"]: {
    id: "",
    title: "Ending",
    description:
      "Final section to summarize, confirm, or submit the entered information.",
    type: "Ending",
    startIcon: <CircleCheckIcon />,
    endIcon: <MoreIcon />,
  },
};
