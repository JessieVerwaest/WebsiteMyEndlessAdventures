import { PageWrapper } from "@/components/global/pageWrapper";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { HomeBody } from "@/components/global/homeBody";

export default function Home() {
  return (
    <PageWrapper>
      <main>
      <HomeBody />
      </main>
    </PageWrapper>
  );
}
