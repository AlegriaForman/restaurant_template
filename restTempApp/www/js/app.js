// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

  .state('tabs.home', {
    url: '/home',
    views: {
      'home-tab': {
      templateUrl: 'templates/home.html'
      }
    }
  })

  .state('tabs.burger', {
    url: '/burger',
    views: {
      'burger-tab': {
      templateUrl: 'templates/burger.html'
      }
    }
  })

  .state('tabs.teriyaki', {
    url: '/teriyaki',
    views: {
      'teriyaki-tab': {
      templateUrl: 'templates/teriyaki.html'
      }
    }
  })

  .state('tabs.shakes', {
    url: '/shakes',
    views: {
      'shakes-tab': {
      templateUrl: 'templates/shakes.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/home');

  // $ionicConfigProvider.tabs.position('top');
})

.controller('GalleryCtrl', function($scope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

  $scope.burgerImages = [{
  src: 'img/paulsburger.jpg'
  }, {
    src: 'img/paulsburger2.jpg'
  }, {
    src: 'img/burgerguac.jpg'
  }, {
    src: 'img/burgermush.jpg'
  }];

  $scope.teriyakiImages = [{
  src: 'img/almondchx.jpg'
  }, {
    src: 'img/beefbroccoli.jpg'
  }, {
  src: 'img/chowmein.jpg'
  }, {
    src: 'img/chxteriyaki.jpg'
  }, {
    src: 'img/generaltsao.jpg'
  }, {
    src: 'img/honeysesamechx.jpg'
  }, {
    src: 'img/kungpaochx.jpg'
  }, {
    src: 'img/mongobeef.jpg'
  }, {
    src: 'img/yakisoba.jpg'
  }];

  $scope.shakesImages = [{
  src: 'img/chxnuggets.jpg'
  }, {
    src: 'img/mushroom.jpg'
  }, {
    src: 'img/onionrings.jpg'
  }, {
    src: 'img/chxstrips.jpg'
  }];

  $scope.zoomMin = 1;

  $scope.showBurgerImages = function(index) {
  $scope.activeSlide = index;
  $scope.showModal('templates/burger-gallery-zoomview.html');
  };

  $scope.showTeriyakiImages = function(index) {
  $scope.activeSlide = index;
  $scope.showModal('templates/teriyaki-gallery-zoomview.html');
  };

    $scope.showShakesImages = function(index) {
  $scope.activeSlide = index;
  $scope.showModal('templates/shakes-gallery-zoomview.html');
  };


  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove();
  };

  $scope.updateSlideStatus = function(slide) {
    var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
    if (zoomFactor == $scope.zoomMin) {
      $ionicSlideBoxDelegate.enableSlide(true);
    } else {
      $ionicSlideBoxDelegate.enableSlide(false);
    }
  };
});
