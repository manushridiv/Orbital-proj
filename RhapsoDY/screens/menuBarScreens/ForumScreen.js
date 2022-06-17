import React, { useState } from 'react';
import Comments from "./comments.js"
import "./index.css"

const App = () => {
  return (
    <div>
      <h1>Discussion Panel</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
    