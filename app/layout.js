import { Baloo_2 } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Drona Productions | Complete Event Management & Production",
  description: "Drona Productions is a premium event management and production company specializing in Sound, Light, Stage, Artist Management, Weddings, Concerts, and Government Events.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-fog">
        {children}
      </body>
    </html>
  );
}
