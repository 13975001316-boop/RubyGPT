// RubyGPT script.js

const OPENROUTER_API_KEY = "";

const chatBox = document.getElementById('chatBox');

const inputField = document.getElementById('userInput');

const sendButton = document.getElementById('sendBtn');

// 发送消息

sendButton.addEventListener('click', async () => {

    const userMessage = inputField.value.trim();

    if (!userMessage) return;

    inputField.value = '';

    // 用户消息

    const userDiv = document.createElement('div');

    userDiv.classList.add('user-message');

    userDiv.innerText = userMessage;

    chatBox.appendChild(userDiv);

    // AI 思考中

    const aiDiv = document.createElement('div');

    aiDiv.classList.add('ai-message');

    aiDiv.innerText = 'RubyGPT 正在思考中...';

    chatBox.appendChild(aiDiv);

    try {

        const response = await fetch(

             "http://localhost:3000/api/chat",

            {

                method: 'POST',

                headers: {

                    'Content-Type': 'application/json',

                    },            

                    body: JSON.stringify({

                         message: userMessage

                   })

              }

        );  

        const data = await response.json();

        console.log(data);      

        aiDiv.innerText = data.choices[0].message.content;

    } catch (error) {

        console.error(error);

        aiDiv.innerText = "AI 调用失败";

    }

});

// 回车发送

inputField.addEventListener('keypress', (e) => {

       if (e.key === 'Enter') {

        sendButton.click();

    }

});