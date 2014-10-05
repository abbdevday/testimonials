module.exports = function (grunt) { 
  grunt.initConfig({
    assemble: {
    }
  });

  grunt.loadNpmTasks("assemble");
  grunt.loadNpmTasks("grunt-newer");
  grunt.registerTask("default", ["newer:assemble"]);
};
