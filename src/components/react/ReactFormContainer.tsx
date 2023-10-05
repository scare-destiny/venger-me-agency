import React, { FormEvent, useState } from 'react';
import ResultsList from './ResultsList';

interface Input {
  name: string;
  type?: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
  required?: boolean;
}

interface Textarea {
  label?: string;
  rows?: number;
  placeholder?: string;
}

interface Disclaimer {
  label: string;
}

interface FormProps {
  inputs: Input[];
  textarea?: Textarea;
  disclaimer?: Disclaimer;
  button?: string;
  description?: string;
  onSubmit?: (data: any) => void;
}

const ReactFormContainer: React.FC<FormProps> = ({
  inputs,
  textarea,
  disclaimer,
  button = 'Contact us',
  description = '',
  onSubmit = (data) => console.log(data.domain),
}) => {
  const [formState, setFormState] = useState({});
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setResults([]);

    const domain = formState['domain']; // Accessing domain value

    try {
      const apiUrl = import.meta.env.PUBLIC_API_BASE_URL || 'http://localhost:4321'; // Default to localhost if the env var is not set
      const spfResponse = await fetch(`${apiUrl}/api/spf-check?domain=${domain}`);
      const spfResult = await spfResponse.json();

      const sslResponse = await fetch(`${apiUrl}/api/ssl-check?domain=${domain}`);
      const sslResult = await sslResponse.json();

      const mxResponse = await fetch(`${apiUrl}/api/mx-check?domain=${domain}`);
      const mxResult = await mxResponse.json();

      console.dir(mxResult);

      setResults((prevResults) => [
        ...prevResults,
        { spfResult: spfResult.spfRecord, sslResult: sslResult, mxResult: mxResult },
      ]); // Assuming spfResult has spf and ssl properties
    } catch (error) {
      setError('An error occurred while checking the records');
    }

    await onSubmit(formState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputs &&
          inputs.map(
            (input, index) =>
              input.name && (
                <div key={index} className="mb-6">
                  {input.label && (
                    <label htmlFor={input.name} className="block text-sm font-medium">
                      {input.label}
                    </label>
                  )}
                  <input
                    type={input.type || 'text'}
                    name={input.name}
                    onChange={handleInputChange}
                    id={input.name}
                    autoComplete={input.autocomplete || 'on'}
                    placeholder={input.placeholder || ''}
                    className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
                    required={input.required || true}
                  />
                </div>
              )
          )}
        {textarea && (
          <div>
            <label htmlFor="textarea" className="block text-sm font-medium">
              {textarea.label}
            </label>
            <textarea
              id="textarea"
              name="textarea"
              rows={textarea.rows || 4}
              placeholder={textarea.placeholder || ''}
              onChange={handleInputChange}
              className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
            />
          </div>
        )}
        {disclaimer && (
          <div className="mt-3 flex items-start">
            <div className="flex mt-0.5">
              <input
                id="disclaimer"
                name="disclaimer"
                type="checkbox"
                className="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
                required
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="disclaimer"
                className="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400"
              >
                {disclaimer.label}
              </label>
            </div>
          </div>
        )}
        {button && (
          <div className="mt-10 grid">
            <button type="submit" className="btn btn-primary cursor-pointer">
              {button}
            </button>
          </div>
        )}
        {description && (
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        )}
      </form>
      <ResultsList results={results} />
    </>
  );
};

export default ReactFormContainer;
