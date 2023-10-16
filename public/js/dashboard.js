
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

  
   // parse out answer, analysis, context, and affirmation
   const text = gptResponse

const answerStart = text.indexOf("Answer:");
const analysisStart = text.indexOf("Analysis:");
const contextStart = text.indexOf("Context:");
const affirmationStart = text.indexOf("Affirmation:");

const chat_response_answer = text.substring(answerStart + 8, analysisStart).trim();
const chat_response_analysis = text.substring(analysisStart + 10, contextStart).trim();
const chat_response_context = text.substring(contextStart + 9, affirmationStart).trim();
const chat_response_affirmation = text.substring(affirmationStart + 13).trim();

console.log("Answer:", chat_response_answer);
console.log("Analysis:", chat_response_analysis);
console.log("Context:", chat_response_context);
console.log("Affirmation:", chat_response_affirmation);








    console.log("*****************dashboard.js create chat:", chat_name);
    console.log("*****************dashboard.js create chat:", chat_prompt);
    console.log("*****************dashboard.js create chat response answer:", chat_response.answer);
    const response = await fetch(`/api/chats`, {
      method: 'POST',
      body: JSON.stringify({ 
        chat_name, 
        chat_prompt,
        chat_response,
        chat_response_answer,
        chat_response_analysis,
        chat_response_context,
        chat_response_affirmation}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log("********************** dashboard.js create chat:", response)
      const newChatId = await response.json();
      const chatId = newChatId.id;
      console.log("********************** dashboard.js create chat id:", chatId)
      //document.location.replace('/dashboard');
      document.location.replace('/chat/' + chatId);
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



