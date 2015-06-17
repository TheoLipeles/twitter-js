// Required files
var _ = require('underscore');

var data = [];

var add = function (name, text) {
<<<<<<< HEAD
  data.push({ name: name, text: text, id: new Buffer(text)});
=======
	var id = generateId(name, text);
	data.push({ name: name, text: text , id:id });
>>>>>>> origin
};

var list = function () {
  return _.clone(data);
};

var find = function (properties) {
  return _.where(data, properties);
};

module.exports = {
	add: add,
	list: list,
	find: find
};

var generateId = function(name, text) {
    var sum = 0;
    var string = name + text
    for (var i = 0; i < string.length; i++) {
        sum += string.charCodeAt(i);
    }
    return sum % 1000;
}

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  	module.exports.add( getFakeName(), getFakeTweet() );
}
