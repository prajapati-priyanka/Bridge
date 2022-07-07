import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */



export const users = [
  {
    _id: "4ed82781",
    firstName: "Priyanka",
    lastName: "Prajapati",
    username: "pihu909",
    password: "pihu7845",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Advanced-frontend-developer",
    website:"priyanka-prajapati.netlify.app",
    avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021458/social-media/priyanka.jpg",
    bookmarks: [],
    following: [
      {
        _id: "64e9b0e7",
        firstName: "Ankit",
        lastName: "Agarwal",
        username: "ankit123",
        avatarUrl: "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021236/social-media/ankit.jpg",
      },
      {
        _id: "5e24f83a",
        firstName: "Sakshi",
        lastName: "Kakkar",
        username: "sakshi909",
        avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021278/social-media/sakshi.jpg",
      },
      {
        _id: "4dr866vff",
        firstName: "Pooja",
        lastName: "Singh",
        username: "poojasingh",
        avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021321/social-media/pooja.jpg",
      },
    ],
    followers: [
      {
        _id: "64e9b0e7",
        firstName: "Ankit",
        lastName: "Agarwal",
        username: "ankit123",
        avatarUrl: "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021236/social-media/ankit.jpg",
      },
      {
        _id: "5dc02a81",
        firstName: "Praveen",
        lastName: "Malviya",
        username: "pravy69",
        avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021154/social-media/praveen.jpg",
      },
    ],
  },

  // ******************2nd User********************
  {
    _id: "64e9b0e7",
    firstName: "Ankit",
    lastName: "Agarwal",
    username: "ankit123",
    password: "kit123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Aspiring web developer",
    website:"https://www.google.com/",
    avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021236/social-media/ankit.jpg",
    bookmarks:[],
    following: [
      {
        _id: "4ed82781",
        firstName: "Priyanka",
        lastName: "Prajapati",
        username: "pihu909",
        avatarUrl: "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021458/social-media/priyanka.jpg",
      },
      {
        _id: "5e24f83a",
        firstName: "Sakshi",
        lastName: "Kakkar",
        username: "sakshi909",
        avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021278/social-media/sakshi.jpg",
      },
    ],
    followers: [
      {
        _id: "4ed82781",
        firstName: "Priyanka",
        lastName: "Prajapati",
        username: "pihu909",
        avatarUrl: "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021458/social-media/priyanka.jpg",
      },
      {
        _id: "8975eb7e",
        firstName: "Priya",
        lastName: "Yadav",
        username: "preet15",
        avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021421/social-media/priya.jpg",
      },
    ],
  },

  // *************3rd User**************
  {
    _id: "5e24f83a",
    firstName: "Sakshi",
    lastName: "Kakkar",
    username: "sakshi909",
    password: "uandrk90",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"I am third user",
    website:"https://www.google.com/",
    avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021278/social-media/sakshi.jpg",
    bookmarks:[],
    followers: [
      {
        _id: "4ed82781",
        firstName: "Priyanka",
        lastName: "Prajapati",
        username: "pihu909",
        avatarUrl: "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021458/social-media/priyanka.jpg",
      },
    ],
    following: [
      {
        _id: "4ed82781",
        firstName: "Priyanka",
        lastName: "Prajapati",
        username: "pihu909",
        avatarUrl: "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021458/social-media/priyanka.jpg",
      },
      {
        _id: "8975eb7e",
        firstName: "Priya",
        lastName: "Yadav",
        username: "preet15",
        avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021421/social-media/priya.jpg",
    
      },
    ],
  },

  // *************4th User**********************
  {
    _id: "8975eb7e",
    firstName: "Priya",
    lastName: "Yadav",
    username: "preet15",
    password: "preet1592",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"I am fourth user",
    website:"https://www.google.com/",
    avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021421/social-media/priya.jpg",
    bookmarks:[],
    following: [
      {
        _id: "5dc02a81",
        firstName: "Praveen",
        lastName: "Malviya",
        username: "pravy69",
        avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021154/social-media/praveen.jpg",
      },
    ],
    followers: [
      {
        _id: "64e9b0e7",
        firstName: "Ankit",
        lastName: "Agarwal",
        username: "ankit123",
        avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021236/social-media/ankit.jpg",
      },
    ],
    
  },

  // **********5th User************
  {
    _id: "5dc02a81",
    firstName: "Praveen",
    lastName: "Malviya",
    username: "pravy69",
    password: "gandhi@56",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"I am fifth user",
    website:"https://www.google.com/",
    avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021154/social-media/praveen.jpg",
    bookmarks:[],
    followers: [
      {
        _id: "8975eb7e",
        firstName: "Priya",
        lastName: "Yadav",
        username: "preet15",
        avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021421/social-media/priya.jpg",
      },
    ],
    following: [
      {
        _id: "4dr866vff",
        firstName: "Pooja",
        lastName: "Singh",
        username: "poojasingh",
        avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021321/social-media/pooja.jpg",
      },
    ],
  },

  // *************6th User**************
  {
    _id: "4dr866vff",
    firstName: "Pooja",
    lastName: "Singh",
    username: "poojasingh",
    password: "poojasingh94",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"I am sixth user",
    website:"https://www.google.com/",
    avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021321/social-media/pooja.jpg",
    bookmarks:[],
    followers: [
      {
        _id: "4ed82781",
        firstName: "Priyanka",
        lastName: "Prajapati",
        username: "pihu909",
        avatarUrl: "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021458/social-media/priyanka.jpg",
      },
      {
        _id: "64e9b0e7",
        firstName: "Ankit",
        lastName: "Agarwal",
        username: "ankit123",
        avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021236/social-media/ankit.jpg",
      },
    ],
    following:[],
  
  },

  // ************7th User**********
  {
    _id: "5d98463f",
    firstName: "Nupur",
    lastName: "Dey",
    username: "deynupur",
    password: "letsread",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarUrl:"https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021384/social-media/nupur.jpg",
    followers: [],
    following: [],
    bookmarks: [],
    bio: "I am seventh user",
    portfolio: "https://www.google.com/",
  },
]


