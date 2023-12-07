export const headerData = {
  logo: "/icons/logolarge.svg",
  menuIcon: "/icons/menu.svg",
  routes: [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Menu", path: "/menu" },
    { id: 4, name: "Reservations", path: "booking" },
    { id: 5, name: "Order Online", path: "/order" },
    { id: 6, name: "Login", path: "/login" },
  ],
};

export const heroData = {
  heading: "Little Lemon",
  subHeading: "Chicago",
  description:
    "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
  imgSrc: "/images/restauranfood.jpg",
  label: "Reserve a table",
  link: "/",
};

export const specialsData = {
  heading: "This week specials!",
  specialsList: [
    {
      id: 1,
      name: "Greek salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "12.99",
      imgSrc: "/images/greek salad.jpg",
    },
    {
      id: 2,
      name: "Bruchetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: "5.99",
      imgSrc: "/images/bruchetta.svg",
    },
    {
      id: 3,
      name: "Lemon Dessert",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "5.00",
      imgSrc: "/images/lemon dessert.jpg",
    },
  ],
};

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  reviewText: string;
  image: string;
};

export const testimonialsData: Array<Testimonial> = [
  {
    id: 1,
    name: "Brice Salem",
    rating: 5,
    reviewText:
      "This is one of my favorite places. Everything was just so yummy. Everything was simply decadent. They got a new customer for life!",
    image: "/images/bsalem.jpg",
  },
  {
    id: 2,
    name: "Ewart Aston",
    rating: 5,
    reviewText:
      "Yummers! The food was flavorful, savory, and succulent. I was happy to see how clean everything was. I'm definitely coming back for more!",
    image: "/images/easton.jpg",
  },
  {
    id: 3,
    name: "Marie Osborn",
    rating: 5,
    reviewText:
      "My taste buds are still tingling from our last visit! Try out the huge selection of incredible appetizers. The food is simply to die for.",
    image: "/images/mosborn.jpg",
  },
  {
    id: 4,
    name: "Nylah Macy",
    rating: 5,
    reviewText:
      "It was much better than I expected. After my meal, I was knocked into a food coma. This is definitely a spot I'll be frequenting.",
    image: "/images/nmacy.jpg",
  },
];

export const aboutData = {
  heading: "Little Lemon",
  subHeading: "Chicago",
  description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.`,
  imagePrimary: "/images/about1.jpg",
  imageSecondary: "/images/restaurant.jpg",
};

export const footerData = {
  logo: "/icons/logo-white.png",
  routes: [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Menu", path: "/menu" },
    { id: 4, name: "Reservations", path: "booking" },
    { id: 5, name: "Order Online", path: "/order" },
    { id: 6, name: "Login", path: "/login" },
  ],
  socialLinks: [
    { id: 1, name: "Facebook", url: "https://www.facebook.com/" },
    { id: 2, name: "Instagram", url: "https://www.instagram.com/" },
    { id: 3, name: "Tiktok", url: "https://www.tiktok.com/" },
  ],
  contactInfo: {
    phone: "4445556677",
    email: "contact@littlelemon.com",
    address: "1st Lemon Way,",
    addressSecondary: "Fort Lauderdale, Florida",
  },
};
