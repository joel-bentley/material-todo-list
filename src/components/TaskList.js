import React from 'react';

import './TaskList.css';

import { sampleData } from '../sample-data';

const TaskList = () => {
  return (
    <div className="task-list">
      <h2>{JSON.stringify(sampleData)}</h2>
    </div>
  );
};

export default TaskList;
