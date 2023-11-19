import React from 'react';

export default function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('test');

    const apiUrl = import.meta.env.PUBLIC_API_BASE_URL || 'http://localhost:4321'; // Default to localhost if the env var is not set

    const response = await fetch(`${apiUrl}/api/icp`, {
      method: 'POST',
      body: JSON.stringify({}),
    }).then((result) => result.json());

    console.log(response);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-2">
          <div className="grid min-w-[50%] grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2 lg:mx-auto">
            <div className="col-span-full">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                Website
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">https://</span>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="block flex-1   border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="ICP" className="block text-sm font-medium leading-6 text-gray-900">
                Your Ideal Customer Profile
              </label>
              <div className="mt-2">
                <textarea
                  id="ICP"
                  name="ICP"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-auto min-w-[20%] hover:text-link dark:hover:text-white px-4 py-3 flex items-center"
        >
          Test
        </button>
      </div>
    </form>
  );
}
