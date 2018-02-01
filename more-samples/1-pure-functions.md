## Pure Functions
A pure function must meet these 3 criteria: 
1. The same arguments will ALWAYS produce the same return value.  
2. It will NEVER modify anything outside of it's lexical scope (ie. defined outside it's curly braces, anything it needs is passed in as an argument).  
        * With one sort-of exception: a method can modify it's object's properties.  
3. It will return the results of it's logic as a new object/list/number/...  To make use of a pure function you must capture the returned value in a variable outside of the function's scope.  

An important concept for understanding why you use pure functions is __side effects__.  
* SIDE EFFECT: The modification of variables in one scope by code in a different scope.  

Side effects are caused by _impure functions_ that reach outside of their scope to modify variables.  When this happens you can get mysterious **runtime errors** when a value is no longer what you expect it to be because some arbitrary process has changed it.

Avoiding side effects entirely in full applications is a larger discussion and relies on __immutable data flow__.  This is an advanced design paradigm and requires a solid understanding of functional programming, so for now just do your best.

Below is a pure function for division.  This function will be used through the rest of **testing 101** so take the time you need to understand it.
```javascript
function division(a, b) {
	var result = 0000;
	result = a / b
	return result;
};
```

Here are some counter-examples of pure functions:
```javascript
var result;
var a; 
var b;

function division(a, b) {
	result = a / b;
};

function division() {
	var result = 0000;
	result = a / b;
	return result;
};

function division(a, b) {
	var result = 0000;
	// logic with a, b
	return result;
};
```

___

[A good read on pure functions](https://www.sitepoint.com/an-introduction-to-reasonably-pure-functional-programming/)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>