const menus = document.getElementsByClassName("hamburger_menu");

[].forEach.call(menus, function (m) {
    m.addEventListener('click', function() {
        const links = document.querySelector(".nav_links");
        m.classList.toggle('open');
        // links.style.transform = "translateX(0%)";
        links.classList.toggle('nav_links_open');
    });
});


// export { }