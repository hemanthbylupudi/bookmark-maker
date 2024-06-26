// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");

function validateName() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*"
        siteNameErrMsg.classList.add("error-msg")
    } else {
        siteNameErrMsg.textContent = "";
    }
}
siteNameInput.addEventListener("change", validateName)

function validateUrl() {
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required";
        siteUrlErrMsg.classList.add("error-msg");
    } else {
        siteUrlErrMsg.textContent = "";
    }
}
siteUrlInput.addEventListener("change", validateUrl);

bookmarkForm.addEventListener("submit", function() {
    event.preventDefault();
    validateName()
    validateUrl()
});

function createAndAppend() {
    let listEle = document.createElement("li");
    listEle.classList.add("list-bg", "m-3");
    bookmarksList.appendChild(listEle);
    let paraEle = document.createElement("p");
    paraEle.classList.add("list-para");
    paraEle.textContent = siteNameInput.value;
    listEle.appendChild(paraEle);
    let linkEle = document.createElement("a");
    linkEle.target = "_blank";
    linkEle.href = siteUrlInput.value;
    linkEle.classList.add("list-link");
    linkEle.textContent = siteUrlInput.value;
    listEle.appendChild(linkEle)
}

function display() {
    submitBtn.classList.add("btn-primary", "btn");
    if (siteNameInput.value !== "" && siteUrlInput.value !== "") {
        createAndAppend();
    }
}
submitBtn.addEventListener("click", display);