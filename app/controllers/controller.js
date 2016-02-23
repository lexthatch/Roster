app.controller('RosterController', function ($scope, DataService) {
    $scope.players = [];

     $scope.loadPlayers = function () {
        DataService.loadPlayers();
        console.log();
     },
     $scope.setPlayers = function(){
         $scope.players = DataService.getAllPlayers();
         console.log($scope.players);
     }
     
    $scope.roster = [];

    $scope.addPlayer = function () {
      debugger; // don't be afraid to use this
        var player = {
            name: $scope.playerName,
            position: $scope.playerPosition,
            number: $scope.playerNumber,
        }

        $scope.roster.push(player);
    };
    $scope.removePlayer = function () {
        
    };
    $scope.getPlayersByTeam = function(){
        $scope.players = $filter('filter')($scope.players, {pro_team: $scope.team});
    }

});