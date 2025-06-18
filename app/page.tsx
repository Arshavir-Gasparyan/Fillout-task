"use client";

import FormContainer from "./components/FormContainer";
import Navigation from "./components/Navigation";
import usePages from "./hooks/usePages";

export default function Home() {
  const {
    pages,
    updatePages,
    addPage,
    deletePage,
    duplicatePage,
    renamePage,
    activePageIndex,
    setActivePageIndex,
  } = usePages();

  return (
    <div className="h-dvh w-screen overflow-hidden p-6">
      <div className="h-full max-w-full">
        <FormContainer
          pages={pages}
          activePageIndex={activePageIndex}
          onSetActivePageIndex={setActivePageIndex}
        />
        <Navigation
          activePageIndex={activePageIndex}
          pages={pages}
          updatePages={updatePages}
          onSetActivePageIndex={setActivePageIndex}
          onPageAdd={addPage}
          onPageDelete={deletePage}
          onPageDuplicate={duplicatePage}
          onPageRename={renamePage}
        />
      </div>
    </div>
  );
}
