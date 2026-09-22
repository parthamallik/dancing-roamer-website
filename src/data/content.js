// Central copy + content data for the Dancing Roamer site.
// Pulled from the Dancing Roamer brand deck (Sept 2025) plus original
// copywriting for the Behind-the-Scenes service, which the deck only
// touched on briefly.

import heroGrandStage from "../assets/images/hero-grand-stage.jpg";
import heroCoupleStage from "../assets/images/hero-couple-stage.jpg";
import heroGroomsmenGarland from "../assets/images/hero-groomsmen-garland.jpg";
import galleryBaraat from "../assets/images/gallery-baraat-qawwali.jpg";
import galleryDuoStage from "../assets/images/gallery-duo-stage-dance.jpg";
import galleryBallroom from "../assets/images/gallery-couple-ballroom.jpg";
import galleryBridesmaids from "../assets/images/gallery-bridesmaids-group.jpg";
import gallerySelfie from "../assets/images/gallery-selfie-group.jpg";
import galleryMehendi from "../assets/images/gallery-mehendi-laughter.jpg";
import galleryDisco from "../assets/images/gallery-disco-dance.jpg";
import servicesTroupeGold from "../assets/images/services-troupe-gold.jpg";
import founderPortrait from "../assets/images/founder-smitarani.jpg";

import achOdishaTrophy from "../assets/images/ach-odisha-award-trophy.jpg";
import achDandiyaOrganizer from "../assets/images/ach-dandiya-best-organizer.jpg";
import achRangiloRaas from "../assets/images/ach-rangilo-raas.jpg";
import achBaliyatra from "../assets/images/ach-baliyatra.jpg";

import portfolioDandiyaPressmeet from "../assets/images/portfolio-dandiya-pressmeet.jpg";
import portfolioMadadCharity from "../assets/images/portfolio-madad-charity.jpg";
import portfolioRangiloDecor from "../assets/images/portfolio-rangilo-decor.jpg";
import portfolioRangiloDandiya from "../assets/images/portfolio-rangilo-dandiya.jpg";
import portfolioTimeToShine from "../assets/images/portfolio-timetoshine-salaam.jpg";

import tEliseRohit from "../assets/images/t-elise-rohit.jpg";
import tShrutiGaurav from "../assets/images/t-shruti-gaurav.jpg";
import tBidyutSheetal from "../assets/images/t-bidyut-sheetal.jpg";
import tShivaniMohit from "../assets/images/t-shivani-mohit.jpg";
import tMuditPriyanka from "../assets/images/t-mudit-priyanka.jpg";
import tManishaNitin from "../assets/images/t-manisha-nitin.jpg";
import tShreyaSabya from "../assets/images/t-shreya-sabya.jpg";
import tSambhavSrishti from "../assets/images/t-sambhav-srishti.jpg";
import tNishitaPruthiv from "../assets/images/t-nishita-pruthiv.jpg";

import galleryGroomsmenTrio from "../assets/images/gallery-groomsmen-trio.jpg";
import galleryCouplePurpleDance from "../assets/images/gallery-couple-purple-dance.jpg";
import galleryFriendsCheer1 from "../assets/images/gallery-friends-cheer-1.jpg";
import galleryFriendsCheer2 from "../assets/images/gallery-friends-cheer-2.jpg";
import galleryFriendsCheer3 from "../assets/images/gallery-friends-cheer-3.jpg";
import galleryFriendsCheer4 from "../assets/images/gallery-friends-cheer-4.jpg";

export const site = {
  name: "Dancing Roamer",
  tagline: "Roam World on Dance Beats",
  founderName: "Smitarani Swain",
  city: "Bhubaneswar, Odisha",
  phone: "+91 98610 01708",
  phoneHref: "tel:+919861001708",
  whatsappHref: "https://wa.me/919861001708",
  email: "dancingroamer03@gmail.com",
  instagram: "https://instagram.com/dancing_roamer",
  instagramHandle: "@dancing_roamer",
  facebook: "https://facebook.com/dancingroamer",
  founded: 2022,
};

export const images = {
  heroGrandStage,
  heroCoupleStage,
  heroGroomsmenGarland,
  galleryBaraat,
  galleryDuoStage,
  galleryBallroom,
  galleryBridesmaids,
  gallerySelfie,
  galleryMehendi,
  galleryDisco,
  servicesTroupeGold,
  founderPortrait,
};

