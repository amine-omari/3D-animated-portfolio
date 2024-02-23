import { Content } from "@prismicio/client";
import React from "react";

type ContentListProps = {
  items: Content.BlogPostDocument[] | Content.ProjectDocument[];
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
