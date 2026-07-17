import Footer from "./Footer";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <>
      <TopHeader />

      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}