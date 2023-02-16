$(document).ready(function () {
    
    $.get("../json/component.json" , function (data) {
        const pageIndex = $('.navbar').attr("data-page");
        // navbar
        $('.navbar').append(
            `
            <div class="container">
            <a class="navbar-brand text-primary" href="#"> CEvent</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 invisible">
            ${
                data.navbar.map((curr , index) => {
                    return`
                    <li class="nav-item visible">
                        <a class="nav-link ${pageIndex == index ? 'nav_active' : '' }" aria-current="page" href="${curr.href}">${curr.name}</a>
                    </li>
                    `
                })
            }

            <li class="nav-item visible">
                        <a class="btn btn-outline-primary ms-lg-3" href="/ragistration.html">Ragistration</a>
            </li>
            </ul>
            </div>
            </div>
            `
        )

        $('.footer').append(
            `
            <div class="container">
            <footer class="pt-5">
              <div class="row g-5">
                <div class="col-6 col-md-2 mb-3">
                  <p class="fs-2 text-primary text-center mb-0" href="#"> CEvent</p>
                  <p class="text-center text-secondary fs-6">Be a guest at your own event.</p>
    
                  <ul class="nav justify-content-center">
                    <li class="nav-item mx-1">
                        <a class="fa-brands fa-twitter text-decoration-none" href="#"></a>
                    </li>
                    <li class="nav-item mx-1">
                        <a class="fa-brands fa-instagram text-decoration-none" href="#"></a>
                    </li>
                    <li class="nav-item mx-1">
                        <a class="fa-brands fa-facebook text-decoration-none" href="#"></a>
                    </li>
                  </ul>
                </div>
          
                <div class="col-6 col-md-2 mb-3">
                  <h5 class="mb-4">Pages</h5>
                  <ul class="nav flex-column invisible">
                  ${data.navbar.map((curr) => {
                    return `
                    <li class="nav-item visible" style="margin : -5px;><a href="#" class="nav-link p-0 text-muted">${curr.name}</a></li>
                    `
                  })}
                  </ul>
                </div>
          
                <div class="col-6 col-md-2 mb-3">
                  <h5 class="mb-4">Events</h5>
                  <ul class="nav flex-column invisible">

                  ${data.footer.events.map((curr , index) => {
                    return `
                    <li class="nav-item visible" style="margin : -5px;><a href="#" class="nav-link p-0 text-muted">${curr}</a></li>
                    `
                  })}

                  </ul>
                </div>
          
                <div class="col-md-5 offset-md-1 mb-3">
                  <form>
                    <h5 class="text-primary">Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label for="newsletter1" class="visually-hidden">Email address</label>
                      <input id="newsletter1" type="text" class="form-control" placeholder="Email address" fdprocessedid="n2z32ff">
                      <button class="btn btn-primary" type="button" fdprocessedid="92yrt">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
          
              <div class="pt-3 text-center border-top text-primary">
                <p>© 2022 Company, Inc. All rights reserved.</p>
              </div>
            </footer>
          </div>
            `
        )
    })

})