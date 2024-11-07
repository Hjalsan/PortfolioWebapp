import localFont from "next/font/local";
import "./globals.css";

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/

const montserrat = localFont({
  src: "./fonts/MontserratVariableFont.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
  style: "normal",
})


export const metadata = {
  title: "Hjalmar Graphics",
  description: "Hjalmar Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
