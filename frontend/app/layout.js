import "./globals.css";
import Script from "next/script";

const GA_ID = "G-GVEP10RL3Q";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mrelectricmobility.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mr Electric Mobility — Authorised Sokudo Electric Distributor",
    template: "%s — Mr Electric Mobility",
  },
  description:
    "Mr Electric Mobility is an authorised distributor of Sokudo Electric India in Delhi NCR. See the full range of Sokudo electric scooters — specs, prices and test rides.",
  keywords: [
    "electric scooter",
    "electric scooter Delhi NCR",
    "Mr Electric Mobility",
    "EV distributor Delhi NCR",
    "electric scooter price",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Mr Electric Mobility",
    title: "Mr Electric Mobility — Authorised Sokudo Electric Distributor",
    description:
      "Authorised distributor of Sokudo Electric India in Delhi NCR. Explore the full range of electric scooters — specs, prices and test rides.",
    url: SITE_URL,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Electric Mobility — Authorised Sokudo Electric Distributor",
    description:
      "Authorised distributor of Sokudo Electric India in Delhi NCR. Explore the full range of electric scooters — specs, prices and test rides.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "6ln8hNcazBefS3zMpr30IZIbInqRAoojSyR9vRFin68",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
