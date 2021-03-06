// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here


     // configure jshint to validate js files -----------------------------------
    sass: {
      dist: {
        files: {
          'src/css/style.css': 'src/css/*.scss'
        }
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'src/js/custom/*.js']
    },

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n', 
      },

      build: {
        files: [
        {'dist/js/app.min.js': ['src/js/jquery-2.1.4.min.js', 'src/js/alignment.js', 'src/js/bootstrap.js', 'src/js/popup.js', 'src/js/navbar.js', 'src/js/lightbox.min.js', 'src/js/lightbox-plus-jquery.min.js', 'src/js/*.js']},
        {'src/js/production/app.min.js': ['src/js/jquery-2.1.4.min.js', 'src/js/alignment.js', 'src/js/bootstrap.js', 'src/js/popup.js', 'src/js/navbar.js', 'src/js/lightbox.min.js', 'src/js/lightbox-plus-jquery.min.js', 'src/js/*.js']},
        ],
      }
    },

    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files:[
          {'dist/css/style.min.css': ['src/css/reset.css', 'src/css/bootstrap.css','src/css/style.css', 'src/css/navbar.css', 'src/css/lightbox.css']},
          {'src/css/production/style.min.css': ['src/css/reset.css', 'src/css/bootstrap.css','src/css/style.css', 'src/css/navbar.css', 'src/css/lightbox.css']},
        ],
      }
    },

    copy: {
      main: {
        files:[
          {expand: true, flatten: true, src: ['src/img/**'], dest: 'dist/img', filter: 'isFile'},
          {expand: true, flatten: true, src: ['src/html/**'], dest: 'dist/html', filter: 'isFile'},
          {expand: true, flatten: true, src: ['src/fonts/**'], dest: 'dist/fonts', filter: 'isFile'},


        ],
      },
    },

    watch: {  
      options: {
        livereload: true,
      },
      // for stylesheets, watch css and less files 
      // only run less and cssmin stylesheets: { 
      files: ['src/css/*.css'], 
      tasks: ['cssmin'],

      // for scripts, run jshint and uglify 
      scripts: { 
        files: 'src/js/*.js', tasks: ['jshint', 'uglify'] 
      },

      

      // scripts: { 
      //   files: ['src/**/*.html', 'src/**/*.png', 'src/**/*.svg', 'src/**/*.jpg', 'src/**/*.gif', 'src/**/*.mp4', 'src/**/*.mp3', 'src/font/**'], tasks: ['copy'],
      //   tasks: ['copy'] 
      // },
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', ['uglify', 'cssmin', 'copy', 'watch']);
  grunt.registerTask('q', ['sass', 'uglify']);



  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');

};