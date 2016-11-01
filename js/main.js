// GABRIEL ST-AMANT & XAVIER SALVATORE

var scrollLocation = 0;
var windowHeight = 0;
var maxScroll = 10000;
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
	toggleCity(cityMontreal, isAtPercent(20,35));
	toggleCity(cityVenice, isAtPercent(35,50));
	toggleCity(cityBangkok, isAtPercent(50,65));
	toggleCity(cityAmsterdam, isAtPercent(65,80));
	toggleCity(cityFrancisco, isAtPercent(80,95));
});

function init () 
{
	scrollLocation = $(window).scrollTop();
	windowHeight = $(window).height();
	waterLevel();
	shiftYear();
}

function toggleCity(city, isVisible)
{
	if(isVisible)
	{
		city.find('.city-info').addClass('visible');
		city.find('.city-bubble').addClass('visible');
	}
	else
	{
		city.find('.city-info').removeClass('visible');
		city.find('.city-bubble').removeClass('visible');
	}
}

function waterLevel () 
{
	wave1.css({ 'top': pxToPercent(scrollLocation)-5+'%'});
	wave2.css({ 'top': pxToPercent(scrollLocation*0.8)-5+'%'});
	wave3.css({ 'top': pxToPercent(scrollLocation*0.6)-5+'%'});
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