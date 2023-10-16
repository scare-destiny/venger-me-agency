import React from 'react';
import { type ChecklistItem as ChecklistItemType } from 'data/checkListItems';
import { generateSlug } from '~/utils/utils';
import { Icon } from 'astro-icon/components';
import Task from './Task';

interface ChecklistItemProps {
  item: ChecklistItemType;
  onCheckboxToggle: (isChecked: boolean) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, onCheckboxToggle }) => {
  const itemSlug = generateSlug(item.title);
  const itemUrl = `#${itemSlug}`;

  return (
    <div className="checklist-item" id={`${itemSlug}`}>
      <h2 className="font-bold text-primary">
        <a href={itemUrl}>{item.title}</a>
      </h2>
      <span className="text-normal">({item.tasks.length} tasks)</span>
      {item.tasks.map((task) => (
        <Task task={task} key={task.id} onCheckboxToggle={onCheckboxToggle} />
      ))}
    </div>
  );
};

export default ChecklistItem;
