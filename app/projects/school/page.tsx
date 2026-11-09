'use client';

import { useState } from 'react';

function HeaderHeadingSchool() {
  const [counterLikes, setCounter] = useState(0);

  function addCounteLike() {
    setCounter((prev) => prev + 1);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">School Projects</h1>
      <p className="mb-2">Likes: {counterLikes}</p>
      <button
        onClick={addCounteLike}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Do you like School?
      </button>
    </div>
  );
}

export default HeaderHeadingSchool;
