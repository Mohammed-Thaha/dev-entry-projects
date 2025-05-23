const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const appendMessage = (message, sender) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = `message ${sender}-message`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; 
};

const sendMessage = async () => {
    const userMessage = userInput.value.trim().toLowerCase(); 
    if (!userMessage) return;

    appendMessage(userMessage, 'user');
    userInput.value = '';

    try {
        const response = await fetch('career_data.json'); // Ensure this file is in the same directory
        const data = await response.json();
        
        let careers;  // Declare careers variable
        let botResponse = '';

        // Determine which domain the user is asking about
        if (userMessage.includes("space")) {
            careers = data.space.related_careers;
        } else if (userMessage.includes("full stack")) {
            careers = data.full_stack.related_careers;
        } else if (userMessage.includes("software engineering")) {
            careers = data.software_engineering.related_careers;
        } else if (userMessage.includes("data science")) {
            careers = data.data_science.related_careers;
        } else if (userMessage.includes("cybersecurity")) {
            careers = data.cybersecurity.related_careers;
        } else {
            botResponse = "I'm sorry, I don't understand that. Please ask about 'space', 'full stack', 'software engineering', 'data science', or 'cybersecurity'.";
            appendMessage(botResponse, 'bot');
            return; // Exit if no domain is matched
        }

        // Determine user request type
        if (userMessage.includes("jobs")) {
            const jobTitles = careers.map(career => career.job_title).join(', ');
            botResponse = `Guide Bot: ${jobTitles}`;
        } else if (userMessage.includes("description")) {
            const descriptions = careers.map(career => `${career.job_title}: ${career.description}`).join('\n');
            botResponse = `Descriptions:\n${descriptions}`;
        } else {
            botResponse = "I'm sorry, I don't understand that. Please ask for 'jobs' or 'descriptions'.";
        }

        appendMessage(botResponse, 'bot');
    } catch (error) {
        appendMessage("Error fetching data", 'bot');
    }
};

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
    
