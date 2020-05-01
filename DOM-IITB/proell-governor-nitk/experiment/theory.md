## INTRODUCTION<br>

#### Learning Objectives:

  * Define the advantages over porter governor
  *  Identify the parts of a proell governor such as flyball, spindle, extended link, arms, dead weight, sleeve
  *  Explain the working and uses of proell governor
  *  Derive governing equation of the proell governor
  *  Observe the variation in links, arms and spindle of proell governor due to change in rotational speed.

#### Theory
Governors, in general, are most useful means of controlling or regulating the speed of an engine based on varying levels of the load at the output. They are used in regulating the speed of the engine, which takes to the fact that the fuel injected is based on the speed variations seen along the shafts.
          <center>![Porter Governor](images/proellimage.png "Parts")</center>
<center>Source: (<a href="https://www.essom.com/product/details/21/3913">https://www.essom.com/product/details/21/3913</a>)</center>

Proell governor is a type of gravity controlled centrifugal governor. The centrifugal governor works on the principle of centrifugal force, which gets applicable on the rotating balls. These balls are known as fly balls, which are attached to the spindle through links. The balls rotate with a spindle which is rotated by the engine through a bevel gear. The upper ends of the arms are pivoted to the spindle, so that the balls may rise up or fall down as they revolve about the vertical axis. The arms are connected by the links to a sleeve, which is keyed to the spindle. This sleeve revolves with the spindle; but can slide up and down. The balls and the sleeve rises when the spindle speed increases, and falls when the speed decreases. This controls the throttle valve thus regulating the fuel intake of the engine, hence controlling the speed. In Proell governor, fly balls are attached to the upward extension of the link and central load attached to the sleeve.<a href="references.html"> [2]</a>

#### Equations/formulas:
Mathematical equation:

<img src="http://latex.codecogs.com/png.latex?m" title="m" /> Mass of each ball (kg) <br>
<img src="http://latex.codecogs.com/png.latex?W" title="W" /> Weight of each ball = <img src="http://latex.codecogs.com/png.latex?m&space;\times&space;g" title="m \times g" /> (N) <br>
<img src="http://latex.codecogs.com/png.latex?M" title="M" /> Mass of central load (N)  <br>
<img src="http://latex.codecogs.com/png.latex?r" title="r" /> Radius of rotation (m) <br>
<img src="http://latex.codecogs.com/png.latex?h" title="h" /> Height of governor (m)<br>
<img src="http://latex.codecogs.com/png.latex?w" title="w" /> Angular speed of the ball in (rad/s) <br>
<img src="http://latex.codecogs.com/png.latex?F_c" title="F_c" /> Centrifugal force acting on the ball (N) <br>
<img src="http://latex.codecogs.com/png.latex?T_1" title="T_1" /> Tension in the arm (N) <br>
<img src="http://latex.codecogs.com/png.latex?T_2" title="T_2" /> Tension in the link (N) <br>
<img src="http://latex.codecogs.com/png.latex?\alpha" title="\alpha" />  Angle of inclination of the arm (rad)<br>
<img src="http://latex.codecogs.com/png.latex?\beta" title="\beta" /> Angle of inclination of the link (rad) <br>
          <center>![alt text](images/FBDproellgovernor.png "FreeBodyDiagram")</center>

By considering the equilibrium force for half of the governor referring above figure.The instantaneous centre(I) lies on an extension of PF and MD in a leftward direction. BM is drawn a perpendicular to the ID. If we take a moment of inertia through I,
<center><img src="http://latex.codecogs.com/png.latex?F_c&space;\times&space;BM&space;=&space;w&space;\times&space;IM&space;&plus;\frac{W}{2}&space;\times&space;ID&space;=&space;m&space;\times&space;g&space;\times&space;IM&space;&plus;&space;\frac{Mg}{2}ID" title="F_c \times BM = w \times IM +\frac{W}{2} \times ID = m \times g \times IM + \frac{Mg}{2}ID" /></center>
<center><img src="http://latex.codecogs.com/png.latex?F_c&space;=&space;m&space;\times&space;g&space;\times&space;\frac{IM}{BM}&plus;&space;\frac{Mg}{2}(\frac{IM&plus;MP}{BM})-------(1)" title="F_c = m \times g \times \frac{IM}{BM}+ \frac{Mg}{2}(\frac{IM+MP}{BM})-------(1)" /></center>
Where, <img src="http://latex.codecogs.com/png.latex?\(ID&space;=&space;IM&plus;MD\)" title="\(ID = IM+MD\)" />

Multiplying and dividing both sides by <img src="http://latex.codecogs.com/png.latex?FM" title="FM" /> we get,

<center><img src="http://latex.codecogs.com/png.latex?F_c&space;=&space;\frac{FM}{BM}[m*g*\frac{IM}{FM}&plus;\frac{M*g}{2}(\frac{IM}{FM}&plus;\frac{MP}{FM})]" title="F_c = \frac{FM}{BM}[m*g*\frac{IM}{FM}+\frac{M*g}{2}(\frac{IM}{FM}+\frac{MP}{FM})" /></center><br>

<center><img src="http://latex.codecogs.com/png.latex?F_c&space;=&space;\frac{FM}{BM}[m*g*\tan\alpha&plus;\frac{M*g}{2}(\tan\alpha&plus;\tan\beta)" title="F_c = \frac{FM}{BM}[m*g*\tan\alpha+\frac{M*g}{2}(\tan\alpha+\tan\beta)" /></center><br>

<center><img src="http://latex.codecogs.com/png.latex?F_c&space;=&space;\frac{FM}{BM}&space;*&space;\tan\alpha[m*g&plus;\frac{M*g}{2}(1&plus;\frac{\tan\alpha}{\tan\beta})" title="F_c = \frac{FM}{BM} * \tan\alpha[m*g+\frac{M*g}{2}(1+\frac{\tan\alpha}{\tan\beta})" /></center><br>
<center></center><br>

<center><img src="http://latex.codecogs.com/png.latex?m*\omega^2*r&space;=&space;\frac{FM}{BM}&space;*&space;\frac{r}{h}[m*g&plus;\frac{M*g}{2}(1&plus;q)" title="m*\omega^2*r = \frac{FM}{BM} * \frac{r}{h}[m*g+\frac{M*g}{2}(1+q)" /></center><br>

Where <img src="http://latex.codecogs.com/png.latex?\tan\alpha&space;=&space;\frac{r}{h}" title="\tan\alpha = \frac{r}{h}" /> and
<img src="http://latex.codecogs.com/png.latex?q&space;=&space;\frac{\tan\alpha}{\tan\beta}" title="q = \frac{\tan\alpha}{\tan\beta}" />

<center><img src="http://latex.codecogs.com/png.latex?\omega^2&space;=&space;\frac{FM}{BM}[\frac{m*g&plus;\frac{M*g}{2}(1&plus;q)}{m*g}]\frac{g}{h}----(2)" title="\omega^2 = \frac{FM}{BM}[\frac{m*g+\frac{M*g}{2}(1+q)}{m*g}]\frac{g}{h}-----(2)" /></center><br>

<center><img src="http://latex.codecogs.com/png.latex?N^2&space;=&space;\frac{FM}{BM}[\frac{m*g&plus;\frac{M*g}{2}(1&plus;q)}{m*g}]\frac{895}{h}" title="N^2 = \frac{FM}{BM}[\frac{m*g+\frac{M*g}{2}(1+q)}{m*g}]\frac{895}{h}" /></center><br>

Where <img src="http://latex.codecogs.com/png.latex?Where&space;\(\alpha&space;=\beta\)&space;then&space;\(q&space;=&space;1\)" title="Where \(\alpha =\beta\) then \(q = 1\)" /><br>
<center><img src="http://latex.codecogs.com/png.latex?N^2&space;=&space;\frac{FM}{BM}[\frac{m&plus;M}{m}]\frac{895}{h}" title="N^2 = \frac{FM}{BM}[\frac{m+M}{m}]\frac{895}{h}" /></center><br>
Hence,<br>
<center><img src="http://latex.codecogs.com/png.latex?N^2&space;\alpha\frac{1}{h}" title="N^2 \alpha\frac{1}{h}" /><a href="references.html">  [2]</a></center>
