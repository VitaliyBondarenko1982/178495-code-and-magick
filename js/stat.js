'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var barHeight = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

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

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP/5, CLOUD_Y + GAP/5, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP/2);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP/2 + FONT_GAP);
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP/5 - FONT_GAP);
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH)*i, CLOUD_Y + GAP + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
