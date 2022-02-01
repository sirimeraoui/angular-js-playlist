angularjs is like spring framework but for javascript
first pl3 :
  . download tha latest stable angularjs library and stock in "lib" inside of directory app:angular-js-playlist/app/lib/every angular lib(animate....)
  . link up to angularjs from index.html (the script must be in the head)

second pl4 : 2 way data binding
cuz wa can update the data from the model or from the view and the updates cascade in the model & the view
  . add an angular directive inside of the html tag(or another) to give angular control over the DOM elements inside of that tag (telling it eveyting inside is our app)ex.<html ng-app>
  . add another directive inside of an input tag so that we can store the data inside of the model attribute like so : <input type="text" ng-model="favMeat"* placeholder="enter your fav meat">
  with spring it would be smth like this :
    <form action="#" th:action="@{/comments/saveNewComment}" th:object="${comment}" method="POST">
    . to output tha data that was stored we do:
    ex.<p>Your fav meat: {{favMeat}}*</p>
      comparison with spring: th:text or th:field="${favMeat}"

third pl5 :  directives
Directives tell angular to perform some kind of behaviour to help us out(tell it what to do)
There are attribute directives like ng-app or html ones which can be custom made ex.<ninja></ninja>
check the docs for more info :https://docs.angularjs.org/api/ng/directive

fourth pl6 : Expressions
 . {{5*5}}=>25
 . {{var1+var2}}
 . {{user.name}}
 . ng-init allows to initialize some data   when the app loads(not good as habit)
   ex.<body ng-init="color='orange'">
          <p class="{{color}}">hello orange css</p>
      </body>
      inside css add: .orange{color=orange;}

ls7: ng-repeat
for getting elements in an array ex.
<body ng-init="array=['el1','el2',eln']">
 -<ul>
      <li ng-repeat="el in array">{{el}}</li>
  </ul>
</body>