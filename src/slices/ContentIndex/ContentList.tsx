"use client";

import { Content, asImageSrc, isFilled } from "@prismicio/client";
import { gsap } from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

type ContentListProps = {
  items: Content.BlogPostDocument[] | Content.ProjectDocument[];
  contentType: Content.ContentIndexSlice["primary"]["content_type"];
  fallbackItemImage: Content.ContentIndexSlice["primary"]["fallback_item_image"];
  viewMoreText: Content.ContentIndexSlice["primary"]["view_more_text"];
};

export default function ContentList({
  items,
  contentType,
  fallbackItemImage,
  viewMoreText,
}: ContentListProps) {
  const component = useRef(null);
  const revealRef = useRef(null);
  const itemsRef = useRef(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);

  const lastMousePos = useRef({ x: 0, y: 0 });

  const urlPrefixes = contentType === "Blog" ? "/Blog" : "/project";

  useEffect(() => {
    let ctx = gsap.context(() => {});
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };

      // calculate speed and direction
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 110),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.2,
            opacity: 1,
          });
        }
        lastMousePos.current = mousePos;
        return () => ctx.revert();
      }, component);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentItem]);

  const contentImages = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ].map((item) => {
    const image = isFilled.image(item.data.hover_image)
      ? item.data.hover_image
      : fallbackItemImage;

    return asImageSrc(image, {
      fit: "crop",
      w: 220,
      h: 320,
      exp: -10,
    });
  });

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
  };

  const onMouseLeave = () => {
    setCurrentItem(null);
  };

  return (
    <div ref={component}>
      <ul
        className="grid border-b border-b-slate-100"
        onMouseLeave={onMouseLeave}
      >
        {[...items, ...items, ...items, ...items, ...items, ...items].map(
          (item, index) => (
            <>
              {isFilled.keyText(item.data.title) && (
                <li
                  key={index}
                  onMouseEnter={() => onMouseEnter(index)}
                  className="list-item opacity-0f"
                >
                  <Link
                    href={urlPrefixes + "/" + item.uid}
                    className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
                    aria-label={item.data.title}
                  >
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold">
                        {item.data.title}
                      </span>
                      <div className="flex gap-3 text-yellow-400 text-lg font-bold">
                        {item.tags.map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <span className="ml-auto flex items-center gap-2 font-medium text-xl md:ml-0">
                      {viewMoreText} <MdArrowOutward />
                    </span>
                  </Link>
                </li>
              )}
            </>
          )
        )}
      </ul>

      {/* Hover Element */}
      <div
        className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
        style={{
          backgroundImage:
            currentItem !== null ? `url(${contentImages[currentItem]})` : "",
        }}
        ref={revealRef}
      ></div>
    </div>
  );
}