export const heroSlides = [
  {
    image: heroGrandStage,
    eyebrow: "Luxury Wedding Choreography",
    heading: "Every step, staged for forever",
    body: "Dancing Roamer designs sangeet and reception choreography for luxury Indian weddings — led personally by Smitarani Swain, from the first rehearsal to the final bow.",
  },
  {
    image: heroCoupleStage,
    eyebrow: "Signature Fusion Form",
    heading: "Two families, one rhythm",
    body: "Odissi grace, Bollywood energy and folk beats woven into choreography built around your story, not a template.",
  },
  {
    image: heroGroomsmenGarland,
    eyebrow: "Behind Every Big Entry",
    heading: "The grand entry, engineered",
    body: "Flash mobs, grande entries and proposal choreography that turn a hundred eyes toward the two of you.",
  },
];

export const stats = [
  { value: "2022", label: "Founded in Odisha" },
  { value: "Odisha Achiever Award", label: "Best Women Choreographer Team, 2023" },
  { value: "Fusion Form", label: "Smitarani's signature choreography style" },
  { value: "2", label: "Flagship festivals produced — Rangilo Raas & Dandiya Carnival" },
];

export const services = [
  {
    slug: "wedding-choreography",
    title: "Luxury Wedding Choreography",
    tagline: "Sangeet, reception & couple dances",
    summary:
      "Personalised choreography for sangeet nights, receptions and every family performance in between — built around your songs, your families and how much (or little) dance experience you're starting with.",
    points: [
      "Couple dances & first-dance choreography",
      "Sangeet performances for family & friend groups",
      "Grande & personalised wedding entries",
      "Flashmobs & proposal choreography",
    ],
    image: heroCoupleStage,
  },
  {
    slug: "behind-the-scenes-films",
    title: "Behind-the-Scenes Films",
    tagline: "The story before the spotlight",
    summary:
      "The sangeet stage is only half the story. We film the part nobody else does — the late-night rehearsals, the nervous laughter before the first steps, a father learning his daughter's dance in secret — and cut it into a short film you'll rewatch as often as the wedding video.",
    points: [
      "Rehearsal Diaries — candid practice footage, edited into a nostalgic highlight reel",
      "Prep-to-Performance Film — the journey from first rehearsal to final bow",
      "Candid Reels & Bloopers — Instagram-ready 30–60s cuts for the group chat",
      "Family Rehearsal Films — parents & grandparents learning steps for the big day",
    ],
    image: galleryMehendi,
    generated: true,
  },
  {
    slug: "entries-and-proposals",
    title: "Grande Entries, Flashmobs & Proposals",
    tagline: "The moment everyone remembers",
    summary:
      "A choreographed entry or a flashmob proposal, timed to the second and rehearsed until it looks effortless — for the couple, the wedding party, or the whole family.",
    points: [
      "Personalised & grande wedding entries",
      "Flashmobs for proposals, anniversaries & sangeets",
      "Lip-dubs and 1-minute reel memories",
      "Virtual choreography for out-of-town wedding parties",
    ],
    image: servicesTroupeGold,
  },
  {
    slug: "family-performances",
    title: "Family & Group Performances",
    tagline: "Everyone gets a moment on stage",
    summary:
      "From the bride's college friends to grandparents who've never danced on a stage before — Smitarani builds routines around each group's comfort level, so every performance lands.",
    points: [
      "Family performances across generations",
      "Friend-group & bridal squad choreography",
      "Customised pre-wedding video choreography",
      "On-site training at the wedding venue",
    ],
    image: heroGroomsmenGarland,
  },
  {
    slug: "training-and-workshops",
    title: "Dance Training & Workshops",
    tagline: "For couples, groups & corporates",
    summary:
      "Beyond weddings, Dancing Roamer runs offline studio classes, live online sessions and city workshops in Odissi, Sambalpuri, Garba, Bollywood, Punjabi and more — plus corporate dance programs for team events.",
    points: [
      "Offline studio & on-site training",
      "Live online sessions with recorded lessons",
      "City workshops & bootcamps",
      "Corporate dance programs & private coaching",
    ],
    image: galleryDuoStage,
  },
];

