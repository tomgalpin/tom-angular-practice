'use strict';

describe('FormController', function() {
	// Load the module that contains the View service before each test
	beforeEach(module('myApp.view'));

    // Load a mock user for testing
    // from:  https://api.github.com/tomgalpin/pablo/repos
    var mockUser = [
      {
        name: "AlrightValentine",
        owner: {
          login: "tomgalpin",
          avatar_url: "https://avatars1.githubusercontent.com/u/2400158?v=3",
        },
          stargazers_count: 12,
        },
      {
        name: "animal_shelter",
        owner: {
          login: "tomgalpin",
          avatar_url: "https://avatars1.githubusercontent.com/u/2400158?v=3",
        },
        stargazers_count: 0,
      },
      {
        name: "ar-student-schema",
        owner: {
          login: "tomgalpin",
          avatar_url: "https://avatars1.githubusercontent.com/u/2400158?v=3",
        },
        stargazers_count: 5,
      },
      {
        name: "ar-sunlight-legislators",
        owner: {
          login: "tomgalpin",
          avatar_url: "https://avatars1.githubusercontent.com/u/2400158?v=3",
        },
        stargazers_count: 0,
      },
    ];
    var $controller;

    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));

	describe('view controller', function(){

		it('defaults to the "tomgalpin" repo', function(){

		});

		it('returns the user name, avatar, and repos list', function(){

		});

		it('does not allow for a blank input for the GET request', function(){

		});

		it('blocks invalid user requests', function(){

		});

		it('blocks a request if the same user has been requested within 3 mins', function(){

		});

		it('displays an error message for invalid users', function(){

		});

		it('displays an error message for repeat 3 minute users', function(){

		});
	});
});