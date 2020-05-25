import React from "react";
import TodoApp from "../todoapp/todoapp";
import "./style.css";
function Result(props) {
  return (
    <div>
      <div className="rank-result">
        <div className="rank-detail">
          TOP PERFORMING
          <div>
            <table>
              <tr>
                <th>User</th>
                <th>Leads</th>
                <th>Deals</th>
                <th>Tasks</th>
              </tr>
              <tr>
                <td>Jeremy Young</td>
                <td>187</td>
                <td>154</td>
                <td>49</td>
              </tr>
              <tr>
                <td>Thomas Krueger</td>
                <td>235</td>
                <td>127</td>
                <td>83</td>
              </tr>
              <tr>
                <td>Pete Burdine </td>
                <td>365</td>
                <td>148</td>
                <td>62</td>
              </tr>
              <tr>
                <td>Pete Burdine </td>
                <td>365</td>
                <td>148</td>
                <td>62</td>
              </tr>
              <tr>
                <td>Pete Burdine </td>
                <td>365</td>
                <td>148</td>
                <td>62</td>
              </tr>
              <tr>
                <td>Pete Burdine </td>
                <td>365</td>
                <td>148</td>
                <td>62</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="rank-detail">
          RECENT LEADS
          <div className="rank-user">
            <div className="rank-user-info">
              <img
                src="https://thuthuatnhanh.com/wp-content/uploads/2019/06/tai-hinh-chibi-bst.jpg"
                style={{
                  borderRadius: "50%",
                }}
                width="36px"
                height="36px"
              ></img>
              <div>Risa Pearson</div>
            </div>
            <div className="rank-user-lead">Cold lead</div>
          </div>
          <div className="rank-user">
            <div className="rank-user-info">
              <img
                src="https://thuthuatnhanh.com/wp-content/uploads/2019/06/tai-hinh-chibi-bst.jpg"
                style={{
                  borderRadius: "50%",
                }}
                width="36px"
                height="36px"
              ></img>
              <div>Risa Pearson</div>
            </div>
            <div className="rank-user-lead">Cold lead</div>
          </div>
          <div className="rank-user">
            <div className="rank-user-info">
              <img
                src="https://thuthuatnhanh.com/wp-content/uploads/2019/06/tai-hinh-chibi-bst.jpg"
                style={{
                  borderRadius: "50%",
                }}
                width="36px"
                height="36px"
              ></img>
              <div>Risa Pearson</div>
            </div>
            <div className="rank-user-lead">Cold lead</div>
          </div>
          <div className="rank-user">
            <div className="rank-user-info">
              <img
                src="https://thuthuatnhanh.com/wp-content/uploads/2019/06/tai-hinh-chibi-bst.jpg"
                style={{
                  borderRadius: "50%",
                }}
                width="36px"
                height="36px"
              ></img>
              <div>Risa Pearson</div>
            </div>
            <div className="rank-user-lead">Cold lead</div>
          </div>
          <div className="rank-user">
            <div className="rank-user-info">
              <img
                src="https://thuthuatnhanh.com/wp-content/uploads/2019/06/tai-hinh-chibi-bst.jpg"
                style={{
                  borderRadius: "50%",
                }}
                width="36px"
                height="36px"
              ></img>
              <div>Risa Pearson</div>
            </div>
            <div className="rank-user-lead">Cold lead</div>
          </div>
          <div className="rank-user">
            <div className="rank-user-info">
              <img
                src="https://thuthuatnhanh.com/wp-content/uploads/2019/06/tai-hinh-chibi-bst.jpg"
                style={{
                  borderRadius: "50%",
                }}
                width="36px"
                height="36px"
              ></img>
              <div>Risa Pearson</div>
            </div>
            <div className="rank-user-lead">Cold lead</div>
          </div>
        </div>
        <div className="todo-list">
          <div className="annoucement">
            <p>
              Enhance your <b>Campaign</b> for better outreach
            </p>
          </div>
          <div className="todo-app">
            Todo
            <TodoApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
