export const portfolioItems = [
  {
    id: "premium-garage-doors",
    title: "Premium Garage Doors",
    client: "Premium Garage Doors",
    country: "Australia 🇦🇺",
    industry: "Manufacturing & Installation",
    category: "Full-scale website + local SEO",
    image: "/portfolio_garage.png",
    ctaText: "Book a discovery call",
    ctaHref: "/contact",
    overview: "Rebuilt the custom web platform and restructured local search indexes to capture residential garage installation traffic across Victoria.",
    challenge: "The client was losing significant local market share to competitors with faster, more optimized web presences. Their existing site had severe technical debt, poor local SEO signals, and an unoptimized lead capture flow that resulted in high bounce rates.",
    solution: "We engineered a lightning-fast React platform integrated with a headless CMS. We implemented a programmatic local SEO strategy, generating highly optimized service-area pages, and redesigned the conversion funnel to frictionlessly capture quote requests.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Framer Motion"],
    resultsList: [
      { metric: "+142%", label: "Local Search Traffic" },
      { metric: "3.2x", label: "Increase in Lead Volume" },
      { metric: "0.8s", label: "Average Page Load Time" }
    ]
  },
  {
    id: "dhaage-sarees",
    title: "Dhaage Sarees",
    client: "Dhaage",
    country: "India 🇮🇳",
    industry: "High-End E-Commerce",
    category: "Conversion-led storefront",
    image: "/portfolio_sarees.png",
    ctaText: "See the growth strategy",
    ctaHref: "/contact",
    overview: "Developed a modern Shopify storefront and automated abandoned cart pipelines, combined with targeted search and paid social advertising.",
    challenge: "Dhaage needed to transition from a local boutique to a national e-commerce brand. Their primary challenge was a low conversion rate on high-ticket items and an inability to accurately track ROAS across fragmented social media campaigns.",
    solution: "We deployed a bespoke Shopify architecture optimized for visual storytelling and mobile conversions. We integrated the Meta Conversions API for precise tracking and built automated retention pipelines to recover high-value abandoned carts.",
    techStack: ["Shopify Plus", "Liquid", "Tailwind CSS", "Meta CAPI", "Klaviyo"],
    resultsList: [
      { metric: "4.8x", label: "Average ROAS" },
      { metric: "+65%", label: "Add-to-Cart Rate" },
      { metric: "18%", label: "Cart Recovery Rate" }
    ]
  },
  {
    id: "city-security-services",
    title: "City Security Services",
    client: "City Security",
    country: "Canada 🇨🇦",
    industry: "Corporate Security",
    category: "Enterprise credibility platform",
    image: "/portfolio_city_security.png",
    ctaText: "Discuss your project",
    ctaHref: "/contact",
    overview: "Developed a secure corporate web presence for city security operations, optimizing local search visibility for corporate security bids.",
    challenge: "The firm needed to bid on multi-million dollar corporate and municipal security contracts, but their digital presence looked outdated and untrustworthy, lacking the enterprise-grade authority required to win large bids.",
    solution: "We designed a highly authoritative, brutalist yet premium corporate website. We built secure client portals for document handling and implemented an aggressive B2B SEO strategy targeting high-intent procurement keywords.",
    techStack: ["React", "Express", "AWS", "MongoDB", "Auth0"],
    resultsList: [
      { metric: "Page 1", label: "Rankings for B2B Keywords" },
      { metric: "$2.4M", label: "Pipeline Value Generated" },
      { metric: "+85%", label: "Dwell Time on Capabilities" }
    ]
  },
  {
    id: "instant-parcel-taxi",
    title: "Instant Parcel Taxi",
    client: "IPT Logistics",
    country: "United Kingdom 🇬🇧",
    industry: "Logistics & Transport",
    category: "Booking experience + paid acquisition",
    image: "/client_preview_3.png",
    ctaText: "Start your rollout",
    ctaHref: "/contact",
    overview: "Custom web app dashboard with rapid address auto-complete and Google Ads retargeting setups to maximize courier bookings.",
    challenge: "High customer acquisition costs were eroding profit margins. The booking process was cumbersome, causing users to abandon the funnel halfway through when trying to book urgent parcel deliveries.",
    solution: "We engineered a frictionless, single-page booking engine with predictive address mapping. Simultaneously, we restructured their Google Ads campaigns, focusing on hyper-local, high-intent search terms and aggressive CPA capping.",
    techStack: ["Vue.js", "Google Maps API", "Firebase", "Stripe", "Google Ads API"],
    resultsList: [
      { metric: "-34%", label: "Reduction in CPA" },
      { metric: "2.5x", label: "Conversion Rate Uplift" },
      { metric: "< 60s", label: "Average Booking Time" }
    ]
  }
];
