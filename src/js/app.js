const menus = document.getElementsByClassName("hamburger_menu");

[].forEach.call(menus, function (m) {
    m.addEventListener('click', function() {
        const links = document.querySelector(".nav_links");
        m.classList.toggle('open');
        // links.style.transform = "translateX(0%)";
        links.classList.toggle('nav_links_open');
    });
});

document.addEventListener('scroll', function () {
    const navHeader = document.querySelector('.nav_links');
    const topOfNav = navHeader.clientHeight;

    function changeNav() {
        if (window.scrollY >= topOfNav - topOfNav + 1) {
            // document.body.classList.add('sticky');
            console.log(navHeader);
        } else {
            document.body.classList.remove('sticky');
        }
    }

    document.addEventListener('scroll', changeNav)
});