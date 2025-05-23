
// Selecting elements
const chatbotToggleBtn = document.getElementById("chatbot-toggle");
const chatbotContainer = document.getElementById("chatbot-container");
const chatbotChat = document.getElementById("chatbot-chat");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const closeBtn = document.getElementById("close-chatbot");

// Predefined responses
const responses = [
  "Hello! How can I help you today?",
  "What books are you interested in?",
  "Here are some popular books: Book 1, Book 2, Book 3.",
  "Is there anything else you'd like to know?"
];

// Toggle chatbot visibility
chatbotToggleBtn.addEventListener("click", function() {
  chatbotContainer.classList.toggle("show");
});

// Send user message
sendBtn.addEventListener("click", function() {
  sendMessage();
});

// Handle Enter key press
userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// Close chatbot
closeBtn.addEventListener("click", function() {
  chatbotContainer.classList.remove("show");
});

// Function to send user message
function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  appendMessage(userMessage, "sent");
  respondToUser(userMessage);

  // Clear input
  userInput.value = "";
}

// Function to append message to chat
function appendMessage(message, type) {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message", type);
  chatbotChat.appendChild(messageElement);
  chatbotChat.scrollTop = chatbotChat.scrollHeight;
}

// Function to respond to user
function respondToUser(message) {
  const randomIndex = Math.floor(Math.random() * responses.length);
  const response = responses[randomIndex];
  appendMessage(response, "received");
}