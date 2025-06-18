import { Page } from "../_lib/types/pages";
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
  const aciveIndex =
    pages.length === activePageIndex ? activePageIndex - 1 : activePageIndex;
  return (
    <div
      className={"flex h-11/12 items-center justify-center rounded-xl bg-black"}
    >
      <StepCard
        title={pages[aciveIndex].title}
        description={pages[aciveIndex].description}
        step={aciveIndex + 1}
        totalSteps={pages.length}
        onNext={() => {
          if (aciveIndex < pages.length) onSetActivePageIndex(aciveIndex + 1);
        }}
        onPrevious={() => {
          if (aciveIndex > 0) onSetActivePageIndex(aciveIndex - 1);
        }}
      />
    </div>
  );
}
