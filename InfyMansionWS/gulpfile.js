let gulp = require("gulp");
let eslint = require("gulp-eslint")
let fs = require('fs')
const shell = require("gulp-shell")
const mocha=require('gulp-mocha')
// gulp.task("print", () => {
//     console.log("inside gulp");
// })

gulp.task("lint", () => {
    return gulp.src(['src/model/*.js','src/routes/*.js','src/utilities/*.js','src/utilities/*.js','src/app.js','!node_modules/**'])
    .pipe(eslint()) // run eslint on files matching src
    .pipe(eslint({fix:true}))//to fix lint errors
    .pipe(gulp.dest(file=>file.base))
    .pipe(eslint.format())//to display in terminal
    .pipe(eslint.format('html',fs.createWriteStream('lintReports/lint_report.html')))
    .pipe(eslint.format('checkstyle',fs.createWriteStream('lintReports/checkstyle.xml')))
    .pipe(eslint.failAfterError()) // 
})

// gulp.task("start",shell.task(["node ./src/app.js"]))
gulp.task('test',() =>{
return gulp.src(['test/*.js']) //fetching all the test case files
.pipe(mocha(
    {
        reporter:'mocha-junit-reporter',//npm package to generate report
        reporterOptions:{
            mochaFile:'./testReport/Junit/file.xml'
        }
    }
))//running mocha
.on('error',console.error)
});

gulp.task('coverage',shell.task([
    'nyc --reporter=lcov --reporter=text mocha'
]));