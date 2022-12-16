import { Chart } from "react-google-charts";

export const options1 = {
  title: "PieChart",
};
export const options2 = {
  title: "BarChart",
};

const charts = ({ data }) => {
  const chartDataWithDescription = [["Answer", "Count"]];

  const facebook = data.filter((item) => item.Answer === "Facebook");
  const instagram = data.filter((item) => item.Answer === "Instagram");
  const snapchat = data.filter((item) => item.Answer === "Snapchat");
  const linkedin = data.filter((item) => item.Answer === "Linkedin");

  const faceBookCount = facebook.reduce((acc, item) => acc + +item.Count, 0);
  const instagramCount = instagram.reduce((acc, item) => acc + +item.Count, 0);
  const snapchatCount = snapchat.reduce((acc, item) => acc + +item.Count, 0);
  const linkedinCount = linkedin.reduce((acc, item) => acc + +item.Count, 0);

  const facebookObj = ["Facebook", faceBookCount];
  const instagramObj = ["Instagram", instagramCount];
  const snapchatObj = ["Snapchat", snapchatCount];
  const linkedinObj = ["Linkedin", linkedinCount];

  chartDataWithDescription.push(
    facebookObj,
    instagramObj,
    snapchatObj,
    linkedinObj
  );
  return (
    <>
      <Chart
        chartType="PieChart"
        data={chartDataWithDescription}
        options={options1}
        width={"100%"}
        height={"700px"}
      />
      <Chart
        chartType="BarChart"
        data={chartDataWithDescription}
        options={options2}
        width={"95%"}
        height={"600px"}
      />
    </>
  );
};
export default charts;
