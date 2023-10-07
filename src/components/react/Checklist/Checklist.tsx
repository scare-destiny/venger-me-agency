import React from 'react';
import CheckListItem from './ChecklistItem';
import { checklistItems } from 'data/checkListItems';

const Checklist: React.FC = () => {
  return (
    <div>
      {checklistItems.map((item) => (
        <CheckListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Checklist;
