'use strict';

angular.module('myApp.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'FormController'
  });
}])
.controller('FormController', ["$scope", "$http", function FormController($scope, $http) {

    $scope.errorMessage = null;
    $scope.userName;
    $scope.userAvatar;
    $scope.userRepos;

    $scope.validateForm = function(user) {
        checkUserSearch(user);
    };

    var userSearchInfo  = {},
        errorMessage    = "This user does not exist!",
        timeDiff        = 3 * (1000 * 60), // 3 minutes
        userSearchName,
        startTime;

    var getForm = function(user){
        $http.get('https://api.github.com/users/'+ user +'/repos').then(successCallback, errorCallback);
    };

    var successCallback = function(data){
        if (data.data.length) {
            $scope.errorMessage = null;
            $scope.userName     = getUserInfo(data.data).userName;
            $scope.userAvatar   = getUserInfo(data.data).userAvatar;
            $scope.userRepos    = getUserRepos(data.data);
        } else {
            errorCallback(data);
        }
    };

    var errorCallback = function(data){
        $scope.errorMessage = errorMessage;
    };

    var setUserSearch = function(name){
        userSearchInfo[name] = new Date().getTime();
    };

    var checkTimeDiff = function(userSearchName, startTime){
        var timeToCheck     = new Date().getTime(),
            endTime         = new Date(startTime + timeDiff),
            difference      = endTime - timeToCheck,
            resultInMinutes = difference / 60000;

        if (resultInMinutes < 0 ) {
            setUserSearch(userSearchName);
            getForm(userSearchName);
        } else {
            $scope.errorMessage = "A previous user has searched this '" + userSearchName + "' repo before; wait 3 mins.";
            return false;
        }
    };

    var checkUserSearch = function(userSearchName){
        if (userSearchName in userSearchInfo) {
            checkTimeDiff(userSearchName, userSearchInfo[userSearchName]);
        } else {
            setUserSearch(userSearchName);
            getForm(userSearchName);
        }
    };

    var getUserInfo = function(data){
        var user = data[0].owner,
            userName,
            userAvatar;

        userName    = user.login;
        userAvatar  = user.avatar_url;

        return {
            userName: userName,
            userAvatar: userAvatar
        };
    };

    var getUserRepos = function(data){
        var userRepos = [];

        for (var i = 0; i < data.length; i++) {
            var repoInfo = {
                repoName: data[i].name,
                repoStars: data[i].stargazers_count
            }

            userRepos.push(repoInfo);

        }

        return userRepos;
    };

}]);
