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
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className=" mx-auto bg-white rounded-xl shadow-md max-w-5xl ">
        <div className="md:flex">
          <div className="p-4">
            {checklistItems.map((item) => (
              <CheckListItem item={item} key={item.id} onCheckboxToggle={handleCheckboxToggle} />
            ))}
          </div>
        </div>
      </div>
      <CheckedCount
        count={checkedCount}
        totalCount={checklistItems.reduce((total, item) => total + item.tasks.length, 0)}
        className="fixed bottom-4 right-4"
      />
    </div>
  );
};

export default Checklist;
