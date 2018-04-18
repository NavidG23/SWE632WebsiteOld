/**
 * Returns the subjects for the selected term.
 * @param {Number} termId - The id of the selected term.
 */
function getSubjectsForTerm(termId){
    var subjects = [];
    //Loop through subject-terms, which is a junction table for subject and term
    for(i in subjectTerm){
        if(subjectTerm[i].termId == termId){
            var subId = subjectTerm[i].subjectId;
            //loop through the subjects that belong to the term and check for matching ID
            for(j in subject){
                if(subject[j].id == subId){
                    subjects.push(subject[j]);
                }
            }
        }
    }

    return subjects;
}

/**
 * Returns the courses for the selected subject.
 * @param {Number} subjectId - The id of the subject selected.
 */
function getCoursesForSubject(subjectId){
    var courses = [];
    for(i in course){
        if(course[i].subjectId == subjectId){
            courses.push(course[i]);
        }
    }
    
    return courses;
}

/**
 * Returns the sections that belong to the term and course identified.
 * @param {Number} termId - The id of the selected term
 * @param {Number} courseId - The id of the selected course
 */
function getSectionsByCourseAndTerm(termId, courseId){
    var sections = [];
    for(i in section){
        if(section[i].termId == termId && section[i].courseId == courseId)
        sections.push(section[i]);
    }
    return sections;
}

function getCourseById(courseId) {
    var courseName = "";
    for (i in course) {
        if (course[i].id == courseId) {
            courseName = course[i];
        }
    }
    return courseName;
}

function getSubjectById(subjectId) {
    var subjectName = "";
    for (i in subject) {
        if (subject[i].id == subjectId) {
            subjectName = subject[i].abbreviation;
        }
    }
    return subjectName;
}


/**** JSON MOCK DATA *****/

var terms = [
        {
            "id": 1,
            "name": "Spring 2018"
        },
        {
            "id": 2,
            "name": "Fall 2018"
        },
    ]

/**Json for register coursees. 
 * Could be farmed out to json file, was having issues accessing on local */
var subject = [
        {
            "id": 2,
            "name": "Computer Science",
            "abbreviation": "CS"
        },
        {
             "id": 4,
             "name": "Information Systems",
             "abbreviation": "INFS"
         },
        {
             "id": 3,
             "name": "Information Security Assurance",
             "abbreviation": "ISA"
         },
        {
            "id": 1,
            "name": "Software Engineering",
            "abbreviation": "SWE"
        },         
    ]

var subjectTerm = [
        {
            "id": 1,
            "termId": 1,
            "subjectId": 1
        },
        {
            "id": 2,
            "termId": 2,
            "subjectId": 2
        },

    ]

