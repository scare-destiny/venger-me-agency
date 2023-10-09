import React, { useState, useCallback } from 'react';
import CheckListItem from './ChecklistItem';
import CheckedCount from '../UI/CheckedCount';
import { checklistItems } from 'data/checkListItems';

const Checklist: React.FC = () => {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckboxToggle = useCallback((isChecked) => {
    setCheckedCount((prevCount) => prevCount + (isChecked ? 1 : -1));
  }, []);

  return (
    <div>
      {checklistItems.map((item) => (
        <CheckListItem item={item} key={item.id} onCheckboxToggle={handleCheckboxToggle} />
      ))}
      <CheckedCount
        count={checkedCount}
        totalCount={checklistItems.reduce((total, item) => total + item.tasks.length, 0)}
        optionalText="Your progress"
      />
    </div>
  );
};

export default Checklist;
