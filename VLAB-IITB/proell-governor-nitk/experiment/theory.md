## INTRODUCTION<br>

#### Learning Objectives:

  1. Identify the parts of a proell governor such as flyball, spindle, link, arms, dead weight, sleeve
  2. Explain the working and uses of proell governor
  3. Calculate the height of the governor with respect of rotational speed
  4. Examine the variation in the length of the links, length of arms and rotational speed of spindle of the porter governor
  5. Note down the minimum and maximum height of governor to its rotational speed and examine the results by plotting the graph.


#### Theory
Governors, in general, are most useful means of controlling or regulating the speed of an engine based on varying levels of the load at the output. They are used in regulating the speed of the engine, which takes to the fact that the fuel injected is based on the speed variations seen along the shafts.
          <center>![Porter Governor](images/proellimage.png "Parts")</center>
<center>Source: (<a href="https://www.essom.com/product/details/21/3913">https://www.essom.com/product/details/21/3913</a>)</center>

Proell governor is a type of gravity controlled centrifugal governor. The centrifugal governor works on the principle of centrifugal force, which gets applicable on the rotating balls. These balls are known as fly balls, which are attached to the spindle through links. The balls rotate with a spindle which is rotated by the engine through a bevel gear. The upper ends of the arms are pivoted to the spindle, so that the balls may rise up or fall down as they revolve about the vertical axis. The arms are connected by the links to a sleeve, which is keyed to the spindle. This sleeve revolves with the spindle; but can slide up and down. The balls and the sleeve rises when the spindle speed increases, and falls when the speed decreases. This controls the throttle valve thus regulating the fuel intake of the engine, hence controlling the speed. In Proell governor, fly balls are attached to the upward extension of the link and central load attached to the sleeve.<a href="references.html"> [2]</a>

#### Equations/formulas:
Mathematical equation:

<img src="./images/equations/m.png" title="m" /> Mass of each ball (kg) <br>
<img src="./images/equations/W.png" title="W" /> Weight of each ball = <img src="./images/equations/mg.png" title="m \times g" /> (N) <br>
<img src="./images/equations/bigM.png" title="M" /> Mass of central load (N)  <br>
<img src="./images/equations/r.png" title="r" /> Radius of rotation (m) <br>
<img src="./images/equations/h.png" title="h" /> Height of governor (m)<br>
<img src="./images/equations/omega.png" title="w" /> Angular speed of the ball in (rad/s) <br>
<img src="./images/equations/fc.png" title="F_c" /> Centrifugal force acting on the ball (N) <br>
<img src="./images/equations/t1.png" title="T_1" /> Tension in the arm (N) <br>
<img src="./images/equations/t2.png" title="T_2" /> Tension in the link (N) <br>
<img src="./images/equations/alpha.png" title="\alpha" />  Angle of inclination of the arm (rad)<br>
<img src="./images/equations/beta.png" title="\beta" /> Angle of inclination of the link (rad) <br>
          <center>![alt text](images/FBDproellgovernor.png "FreeBodyDiagram")</center>

By considering the equilibrium force for half of the governor referring above figure.The instantaneous centre(I) lies on an extension of PF and MD in a leftward direction. BM is drawn a perpendicular to the ID. If we take a moment of inertia through I,
<center><img src="./images/equations/fc1.png" title="F_c \times BM = w \times IM +\frac{W}{2} \times ID = m \times g \times IM + \frac{Mg}{2}ID" /></center>
<center><img src="./images/equations/fc2.png" title="F_c = m \times g \times \frac{IM}{BM}+ \frac{Mg}{2}(\frac{IM+MP}{BM})-------(1)" /></center>
Where, <img src="./images/equations/id.png" title="\(ID = IM+MD\)" />

Multiplying and dividing both sides by <img src="./images/equations/fm.png" title="FM" /> we get,

<center><img src="./images/equations/fc3.png" title="F_c = \frac{FM}{BM}[m*g*\frac{IM}{FM}+\frac{M*g}{2}(\frac{IM}{FM}+\frac{MP}{FM})" /></center><br>

<center><img src="./images/equations/fc4.png" title="F_c = \frac{FM}{BM}[m*g*\tan\alpha+\frac{M*g}{2}(\tan\alpha+\tan\beta)" /></center><br>

<center><img src="./images/equations/fc5.png" title="F_c = \frac{FM}{BM} * \tan\alpha[m*g+\frac{M*g}{2}(1+\frac{\tan\alpha}{\tan\beta})" /></center><br>
<center></center><br>

<center><img src="./images/equations/fc6.png" title="m*\omega^2*r = \frac{FM}{BM} * \frac{r}{h}[m*g+\frac{M*g}{2}(1+q)" /></center><br>

Where <img src="./images/equations/tanalpha.png" title="\tan\alpha = \frac{r}{h}" /> and
<img src="./images/equations/q.png" title="q = \frac{\tan\alpha}{\tan\beta}" />

<center><img src="./images/equations/omega2.png" title="\omega^2 = \frac{FM}{BM}[\frac{m*g+\frac{M*g}{2}(1+q)}{m*g}]\frac{g}{h}-----(2)" /></center><br>

<center><img src="./images/equations/n2.png" title="N^2 = \frac{FM}{BM}[\frac{m*g+\frac{M*g}{2}(1+q)}{m*g}]\frac{895}{h}" /></center><br>

Where <img src="./images/equations/abq.png" title="Where \(\alpha =\beta\) then \(q = 1\)" /><br>
<center><img src="./images/equations/n3.png" title="N^2 = \frac{FM}{BM}[\frac{m+M}{m}]\frac{895}{h}" /></center><br>
Hence,<br>
<center><img src="./images/equations/nfinal.png" title="N^2 \alpha\frac{1}{h}" /><a href="references.html">  [2]</a></center>
<center>(Equations Source: <a href="http://latex.codecogs.com/">latex.codecogs.com</a>)</center>
