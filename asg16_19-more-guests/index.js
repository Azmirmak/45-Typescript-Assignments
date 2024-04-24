//Assignment #16 : More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guestList = ["Hamza", "Inam", "Noman", "Ali", "Zia"];
let i = 0;
while (i < guestList.length) {
    console.log(`Hello ${guestList[i]}! You are invited for dinner this Sunday.`);
    i++;
}
;
console.log(`${guestList[2]} won't be able to attend the dinner.`);
guestList[2] = "Dany";
let j = 0;
while (j < guestList.length) {
    console.log(` Hello ${guestList[j]}! You are invited for dinner this Sunday.`);
    j++;
}
;
console.log("Hey guys I found a bigger table for dinner, so we have more friends to join.");
guestList.push("Suhaib");
guestList.splice(2, 0, "Babar");
guestList.unshift("Wasif");
let k = 0;
while (k < guestList.length) {
    console.log(` Hello ${guestList[k]}! You are invited for dinner this Sunday.`);
    k++;
}
;
//Assignment #19:
let number = guestList.length;
console.log(`${number} guests are invited to dinner.`);
export {};
