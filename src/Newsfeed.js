import React from "react";
import "./Newsfeed.css";
import LineGraph from "./LineGraph.js";
import Timeline from "./TimeLine.js";
import Chip from '@material-ui/core/Chip';
import { Avatar } from "@material-ui/core";


const popularTopics = [
  "Technology",
  "Top Movies",
  "Upcoming Earnings",
  "Crypto",
  "Cannabis",
  "Healthcare Supplies",
  "Index ETFs",
  "Technology",
  "China",
  "Pharma",
];

function Newsfeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed__container"></div>
      <div className="newsfeed__chartSection">
        <div className="newsfeed__portfolio">
          <h1>$114,656</h1>
          <p>+$34.63 (+0.05%) Today</p>
        </div>
        <div className="newsfeed__chart">
          <LineGraph />
          <Timeline />
        </div>
      </div>
      <div className="newsfeed__buying__section">
        <h2> Buying Power</h2>
        <h2> $25850 </h2>
      </div>
      <div className="newsfeed__market__section">
        <div className="newsfeed__market__box">
          <p>Markets Closed for Holidays</p>
          <h1>🎅 Merry Christmas🎅</h1>
        </div>
      </div>
      <div className="newsfeed__popularlists__section">
        <div className="newsfeed__popularlists__intro">
          <h1>Popular lists</h1>
          <p>Show More</p>
        </div>
        <div className="newsfeed_popularlists_badges">
          {popularTopics.map((topic) => (
            <Chip
              className="topic__badge"
              variant="outlined"
              label={topic}
              avatar={
                <Avatar
                  src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                />
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;