
// TASK 1
// initiating an array with positions
let position = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA',
	'Middle QA', 'Senior QA', 'Project manager'];

// getting names data from the user for new array
function getNames() {
	let names = [];
	for (let i = 0; i < position.length; i++) {
		let emplName = prompt('Enter the name of ' + position[i]);
		names.push(emplName);
	}
	return names;
}

// console.log(getNames());


// TASK 2
// creating and object with names and positions
function createTeam(arrA, arrB) {
	let employeeData = {};
	let newTeam = [];
	for (let i = 0; i < arrA.length; i++) {
		employeeData.name = arrA[i];
		employeeData.position = arrB[i];
		newTeam.push(JSON.parse(JSON.stringify(employeeData)));
	}
	return newTeam;
}

// console.log(createTeam(getNames(), position));


// TASK 3
// random number counter
function getRandomNumber(min, max) {
	let num = 0;
	return num = Math.floor(Math.random() * (max - min)) + min;
}

// adding salary to employee's object
function addSalary(arr) {
	arr.map(item => {
		let rank = item.position.toLowerCase();
		if (rank.indexOf('junior') >= 0) {
			item.salary = getRandomNumber(500, 1000);
		} else if ((rank.indexOf('middle') >= 0)) {
			item.salary = getRandomNumber(1500, 2000);
		} else if ((rank.indexOf('senior') >= 0)) {
			item.salary = getRandomNumber(2500, 3000);
		} else { item.salary = getRandomNumber(4000, 4500); }
	});
	return arr;
}

// console.log(addSalary(createTeam(getNames(), position)));


// TASK 4
// adding the method for display of the object "Employee"
function tellAboutEmployee(arr) {
	arr.map(item => {
		item.tellAboutYourself = function () {
			document.write(`My name is ${item.name}, I am a ${item.position}, my salary is ${item.salary}` + "<br/>");
		}
		return arr;
	})
}


// TASK 5
// adding the method for display of the object "Team"
function teamDisplay(obj) {
	obj.showTeam = function () {
		obj.forEach(item => {
			if (typeof item != "function") {
				document.write(`${item.name} - ${item.position}. Salary - ${item.salary}` + "<br/>");
			}
		});
	}
}

// running the functions
let team = addSalary(createTeam(getNames(), position));
tellAboutEmployee(team);
teamDisplay(team);
console.log(team);

// display of the method in object "Employee"
team.forEach(item => {
	item.tellAboutYourself();
})
document.write("<hr/>")
team.showTeam();
