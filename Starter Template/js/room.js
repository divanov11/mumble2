let messagesContainer = document.getElementById('messages');
messagesContainer.scrollTop = messagesContainer.scrollHeight;

const memberContainer = document.getElementById('members__container');
const memberButton = document.getElementById('members__button');

const chatContainer = document.getElementById('messages__container');
const chatButton = document.getElementById('chat__button');

let activeMemberContainer = false;

memberButton.addEventListener('click', () => {
 memberContainer.classList.toggle("show")
});

let activeChatContainer = false;

chatButton.addEventListener('click', () => {
 chatContainer.classList.toggle("show");
});