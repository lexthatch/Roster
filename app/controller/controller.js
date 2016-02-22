app.controller('RosterController', function ($scope) {
    $scope.players = [];

    $scope.addPlayer = function () {

        var player = {
            name: $scope.playerName,
            position: $scope.playerPosition,
            number = $scope.playerNumber,
        }

        $scope.players.push(player);
    }
    $scope.roster = [];
    
    $scope.addPlayer = function () {
        
        var player = {
            name: $scope.playerName,
            position: $scope.playerPosition,
            number = $scope.playerNumber,
        }

        $scope.roster.push(player);
    }

})