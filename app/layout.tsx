import type { ReactNode } from "react";

import "hazel-ui/styles.css";
import "hazel-ui/fonts.css";

import "../src/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="dark bg-gradient-to-tr from-slate-1 to-blue-2">
        {children}
      </body>
    </html>
  );
}
