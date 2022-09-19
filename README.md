# Custom hooks

## What is it?

- Just regular functions in javascript. 
- Contains stateful logic. 

##  Why do we need it?

- To outsource the stateful logic to another function/file or module. 
- Only logic becomes reusable and not the actual underlying states. 
- The stateful logic is just piece of code which depends on other hooks.
  
## How to use it? (Rules for using this hook)

- Hook can only be used from within Component function or from another hooks. 
- Each hook should go in to separate file. Hook file name can be anything. 
- function name should start wtih `use` keyword. For example useHttp, useState, useSelector etc.
- Hook function can have input. 
- It can return any object, array. Anything. 

  


