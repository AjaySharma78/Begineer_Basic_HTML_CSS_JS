var toggle = document.getElementById("toggle");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let graph = document.querySelector("#ProductImg");
let content = document.querySelector("h1");
let details = document.querySelector("p");
let bg = document.querySelector(".navbox");

// for toggle menu in small screen
toggle.style.maxHeight = "0px";
function menu() {
    if (toggle.style.maxHeight == "0px") {
        toggle.style.maxHeight = "200px";
    }
    else {
        toggle.style.maxHeight = "0px";
    }

}
// on scroll add & remove bg-color in nav bar
window.addEventListener("scroll", () => {
    if (scrollY >= 100) { bg.classList.add("bg") }
    else {
        bg.classList.remove("bg")
    };
});

// on click open tab in top with  scroll
btn1.addEventListener('click', () => {
    window.scrollTo(0, 0);
    graph.src = "https://images.pexels.com/photos/2747793/pexels-photo-2747793.jpeg?auto=compress&cs=tinysrgb&w=600";
    content.innerText = "Harley-Davidson";
    details.innerText = "Harley-Davidson, Inc. is an American motorcycle manufacturer headquartered in Milwaukee, Wisconsin, United States. Founded in 1903, it is one of two major American motorcycle manufacturers to survive the Great Depression along with its historical rival, Indian Motorcycles. "
});

btn2.addEventListener('click', () => {
    window.scrollTo(0, 0);
    graph.src = "https://images.pexels.com/photos/5365740/pexels-photo-5365740.jpeg?auto=compress&cs=tinysrgb&w=600";
    content.innerText = "Kawasaki Ninja";
    details.innerText = "The Kawasaki Ninja is a name given to several series of Kawasaki sport bikes that started with the 1984 GPZ900R. Kawasaki Heavy Industries trademarked a version of the word Ninja in the form of a wordmark, a stylised script, for use on !motorcycles and spare parts thereof!.";
});
btn3.addEventListener('click', () => {
    window.scrollTo(0, 0);
    graph.src = "https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=600";
    content.innerText = "Bicycle";
    details.innerText = "A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.";
});
btn4.addEventListener('click', () => {
    window.scrollTo(0, 0);
    graph.src = "../pexels-mohsan-ali-mirza-2377893.jpg";
    content.innerText = "KTM";
    details.innerText = "KTM AG (Kraftfahrzeug Trunkenpolz Mattighofen, formerly KTM Sportmotorcycle AG[4][5]) is an Austrian motorcycle, bicycle and sports car manufacturer owned by Pierer Mobility AG & Indian manufacturer Bajaj Auto International Holdings BV. It was formed in 1992 but traces its foundation to as early as 1934. Today, KTM AG is the parent company of the KTM Group, consisting of a number of motorcycle brands.";
});
btn5.addEventListener('click', () => {
    window.scrollTo(0, 0);
    graph.src = "https://images.pexels.com/photos/7363677/pexels-photo-7363677.jpeg?auto=compress&cs=tinysrgb&w=600";
    content.innerText = "MOMO";
    details.innerText = "As for the Himalayan momo, the dish is believed to have spread to Nepal along with the influx of the Tibetan diaspora. Since this dish was initially popular among the Newar community of the Kathmandu Valley of Nepal, one prevalent belief is that travelling Nepali Newar merchants took the recipe of momo from Tibet where the Nepali Newar Merchants used to go to trade and brought it back home to Nepal.[9] In Tibet, the filling of the dish was typically meat, such as yak and occasionally potatoes and cheese. However, after arriving in the Indo-Gangetic Plains, the momo was made vegetarian in the modern era to feed the large population of vegetarian Hindus.[10] Unproven, but substantiated by the dates and references to momo in colloquial references, the civil war in Nepal pushed out the Nepali diaspora to seek a livelihood in India, which further increased to the prevalence of Himalayan style momo in the southern half of India. "
});

btn6.addEventListener('click', () => {
    window.scrollTo(0, 0);
    graph.src = "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600";
    content.innerText = "Hamburger";
    details.innerText = "The term burger can also be applied to the meat patty on its own, especially in the United Kingdom, where the term patty is rarely used, or the term can even refer simply to ground beef. Since the term hamburger usually implies beef, for clarity burger may be prefixed with the type of meat or meat substitute used, as in beef burger, turkey burger, bison burger, portobello burger, or veggie burger. In Australia and New Zealand, a piece of chicken breast on a bun is known as a chicken burger, which would generally not be considered to be a burger in the United States; where it would generally be called a chicken sandwich, but in Australian English and New Zealand English a sandwich requires sliced bread (not a bun), so it would not be considered a sandwich.[2][3]";
});
btn7.addEventListener('click', () => {
    window.scrollTo(0, 0);
    graph.src = "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600";
    content.innerText = "Pizza";
    details.innerText = "The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.[4] Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries.[5] It has become one of the most popular foods in the world and a common fast food item in Europe, North America and Australasia; available at pizzerias (restaurants specializing in pizza), restaurants offering Mediterranean cuisine, via pizza delivery, and as street food.[5] Various food companies sell ready-baked pizzas, which may be frozen, in grocery stores, to be reheated in a home oven";
});
btn8.addEventListener('click', () => {
    window.scrollTo(0, 0);
    graph.src = "https://images.pexels.com/photos/350343/pexels-photo-350343.jpeg?auto=compress&cs=tinysrgb&w=600";
    content.innerText = "Sandwich";
    details.innerText = "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.[1][2][3] The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.\n\nIn the 21st century there has been considerable debate over the precise definition of sandwich; and specifically whether a hot dog or open sandwich can be categorized as such. In the United States, the Department of Agriculture and the Food and Drug Administration are the responsible agencies. The USDA uses the definition, (at least 35% cooked meat and no more than 50% bread) for closed sandwiches, and (at least 50% cooked meat) for open sandwiches.[4] In Britain, the British Sandwich Association defines a sandwich as (any form of bread with a filling, generally assembled cold), a definition which includes wraps and bagels, but excludes dishes assembled and served hot, such as burgers.[5]";
});
