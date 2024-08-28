import './styles.css';
import homeBuilder from "./home.js";
import menuBuilder from "./menu.js";
import contactBuilder from "./contact.js";
let WebDisplayer = (function(){
    let homePage = homeBuilder.Build();
    let menuPage = menuBuilder.Build();
    let contactPage = contactBuilder.Build();
    let initialize = () =>
    {
        // set up event listeners on the buttons.
        let displayPage = document.getElementById("content");
        document.getElementById("home").addEventListener("click", () =>
        {
            displayPage.innerHTML = "";
            displayPage.append(homePage);
        });
        document.getElementById("menu").addEventListener("click", () =>
        {
            displayPage.innerHTML = "";
            displayPage.append(menuPage);
        });        
        document.getElementById("contact").addEventListener("click", () =>
        {
            displayPage.innerHTML = "";
            displayPage.append(contactPage);
        });
        // initially, Display the homepage
        displayPage.append(homePage);        
    }
    return {initialize};
})();

WebDisplayer.initialize();