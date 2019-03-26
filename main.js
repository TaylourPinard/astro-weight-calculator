var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

$(document).ready( function(){
    const planetSelect = $('#planets');
    const calculateButton = $('#calculate-button');
    const output = $('#output');

    var result;
    var index = 0; 

    planets.forEach(Element => {
        var planetName = Element[0].toString();
        var newOption = document.createElement("option");
        newOption.append(Element[0]);
        planetSelect.append(newOption);
        index++;
    });

    function calculateWeight(weight, planetName){
        for(i = 0; i <= planets.length; i++){
            if(planetName == planets[i][0]){
                return weight * planets[i][1];
            }
        }
    }

    calculateButton[0].addEventListener("click", function(){
        output.innerHTML = "";
        var userWeightTextbox = document.getElementById('user-weight'), 
            value = +(userWeightTextbox.value);
        var userWeight = userWeightTextbox.value;
        var planetName = planets[$('#planets option:selected').index()][0];
        result = calculateWeight(userWeight, planetName);
        output.append(`If you were on ${planetName}, you would weigh ${result}lbs!`);
    });
});
