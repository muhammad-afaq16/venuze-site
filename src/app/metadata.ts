import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Venuze | Find the Perfect Venue for Your Event",
    description:
        "Discover exceptional venues and trusted event vendors for weddings, parties, corporate meetings, productions, and more. Find, compare, and book the perfect space for your event.",

    keywords: [
        "event venues",
        "venue booking",
        "event spaces",
        "party venues",
        "wedding venues",
        "corporate meeting venues",
        "event vendors",
        "venue marketplace",
        "Venuze",
    ],

    authors: [{ name: "Venuze" }],
    creator: "Venuze",
    publisher: "Venuze",

    metadataBase: new URL("https://venuze.com"),

    openGraph: {
        title: "Venuze | Find the Perfect Venue for Your Event",
        description:
            "Discover exceptional venues and trusted event vendors. Find, compare, and book the perfect venue for your next event.",
        siteName: "Venuze",
        type: "website",
        locale: "en_US",
        url: "https://venuze.com",
    },

    twitter: {
        card: "summary_large_image",
        title: "Venuze | Find the Perfect Venue for Your Event",
        description:
            "Discover exceptional venues and trusted event vendors for your next event.",
    },

    robots: {
        index: true,
        follow: true,
    },

    icons: {
        icon: "/favicon.ico",
    },
};