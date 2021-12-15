import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import StatisticApi from 'src/Apis/StatisticApi';
import { Icon } from 'src/Components/Icon';

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultSulotion = () => {
    const [dataChart, setDataChart] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await StatisticApi.statisticResultSulotion()
                setDataChart([data?.data?.countDownload, data?.data?.countUpload])
            } catch (error) { }
        })()
    }, [])

    const data = {
        labels: ['Số người làm bài tập', 'Số người nộp bài tập'],
        datasets: [
            {
                label: '# of Votes',
                data: dataChart,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className='border rounded'>
            <div className="flex items-center justify-between px-3 py-3 border-b">
                <p className="tw-text-[18px] tw-font-medium xl:tw-font-normal md:tw-text-[16px] tw-leading-[35px] font-medium flex items-center gap-2 text-blue-900"><Icon.Pen className="fill-current w-[20px]" /> Thống kê bài viết</p>
            </div>
            <Pie className='p-10' data={data} />
        </div>
    )
}

export default ResultSulotion
