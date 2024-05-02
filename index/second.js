let Product = document.getElementById("ProductImg");
let Small = document.getElementsByClassName("Small-img");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let head = document.querySelector("h1");
let details = document.querySelector("p");
let bg = document.querySelector(".navbox");
var toggle = document.getElementById("toggle");


// toggle of menu in small screen
toggle.style.maxHeight = "0px";
function menu() {
    if (toggle.style.maxHeight == "0px") {
        toggle.style.maxHeight = "200px";
    }
    else {
        toggle.style.maxHeight = "0px";
    }

}
// add & remove bg-color in navbar
window.addEventListener("scroll", () => {
    if (scrollY >= 100) { bg.classList.add("bg") }
    else {
        bg.classList.remove("bg")
    };
});
// toggle between small img and big img
Small[0].onclick = function () {
    Product.src = Small[0].src;
}
Small[1].onclick = function () {
    Product.src = Small[1].src;
}
Small[2].onclick = function () {
    Product.src = Small[2].src;
}
Small[3].onclick = function () {
    Product.src = Small[3].src;
}

// on click open details in top of page with scroll
btn1.addEventListener('click', () => {
    window.scrollTo(0, 0);
    ProductImg.src = "https://images.pexels.com/photos/12442064/pexels-photo-12442064.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[0].src = "https://images.pexels.com/photos/12442064/pexels-photo-12442064.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[1].src = "https://images.pexels.com/photos/6134475/pexels-photo-6134475.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[2].src = "https://images.pexels.com/photos/11914539/pexels-photo-11914539.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[3].src = "https://images.pexels.com/photos/7996372/pexels-photo-7996372.jpeg?auto=compress&cs=tinysrgb&w=600";
    head.innerText = "KTM ";
    details.innerText = "KTM AG (Kraftfahrzeug Trunkenpolz Mattighofen, formerly KTM Sportmotorcycle AG[4][5]) is an Austrian motorcycle, bicycle and sports car manufacturer owned by Pierer Mobility AG & Indian manufacturer Bajaj Auto International Holdings BV. It was formed in 1992 but traces its foundation to as early as 1934. Today, KTM AG is the parent company of the KTM Group, consisting of a number of motorcycle brands.\n\nKTM is known for its off-road motorcycles (enduro, motocross and supermoto). Since the late 1990s, it has expanded into street motorcycle production and developing sports cars – namely the X-Bow. In 2015, KTM sold almost as many street as off-road bikes.[6]\n\nFrom 2012, KTM was the largest motorcycle manufacturer in Europe for four consecutive years.[7][8] Globally, the company is among the leading off-road motorcycle manufacturers.[9][10] In 2016, KTM sold 203,423 motor vehicles worldwide";
});
btn2.addEventListener('click', () => {
    window.scrollTo(0, 0);
    ProductImg.src = "https://images.pexels.com/photos/5365740/pexels-photo-5365740.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[0].src = "https://images.pexels.com/photos/5365740/pexels-photo-5365740.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[1].src = "https://images.unsplash.com/photo-1599819812605-4d9f4b2f7bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGthd2FzYWtpJTIwbmluamF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";
    Small[2].src = "https://images.unsplash.com/photo-1597497287565-a38cfaa4e762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80";
    Small[3].src = "https://images.unsplash.com/photo-1588620711286-e5e1f0244631?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
    head.innerText = "Kawasaki Ninja ";
    details.innerText = "The Kawasaki Ninja is a name given to several series of Kawasaki sport bikes that started with the 1984 GPZ900R. Kawasaki Heavy Industries trademarked a version of the word Ninja in the form of a wordmark, a stylised script, for use on 'motorcycles and spare parts thereof'.[1]";
});
btn3.addEventListener('click', () => {
    window.scrollTo(0, 0);
    ProductImg.src = "https://images.pexels.com/photos/2747793/pexels-photo-2747793.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[0].src = "https://images.pexels.com/photos/2747793/pexels-photo-2747793.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[1].src = "https://images.pexels.com/photos/6674465/pexels-photo-6674465.jpeg?cs=srgb&dl=pexels-luciano-rossitti-quevedo-6674465.jpg&fm=jpg";
    Small[2].src = "https://images.pexels.com/photos/9057446/pexels-photo-9057446.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[3].src = "https://images.pexels.com/photos/10959646/pexels-photo-10959646.jpeg?auto=compress&cs=tinysrgb&w=600";
    head.innerText = "Harley-Davidson";
    details.innerText = "Harley-Davidson, Inc. (H-D, or simply Harley) is an American motorcycle manufacturer headquartered in Milwaukee, Wisconsin, United States. Founded in 1903, it is one of two major American motorcycle manufacturers to survive the Great Depression along with its historical rival, Indian Motorcycles.[3] The company has survived numerous ownership arrangements, subsidiary arrangements, periods of poor economic health and product quality, and intense global competition[4] to become one of the world's largest motorcycle manufacturers and an iconic brand widely known for its loyal following. There are owner clubs and events worldwide, as well as a company-sponsored, brand-focused museum.\n\nHarley-Davidson is noted for a style of customization that gave rise to the chopper motorcycle style.[5] The company traditionally marketed heavyweight, air-cooled cruiser motorcycles with engine displacements greater than 700 cc, but it has broadened its offerings to include more contemporary VRSC (2002) and middle-weight Street (2015) platforms.";
});
btn4.addEventListener('click', () => {
    window.scrollTo(0, 0);
    ProductImg.src = "https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[0].src = "https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[1].src = "https://images.pexels.com/photos/93801/pexels-photo-93801.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[2].src = "https://images.pexels.com/photos/4542852/pexels-photo-4542852.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[3].src = "https://images.pexels.com/photos/4906464/pexels-photo-4906464.jpeg?auto=compress&cs=tinysrgb&w=600";
    head.innerText = "Bicycle";
    details.innerText = "A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.\n\nBicycles were introduced in the 19th century in Europe. By the early 21st century, more than 1 billion were in existence.[1][2][3] These numbers far exceed the number of cars, both in total and ranked by the number of individual models produced.[4][5][6] They are the principal means of transportation in many regions. They also provide a popular form of recreation, and have been adapted for use as children's toys, general fitness, military and police applications, courier services, bicycle racing, and bicycle stunts.\n\nThe basic shape and configuration of a typical upright or 'safety bicycle', has changed little since the first chain-driven model was developed around 1885.[7][8][9] However, many details have been improved, especially since the advent of modern materials and computer-aided design. These have allowed for a proliferation of specialized designs for many types of cycling.";
});
btn5.addEventListener('click', () => {
    window.scrollTo(0, 0);
    ProductImg.src = "https://images.pexels.com/photos/7363677/pexels-photo-7363677.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[0].src = "https://images.pexels.com/photos/7363677/pexels-photo-7363677.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[1].src = "https://images.pexels.com/photos/7363681/pexels-photo-7363681.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[2].src = "https://images.pexels.com/photos/7363680/pexels-photo-7363680.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[3].src = "https://images.pexels.com/photos/7363679/pexels-photo-7363679.jpeg?auto=compress&cs=tinysrgb&w=600";
    head.innerText = "MOMO";
    details.innerText = "Momo are bite-size dumplings made with a spoonful of stuffing wrapped in dough. Momo are usually steamed, though they are sometimes fried or steam-fried. Meat or vegetables fillings becomes succulent as it produces an intensively flavored broth sealed inside the wrappers. Variants of the dish developed later in Nepal after it became popular among Asians.[1] Eating dumplings on the first day of the new year was a widely spread custom in northern China. Written records show that dumplings became popular during the Southern and Northern dynasties (420–589 AD), the earliest unearthed real dumplings were found in Astana Cemetery dated between 499 AD and 640 AD.\n\nAs for the Himalayan momo, the dish is believed to have spread to Nepal along with the influx of the Tibetan diaspora. Since this dish was initially popular among the Newar community of the Kathmandu Valley of Nepal, one prevalent belief is that travelling Nepali Newar merchants took the recipe of momo from Tibet where the Nepali Newar Merchants used to go to trade and brought it back home to Nepal.[9] In Tibet, the filling of the dish was typically meat, such as yak and occasionally potatoes and cheese. However, after arriving in the Indo-Gangetic Plains, the momo was made vegetarian in the modern era to feed the large population of vegetarian Hindus.[10] Unproven, but substantiated by the dates and references to momo in colloquial references, the civil war in Nepal pushed out the Nepali diaspora to seek a livelihood in India, which further increased to the prevalence of Himalayan style momo in the southern half of India.\n\nMomo is a type of steamed dumpling with some form of filling, most commonly chicken (traditionally yak, but often chicken and goat) and it is originally from Tibet. Momo has become a delicacy in Nepal and Tibetan communities in Bhutan, as well as people of the Indian regions of Darjeeling, Ladakh, Sikkim, Assam, Uttarakhand, Himachal Pradesh and Arunachal Pradesh. In Pakistan, Gilgit-Baltistan region it is known as mamtoo.";
});
btn6.addEventListener('click', () => {
    window.scrollTo(0, 0);
    ProductImg.src = "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[0].src = "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[1].src = "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[2].src = "https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[3].src = "https://images.pexels.com/photos/2983103/pexels-photo-2983103.jpeg?auto=compress&cs=tinysrgb&w=600";
    head.innerText = "Hamburger";
    details.innerText = "A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis; condiments such as ketchup, mustard, mayonnaise, relish, or a 'special sauce', often a variation of Thousand Island dressing; and are frequently placed on sesame seed buns. A hamburger topped with cheese is called a cheeseburger.[1]\n\nThe term burger can also be applied to the meat patty on its own, especially in the United Kingdom, where the term patty is rarely used, or the term can even refer simply to ground beef. Since the term hamburger usually implies beef, for clarity burger may be prefixed with the type of meat or meat substitute used, as in beef burger, turkey burger, bison burger, portobello burger, or veggie burger. In Australia and New Zealand, a piece of chicken breast on a bun is known as a chicken burger, which would generally not be considered to be a burger in the United States; where it would generally be called a chicken sandwich, but in Australian English and New Zealand English a sandwich requires sliced bread (not a bun), so it would not be considered a sandwich.[2][3]\n\nHamburgers are typically sold at fast-food restaurants, diners, and specialty and high-end restaurants. There are many international and regional variations of hamburgers.";
});
btn7.addEventListener('click', () => {
    window.scrollTo(0, 0);
    ProductImg.src = "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[0].src = "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[1].src = "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[2].src = "https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[3].src = "https://images.pexels.com/photos/3343621/pexels-photo-3343621.jpeg?auto=compress&cs=tinysrgb&w=600";
    head.innerText = "Pizza ";
    details.innerText = "Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as various types of sausage, anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.[1] A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo.\n\nIn Italy, pizza served in a restaurant is presented unsliced, and is eaten with the use of a knife and fork.[2][3] In casual settings, however, it is cut into wedges to be eaten while held in the hand.\n\nThe term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.[4] Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries.[5] It has become one of the most popular foods in the world and a common fast food item in Europe, North America and Australasia; available at pizzerias (restaurants specializing in pizza), restaurants offering Mediterranean cuisine, via pizza delivery, and as street food.[5] Various food companies sell ready-baked pizzas, which may be frozen, in grocery stores, to be reheated in a home oven.\n\nIn 2017, the world pizza market was US$128 billion, and in the US it was $44 billion spread over 76,000 pizzerias.[6] Overall, 13% of the U.S. population aged 2 years and over consumed pizza on any given day.[7]\n\nThe Associazione Verace Pizza Napoletana (lit. True Neapolitan Pizza Association) is a non-profit organization founded in 1984 with headquarters in Naples that aims to promote traditional Neapolitan pizza.[8] In 2009, upon Italy's request, Neapolitan pizza was registered with the European Union as a Traditional Speciality Guaranteed dish,[9][10] and in 2017 the art of its making was included on UNESCO's list of intangible cultural heritage.[11]\n\nRaffaele Esposito is often considered to be the father of modern pizza";
});
btn8.addEventListener('click', () => {
    window.scrollTo(0, 0);
    ProductImg.src = "https://images.pexels.com/photos/350343/pexels-photo-350343.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[0].src = "https://images.pexels.com/photos/350343/pexels-photo-350343.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[1].src = "https://images.pexels.com/photos/1633572/pexels-photo-1633572.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[2].src = "https://images.pexels.com/photos/2161638/pexels-photo-2161638.jpeg?auto=compress&cs=tinysrgb&w=600";
    Small[3].src = "https://images.pexels.com/photos/824653/pexels-photo-824653.jpeg?auto=compress&cs=tinysrgb&w=600";
    head.innerText = "Sandwich";
    details.innerText = "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.[1][2][3] The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.\n\nIn the 21st century there has been considerable debate over the precise definition of sandwich; and specifically whether a hot dog or open sandwich can be categorized as such. In the United States, the Department of Agriculture and the Food and Drug Administration are the responsible agencies. The USDA uses the definition, 'at least 35% cooked meat and no more than 50% bread' for closed sandwiches, and 'at least 50% cooked meat' for open sandwiches.[4] In Britain, the British Sandwich Association defines a sandwich as 'any form of bread with a filling, generally assembled cold', a definition which includes wraps and bagels, but excludes dishes assembled and served hot, such as burgers.[5]\n\nSandwiches are a popular type of lunch food, taken to work, school, or picnics to be eaten as part of a packed lunch. The bread may be plain or be coated with condiments, such as mayonnaise or mustard, to enhance its flavour and texture. As well as being homemade, sandwiches are also widely sold in various retail outlets and can be served hot or cold.[6][7] There are both savoury sandwiches, such as deli meat sandwiches, and sweet sandwiches, such as a peanut butter and jelly sandwich.";
});
