export interface SiteSettings {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  siteName: string;
  ddd: string;
  selosDark: boolean;
  phoneNumber: string;
  whatsappApi: string;
  whatsappNumber: string;
  email: string;
  emailDestinatario: string;
  openGraph: {
    url: string;
    title: string;
    description: string;
    images: [
      {
        url: string;
        width: number;
        height: number;
        alt: string;
      }
    ];
    siteName: string;
    locale: string;
    region: string;
  };
  robots: string;
}
