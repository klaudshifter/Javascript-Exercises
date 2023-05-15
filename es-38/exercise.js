function printName() {
    const helloName = "Hello John";
  
    function inner() {
      console.log(helloName);
    }
  
    return inner;
  }
  
  const innerFunc = printName();
  setTimeout(innerFunc, 1000);  //which will delay the output 1 second