const newPromptHandler = async (event) => {
  console.log("*****************chat.js inside new prompt listener:");
  event.preventDefault();
  console.log(document.querySelector('#new-prompt-id'))
  const comment = document.querySelector('#new-prompt-id').value.trim();
  //const blogId = document.querySelector('#blog-id').value.trim();
  let inputElement = document.querySelector('.prompt-input');
  let chat_id = inputElement.getAttribute('data-promptid');
  let comment_created_by = ""


  if (comment) {
    console.log("*****************chat.js add prompt:", comment);
    console.log("*****************chat.js add chatId:", chat_id);
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      //body: JSON.stringify({ commentText, blogId }),
      //body: JSON.stringify({ comment}),
      body: JSON.stringify({ comment,  comment_created_by, blog_id}),
      //body: JSON.stringify({ comment,  comment_created_by, blog_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      //document.location.replace('/blogs');
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

const updatePromptHandler = async (event) => {
  console.log("*****************chat.js inside update prompt listener:");
  event.preventDefault();
  console.log(document.querySelector('#update-prompt-id'))
  const chat_prompt = document.querySelector('#update-prompt-id').value.trim();
  let inputElement = document.querySelector('.prompt-input');
  let id = inputElement.getAttribute('data-updatepromptid');

//***************************************************** 
//if (title && content) {
//  const response = await fetch(`/api/posts/${post_id}`, {
//    method: "PUT",
//    body: JSON.stringify({ title, content }),
//    headers: { "Content-Type": "application/json" },
//  });
  //****************************************** */

  if (chat_prompt && id) {
    console.log("*****************chat.js update prompt:", chat_prompt);
    console.log("*****************chat.js update blogId:", id);
    const response = await fetch(`/api/chats/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ chat_prompt}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
     // document.location.replace('/dashboard');
     document.location.reload();
    } else {
      alert('Failed to update prompt');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    console.log("*****************comments.js delete id:" + id);

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete comment');
    }
  }
};


document.addEventListener('DOMContentLoaded', (event) => {
  const newCommentForm = document.querySelector('.new-comment-form');
  
  console.log("*****************New comment form:", newCommentForm);

  if (newCommentForm) {
    console.log("*****************blogs.js start new comment listener:");
    newCommentForm.addEventListener('submit', newCommentHandler);
  } 
});

document.addEventListener('DOMContentLoaded', (event) => {
  const updateBlogForm = document.querySelector('.update-blog-form');
  
  console.log("*****************update blog form:", updateBlogForm);

  if (updateBlogForm) {
    console.log("*****************blogs.js start update blog listener:");
    updateBlogForm.addEventListener('submit', updateBlogHandler);
  }

});



//document.addEventListener('DOMContentLoaded', (event) => {
//  document.querySelector('.new-project-form').addEventListener('submit', newFormHandler);
//  document.querySelector('.project-list').addEventListener('click', delButtonHandler);
//});


//document
//  .querySelector('.new-project-form')
//  .addEventListener('submit', newFormHandler);

//document
//  .querySelector('.project-list')
//  .addEventListener('click', delButtonHandler);
