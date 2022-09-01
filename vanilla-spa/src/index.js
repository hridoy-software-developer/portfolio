import Navigo from "navigo";
import "./styles.css";

document.getElementById(
  "app"
).innerHTML = `<a href="/user/xxx/save?foo=bar#anchor-here" data-navigo>click me</a>`;

const router = new Navigo("/");

router.on("/user/:id/:action", function (match) {
  document.getElementById("app").innerHTML = `<pre>${JSON.stringify(
    match,
    null,
    2
  )}</pre>`;
});