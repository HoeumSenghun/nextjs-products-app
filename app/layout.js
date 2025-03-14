
import "@/styles/globals.css";
import Product from "./product/page";
import MainNavbar from "@/components/main-Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Product/>
        {children}
      </body>
    </html>
  );
}
