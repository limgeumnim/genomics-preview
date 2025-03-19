import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Test App",
  description: "A static Next.js export test with Tailwind CSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
