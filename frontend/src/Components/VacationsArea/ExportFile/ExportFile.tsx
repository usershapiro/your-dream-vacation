import { useEffect, useState } from "react";
import "./ExportFile.css";
import followerService from "../../../Services/followerService";
import notifyService from "../../../Services/NotifyService";
    
function ExportFile(): JSX.Element {
    
const [followersData, setFollowersData] = useState([]);


useEffect(() => {
  followerService.followersnumbersForAllVactions()
    .then((followersData) => {
      setFollowersData(followersData);
    })
    .catch(err => notifyService.error(err));
}, []);
    
    const createAndDownloadCsv = () => {
        const headers = ["Destination", "Count"];
        const csvContent = "data:text/csv;charset=utf-8," +
          [headers.join(",")].concat(
            followersData.map(follower => [follower.destination, follower.count].join(","))
          ).join("\n");
      
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "followers.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <div className="ExportFile">
			  <button onClick={createAndDownloadCsv}>Download CSV<span className="material-symbols-outlined">
download
</span></button>
        </div>
    );
}

export default ExportFile;
