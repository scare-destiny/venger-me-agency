// src/components/TaskItem.tsx
import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { domainStorage } from '~/stores/domainStore';
import { type Task as TaskType } from 'data/checkListItems';
import ContentRenderer from './Render/ContentRenderer';
import SPFRecordGenerator from '../spfRecordGenerator.tsx/spfRecordGenerator';
import ObtainDKIMKey from '../dkimRecord/ObtainDKIMKey';
import CreateDKIMRecord from '../dkimRecord/CreateDKIMRecord';
import SetupDKIMForESPs from '../dkimRecord/SetupDKIMForESPs';
import DMARCgenerator from '../dmarcRecord/DmarcGenerator';
import AddDMARC from '../dmarcRecord/AddDMARC';

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
      {task.id === '1.1' && !checked && (
        <>
          <SPFRecordGenerator client:only />
          {/* Add your additional content here */}
          <div pt-2>
            <p>
              Now let's setup your SPF record by creating a TXT record for your domain. Below are general step-by-step
              instructions on how to add a TXT record. The process will be similar for most domain registrar companies
              and hosting providers with some small differences.
            </p>
            <ol className="list-decimal ml-4 md:ml-10 pt-2">
              <li>Log into your Account</li>
              <li>Navigate to the Domains page</li>
              <li>You should see a list of all your domains; click on the domain</li>
              <li>Click on DNS or Edit DNS</li>
              <li>Then click on Host Records or Edit Host Records</li>
              <li>Now you will have the option to create a new record</li>
              <li>For the record Type select TXT</li>
              <li>For the Host/Name field enter the @ character or your domain (example.com), both are acceptable</li>
              <li>For the Content/Value field copy and paste the SPF record we generated for you</li>
              <li>For the TTL field leave it as-is to use the default value</li>
              <li>
                Click Save to complete your updates (allow up to 48 hours for your DNS changes to take full effect
                globally)
              </li>
            </ol>
          </div>
        </>
      )}
      {task.id === '1.2' && !checked && (
        <>
          <ObtainDKIMKey client:only />
          <CreateDKIMRecord client:only />
          <SetupDKIMForESPs client:only />
        </>
      )}
      {task.id === '1.3' && !checked && (
        <>
          <DMARCgenerator />
          <AddDMARC />
        </>
      )}
    </div>
  );
};

export default Task;
