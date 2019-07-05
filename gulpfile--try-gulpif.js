// 1. Requires 


var gulp = require('gulp');

var   uglify = require('gulp-uglify');  // Подключаем Uglify

var   sass = require('gulp-sass');  // Подключаем Sass пакет  
    
var   browserSync = require('browser-sync');  // Подключаем Browser Sync
    
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

var svgSprite = require('gulp-svg-sprite');

var gulpif = require('gulp-if');
 


//gulp-debug - Вывод 

    


// 2. Config 

var path = 'app/';
var path_libs = path + 'libs/';
var autoprefixerOptions = {
  browsers: ['last 15 versions', 'IE 10', 'IE 11']
};   
// Vars
var fontName = 'ukresultflaticons';

var js_jquery = 'app/libs/jquery/dist/jquery.min.js';
var js_owl = 'app/libs/owl.carousel/dist/owl.carousel.min.js';
var js_fancybox = 'app/libs/fancybox/dist/jquery.fancybox.min.js';
var js_selectric = 'app/libs/jquery-selectric/public/jquery.selectric.min.js';   
var js_maskedinput = 'app/libs/jquery.maskedinput/dist/jquery.maskedinput.min.js';   
    



// 3. Tasks  


    // SCSS - компиляция  // Skynet Computers
    // gulp.task('scss', function(){ // Создаем таск "scss"        
    //     return gulp.src('app/sass/**/*.scss')

    //     .pipe(sourcemaps.init())
    //     .pipe(plumber())
    //     // .pipe(postcss(processors, {syntax: syntax_scss})) // linting
    //     .pipe(sass()) // Преобразуем scss в CSS посредством gulp-sass
    //     // .pipe(sass().on('error', sass.logError))
    //     .pipe(autoprefixer())
    //     .pipe(sourcemaps.write())
        
    //     .pipe(gulp.dest('app/css')) 
    //     .pipe(browserSync.reload({stream: true}))
    // }); 



    // SCSS - компиляция  // UKResult demo // v. new
    gulp.task('scss', function(){ // Создаем таск "scss"        
        return gulp.src('app/sass/**/*.scss')

        // .pipe(debug({title: 'SRC'}))
        .pipe(sourcemaps.init())
        .pipe(plumber())

        // .pipe(plumber( {  
        //     errorHandler: notify.onError()
        // } ))

        // .pipe(postcss(processors, {syntax: syntax_scss}))  // Lint

        // .pipe(gulpif(
        //     condition, 
        //     uglify()
        //     ))

        // .on('data', function(file){  // Файл - файл который проходит обработку процессом 
        //     // console.dir(file);
        //     console.log('Проходит файл ' +  file.path);
        //     // console.log('Имя файла ' +  file.name);
        //     console.log('basename файла ' +  file.basename);
        //     // console.log('dirname файла ' +  file.dirname);
        //     // 'C:\HTML 2\UKResult demo\_html\app\sass\style.scss'

        //     gulpif(
        //         file.path === 'C:\HTML 2\UKResult demo\_html\app\sass\style.scss', 
        //         console.log('ЭТО НАШ ФАЙЛ! ' +  file.path)
        //         // postcss(processors, {syntax: syntax_scss})  
        //     )

        // })
        
         .pipe(
            gulpif(
                function (file) {
                    // console.log(file.path);
                    // console.log(file.cwd);
                    // console.log(file.basename);
                    // console.log(file.relative);

                    // if (file.path === 'C:\HTML 2\UKResult demo\_html\app\sass\style.scss') {
                    //     console.log('ЭТО НАШ ФАЙЛ! ' +  file.path);
                    //     return true;
                    // } else {
                    //     return false;
                    // }

                    // return (file.path === 'C:/HTML 2/UKResult demo/_htmlapp/sass/style.scss')
                    return (file.relative === 'style.scss')

                      
                    // console.log('ЭТО НАШ ФАЙЛ! ' +  file.path);
                   
                },
                postcss(processors, {syntax: syntax_scss})
            )  
        )

        //  .pipe(
        //     gulpif(
        //         function (file) {
        //             file.path === 'C:\HTML 2\UKResult demo\_html\app\sass\style.scss', 
        //             console.log('ЭТО НАШ ФАЙЛ! ' +  file.path);
        //             postcss(processors, {syntax: syntax_scss})
        //         }
        //     )  
        // )
     

    
      



        .pipe(sass()) // Преобразуем scss в CSS посредством gulp-sass
        // .on('error', function(err){
        //     console.log(err.message);
        //     this.end();
        // } )
        // .on('error', notify.onError())


        // .pipe(sass().on('error', sass.logError))
        .pipe(debug({title: 'SASS'}))
        .pipe(autoprefixer())
        .pipe(debug({title: 'AUTOPREFIXER'}))
        // .pipe(sourcemaps.write())
        .pipe(sourcemaps.write('.')) // Выводит в отдельный файл
        
        .pipe(gulp.dest('app/css')) 
        .pipe(debug({title: 'DEST'}))

        // .pipe(browserSync.reload({stream: true}))
        .pipe(bs.stream());
    }); 


    // // Browser-sync - автообновление старниц
    // gulp.task('browser-sync', function() { // Создаем таск browser-sync
    //     browserSync({ // Выполняем browser Sync
    //         server: { // Определяем параметры сервера
    //             baseDir: 'app' // Директория для сервера - app
    //         },
    //         notify: false // Отключаем уведомления
    //     });
    // });



    // Static Server + watching scss/html files  // v. new
    gulp.task('bs-serve', function() {

        bs.init({
            server: "./app"
        });

        // gulp.watch("app/scss/*.scss", ['sass']);
        // gulp.watch("app/*.html").on('change', browserSync.reload);
    });


    // Compile sass into CSS & auto-inject into browsers
    // gulp.task('sass', function() {
    //     return gulp.src("app/scss/*.scss")
    //         .pipe(sass())
    //         .pipe(gulp.dest("app/css"))
    //         .pipe(browserSync.stream());
    // });


    
    
    // Svgmin - оптимизация svg
    gulp.task('Svgmin', function () {
        return gulp.src('app/images/svg-icons/*')
            .pipe(svgmin({
                plugins: [
                    { removeDimensions: true },
                    { cleanupListOfValues: true },
                    { cleanupNumericValues: true }
                ]
            }))
            .pipe(rename(function (path) {
                path.basename = path.basename.replace(/\ /g, "")
            }))
            .pipe(gulp.dest('app/images/svg-min'));
    });


    // Iconfont - генерация шрифта  // Нужно запускать 2 раза)
    gulp.task('Iconfont', function (done) {
        var iconStream = gulp.src(['app/images/svg-min/*.svg'])
            .pipe(iconfont({
                fontName: fontName,
                formats: ['ttf', 'eot', 'woff', 'svg', 'woff2'],
                fixedWidth: true,
                centerHorizontally: true,
            }));
        async.parallel([
            function handleGlyphs(cb) {
                iconStream.on('glyphs', function (glyphs, options) {
                    // gulp.src('app/images/svgfontstyle/css.css')
                    gulp.src('app/images/svgfontstyle/svgfontstyle.scss')  // Файл с шаблоном классов ИШ
                    // gulp.src('app/svgfontstyle/svgfontstyle.scss')
                        .pipe(consolidate('lodash', {
                            glyphs: glyphs,
                            fontName: fontName,
                            fontPath: '../fonts/',
                            className: fontName,

                        }))
                        // .pipe(gulp.dest('app/css/'))
                        .pipe(gulp.dest('app/sass/'))
                        .on('finish', cb);
                });
            },
            function handleFonts(cb) {
                iconStream
                    .pipe(gulp.dest('app/fonts/'+fontName+'/'))
                    .on('finish', cb);
            }
        ], done);
    }); 

  // Basic configuration example
    var configSvgSprite = {
        mode: {
          css: { // Activate the «css» mode
            render: {
              css: true // Activate CSS output (with default options)
            }
          }
        }
    };

    gulp.task('svgSprite', function(){
        return gulp.src('app/images/svg-min/*.svg')
            .pipe(svgSprite(configSvgSprite))
            .pipe(gulp.dest('app/images/svg-sprite'))

    });


    // JS - сборка
    gulp.task('js', function() {
      return  gulp.src(
        [
            js_jquery,
            js_owl,
            js_fancybox,
            js_selectric,
            js_maskedinput,
            'app/js/*.js'

            //, 'app/js/menu-responsive/js/menu-responsive.js'
        ]
        )
        .pipe(concat('scripts.js'))
        // .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('app/js/min/'));
    }); 


    // Lint - stylelint
    var stylelint = require('stylelint');
    var postcss = require('gulp-postcss');
    var messages = require('postcss-browser-reporter');
    var syntax_scss = require('postcss-scss');

    var processors = [
        stylelint({
            reporters: [
                {formatter: 'string', console: true}
            ]
            // ,fix: true
            // ,fix: true
        }),
        messages({
            selector: 'body:before'
        })
    ];

    // Clean - очистка директории для build
    gulp.task('clean', function() {
        return del.sync('dist'); // Удаляем папку dist перед сборкой
    });



