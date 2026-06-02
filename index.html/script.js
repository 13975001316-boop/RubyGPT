window.onload = function () {

    const chatBox = document.getElementById("chatBox");

const savedHistory = localStorage.getItem("chatHistory");

if (savedHistory) {

    chatBox.innerHTML = savedHistory;

}

    const inputBox = document.getElementById("userInput");

    const sendBtn = document.getElementById("sendBtn");

    function sendMessage() {

        const message = inputBox.value.trim();

        if (message === "") return;

        const userMessage = document.createElement("div");

        userMessage.classList.add("user-message");

        userMessage.innerText = message;

        chatBox.appendChild(userMessage);

        localStorage.setItem("chatHistory", chatBox.innerHTML);

        inputBox.value = "";

        const thinkingMessage = document.createElement("div");

thinkingMessage.classList.add("ai-message");

thinkingMessage.innerText = "RubyGPT 正在思考中...";

chatBox.appendChild(thinkingMessage);

        setTimeout(() => {

            const aiMessage = document.createElement("div");

            aiMessage.classList.add("ai-message");

            if (message.includes("你好")) {

     thinkingMessage.innerText = "你好呀，我是 RubyGPT 😊";

} else if (message.includes("名字")) {

     thinkingMessage.innerText = "我叫 RubyGPT";

}

else if (message.includes("你是谁")) {

    thinkingMessage.innerText = "我是你亲手开发的AI助手";

}

else if (message.includes("大学")) {

    thinkingMessage.innerText = "大学时期是学习AI最好的时间";

}

else if (message.includes("雅思")) {

    thinkingMessage.innerText = "坚持每天学习雅思，你会进步很快";

}

else {

    thinkingMessage.innerText = "这个问题我还在学习中...";

    }

            localStorage.setItem("chatHistory", chatBox.innerHTML);

            localStorage.setItem("chatHistory", chatBox.innerHTML);

            chatBox.scrollTop = chatBox.scrollHeight;

        }, 500);

    }

    sendBtn.addEventListener("click", sendMessage);

    inputBox.addEventListener("keydown", function (event) {

          if (event.key === "Enter") {

            sendMessage();

        }

    });

};