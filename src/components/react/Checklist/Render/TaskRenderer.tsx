import React from 'react';
import { type Task } from 'data/checkListItems';
import ContentRenderer from './ContentRenderer';

const TaskRenderer = ({ task }: { task: Task }) => (
  <div className="task">
    <h2>{task.description}</h2>
    {task.content && task.content.map((content, index) => <ContentRenderer key={index} content={content} />)}
  </div>
);

export default TaskRenderer;
