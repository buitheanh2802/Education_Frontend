import React, { useEffect, useState } from 'react'
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
import StatisticApi from 'src/Apis/StatisticApi';
import Skeleton from 'react-loading-skeleton'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const ChartPost = () => {
    const [dataChart, setDataChart] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const { data } = await StatisticApi.statisticPost({
                    type: 7
                })
                setDataChart(data?.data?.map(item => item.count))
                console.log(data.data)
            } catch (error) {

            }
        })()
    }, [])

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: dataChart,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return (
        <div className="w-full border">
            <div className="flex items-center justify-between p-5 border-b">
                <p className="tw-text-[18px] tw-font-medium xl:tw-font-normal md:tw-text-[16px] tw-leading-[35px] font-medium flex items-center gap-2 text-blue-900"><Icon.Pen className="fill-current w-[20px]" /> Thống kê bài viết</p>
                <select className="border h-[35px] w-[200px] text-center rounded text-gray-600 cursor-pointer text-sm outline-none focus:ring-1 focus:ring-blue-300">
                    <option value="">7 ngày trước</option>
                </select>
            </div>
            <Bar className="w-full" data={data} />
        </div>
    )
}

export default ChartPost
