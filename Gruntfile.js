module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-template');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  var conf = {
    build_id: new Date().getTime(),
    css_vendor: 'vendor.min.css',
    css_custom: 'custom.min.dev.css',
    css_app: 'app.min.<%= build_id %>.css',
    js_vendor: 'vendor.min.js',
    js_custom: 'custom.min.<%= build_id %>.js',
    js_app: 'app.min.<%= build_id %>.js'
  };

  var css_vendor_files = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
    'bower_components/angular-bootstrap/ui-bootstrap-csp.css'
  ];

  var css_user_files = [
    'src/css/*.css',
    'src/app/**/*.css'
  ];

  var js_vendor_files = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
  ];

  var js_user_files = [
    'src/app/app.module.js',
    'src/app/**/module.js',
    'src/app/**/*.module.js',
    'src/app/**/*.js'
  ];

  var build_folder = './public/';

  // Task Configuration
  var tasks = {
    watch: {
      options: {
        livereload: true
      },
      general: {
        files: [
          'Gruntfile.js',
          'src/**/*.js',
          'src/**/*.json',
          'src/**/*.html',
          'src/**/*.tpl'
        ],
        tasks: ['build-dev']
      },
      css: {
        files: ['src/**/*.css'],
        tasks: ['cssmin:dev']
      }
    },
    clean: [
      build_folder + "/**/*",
      "!" + build_folder,
      "!" + build_folder + ".gitignore"
    ],
    copy: {
      production: {
        files: [
          {
            expand: true,
            flatten: true,
            filter: 'isFile',
            cwd: 'src/',
            src: ['**/*.txt', '**/*.ico'],
            dest: build_folder
          },
          {
            flatten: true,
            expand: true,
            filter: 'isFile',
            cwd: 'src/',
            src: [ '**/*.png', '**/*.jpg', '**/*.gif', '**/*.jpeg'],
            dest: build_folder + 'img/'
          },
          {
            flatten: true,
            expand: true,
            filter: 'isFile',
            src: ['bower_components/bootstrap/dist/fonts/*'],
            dest: build_folder + 'fonts/'
          },
          {
            flatten: true,
            expand: true,
            filter: 'isFile',
            src: ['bower_components/bootstrap/dist/css/*.map'],
            dest: build_folder + 'css/'
          }
        ]
      },
      html: {
        files: [
          {
            expand: true,
            cwd: 'src/app',
            src: [
              '**/*.html'
            ],
            dest: build_folder
          }
        ]
      }
    },
    /**
     * Compile vendor and user css files into a single css file
     * */
    cssmin: {
      production: {
        files: [{
          dest: build_folder + 'css/<%= css_app %>',
          src: css_vendor_files.concat(css_user_files)
        }]
      },
      vendor: {
        files: [{
          dest: build_folder + 'css/<%= css_vendor %>',
          src: css_vendor_files
        }]
      },
      dev: {
        files: [{
          dest: build_folder + 'css/<%= css_custom %>',
          src: css_user_files
        }]
      }
    },

    /**
     * Compile vendor files and user custom files into a single javascript file
     * */
    uglify: {
      options: {
        mangle: false,
        compress: {}
      },
      production: {
        files: [{
          dest: build_folder + 'js/<%= js_app %>',
          src: js_vendor_files.concat(js_user_files)
        }]
      },
      vendor: {
        files: [{
          dest: build_folder + 'js/<%= js_vendor %>',
          src: js_vendor_files
        }]
      },
      dev: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: [{
          dest: build_folder + 'js/<%= js_custom %>',
          src: js_user_files
        }]
      }
    },
    'template': {
      'production': {
        'options': {
          'data': {
            'css_app': 'css/<%= css_app %>',
            'js_app': 'js/<%= js_app %>'
          }
        },
        'files': {
          './public/index.html': ['src/app/layout/index.production.html.tpl']
        }
      },
      'dev': {
        'options': {
          'data': {
            'css_vendor': 'css/<%= css_vendor %>',
            'css_custom': 'css/<%= css_custom %>',
            'js_vendor': 'js/<%= js_vendor %>',
            'js_custom': 'js/<%= js_custom %>'
          }
        },
        'files': {
          './public/index.html': ['src/app/layout/index.dev.html.tpl']
        }
      }
    }
  };

  grunt.registerTask('default', 'build');

  // Run this to build the go to production code.
  grunt.registerTask('build', [
    'clean', 'copy:production', 'copy:html', 'uglify:production', 'cssmin:production', 'template:production'
  ]);

  // Dev boiler plate. Use this to deploy vendor files while dev
  grunt.registerTask('build-vendor', [
    'clean', 'copy', 'uglify:vendor', 'cssmin:vendor'
  ]);

  // Fast build. Use this while developing.
  grunt.registerTask('build-dev', [
    'cssmin:dev', 'uglify:dev', 'template:dev', 'copy:html'
  ]);

  // Dev starter task
  grunt.registerTask('dev', [
    'build-vendor', 'build-dev', 'watch'
  ]);

  grunt.initConfig(grunt.util._.extend(tasks, conf));

};
