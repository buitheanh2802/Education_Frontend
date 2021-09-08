<<<<<<< HEAD
import BgLogin from "../Assets/media/pictures/signin-image.png";
import BgSinup from "../Assets/media/pictures/signup-image.png";
import BgContact from "../Assets/media/pictures/contact-image.png";
import JSImage from "../Assets/media/pictures/js.png";
export const Images = {
  BgLogin,
  BgSinup,
  BgContact,
  JSImage,
};
=======
import BgLogin from '../Assets/media/pictures/signin-image.png';
import BgSinup from '../Assets/media/pictures/signup-image.png';
import BgContact from '../Assets/media/pictures/contact-image.png';
import JSImage from '../Assets/media/pictures/js.png';
export const Images = {
  BgLogin, BgSinup, BgContact, JSImage
}
>>>>>>> a518c807c1b423baa3abc72efdc5d111f5cf98d2

export const path = {
  // Website
  HOME: "/",

  //contact
<<<<<<< HEAD
  CONTACT: "/contact",

  //HEAD
  // questions
  QUESTIONS: "/questions",
  QUESTIONS_CREATE: "/questions/create",
  QUESTIONS_FLOW: "/questions/flow",
  QUESTIONS_BOOK_MARK: "/questions/bookmark",
  QUESTIONS_DETAIL: "/questionsDetail",
=======
  CONTACT: '/contact',


//HEAD
    // questions
    QUESTIONS: '/questions',
    QUESTIONS_CREATE: '/questions/create',
    QUESTIONS_FLOW: '/questions/flow',
  QUESTIONS_BOOK_MARK: '/questions/bookmark',
  QUESTIONS_DETAIL: '/questionsDetail',

>>>>>>> a518c807c1b423baa3abc72efdc5d111f5cf98d2

  // post
  POSTS: "/posts",
  POSTS_DETAIL: "/postsDetail",
  POSTS_ID: "/posts/:id",
  // POSTS_CREATE: "/postsCreate",
  POSTS_CREATE: "/posts/create",
  POSTS_POPULAR: "/posts/popular",
  POSTS_FLOW: "/posts/flow",
  POSTS_BOOK_MARK: "/posts/bookmark",

  // tags
<<<<<<< HEAD
  TAGS: "/tags",
  TAGS_ID: "/tags/:id",
  TAGS_FLOW: "/tags/flow",
  //detailtags
  TAGS_DETAIL: "/detailtag",
=======
  TAGS: '/tags',
  TAGS_ID: '/tags/:id',
  TAGS_FLOW: '/tags/flow',
  //detailtags
  TAGS_DETAIL: '/detailtag',
>>>>>>> a518c807c1b423baa3abc72efdc5d111f5cf98d2
  // auth
  AUTH: '/auth',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',

  //profile
  PROFILE: '/profile',


  //profile
  PROFILE: "/profile",

  // error
  NOT_FOUND: '/not-found',


  // Admin
<<<<<<< HEAD
  ADMIN: "/admin",
};
=======
  ADMIN: '/admin',

}
>>>>>>> a518c807c1b423baa3abc72efdc5d111f5cf98d2

export const regex = {
  PASSWORD: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: "Yêu cầu chứa ít nhất 1 ký tự số, chữ và không có khoảng trắng",
  },

  EMAIL: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Định dạng email không hợp lệ",
  },

  USER_NAME: {
    value: /^(?=[a-zA-Z0-9]{8,20}$)(?!.*[.]{2})[^.].*[^.]$/,
    message: "Tên tài khoản không hợp lệ",
  },

  REQUIRED: {
    value: true,
    message: "Yêu cầu nhập trường này",
  },

  FULL_NAME: {
    value: (value) => {
      const lengthValue = value.trim().length;
      if (lengthValue === 0) return "Họ và tên không hợp lệ";
      if (lengthValue < 5) return "Yêu cầu nhập ít nhất 5 ký tự";
      if (lengthValue > 30) return "Yêu cầu nhập không quá 30 ký tự";
    },
  },

  MAX_LENGTH(max) {
    return {
      value: max,
      message: `Yêu cầu nhập không quá ${max} ký tự`,
    };
  },

  MIN_LENGTH(min) {
    return {
      value: min,
      message: `Yêu cầu nhập tối thiểu ${min} ký tự`,
    };
  },
};
