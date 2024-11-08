// Assuming your module is named apiUtil.js, and it exports fetchPosts
import { fetchPosts } from "./apiUtil.js";

async function displayPosts() {
  try {
    const posts = await fetchPosts(); // Fetch the posts from the API
    posts.slice(0, 5).forEach((post) => {
      // Display only the first 5 posts
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
      console.log("--------------------");
    });
  } catch (error) {
    console.error("Error displaying posts:", error);
  }
}

displayPosts();
