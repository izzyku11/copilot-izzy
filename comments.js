// Create web server application
// 1. Create a web server object
// 2. Create a request handler function
// 3. Assign the request handler function to the web server object
// 4. Start the web server listening on a port
// 5. Create a function to handle requests
// 6. Parse the request string to determine the request type
// 7. Create a database connection
// 8. Create a query string to select all comments from the database
// 9. Execute the query
// 10. Create an array to store the comments
// 11. Create a function to process the rows returned from the database
// 12. Push each comment into the comments array
// 13. Create a function to process the comments array
// 14. Create a JSON object to hold the comments
// 15. Convert the comments array to a JSON string
// 16. Send the JSON string back to the client

// 1. Create a web server object
var http = require('http');

// 2. Create a request handler function
var requestHandler = function (request, response) {
	// 6. Parse the request string to determine the request type
	var path = request.url;
	console.log(path);
	
	// 13. Create a function to process the comments array
	var processComments = function (comments) {
		// 14. Create a JSON object to hold the comments
		var commentsObject = {
			comments: comments
		};
		// 15. Convert the comments array to a JSON string
		var commentsString = JSON.stringify(commentsObject);
		// 16. Send the JSON string back to the client
		response.end(commentsString);
	};
	
	// 7. Create a database connection
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'comments'
	});
	
	// 8. Create a query string to select all comments from the database
	var query = 'SELECT * FROM comments';
	
	// 9. Execute the query
	connection.query(query, function (error, rows) {
		if (error) {
			console.log(error);
		}
		else {
			// 10. Create an array to store the comments
			var comments