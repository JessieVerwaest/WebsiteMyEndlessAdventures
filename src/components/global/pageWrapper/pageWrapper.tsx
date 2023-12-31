import { Footer } from "./footer";
import { Header } from "./header";
import { HomeBody } from "./homeBody";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div> {children}</div>
      <Footer />
    </div>
  );
}