export const danceStyles = [
  { name: "Odissi", description: "A graceful classical dance with sculpturesque poses and fluid movements." },
  { name: "Sambalpuri", description: "A high-energy folk dance showcasing vibrant costumes and rhythmic beats." },
  { name: "Garba", description: "Garba unites tradition and rhythm in a mesmerising dance form." },
  { name: "Punjabi", description: "An energetic expression of festivity that lights up every occasion." },
  { name: "Bollywood", description: "A fusion of multiple dance styles, widely used in Indian cinema and entertainment." },
  { name: "Fusion Form", description: "Smitarani's signature blend — multiple styles woven into one original choreography." },
];

export const founder = {
  name: "Smitarani Swain",
  role: "Founder & Creative Head, Dancing Roamer",
  portrait: founderPortrait,
  bio: [
    "Smitarani Swain is the heart behind Dancing Roamer — a self-made choreographer whose journey is rooted in passion, dedication and an unshakable love for dance. Hailing from Odisha, she is a National Level Folk Dancer who went on to expand into Bollywood and modern choreography.",
    "Her vision was simple: build a platform where dance isn't just performance, but storytelling. In 2022, she founded Dancing Roamer and turned that vision into a full-fledged choreography practice, developing a signature Fusion Form that blends classical, folk and contemporary styles into choreography built specifically for each couple and family she works with.",
    "From local stages to pan-India recognition, her work reached a proud milestone with the Odisha Achiever Award for Best Women Choreographer Team. Today, as a sole proprietor running Dancing Roamer end-to-end, Smitarani continues to choreograph luxury weddings across India personally — proving that with passion and purpose, dreams do dance their way to success.",
  ],
  highlights: [
    "National Level Folk Dancer, Odisha",
    "Founder & solo proprietor, Dancing Roamer (est. 2022)",
    "Odisha Achiever Award — Best Women Choreographer Team, 2023",
    "Creator of Dancing Roamer's signature \"Fusion Form\" choreography style",
    "Produced Odisha's Rangilo Raas 2024 and Dandiya Carnival 2023 (Best Organizer)",
  ],
};

export const achievements = [
  {
    title: "Odisha Achiever Award 2023",
    detail: "Best Women Choreographer Team — awarded to Dancing Roamer for redefining choreography across Odisha.",
    image: achOdishaTrophy,
  },
  {
    title: "Dandiya Carnival 2023",
    detail: "Best Organizer — one of Odisha's biggest Dandiya celebrations, produced end-to-end by Dancing Roamer.",
    image: achDandiyaOrganizer,
  },
  {
    title: "Rangilo Raas 2024",
    detail: "Odisha's biggest Garba event, from stage design to choreography, curated by the Dancing Roamer team.",
    image: achRangiloRaas,
  },
  {
    title: "Community & charity events",
    detail: "Performances and collaborations with Time to Shine, Madad Charity, and Asia's largest trade fair, Baliyatra.",
    image: achBaliyatra,
  },
];

// Curated case studies for the Portfolio page — distinct from the free-form
// Gallery photo wall: each entry groups a few images under one flagship
// event or body of work, with a short write-up.
export const portfolio = [
  {
    slug: "rangilo-raas-2024",
    title: "Rangilo Raas 2024",
    tag: "Flagship Event",
    description:
      "Odisha's biggest Garba event, produced end-to-end by Dancing Roamer — from the lantern-lined entrance and stage decor to the choreography that kept the floor full all night.",
    images: [achRangiloRaas, portfolioRangiloDecor, portfolioRangiloDandiya],
  },
  {
    slug: "dandiya-carnival-2023",
    title: "Dandiya Carnival 2023",
    tag: "Flagship Event — Best Organizer",
    description:
      "A four-day Dandiya carnival that drew crowds across Bhubaneswar, recognised with the Best Organizer award — press meets, stage performances and city-wide buzz, all run by Dancing Roamer.",
    images: [portfolioDandiyaPressmeet, achDandiyaOrganizer],
  },
  {
    slug: "luxury-wedding-sangeets",
    title: "Luxury Wedding Sangeets & Receptions",
    tag: "Weddings",
    description:
      "The core of Dancing Roamer's work — sangeet nights, reception dances and grand entries choreographed for luxury weddings across India.",
    images: [heroGrandStage, galleryDuoStage, heroGroomsmenGarland, galleryBallroom],
  },
  {
    slug: "community-collaborations",
    title: "Community & Collaborations",
    tag: "Community",
    description:
      "Beyond weddings, Dancing Roamer has performed at and partnered with community and charity events — Time to Shine, Madad Charity, and Asia's largest trade fair, Baliyatra.",
    images: [portfolioTimeToShine, portfolioMadadCharity, achBaliyatra],
  },
];

