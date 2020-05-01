## INTRODUCTION<br>

#### Learning Objectives:

  * Define the significance of hartnellgovernor
  * Identify the parts of a hartnell governor such as ball, spindle, bell crank lever, sleeve, roller and spring
  * Derive governing equation of the hartnell governor
  * Observe the variation in bell crank lever, sleeve, roller, and spring due to change in rotational speed.


#### Theory
Governors, in general, are most useful means of controlling or regulating the speed of an engine based on varying levels of the load at the output. They are used in regulating the speed of the engine, which takes to the fact that the fuel injected is based on the speed variations seen along the shafts. <a href="references.html">[1]</a>
          <center>![alt text](images/hartnell.JPG "Parts")</center>
<center>Source: (<a href="http://www.jptechnoindia.com/theory_of_machine.html">http://www.jptechnoindia.com/theory_of_machine.html</a>)</center>

Hartnell governor is spring controlled governor. Two bell crank levers, each carrying a ball at one end and a roller on the other end. The roller fit into a groove in the sleeve. The frame is attached to the governor spindle and hence rotates with it. A helical spring in compression provides equal downward forces on the two rollers through a collar on the sleeve. With increase in speed, radius of rotation of balls increases and rollers lift the sleeve against the spring force. With decrease in speed, sleeve move downwards with the spring force. The movement of this sleeve is transferred to throttle valve.<a href="references.html">[1]</a>

#### Equations/formulas:
<img src="http://latex.codecogs.com/gif.latex?m" title="m" /> Mass of each ball (kg)

<img src="http://latex.codecogs.com/gif.latex?M" title="M" /> Mass of central load (N)

<img src="http://latex.codecogs.com/gif.latex?h" title="h" /> Height of governor (m)

<img src="http://latex.codecogs.com/gif.latex?r_1" title="r_1" /> Minimum radius of rotation (m)

<img src="http://latex.codecogs.com/gif.latex?r_2" title="r_2" /> Maximum radius of rotation (m)

<img src="http://latex.codecogs.com/gif.latex?\omega_1" title="\omega_1" /> Angular speed of the governor at minimum radius (rad/s)

<img src="http://latex.codecogs.com/gif.latex?\omega_2" title="\omega_2" /> Angular speed of the governor at maximum radius (rad/s)

<img src="http://latex.codecogs.com/gif.latex?S_1" title="S_1" /> Spring force exerted on the sleeve at <img src="http://latex.codecogs.com/gif.latex?\omega_1" title="\omega_1" /> (N)

<img src="http://latex.codecogs.com/gif.latex?S_2" title="S_2" /> Spring force exerted on the sleeve at <img src="http://latex.codecogs.com/gif.latex?\omega_2" title="\omega_2" />(N)

<img src="http://latex.codecogs.com/gif.latex?F_{c1}" title="F_{c1}" /> Centrifugal force at <img src="http://latex.codecogs.com/gif.latex?\omega_1=m\omega_1^2r_1" title="\omega_1=m\omega_1^2r_1" />(N)

<img src="http://latex.codecogs.com/gif.latex?F_{c2}" title="F_{c2}" /> Centrifugal force at <img src="http://latex.codecogs.com/gif.latex?\omega_2=m\omega_2^2r_2" title="\omega_2=m\omega_2^2r_2" />(N)

<img src="http://latex.codecogs.com/gif.latex?s" title="s" /> Stiffness of the spring or the force required to compress the spring by a unit distance

<img src="http://latex.codecogs.com/gif.latex?x" title="x" /> Length of the vertical or ball arm of the lever (m)

<img src="http://latex.codecogs.com/gif.latex?y" title="y" /> Length of the horizontal or sleeve arm of the lever (m)

<img src="http://latex.codecogs.com/gif.latex?r" title="r" /> Distance of fulcrum <img src="http://latex.codecogs.com/gif.latex?o" title="o" /> from the governor axis or the radius of rotation when the the governor is in mid-position (m)

<center><img src="http://latex.codecogs.com/gif.latex?h&space;=&space;{(r_2&space;-&space;r_1)}&space;\times&space;\frac{y}{x}" title="h = {(r_2 - r_1)}times\frac{y}{x}" /></center><br>

The stiffness of the spring is obtained as:
<center><img src="http://latex.codecogs.com/gif.latex?S&space;=&space;\frac&space;{s_2&space;-&space;s_1}{h}&space;=&space;2(\frac{F_{c2}-F_{c1}}{r_2-r_1})(\frac{x}{y})^2" title="S = \frac {s_2 - s_1}{h} = 2(\frac{F_{c2}-F_{c1}}{r_2-r_1})(\frac{x}{y})^2" /></center><br>

The distance of the ball from the centre:

<center><img src="http://latex.codecogs.com/gif.latex?r&space;=&space;\frac{F_{c1}r_2&space;-&space;F_{c2}r_1}{m\omega^2(r_2-r_1)&plus;(F_{c1}-F_{c2})}" title="r = \frac{F_{c1}r_2 - F_{c2}r_1}{m\omega^2(r_2-r_1)+(F_{c1}-F_{c2})}" /></center><br>


<center><img src="http://latex.codecogs.com/gif.latex?r&space;=&space;\frac{r_1r_2\omega_1^2&space;-&space;r_1r_2\omega_2^2&space;}{\omega^2r_2-\omega^2r_1&plus;\omega_1^2r_1&space;-&space;\omega_2^2r_2}" title="r = \frac{r_1r_2\omega_1^2 - r_1r_2\omega_2^2 }{\omega^2r_2-\omega^2r_1+\omega_1^2r_1 - \omega_2^2r_2}" /></center><br>
