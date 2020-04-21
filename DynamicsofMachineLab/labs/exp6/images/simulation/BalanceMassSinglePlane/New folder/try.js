var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var PI2 = Math.PI * 2;
var corners = []
corners.push({
    x: 50,
    y: 150
});
corners.push({
    x: 150,
    y: 40
});
corners.push({
    x: 250,
    y: 80
});
corners.push({
    x: 180,
    y: 115
});
var rectStrokeStyle = "black";

// draw everything

drawAll();


function drawAll() {

    // draw the polygon
    ctx.beginPath();
    ctx.moveTo(corners[0].x, corners[0].y);
    for (var i = 1; i < corners.length; i++) {
        var c = corners[i];
        ctx.lineTo(c.x, c.y);
    }
    ctx.closePath();
    ctx.strokeStyle = rectStrokeStyle;
    ctx.lineWidth = 2;
    ctx.stroke();

    // draw anchor points on each corner
    for (var i = 0; i < corners.length; i++) {
        drawAnchor(corners[i], "blue");
    }

    // draw the angle symbols on corners
    for (var i = 0; i < corners.length - 2; i++) {
        drawAngleSymbol(corners[i], corners[i + 1], corners[i + 2]);
    }
    // draw the last 2 angle symbols
    var n = corners.length;
    drawAngleSymbol(corners[n - 2], corners[n - 1], corners[0]);
    drawAngleSymbol(corners[n - 1], corners[0], corners[1]);


}

function drawAnchor(point, color) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, PI2);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

function drawAngleSymbol(pt3, pt2, pt1) {
    var dx1 = pt1.x - pt2.x;
    var dy1 = pt1.y - pt2.y;
    var dx2 = pt3.x - pt2.x;
    var dy2 = pt3.y - pt2.y;
    var a1 = Math.atan2(dy1, dx1);
    var a2 = Math.atan2(dy2, dx2);
    var a = parseInt((a2 - a1) * 180 / Math.PI + 360) % 360;
    // draw angleSymbol
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(pt2.x, pt2.y);
    ctx.arc(pt2.x, pt2.y, 20, a1, a2);
    ctx.closePath();
    ctx.strokeStyle = "red";
    ctx.globalAlpha = 0.25;
    ctx.stroke();
    ctx.restore();
    ctx.fillStyle = "black";
    ctx.fillText(a, pt2.x + 15, pt2.y);

}