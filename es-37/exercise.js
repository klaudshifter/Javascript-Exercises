function printName() {
    const helloName = "Hello John";
  
    function inner() {
      return helloName;
    }
  
    return inner;
  }
  
  const innerFunc = printName();
  console.log(innerFunc());
