// src/components/TaskItem.tsx
import React, { useState } from 'react';
import { type Task as TaskType } from 'data/checkListItems';
import ContentRenderer from './Render/ContentRenderer';

interface TaskItemProps {
  task: TaskType;
}

const Task: React.FC<TaskItemProps> = ({ task }) => {
  const [checked, setChecked] = React.useState(false);

  console.log(checked);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    console.log(checked);
  };
  return (
    <div className="task m-4">
      <label style={{ textDecoration: checked ? 'line-through' : 'none' }}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {task.description}
      </label>
      {task.content &&
        task.content.map((contentBlock) => (
          <ContentRenderer content={contentBlock} key={contentBlock.type + contentBlock.data.toString()} />
        ))}
    </div>
  );
};

export default Task;
