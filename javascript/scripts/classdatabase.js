$(document).ready(function () {
    //Append the subjects to the subject list.
    for (i in subject) {
        $(".subjects").append("<li class='subjectListing searchItems' value='" + subject[i].id + "' abbrev='" + subject[i].abbreviation + "' </li><a href='#'>" + subject[i].name + " [" + subject[i].abbreviation + "]</a>");
    }

    /**
     * Handler for select dropdown change.
     */
    $('#term').change(function () {
        $('#subjectSection').show();
        $("#coursesSection").hide();
        $("#coursesSelectionSection").hide();
    })

    /**
     * Append courses when subject is clicked.
     */
    $('.subjectListing').on('click', function (e) {
        e.preventDefault(); //Page won't jump to top
        var courses = getCoursesForSubject($(this).val());
        var subjectAbbrevation = $(this).attr('abbrev');
        $('#subjectSection').hide();
        $("#coursesSection").show();
        $(".courses").empty();
        //Add courses to the list
        if (courses.length == 0) {
            //No courses available
            $(".courses").append("<li class='courseListing'><a>There are currently no courses available.</a></li>");
        } else {
            for (i in courses) {
                if (courses[i].name.includes("Already Taken")) {
                    $(".courses").append("<li class='courseListing searchItems' value='" + courses[i].id +
                        "' </li><a href='#' class='courseListingLink disabled'>" + subjectAbbrevation + " " + courses[i].name + "</a>");
                } else {
                    $(".courses").append("<li class='courseListing searchItems' value='" + courses[i].id +
                        "' </li><a href='#' class='courseListingLink'>" + subjectAbbrevation + " " + courses[i].name + "</a>");
                }
            }
        }
        activateCourseListeners(); //Activate handlers for newly created course items.    
        $('#myInput').attr("placeholder", "Search for Course...");
    });

    /**
     * Empties course and section data, returns back to original subject list.
     */
    $('#backToSubjects').on('click', function (e) {
        e.preventDefault();
        $('.sections').empty();
        $(".courses").empty();
        $("#coursesSection").hide();
        $('#subjectSection').show();
        $('#myInput').val('').trigger('input');
        $('#myInput').attr("placeholder", "Search for Subject...");
    })

    /**
     * Activate filter bar
     */
    $('#myInput').on('input', function () {
        search($(this));
    });
});

/**
 * Activate click handlers for course listings. Done after they are dynamically rendered
 * when a user selects a subject
 */
function activateCourseListeners() {
    $('.courseListing').on('click', function (e) {
        e.preventDefault(); //Page won't jump to top
        //Remove highlights from all other courses
        $('.courseListingLink').each(function () {
            $(this).removeClass('highlight');
        })
        //Highlight the course selected
        $(e.target).addClass('highlight');
        //Get the sections available by the course and term ids. Method located in register.js
        var sections = getSectionsByCourseAndTerm(parseInt($('#term').val()), $(this).val())
        $('#subjectSection').hide();
        $("#coursesSection").show();
        $("#coursesSelectionSection").show();
        $(".sections").empty();

        //Add sections to list
        if (sections.length == 0) {
            //No sections available
            $(".sections").append("<li class='sectionsListing'><a>There are currently no sections available.</a></li>");
        } else {
            //For Table (header)
            $(".sections").append("<tr><th>Day</th><th>Time</th><th>Instructor</th><th>Location</th><th>Rem Seats</th><th></th></tr>");
            //Go through selected sections and append them to the list.
            for (i in sections) {
                //For Table (rows)
                $(".sections").append("<tr><td>" + sections[i].days +
                    "</td><td>" + sections[i].timeslot + "</td><td>" + sections[i].teacher + "</td><td>" +
                    sections[i].location + "</td><td>" + sections[i].remainingseats +
                    "</td><td><button class='copy register_button' data-key=" + (i + 1) + ">Copy</button></td></tr>");

                $('button.copy').on('click', function () {
                    var cRow = $(this).parents('tr');
                    var selectedCourse = getCourseById(sections[i].courseId);
                    var selectedSubject = getSubjectById(selectedCourse.subjectId);
                    var day = $('td:nth-child(1)', cRow).text();
                    var time = $('td:nth-child(2)', cRow).text();
                    var instructor = $('td:nth-child(3)', cRow).text();
                    var location = $('td:nth-child(4)', cRow).text();
                    var intKey = $(this).data('key');

                    doCopy(selectedCourse.name, selectedSubject, day, time, instructor, location, intKey);
                });

                function doCopy(selectedCourse, selectedSubject, day, time, instructor, location, key) {
                    copyToClipboard("Subject: " + selectedSubject + " " + selectedCourse + "\n"
                        + "Day of Week: " + day + "\n"
                        + "Time of Day: " + time + "\n"
                        + "Instructor: " + instructor + "\n"
                        + "Location: " + location);
                }

                function copyToClipboard(element) {
                    const el = document.createElement('textarea');
                    el.value = element;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);

                    alert("Successfully copied to the clipboard");
                }

                //For List
                //$(".sections").append("<li class='sectionsListing' value='"+ sections[i].id + "' </li><a href='#'>"+ " " + sections[i].days + " | " + sections[i].timeslot + " | " + sections[i].teacher + " | " + sections[i].location + " | " + sections[i].remainingseats + "</a>");
            }
        }
    });
}

/**
 * Allows for filter capability on subjects and courses
 * @param {String} obj - The filter text
 */
function search(obj) {
    var filter = obj.val().toUpperCase();
    var items = $('li.searchItems');
    //Go through each item, see if it contains filter text
    $.each(items, function () {
        var text = $(this).text().toUpperCase();
        if (text.indexOf(filter) > -1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}