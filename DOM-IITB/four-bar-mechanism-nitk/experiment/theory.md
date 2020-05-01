## INTRODUCTION<br>

#### Learning Objectives:

1. State the concepts of dynamic analysis of four bar mechanisms
2. Understand the significance of parameter and select the variable accordingly.
3. Calculate the velocity, acceleration and force acting on each link.
4. Examine the calculated values with the simulation results
5. Evaluate how change in length, angle and driving force results in change of acceleration, velocity and work done by the mechanism


#### Theory
A four bar link mechanism or linkage is the most fundamental of the plane kinematics linkages. It is a much-preferred mechanical device for the mechanization and control of motion due to its simplicity and versatility<a href="references.html">[1]</a>. Basically, it consists of four rigid links which are connected in the form of quadrilateral by four pin joints. If a link completes its full rotation then it’s a crank motion and if it oscillates then rocker motion, the link opposite to the fixed link is the coupler and adjacent to fixed link are input and output link.

The dynamic analysis of the four bar mechanism is covered after understanding the kinematic analysis since the acceleration of the links are required to calculate the forces on the link. The analysis involves the offset analysis, acceleration of CG, forces on each link of four bar mechanism, with the help of position diagram, velocity and acceleration diagram.

OABC is a 4–bar mechanism. Link 2 rotates with constant angular velocityω2. <img src="http://latex.codecogs.com/gif.latex?G_2" title="G_2" />, <img src="http://latex.codecogs.com/gif.latex?G_3" title="G_3" /> & <img src="http://latex.codecogs.com/gif.latex?G_4" title="G_4" /> are the center of gravity and <img src="http://latex.codecogs.com/gif.latex?M_1" title="M_1" />, <img src="http://latex.codecogs.com/gif.latex?M_2" title="M_2" /> & <img src="http://latex.codecogs.com/gif.latex?M_3" title="M_3" /> the masses of links 1, 2 & 3 respectively.

<center><img src="images/formula.png" height="253" width="400"></center>

1. Draw the velocity & acceleration polygons for determine the linear acceleration of <img src="http://latex.codecogs.com/gif.latex?G_2" title="G_2" />, <img src="http://latex.codecogs.com/gif.latex?G_3" title="G_3" /> & <img src="http://latex.codecogs.com/gif.latex?G_4" title="G_4" />

2. Magnitude and sense of <img src="http://latex.codecogs.com/gif.latex?\alpha_3" title="\alpha_3" /> & <img src="http://latex.codecogs.com/gif.latex?\alpha_4" title="\alpha_4" />(angular acceleration) are determined using the results of step 1.

<center><img src="images/formula1.png" height="300" width="350"></center>

To determine inertia forces and couples

Link 2:

<img src="http://latex.codecogs.com/gif.latex?F_2" title="F_2" /> = accelerating force (towards O)

<img src="http://latex.codecogs.com/gif.latex?F_{i2}" title="F_{i2}" /> = inertia force (away from O)

Since <img src="http://latex.codecogs.com/gif.latex?\omega" title="\omega" /> is constant, <img src="http://latex.codecogs.com/gif.latex?\alpha_2" title="\alpha_2" /> = 0 and no Inertia torque involved.

<center><img src="images/formula2.png" height="253" width="200"></center>

Link3:

<center><img src="images/formula3.png" height="253" width="250"></center>

Linear acceleration of <img src="http://latex.codecogs.com/gif.latex?G_3" title="G_3" />  (i.e., <img src="http://latex.codecogs.com/gif.latex?AG_3" title="AG_3" /> is in the direction of <img src="http://latex.codecogs.com/gif.latex?Og_3" title="Og_3" />of acceleration polygon).

<img src="http://latex.codecogs.com/gif.latex?F_3" title="F_3" /> = accelerating force

Inertia force <img src="http://latex.codecogs.com/gif.latex?F_{i3}" title="F_{i3}" /> acts in opposite direction. Due to <img src="http://latex.codecogs.com/gif.latex?\alpha_3" title="\alpha_3" />, there must be a resultant torque <img src="http://latex.codecogs.com/gif.latex?T_3&space;=I_3\alpha_3" title="T_3 =I_3\alpha_3" /> acting in the sense of <img src="http://latex.codecogs.com/gif.latex?\alpha_3" title="\alpha_3" /> (<img src="http://latex.codecogs.com/gif.latex?I_3" title="I_3" /> is MMI of the link about an axis through <img src="http://latex.codecogs.com/gif.latex?G_3" title="G_3" />, perpendicular to the plane of paper). The inertia torque <img src="http://latex.codecogs.com/gif.latex?T_{i3}" title="T_{i3}" /> is equal and opposite of <img src="http://latex.codecogs.com/gif.latex?T_3" title="T_3" />.

<center><img src="images/formula4.png" height="200" width="300"></center>

<img src="http://latex.codecogs.com/gif.latex?F_{i3}" title="F_{i3}" /> can replace the inertia force <img src="http://latex.codecogs.com/gif.latex?F_3" title="F_3" /> and the inertia torque <img src="http://latex.codecogs.com/gif.latex?T_3" title="T_3" />. <img src="http://latex.codecogs.com/gif.latex?F_{i3}" title="F_{i3}" /> is tangent to circle of radius <img src="http://latex.codecogs.com/gif.latex?h_3" title="h_3" /> from <img src="http://latex.codecogs.com/gif.latex?G_3" title="G_3" /> on the top side of it so as to oppose the angular acceleration <img src="http://latex.codecogs.com/gif.latex?\alpha_3\&space;.h_3&space;=&space;\frac&space;{I_3&space;\alpha_3}{M_3&space;AG_3}" title="\alpha_3\ .h_3 = \frac {I_3 \alpha_3}{M_3 AG_3}" />

Link4:

<center><img src="images/formula5.png" height="280" width="380"></center>

<center><img src="http://latex.codecogs.com/gif.latex?h_4&space;=&space;\frac&space;{I_4&space;\alpha_4}{M_4&space;AG_4}" title="h_4 = \frac {I_4 \alpha_4}{M_4 AG_4}" /><a href="references.html"> [2]</a></center>
