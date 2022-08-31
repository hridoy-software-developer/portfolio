if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
    const base_url = "http://localhost:3000";
}else{
    var base_url = "https://hridoy-software-developer.github.io/portfolio/vanilla-spa";
}

const routes = {
    404: "pages/404.html",
    "": "pages/index.html",
    "about": "pages/about.html",
    "lorem": "pages/lorem.html",
};

const routeNavigator = (route) => {
    if(route == ''){
        window.history.pushState({}, "", base_url);
    }else{
        window.history.pushState({}, "", route);
    }
    window.route = route;
    pageRender();
};

const pageRender = async () => {
    const route = routes[window.route] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.route = "";
pageRender('');
