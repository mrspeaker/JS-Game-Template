function Renderer(game) {
    this.game = game;
    game.subscribe("example", this.invalidateExample, this);
};
Renderer.prototype = {
    init: function() {
        this.fps = 60;
        this.step = 1 / this.fps;
        this.ctx = document.getElementById("board").getContext("2d");
    },
    
    update: function() {
        // Render model if necessary
        if(this.invalid.example) {
            var c = this.ctx;
            c.clearRect(0, 0, c.canvas.width, c.canvas.height);
            c.fillText(this.game.example, Math.random() * c.canvas.width, Math.random() * c.canvas.height)
            this.invalid.example = false;
        }
    },
    
    invalid: { value: true },
    invalidateExample: function(){ this.invalid.example = true; }
}