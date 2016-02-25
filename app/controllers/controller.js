app.controller('RosterController', function ($scope, DataService, $filter) {
    $scope.players = [];
    $scope.draftedPlayers = [];
    
    $scope.draftPlayer = function(player) {
        $scope.draftedPlayers.push(player)
    }

    $scope.loadPlayers = function () {
        DataService.loadPlayers();

    },

    $scope.setPlayers = function () {
        $scope.players = DataService.getAllPlayers();
        console.log($scope.players);
    }

    $scope.roster = [];

    $scope.addPlayer = function () {
        debugger; // don't be afraid to use this
        var player = {
            fullname: $scope.playerName,
            position: $scope.playerPosition,
            jersey: $scope.playerNumber,
            photo: "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"
        }

        $scope.players.push(player);
    };

    $scope.removePlayer = function () {

    };

    $scope.getPlayersByTeam = function () {
        $scope.players = $filter('filter')($scope.players, { pro_team: $scope.team });
    }

});