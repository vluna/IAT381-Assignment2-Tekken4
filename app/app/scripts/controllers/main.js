'use strict';
/**
 * @ngdoc function
 * @name iat381Assignment2MozzappAApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iat381Assignment2MozzappAApp
 */
angular.module('iat381Assignment2MozzappAApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Array to store the music
    $scope.playlist = [
      {src: "https://dl-web.dropbox.com/get/music/detroit.mp3?_subject_uid=257544459&w=AABbEVvEFysPakiWM_5w5oJXeaPSs7f_JLYQOPBRpXTmOA"},
      {src: "https://dl-web.dropbox.com/get/music/uptown-funk.mp3?_subject_uid=257544459&w=AAAU2vsndiyhv9377_EjgHkkcOQ80BhSf6rEAqFuexukag"},
      {src: "https://dl-web.dropbox.com/get/music/good-life.mp3?_subject_uid=257544459&w=AABuecbsG40OmahFpfjWgYvX2ZtASblIWw3tWOvfzkBU6g"},
      {src: "https://dl-web.dropbox.com/get/music/early-in-the-morning.mp3?_subject_uid=257544459&w=AAAg_BmSJQjeAfK1-Q_Md8g6LiYTW2KXVo2PKxbXs6IfkA"},
      {src: "https://dl-web.dropbox.com/get/music/brass-monkeys.mp3?_subject_uid=257544459&w=AABwRX32oQnwy7ZMfyetl9wFgQjPnTGaIB1okiqdF4BDLA"},
      {src: "https://dl-web.dropbox.com/get/music/far-alone.mp3?_subject_uid=257544459&w=AAAA2MapkcRutR2A0SqWm_m1OkTVa6EC5nR1cuuITWRN0Q"},
    ];

    // Array with the record image
    $scope.records = [
        {image: 'images/record.png'},
        {image: 'images/record.png'},
        {image: 'images/record.png'},
        {image: 'images/record.png'},
        {image: 'images/record.png'},
        {image: 'images/record.png'}
    ];

    // Array with the album images
   $scope.albums = [
        {image: 'images/shady-xv.png'},
        {image: 'images/uptown-funk.jpg'},
        {image: 'images/good-life.jpg'},
        {image: 'images/parc-avenue.png'},
        {image: 'images/license-to-ill.png'},
        {image: 'images/far-alone.png'}
    ];

    // I do not why, but they have to be here for the dragdrop
  	$scope.record = {};
  	$scope.record1 = {};


    // Functions to play/pause/stop/chane song for music
    $scope.play = function () {
        $scope.song.play();
    };

    $scope.pause = function () {
        $scope.song.pause();
    };

    $scope.stop = function () {
        $scope.song.stop();
    };

    $scope.prev = function () {
        $scope.song.prev();
    };

    $scope.next = function () {
        $scope.song.next();
    };
    
    // Animation for the slider of images
    $scope.direction = 'left';
    $scope.currentIndex = 0;

    // Set current index
    $scope.setCurrentSlideIndex = function (index) {
        if(index > $scope.currentIndex) {
            $scope.direction = 'left'
        }
        else {
            $scope.direction = 'right';
        }

        $scope.currentIndex = index;
        $scope.playlist[index].play();
    };

    // Tracks the current index of the slide
    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };

    // Goes to previous slide
    $scope.prevSlide = function () {
        $scope.direction = 'left';

        // If it gets to the end of the playlist stop scrolling
        if($scope.currentIndex < $scope.records.length - 1) {
            $scope.currentIndex = ++$scope.currentIndex;
        }
        $scope.next();
    };

    // Goes to next slide
    $scope.nextSlide = function () {
        $scope.direction = 'right';

        // If it gets to the begining of the playlist stop scrolling
        if($scope.currentIndex > 0) {
            $scope.currentIndex = --$scope.currentIndex;
        }
        $scope.prev();
    };
});

