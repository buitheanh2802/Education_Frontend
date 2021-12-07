import Step1 from "../Assets/media/pictures/Step1.svg";
import Step2 from "../Assets/media/pictures/Step2.svg";
import Step3 from "../Assets/media/pictures/Step3.svg";
import BgLogin from "../Assets/media/pictures/signin-image.png";
import BgSinup from "../Assets/media/pictures/signup-image.png";
export const Images = {
  BgLogin,
  BgSinup,
  Step1,
  Step2,
  Step3,
};

export const path = {
  //HEAD
  // Website
  QUESTION_ID: "/question/:slug-:id",
  // Website
  HOME: "/",
  SETTING: "/setting",

  PROFILE_ME: "/profile/me",
  PROFILE_USER: "/profile/:id",

  //Profile_user
  USER_ID: "/user/:username",
  USER_POST: "/user/:username/post",
  USER_FOLLOWER: "/user/:username/follower",
  USER_FOLLOWING: "/user/:username/following",
  USER_BOOKMARK: "/user/:username/bookmark/post",
  USER_TAG: "/user/:username/tag",

  // questions

  // question
  QUESTIONS: "/questions",
  QUESTIONS_CREATE: "/questions/create",
  QUESTIONS_FLOW: "/questions/flow",
  QUESTIONS_BOOK_MARK: "/questions/bookmark",
  QUESTIONS_DETAIL: "/question/:id",
  QUESTIONS_UPDATE: "/question/update/:id",

  // post
  POSTS: '/posts',
  POSTS_ID: '/posts/:title-:id',
  POSTS_CREATE: '/posts/create',
  POSTS_POPULAR: '/posts/popular',
  POSTS_FOLLOW: '/posts/follow',
  POSTS_BOOK_MARK: '/posts/bookmark',
  POSTS_UPDATE: "/post/update/:id",

  // tags
  TAGS: "/tags",
  TAGS_ID: "/tag/:slug",
  TAGS_QUESTION_POPULAR: "/tag/:slug/question",
  TAGS_FOLLOWER: "/tag/:slug/follower",
  TAGS_POPULAR: "/tags/popular",
  // auth
  AUTH: "/auth",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  FORGOTPASSWORD: "/auth/forgot_password",
  RESETPASSWORD: "/auth/reset_password/:token",

  // error
  NOT_FOUND: "/not-found",

  // Admin
  ADMIN: "/manager",
  //contact
  CONTACT: "/contact",
  // Quản trị bài viết
  POST_MANAGER: "/manager/publish_post",
  // Quản trị câu hỏi
  QUESTION_MANAGER: "/manager/publish_question",
  // Quản trị tài khoản
  ACCOUNT_MANAGER: "/manager/account",
  SULOTION_MANAGER: "/manager/exercise",
  SULOTION_MANAGER_ID: "/manager/exercise/:id",

  //profile
  PROFILE: "/profile/:username",
  EDIT_PROFILE: "/profile/:id/edit",
  PROFILE_PERSONAL: "/profile/:id/edit/personal",
  PROFILE_CONTACT: "/profile/:id/edit/contact",
  PROFILE_PASSWORD: "/profile/:id/edit/password",

  //intro
  INTRO: "/intro",
  // Website

  //Challenge
  CHALLENGE: "/challenge",
  CHALLENGE_CATE_ID: "/challenge/:cateid",
  CHALLENGE_ID: "/challenge/detail/:id",
  CHALLENGE_SOLUTION: "/challenge/solution",
  CHALLENGE_SOLUTION_DETAIL: "/challenge/solution-detail",
  CHALLENGE_SOLUTION_DETAIL_ID: "/challenge/solution-detail/:solutionId",
  CHALLENGE_SOLUTION_CHALLENGE_ID: "/challenge/solution/:challengeId",

  //Quiz
  QUIZ: "/quiz",
  QUIZ_CREATE: "/quiz/create"
};

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
