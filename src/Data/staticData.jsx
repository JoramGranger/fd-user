import {
  appleLogo,
  bkashCard,
  canonLogo,
  mastercard,
  member1Img,
  member2Img,
  member3Img,
  nagadCard,
  productImg1,
  productImg2,
  productImg3,
  russiaFlag,
  saudiFlag,
  usaFlag,
  visaCard,
} from "src/Assets/Images/Images";
import { v4 as uuid } from "uuid";
import {
  car,
  correctSign,
  franceFlag,
  headphone,
  hungaryFlag,
  indiaFlag,
  japanFlag,
} from "../Assets/Images/Images";

export const introductionSliderData = [
  {
    productName: "Iphone 14 Series",
    productImg: productImg1,
    logoImg: appleLogo,
    discountText: "Up to 10% off Voucher",
    id: uuid(),
  },
  {
    productName: "Canon EOS 5D MkII",
    productImg: productImg2,
    logoImg: canonLogo,
    discountText: "Up to 30% off Voucher",
    id: uuid(),
  },
  {
    productName: "MacBook Pro 16",
    productImg: productImg3,
    logoImg: appleLogo,
    discountText: "Up to 15% off Voucher",
    id: uuid(),
  },
];

export const categoriesData = [
  {
    iconName: "makeup",
    title: "OilyS kin",
    id: uuid(),
  },
  {
    iconName: "makeup",
    title: "Dry Skin",
    id: uuid(),
  },
  {
    iconName: "makeup",
    title: "Sensitive Skin",
    id: uuid(),
  },
  {
    iconName: "makeup",
    title: "Combination Skin",
    id: uuid(),
  },
  {
    iconName: "makeup",
    title: "Acne",
    id: uuid(),
  },
  {
    iconName: "makeup",
    title: "Hyperpigmentation",
    id: uuid(),
  },
  {
    iconName: "makeup",
    title: "Even Skin Tone",
    id: uuid(),
  },
  {
    iconName: "makeup",
    title: "OPen Pores",
    id: uuid(),
  },
  {
    iconName: "makeup",
    title: "Stretch Marks",
    id: uuid(),
  },
];

export const aboutCardsInfo = [
  {
    iconName: "shop",
    number: "10.5k",
    text: "Sallers active our site",
    translationKey: "aboutCardsInfo1",
    id: uuid(),
  },
  {
    iconName: "dollarSign",
    number: "33k",
    text: "Mopnthly Produduct Sale",
    translationKey: "aboutCardsInfo2",
    id: uuid(),
  },
  {
    iconName: "shoppingBag",
    number: "45.5k",
    text: "Customer active in our site",
    translationKey: "aboutCardsInfo3",
    id: uuid(),
  },
  {
    iconName: "moneyBag",
    number: "25k",
    text: "Anual gross sale in our site",
    translationKey: "aboutCardsInfo4",
    id: uuid(),
  },
];

export const ourMembersData = [
  {
    name: "Tom Cruise",
    jobTitle: "Founder & Chairman",
    img: member1Img,
    socialMedia: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    id: uuid(),
  },

  {
    name: "Emma Watson",
    jobTitle: "Managing Director",
    img: member2Img,
    socialMedia: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    id: uuid(),
  },

  {
    name: "Will Smith",
    jobTitle: "Product Designer",
    img: member3Img,
    socialMedia: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    id: uuid(),
  },
];

export const paymentCards = [
  {
    img: bkashCard,
    alt: "Bkash card",
    link: "https://www.bkash.com/en/products-services/visa-card-to-bkash",
    id: uuid(),
  },
  {
    img: visaCard,
    alt: "Visa card",
    link: "https://usa.visa.com/pay-with-visa/find-card/apply-credit-card",
    id: uuid(),
  },
  {
    img: mastercard,
    alt: "Mastercard",
    link: "https://www.mastercard.us/en-us.html",
    id: uuid(),
  },
  {
    img: nagadCard,
    alt: "Nagad card",
    link: "https://www.nagad.com.bd/services/?service=add-money-from-card",
    id: uuid(),
  },
];

export const LANGUAGES = [
  {
    lang: "English",
    flag: usaFlag,
    flagName: "USA",
    code: "en",
    id: uuid(),
  },
  {
    lang: "Russian",
    flag: russiaFlag,
    flagName: "Russia",
    code: "ru",
    id: uuid(),
  },
  {
    lang: "Arabic",
    flag: saudiFlag,
    flagName: "Saudi Arabia",
    code: "ar",
    id: uuid(),
  },
  {
    lang: "French",
    flag: franceFlag,
    flagName: "France",
    code: "fr",
    id: uuid(),
  },
  {
    lang: "hungarian",
    flag: hungaryFlag,
    flagName: "Hungary",
    code: "hu",
    id: uuid(),
  },
  {
    lang: "Japanese",
    flag: japanFlag,
    flagName: "Japan",
    code: "ja",
    id: uuid(),
  },
  {
    lang: "Hindi",
    flag: indiaFlag,
    flagName: "India",
    code: "hi",
    id: uuid(),
  },
];

