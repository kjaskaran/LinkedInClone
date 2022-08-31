import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Used car prices downshift in Canada", "10h ago - 950 readers")}
      {newsArticle("Snap to cut 20% of jobs: Report", "7h ago - 40,847 readers")}
      {newsArticle("Canadian beer sales a 'disaster'", "15h ago - 11,737 readers")}
      {newsArticle("Time to end 'best before' dates?", "10h ago - 260 readers")}
    
    </div>
  );
}

export default Widgets;
