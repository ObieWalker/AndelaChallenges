const assert  = require('chai').assert;
const myApp = require('../src/main.js');

describe("Words", () =>{

	describe("handle valid input", () =>{
		it("should return { i: 2, go: 3, dey: 2, come: 1, soon: 1 } as an input for 'I go dey come i go dey go soon'", function(){
     		assert.notStrictEqual(myApp.words("I go dey come i go dey go soon"), { i: 2, go: 3, dey: 2, come: 1, soon: 1 });
		});
	})

	describe("handle invalid input", () =>{
		it("should return 'please input a string' for argument 1234", function(){
			assert.equal(myApp.words(1234), 'please input a string');
		});
	})

	describe("handle null input", () => {
		it("should return 'please input a string' for a null input", function(){
			assert.equal(myApp.words(), 'please input a string');
		});
	})

	describe("handle same word with different case", () => {
		it("should return { there: 2 } for input of 'There there'", function(){
			assert.notStrictEqual(myApp.words("There there"), { there: 2 });
		});
	})

	describe("handle excess white space", () =>{
		it("should return for input of { one: 2, there: 1, was: 2 } for an input of 'one there was was   one'", function(){
			assert.notStrictEqual(myApp.words("one there was was   one"), { one: 2, there: 1, was: 2 });
		});
	})

	describe("handle empty string", () => {
		it("should return for input of 'please input a string' for an input of ''", function(){
			assert.equal(myApp.words(""), 'please input a string');
		});
	})

})

