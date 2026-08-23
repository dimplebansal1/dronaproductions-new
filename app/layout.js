import { Baloo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QueryWidget from "@/components/QueryWidget";
import { COMPANY } from "@/lib/data";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://www.dronaproductions.in"),
  title: {
    default: "Drona Productions — Complete Event Management & Production",
    template: "%s · Drona Productions",
  },
  description:
    "Drona Productions is a complete event management & production company in Noida — weddings, government events, concerts, conferences and social events, with in-house production, technical solutions and artist management.",
  keywords: [
    "event management company",
    "event production",
    "wedding planners Noida",
    "concert production",
    "artist management",
    "Drona Productions",
  ],
  openGraph: {
    title: "Drona Productions — Complete Event Management & Production",
    description:
      "Premium, cinematic events from concept to execution. Management, production and artist management under one roof.",
    url: "https://www.dronaproductions.in",
    siteName: COMPANY.name,
    type: "website",
  },
  icons: { icon: "/images/Drona_png.png" },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-fog">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <QueryWidget />
      </body>
    </html>
  );
}
