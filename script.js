let button = document.querySelector("button");
let username = document.querySelector("input[type=text]");
let email = document.querySelector("input[type=email]");

// check browser
if ("Notification" in window) {
  alert("Your browser supports notifications");
} else {
  alert("Your browser does not support notifications");
}

// get access to notifications
function getNotificationPermission() {
  Notification.requestPermission().then((p) => {
    if (p === "granted") {
      // The user granted permission for notifications
      console.log("Thank you for enabling notifications.");
    } else {
      // The user denied permission for notifications
      console.log("Please enable notifications.");
    }
  });
}
getNotificationPermission();

// Test access for notifications
function checkNotificationPermission() {
  if (Notification.permission === "granted") {
    return true;
  } else {
    return false;
  }
}

// Event listener for button click
button.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkNotificationPermission()) {
    if (checkInputs()) {
      return showNotification();
    } else {
      alert("Please fill in the required fields.");
    }
  }
});

// Show notification
function showNotification() {
  return new Notification("Welcome", {
    body: `Your name is: ${username.value} & your email is: ${email.value}`,
    vibrate: [200, 100, 200],
  });
}

// Check if inputs are valid
function checkInputs() {
  // Use !== for comparison to avoid mistakes
  if (username.value.trim() !== "" && email.value.trim() !== "") {
    return true;
  } else {
    return false;
  }
}

// Event listeners for input change (optional, but good for real-time validation)
username.addEventListener("change", checkInputs);
email.addEventListener("change", checkInputs);

// Initial check on page load
checkInputs();
