// Closures

// A closure is a function that retains access to variables from its containing (enclosing) function's scope, even after the containing function has finished executing.

function father() {
  let name = "Ali";

  return function son() {
    console.log(name);
  };
}

father()();
