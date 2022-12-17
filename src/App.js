import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Donutchart from "./components/pieChart";
import SelectFunc from "./components/Select";

function App() {
  const [data, setData] = useState([]);
  const [selectedSegmentTypes, setSelectedSegmentType] = useState([]);
  const [selectedSegmentDesc, setSelectedSegmentDesc] = useState([]);

  const segmentTypes = [];
  data.forEach((item) => {
    if (!segmentTypes.includes(item["Segment Type"])) {
      segmentTypes.push(item["Segment Type"]);
    }
  });

  const selectOptionTypes = [];
  segmentTypes.forEach((type) => {
    const objects = {
      value: type,
      label: type,
    };
    selectOptionTypes.push(objects);
  });

  const BaseUrl = "https://picnic-backend-production.up.railway.app/";

  useEffect(() => {
    axios.get(BaseUrl).then((response) => {
      setData(response.data);
    });
  }, []);
  if (!data) return null;

  const filteredBySegmentType = [];
  selectedSegmentTypes.forEach((one) => {
    data.forEach((item) => {
      if (item["Segment Type"] === one) {
        filteredBySegmentType.push(item);
      }
    });
  });

  const segmentDescr = [];
  filteredBySegmentType.forEach((item) => {
    if (!segmentDescr.includes(item["Segment Description"])) {
      segmentDescr.push(item["Segment Description"]);
    }
  });

  const completelyFilteredArray = [];
  selectedSegmentDesc.forEach((desc) => {
    filteredBySegmentType.forEach((item) => {
      if (item["Segment Description"] === desc) {
        completelyFilteredArray.push(item);
      }
    });
  });

  const selectOptionDescriptions = [];

  segmentDescr.forEach((desc) => {
    const objects = {
      value: desc,
      label: desc,
    };
    selectOptionDescriptions.push(objects);
  });

  let chartData;

  if (selectedSegmentDesc.length > 0) {
    chartData = completelyFilteredArray;
  } else if (selectedSegmentTypes.length > 0) {
    chartData = filteredBySegmentType;
  } else {
    chartData = data;
  }

  return (
    <div className="App">
      {data ? <h3> {data[0]?.Question}</h3> : null}
      <SelectFunc
        options={selectOptionTypes}
        selectedSegmentTypes={selectedSegmentTypes}
        setSelectedSegmentTypes={setSelectedSegmentType}
      />
      <SelectFunc
        options={selectOptionDescriptions}
        selectedSegmentTypes={selectedSegmentDesc}
        setSelectedSegmentTypes={setSelectedSegmentDesc}
      />
      <Donutchart data={chartData} />
    </div>
  );
}

export default App;