export const testimonials = [
  {
    names: "Elise & Rohit",
    photo: tEliseRohit,
    quote:
      "Smita was the best choreographer we could have hoped to orchestrate our Sangeet. She did a commendable job teaching us patiently and adjusting steps throughout the process, and gracefully dealt with cross-cultural differences and family visiting India for the first time.",
  },
  {
    names: "Shruti & Gaurav",
    photo: tShrutiGaurav,
    quote:
      "Thank you so much for your wonderful choreography and guidance — it's amazing how patiently you stood with us till the last moment. It is because of you and your dedication that our family was so moved, the performance brought tears to their eyes.",
  },
  {
    names: "Bidyut & Sheetal",
    photo: tBidyutSheetal,
    quote:
      "You and your team exactly know how to put the top on these events, adding the moments that take on a certain charisma. Without your dedication, hard work and effort, the whole event would never have been this joyful and successful.",
  },
  {
    names: "Shivani & Mohit",
    photo: tShivaniMohit,
    quote:
      "Just a thank-you note for all the lovely performances you choreographed for us — till date we are receiving compliments on all the fabulous sangeet performances. So glad we chose you for our big day.",
  },
  {
    names: "Mudit & Priyanka",
    photo: tMuditPriyanka,
    quote:
      "Thank you Smita for the efforts you and your team took, both in Bangalore and Bhubaneswar, to make the event so fun and enjoyable. I especially loved my parents' surprise performance — you gave us a lifetime of good, fun and heartfelt memories.",
  },
  {
    names: "Manisha & Nitin",
    photo: tManishaNitin,
    quote:
      "Smita kept in touch though she knew I wasn't sure if I'd need her services — and I was always certain that if I got married, she'd be part of the team. Immense patience, adaptive, and almost a family member by the end of the wedding.",
  },
  {
    names: "Shreya & Sabya",
    photo: tShreyaSabya,
    quote:
      "It was a nice experience overall. Online training sessions were fun! Even the on-spot practice before sangeet was very useful. The event was well coordinated by Smita — great job! Overall excellent experience — I was a non-dancer, but Smita took great efforts to teach me steps. I will highly recommend Smita as a choreographer.",
  },
  {
    names: "Sambhav & Srishti",
    photo: tSambhavSrishti,
    quote:
      "A big thanks for making our events look so colourful with all that beautiful choreography. You took care of our personalised routines and gave us steps that reflected our love story so beautifully — a big round of applause from all of us.",
  },
  {
    names: "Nishita & Pruthiv",
    photo: tNishitaPruthiv,
    quote:
      "You guys are amazing. Thank you from the bottom of our hearts for making our Sangeet Night so special — your choreography, coordination, execution and management is appreciable. We will definitely recommend you to family and friends.",
  },
];

export const gallery = [
  { image: heroGrandStage, caption: "Grand stage entry with fireworks and a live dance ensemble" },
  { image: heroCoupleStage, caption: "Couple's choreographed reception dance" },
  { image: galleryDuoStage, caption: "Sangeet stage performance under a monogrammed backdrop" },
  { image: heroGroomsmenGarland, caption: "Flower-garland entry choreography for the groom's party" },
  { image: galleryBaraat, caption: "Baraat entry choreographed for the full wedding party" },
  { image: galleryBallroom, caption: "Reception couple dance, ballroom style" },
  { image: servicesTroupeGold, caption: "Dancing Roamer's performance troupe on a luxury wedding stage" },
  { image: galleryDisco, caption: "Sangeet night group choreography under the lights" },
  { image: galleryBridesmaids, caption: "Bridal party rehearsing before the big performance" },
  { image: gallerySelfie, caption: "Family & friends after a sangeet rehearsal" },
  { image: galleryMehendi, caption: "Candid moments backstage before the performance" },
  { image: galleryGroomsmenTrio, caption: "Groomsmen entry choreography under a floral light wall" },
  { image: galleryCouplePurpleDance, caption: "Couple's reception dance, live band on stage" },
  { image: galleryFriendsCheer1, caption: "Bridal party choreography under a curtain of lights" },
  { image: galleryFriendsCheer2, caption: "Sangeet performance, mid-routine close-up" },
  { image: galleryFriendsCheer3, caption: "Sangeet performance, choreographed hand cues" },
  { image: galleryFriendsCheer4, caption: "Full group formation on the sangeet stage" },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];
