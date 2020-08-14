class Section {
	constructor(sectionNumber, days, startingHour, duration) {
		this.sectionNumber = sectionNumber;
		this.days = days;
		this.startingHour = startingHour;
		this.duration = duration;
	}
}

class Course {
	constructor(name, sections) {
		this.name = name;
		this.sections = sections;
	}

	get name() {
		return this.name;
	}
}

courseData = []; // to be populated using timetable pdf

function getCourseFromName(courseName) {
	for(let i = 0; i < courseData.length; i++) {
		if(courseName === courseData[i].name) return courseData[i];
	}
}

/* coursesToChooseFrom- a list, preference as index, list of courses with that preference as the value @ index
 * timetablesSet- list of all possible timetables as of now
 */
function getAllPossibleTimetables(coursesToChooseFrom, timetablesSet = []) {
	for(let i = 0; i < coursesToChooseFrom.lenght; i++) {
		let courseName = coursesToChooseFrom[i];
		let prefCourse = getCourseFromName(courseName);
	}

	return timetablesSet;
}