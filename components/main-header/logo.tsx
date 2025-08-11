'use client'
import { memo } from "react";
import Image from "next/image";
import clsx from "clsx";

interface LogoProps {
  className?: string;
}

export const Logo = memo(function Logo({ className }: LogoProps) {
  return (
    <Image src="/images/AZbot.png" alt="Logo" width={105} height={45}
      className={clsx("w-[80px] md:w-[105px] h-[30px] md:h-[45px] object-contain", className)} />
  );
});

export default Logo; 