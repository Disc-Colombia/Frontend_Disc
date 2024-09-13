import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8
} from './index.tsx';

export interface PartnerInfo {
    src: string;
    alt: string;
    link: string;
}

export const partnerImages: PartnerInfo[] = [
    { src: partner1 as string, alt: "Google Partner", link: "https://ads.google.com/intl/es-419_co/home/partners/become-a-partner/" },
    { src: partner2 as string, alt: "Microsoft Partner", link: "https://partner.microsoft.com/es-es/partnership" },
    { src: partner3 as string, alt: "INGRAM", link: "https://www.linkedin.com/company/ingram-micro-colombia/?originalSubdomain=co" },
    { src: partner4 as string, alt: "IBM", link: "https://www.ibm.com/es-es/partnerplus" },
    { src: partner5 as string, alt: "DELL", link: "https://www.delltechnologies.com/partner/en-us/partner/find-a-partner.htm" },
    { src: partner6 as string, alt: "AWS", link: "https://aws.amazon.com/es/partners/" },
    { src: partner7 as string, alt: "ADOBE", link: "https://www.adobe.com/partners/partnerfinders.html" },
    { src: partner8 as string, alt: "SAP", link: "https://www.sap.com/index.html" },
];
