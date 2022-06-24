import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
    "This is post by Priyanka",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pihu@909",
    firstName: "Priyanka",
    lastName: "Prajapati",
    createdAt: new Date("June 01 2022 14:04:29"),
    updatedAt: formatDate(),
    avatarURL: "",
    comments: [
      {
        _id: uuid(),
        firstName: "Ankit",
        lastName: "Agarwal",
        username: "ankit123",
        avatarUrl: "",
        text: "First Comment",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 02 2022 08:08:45"),
      },
      {
        _id: uuid(),
        firstName: "Sakshi",
        lastName: "Kakkar",
        username: "sakshi909",
        avatarUrl:"",
        text: "helloo!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
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
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Ankit",
    lastName: "Agarwal",
    username: "ankit123",
    avatarUrl: "",
    createdAt: new Date("May 18 2022 10:04:29"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
    "They say, no one can be true to you with their heart but I guess, I am lucky. I got the most beautiful people as my friends and my partner.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
        firstName: "Sakshi",
        lastName: "Kakkar",
        username: "sakshi909",
        avatarUrl:"",
        createdAt: new Date("May 23 2022 08:04:29"),
        updatedAt: formatDate(),
        comments: [],
  },
  {
    _id: uuid(),
    content:
    "Adulthood sucks. Life was good when we didn't know about anything life.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Praveen",
    lastName: "Malviya",
    username: "pravy69",
    avatarUrl: "",
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
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Priya",
    lastName: "Yadav",
    username: "preet15",
    avatarUrl: "",
    createdAt: new Date("May 25 2022 16:04:29"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
    "I love hanging out with people.",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Pooja",
    lastName: "Singh",
    username: "poojasingh",
    avatarUrl: "",
    createdAt: new Date("May 28 2022 2:08:29"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
    "Reading is the my best time pass and books are my best friends",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Nupur",
    lastName: "Dey",
    username: "deynupur",
    avatarUrl: "",
    createdAt: new Date("May 31 2022 4:04:29"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
    "Reading is the my best time pass and books are my best friends",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Gene",
    lastName: "D'souza",
    username: "dgene",
    avatarUrl: "",
    createdAt: new Date("June 05 2022 14:04:29"),
    updatedAt: formatDate(),
    comments: [],
  },
 
];
