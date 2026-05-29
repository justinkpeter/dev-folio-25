"use client";

import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

interface BackButtonProps {
  className?: string;
  fallback?: string;
}

export default function BackButton({
  className,
  fallback = "/projects",
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      data-cursor="back"
    >
      <ChevronLeftIcon strokeWidth={3} /> back
    </button>
  );
}
