import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import {
  ClerkProvider,
  RedirectToSignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ai Image Editor",
  description: "AI-Powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <SignedOut>
            <RedirectToSignUp />
          </SignedOut>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
