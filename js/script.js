var add = document.querySelector("#add");
var err = document.querySelector("#error1");
var err2 = document.querySelector("#error2");
var err3 = document.querySelector("#error3");
var addp = document.querySelector("#addprogram");
var addmtp = document.querySelector("#addmtop");
var selectM = document.querySelector("#movies");
var selectP = document.querySelector("#programs");
var movieList = [];
var inputList = [];
var programList = [];
var inputProgramList = [];
var i = 0;
var l = 0;
var k = 0;
var ul = document.querySelector("ul");
var ulProgram = document.querySelector("#movieProgram");
var duration = 0;

add.addEventListener("click", function(event) {
    var input = fetchData();

    if (!movieList.hasElement(input) &&
        JSON.stringify(input) != JSON.stringify({})
    ) {
        addMovie(input);
    }
    i++;
});
addp.addEventListener("click", function(event) {
    var input = fetchProgram();
    var exists = false;
    if (JSON.stringify(input.date) == JSON.stringify(null) || input.date == null) {
        err2.style.visibility = "visible";
        err2.textContent = "Invalid date format!";
        return;
    }
    programList.forEach(elem => {
        if (JSON.stringify(elem.date) == JSON.stringify(input.date)) {
            exists = true;
            return false;
        }

    })
    if (exists) {
        err2.style.visibility = "visible";
        err2.textContent = "Program already exists!";
    } else {
        err2.style.visibility = "hidden";
        addProgram(input);
        l++;
    }
});

addmtp.addEventListener("click", function(event) {
    var input = fetchAdding();
    if (input) {
        var movie = movieList[input[0]];
        console.log(movie.title)
        var program = programList[input[1]];
        if (program.movieList.hasElement(movie)) {
            err3.textContent = movie.title + " is already added to this program. Choose another movie!";
            err3.style.visibility = "visible";
        } else {
            err3.style.visibility = "hidden";
            addMovieToProgram(movie, program, input[1]);
        }
    }
});