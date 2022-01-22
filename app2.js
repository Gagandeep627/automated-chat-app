// automated chat app created-->

// features to be worked on is

// 1)a loading content in the server after every message.

// 2)display a banner of chat stoped when divs are completed.

// 3)style the chat app more awesome

let text = ["your name :", "rohan", "your age: ", "25"];

// loader

const server = document.querySelector(".server");

const load = document.querySelector(".loader-main");

// let ids = ["111", "222", "333"];

let count = 0;

const content = document.querySelector(".content-a");

function additem() {
  // clearintern();

  if (count < text.length) {
    const div = document.createElement("div");

    div.setAttribute("data-id", random());

    div.setAttribute("id", "message-from-server");

    div.textContent = text[count];

    if (!(count % 2 == 0)) {
      // console.log("true");
      div.classList.add("getaway");
    }

    remove_loader();

    content.appendChild(div);
    const mytimeout = setTimeout(loader(), 1000);

    // adding load interval after each message-->

    ++count;
  } else {
    console.error("error obtained !");
    clearInterval(myTimer);
    loader();
    // clearintern();
    // add server lefted the origin chat-->
    close_server();
    

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

// after message show loader-->
// before message hide loader-->

function loader() {
  load.classList.toggle("hide");
}

function remove_loader() {
  if (load.classList.contains("hide")) {
    load.classList.add("hide");
  }
}

function clearintern() {
  clearTimeout(mytimeout);
}


// showing server left when all items are added means when console catches the error-->

function close_server() {

  server.removeAttribute("id");

  // server.id.remove("hide");
}
