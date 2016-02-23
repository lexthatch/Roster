app.controller('RosterController', function ($scope, DataService) {
    $scope.players = [];

     $scope.loadPlayers = function () {
        DataService.loadPlayers();
        console.log();
     },
    $scope.roster = [];

    $scope.addPlayer = function () {
      debugger; // don't be afraid to use this
        var player = {
            name: $scope.playerName,
            position: $scope.playerPosition,
            number: $scope.playerNumber,
        }

        $scope.roster.push(player);
    }

})