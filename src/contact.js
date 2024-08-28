import contactimage from './images/contact.jpg';

let ContactPageBuilder = (function() {
    let DivBuilder = (attribute, value) => 
        {
            let div = document.createElement("div");
            div.setAttribute(attribute, value);
            return div;
        }
    let TextBuilder = (type, content, className) => 
        {
            let heading = document.createElement(type);
            heading.textContent = content;
            if (className)
            {
                heading.className = className;
            }
            return heading;
        }
    let ImageBuilder = (src, alt, imgClass = "servingImage") =>
        {
            let img = document.createElement('img');
            img.src = src;
            img.alt = alt;
            img.className = imgClass;
            return img;
        }
    let detailsBuilder = () => 
    {
        let details = DivBuilder("class", "details");
        let ul = document.createElement("ul");
        let li1 = TextBuilder("li", "Name : Freya");
        let li2 = TextBuilder("li", "Location: 123 Owl Drive, Odinville, Maine");
        let li3 = TextBuilder("li", "Phone: +47 13-123456");
        let li4 = TextBuilder("li", "E-Mail: totallyARealAddress@ZeroDoubt@com");
        ul.append(li1, li2, li3, li4);
        details.appendChild(ul);
        return details;
    }
    let Build = () =>
    {
        let container = DivBuilder("class", "containerContact");
        let heading = TextBuilder("h1", "Contact Us!", "contactHeading");
        let details = detailsBuilder();
        let img = ImageBuilder(contactimage, "contact us image", "notused");
        img.setAttribute("width", "1000px");
        container.append(heading, details, img);
        return container;
    }
    return {Build};
})();

export default ContactPageBuilder;