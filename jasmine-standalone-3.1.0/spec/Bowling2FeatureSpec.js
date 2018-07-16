
describe("Button click event tests", function() {
  // var frame

  beforeEach(function() {
    // jasmine.getFixtures().fixturesPath = '../index.html'
    var frame = new Frame()

    frame = new Frame()
    setFixtures(
      +'<html>'
      +'<head>'
      +  '<title> BOWLING </title>'
      +    '<style>'
      +      'a.test {'
      +        'font-weight: bold;'
      +      '}'
+
+          '  body {'
+          '  width: 600px;'
+            'margin: 0 auto;'
+            'border: 10px'
+            '}'
+          '</style>'
+      '</head>'
+      '<body>'
+        '<section>'
+          '<h1> Current Score: <span id = "score"> </span></h1>'
+          '<h1> Current Frame: <span id = "frame"> </span></h1>'
+          '<h1> Test: <span id = "roll"> </span></h1>'
+
+      '  </section>'
+        '<section>'
+          '<p>'
+          'roll1: <input type="text" id="roll1">'
+          'roll2: <input type="text" id="roll2">'
+
+          '<br><button id="input">Submit</button>'
+          '<button id="reset">Reset</button></br>'
+
+          'bonus: <input type="text" id="bonus">'
+          'bonus2: <input type="text" id="bonus2">'
+          '<br><button id="input2">Submit</button>'
+
+
+
+          '</p>'
+        '</section>'
+        '<script src="/Users/Layth/Projects/Bowling/bowling-challenge/jasmine-standalone-3.1.0/src/jquery.js"></script>'
+        '<script src="/Users/Layth/Projects/Bowling/bowling-challenge/jasmine-standalone-3.1.0/src/bowling2.js"></script>'
+        '<script src="/Users/Layth/Projects/Bowling/bowling-challenge/jasmine-standalone-3.1.0/src/controller.js"></script>'
+        '</script>'
+      '</body>'
+    '</html>'
  )
})

      //   if ( !$("input[id='bonus2']").val()) {
      //     frame.bonus(bonus)
      //     alert("Game Over")
      //     showScore()
      //     frame.frameNumber = 10
      //     showFrame()
      //   }
      //
      //   else {
      //     frame.bonus(bonus)
      //     frame.bonus(bonus2)
      //     alert("Game Over")
      //     showScore()
      //     frame.frameNumber = 10
      //     showFrame()
      //   }
      //
      // })
      //
      // console.log("32")
      //
      // $( "#input" ).click(function() {
      //   console.log("confirm")
      //   var one = parseInt( $("input[id='roll1']").val() )
      //   var two = parseInt( $("input[id='roll2']").val() )
      //
      //   if (frame.frameNumber === 10) {
      //     if ( !$("input[id='roll2']").val()) {
      //       frame.roll1( one )
      //       showScore()
      //       showFrame()
      //       alert("Final Frame: Please throw two bonus throws")
      //       $('#input').click(false)
      //     }
      //     else {
      //     frame.roll1( one )
      //     frame.roll2( two )
      //     showScore()
      //     showFrame()
      //     }
      //     if (one + two === 10) {
      //       alert("Final Frame: Please throw one bonus throw")
      //       frame.frameNumber = 10
      //     }
      //     else {
      //       alert("Game Over")
      //       showScore()
      //       frame.frameNumber = 10
      //       showFrame()
      //       $('#input').click(false)
      //     }
      //     }
      //
      //   else {
      //
      //     if ( !$("input[id='roll2']").val()) {
      //       frame.roll1( one )
      //       showScore()
      //       showFrame()
      //     }
      //     else {
      //     frame.roll1( one )
      //     frame.roll2( two )
      //     showScore()
      //     showFrame()
      //     }
      //   }
      // })
      //
      // $( '#reset').click(function () {
      //   newGame()
      // })
      //
      // showScore = function() {
      //   $ ('#score').text(frame.totalScore)
      // }
      //
      // showFrame = function() {
      //   $ ('#frame').text(frame.frameNumber)
      // }
      //
      // newGame = function() {
      //   frame.totalScore = 0
      //   frame.frameNumber = 1
      //   showScore()
      //   showFrame()
      // }
      // +'})'
    // )
  // })

  describe("#roll1", function() {
    it('Submit is visible', function() {

      spyEvent = spyOnEvent('#input', 'click');
      $('#input').trigger( 'click' );
      expect('click').toHaveBeenTriggeredOn("#input");
      expect(spyEvent).toHaveBeenTriggered();
    })
  })

})
