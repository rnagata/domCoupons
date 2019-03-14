//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'
document.getElementById("disclaimer").innerHTML = finePrint;
//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.

document.getElementById("brand1").innerHTML = "Nabisco";
//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

document.getElementById("item1").innerHTML = "Cheeseburger Oreos";
//4. Target the div element with the id of 'price1' and update the content to $8.99.

document.getElementById("price1").innerHTML = "$8.99";
//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

document.getElementById("discount1").innerHTML = "Free fries with purchase!";
//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

var item2 = document.createElement("div");
item2.id = "item2";
item2.innerHTML = "Hendrick's Gin";
document.getElementById('brand2').appendChild(item2);
//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

var price2 = document.createElement('div');
price2.id = "price2";
price2.innerHTML = "$34.99";
document.getElementById('item2').appendChild(price2);
//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

var discount3 = document.createElement("BUTTON");
var discount3Text = document.createTextNode("50% OFF Axe body soap!");
discount3.appendChild(discount3Text);
document.getElementsByClassName("block3")[0].appendChild(discount3);
//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

var item3 = document.getElementsByClassName("item")[0].innerHTML = "Orange Chicken";
//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

var discount4 = document.createElement("BUTTON");
discount4.className = 'discount';
var discount4Text = document.createTextNode("Free T-shirt and fortune cookie with purchase!");
discount4.appendChild(discount4Text);
document.getElementsByClassName("block1")[1].appendChild(discount4);
//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

//console.log(document.getElementsByClassName('brand')[1].innerHTML);
document.getElementsByClassName('brand')[1].innerHTML = "Uniqlo";
//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

var hoodiePrice = document.getElementsByClassName('price')[1];
//console.log(document.getElementsByClassName('price')[1].innerHTML);
hoodiePrice.innerHTML = "$10,000";
//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

var headphonesBrand = document.createElement("DIV");
headphonesBrand.class = 'brand';
headphonesBrand.innerHTML = "Hifiman Shangri-La";
document.getElementsByClassName('block3')[1].appendChild(headphonesBrand);
//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

var headphonesItem = document.createElement("DIV");
headphonesItem.class = 'item';
headphonesItem.innerHTML = "Electronstatic Headphones";
document.getElementsByClassName('block3')[1].appendChild(headphonesItem);
//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

var headphonesPrice = document.createElement("DIV");
headphonesPrice.class = 'price';
headphonesPrice.innerHTML = "$18,000";
document.getElementsByClassName('block3')[1].appendChild(headphonesPrice);
//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

var headphonesButton = document.createElement("BUTTON");
headphonesButton.class = 'discount';
headphonesButton.innerHTML = "Free Barry Manilow CD with purchase!";
document.getElementsByClassName('block3')[1].appendChild(headphonesButton);
//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

//console.log(document.getElementsByClassName('brand')[2].innerHTML)
var unicornSlippersBrand = document.getElementsByClassName('brand')[2];
unicornSlippersBrand.innerHTML = "H&M";
var unicornSlippersItem = document.getElementsByClassName('item')[2];
unicornSlippersItem.innerHTML = "Unicorn-Head Slippers";
var unicornSlippersPrice = document.getElementsByClassName('price')[2];
unicornSlippersPrice.innerHTML = "$21.99";
var unicornSlippersButton = document.getElementsByClassName('discount')[2];
unicornSlippersButton.innerHTML = "Free knee-high tube socks with purchase!";


//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

var doritosBrand = document.getElementsByClassName('brand')[3];
doritosBrand.innerHTML = "Frito Lay";
var doritosItem = document.getElementsByClassName('item')[3];
doritosItem.innerHTML = "Poppin' Jalapeno Doritos";
var doritosPrice = document.getElementsByClassName('price')[3];
doritosPrice.innerHTML = "$7.77";
var doritosButton = document.getElementsByClassName('discount')[3];
doritosButton.innerHTML = "33% OFF any 6 pack Budweiser or Bud Light";

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

var pugBrand = document.getElementsByClassName('brand')[4];
pugBrand.innerHTML = "Any Dog Breeder";
var pugItem = document.getElementsByClassName('item')[4];
pugItem.innerHTML = "Baby Puggy";
var pugPrice = document.getElementsByClassName('price')[4];
pugPrice.innerHTML = "Priceless";
var pugButton = document.getElementsByClassName('discount')[4];
pugButton.innerHTML = "No Discounts. This cutie is worth every penny!";

//Final Boss 
//Create your own product for the last three sections.

//var customItemSection1 = document.getElementsByClassName('block 1')[3];
var customItemSection3 = document.getElementsByClassName('block 3')[3];

//Item 1
var customBrand1 = document.getElementsByClassName('brand')[5];
customBrand1.innerHTML = "CD Album";
var customItem1 = document.getElementsByClassName('item')[5];
customItem1.innerHTML = "Stadium Arcadium";
var customPrice1 = document.getElementsByClassName('price')[5];
customPrice1.innerHTML = "$35.99";
var customDiscount1 = document.getElementsByClassName('discount')[5];
customDiscount1.innerHTML = "Half-off if you know Flea's real name!";

//Item 2
var customItemSection2 = document.getElementsByClassName('block2')[3];
var customBrand2 = document.createElement("DIV");
customBrand2.class = 'brand';
customBrand2.innerHTML = "CD Album";
customItemSection2.appendChild(customBrand2);
var customItem2 = document.createElement("DIV");
customItem2.class = 'item';
customItem2.innerHTML = "BABYMETAL's Third Album";
customItemSection2.appendChild(customItem2);
var customPrice2 = document.createElement("DIV");
customPrice2.class = 'price';
customPrice2.innerHTML = "???";
customItemSection2.appendChild(customPrice2);
var customButton2 = document.createElement("BUTTON");
var customButton2Text = document.createTextNode("W.I.D");
customButton2.appendChild(customButton2Text);
customItemSection2.appendChild(customButton2);

//Item 3
var customItemSection3 = document.getElementsByClassName('block3')[3];
var customBrand3 = document.createElement("DIV");
customBrand3.class = 'brand';
customBrand3.innerHTML = "Car";
customItemSection3.appendChild(customBrand3);
var customItem3 = document.createElement("DIV");
customItem3.class = 'item';
customItem3.innerHTML = "2013 Civic";
customItemSection3.appendChild(customItem3);
var customPrice3 = document.createElement("DIV");
customPrice3.class = 'price';
customPrice3.innerHTML = "$10,000";
customItemSection3.appendChild(customPrice3);
var customButton3 = document.createElement("BUTTON");
var customButton3Text = document.createTextNode("Used vehicles are 50% off");
customButton3.appendChild(customButton3Text);
customItemSection3.appendChild(customButton3);
