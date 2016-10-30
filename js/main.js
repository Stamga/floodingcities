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

$(function() {
	init();
});

$(window).scroll(function () {
	init();
	if(isAtPercent(20,35)) {
		cityMontreal.find('.city-info').addClass('visible');
	}else {
		cityMontreal.find('.city-info').removeClass('visible');
	}
	if(isAtPercent(30)) {
		cityMontreal.find('.city-bubble').addClass('visible');
	}else {
		cityMontreal.find('.city-bubble').removeClass('visible');
	}
});

function init () {
	scrollLocation = $(window).scrollTop();
	windowHeight = $(window).height();
	waterLevel();
	shiftYear();
}

function waterLevel () {
	wave1.css({ 'top': pxToPercent(scrollLocation)+'%'});
	wave2.css({ 'top': pxToPercent(scrollLocation*0.8)+'%'});
	wave3.css({ 'top': pxToPercent(scrollLocation*0.6)+'%'});
}

function shiftYear() {
	currentYear = Math.round(2016+5*(100-pxToPercent(scrollLocation)));
	yearEl.html(currentYear);
}

function pxToPercent (px) {
	return 100 - px/(maxScroll-windowHeight)*100;
}

function percentToPx (percent) {
	return percent/100*(maxScroll-windowHeight);
}


function isAtPercent (minPercent, maxPercent) {
	if (maxPercent){
		if(scrollLocation > percentToPx(minPercent) && scrollLocation < percentToPx(maxPercent) ) {
			return true;
		}
	}else {
		if(scrollLocation > percentToPx(minPercent) ) {
			return true;
		}
	}
}