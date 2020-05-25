import React from "react";
import "./style.css";
import { Bar, Line, Doughnut } from "react-chartjs-2";
function Chart(props) {
  const chartData1 = {
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        backgroundColor: "rgba(54, 136, 252, 0.85)",
        barThickness: 8,
      },
    ],
  };
  const chartData2 = {
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        borderColor: "rgba(66, 210, 157, 0.85)",
        backgroundColor: "rgba(0,0,0,0)",
      },
    ],
  };
  const chartData3 = {
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
        backgroundColor: "rgba(54, 136, 252, 0.85)",
        barThickness: 8,
      },
    ],
  };
  const chartData4 = {
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [45, 47, 41, 14, 63, 25, 13, 12, 22, 19, 24],
        backgroundColor: "rgba(66, 210, 157, 0.85)",
        barThickness: 8,
      },
    ],
  };
  const chartData5 = {
    labels: ["Open"],
    datasets: [
      {
        label: "",
        data: [45, 55],
        backgroundColor: ["rgba(66, 210, 157, 0.85)", "rgba(0, 0, 0, 0.1)"],
      },
    ],
  };
  const chartData6 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Pipeline",
        data: [17, 30, 21, 34, 18, 40, 29, 17, 18, 29, 16, 29],
        borderColor: "rgba(54, 136, 252, 0.85)",
        backgroundColor: "rgba(0,0,0,0)",
      },
      {
        label: "Total Revenue",
        data: [12, 25, 16, 29, 13, 35, 24, 12, 13, 24, 11, 24],
        borderColor: "rgba(66, 210, 157, 0.85)",
        backgroundColor: "rgba(66, 210, 157, 0.4)",
      },
    ],
  };
  return (
    <div>
      <div className="title-content">
        <span>CRM</span>
        <span>Hyper > Dashboard > CRM</span>
      </div>
      <div className="total-chart">
        <div className="component-chart-item">
          <div>
            <div>Campaign Sent</div>
            <div>9,814</div>
            <div>
              <svg width="12px" height="12px" viewBox="0 0 20 20">
                <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
              </svg>
              <span>3.27%</span>
            </div>
          </div>
          <div className="chart-item">
            <Bar
              width="150"
              data={chartData1}
              options={{
                layout: {
                  padding: {
                    left: -100,
                    right: 0,
                    top: 0,
                    bottom: 0,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="component-chart-item">
          <div>
            <div>Campaign Sent</div>
            <div>9,814</div>
            <div>
              <svg width="12px" height="12px" viewBox="0 0 20 20">
                <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
              </svg>
              <span>3.27%</span>
            </div>
          </div>
          <div className="chart-item">
            <Line
              width="150"
              data={chartData2}
              options={{
                layout: {
                  padding: {
                    left: -100,
                    right: 0,
                    top: 0,
                    bottom: 0,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="component-chart-item">
          <div>
            <div>Campaign Sent</div>
            <div>9,814</div>
            <div>
              <svg width="12px" height="12px" viewBox="0 0 20 20">
                <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
              </svg>
              <span>3.27%</span>
            </div>
          </div>
          <div className="chart-item">
            <Bar
              width="150"
              data={chartData3}
              options={{
                layout: {
                  padding: {
                    left: -100,
                    right: 0,
                    top: 0,
                    bottom: 0,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="component-chart-item">
          <div>
            <div>Campaign Sent</div>
            <div>9,814</div>
            <div>
              <svg width="12px" height="12px" viewBox="0 0 20 20">
                <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
              </svg>
              <span>3.27%</span>
            </div>
          </div>
          <div className="chart-item">
            <Bar
              width="150"
              data={chartData4}
              options={{
                layout: {
                  padding: {
                    left: -100,
                    right: 0,
                    top: 0,
                    bottom: 0,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="main-chart">
        <div className="main-chart-item">
          CAMPAIGNS
          <Doughnut width="150" data={chartData5} options={{}} />A
        </div>

        <div className="main-chart-item">
          REVENUE
          <div className="main-chart-right-value">
            <div>
              <p>Current Month</p>
              <p>$42,025</p>
            </div>
            <div>
              <p>Previous Month</p>
              <p>$74,651</p>
            </div>
          </div>
          <Line
            data={chartData6}
            options={{
              legend: {
                display: true,
                position: "bottom",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Chart;