export const productCardCustomizations = {
  categoryProducts: {
    showDiscount: true,
    showFavIcon: true,
    showDetailsIcon: true,
    showNewText: true,
    showWishList: true,
  },
  allProducts: {
    showDiscount: true,
    showFavIcon: true,
    showDetailsIcon: true,
    showNewText: true,
    showWishList: true,
  },
  wishListProducts: {
    showDiscount: true,
    showFavIcon: false,
    stopHover: true,
    showDetailsIcon: false,
    showRemoveIcon: true,
  },
  ourProducts: {
    showDiscount: true,
    showFavIcon: true,
    stopHover: false,
    showDetailsIcon: true,
    showRemoveIcon: false,
    showNewText: true,
    showWishList: true,
    showColors: true,
  },
};

export const mobileNavData = [
  {
    name: "Home",
    link: "/",
    icon: "home",
    requiteSignIn: false,
  },
  {
    name: "About",
    link: "/about",
    icon: "filePaper",
    requiteSignIn: false,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: "user",
    requiteSignIn: true,
  },
  {
    name: "My Cart",
    link: "/cart",
    icon: "bag",
    requiteSignIn: true,
  },
  {
    name: "Favorite",
    link: "/favorites",
    icon: "heart",
    requiteSignIn: true,
  },
  {
    name: "wishlist",
    link: "/wishlist",
    icon: "heart",
    requiteSignIn: true,
  },
  {
    name: "notification",
    link: "/notification",
    icon: "bell",
    requiteSignIn: false,
  },
];

export const womenFashionMenuItems = [
  { name: "Elegant Dress", url: "/#" },
  { name: "Chic Blouse", url: "/#" },
  { name: "Statement Handbag", url: "/#" },
  { name: "Versatile Jacket", url: "/#" },
  { name: "Comfortable", url: "/#" },
];

export const menFashionMenuItems = [
  { name: "Tailored Suit", url: "/#" },
  { name: "Casual Shirts", url: "/#" },
  { name: "Slim-Fit Jeans", url: "/#" },
  { name: "Leather Accessories", url: "/#" },
  { name: "Modern Sneakers", url: "/#" },
];

export const otherSectionsMenuItems = [
  { name: "Electronics", url: "/#" },
  { name: "Home & Lifestyle", url: "/#" },
  { name: "Medicine", url: "/#" },
  { name: "Sports & Outdoor", url: "/#" },
  { name: "Baby's & Toys", url: "/#" },
  { name: "Groceries & Pets", url: "/#" },
  { name: "Health & Beauty", url: "/#" },
];

export const mySocialMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/MoamalAlaa109",
    icon: "facebook",
    id: uuid(),
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MoamalAlaa7",
    icon: "twitter",
    id: uuid(),
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kubislav23/",
    icon: "instagram",
    id: uuid(),
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/moamal-alaa-a4bb15237/",
    icon: "linkedin",
    id: uuid(),
  },
];

export const featuresSectionData = [
  {
    iconImg: car,
    iconAlt: "Car",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    id: uuid(),
  },
  {
    iconImg: headphone,
    iconAlt: "Headphone",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    id: uuid(),
  },
  {
    iconImg: correctSign,
    iconAlt: "Correct sign",
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    id: uuid(),
  },
];

export const billingInputsData = [
  {
    translationKey: "firstName",
    label: "First Name",
    name: "firstName",
    required: true,
    id: uuid(),
  },
  {
    translationKey: "companyName",
    label: "Company Name",
    name: "companyName",
    id: uuid(),
  },
  {
    translationKey: "streetAddress",
    label: "Street Address",
    name: "streetAddress",
    required: true,
    autoComplete: true,
    id: uuid(),
  },
  {
    translationKey: "apartment",
    label: "Apartment, floor, etc. (optional)",
    name: "address",
    autoComplete: true,
    id: uuid(),
  },
  {
    translationKey: "townOrCity",
    label: "Town/City",
    name: "city",
    required: true,
    autoComplete: true,
    id: uuid(),
  },
  {
    translationKey: "phoneNumber",
    label: "Phone Number",
    name: "phoneNumber",
    required: true,
    type: "tel",
    autoComplete: true,
    id: uuid(),
  },
  {
    translationKey: "email",
    label: "Email Address",
    name: "email",
    required: true,
    type: "email",
    autoComplete: true,
    id: uuid(),
  },
];

export const ProductCategories = [
  // skin type
  {
      category: 'Skin Type',
      subCategories: [
          {   
              id: 1,
               childCategory: 'Oily Skin',
                link: 'oily-skin',
                img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
          },
          {
              id: 2,
              childCategory: 'Dry Skin',
              link: 'dry-skin',
              img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
          },
          {
              id: 3,
              childCategory: 'Sensitive Skin',
              link: 'sensitive-skin',
              img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
          },
          {
              id: 4,
              childCategory: 'Combination Skin',
              link: 'combination-skin',
              img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
          },
      ],
      // skin concern
  },
  {
      category: 'Skin Concern',
      subCategories: [
          {
              id: 5,
              childCategory: 'Acne',
              link: 'acne',
              img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
          },
          {
              id: 6,
              childCategory: 'Hyperpigmentation',
              link: 'hyperpigmentation',
              img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
          },
          {
              id: 7,
              childCategory: 'Even Skin Tone',
              link: 'even-skin-tone',
              img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
          },
          {
              id: 8,
              childCategory: 'Open Pores',
              link: 'open-pores',
              img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
          },
          {
              id: 9,
              childCategory: 'Stretch Marks',
              link: 'stretch-marks',
              img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
          }
      ]
  }
];
