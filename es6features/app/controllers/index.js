function arrayHelperMap(e) {
	var array1 = ['blue','green','red'];

 	Ti.API.info('-----input------');
	array1.map(function(element) {
	  Ti.API.info(element);
	});
	
	Ti.API.info('-----output------');
	array1.map(function(element) {
	  Ti.API.info(element.toUpperCase());
	});
}

function arrayHelperFilter(e) {
	var array1 = ['1','40','50', '100', '123'];

	Ti.API.info('-----Arrow helper - filter------');
	Ti.API.info('Array: ', array1);
	
	var filteredValues = array1.filter(lessThan20);
	Ti.API.info('Filterd Array: ', filteredValues);
	
	function lessThan20(val)
	{
		return val<=50;
	}
}

function arrayHelperFind(e) {

	var people = [
		{name:'Jack',age:20},
		{name:'Kondal', age:33},
		{name:'Ann', age:10},
		{name:'John', age:45}
	];
	
	Ti.API.info('people array: ', people);
	
	var firstTeen = people.find(teenager);
	Ti.API.info('First Teenager: ', firstTeen.name);
	
	function teenager(person)
	{
		return person.age < 30 && person.age>=10;
	}
}


function arrayHelperEvery(e) {

	var people = [
		{name:'Jack',age:20},
		{name:'Kondal', age:33},
		{name:'Ann', age:10},
		{name:'John', age:45}
	];
	
	Ti.API.info('people array: ', people);
	
	var isEveryTeen = people.every(teenager);
	Ti.API.info('Find if person.age < 50 && person.age>=10: ', isEveryTeen);
	
	function teenager(person)
	{
		return person.age < 50 && person.age>=10;
	}
}


function arrayHelperForEach(e) {
	var array1 = ['blue','green','red'];

	Ti.API.info('-----forEach------');
	array1.forEach(function(element) {
	  Ti.API.info(element);
	});
}


$.index.open();


// function test3()
// {
	// let x;
	// {
		// //okay, block scoped name
		// const x = "hello buddy!";
// 		
		// //compiler will fail! as we can't change!
		// x = "let me change!";
	// }
// 	
	// //compiler will fail!, since we already defined x
	// let x = "inner";
// }


function constVariablesTest()
{
	var x =1
	let y =2
	const z=3
	{
		var x = 100;
		let y = 200;
		const z = 300;
		 Ti.API.info('x in block scope is', x);
		 Ti.API.info('y in block scope is', y);
		 Ti.API.info('z in block scope is', z);
	}
	Ti.API.info('x in block scope is', x);
	Ti.API.info('y in block scope is', y);
	Ti.API.info('z in block scope is', z);
}

function doClick2 (argument) {
  var app = new Application();

	app.open((text) => {
    alert(text);
	});
}




class Application {
        
    constructor(cb) { 
        this.window = Ti.UI.createWindow({
            backgroundColor: '#fff'
        });

        var btn = Ti.UI.createButton({
            title: 'Trigger'
        });

        btn.addEventListener('click', function() {
            Ti.API.info('Hello world!');
        });

        this.window.add(btn);
    }
    
    open(cb) {
        this.window.open();
        cb('ES6 rocks!');
    }
}

function arrayHelperSome() 
{

//arrow function - some
var people = [
	{name:'jack', age:33},
	{name:'Miachel', age:45},
	{name:'Rady', age:25}
];

function teenager(person)
{
	return person.age > 10 && person.age < 20;
}

var thereAreTeens = people.some(teenager);
Ti.API.info('There are teenagers: ', thereAreTeens);
}

//Simple arrow  functions
function arrowFunctions() 
{
	//Arrow functions
	var array= [1, 2, 3, 4];
	const sum = (acc, value) => acc + value
	const product = (acc, value) => acc * value
	
	var sumOfArrayElements = array.reduce(sum, 0);
	var productOfArrowElements = array.reduce(product, 0);
	
	Ti.API.info('sum of Array Elements: ', sumOfArrayElements);
	Ti.API.info('productOfArrowElements: ', productOfArrowElements);
	
	//Inline arrow functions
	var sumofArrayElements2 = array.reduce((acc, value) => acc+value, 0);
	var productOfArrowElements2 = array.reduce((acc, value) => acc * value, 1);
	
	Ti.API.info('sum of Array Elements2: ', sumofArrayElements2);
	Ti.API.info('productOfArrowElements2: ', productOfArrowElements2);
	
	//complex arrow functions
	const sum3 = (acc, value) =>
	{
		var result = acc + value;
		result = result*3;
		return result;
	}
	var sum3ofArrayElements = array.reduce(sum3, 0);
	Ti.API.info('sum3 of Array Elements: ', sum3ofArrayElements);
}

