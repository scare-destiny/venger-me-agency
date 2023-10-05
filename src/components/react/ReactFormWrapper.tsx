// src/components/react/ReactFormWrapper.tsx
import React from 'react';
import ReactForm from './ReactForm';

// Define a type for the props
interface ReactFormWrapperProps {
  inputs: Array<{ type: string; name: string; label: string }>;
  button: string;
  formState: { [key: string]: string };
  onInputChange: (name: string, value: string) => void;
  onSubmit: (data: any) => void;
}


const ReactFormWrapper: React.FC<ReactFormWrapperProps> = ({ inputs, button, formState, onInputChange, onSubmit }) => {
  return (
    <div className="react-form-wrapper">
      {/* Pass the handler to ReactForm */}
      <ReactForm inputs={inputs} button={button} formState={formState} onInputChange={onInputChange} onSubmit={onSubmit} />
    </div>
  );
};


export default ReactFormWrapper;
