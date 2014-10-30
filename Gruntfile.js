// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({

    // watch our node server for changes
    nodemon: {
      index: {script: 'index.js'},
      dust: {script: 'dust.js'}
    },

    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  // grunt.registerTask('default', ['concurrent']);
  grunt.registerTask('index', ['nodemon:index']);
  grunt.registerTask('dust', ['nodemon:dust']);
};
