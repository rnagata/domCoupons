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
hoodiePrice.innerHTML = "10,000";
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

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

//Final Boss 
//Create your own product for the last three sections.
