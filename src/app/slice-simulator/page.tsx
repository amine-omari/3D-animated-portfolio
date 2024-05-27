"use client";

import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "../../slices";

export default function SliceSimulatorPage() {
  return (
    <div>
      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SWGZZD8PXW"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SWGZZD8PXW');
          `,
        }}
      />
      <SliceSimulator
        sliceZone={(props) => <SliceZone {...props} components={components} />}
      />
    </div>
  );
}
