'use client'
import { memo, useCallback } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
interface NavigationTabProps {
  path: string;
  label: string;
  onClick: () => void;
  className?: string;
}

export const NavigationTab = memo(function NavigationTab({
  path,
  label,
  onClick,
  className,
}: NavigationTabProps) {
  const pathname = usePathname();

  const isActive = useCallback(
    (path: string) => pathname.includes(path),
    [pathname]
  );

  const active = isActive(path);

  return (
    <button
      type="button"
      className={clsx("font-medium ",
        className
      )}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      aria-label={`Navigate to ${label}`}
    >
      {label}
    </button>
  );
});

export default NavigationTab; 