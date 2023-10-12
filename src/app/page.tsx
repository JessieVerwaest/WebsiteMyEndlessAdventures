"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { PageWrapper } from "@/components/global/pageWrapper/pageWrapper";
import { HomeBody } from "@/components/home/homeBody";

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <HomeBody />
      </main>
    </PageWrapper>
  );
}
