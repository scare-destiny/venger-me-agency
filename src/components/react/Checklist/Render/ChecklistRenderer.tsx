import React from 'react';
import { type ChecklistItem } from 'data/checkListItems';
import TaskRenderer from './TaskRenderer';

const ChecklistRenderer = ({ checklist }: { checklist: ChecklistItem }) => (
  <div className="checklist">
    <h1>{checklist.title}</h1>
    {checklist.tasks.map((task, index) => (
      <TaskRenderer key={index} task={task} />
    ))}
  </div>
);
