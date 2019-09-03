let progressValue = 0;
let firstButtonValue = 1;
let secondButtonValue = 3;
let thirdButtonValue = 7;


$("#firstButton").click(function(){
	progressValue = progressValue + firstButtonValue;
	console.log ('Нажата первая кнопка, значение прогресс-бара: ' + progressValue + '%');
	if (progressValue >= 100) {
		reboot ();
	};
	drawingBar ();
});

$('#secondButton').click(function(){
	progressValue = progressValue + secondButtonValue;
	console.log ('Нажата вторая кнопка, значение прогресс-бара: ' + progressValue + '%');
	if (progressValue >= 100) {
		reboot ();
	};
	drawingBar ();
});

$('#thirdButton').click(function(){
	progressValue = progressValue + thirdButtonValue;
	console.log ('Нажата третья кнопка, значение прогресс-бара: ' + progressValue + '%');
	if (progressValue >= 100) {
		reboot ();
	};
	drawingBar ();
});

function drawingBar () {
	$('#progressBar').width(progressValue + '%');
	console.log ('Значение progressValue: ' + progressValue);
};

function reboot () {
	progressValue = 0;
	console.log ('Значение прогресс-бара сброшено и равно ' + progressValue + '%');
	alert ('Прогресс-бар заполнен!');
};


console.log ('Скрипт подгрузился');