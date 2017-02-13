const gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync=require('browser-sync').create(),
	pug=require('gulp-pug'),
	postcss=require('gulp-postcss'),
	cssnano=require('cssnano');
	stylus=require('gulp-stylus');

//servidor
gulp.task('serve', function(){
	browserSync.init({
		server:{
			baseDir:'./dist'
		}
	})
});

//pug
gulp.task('pug', ()=>
	gulp.src('./src/views/*.pug')
		.pipe(pug({
				//dejar en false para produccion
				pretty:true
			}))
		.pipe(gulp.dest('./dist/'))
);

// Compilador Stylus
gulp.task('stylus', function () {
  return gulp.src('./src/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream())
});

//Compilador SASS
gulp.task('sass', ()=>
	gulp.src('./src/scss/**/main.scss')
		.pipe(sass({
			//coompresed para produccion
			outputStyle: 'nested',
			sourceComments:true
		}))
		.pipe(autoprefixer({
			versions:['last 2 browsers']
			}))
		//.pipe(postcss([cssnano()]))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream())
);

//vigilante
gulp.task('watch', function(){
	gulp.watch('./src/scss/*.scss', ['sass'])
	gulp.watch('./src/scss/sections/*.scss', ['sass'])
	gulp.watch('./src/stylus/*.styl', ['stylus'])
	gulp.watch('./src/views/*.pug', ['pug'])
	gulp.watch('./dist/*.html').on('change', browserSync.reload)
});

//Agrupacion de tareas por defecto
gulp.task('default', ['watch', 'serve']);
