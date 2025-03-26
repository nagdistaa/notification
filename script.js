let button = document.querySelector("button");
let username = document.querySelector("input[type=text]");
let email = document.querySelector("input[type=email]");
// local storge

// get access
function getNotificationpermision() {
  Notification.requestPermission().then((p) => {
    if (p === "granted") {
      // alert("thank you")
    } else {
      // alert("please grant notificaiton")
    }
  });
}
getNotificationpermision();

// Test access

function checkNotificationPermision() {
  if (Notification.permission === "granted") {
    return true;
  } else {
    return false;
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkNotificationPermision()) {
    if (checkInputs()) {
      return notificaitonMessage();
    } else {
      alert("fill inputs");
    }
  }
});

function notificaitonMessage() {
  return new Notification("welcome", {
    body: `yourname is : ${username.value} & your email is : ${email.value}`,
  });
}

function checkInputs() {
  if (!username.value.trim() == "" && !email.value.trim() == "") {
    return true;
  } else {
    return false;
  }
}

// inputs ;
username.addEventListener("change", checkInputs);
checkInputs();
email.addEventListener("change", checkInputs);
