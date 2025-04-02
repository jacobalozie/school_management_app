// function to login
function login() {
  let username = document.getElementById('username').value;
  if (username) {
      localStorage.setItem('user', username); // 'store our data'
      document.getElementById('login-container').classList.add('d-none');
      document.getElementById('dashboard').classList.remove('d-none');
      loadNotifications()
      // loadChat()
  }else{
      alert("Please enter a valid name")
  }
}

// function to logout
function logout() {
  localStorage.removeItem('user') // clear user data
  document.getElementById('dashboard').classList.add('d-none');
  document.getElementById('login-container').classList.remove('d-none')
}

// functions to load notifications
function loadNotifications() {
  let notifications = ["Exam starts on Monday", "School trip on Friday", "SUC meeting on wednesday", "Fee payment deadline: Sunday"]

  let notificationList = document.getElementById('notifications-list');
  notifications.forEach((note) => {
      let li = document.createElement('li');
      li.className = "list-group-item";
      li.innerText = note;
      notificationList.appendChild(li);
  });
}

// function to send chat messages
function sendMessage() {
  let message = document.getElementById('chat-message').value;
  if(message.trim() !== "") {
      let chatbox = document.getElementById('chat-box');
      let mssgElement = document.createElement('p');
      mssgElement.innerText = message;
      mssgElement.className = 'bg-light p-2 rounded';
      chatbox.appendChild(mssgElement);
      document.getElementById('chat-message').value = " "; // clearing the input
  }
}

//function to simulate a payment
function makePayment() {
  alert("payment successful");
}

// loading a user session if available
window.onload = function () {
  if(localStorage.getItem('user')) {
      document.getElementById('login-container').classList.add('d-none');
      document.getElementById('dashboard').classList.remove('d-none');
      loadNotifications();
      loadChat();
  }
}


console.log("Script is running")