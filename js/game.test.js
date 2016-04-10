describe("Game", function() {
    describe("getRandomNumber", function() {
         it("should return number less than max", function() {
         var result = getRandomNumber(5);
         expect(result).toBeLessThan(6);
  });
    }); 
   describe("getRandomNumbers", function() {
         it("should return n numbers", function() {
         var result = getRandomNumbers(10,20);
         expect(result.length).toEqual(10);
      });
    }); 
     describe("getRandomNumbers", function() {
         it("if n < max then n = max", function() {
         var result = getRandomNumbers(5,4);
         expect(result.length).toEqual(4);
      });
    }); 
     describe("getRandomNumbers", function() {
         it("no number > then max", function() {
         var result = getRandomNumbers(5,10);
         var max = result[0];
         for(i = 1; i < result.length; i++){
             if(result[i] > max){
                  max = result[i]; 
             }            
         }
         expect(max).toBeLessThan(10);
      });
    }); 
});