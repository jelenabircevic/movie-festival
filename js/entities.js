function Movie(t, d, g) {
    this.title = t;
    this.duration = parseInt(d);
    this.genre = g;
}
Movie.prototype.getData = function () {
    var genreShort = (this.genre[0] + this.genre[this.genre.length - 1]).toUpperCase();
    return this.title + ', ' + this.duration + 'min, ' + genreShort;
}
Array.prototype.hasElement = function (obj) {
    var marker = false;
    this.forEach(function (item) {
        if (JSON.stringify(item) == JSON.stringify(obj)) {
            marker = true;
        }
    });
    return marker;
}
function Program(date) {
    this.date = new Date(date);  //<---
    this.movieList = [];
}
Program.prototype.getData = function () {
    var s = this.date.getDate() + '. ' + (this.date.getMonth()+1) + '. ' + this.date.getFullYear();
    if (this.movieList.length != 0) {
        var d = 0;
        s += ', ' + this.movieList.length;
        this.movieList.forEach(function (movie) {
            d += movie.duration;
        })
        s += ' movies, duration: ' + d + 'min';
        return s;
    }
    return s + ', TBA';
}
