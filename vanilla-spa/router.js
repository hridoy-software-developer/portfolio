const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "pages/404.html",
    "/": "pages/index.html",
    "/about": "pages/about.html",
    "/lorem": "pages/lorem.html",
};

const handleLocation = async () => {
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
        var base_url = "http://localhost:3000";
    }else{
        var base_url = "https://hridoy-software-developer.github.io/portfolio/vanilla-spa/";
    }
    
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
