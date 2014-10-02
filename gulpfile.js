var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('js', function () {
	gulp
		.src('src/math-tex.js')
		.pipe($.rename('math-tex.min.js'))
		.pipe($.uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
	gulp
		.src([
			'bower_components/katex/build/katex.min.js',
			'src/example.html'
		])
		.pipe(gulp.dest('dist'));
	gulp
		.src('bower_components/katex/build/fonts/*')
		.pipe(gulp.dest('dist/fonts'));
});

// I tried to use https://github.com/Polymer/vulcanize here, but it is just too
// buggy/quirky for my use case. It also doesn’t seem to be maintained anymore.
// Let’s write our own quick and (extremely!) dirty solution that does the job
// for this particular project, but should never be used anywhere else.
gulp.task('vulcanize', function() {
	gulp
		.src('src/math-tex.html')
		// Remove newlines, tab characters, and HTML comments. Note: this is a very
		// simple regex that won’t work correctly for all HTML documents.
		// http://stackoverflow.com/a/1732454/96656 very much applies.
		.pipe($.replace(
			/[\n\t]|<!--[\s\S]*?-->/g,
			''
		))
		// Replace the `@import` statement with the actual CSS.
		.pipe($.replace(
			/@import url\([^)]+katex\.min\.css\);/,
			require('fs')
				.readFileSync('bower_components/katex/build/katex.min.css', 'utf-8')
				.toString()
		))
		// Replace the `<script>` tags with simplified versions.
		.pipe($.replace(
			/<script src="[^"]+katex\.min\.js"><\/script>/,
			'<script src=katex.min.js></script>'
		))
		.pipe($.replace(
			/<script src="math-tex\.js"><\/script>/,
			'<script src=math-tex.min.js></script>'
		))
		.pipe(gulp.dest('dist'));
})

gulp.task('build', ['js', 'copy', 'vulcanize']);

gulp.task('default', ['build', 'connect'], function() {
	gulp.watch(['bower_components', 'src/*'], ['build']);
});

gulp.task('connect', function() {
	$.connect.server({
		'root': [__dirname],
		'port': 9001
	})
});
