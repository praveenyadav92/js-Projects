module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        files: {
          'js/script.min.js': ['js/script.js']
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'css/style.min.css': ['css/style.css']
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.min.html': 'index.html'
          
        }
      }
    },

    watch: {
      scripts: {
        files: ['js/*.js', 'css/*.css', '*.html'],
        tasks: ['uglify', 'cssmin', 'htmlmin'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
};
