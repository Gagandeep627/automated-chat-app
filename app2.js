// automated chat app created-->

// features to be worked on is

// 1)a loading content in the server after every message.

// 2)display a banner of chat stoped when divs are completed.

// 3)style the chat app more awesome



let text = ["your name :", "rohan", "your age: ", "25"];

// let ids = ["111", "222", "333"];

let count = 0;

const content = document.querySelector(".content-a");

function additem() {
  if (count < text.length) {
    const div = document.createElement("div");

    div.setAttribute("data-id", random());

    div.setAttribute("id", "message-from-server");

    div.textContent = text[count];

    if (!(count % 2 == 0)) {
      // console.log("true");
      div.classList.add("getaway");
    }

    content.appendChild(div);

    // console.log(div.textContent);

    ++count;
  } else {
    console.error("error obtained !");
    clearInterval(myTimer);
  }
}

// additem();
var myTimer = window.setInterval(additem, 3000);

function random() {
  const randin = Math.floor(text.length * Math.random());

  // console.log(randin);

  return randin;
}
// random();
