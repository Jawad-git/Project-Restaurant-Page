let HomePageBuilder = (function() {
let DivBuilder = (attribute, value) => 
    {
    let div = document.createElement("div");
    div.setAttribute(attribute, value);
    return div;
    }
let TextBuilder = (type, content) => 
        {
        let heading = document.createElement(type);
        heading.textContent = content;
        return heading;
        }
let WelcomeBuilder = function ()
{
    let welcome = DivBuilder("class", "welcome");
    let welcomingHeader = TextBuilder("h1", "Welcome to Odin Restaurant!");
    let welcomingsubHeadeer = TextBuilder("h3", "Fresh Nordic foods just for you");
    welcome.append(welcomingHeader, welcomingsubHeadeer);
    return welcome;
}
let ReviewBuilder = function ()
{
    let review = DivBuilder("class", "review");
    let reviewParagraph = TextBuilder("p", "It was phenomenal, It's the first time I got to enjoy authentic" + 
                                        "Norwegian food outside Norway, I will definitely be coming back!");
    let reviewAuthor = TextBuilder("h5", "- Totally a real Norwegian");
    review.append(reviewParagraph, reviewAuthor);
    return review;
}
let OpeningTimesBuilder = function ()
{
    let openingTimes = DivBuilder("class", "openingTimes");
    let ul = document.createElement("ul");
    let Mondayli = TextBuilder("li", "Monday: 8AM - 8PM")
    let Tuesdayli = TextBuilder("li", "Tuesday: 8AM - 8PM")
    let Wednesdayli = TextBuilder("li", "Wednesday: 8AM - 8PM")
    let Thursdayli = TextBuilder("li", "Thursday: 8AM - 8PM")
    let Fridayli = TextBuilder("li", "Friday: 8AM - 12PM")
    let Satudayli = TextBuilder("li", "Saturday: 6AM - 12PM")
    let Sundayli = TextBuilder("li", "Sunday: 6AM - 12PM")
    ul.append(Mondayli, Tuesdayli, Wednesdayli, Thursdayli, Fridayli, Satudayli, Sundayli);
    openingTimes.appendChild(ul);
    return openingTimes;
}
let LocationBuilder = function ()
{
    let location = DivBuilder("class", "location");
    let locationParagraph = TextBuilder("p", "123 Owl Drive, Odinville, Maine");
    location.appendChild(locationParagraph);
    return location;
}

let Build = function()
{
    let container = DivBuilder("id", "containerWelcome");
    let welcome = WelcomeBuilder();
    let review = ReviewBuilder();
    let openingTimes = OpeningTimesBuilder();
    let location = LocationBuilder();
    container.append(welcome, review, openingTimes,  location);
    return container;
}
return {Build};
})();

export default HomePageBuilder;