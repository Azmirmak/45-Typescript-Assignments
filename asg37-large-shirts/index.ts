// Assignment #37 : Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size : string = "Large", msg : string = "I Love JavaScript"){
    console.log(`This size of the shirt is "${size}" and the message to be printed is "${msg}".`);
}
make_shirt();
make_shirt("Medium",);
make_shirt("Small",);