import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Icon } from "src/Components/Icon";
import StatisticApi from "src/Apis/StatisticApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartPost = () => {
  const [dataChart, setDataChart] = useState(null);
  const [labelChart, setlabelChart] = useState(null);

  const handelFilterData = async (e) => {
    try {
      const { data } = await StatisticApi.statisticPost({
        [e.target.name]: e.target.value,
      });
      switch (e.target.value) {
        case "7":
        case "30":
          setDataChart(data?.data?.map((item) => item.count).reverse());
          setlabelChart(
            data?.data
              ?.map((item) => {
                const date = item?.date?.split("-");
                date?.shift();
                return date?.join("/");
              })
              .reverse()
          );
          break;

        case "180":
        case "365":
          let arrLabel = [];
          let arrCount = [];
          let objData = {};
          data?.data?.forEach((item) => {
            const key = item?.date?.split("-");
            key?.pop();
            if (objData[key.join("/")]) {
              objData[key.join("/")] = objData[key.join("/")] + item.count;
            } else {
              objData[key.join("/")] = item.count;
            }
          });

          for (const key in objData) {
            arrLabel.unshift(key);
            arrCount.unshift(objData[key]);
          }

          setlabelChart(arrLabel);
          setDataChart(arrCount);
          break;

        default:
          break;
      }
    } catch (error) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await StatisticApi.statisticPost({ type: 7 });
        setDataChart(data?.data?.map((item) => item.count).reverse());
        setlabelChart(
          data?.data
            ?.map((item) => {
              const date = item?.date?.split("-");
              date?.shift();
              return date?.join("/");
            })
            .reverse()
        );
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await StatisticApi.statisticPost({ type: 7 });
        setDataChart(data?.data?.map((item) => item.count).reverse());
        setlabelChart(
          data?.data
            ?.map((item) => {
              const date = item?.date?.split("-");
              date?.shift();
              return date?.join("/");
            })
            .reverse()
        );
      } catch (error) {}
    })();
  }, []);

  const data = {
    labels: labelChart,
    datasets: [
      {
        label: "S??? l?????ng b??i vi???t ???? t???o",
        data: dataChart,
        backgroundColor: "#6febb8",
      },
    ],
  };
  return (
    <div className="w-full border bg-green-50 rounded">
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <p className="tw-text-[18px] tw-font-medium xl:tw-font-normal md:tw-text-[16px] tw-leading-[35px] font-medium flex items-center gap-2 text-blue-900">
          <Icon.Pen className="fill-current w-[20px]" /> Th???ng k?? b??i vi???t
        </p>
        <select
          name="type"
          onChangeCapture={handelFilterData}
          className="border h-[35px] w-[150px] text-center rounded text-gray-600 cursor-pointer text-sm outline-none focus:ring-1 focus:ring-blue-300"
        >
          <option value="7">7 ng??y qua</option>
          <option value="30">1 th??ng qua</option>
          <option value="180">6 th??ng qua</option>
          <option value="365">1 n??m qua</option>
          <option value="all">T???t c??? th???i gian</option>
        </select>
      </div>
      <Bar className="w-full p-2" data={data} />
    </div>
  );
};

export default ChartPost;
