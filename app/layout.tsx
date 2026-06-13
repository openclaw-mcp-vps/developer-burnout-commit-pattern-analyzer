import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BurnoutRadar – Detect Developer Burnout from Commit Patterns",
  description: "Analyze Git commit patterns, code quality metrics, and work hours to identify early burnout signals and suggest interventions for your engineering team."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a2a1d37c-8148-48a5-9d55-515724ddffaa"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
