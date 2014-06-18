var async = require('async');

function doSomething(log,callback) {
	setTimeout(function () {
		console.log(log);
		callback();
	}, 2000);
}

// In Series example
// async.series [ Array of methods that accept callback ], function() { final callback }

var asyncMethods = [];
asyncMethods.push(function (p_callback) {
	doSomething("Get a user!", p_callback);
});
asyncMethods.push(function (p_callback) {
	doSomething("Add Elliot as a friend", p_callback);
});
asyncMethods.push(function (p_callback) {
	doSomething("Follow CodeFellows", p_callback);
});
asyncMethods.push(function (p_callback) {
	doSomething("Save changes to the DB", p_callback);
});

// async.series(asyncMethods, function() {
// 	console.log("All done");
// });

/*
doSomething("Get a user!", function() {
	doSomething("Add Elliot as a friend", function() {
		doSomething("Follow CodeFellows", function() {
			doSomething("Save changes to the DB", function() {
				console.log("All done");
			})
		})
	})
}); */

// Parallel example

var tweets = ["1", "2", "3", "4", "5"];
for (var i = 0; i < tweets.length; i ++) {
	var id = tweets[i];
	(function (id) {
		doSomething("tweet" + id, function() {
			console.log("Tweet ", id, " is done");
		});
	})(id)
}