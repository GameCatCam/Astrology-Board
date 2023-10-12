
const newFormHandler = async (event) => {
  event.preventDefault();
  console.log("*****************dashboard.js newFormHandler");

  const chat_name = document.querySelector('#chat-name').value.trim();
  const chat_prompt = document.querySelector('#chat-question').value.trim();

  if (chat_name && chat_prompt) {

    // call to chatgptRoutes to prompt ChatGPT///
    console.log("*****************dashboard.js prompt gpt: ", chat_prompt);
    let gptResponse = await fetch(`/api/chatgpts`, {
      method: 'POST',
      body: JSON.stringify({ chat_name, chat_prompt }),
      headers: {
        'Content-Type': 'application/json',
      },
    
    }
    );

    gptResponse = await gptResponse.json()
    console.log("*****************dashboard.js prompt gpt respone: ", gptResponse);
    const chat_response_object = gptResponse
    chat_response = chat_response_object

    //******* end chatgpt */

    console.log("*****************dashboard.js create chat:", chat_name);
    console.log("*****************dashboard.js create chat:", chat_prompt);
    console.log("*****************dashboard.js create chat response:", chat_response);
    const response = await fetch(`/api/chats`, {
      method: 'POST',
      body: JSON.stringify({ chat_name, chat_prompt, chat_response }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {

      document.location.replace('/dashboard');
    } else {
      alert('Failed to create chat');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    console.log("*****************dasboard.js delbuttonhandler id:" + id);

    const response = await fetch(`/api/chats/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete chat');
    }
  }
};


document.addEventListener('DOMContentLoaded', (event) => {
  const newChatForm = document.querySelector('.new-chat-form');
  const chatList = document.querySelector('.chat-list');
  
  console.log("*****************dashboard.js New chat Form:", newChatForm);
  console.log("*****************dashboard.js chat list List:", chatList);

  if (newChatForm) {
    newChatForm.addEventListener('submit', newFormHandler);
  }

  if (chatList) {
    chatList.addEventListener('click', delButtonHandler);
  }
});



