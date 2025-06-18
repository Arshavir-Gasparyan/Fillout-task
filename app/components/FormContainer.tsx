import { Page } from "../types/page";
import StepCard from "./StepCard";

interface Props {
  pages: Page[];
  activePageIndex: number;
  onSetActivePageIndex: (index: number) => void;
}

export default function FormContainer({
  pages,
  activePageIndex,
  onSetActivePageIndex,
}: Props) {
  return (
    <div
      className={"flex h-11/12 items-center justify-center rounded-xl bg-black"}
    >
      <StepCard
        title={pages[activePageIndex].title}
        description={pages[activePageIndex].description}
        step={activePageIndex + 1}
        totalSteps={pages.length}
        onNext={() => {
          if (activePageIndex < pages.length)
            onSetActivePageIndex(activePageIndex + 1);
        }}
        onPrevious={() => {
          if (activePageIndex > 0) onSetActivePageIndex(activePageIndex - 1);
        }}
      />
    </div>
  );
}
