"use strict";angular.module("iat381Assignment2MozzappAApp",["ngAnimate","ngMessages","ngRoute","ngSanitize","ngTouch","mediaPlayer","ngDragDrop","angular-carousel"]).config(["$routeProvider",function(a){a.when("/main",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/main"})}]),angular.module("iat381Assignment2MozzappAApp").controller("MainCtrl",["$scope","$timeout",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.playlist=[{src:"https://dl-web.dropbox.com/get/music/detroit.mp3?_subject_uid=257544459&w=AABbEVvEFysPakiWM_5w5oJXeaPSs7f_JLYQOPBRpXTmOA"},{src:"https://dl-web.dropbox.com/get/music/uptown-funk.mp3?_subject_uid=257544459&w=AAAU2vsndiyhv9377_EjgHkkcOQ80BhSf6rEAqFuexukag"},{src:"https://dl-web.dropbox.com/get/music/good-life.mp3?_subject_uid=257544459&w=AABuecbsG40OmahFpfjWgYvX2ZtASblIWw3tWOvfzkBU6g"},{src:"https://dl-web.dropbox.com/get/music/early-in-the-morning.mp3?_subject_uid=257544459&w=AAAg_BmSJQjeAfK1-Q_Md8g6LiYTW2KXVo2PKxbXs6IfkA"},{src:"https://dl-web.dropbox.com/get/music/brass-monkeys.mp3?_subject_uid=257544459&w=AABwRX32oQnwy7ZMfyetl9wFgQjPnTGaIB1okiqdF4BDLA"},{src:"https://dl-web.dropbox.com/get/music/far-alone.mp3?_subject_uid=257544459&w=AAAA2MapkcRutR2A0SqWm_m1OkTVa6EC5nR1cuuITWRN0Q"}],a.records=[{image:"images/record.png"},{image:"images/record.png"},{image:"images/record.png"},{image:"images/record.png"},{image:"images/record.png"},{image:"images/record.png"}],a.albums=[{image:"images/shady-xv.png"},{image:"images/uptown-funk.jpg"},{image:"images/good-life.jpg"},{image:"images/parc-avenue.png"},{image:"images/license-to-ill.png"},{image:"images/far-alone.png"}],a.record={},a.record1={},a.play=function(){a.song.play()},a.pause=function(){a.song.pause()},a.stop=function(){a.song.stop()},a.prev=function(){a.song.prev()},a.next=function(){a.song.next()},a.direction="left",a.currentIndex=0,a.setCurrentSlideIndex=function(b){a.direction=b>a.currentIndex?"left":"right",a.currentIndex=b,a.playlist[b].play()},a.isCurrentSlideIndex=function(b){return a.currentIndex===b},a.prevSlide=function(){a.direction="left",a.currentIndex<a.records.length-1&&(a.currentIndex=++a.currentIndex),a.next()},a.nextSlide=function(){a.direction="right",a.currentIndex>0&&(a.currentIndex=--a.currentIndex),a.prev()}}]);