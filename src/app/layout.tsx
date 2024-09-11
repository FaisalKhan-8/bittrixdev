import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "BitTriX | Custom Web Development & Digital Solutions for Your Business",
  description:
    "BitTriX offers professional web development, digital marketing, and SEO services tailored to help businesses grow online. Get innovative web solutions to enhance your digital presence today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description as string} />
        <meta
          name="keywords"
          content="Web Development, Digital Solutions, SEO Services, BitTriX, Business Growth, Custom Websites"
        />
        <meta name="author" content="BitTriX" />

        {/* Open Graph (OG) for social media */}
        <meta property="og:title" content={metadata.title as string} />
        <meta
          property="og:description"
          content={metadata.description as string}
        />
        <meta property="og:url" content="https://www.bittrixdev.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/bittrix-og-image.png" />

        {/* Twitter Card for social sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title as string} />
        <meta
          name="twitter:description"
          content={metadata.description as string}
        />
        <meta
          name="twitter:image"
          content="/images/bittrix-twitter-image.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.bittrixdev.com/" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BitTriX",
              url: "https://www.bittrixdev.com",
              logo: "/assets/Logo.svg",
              sameAs: [
                "https://www.facebook.com/bittrixdev",
                "https://www.twitter.com/bittrixdev",
                "https://www.linkedin.com/company/bittrixdev",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 8976119103",
                contactType: "Customer Service",
                areaServed: "IND",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
