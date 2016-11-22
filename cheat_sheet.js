
Coding Info

BASICS-------------------------------------------------------------------------

Numbers 1,2,3,etc
12

Strings are in single or double quote
'hello' '123'
//pass just a section of string:
var str = "Hello world!";
var res = str.substr(1, 4);
The result of res will be: 'ello'
//Search within a string:
string.search('character to search within quotes')

Arrays [ items separated by commas]

ie: array = ['me', 'you', 'her']

Hashes {items with key and value, ie key: value}
x = {name: 'jim', age: 12} //to create hash:
x['age'] = 13 // this is how you assign value to a hash.

To return the position(index of an item in an array, just use i not [i])

LOGIC---------------------------------------------------------------------------

less than <
greater than >
not equal !=
less than or equal to <=
greater than or equal to >=

An = assigns a value.  (ie var Array1 = 12)

For logic within statements, you must use "double characters"
==(equal to)
&&(AND logic)
||(OR logic)
! NOT

strict equality (or "triple equals" or "identity") using ===,

you can also just put an object itself.

++(add) --(subtract) increment or decrement

OBJECT FUNCTIONS---------------------------------------------------------------

.log (Used with console. places the output of previous task into the console)
console.log(xxx)

alert (Prints output into a browser allert popup.)
alert("Password is incorrect")

.replace(x,y) will replace first item with second

.search() searches within item

The RegExp constructor creates a regular expression object for matching text
with a pattern.

LOOPS--------------------------------------------------------------------------

For loop.
executes a bit of code an x number of times....

for(i = 0; i < ???.length; i++){
	'do something here...'
}

reversed loop.
for(i = ???.length -1; i >=0 ; i--){
	'do something here...'
}

While loop.
The while loop Loops can execute a block of code
as long as a specified condition is true.

while(count < 10) {
    console.log("looping away!");
    count++;
}

forEach =

JQUERY-------------------------------------------------------------------------

LINK: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

A "$" accesses JQUERY.

$(element).action()

Next to that is ( ) which selects the element you want to address

actions can be passing a function(), getting value *.val()*
appending *.append()*, etc.

Callback - is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Allows code to process a high number of requests without waiting for any function to return results.

THIS - A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode. The value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

Actions----

.click - actions a function when an html element is clicked. $('.something').click(function(){
	When clicked, code in here will happen
})

Selector-----

$("*") selects all elements
$("p.intro") selects all of <p> elements with class of intro
$("[href]") selects all href attributes
$(".xxx") selects a class
$("#xxx") selects a specific ID element

Example code for a simple calculator...

NOTES: parseInt converts a string into a number.  .click reacts to clicking on specified element.

$('.add').click(function(){
	x = parseInt($('.left-value').val()) + parseInt($('.right-value').val())
	alert("your value is " + x)
})


NODE----------------------------------------------------------------------------

Node.js
A software platform that is used to build scalable network applications. Node.js uses JavaScript as its scripting language, and achieves high throughput via non-blocking I/O and a single-threaded event loop.


express - Express
A web framework for Node.js applications.

(req) request - An HTTP request. A client submits an HTTP request message to a server, which returns a response. The request must use one of several request methods such as GET, POST, and so on.

(res) response - An HTTP response. A server returns an HTTP response message to the client. The response contains completion status information about the request and might also contain requested content in its message body.

GET - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect.

POST - The POST method requests that the server accept the entity enclosed in the request as a new subordinate of the web resource identified by the URI. The data POSTed might be, for example, an annotation for existing resources; a message for a bulletin board, newsgroup, mailing list, or comment thread; a block of data that is the result of submitting a web form to a data-handling process; or an item to add to a database.

Cat.update({'_id':update specific entry

Searching in strings requires /xxx/ instead of ''

.save saves the model into the db

.model defines the model for db

.exec

.connect

.send

.query

(err) - built in error message

ejs files = EJS (embedded javascript) combines data and a template to produce HTML.
JavaScript between <% %> is executed.

Example:

<ul>
<% for(var i=0; i<supplies.length; i++) {%>
   <li><%= supplies[i] %></li>
<% } %>
</ul>

MONGODB / Mongoose-------------------------------------------------------------

Object modeling
MongoDB has a flexible schema that allows for variability between different documents in the same collection. That flexibility can be very powerful, for example, as a database’s uses evolve over time. But that flexibility doesn’t mean that you need to forgo some safety checks like type and range checking.
Model a user by specifying its properties in a mongoose schema.
    var userSchema = new mongoose.Schema({
      name: {
        first: String,
        last: { type: String, trim: true }
      },
      age: { type: Number, min: 0 }
    });

GENERAL------------------------------------------------------------------------

API - Application programming interface.

Mongoose - cross-platform embedded web servers. The small size of the software enables any Internet-connected device to function as a web server.

Polymer------------------------------------------------------------------------
