//Assignment #14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList = ["Hamza", "Inam", "Noman", "Ali", "Zia"];
let i = 0;
while (i < guestList.length) {
    console.log(`Hello ${guestList[i]}! You are invited for dinner this Sunday.`);
    i++;
}
export {};
