import React from "react";
import "./style.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
function Chart(props) {
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
          <div className="chart-item"></div>
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
          <div className="chart-item">CHART</div>
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
          <div className="chart-item">CHART</div>
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
          <div className="chart-item">CHART</div>
        </div>
      </div>
      <div className="main-chart">
        <div className="main-chart-item">a</div>
        <div className="main-chart-item">b</div>
      </div>
      <div className="rank-result">
        <div className="rank-detail">TOP PERFORMING</div>
        <div className="rank-detail">RECENT LEADS</div>
        <div className="todo-list">
          <div className="annoucement">a</div>
          <div className="todo-app">b</div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
