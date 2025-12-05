import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Alejandro De La Mora | AI Solutions Architect",
  description:
    "AI & Automation leader specializing in agentic workflows, Salesforce, and cloud-scale integrations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div className="bg-playscape" aria-hidden />
        <div className="bg-bubbles" aria-hidden />
        {children}
      </body>
    </html>
  );
}
