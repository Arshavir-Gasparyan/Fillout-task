interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isActive?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    startIcon,
    endIcon,
    children,
    isActive,
    className = "",
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      className={`group flex h-8 cursor-pointer items-center gap-1.5 rounded-[8px] text-nowrap ${
        isActive ? "bg-white" : "bg-[#EFF2F3]"
      } px-2.5 py-1 text-[14px] font-medium tracking-[-1.5%] text-[#677289] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.02)] hover:bg-[#DCE1E8] focus:border-[0.5px] focus:border-[#2F72E2] focus:bg-white ${className}`}
    >
      {startIcon && (
        <span className={`${isActive ? "text-[#F59D0E]" : "text-[#677289]"}`}>
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && endIcon}
    </button>
  );
}
