const ResponseMessage = (ERROR) => {
    switch (ERROR) {
        case "EMAIL_NOTEXIST": return "Tài khoản không tồn tại";
        case "USER_NOTEXIST": return "Tài khoản không tồn tại";
        case "INVALID_PASSWORD": return "Tài khoản mật khẩu không chính xác";
        case "INVALID_DATA": return "Yêu cầu nhập đầy đủ thông tin";
        case "USERNAME_EXIST": return "Tên tài khoản đã tồn tại";
        case "EMAIL_EXIST": return "Địa chỉ email đã tồn tại";
        case "ERROR_SERVER": return "Vui lòng kiểm tra lại kết nối mạng";
        case "NOT_VERIFY": return "Tài khoản của bạn chưa được kích hoạt";
        case "EMPTY_TOKEN": return "Phiên làm việc hết hạn";
        case "EXPIRED_TOKEN": return "Phiên làm việc hết hạn";
        case "ACCESS_DENIED": return "Không có quyền truy cập";
        case "LIMITED_REQUEST": return "Bạn thao tác quá nhanh";
        
        case "LOGOUT_SUCCESS": return "Đăng xuất thành công";
        case "LOGOUT_ERROR": return "Đăng xuất không thành công";
        case "LOGIN_SUCCESS": return "Đăng nhập thành công";
        case "LOGIN_ERROR": return "Đăng nhập không thành công";
        default: return null
    }
}

export default ResponseMessage;

