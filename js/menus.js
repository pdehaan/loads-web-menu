require([
  "dojo/store/Memory", "dijit/form/ComboBox", "dojo/domReady!"
],

function states(Memory, ComboBox){
  var stateStore = new Memory({
    data: [
      {name:"Alabama", id:"AL"},
      {name:"Delaware", id:"DE"}
    ]
  });

  var comboBoxStates = new ComboBox({
    id: "stateSelect",
    name: "state",
    value: "California",
    store: stateStore,
    searchAttr: "name"
  }, "stateSelect").startup();

});


function theController($scope) {
    var menu = angular.copy.menu;
    $scope.update = menu; //angular.copy.menu;

    $scope.instance_types = [
      't2.micro',
      't2.small',
      't2.medium',
      'm3.medium',
      'm3.large',
      'm3.xlarge',
      'm3.2xlarge'
    ];
}
