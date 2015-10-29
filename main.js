module.exports = {

  taxCalculator: function(amount) {
      var a = amount;

      // tax bracket cuttoffs
      var b1 = 10;
      var b2 = 20;
      var b3 = 30;

      //tax bracket percentages
      var tp1 = 0.10;
      var tp2 = 0.07;
      var tp3 = 0.05;
      var tp4 = 0.03;

      //tax bracket calculations
      var t1 = (a * tp1);
      var t2 = ((b1*tp1) + ((a-b1)*tp2));
      var t3 = ((b1*tp1 + (b2-b1)*tp2) + ((a-b2)*tp3));
      var t4 = ((b1*tp1 + (b2-b1)*tp2 + (b3-b2)*tp3) + ((a-b3)*tp4));

      //determining which calculation to return
      if(a <= b1) {
        return t1;
      } else if(a <= b2) {
        return t2;
      } else if(a <= b3) {
        return t3;
      } else if(a > b3) {
        return t4;
      } else {
        return "I have no idea";
      }
    }
  }
