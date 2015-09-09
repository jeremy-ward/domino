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
	var x=num>12?(num/12).toFixed(decimal):num.toFixed(decimal);
	
	if(num>12&&x<=1){
		var y =" Foot";
	}
	else if(num>12){
		var y=" Feet"
	}
	else if(x<=1){
		var y=" Inch"
	}
	else{
		var y=" Inches"
	}
	x=x<1?"<1":numberFormat(x);
	return x+y;
}

var app = angular.module('main-app',[]);

app.controller('main-ctrl',function($scope, $http){
    $scope.result={};
    var compArr=[];
    $scope.hidden=true;
    $scope.warningShow=false;
    //get the comparison JSON file
    $http.get("/api/domino")
    	.success(function(data){
    		compArr=data;
    		//console.log(data);
    	});
    
    
    //function to get domino dimensions and pass them to view
    $scope.countDomino = function(n){
    	var x = domino(n-1);
    	if(n>7&&n<28){
    		$scope.message = "";
	    	$scope.result.nar=sizeCompare(compArr,n);
    		$scope.result.message="Domino "+ n + " could be:";
	        $scope.result.height = inchesToFeet(x[0])+" Tall";
	        $scope.result.width = inchesToFeet(x[1])+" Wide";
	        $scope.result.thick = inchesToFeet(x[2])+" Thick";
	        $scope.hidden=false;
	        $scope.warningShow=false;
    	}
    	else{
    		$scope.hidden=true;
    		$scope.warningShow=true;
    		$scope.message = "Pick 8-27 for comparison";
    		$scope.result.message="Domino "+ n + " could be:";
    		$scope.result.height = inchesToFeet(x[0])+" Tall";
	        $scope.result.width = inchesToFeet(x[1])+" Wide";
	        $scope.result.thick = inchesToFeet(x[2])+" Thick";
    	}
    }
});