module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            // Task
            dist: {
                // Target
                options: {
                    // Target options
                    style: "compressed",
                },
                files: {
                    // Dictionary of files
                    "style/css/default.css": "style/css/sass/default.scss"
                },
            },
        },
        watch: {
            css: {
                files: [
                    "style/css/sass/**/*.scss"
                ],
                tasks: ["sass"],
                options: {
                    spawn: false,
                    livereload: true,
                },
            },
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");

    // Default task(s).
    grunt.registerTask("default", ["uglify", "cssmin"]);
};