var course = [
        {
            "id": 1,
            "name": "205 - Software Usability Analysis and Design",
            "code": 205,
            "subjectId": "1"
        },
        {
            "id": 2,
            "name": "301 - Internship Preparation",
            "code": 301,
            "subjectId": "1"

        },
        {
            "id": 3,
            "name": "401 - Internship Reflection",
            "code": 401,
            "subjectId": "1"
        },
        {
            "id": 4,
            "name": "437 - Software Testing and Maintenance",
            "code": 437,
            "subjectId": "1"
        },
        {
            "id": 5,
            "name": "510 - Object-Oriented Programming in Java",
            "code": 510,
            "subjectId": "1"
        },
        {
            "id": 6,
            "name": "619 - Object-Oriented Software Specification and Construction<br>(Already Taken)",
            "code": 619,
            "subjectId": "1"
        },
        {
            "id": 7,
            "name": "621 - Software Modeling and Architectural Design<br>(Already Taken)",
            "code": 621,
            "subjectId": "1"
        },
        {
            "id": 8,
            "name": "622 - Distributed Software Engineering<br>(Already Taken)",
            "code": 622,
            "subjectId": "1"
        },
        {
            "id": 9,
            "name": "625 - Software Project Management",
            "code": 625,
            "subjectId": "1"

        },
        {
            "id": 10,
            "name": "632 - User Interface and Design<br>(Already Taken)",
            "code": 632,
            "subjectId": "1"
        },
        {
            "id": 11,
            "name": "637 - Software Testing<br>(Already Taken)",
            "code": 637,
            "subjectId": "1"
        },
        {
            "id": 12,
            "name": "642 - Software Engineering for WWW<br>(Already Taken)",
            "code": 642,
            "subjectId": "1"
        },
        {
            "id": 13,
            "name": "645 - Component-Based Software Development",
            "code": 645,
            "subjectId": "1"
        },
        {
            "id": 14,
            "name": "681 - Secure Software Design and Programming",
            "code": 681,
            "subjectId": "1"
        },
        {
            "id": 15,
            "name": "737 - Advanced Software Testing",
            "code": 737,
            "subjectId": "1"
        },
        {
            "id": 16,
            "name": "100 - Principles of Computing",
            "code": 100,
            "subjectId": "2"
        },
        {
            "id": 17,
            "name": "105 - Computer Ethics and Society",
            "code": 105,
            "subjectId": "2"

        },
        {
            "id": 18,
            "name": "110 - Essentials of Computer Science",
            "code": 110,
            "subjectId": "2"
        },
        {
            "id": 19,
            "name": "112 - Intro Computer Programming",
            "code": 112,
            "subjectId": "2"
        },
        {
            "id": 20,
            "name": "211 - Object-Oriented Programming",
            "code": 211,
            "subjectId": "2"
        },
        {
            "id": 21,
            "name": "262 - Intro to Low-Level Programming",
            "code": 262,
            "subjectId": "2"
        },
        {
            "id": 22,
            "name": "306 - Synthetic Ethics and Law for Computer Professionals",
            "code": 306,
            "subjectId": "2"
        },
        {
            "id": 23,
            "name": "310 - Data Structures",
            "code": 310,
            "subjectId": "2"
        },
        {
            "id": 24,
            "name": "321 - Software Engineering",
            "code": 321,
            "subjectId": "2"

        },
        {
            "id": 25,
            "name": "325 - Introduction to Game Design",
            "code": 325,
            "subjectId": "2"
        },
        {
            "id": 26,
            "name": "330 - Formal Methods and Models",
            "code": 330,
            "subjectId": "2"
        },
        {
            "id": 27,
            "name": "351 - Visual Computing",
            "code": 351,
            "subjectId": "2"
        },
        {
            "id": 28,
            "name": "367 - Computer Systems and Programming",
            "code": 367,
            "subjectId": "2"
        },
        {
            "id": 29,
            "name": "426 - Game Programming II",
            "code": 426,
            "subjectId": "2"
        },
        {
            "id": 30,
            "name": "450- Database Concepts",
            "code": 450,
            "subjectId": "2"
        },
        {
            "id": 31,
            "name": "515 - Computer Organization and Operating Systems",
            "code": 515,
            "subjectId": "4"
        },
        {
            "id": 32,
            "name": "519 - Program Design and Data Structures",
            "code": 519,
            "subjectId": "4"

        },
        {
            "id": 33,
            "name": "612 - Principles and Practice of Communication Networks",
            "code": 612,
            "subjectId": "4"
        },
        {
            "id": 34,
            "name": "622 - Information Systems Analysis and Design",
            "code": 6222,
            "subjectId": "4"
        },
        {
            "id": 35,
            "name": "774 - Enterprise Architecture",
            "code": 774,
            "subjectId": "4"
        },
        {
            "id": 36,
            "name": "562 - Information Security Theory and Practice",
            "code": 562,
            "subjectId": "3"
        },
        {
            "id": 37,
            "name": "564 - Security Laboratory",
            "code": 564,
            "subjectId": "3"
        },
        {
            "id": 38,
            "name": "650 - Security Policy",
            "code": 650,
            "subjectId": "3"
        },
        {
            "id": 39,
            "name": "656 - Network Security",
            "code": 656, 
            "subjectId": "3"

        },
        {
            "id": 40,
            "name": "674 - Intrusion Detection",
            "code": 674,
            "subjectId": "3"
        },
        {
            "id": 41,
            "name": "681 - Secure Software Design/Programming",
            "code": 681,
            "subjectId": "3"
        },
        {
            "id": 42,
            "name": "763 - Secure Protocol Analysis",
            "code": 763,
            "subjectId": "3"
        },    
    ]

