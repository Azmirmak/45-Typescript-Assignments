//Assignment #32 : Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let current_users = ["John", "Elen", "Michell", "Ben", "Josh"]; 

let new_users = ["Zack", "john", "ELEN", "Ben", "Wick"];

new_users.forEach(new_each_user => {
    let condition = current_users.some(current_some_users => new_each_user.toLowerCase() === current_some_users.toLowerCase());

    if(condition){
        console.log("Enter a new user name");
    }else{
        console.log(`The username ${new_each_user} is available.`);
    }
})