import "./globals.css";
import TopBar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/footer/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}