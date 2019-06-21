// 1. Requires 


var gulp = require('gulp');

var   uglify = require('gulp-uglify');  // Подключаем Uglify

var   sass = require('gulp-sass');  // Подключаем Sass пакет  
    
// var   browserSync = require('browser-sync');  // Подключаем Browser Sync
    
var   concat = require('gulp-concat'); // Подключаем  Gulp Concat
    
var   sourcemaps = require('gulp-sourcemaps');  // Подключаем Gulp Sourcemaps  ( создает карту, чтобы в инспекторе браузера показывать строку стиля в sass-файле   )
    
var   glob = require('glob');

var   plumber = require('gulp-plumber');  // Преодхраняет остановку задачи из-за ошибки
    
var   autoprefixer = require('gulp-autoprefixer');
    
    // csslint = require('gulp-csslint');

var iconfont = require('gulp-iconfont');

var runTimestamp = Math.round(Date.now()/1000); 

var async = require('async');

var consolidate = require('gulp-consolidate');

var svgmin = require('gulp-svgmin');

var rename = require('gulp-rename');

var del = require('del'); // Подключаем библиотеку для удаления файлов и папок

var cleanCSS = require('gulp-clean-css');


// var mustache = require("gulp-mustache");
var mustache = require("gulp-mustache-plus");

var debug = require("gulp-debug");

var newer = require("gulp-newer");

var remember = require("gulp-remember");

var bs = require('browser-sync').create();  // Подключаем Browser Sync

var notify = require("gulp-notify");  // Выводит сообщения

var duration = require("gulp-duration");  // Выводит сообщения
 


//gulp-debug - Вывод 

var through2 = require("through2").obj;  
    


// 2. Config 

var path = 'app/';
var path_libs = path + 'libs/';
var autoprefixerOptions = {
  browsers: ['last 15 versions', 'IE 10', 'IE 11']
};   
// Vars
var fontName = 'themify';
var js_jquery = 'app/libs/jquery/dist/jquery.min.js';
var js_owl = 'app/libs/owl.carousel/dist/owl.carousel.min.js';
var js_selectric = 'app/libs/jquery-selectric/public/jquery.selectric.min.js';   
    



// 3. Tasks  
 


gulp.task('assets', function() {

    return gulp.src('app/css/**/*.css*')

        // .on('data', function(file) {
        //     // console.log('Перетащили файл ' +  file.path);
        //     console.dir(file.path);
        //     console.dir(file.cwd);
        //     console.dir(file.base);
        //     console.dir('----------');
        // })


        .pipe(through2( function(file, enc, callback) {
            var file2 = file.clone();
            file2.path = file2.path + '.bak';
            this.push(file2);
            callback(null, file);

        }))

        .pipe(gulp.dest('app/css-dest'));        
} )





// Gulp screencasts


// Gulp screencasts - 03
gulp.task('move', function() {
    return gulp.src('app/css/**/*.*', {read: false})  // read - читать файлы)

        .on('data', function(file){  // Файл - файл который проходит обработку процессом
            // console.log('Перетащили файл' + file); 
            // console.dir(file);
            console.log('Перетащили файл ' +  file.path);
        })

        .pipe(gulp.dest('app/css-dest'));
} )



// Gulp screencasts - 05
// gulp.task('assets', function() {
//     return gulp.src('app/css/**/*.*', {since: gulp.lastRun('assets')})  // since - только измененные с указанной даты
//         .pipe(debug())
//         .pipe(gulp.dest('app/css-dest'));
// } )



// Gulp screencasts - 06
// gulp.task('assets', function() {
//     return gulp.src('app/css/**/*.*')
//         .pipe(newer('app/css-dest'))
//         .pipe(gulp.dest('app/css-dest'));        
// } )



// gulp.lastRun('taskName') - // Gulp 4.0 only (!) - возвращает дату последнего запуска задачи taskName
//gulp-newer  // фильтрует файлы по дате изменения  // - актуально когда работаем без watch()
//gulp-debug - Вывод 
//gulp-remember - // 
//gulp-cached  - // запоминает все файлы которые через него проходят, по содержимому
//gulp-cahce -  // получает поток и кэширует файлы, пишет temp файлы на диск .



// Gulp screencasts - 08
// async-done - Node.js module - проверяет потоки


    // // SCSS - компиляция
    // gulp.task('scss', function(){ // Создаем таск "scss"        
    //     return gulp.src('app/sass/**/*.scss')

    //     // .pipe(debug({title: 'SRC'}))
    //     .pipe(sourcemaps.init())
    //     // .pipe(plumber())

    //     .pipe(plumber( {  
    //         errorHandler: notify.onError()

    //     } ))

    //     // .pipe(postcss(processors, {syntax: syntax_scss}))  // Lint
    //     .pipe(sass()) // Преобразуем scss в CSS посредством gulp-sass
    //     // .on('error', function(err){
    //     //     console.log(err.message);
    //     //     this.end();
    //     // } )
    //     // .on('error', notify.onError())


    //     // .pipe(sass().on('error', sass.logError))
    //     .pipe(debug({title: 'SASS'}))
    //     .pipe(autoprefixer())
    //     .pipe(debug({title: 'AUTOPREFIXER'}))
    //     // .pipe(sourcemaps.write())
    //     .pipe(sourcemaps.write('.')) // Выводит в отдельный файл
        
    //     .pipe(gulp.dest('app/css')) 
    //     .pipe(debug({title: 'DEST'}))

    //     // .pipe(browserSync.reload({stream: true}))
    //     .pipe(bs.stream());
    // }); 


// gulp-notify - выводит сообщение об ошибке
// gulp-plumber - создает свой поток, который имеет доступ к другим потокам (для передачи ошибки)
// gulp-multipipe - собирает несколько поток в свой (оборачивает?)
// stream-combiner2