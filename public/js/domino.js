//===/public/domino.js
function sizeCompare(compArr,n){
	var x ={};
	compArr.forEach(function(element){
		if(element.num==n)
			x=element;
	});
	return x;
}

function domino(n){
	if(n==0)
		return [2,1,.25]; //height,width,thick of standard domino
	var x =[];
	domino(n-1).forEach(function(dom){
		x.push(1.67*dom);
	});
	return x;
}

function numberFormat(num){
	var x=num.toString();
	var y=x.replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,');
	return y;
}
	
function inchesToFeet(num, decimal){
	if(isNaN(decimal))
		decimal=0;
	return numberFormat((num/12).toFixed(decimal));
}

var app = angular.module('main-app',[]);

app.controller('main-ctrl',function($scope, $http){
    $scope.result={};
    
    //get the comparison JSON file
    $http.get("/api/domino")
    	.success(function(data){
    		$scope.compArr=data;
    		//console.log(data);
    	});
    
    
    //function to get domino dimensions and pass them to view
    $scope.countDomino = function(n){
        var x = domino(n);
        $scope.result.height = "Height: "+inchesToFeet(x[0])+" feet";
        $scope.result.width = "Width: "+inchesToFeet(x[1])+" feet";
        $scope.result.thick = "Thickness: "+inchesToFeet(x[2])+" feet";
    }
});