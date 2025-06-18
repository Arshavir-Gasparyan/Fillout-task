"use client";

import {
  useState,
  useRef,
  cloneElement,
  ReactElement,
  ReactNode,
  MouseEvent,
  useCallback,
} from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

interface Props {
  icon: ReactElement<any>;
  className?: string;
  placement?: "top" | "bottom" | "left" | "right";
  children: ReactNode | ((close: () => void) => ReactNode);
  onOpen?: () => void;
  onClose?: () => void;
}

const positionClasses = {
  top: "bottom-full mb-4 left-0",
  bottom: "top-full mt-4 left-0",
  left: "right-full mr-4 top-0",
  right: "left-full ml-4 top-0",
};

export default function PopperMenu({
  icon,
  className = "",
  placement = "top",
  children,
  onOpen,
  onClose,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);

  const openMenu = useCallback(() => {
    setIsOpen(true);
    onOpen?.();
  }, [onOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const toggleMenu = (event: MouseEvent) => {
    event.stopPropagation();
    isOpen ? closeMenu() : openMenu();
  };

  useOutsideClick(ref, closeMenu);

  return (
    <div ref={ref}>
      {cloneElement(icon, { onClick: toggleMenu })}

      {isOpen && (
        <div
          className={`absolute z-50 rounded-xl border border-[#E1E1E1] bg-white shadow-md transition-opacity duration-200 ${positionClasses[placement]} ${className}`}
        >
          {typeof children === "function" ? children(closeMenu) : children}
        </div>
      )}
    </div>
  );
}
