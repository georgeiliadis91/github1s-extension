function addBtn() {
  const githubUrl = "https://github.com";
  const redirectUrl = "https://github1s.com";
  let repoFileNavHeader = document.querySelector(".file-navigation");

  if (repoFileNavHeader) {
    let redirectBtn = document.createElement("a");
    redirectBtn.target = "_blank";
    redirectBtn.innerHTML = "IDEify";
    redirectBtn.classList =
      "btn ml-2 d-none d-md-block btn-primary github1s-btn";

    redirectBtn.href = window.location.href.replace(githubUrl, redirectUrl);

    repoFileNavHeader.appendChild(redirectBtn);
  }
}

if (!document.querySelector(".github1s-btn")) {
  addBtn();
}
