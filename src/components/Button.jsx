export default function Button({
  ariaLabel,
  ariaPressed,
  onClick,
  children,
  className,
}) {
  return (
    <button
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
