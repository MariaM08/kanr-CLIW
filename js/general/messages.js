var footerMessagesJson = ["Did you know clouds fly higher during the day than the night?",
"Did you know the Eiffel Tower is over 300m (984 ft) tall?",
"Did you know acrophobia is the fear of heights?",
"Did you know instant coffee was invented in 1901?",
"Did you know Isaac Newton invented the cat door?",
"Did you know the lie detector was invented in 1921?",
"Did you know volleyball was invented in 1895?",
"Did you know Shakespeare invented the words 'assassination' and 'bump'?",
"Did you know there are no clocks in Las Vegas gambling casinos?",
"Did you know months that begin on a Sunday will always have a “Friday the 13th”?",
"Did you know the harder you concentrate on falling asleep, the less likely to fall asleep?",
"Did you know human birth control pills work on gorillas?",
"Women have twice as many pain receptors on their body than men, but a much higher pain tolerance.",
"Did you know on Jupiter and Saturn it rains diamonds?",
"Did you know there are various ways of hiding DOM elements: completely, semantically, or visually?",
"Life is amazing because it has animations."
];

var headerMessagesJson = ["You can change object's size and properties from 'Object Properties tab'.",
"Clicking on Create new object from 'Create Object' tab will allow you to create a new object.",
"You can choose as many sides to the new object as you want, but it might get tricky.",
"You can only delete the current layer you're working on.",
"'Play Animation' button from the menu will give you a full preview of the animation.",
"Once you create an object you can no longer change the number of sides of it's form.",
"Always check which layer you're currently working on in the 'Layers' tab.",
"You can only delete the current layer you're working on.",
"The more layers you have, the harder will be to manage the animation.",
"If you change the color of the object at a certain time it won't change for the whole animation.",
"The properties on 'Animation Properties' tab will apply to full animation.",
"You can export your animation at any time using the 'Export' button on the menu.",
"You can only delete the current layer you're working on.",
"If you close the browser, all your work will be lost.",
"If you close the browser, all your work will be lost.",
"Click on the logo, do it, I know you want to :)"
];

let repeat = setInterval(function(){
    let number = Math.floor(Math.random() *  headerMessagesJson.length);
    document.getElementById('headerMessage').innerHTML = headerMessages[number];
}, 15000);

repeat = setInterval(function(){
    let number = Math.floor(Math.random() *  footerMessagesJson.length);
    document.getElementById('footerMessage').innerHTML = footerMessagesJson[number];
}, 8000);

function changeHeaderMessage() {
    let number = Math.floor(Math.random() *  headerMessagesJson.length);
    document.getElementById("headerMessage").innerHTML = headerMessagesJson[number];
}