function classesTest()
{
		//classes
	class Point 
	{
		constructor(x, y)
		{
			this.x = x;
			this.y = y;
		}
		
		toString()
		{
			 Ti.API.info('x=' + this.x + ' y=' +this.y)
		}
	}
	
	class ColorPoint extends Point
	{
		constructor(x, y, color)
		{
			super(x,y);
			this.color = color;
		}
		
		toString()
		{
			 Ti.API.info('x=' + this.x + ' y=' +this.y + ' color='+ this.color)
		}
		
		static default()
		{
			return new ColorPoint(1,2,'blue');
		}
	}
		new Point(5, 10).toString();
		new ColorPoint(5, 10, 'green').toString();
		ColorPoint.default().toString();
	
}

function enhancedObjectLiterals()
{
	const color = 'red';
	const point = {
		x:5,
		y:10,
		color,
		toString()
		{
			return 'x='+ this.x + ' y='+ this.y + ' color='+ this.color;
		},
		['prop_' + 42] : 42	
	};
	
	Ti.API.info('The point is: '+ point);
	Ti.API.info('The dynamic propery: '+ point.prop_42);
	Ti.API.info('The  propery: '+ point.color);
	Ti.API.info('The  propery: '+ point.x);
}

function templateStrings()
{
	function hello(firstName, lastName) 
	{
  		return `Good morning ${firstName} ${lastName}! How are you?`
	}

Ti.API.info(hello('Kondal', 'Kolipaka'))
}

//Default function arguments
function defaultFunctionArgs()
{
	function sort(arr=[], order='ascending')
	{
		//some logic
		console.log('sort the array: ', arr, order);
	}
	
	sort([1, 7,3, 5, 25]);
	sort([1, 7,3, 5, 25], 'descending');
}

//Rest and spread operators
function restnSpreadOperators()
{
	var colors = ['red','blue','green'];
	
	//spread operator
	var copyofcolors = [...colors];
	
	console.log(colors);
	console.log(copyofcolors);
	console.log(colors === copyofcolors);
	
	
	//merge arrays
	var colors2 = ['yellow', 'pink'];
	var mergedColors = [...colors, ...colors2];
	console.log(mergedColors);
	
	//rest operator
	function printColors(first, second, third, ...others) //reverse to Java
	{
		console.log('first:'+ first, ' second:'+ second, ' third:'+ third, " others: "+ others);
	}
	
	printColors('red', 'green', 'blue','pink','black','white');
}


//Destructing of arry
function destructureArray()
{
	function print1([first, second])
	{
		console.log('first is:'+ first, " second is:"+ second);
	}
	
	function print2([,second,,fourth])
	{
		console.log('second is:'+ second, " fourth is:"+ fourth);
	}
	
	var elements = [1, 2, 3, 4];
	print1(elements);
	print2(elements);
	
	
	//destructing of Object
	var emply = {
		name: 'Jack',
		lastName: 'smith',
		age: 33,
		children: 2,
		profession: 'teacher'
	}
	
	function printBasic({name,age, profession})
	{
		console.log('Name: '+ name, " Age:"+ age, " Profession:"+ profession);
	}
	
	printBasic(emply);
}

//Promise
function implementPromise()
{
	function asyncfunc()
	{
		return new promise((resolve, reject) => 
		{
			setTimeout(() => {
				const result = Math.random();
				result > 0.5 ? resolve(result) : reject("Opps..can't calculate");
			}, 1);
		});
	}
	
	for (let x =0; x< 10; x++)
	{
		asyncfunc()
		.then(result => console.log('result is: '+ result))
		.catch(result => console.log('error is:' + result))
	}
}


//multiline strings
function multilineStrings()
{
	var es5 = 'This is how we use to define\n\t'
	+ 'in the ES5 javascript, now we have much easier\n\t'
	+ 'approach to define the mult-line texts';
	
	
	var es6 = `This is new ES6 muti-line text
		feature, isn't cool. we just need to 
		use the backsticks!`;
		
	console.log(es5);
	console.log(es6);
		
}

function proxyFunction()
{
	//target object
	let target = {
    		foo: "Welcome, foo"
	}
	
	//proxy
	let proxy = new Proxy(target, {
	   	//handler
	    get (receiver, name) {
	        return name in receiver ? receiver[name] : `Hello, ${name}`
	    }
	})
	proxy.foo   === "Welcome, foo"
	proxy.world === "Hello, world"
}


function proxyFunction2()
{
	const target = {
		a: 1,
		b: 2,
		c: 3
	}
	
	const handler = {
		get: function(target, property) {
			return property in target ? target[property] : `Property '${property}' Not available`;
		}
	}
	
	var proxy = new Proxy(target, handler);
	console.log(proxy.a);
	console.log(proxy.b);
	console.log(proxy.c);
	console.log(proxy.d);
	
}



