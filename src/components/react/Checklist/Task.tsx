// src/components/TaskItem.tsx
import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { domainStorage } from '~/stores/domainStore';
import { type Task as TaskType } from 'data/checkListItems';
import ContentRenderer from './Render/ContentRenderer';
import SPFRecordGenerator from '../spfRecordGenerator.tsx/spfRecordGenerator';

interface TaskItemProps {
  task: TaskType;
  onCheckboxToggle: (isChecked: boolean) => void;
}

const Task: React.FC<TaskItemProps> = ({ task, onCheckboxToggle }) => {
  const [checked, setChecked] = React.useState(false);

  const $domain = useStore(domainStorage);
  console.log(`storage domain is ${$domain}`);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(e.target.checked);
    onCheckboxToggle(isChecked);
  };
  return (
    <div className="task m-4">
      <label style={{ textDecoration: checked ? 'line-through' : 'none' }} className="font-bold">
        <input type="checkbox" checked={checked} onChange={handleChange} /> {task.description}
      </label>
      {task.content &&
        !checked &&
        task.content.map((contentBlock) => (
          <ContentRenderer content={contentBlock} key={contentBlock.type + contentBlock.data.toString()} />
        ))}
      {task.description === 'Create an SPF record for your domain' && !checked && <SPFRecordGenerator client:olny />}
    </div>
  );
};

export default Task;