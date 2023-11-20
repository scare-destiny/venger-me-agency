import React from 'react';
import { useChat } from 'ai/react';

export default function Form() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ api: '/api/icp' });

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log('test');

  //   const apiUrl = import.meta.env.PUBLIC_API_BASE_URL || 'http://localhost:4321'; // Default to localhost if the env var is not set

  //   const response = await fetch(`${apiUrl}/api/icp`, {
  //     method: 'POST',
  //     body: JSON.stringify({}),
  //   }).then((result) => result.json());

  //   console.log(response);
  // };
  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      <form onSubmit={handleSubmit}>
        <input
          className=" w-full max-w-md  border border-gray-300 rounded my-12 shadow-xl p-2 dark:text-black"
          value={input}
          placeholder="Describe your business..."
          onChange={handleInputChange}
        />
      </form>
      {messages.length > 0 ? (
        messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))
      ) : (
        <div>Enter a business description and click enter to generate slogans.</div>
      )}
    </div>
  );
}
