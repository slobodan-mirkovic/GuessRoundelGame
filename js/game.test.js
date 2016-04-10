describe("Game", function() {
    describe("getRandomNumber", function() {
         it("should return number less than max", function() {
         var result = getRandomNumber(5);
         expect(result).toBeLessThan(6);
  });
    }); 
});