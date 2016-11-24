angular.module('myapp').controller('mainController', MainController);
MainController.$inject = ['$scope', '$routeParams', '$window', '$timeout'];

function MainController($scope, $routeParams, $window, $timeout) {
	console.log('Main Controller');

	var arr = [
		{
			id: 1,
			url: "../images/110.jpg"
		},
		{
			id: 2,
			url: "../images/111.jpg"
		},
		{
			id: 3,
			url: "../images/112.jpg"
		},
		{
			id: 4,
			url: "../images/113.jpg"
		},
		{
			id: 5,
			url: "../images/114.jpg"
		},
		{
			id: 6,
			url: "../images/115.jpg"
		},
		{
			id: 7,
			url: "../images/116.jpg"
		},
		{
			id: 8,
			url: "../images/117.jpg"
		},
		{
			id: 9,
			url: "../images/118.jpg"
		},
		{
			id: 10,
			url: "../images/119.jpg"
		},
		{
			id: 11,
			url: "../images/120.jpg"
		},
		{
			id: 12,
			url: "../images/121.jpg"
		},
		{
			id: 13,
			url: "../images/122.jpg"
		},
		{
			id: 14,
			url: "../images/123.jpg"
		},
		{
			id: 15,
			url: "../images/124.jpg"
		},
		{
			id: 16,
			url: "../images/125.jpg"
		},
		{
			id: 17,
			url: "../images/126.jpg"
		},
		{
			id: 18,
			url: "../images/127.jpg"
		},
		{
			id: 19,
			url: "../images/128.jpg"
		},
		{
			id: 20,
			url: "../images/129.jpg"
		},
		{
			id: 21,
			url: "../images/130.jpg"
		},
		{
			id: 22,
			url: "../images/131.jpg"
		},
		{
			id: 23,
			url: "../images/132.jpg"
		},
		{
			id: 24,
			url: "../images/133.jpg"
		},
		{
			id: 25,
			url: "../images/134.jpg"
		},
		{
			id: 26,
			url: "../images/135.jpg"
		},
		{
			id: 27,
			url: "../images/136.jpg"
		},
		{
			id: 28,
			url: "../images/137.jpg"
		},
		{
			id: 29,
			url: "../images/138.jpg"
		},
		{
			id: 30,
			url: "../images/139.jpg"
		},
		{
			id: 31,
			url: "../images/140.jpg"
		},
		{
			id: 32,
			url: "../images/141.jpg"
		},
		{
			id: 33,
			url: "../images/142.jpg"
		},
		{
			id: 34,
			url: "../images/143.jpg"
		},
		{
			id: 35,
			url: "../images/144.jpg"
		},
		{
			id: 36,
			url: "../images/145.jpg"
		},
		{
			id: 37,
			url: "../images/146.jpg"
		},
		{
			id: 38,
			url: "../images/147.jpg"
		},
		{
			id: 39,
			url: "../images/148.jpg"
		},
		{
			id: 40,
			url: "../images/149.jpg"
		}
	];

	$scope.images = [];
	$scope.images = arr.slice(0, 12);

	$scope.delete = function(index) {

		$scope.images.splice(index, 1);

	};

	$scope.addToList = function() {

		if(!$scope.images.length) {
			$scope.images = arr.slice(0, $scope.number);
		} else {
			for (var i = 0; i < arr.length; i++) {
				if (!$scope.images.includes(arr[i])) {
					if ($scope.number) {
						$scope.images = $scope.images.concat(arr[i]);
						$scope.number--;
					} else {
						return
					}
				}
			}
		}
	};

	$window.onscroll = function() {

		var limit = 3 || $scope.number;
		var scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);

		if (document.documentElement.clientHeight + $window.pageYOffset === scrollHeight) {
			console.log('YES!');
			if($scope.alowd) {
				$timeout(function() {
					for (var i = 0; i < arr.length; i++) {
						if (!$scope.images.includes(arr[i])) {
							if (limit) {
								$scope.images = $scope.images.concat(arr[i]);
								limit--;
							}
						}
					}
				}, 50)
			} else {
				console.log('Ups, forget to put scroll alowd')
			}
		}
	};
};