// 4. Calls


// gulp.task('watch', ['browser-sync', 'scss'], function() {
gulp.task('watch', ['bs-serve', 'scss'], function() {

    // gulp.watch('app/sass/**/*.+(scss|scss)', [ 'scss']);

    // gulp.watch('app/sass/**/*.+(scss|scss)', [ 'scss', 'html']);  // будут выполнятся обе задачи []
    gulp.watch('app/sass/**/*.+(scss|scss)', [ 'scss']);  
    gulp.watch('app/templates/**/*.mustache', [ 'html']);    
});

// gulp.task('watchjs', ['browser-sync', 'js'], function() {
gulp.task('watchjs', ['bs-serve', 'js'], function() {

    gulp.watch('app/js/*.js', ['js']);
    gulp.watch('app/templates/**/*.mustache', [ 'html']); 
}); 

gulp.task('makesvgfont', ['Svgmin', 'Iconfont']);

gulp.task('build', ['clean'],  function () {

    gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))        

    gulp.src('app/css/**/*.css')
        // .pipe(cleanCSS({compatibility: 'ie10'}))
        .pipe(gulp.dest('dist/css'))

    gulp.src('app/js/min/scripts.min.js')
        .pipe(uglify())    
        .pipe(gulp.dest('dist/js/min'))

    gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))

    gulp.src('app/images/**/*')
        .pipe(gulp.dest('dist/images'))

    gulp.src('app/uploads/**/*')
        .pipe(gulp.dest('dist/uploads'))    
    
});

gulp.task('default', ['watch']);


gulp.task('html', function(){

    return gulp.src('app/templates/**/*.mustache')
    // return gulp.src('app/**/*.mustache')

    .pipe(mustache('app/data/data.json', {}, {}))
    .pipe(gulp.dest('app/'));

});


/*
gulp.src("./templates/*.mustache")
    .pipe(mustache('your_json_file.json',{},{}))
    .pipe(gulp.dest("./dist"));

*/



// gulp.src("./templates/**/*.mustache")

// и

// gulp.watch('./templates/**/*.mustache', ['mustache']);
// Так пробовал? 




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

gulp.task('assets', function() {
    return gulp.src('app/css/**/*.*')
        .pipe(remember('styles'))
        .pipe(gulp.dest('app/css-dest'));        
} )


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


// Gulp screencasts - 13
// gulp-svg-sprite;
// gulp-cssnano
// gulp-rev