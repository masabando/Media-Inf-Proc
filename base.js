
function createNavbar(pageTitle) {
  document.querySelector("body").insertAdjacentHTML("afterbegin", `
<nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://helixcode.notion.site/e81f0bd4e01e463487904adb4c12a2ad?pvs=4">メディア情報処理</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-sm-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            コンテンツ
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="../kuromoji/">テキスト処理</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
`)
}
