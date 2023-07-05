import { useEffect, useState } from "react";
import "./InformationChart.css";
import { Bar } from "react-chartjs-2";
import { } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import followerService from "../../../Services/followerService";
import ExportFile from "../ExportFile/ExportFile";
import notifyService from "../../../Services/NotifyService";




function InformationChart(): JSX.Element {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

const [followersCount, setFollowersCount] = useState([]);


useEffect(() => {
  followerService.followersnumbersForAllVactions()
    .then((followersCount) => {
      setFollowersCount(followersCount);
    })
    .catch(err => notifyService.error(err));
}, []);

const labels = followersCount.map(follower => follower.destination);
const data = followersCount.map(follower => follower.count);



    return (
        <div className="InformationChart">
			<div className="chart-container">
      <Bar
        data={{
          labels: labels,
          datasets: [{
            label: 'Followers by Vacations',
            data: data,
            backgroundColor: [
              'rgb(153, 102, 255)'
            ],
            borderColor: [
              'rgb(153, 102, 255)'
            ],
            borderWidth: 1
          }]
        }}
      />
      </div>
      <ExportFile/>
        </div>
    );
}

export default InformationChart;
