import React from "react";

function Profile() {
  // Mock user data
  const user = {
    username: "john_doe",  // Replace with dynamic data
    profilePhoto: "https://via.placeholder.com/150",  // Placeholder image (replace with user's photo)
    recentPosts: [
      {
        id: 1,
        category: "Good",
        content: "Had an amazing day at the beach!",
        likes: 45,
        date: "2025-03-21",  // Post date
      },
      {
        id: 2,
        category: "Bad",
        content: "Lost my phone at the mall.",
        likes: 15,
        date: "2025-03-23",  // Post date
      },
      {
        id: 3,
        category: "Good",
        content: "Landed my dream job!",
        likes: 72,
        date: "2025-03-22",  // Post date
      },
    ],
  };

  // Calculate the final rank based on the number of likes
  const sortedPosts = [...user.recentPosts].sort((a, b) => b.likes - a.likes);

  return (
    <div className="p-6">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <img
          src={user.profilePhoto}
          alt={`${user.username}'s profile`}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold">{user.username}</h2>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {sortedPosts.map((post, index) => (
            <div key={post.id} className="border p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-bold">{post.category} Post</h4>
              <p>{post.content}</p>
              <p className="text-sm text-gray-500">Likes: {post.likes}</p>
              <p className="text-sm text-gray-500">Date: {post.date}</p>

              {/* Display final rank */}
              <p className="text-sm font-semibold">
                Final Rank: {index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
