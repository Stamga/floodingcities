// GABRIEL ST-AMANT & XAVIER SALVATORE

var scrollLocation = 0;
var windowHeight = 0;
var maxScroll = 100000;
var currentYear = 2016;

var yearEl = $('.year-number');
var wave1 = $('.water-wave-1');
var wave2 = $('.water-wave-2');
var wave3 = $('.water-wave-3');

var cityMontreal = $('#city-montreal');
var cityBangkok = $('#city-bangkok');
var cityAmsterdam = $('#city-amsterdam');
var cityFrancisco = $('#city-francisco');
var cityVenice = $('#city-venice');

$(function() 
{
	setTimeout(function(){ window.scrollTo(0, 0); }, 5);
	init();
});

$(window).scroll(function () 
{
	init();
	toggleCity(cityVenice, isAtYear(2091,2119), isAtYear(2091));
	toggleCity(cityBangkok, isAtYear(2121,2151), isAtYear(2121));
});

function init () 
{
	scrollLocation = $(window).scrollTop();
	windowHeight = $(window).height();
	waterLevel();
	shiftYear();
}

function toggleCity(city, isVisible, isVisibleAfter)
{
	var delay = setTimeout(function(){}, 10);
	if(isVisible)
	{
		city.removeClass('initial');
		city.removeClass('completed');
		city.addClass('detailed');
	}
	else if (isVisibleAfter)
	{
		city.removeClass('initial');
		city.removeClass('detailed');
		city.addClass('completed');
	}
	else
	{
		city.removeClass('initial');
		city.removeClass('detailed');
		city.removeClass('completed');
	}
}

function waterLevel () 
{
	wave1.css({ 'top': pxToPercent((scrollLocation*0.78+23000))-5+'%'});
	wave2.css({ 'top': pxToPercent((scrollLocation*0.78+23000)*0.8)-5+'%'});
	wave3.css({ 'top': pxToPercent((scrollLocation*0.78+23000)*0.6)-5+'%'});
}

function shiftYear() 
{
	currentYear = Math.round(2016+5*(100-pxToPercent(scrollLocation)));
	yearEl.html(currentYear);
}

function pxToPercent (px) 
{
	return 100 - px/(maxScroll-windowHeight)*100;
}

function percentToPx (percent) 
{
	return percent/100*(maxScroll-windowHeight);
}


function isAtPercent (minPercent, maxPercent) 
{
	if (maxPercent)
	{
		if(scrollLocation > percentToPx(minPercent) && scrollLocation < percentToPx(maxPercent) ) 
		{
			return true;
		}
	}

	else 
	{
		if(scrollLocation > percentToPx(minPercent) ) 
		{
			return true;
		}
	}
}


function isAtYear (minYear, maxYear) 
{
	if (maxYear)
	{
		if(currentYear > minYear && currentYear < maxYear ) 
		{
			return true;
		}
	}

	else 
	{
		if(currentYear > minYear ) 
		{
			return true;
		}
	}
}