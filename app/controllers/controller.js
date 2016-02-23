app.controller('RosterController', function ($scope) {
    // $scope.players = [];

    // $scope.addPlayer = function () {
    //   debugger;
    //     var player = {
    //         name: $scope.playerName,
    //         position: $scope.playerPosition,
    //         number: $scope.playerNumber,
    //     }

    //     $scope.players.push(player);
    // }
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