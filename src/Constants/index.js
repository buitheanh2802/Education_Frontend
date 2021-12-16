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
  // Quản trị bài viết
  POST_MANAGER: "/manager/publish_post",
  // Quản trị câu hỏi
  QUESTION_MANAGER: "/manager/publish_question",
  // Quản trị tài khoản
  ACCOUNT_MANAGER: "/manager/account",
  SULOTION_MANAGER: "/manager/exercise",
  SULOTION_MANAGER_ID: "/manager/exercise/:id",
  // Quản trị liên hệ
  CONTACT_MANAGER: "/manager/contact",

  //profile
  PROFILE: "/profile/:username",
  EDIT_PROFILE: "/profile/:id/edit",
  PROFILE_PERSONAL: "/profile/:id/edit/personal",
  PROFILE_PASSWORD: "/profile/:id/edit/password",
  // Quản lý Tags
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
    message: "Yêu cầu chứa ít nhất 1 ký tự số, chữ, không có khoảng trắng và không có ký tự đặc biệt",
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
  PHONE: {
    value: /((09|03|07|08|05)+([0-9]{8})\b)/g,
    message: "Số điện thoại không hợp lệ",
  },

  REQUIRED: {
    value: true,
    message: "Yêu cầu nhập trường này",
  },
  REQUIRED_FULLNAME: {
    value: true,
    message: "Yêu cầu nhập họ và tên",
  },
  REQUIRED_EMAIL: {
    value: true,
    message: "Yêu cầu nhập email",
  },
  REQUIRED_PHONE: {
    value: true,
    message: "Yêu cầu nhập số điện thoại",
  },
  REQUIRED_TITLE: {
    value: true,
    message: "Yêu cầu nhập tiêu đề",
  },
  REQUIRED_DESC: {
    value: true,
    message: "Yêu cầu nhập mô tả",
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
