// Get from shapes.js 
// require("./shapes.js")

// FOLLOWING TEST SHOULD PASS

describe(''), () => {
    describe('', () => {
        it('', () => {
            const shape = newTiangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150,10 240,180 60,180" fill="blue"></polygon>');
        });
    });


    describe('', () => {
        it('', () => {
            const shape = newCircle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"></circle>');
        });
    });


    describe('', () => {
        it('', () => {
            const shape = newRectangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="65" y="40" width="150" height="100" fill="blue"></rect>');
        });
    });
}
