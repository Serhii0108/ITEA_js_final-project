
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
	let newTeam = {};
	for (let i = 0; i < arrA.length; i++) {
		employeeData.name = arrA[i];
		employeeData.position = arrB[i];
		newTeam[i + 1] = (JSON.parse(JSON.stringify(employeeData)));
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
function addSalary(obj) {
	for (let prop in obj) {
		for (let key in obj[prop]) {
			let rank = obj[prop][key].toLowerCase();
			if (rank.indexOf('junior') >= 0) {
				Object.assign(obj[prop], { salary: getRandomNumber(500, 1000) })
			} else if ((rank.indexOf('middle') >= 0)) {
				Object.assign(obj[prop], { salary: getRandomNumber(1500, 2000) });
			} else if ((rank.indexOf('senior') >= 0)) {
				Object.assign(obj[prop], { salary: getRandomNumber(2500, 3000) });
			} else { Object.assign(obj[prop], { salary: getRandomNumber(4000, 4500) }); }
		}
	}
	return obj;
}

// console.log(addSalary(createTeam(getNames(), position)));


// TASK 4
// adding the method for display of the object "Employee"

function tellAboutEmployee(obj) {
	for (let key in obj) {
		obj[key].tellAboutYourself = function () {
			document.write(`My name is ${this.name}, I am a ${this.position}, my salary is ${this.salary}` + "<br/>")
		}
	}
	return obj;
}

// function tellAboutYourself() { document.write(`My name is ${this[key].name}, I am a ${this[key].position}, my salary is ${this[key].salary}` + "<br/>") };



// TASK 5
// adding the method for display of the object "Team"
function teamDisplay(obj) {
	obj.showTeam = function () {
		for (let prop in obj) {
			if (typeof obj[prop] != "function") {
				document.write(`${obj[prop].name} - ${obj[prop].position}. Salary - ${obj[prop].salary}` + "<br/>");
			}
		};
	}
}

// running the functions
let team = addSalary(createTeam(getNames(), position));
tellAboutEmployee(team);
teamDisplay(team);
console.log(team);

// display of the method in object "Employee"
for (let key in team) {
	if (typeof team[key] === "function") {
		continue;
	} else {
		team[key].tellAboutYourself();
	}
}
document.write("<hr/>")
team.showTeam();
