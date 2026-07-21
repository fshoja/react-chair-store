
export const products = [
  {
    id: 1,
    image: "./public/images/gal-1.jpeg",
    title: "iman",
    price: 120,
  },
  {
    id: 2,
    image: './public/images/gal-2.jpeg',
    title: "ehsan",
    price: 180,
  },
  {
    id: 3,
    image: './public/images/gal-3.jpeg',
    title: "sajad",
    price: 18-10,
  },
  {
    id: 4,
    image: './public/images/gal-4.jpeg',
    title: "amin",
    price: 140,
  },
  {
    id: 5,
    image: './public/images/gal-5.jpeg',
    title: "ali",
    price: 10,
  },
];






export const  showDate=()=> {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const now = new Date();

  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}