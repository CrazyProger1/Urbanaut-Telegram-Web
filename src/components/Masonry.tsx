import React, { useEffect, useRef, useState } from "react";
import { masonry } from "@/utils/masonry";

interface Props {
  children: React.ReactNode[];
}

const Masonry = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [orderedChildren, setOrderedChildren] = useState(children);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();

      const widths = Array.from(
        containerRef.current.children,
        (item) => item.getBoundingClientRect().width,
      );

      const indices = masonry(widths, rect.width, 2);

      const reorderedChildren = indices.map((index) => children[index]);
      setOrderedChildren(reorderedChildren);
    }
  }, [children]);

  return (
    <div ref={containerRef} className="flex flex-wrap gap-0.5">
      {orderedChildren}
    </div>
  );
};

export default Masonry;
