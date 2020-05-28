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
        <span className="title-content-link">Hyper > Dashboard > CRM</span>
      </div>
      <div className="total-chart">
        <div className="component-chart-item">
          <div className="chart-item-detail">
            <div>Campaign Sent</div>
            <div>9,814</div>
            <div>
              <svg width="12px" height="12px" viewBox="0 0 20 20">
                <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
              </svg>
              <span>3.27%</span>
            </div>
          </div>
          <div>
            <Bar
              width="150px"
              data={chartData1}
              options={{
                layout: {
                  padding: {
                    left: -80,
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
          <div className="chart-item-detail">
            <div>Campaign Sent</div>
            <div>9,814</div>
            <div>
              <svg width="12px" height="12px" viewBox="0 0 20 20">
                <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
              </svg>
              <span>3.27%</span>
            </div>
          </div>
          <div>
            <Line
              width="150px"
              data={chartData2}
              options={{
                layout: {
                  padding: {
                    left: -80,
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
          <div className="chart-item-detail">
            <div>Campaign Sent</div>
            <div>9,814</div>
            <div>
              <svg width="12px" height="12px" viewBox="0 0 20 20">
                <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
              </svg>
              <span>3.27%</span>
            </div>
          </div>
          <div>
            <Bar
              width="150px"
              data={chartData3}
              options={{
                layout: {
                  padding: {
                    left: -80,
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
          <div className="chart-item-detail">
            <div>Campaign Sent</div>
            <div>9,814</div>
            <div>
              <svg width="12px" height="12px" viewBox="0 0 20 20">
                <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
              </svg>
              <span>3.27%</span>
            </div>
          </div>
          <div>
            <Bar
              width="150px"
              data={chartData4}
              options={{
                layout: {
                  padding: {
                    left: -80,
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
          <Doughnut data={chartData5} />
          <div className="main-chart-item-left">
            <div>
              <svg width="24px" height="24px" viewBox="0 0 32 32">
                <path d="M16.818 21.991l-1.697 0.009h3.378l0.020-0.018-0.099 0.001 6.579-5.883v-8.091c0-0.557-0.455-1.009-1-1.009h-15c-0.552 0-1 0.444-1 1.002v8.198l6.551 5.78 2.267 0.011zM13.091 6l3.409-3 3.409 3h4.093c1.107 0 1.997 0.895 1.997 2v3.36l3 2.64v14.006c0 1.1-0.897 1.994-2.004 1.994h-20.993c-1.114 0-2.004-0.893-2.004-1.994v-14.006l3-2.64v-3.36c0-1.112 0.894-2 1.997-2h4.093zM18.428 6l-1.928-1.7-1.928 1.7h3.856zM26 12.677v2.656l1.5-1.333-1.5-1.323zM7 15.333v-2.656l-1.5 1.323 1.5 1.333zM13.5 23l-7 6h20l-7-6h-6zM27.685 28.725v0 0c0.194-0.183 0.315-0.442 0.315-0.725v-13l-8 7.017 7.685 6.708zM5.315 28.725l7.685-6.708-8-7.017v13c0 0.283 0.121 0.542 0.315 0.725v0 0z"></path>
                >
              </svg>
            </div>
            <div>1,976</div>
            <div>Open</div>
          </div>
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
