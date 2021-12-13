import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Icon } from 'src/Components/Icon';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const ChartQuestion = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 50, 54, 108, 20, 73, 9],
                backgroundColor: 'aqua'
            }
        ],
    };
    return (
        <div className="w-full border">
            <div className="flex items-center justify-between p-5 border-b">
                <p className="tw-text-[18px] tw-font-medium xl:tw-font-normal md:tw-text-[16px] tw-leading-[35px] font-medium flex items-center gap-2 text-blue-900"><Icon.Questions className="fill-current w-[20px]" /> Thống kê câu hỏi</p>
                <select className="border h-[35px] w-[200px] text-center rounded text-gray-600 cursor-pointer text-sm outline-none focus:ring-1 focus:ring-blue-300">
                    <option value="">7 ngày trước</option>
                </select>
            </div>
            <Bar className="w-full" data={data} />
        </div>
    )
}

export default ChartQuestion
