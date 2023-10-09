import React from 'react';
import { type ChecklistItem as ChecklistItemType } from 'data/checkListItems';
import Task from './Task';

interface ChecklistItemProps {
  item: ChecklistItemType;
  onCheckboxToggle: (isChecked: boolean) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, onCheckboxToggle }) => {
  return (
    <div className="checklist-item">
      <h2 className="font-bold text-violet-400">{item.title}</h2>
      {item.tasks.map((task) => (
        <Task task={task} key={task.id} onCheckboxToggle={onCheckboxToggle} />
      ))}
    </div>
  );
};

export default ChecklistItem;
