import React from 'react';
import TaskItem from './Task';
import { Task } from 'data/checkListItems';

interface TaskProps {
  tasks: Task[];
}

const Tasks: React.FC<TaskProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </ul>
  );
};

export default Tasks;
