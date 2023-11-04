class Cell {
    constructor(isAlive) {
        this.isAlive = isAlive;
    }
    
    numberOfNeighbours(numberOfNeighbours) {
        if (numberOfNeighbours === 0) {
            this.isAlive = false;
        }
    }
};

module.exports = {Cell};
