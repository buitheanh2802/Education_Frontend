import React from 'react';
import Khoa_hoc from '../../assets/media/pictures/khoa-hoc.png';
import User_group from '../../assets/media/icons/user-group.svg';

const Course = () => {
    return (
        <div className="rounded-[15px] text-gray-900 shadow hover:shadow-lg duration-300 bg-gray-100">
            <div className="bg-center bg-cover pt-[56%] rounded-t-[15px]" style={{backgroundImage: `url(${Khoa_hoc})`}}></div>
            <div className="p-[20px] h-[50%]">
                <h3 className="font-medium text-[20px]">Lập trình javascript (căn bản)</h3>
                <p className="text-[14px] text-green-500 my-[5px]">Giảng viên: Nguyễn Thành Đạt</p>
                <p className="text-[16px] text-gray-600 mb-[20px]">Khoá học này sẽ giúp bạn hiểu được cách thức hoạt động của mã javascript, cách để xây dựng một ưngs dụng javascript chuyên nghiệp.</p>
                <div className="flex justify-between items-center text-[14px]">
                    <p className="text-blue-500 flex items-center"><img className="w-[15px] mr-[5px]" src={User_group} alt="Số người tham gia khóa học" /> <span>19.520 thành viên</span></p>
                    <p>100.000 VNĐ</p>
                </div>
            </div>
        </div>
    )
}

export default Course
