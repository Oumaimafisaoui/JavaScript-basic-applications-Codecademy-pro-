<h1>School Catalogue</h1>
<p>Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:</p>

<h2>School</h2>
<ul>
<li>Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)</li>
<li>Getters: all properties have getters</li>
<li>Setters: the numberOfStudents property has a setter</li>
<li>Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)</li>
</ul>
<tr>
<h2>Primary</h2>
<ul>
<li>Includes everything in the School class, plus one additional property</li>
<li>Properties: pickupPolicy (string)</li>
</ul>
<tr>
<h2>Middle</h2>
<ul>
<li>Does not include any additional properties or methods</li>
<tr>
</ul>
<h2>High</h2>
<ul>
<li>Includes everything in the School class, plus one additional property</li>
<li>Properties: sportsTeams (array of strings)</li>
</ul>
