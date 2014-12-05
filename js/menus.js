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

//
//function theController($scope) {
//  $scope.update = angular.copy.person;
//}
