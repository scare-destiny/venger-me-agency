import React from 'react';
import { type ChecklistItem as ChecklistItemType } from 'data/checkListItems';
import Task from './Task';

interface ChecklistItemProps {
  item: ChecklistItemType;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item }) => {
  return (
    <div className="checklist-item">
      <h2>{item.title}</h2>
      {item.tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default ChecklistItem;
