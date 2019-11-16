function Ball(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.display = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = color;
        ctx.closePath();
        ctx.stroke();
    }

    this.updatePosition = function (width, height, wall) {
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        if (this.x - radius < 0 || this.x + radius > width) { // reverse
            this.dx = -this.dx;
        }
        if (this.y - radius < 0 || this.y + radius> height) { // reverse
            this.dy = -this.dy;
        }
        for(let i = 0; i < wall.length; i++) {
            if (wall[i]) {
                if (wall[i].isInside(this.x + this.dx, this.y)) {
                this.dx = -this.dx; // reverse
                }
                if (wall[i].isInside(this.x, this.y + this.dy)) {
                this.dy = -this.dy; // reverse
                }
            }
        }
        

    }

    
}

export default Ball; 