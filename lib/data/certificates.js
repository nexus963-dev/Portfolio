export const certificates = [
  {
    id: 1,
    title: "Research Internship Completion Certificate",
    issuer: "Motilal Nehru National Institute of Technology Allahabad",
    year: "2026",
    image: "https://res.cloudinary.com/dfdoggzdy/image/upload/v1784047561/MNNIT_CERTIFICATE_ybzor3.jpg",
    credentialUrl: "",
    featured: true
  },
  {
    id: 2,
    title: "NPTEL Elite Certification - Machine Learning",
    issuer: "IIT Madras",
    year: "2025",
    image: "https://res.cloudinary.com/dfdoggzdy/image/upload/v1784048890/Screenshot_2026-07-14_223648_ibmiss.png",
    credentialUrl: "",
    featured: true
  },
  {
    id: 3,
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google",
    year: "2025",
    image: "https://res.cloudinary.com/dfdoggzdy/image/upload/v1784048972/Screenshot_2026-07-14_223927_eief7r.png",
    credentialUrl: "",
    featured: false
  },
  {
    id: 4,
    title: "HackerRank Gold Badges - Java, Python and C++",
    issuer: "HackerRank",
    year: "2025",
    image: "https://res.cloudinary.com/djozpdgv1/image/upload/f_auto,q_auto,w_800/v1770473930/Programming_in_Java_qtmx1u.png",
    credentialUrl: "",
    featured: false
  }
];

export const getFeaturedCertificates = () => certificates.filter(c => c.featured);
export const getOtherCertificates = () => certificates.filter(c => !c.featured);