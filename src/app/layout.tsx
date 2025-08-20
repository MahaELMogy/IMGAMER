import "./globals.css";
import Navbar from "./_componants/navbar/navbar";
import Footer from "./_componants/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Games</title>
      </head>
      <body className="bg-[#363333]">
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
