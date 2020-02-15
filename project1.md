## Project 1

In our first project, you'll explore machine learning and get a sense for what modern techniques are capable of today.

The goals are:
- Learn about some of the crazy, creepy, and inspiring artistic potential of machine learning.
- Get familiar with some libraries for "Deep Learning".
- Develop comfort with running other people's code from the web that contains a lot of advanced stuff you may not understand.
- Time permitting, gain some experience in a non-JavaScript programming language.

### Week 1

In class, I introduced a [bunch of concepts and examples of things](machine-learning.pdf) that you can do with modern machine learning. In this first assignment, you'll explore some of those things.

Start by exploring [these p5.js sketches](https://editor.p5js.org/ml5/sketches) that use the ml5.js library for machine learning. Try a few of them out. Observe that they can be somewhat flaky and slow. Welcome to machine learning! (Please note: some of these only work in Chrome! Please use Chrome for this assignment.)

Make sure to try out the Style Transfer, YOLO, and PoseNet examples from the ml5.js examples above. Learn about what the [ml5.js](https://ml5js.org) library is capable of by visiting that link and reading through.

Next, I want you to make a change to the [YOLO - webcam](https://editor.p5js.org/ml5/sketches/IE_P4q2m0LV) example -- make sure you "duplicate" the sketch into your account first:

**Assignment**: Modify the `draw()` function so that when a **person** is detected, the camera image goes blank and instead you only see the text **STOP LOOKING AT ME**. You should not need much more than an `if` statement -- but you will need to find where the category, or "class name", can be found, so that you can compare it with `"person"` and derermine whether to blank the screen and display the text.

<!--
**Assignment**: Make another modification, based on another class of object that might be detected. Or, two of the same object? 

**Assignment**: Btw, what kinds of objects does the YOLO sketch detect, exactly? Where does that list come from? Do some research and answer the two previous questions.
-->

### Week 2

In class, we explored the [Posenet webcam](http://editor.p5js.org/ml5/sketches/cO4CGs7nGpt) sketch and modified it to perform the same action as YOLO -- hiding the video and displaying text when a person is detected, and changing that text if two or more people are detected.

Then, we deconstructed and wrote code for the simplest possible Pong game: two paddles and a ball that bounces between them, using the `mouseY` variable to control, based on this deconstruction:

Data | Render | Simulation | User Events
-----|--------|------------|------------
`x`, `y` for ball | draw left paddle | move ball | mouseY -> paddle positions (both)
`vx`, `vy` for ball | draw right paddle | bounce ball on top/bottom walls |
`leftPaddle` (y) | draw ball | bounce ball and check paddle hits |
`rightPaddle` (y) |          | |

Finally, we *merged* that code into [this Posenet webcam sketch](posepong-starter.js). (Note: this code won't work if you just paste it into a new p5.js editor. Instead, follow the link to the [Posenet webcam sketch](http://editor.p5js.org/ml5/sketches/cO4CGs7nGpt) and paste the PosePong code into there.

With that done, we modified the code to set `leftPaddle = rightPaddle = poses[0].pose.nose.y`, where `poses[0].pose.nose.y` is the y-position of the first person found by Posenet. (We also enclosed that assignment in an `if` statement with the condition `poses.length >= 1`!)

In this week's and next week's homework assignments, we'll ask you to continue working on PosePong.

 - **Assignment**: Make two-player pong work! The easy way to get started is to update your `if` statement condition to `poses.length == 2` and then assume `poses[0]` is the person on the left and `poses[1]` is the person on the right, and then use each pose's `.pose.nose.y` property to set either `leftPaddle` (for pose 0) or `rightPaddle` (for pose 1). 
   
   But our left/right assumption isn't necessarily valid! It could be that Posenet finds the right person first, and the left person second, and thus the order in the `poses` array will be backwards. One way to address this is to first figure out which of `poses[0]` or `poses[1]` has the nose on the left side, and which is on the right side (more `if` statements, this time checking `.x` against `width/2` perhaps?), and then setting `leftPaddle` or `rightPaddle` as appropriate. Try this.
   
 - **Assignment**: Add scoring to your pong game! You'll need a couple more pieces of data (scores!) and rendering (drawing the scores!), and you'll need to update the simulation so that when the ball misses a paddle, you update the score and then somehow reset the game state (i.e., move the ball back to a starting position). 
   
   Very conveniently, the code you're working from already has a `// game over` comment right where it detects a paddle miss!
 
 - **Challenge**: One can only imagine that two people playing this game in a public space will attract spectators -- spectators that will also be recognzied as people by Posenet! Suddenly, our `poses.length == 2` condition will no longer be true. How can we identify and use the pose data of the two people closest to the camera?
   
   One possibility is to use the distance between each detected pose's eyes to find the two poses "closest" (at least, ignoring differences in inter-eye distance between people) to the camera, and then pick left/right based on position as you did above. But there are other ways as well!

As always, upload your code to GitHub and [email it to us](mailto:zamfi@cca.edu,rolf.widenfelt@cca.edu) -- and please reach out by email or on Slack if you're stuck!

### Week 3

In class, we went over the homework, and looked at a few ways to solve the challenge above. Then, we used [Teachable Machine](http://teachablemachine.withgoogle.com/) to build an image classifier.

In this week's homework, we want you to actually do something with your own trained classifier.

 - **Assignment**: Make an object counter.
   
   First, choose a few objects and train a new image classifier using Teachable Machine. In addition to recognizing the objects themselves, you'll want to include an "empty" class, when there isn't any object visible.
   
   Use the default "p5.js Web Editor" export (don't forget to copy your model ID over!) and modify the sketch to count and display how many times your sketch sees each object. (Get creative with your display here!)
   
   One complexity is that your code will be tempted to count every *frame* that an object is visible, but we don't want this -- you'll need some way to track when the classification switches back to "empty" and then another object. Consider using a variable that tracks whether you were *just looking at* empty.
   
 - **Challenge**: Instead of counting, just show a list of the 10 most recent classified objects.
 
As always, upload your code to GitHub and [email it to us](mailto:zamfi@cca.edu,rolf.widenfelt@cca.edu) -- and please reach out by email or on Slack if you're stuck!

Bring your objects to class so you can demo your code!


<!--
### Week 3

In class, we went over the homework and discussed how one might implement PeoplePong (aka YOPO) using the [YOLO detector](https://editor.p5js.org/ml5/sketches/K_R2cZsR8Wu) and person objects. In workshop, some of you experimented with other ML models like [PoseNet](https://editor.p5js.org/ml5/sketches/K_R2cZsR8Wu) that tracks people in a scene and where their major mobile body parts are (eyes, ears, nose, torso, arms, legs, wrists, elbows, knees, and ankles).

For this week's **assignment**, I'd like you to complete your in-class group project of Pong using visual input of a human body. Use YOLO or PoseNet (or another model!) to track people and use that tracking data to control the paddles (and other stuff?) in-game. Upload your code to GitHub, and also publish your work through the p5js editor by emailing me a link to your project: click the **share** option in the p5.js web editor's File menu and [email me](mailto:zamfi@cca.edu) the "Edit" link as well as the GitHub link. (Make sure to note who contributed what in the `Readme.md` file.)

Make something your team is proud of -- it should be beautiful or artistically interesting in addition to being technically capable. I'm excited to see what you come up with!
-->
