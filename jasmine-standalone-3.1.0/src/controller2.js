
$( document ).ready(function() {
  var frame = new Frame()

  $ ('#score').text(frame.totalScore)
  $ ('#frame').text(frame.frameNumber)

  $( "#input2" ).click(function() {
    var bonus = parseInt( $("input[id='bonus']").val() )
    var bonus2 = parseInt( $("input[id='bonus2']").val() )


    if ( !$("input[id='bonus2']").val()) {
      frame.bonus(bonus)
      alert("Game Over")
      showScore()
      frame.frameNumber = 10
      showFrame()
    }

    else {
      frame.bonus(bonus)
      frame.bonus(bonus2)
      alert("Game Over")
      showScore()
      frame.frameNumber = 10
      showFrame()
    }

  })

  console.log("32")

  $( "#input" ).click(function() {
    console.log("confirm")
    var one = parseInt( $("input[id='roll1']").val() )
    var two = parseInt( $("input[id='roll2']").val() )

    if (frame.frameNumber === 10) {
      if ( !$("input[id='roll2']").val()) {
        frame.roll1( one )
        showScore()
        showFrame()
        alert("Final Frame: Please throw two bonus throws")
        $('#input').click(false)
      }
      else {
      frame.roll1( one )
      frame.roll2( two )
      showScore()
      showFrame()
      }

      if (one + two === 10) {
        alert("Final Frame: Please throw one bonus throw")
        frame.frameNumber = 10
      }
      else {
        alert("Game Over")
        showScore()
        frame.frameNumber = 10
        showFrame()
        $('#input').click(false)
      }
      }

    else {

      if ( !$("input[id='roll2']").val()) {
        frame.roll1( one )
        showScore()
        showFrame()
      }
      else {
      frame.roll1( one )
      frame.roll2( two )
      showScore()
      showFrame()
      }
    }
  })

  $( '#reset').click(function () {
    newGame()
  })

  showScore = function() {
    $ ('#score').text(frame.totalScore)
  }

  showFrame = function() {
    $ ('#frame').text(frame.frameNumber)
  }

  newGame = function() {
    frame.totalScore = 0
    frame.frameNumber = 1
    showScore()
    showFrame()
  }

});
//   $( "#temperature-down" ).click(function() {
//     if ((thermostat.temperature - 1) < thermostat.minimumTemperature) {
//       alert( "Minimum Temperatre Breached!")
//     }
//     thermostat.down(1)
//     showTemp()
//   })
//
//   $( "#temperature-reset" ).click(function() {
//     thermostat.reset()
//     showTemp()
//   })
//
//   $( "#powersaving-on" ).click(function() {
//     thermostat.powerSaver("on")
//     showPower()
//   })
//
//   $( "#powersaving-off").click(function() {
//     thermostat.powerSaver("off")
//     showPower()
//   })
//
//   $ ("#power-saving-status").text(function() {
//     thermostat.powerSaverStatus()
//   })
//
//   $ ("#current-city").change(function() {
//     var city = $('#current-city').val()
//     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=9daf5b75983737ffdad5d657c602861b&units=metric', function(data) {
//       $('#temperature').text(data.main.temp)
//     })
//
//   })
//
// })
//
//   $("#power-saving-status").text(thermostat.powerSaverStatus())
//   $("#current-temp").text(thermostat.temperature)
//
//   showTemp = function() {
//     $("#current-temp").text(thermostat.temperature)
//   }
//
//   showPower = function() {
//     $("#power-saving-status").text(thermostat.powerSaverStatus())
//   }

  // alert = function() {
  //   alert( "The link will no longer take you to jquery.com" );
  // }
