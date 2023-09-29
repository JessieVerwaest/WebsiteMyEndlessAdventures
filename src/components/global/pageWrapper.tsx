import { Footer } from "./footer";
import { Header } from "./header";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div> {children}</div>
      <Footer />
    </div>
  );
}
