// Zyabrev Vladislav JS4

//Homework 18

//Задание 1

const container = document.getElementById("posts");

const postRequest = new XMLHttpRequest();
postRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
postRequest.responseType = "json";

postRequest.send();

postRequest.onload = () => {
  const { response } = postRequest;
  console.log(`response`, response);
  renderPost(response, container);
};

const handleCommentsButtonClick = (event, post) => {
  const { id } = post;
  const commentsContainer = document
  .getElementById(post.id)
  .querySelector(".comments-container");

  if (post.hasAttribute("data-comments-shown")) {
    commentsContainer.innerHTML = "";
    post.removeAttribute("data-comments-shown");
    event.target.innerHTML = "Show comments";
  } else {
    post.setAttribute("data-comments-shown", "");
    const commentsRequest = new XMLHttpRequest();
    commentsRequest.open(
      "GET",
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    commentsRequest.responseType = "json";
  commentsRequest.send();
  commentsRequest.onload = () => {
    const { response } = commentsRequest;
    console.log(`response`, response);

    renderComments(response, commentsContainer);
    event.target.innerText = "Hide comments";
  };
  }
};

const renderComments = (commentsList, commentsContainer) => {
  const comments = commentsList.map(({body}) => {
    const comment = document.createElement("p");
    comment.classList.add("comment");
    comment.innerText = body;
    return comment;
  });

  commentsContainer.append(...comments);
};

const renderPost = (postsList, container) => {
  const posts = postsList.map(({id, title, body}) =>{
    const postContainer = document.createElement("div");
    postContainer.id = id;
    postContainer.classList.add("post");

    const titleElem = document.createElement("h3");
    const bodyElem = document.createElement("p");
    const commentsElem = document.createElement("div");
    const detailsBtn = document.createElement("button");

    commentsElem.classList.add("comments-container");
    detailsBtn.classList.add('btn');

    titleElem.innerText = title;
    bodyElem.innerText = body;
    detailsBtn.innerText = "Show comments";

    detailsBtn.addEventListener("click", (event) => 
    handleCommentsButtonClick(event, postContainer)
    );

    postContainer.append(titleElem, bodyElem, commentsElem, detailsBtn);

    return postContainer;
    });
    
    container.append(...posts);
};