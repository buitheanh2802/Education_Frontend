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

  //profile-me
  PROFILE_ME: "/profile/me",
  PROFILE_CHANGE: "/profile/me/change-info",
  CHANGE_PERSONAL: "/profile/me/change-info/personal",
  CHANGE_PASSWORD: "/profile/me/change-info/password",

  //list user
  USERS: "/users",
  //Profile_user
  USER_ID: "/user/:username",
  USER_POST: "/user/:username/post",
  USER_QUESTION: "/user/:username/question",
  USER_FOLLOWER: "/user/:username/follower",
  USER_FOLLOWING: "/user/:username/following",
  USER_BOOKMARK: "/user/:username/bookmark/post",
  USER_TAG: "/user/:username/tag",

  // questions

  // question
  QUESTIONS: "/questions",
  QUESTIONS_CREATE: "/questions/create",
  QUESTIONS_FOLLOWING: "/questions/following",
  QUESTIONS_BOOK_MARK: "/questions/bookmark",
  QUESTIONS_DETAIL: "/question/:id",
  QUESTIONS_UPDATE: "/question/update/:id",
  QUESTIONS_TRENDING: "/questions/trending",

  // post
  POSTS: "/posts",
  POSTS_ID: "/posts/:title-:id",
  POSTS_CREATE: "/posts/create",
  POSTS_POPULAR: "/posts/popular",
  POSTS_FOLLOW: "/posts/follow",
  POSTS_BOOK_MARK: "/posts/bookmark",
  POSTS_UPDATE: "/post/update/:id",

  // tags
  TAGS: "/tags",
  TAGS_ID: "/tag/:slug",
  TAGS_QUESTION: "/tag/:slug/question",
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
  // Qu???n tr??? b??i vi???t
  POST_MANAGER: "/manager/publish_post",
  // Qu???n tr??? c??u h???i
  QUESTION_MANAGER: "/manager/publish_question",
  // Qu???n tr??? t??i kho???n
  ACCOUNT_MANAGER: "/manager/account",
  SULOTION_MANAGER: "/manager/exercise",
  SULOTION_MANAGER_ID: "/manager/exercise/:id",
  // Qu???n tr??? li??n h???
  CONTACT_MANAGER: "/manager/contact",
  COMMENT_MANGER: "/manager/comment",

  //profile
  PROFILE: "/profile/:username",
  EDIT_PROFILE: "/profile/:id/edit",
  PROFILE_PERSONAL: "/profile/:id/edit/personal",
  PROFILE_PASSWORD: "/profile/:id/edit/password",
  // Qu???n l?? Tags
  TAG_MANAGER: "/manager/tag",

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
  MANAGER_CHART: "/manager/chart",
  SOLUTION_ID: "/solution/:solutionId",

  //Quiz
  QUIZ: "/quiz",
  QUIZ_CREATE: "/quiz/create",

  //search
  SEARCH: "/search",
};

export const regex = {
  PASSWORD: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: "Y??u c???u ch???a ??t nh???t 1 k?? t??? s???, ch???, kh??ng c?? kho???ng tr???ng v?? kh??ng c?? k?? t??? ?????c bi???t",
  },

  EMAIL: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "?????nh d???ng email kh??ng h???p l???",
  },

  USER_NAME: {
    value: /^(?=[a-zA-Z0-9]{8,20}$)(?!.*[.]{2})[^.].*[^.]$/,
    message: "T??n t??i kho???n kh??ng h???p l???",
  },
  PHONE: {
    value: /((09|03|07|08|05)+([0-9]{8})\b)/g,
    message: "S??? ??i???n tho???i kh??ng h???p l???",
  },

  REQUIRED: {
    value: true,
    message: "Y??u c???u nh???p tr?????ng n??y",
  },
  REQUIRED_FULLNAME: {
    value: true,
    message: "Y??u c???u nh???p h??? v?? t??n",
  },
  REQUIRED_EMAIL: {
    value: true,
    message: "Y??u c???u nh???p email",
  },
  REQUIRED_PHONE: {
    value: true,
    message: "Y??u c???u nh???p s??? ??i???n tho???i",
  },
  REQUIRED_TITLE: {
    value: true,
    message: "Y??u c???u nh???p ti??u ?????",
  },
  REQUIRED_DESC: {
    value: true,
    message: "Y??u c???u nh???p m?? t???",
  },
  FULL_NAME: {
    value: (value) => {
      const lengthValue = value.trim().length;
      if (lengthValue === 0) return "H??? v?? t??n kh??ng h???p l???";
      if (lengthValue < 5) return "Y??u c???u nh???p ??t nh???t 5 k?? t???";
      if (lengthValue > 30) return "Y??u c???u nh???p kh??ng qu?? 30 k?? t???";
    },
  },

  MAX_LENGTH(max) {
    return {
      value: max,
      message: `Y??u c???u nh???p kh??ng qu?? ${max} k?? t???`,
    };
  },

  MIN_LENGTH(min) {
    return {
      value: min,
      message: `Y??u c???u nh???p t???i thi???u ${min} k?? t???`,
    };
  },
};
