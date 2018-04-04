'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_TO_BAR = 50;
var GAP_TO_SHADOW = 10;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var PADDING_TOP = 20;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getBlueColor = function() {
    return 'hsl(240, 100%, '+Math.floor(Math.random()*100)+'%)'
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_TO_SHADOW, CLOUD_Y + GAP_TO_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_TO_BAR, CLOUD_Y + PADDING_TOP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_TO_BAR, CLOUD_Y + PADDING_TOP + FONT_GAP);

  var maxTime = getMaxElement(times);
  var rectX;
  var rectY;
  var rectHeight;
  var textX;
  var textY;

  for (var i = 0; i < players.length; i++) {
    rectX = CLOUD_X + GAP_TO_BAR + (GAP_TO_BAR + BAR_WIDTH)*i;
    rectY = CLOUD_Y + GAP_TO_BAR + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime + PADDING_TOP;
    rectHeight = (BAR_HEIGHT * times[i]) / maxTime;

    textX = CLOUD_X + GAP_TO_BAR + (GAP_TO_BAR + BAR_WIDTH) * i;

    textY = CLOUD_Y + CLOUD_HEIGHT - PADDING_TOP - FONT_GAP;

    if (players[i] === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = getBlueColor();
  }
    ctx.textBaseline = "bottom";
    ctx.fillText(Math.floor(times[i]), rectX, rectY);
    ctx.textBaseline = "top";
    ctx.fillRect(rectX, rectY, BAR_WIDTH, rectHeight);
    ctx.fillText(players[i], textX, textY);
  }
};
