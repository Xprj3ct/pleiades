import "./globals.css";

// import cursor context provider
import CursorProvider from "@/components/CursorContext";

export const metadata = {
  title: "Pleiades Inc",
  description: "Pleiades Technologies Inc is an AI Software research and development company based in Nigeria. It specializes in creating innovative AI solutions that cater to various industries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorProvider>
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
