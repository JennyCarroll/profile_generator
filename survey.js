const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's an activity you like doing? ", (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);

  rl.question("What do you listen to while doing that? ", (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);

    rl.question(
      "Which meal is your favourite (eg: dinner, brunch, etc.) ",
      (answer3) => {
        console.log(`Thank you for your valuable feedback: ${answer3}`);

        rl.question(
          "What's your favourite thing to eat for that meal? ",
          (answer4) => {
            console.log(`Thank you for your valuable feedback: ${answer4}`);

            rl.question(
              "Which sport is your absolute favourite? ",
              (answer5) => {
                console.log(`Thank you for your valuable feedback: ${answer5}`);

                rl.question(
                  "What is your superpower? In a few words, tell us what you are amazing at! ",
                  (answer6) => {
                    console.log(
                      `Thank you for your valuable feedback: ${answer6}`
                    );
                    console.log(
                      `I love to ${answer1} while listening to ${answer2} and eating ${answer3} and showering with ${answer4} before taking out a loan for a ${answer5} and then ${answer6}`
                    );
                    rl.close();
                  }
                );
              }
            );
          }
        );
      }
    );
  });
});

// Devani loves listening to Ludovico Einaudi while coding,
// devouring Yak Momos for brunch, prefers Tennis over any other sport,
// and is amazing at dropping mad puns at inopportune times.
