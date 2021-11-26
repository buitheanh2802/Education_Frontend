export const timeFormatter = function (_time) {
  var seconds = Math.floor((new Date() - new Date(_time)) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return new Date(_time).toLocaleDateString();
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return new Date(_time).toLocaleDateString();
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " ngày trước";
  }
  interval = seconds / 36;
  if (interval > 1) {
    return Math.floor(interval) + " giờ trước";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " phút trước";
  }
  return Math.floor(seconds) + " giây trước";
};