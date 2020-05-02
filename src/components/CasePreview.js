import React from 'react';

// static component
const CasePreview = (contest) => (
  <div className="CasePreview">
    <div className="category-name">
      {contest.categoryName}
    </div>
    <div className="contest-name">
      {contest.contestName}
    </div>
  </div>
);


export default CasePreview;
