import React, { useState } from 'react';

const CommentForm = ({ id }) => {
  const [formData, setFormData] = useState({ id, name: '', comment: '' });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    // if (data.message) {
    //   setResponseMessage(data.message);
    // }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form id="add-comment" className="space-y-4" onSubmit={handleSubmit}>
      <input type="hidden" aria-hidden="true" name="id" value={id} />
      <label htmlFor="name-field-comment" className="block text-sm font-medium text-gray-600">Name</label>
      <input type="text" name="name" id="name-field-comment" className="p-2 w-full border rounded-md" value={formData.name} onChange={handleChange} required />
      <label htmlFor="comment-field" className="block text-sm font-medium text-gray-600">Comment</label>
      <textarea rows="6" name="comment" id="comment-field" className="p-2 w-full border rounded-md" value={formData.comment} onChange={handleChange} required></textarea>
      <div className="text-right">
        <input type="submit" id="comment-submit-btn" className="btn btn-primary" value="Add Comment" />
      </div>
    </form>
  );
};

const CommentsSection = () => {
  // TODO: Fetch and display comments here
  return (
    <section className="comments-section">
      <h3 className="comments-title display-none">Comments:</h3>
      <h3 className="empty-comments display-none">No comments yet.</h3>
      <ul id="comments-list">
        {/* Render comments here */}
      </ul>
    </section>
  );
};

const YourComponent = ({ id }) => (
  <>
    <CommentForm id={id} />
    <CommentsSection />
  </>
);

export default YourComponent;
