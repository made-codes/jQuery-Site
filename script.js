$(document).ready(function(){
  // Define an array of posts with images and read more links
  var posts = [
      {
          title: "Exploring the World of Design",
          content: "In this post, we delve into the fascinating world of design, exploring its various aspects and discussing its importance in our lives.",
          image: "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?",
          readMoreLink: "#"
      },
      {
          title: "10 Tips for Healthy Living",
          content: "Discover 10 simple yet effective tips to lead a healthier lifestyle, covering diet, exercise, mental well-being, and more.",
          image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?",
          readMoreLink: "#"
      },
      {
          title: "The Art of Photography",
          content: "Learn about the art of photography, its history, techniques, and how to capture stunning images that tell a story.",
          image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?",
          readMoreLink: "#"
      }
  ];

  // Function to generate HTML markup for each post
  function generatePostHTML(post) {
      var html = '<div class="post">';
      html += '<h3>' + post.title + '</h3>';
      html += '<img src="' + post.image + '" alt="' + post.title + '">';
      html += '<p>' + post.content + '</p>';
      html += '<a href="' + post.readMoreLink + '" class="readMoreBtn">Read More</a>';
      html += '</div>';
      return html;
  }

  // Function to display posts on the page
  function displayPosts(posts) {
      var postsHTML = '';
      posts.forEach(function(post) {
          postsHTML += generatePostHTML(post);
      });
      $('#postsList').html(postsHTML);
  }

  // Display the posts when the document is ready
  displayPosts(posts);

  // More Posts button functionality (dummy functionality for demonstration)
  $('#morePostsBtn').click(function() {
      alert("More posts button clicked!");
  });
});
