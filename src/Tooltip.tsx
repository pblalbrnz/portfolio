import { ReactNode } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface TooltipProps {
  text: string;
  children: ReactNode;
  direction: "up" | "down";
  link?: boolean;
}

export function Tooltip(props: TooltipProps) {
  let direction;
  if (props.direction == "up") direction = "bottom-[125%]";
  if (props.direction == "down") direction = "top-[125%]";

  return (
    <>
      <div className="relative flex items-center justify-center text-center group/tooltip">
        {props.children}
        <span
          className={twMerge(
            "absolute flex gap-2 invisible items-center text-center text-xs px-2 text-nowrap py-1.5 border border-purple-500 bg-neutral-700 text-purple-400 rounded z-[1] opacity-0 transition-opacity ease-linear group-hover/tooltip:visible group-hover/tooltip:opacity-100",
            direction
          )}
        >
          {props.text}
          {props.link == true && <FaExternalLinkSquareAlt />}
        </span>
      </div>
    </>
  );
}
