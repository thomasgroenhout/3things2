import React, { useState } from 'react';

const GoodThings = () => {
  // Get today's date for comparison
  const today = new Date().toLocaleDateString();

  // Dummy data for 10 cards with posted dates
  const goodThings = Array(10).fill({
    title: "Good thing today",
    likes: Math.floor(Math.random() * 100), // Random like count
    user: "User123",
    postedDate: new Date().toLocaleDateString(), // Date the post was made
    time: new Date().toLocaleTimeString(), // Time of the post
  });

  // Filter good things posted today
  const todaysGoodThings = goodThings.filter(item => item.postedDate === today);

  // State to track the like status for each post
  const [likedPosts, setLikedPosts] = useState(new Array(todaysGoodThings.length).fill(false));

  // Function to handle toggling the like status
  const handleLikeToggle = (index) => {
    setLikedPosts((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle the like status
      return newState;
    });
  };

  return (
    <div className="w-full h-screen flex flex-col">

      {/* Main Content */}
      <main className="flex-grow w-full overflow-y-auto pt-24 px-4">
        {/* Good Things Cards */}
        <div className="w-full">
          {todaysGoodThings.length > 0 ? (
            todaysGoodThings.map((item, index) => (
              <div
                key={index}
                className="w-full bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:border-orange-500 mb-4"
              >
                <div className="flex items-center mb-3">
                  {/* Green heart icon before the text */}
                  <span className="text-green-500 text-2xl mr-2">💚</span>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div>
                    <span className="font-semibold">Likes:</span> {item.likes}
                  </div>
                  <div>
                    <span className="font-semibold">Posted by:</span> {item.user}
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-3">
                  <span className="font-semibold">Posted at:</span> {item.time}
                </div>

                {/* Like button with conditional heart icon */}
                <div className="mt-4 flex items-center cursor-pointer" onClick={() => handleLikeToggle(index)}>
                  <span className="text-2xl mr-2">
                    {likedPosts[index] ? "❤️" : "🤍"} {/* Display full heart if liked, empty heart if not */}
                  </span>
                  <span className="text-sm">{likedPosts[index] ? "Liked" : "Like"}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-lg text-gray-600">
              No good things posted today!
            </div>
          )}
        </div>
      </main>

      {/* Bottom Tab Navigation */}
      <footer className="bg-orange-500 text-white h-16 flex items-center justify-around fixed bottom-0 left-0 w-full">
        <div className="text-center">
          <div>💚</div>
          <div className="text-xs">Good Things</div>
        </div>
        <div className="text-center">
          <div>🔥</div>
          <div className="text-xs">Bad Things</div>
        </div>
        <div className="text-center">
          <div>👤</div>
          <div className="text-xs">Profile</div>
        </div>
      </footer>
    </div>
  );
};

export default GoodThings;
