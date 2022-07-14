import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "This is post by Priyanka",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "64e9b0e7",
          firstName: "Ankit",
          lastName: "Agarwal",
          username: "ankit123",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021236/social-media/ankit.jpg",
        },
        {
          _id: "5e24f83a",
          firstName: "Sakshi",
          lastName: "Kakkar",
          username: "sakshi909",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021278/social-media/sakshi.jpg",
        },
      ],
      dislikedBy:[]
    },
    username: "pihu909",
    firstName: "Priyanka",
    lastName: "Prajapati",
    createdAt: new Date("June 01 2022 14:04:29"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021458/social-media/priyanka.jpg",
    comments: [
      {
        _id: uuid(),
        firstName: "Ankit",
        lastName: "Agarwal",
        username: "ankit123",
        avatarUrl:
          "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021236/social-media/ankit.jpg",
        text: "First Comment",
        createdAt: new Date("June 02 2022 08:08:45"),
      },
      {
        _id: uuid(),
        firstName: "Sakshi",
        lastName: "Kakkar",
        username: "sakshi909",
        avatarUrl:
          "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021278/social-media/sakshi.jpg",
        text: "helloo!!",
        createdAt: new Date("June 03 2022 08:08:45"),
      },
    ],
    
  },

  {
    _id: uuid(),
    content:
      "I wish people analyse their thoughts before posting that on social media",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "5dc02a81",
          firstName: "Praveen",
          lastName: "Malviya",
          username: "pravy69",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021154/social-media/praveen.jpg",
        },

        {
          _id: "5e24f83a",
          firstName: "Sakshi",
          lastName: "Kakkar",
          username: "sakshi909",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021278/social-media/sakshi.jpg",
        },
      ],
      dislikedBy:[],
    },
    firstName: "Ankit",
    lastName: "Agarwal",
    username: "ankit123",
    avatarUrl:
      "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021236/social-media/ankit.jpg",
    createdAt: new Date("May 18 2022 10:04:29"),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content:
      "They say, no one can be true to you with their heart but I guess, I am lucky. I got the most beautiful people as my friends and my partner.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "8975eb7e",
          firstName: "Priya",
          lastName: "Yadav",
          username: "preet15",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021421/social-media/priya.jpg",
        },

        {
          _id: "5dc02a81",
          firstName: "Praveen",
          lastName: "Malviya",
          username: "pravy69",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021154/social-media/praveen.jpg",
        },
        {
          _id: "4ed82781",
          username: "pihu909",
          firstName: "Priyanka",
          lastName: "Prajapati",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021458/social-media/priyanka.jpg",
        },
      ],
      dislikedBy:[]
    },
    firstName: "Sakshi",
    lastName: "Kakkar",
    username: "sakshi909",
    avatarUrl:
      "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021278/social-media/sakshi.jpg",
    createdAt: new Date("May 23 2022 08:04:29"),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content:
      "Adulthood sucks. Life was good when we didn't know about anything life.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "4dr866vff",
          firstName: "Pooja",
          lastName: "Singh",
          username: "poojasingh",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021321/social-media/pooja.jpg",
        },
      ],
      dislikedBy:[]
    },
    firstName: "Praveen",
    lastName: "Malviya",
    username: "pravy69",
    avatarUrl:
      "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021154/social-media/praveen.jpg",
    createdAt: new Date("May 24 2022 14:04:29"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "I wish i could tell to my younger self that stop thinking so much about everyone, it's okay to think about yourself and love yourself unconditonally",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "5d98463f",
          firstName: "Nupur",
          lastName: "Dey",
          username: "deynupur",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021384/social-media/nupur.jpg",
        },
      ],
      dislikedBy:[]
    },
    firstName: "Priya",
    lastName: "Yadav",
    username: "preet15",
    avatarUrl:
      "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021421/social-media/priya.jpg",
    createdAt: new Date("May 25 2022 16:04:29"),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content: "I love hanging out with people.",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "64e9b0e7",
          firstName: "Ankit",
          lastName: "Agarwal",
          username: "ankit123",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021236/social-media/ankit.jpg",
        },
        {
          _id: "5e24f83a",
          firstName: "Sakshi",
          lastName: "Kakkar",
          username: "sakshi909",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021278/social-media/sakshi.jpg",
        },
        {
          _id: "5d98463f",
          firstName: "Nupur",
          lastName: "Dey",
          username: "deynupur",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021384/social-media/nupur.jpg",
        },
        {
          _id: "4ed82781",
          username: "pihu909",
          firstName: "Priyanka",
          lastName: "Prajapati",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021458/social-media/priyanka.jpg",
        },
      ],
      dislikedBy:[]
    },
    firstName: "Pooja",
    lastName: "Singh",
    username: "poojasingh",
    avatarUrl:
      "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021321/social-media/pooja.jpg",
    createdAt: new Date("May 28 2022 2:08:29"),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content: "Reading is the my best time pass and books are my best friends",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "4dr866vff",
          firstName: "Pooja",
          lastName: "Singh",
          username: "poojasingh",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021321/social-media/pooja.jpg",
        },
        {
         _id: "4ed82781",
          username: "pihu909",
          firstName: "Priyanka",
          lastName: "Prajapati",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021458/social-media/priyanka.jpg",
        },
        {
          _id: "5dc02a81",
          firstName: "Praveen",
          lastName: "Malviya",
          username: "pravy69",
          avatarUrl:
            "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021154/social-media/praveen.jpg",
        },
      ],
      dislikedBy:[]
    },
    firstName: "Nupur",
    lastName: "Dey",
    username: "deynupur",
    avatarUrl:
      "https://res.cloudinary.com/prajapati-priyanka/image/upload/v1657021384/social-media/nupur.jpg",
    createdAt: new Date("May 31 2022 4:04:29"),
    updatedAt: formatDate(),
    comments: [],
  },
];