var section = [
        {
            "id": 1,
            "sec": 001,
            "courseId": 1,
            "termId": 1,
            "days": "T/TH",
            "timeslot": "10:30am - 11:45am",
            "location": "Peterson 1105",
            "teacher": "Jeff Offutt",
            "remainingseats": "6",
            
        },
        {
            "id": 2,
            "sec": 001,
            "courseId": 2,
            "termId": 1,
            "days": "F",
            "timeslot": "12:00pm - 1:15pm",
            "location": "AB L008",
            "teacher": "Jeff Offutt",
            "remainingseats": "9",
        },
        {
            "id": 3,
            "sec": 001,
            "courseId": 3,
            "termId": 1,
            "days": "F",
            "timeslot": "12:00pm- 1:15pm",
            "location": "Art Building L008",
            "teacher": "Jeff Offutt",
            "remainingseats": "20",
        },
        {
            "id": 4,
            "sec": 001,
            "courseId": 4,
            "termId": 1,
            "days": "M",
            "timeslot": "4:30 - 7:10pm",
            "location": "Merten 1200",
            "teacher": "Jeff Offutt",
            "remainingseats": "1",
        },
        {
            "id": 5,
            "sec": 001,
            "courseId": 5,
            "termId": 1,
            "days": "TH",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Innovation Hall 134",
            "teacher": "Yonghee Shin",
            "remainingseats": "7",
        },
        {
            "id": 6,
            "sec": 001,
            "courseId": 6,
            "termId": 1,
            "days": "T",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Innovation Hall 136",
            "teacher": "Laurel E. Fielding",
            "remainingseats": "8",
        },
        {
            "id": 7,
            "sec": 001,
            "courseId": 7,
            "termId": 1,
            "days": "W",
            "timeslot": "4:30pm - 7:10pm",
            "location": "Planetary Hall 224",
            "teacher": "Robert Pettit",
            "remainingseats": "5",
        },
        {
            "id": 8,
            "sec": 001,
            "courseId": 8,
            "termId": 1,
            "days": "M",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Art Building 2026",
            "teacher": "David Wheeler",
            "remainingseats": "9",
        },
        {
            "id": 9,
            "sec": 001,
            "courseId": 9,
            "termId": 1,
            "days": "M",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Innovation Hall 204",
            "teacher": "Kenneth E Nidiffer",
            "remainingseats": "31",
        },
        {
            "id": 10,
            "sec": 001,
            "courseId": 10,
            "termId": 1,
            "days": "T",
            "timeslot": "4:30pm - 7:10pm",
            "location": "Innovation Hall 136",
            "teacher": "Thomas David LaToza",
            "remainingseats": "16",
        },
        {
            "id": 11,
            "sec": 001,
            "courseId": 11,
            "termId": 1,
            "days": "W",
            "timeslot": "4:30pm - 7:10pm",
            "location": "Peterson Hall 1105",
            "teacher": "Paul Ammann",
            "remainingseats": "25",
        },
        {
            "id": 12,
            "sec": 001,
            "courseId": 12,
            "termId": 1,
            "days": "T",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Innovation Hall 208",
            "teacher": "Vinod K Dubey",
            "remainingseats": "7",
        },
        {
            "id": 13,
            "sec": 001,
            "courseId": 13,
            "termId": 1,
            "days": "TH",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Innovation Hall 136",
            "teacher": "Vinod K Dubey",
            "remainingseats": "25",
        },
        {
            "id": 14,
            "sec": 001,
            "courseId": 14,
            "termId": 1,
            "days": "M",
            "timeslot": "4:30pm - 7:10pm",
            "location": "Art Building 2026",
            "teacher": "David A Wheeler",
            "remainingseats": "6",
        },
        {
            "id": 15,
            "sec": 001,
            "courseId": 15,
            "termId": 1,
            "days": "M",
            "timeslot": "4:30pm - 7:10pm",
            "location": "Innovation Hall 206",
            "teacher": "Paul Ammann",
            "remainingseats": "41",
        },
        {
            "id": 16,
            "sec": 001,
            "courseId": 16,
            "termId": 1,
            "days": "T/TH",
            "timeslot": "12:00pm - 1:15pm",
            "location": "Art Building 2026",
            "teacher": "Kevin Patrick Molloy",
            "remainingseats": "0",
        },
        {
            "id": 17,
            "sec": 001,
            "courseId": 17,
            "termId": 1,
            "days": "T",
            "timeslot": "3:00pm - 4:15pm",
            "location": "Innovation Hall 134",
            "teacher": "Tamara A Maddox",
            "remainingseats": "8",
        },
        {
            "id": 18,
            "sec": 001,
            "courseId": 18,
            "termId": 1,
            "days": "M/W",
            "timeslot": "12:00pm - 1:15pm",
            "location": "Exploratory Hall L004",
            "teacher": "Sean Luke",
            "remainingseats": "0",
        },
        {
            "id": 19,
            "sec": 001,
            "courseId": 19,
            "termId": 1,
            "days": "M/W",
            "timeslot": "12:00pm - 1:15pm",
            "location": "Enterprise Hall 178",
            "teacher": "Kinga Laura Dobolyi",
            "remainingseats": "4",
        },
        {
            "id": 31,
            "sec": 001,
            "courseId": 31,
            "termId": 1,
            "days": "M",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Innovation Hall 136",
            "teacher": "Lei He",
            "remainingseats": "27",
        },
        {
            "id": 32,
            "sec": 001,
            "courseId": 32,
            "termId": 1,
            "days": "T",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Art Building L008",
            "teacher": "Harold M Greenwald",
            "remainingseats": "8",
        },
        {
            "id": 33,
            "sec": 001,
            "courseId": 33,
            "termId": 1,
            "days": "TH",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Art Building L008",
            "teacher": "John D. McDowall",
            "remainingseats": "16",
        },
        {
            "id": 34,
            "sec": 001,
            "courseId": 34,
            "termId": 1,
            "days": "W",
            "timeslot": "4:30pm - 7:10pm",
            "location": "Art Building L008",
            "teacher": "Larry Kerschberg",
            "remainingseats": "28",
        },
        {
            "id": 35,
            "sec": 001,
            "courseId": 35,
            "termId": 1,
            "days": "TH",
            "timeslot": "7:20pm - 10:00pm",
            "location": "R B203",
            "teacher": "Barry M Barlow",
            "remainingseats": "21",
        },
        {
            "id": 36,
            "sec": 001,
            "courseId": 36,
            "termId": 1,
            "days": "M",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Merten 1200",
            "teacher": "Quyen Luong Nguyen",
            "remainingseats": "9",
        },
        {
            "id": 37,
            "sec": 001,
            "courseId": 37,
            "termId": 1,
            "days": "T",
            "timeslot": "4:30pm - 7:10pm",
            "location": "Innovation Hall 223",
            "teacher": "Benjamin Greenberg",
            "remainingseats": "1",
        },
        {
            "id": 38,
            "sec": 001,
            "courseId": 38,
            "termId": 1,
            "days": "TH",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Art Building 2026",
            "teacher": "Raymond Curts",
            "remainingseats": "39",
        },
        {
            "id": 39,
            "sec": 001,
            "courseId": 39,
            "termId": 1,
            "days": "TH",
            "timeslot": "4:30pm - 7:10pm",
            "location": "Art Building 2026",
            "teacher": "Foteini Baldimtsi",
            "remainingseats": "22",
        },
        {
            "id": 40,
            "sec": 001,
            "courseId": 40,
            "termId": 1,
            "days": "W",
            "timeslot": "7:20pm - 10:00pm",
            "location": "Art Building 2026",
            "teacher": "Konstantinos Kolias",
            "remainingseats": "38",
        },
        {
            "id": 41,
            "sec": 001,
            "courseId": 41,
            "termId": 1,
            "days": "M",
            "timeslot": "4:30pm - 7:10pm",
            "location": "Art Building 2026",
            "teacher": "David A Wheeler",
            "remainingseats": "1",
        },
        {
            "id": 42,
            "sec": 001,
            "courseId": 42,
            "termId": 1,
            "days": "W",
            "timeslot": "4:30pm - 7:10pm",
            "location": "Art Building 2026",
            "teacher": "Thabet Kacem",
            "remainingseats": "9",
        },
        {
            "id": 43,
            "sec": 001,
            "courseId": 20,
            "termId": 1,
            "days": "T/TH",
            "timeslot": "3:00pm - 4:15pm",
            "location": "David King Hall 1006",
            "teacher": "Mark Huntington Snyder",
            "remainingseats": "2",
        },
        {
            "id": 44,
            "sec": 001,
            "courseId": 21,
            "termId": 1,
            "days": "M/W",
            "timeslot": "9:00am - 10:15am",
            "location": "Lecture Hall 2",
            "teacher": "John Otten",
            "remainingseats": "2",
        },
        {
            "id": 45,
            "sec": 001,
            "courseId": 22,
            "termId": 1,
            "days": "T/TH",
            "timeslot": "9:00am - 10:15am",
            "location": "Buchanan Hall D003",
            "teacher": "Tamara A Maddox",
            "remainingseats": "1",
        },
        {
            "id": 46,
            "sec": 001,
            "courseId": 23,
            "termId": 1,
            "days": "T/TH",
            "timeslot": "12:00pm - 1:15pm",
            "location": "Lecture Hall 3",
            "teacher": "Yutao Zhong",
            "remainingseats": "5",
        },
        {
            "id": 47,
            "sec": 001,
            "courseId": 24,
            "termId": 1,
            "days": "T/TH",
            "timeslot": "10:30am - 11:45am",
            "location": "Engineering Building 1107",
            "teacher": "Shvetha Soundararajan",
            "remainingseats": "3",
        },
        {
            "id": 48,
            "sec": 001,
            "courseId": 25,
            "termId": 1,
            "days": "T/TH",
            "timeslot": "3:00pm - 4:15pm",
            "location": "Merten Hall 1200",
            "teacher": "Yotam Gingold",
            "remainingseats": "4",
        },
        {
            "id": 49,
            "sec": 001,
            "courseId": 26,
            "termId": 1,
            "days": "T/TH",
            "timeslot": "9:00am - 10:15am",
            "location": "Innovation Hall 204",
            "teacher": "Dana S Richards",
            "remainingseats": "2",
        },
        {
            "id": 50,
            "sec": 001,
            "courseId": 27,
            "termId": 1,
            "days": "T/TH",
            "timeslot": "10:30am - 11:45am",
            "location": "Art Building L008",
            "teacher": "Jan M Allbeck",
            "remainingseats": "7",
        },
        {
            "id": 51,
            "sec": 001,
            "courseId": 28,
            "termId": 1,
            "days": "M/W",
            "timeslot": "12:00pm - 1:15pm",
            "location": "Art Building 2003",
            "teacher": "Hakan Aydin",
            "remainingseats": "1",
        },
        {
            "id": 52,
            "sec": 001,
            "courseId": 29,
            "termId": 1,
            "days": "M/W",
            "timeslot": "4:30pm - 7:10pm",
            "location": "Engineering Building 1103",
            "teacher": "Jyh-Ming Lien",
            "remainingseats": "20",
        },
        {
            "id": 53,
            "sec": 001,
            "courseId": 30,
            "termId": 1,
            "days": "T/TH",
            "timeslot": "1:30pm - 2:45pm",
            "location": "Sandbridge Hall",
            "teacher": "Amihai Motro",
            "remainingseats": "32",
        },    
    
    ]
