import { Content } from "@prismicio/client";
import React from "react";

type ContentListProps = {
  items: Content.BlogPostDocument[] | Content.ProjectDocument[];
  ContentType: Content.ContentIndexSlice["primary"]["content_type"];
  fallbackItemImage: Content.ContentIndexSlice["primary"]["fallback_item_image"];
  viewMoreText: Content.ContentIndexSlice["primary"]["view_more_text"]
};

export default function ContentList() {
  return (
    <div>
      <ul>
        <li>
          <a href="">
            <div></div>
          </a>
        </li>
      </ul>
    </div>
  );
}
