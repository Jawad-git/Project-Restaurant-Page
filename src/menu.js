import rokeLaksImage from './images/rokelaks.jpg';
import brunedeKartoflerImage from './images/Caramelized Potatoes.jpg';
import cocioImage from './images/Cocio.jpg';
let MenuPageBuilder = (function ()
{
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
    let DishBuilder = (imgSrc, alt, name, desc, price) =>
    {
        let dish = DivBuilder("class", "dish");
        let img = ImageBuilder(imgSrc, alt);
        let dishHeader = TextBuilder("h3", name, "servingName");
        let dishDescription = TextBuilder("p", desc, "description");
        let dishPrice = TextBuilder("h5", price, "price");
        dish.append(img, dishHeader, dishDescription, dishPrice);
        return dish;
    }
    let MainCoursesBuilder = () =>
    {
        let mainCourses = DivBuilder("class", "mainCourses");
        let Heading = TextBuilder("h1", "Main Courses", "servingHeader");
        let foodContainer = DivBuilder("class", "displayFood");
        for (let i = 0; i < 6; i++)
        {
            let dish = DishBuilder(rokeLaksImage, "image of rokelaks - smoked salmon",
                "Røkelaks - Smoked Salmon", "Røkelaks is a Norwegian classic and our flagship dish, it is " +
                + "typically a fillet that has been cured and hot or cold smoked", "$9.99");
                foodContainer.appendChild(dish);
        }
        mainCourses.append(Heading, foodContainer);
        return mainCourses;
    }
    let SideDishesBuilder = () =>
        {
            let sideDishes = DivBuilder("class", "sideDishes");
            let Heading = TextBuilder("h1", "Side Dishes", "servingHeader");
            let foodContainer = DivBuilder("class", "displayFood");
            for (let i = 0; i < 4; i++)
            {
                let dish = DishBuilder(brunedeKartoflerImage, "image of Caramelized Potatoes",
                    "Brunede Kartofler - Caramlized Potatoes", "Traditionally associated with Christmastime, brunede kartofler " +
                    + "(lit. caramelized potatoes) is a simple, yet immensely flavorful Danish dish", "$4.99");
                    foodContainer.appendChild(dish);
            }
            sideDishes.append(Heading, foodContainer);
            return sideDishes;
        }
    let BeveragesBuilder = () =>
        {
            let beverages = DivBuilder("class", "beverages");
            let Heading = TextBuilder("h1", "Beverages", "servingHeader");
            let foodContainer = DivBuilder("class", "displayFood");
            for (let i = 0; i < 3; i++)
            {
                let dish = DishBuilder(cocioImage, "Image Danish chocolate milk - Cocio",
                    "Brunede Kartofler - Caramlized Potatoes", "Cocio is a classic Danish chocolate milk, the unique" +
                    + " heating process gives the milk the typical, lightly caramelized flavor.", "$3.99");
                    foodContainer.appendChild(dish);
            }
            beverages.append(Heading, foodContainer);
            return beverages;
        }
    let Build = () =>
    {
        let containerMenu = DivBuilder("class", "containerMenu");
        let menu = DivBuilder("class", "menu");
        let mainCourses = MainCoursesBuilder();
        let sideDishes = SideDishesBuilder();
        let beverages = BeveragesBuilder();
        menu.append(mainCourses, sideDishes, beverages);
        containerMenu.appendChild(menu);
        return containerMenu;
    }
    return {Build};
})();

export default MenuPageBuilder;