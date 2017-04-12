import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import _ from 'lodash';

import './TaskList.css';

import { sampleData } from '../sample-data';

const TaskList = () => {
  const { tasksById } = sampleData;
  const taskIds = _.keys(sampleData.tasksById);
  return (
    <div className="task-list">
      <Paper>
        <List>
          {taskIds.map(taskId => {
            const task = tasksById[taskId];
            return (
              <div key={taskId}>
                <ListItem
                  primaryText={task.title}
                  secondaryText={task.details}
                />
                {taskId !== taskIds.slice(-1)[0] && <Divider />}
              </div>
            );
          })}
        </List>
      </Paper>
    </div>
  );
};

export default TaskList;
