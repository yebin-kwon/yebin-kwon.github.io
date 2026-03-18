const fs = require('fs');

module.exports = function (grunt) {


    require('jit-grunt')(grunt, {
        "postcss": "@lodder/grunt-postcss",
        "watch": "grunt-contrib-watch",
        "clean": "grunt-contrib-clean",
        "copy": "grunt-contrib-copy",
        "bake": "grunt-bake",
        "newer": "grunt-newer",
        "includereplace": "grunt-include-replace",
        "replace": "grunt-text-replace",
    });
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        includereplace: {
            your_target: {
                options: {
                    includesDir: "./",
                    // Task-specific options go here.
                },

                files: [
                    //{expand: true, src: ['*.html','!node_modules/**'], dest: 'docs/'},
                    { expand: true, src: ['**/*.html', '!node_modules/**', '!includes/**', '!docs/**',], dest: 'docs/' },
                    //'**/*.html','!docs/**','!node_modules/**',
                ]

            },
        },
        watch: {
            slim: {
                files: ['**/*.html', '!docs/**', '!node_modules/**', 'input.css', 'tailwind.config.js', 'Gruntfile.js',],
                tasks: ['newer:includereplace', 'newer:postcss',],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true,
                  },
            },
            full: {
                files: ['**/*.{html,js}', '!docs/**', '!node_modules/**', 'input.css',],
                tasks: ['newer:includereplace', 'newer:copy', 'postcss','replace'], 
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true,
                  },
            }
        },
        postcss: {
            options: {
                processors: [
                    require('tailwindcss'),
                    require('autoprefixer')
                ]
            },
            dist: {
                src: 'input.css',
                dest: 'docs/output.css'
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    { 'docs/flowbite.js': 'node_modules/flowbite/dist/flowbite.min.js' },
                    { 'docs/jquery.js': 'node_modules/jquery/dist/jquery.min.js' },
                    { expand: true, src: ['**/*.{js,png,jpg,jpeg,json,txt,pdf,zip,fzz}', '!tailwind.config.js', '!Gruntfile.js', '!node_modules/**', '!docs/**', 'fonts/**', '!package*.json', '!start_date.txt', 'CNAME',], dest: 'docs/' },


                ],
            },
        },
        clean: {

            src: [
                "docs/*/**",
                "docs/*",
                "!docs/output.css",

            ]

        },
        replace: {
            example: {
                src: ['docs/**/*.html','docs/*.html',],
                overwrite: true,
                replacements: [{
                    from: '" href="https://orcid.org/null"',                   // string replacement
                    to: ' hidden" href="https://orcid.org/null"'
                  },
                ]
            },
        },
    });
    grunt.registerTask('default', ['clean', 'includereplace', 'copy', 'postcss','replace',]);
};
