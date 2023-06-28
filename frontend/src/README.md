this is react learning thingyy

<img src="screen_shots/2.png">



<div>you can add as many roots as u want:</div>
<img src="screen_shots/1.png">
<img src="screen_shots/4.png">
<div>understand wat components and props , similar to func and paraments</div>
<img src="screen_shots/3.png">
<div>Writing class as a function</div>
<img src="screen_shots/5.png">
<h2>Components -> props and state<br> Props are passed to components as arguments<br>State is inside the components, it re-render whenever there is a change happens</h2>
<div>rendering changes using state with class</div>
<img src="screen_shots/6.png">
<div>
Do not modify state directly:<br>
correctway: this.state({date: new Date()})<br>
incorrect_way: this.state.date = new Date()
</div>

<h3>simple counter using setstate:</h3>
<img src="screen_shots/7.png">
<h3>simple counter with inc,dec and reset buttons</h3>
<div>
this is correct:<br>
<pre>decr = ()=>{
    const demo = this.state.total
    this.setState({total: demo-1})
  }</pre><br>
  
  this is incorrect, cuz u can't modify useState directly<br>
  <pre>decr = ()=>{
    this.setState({total: this.state.total-=1})
  }</pre>
  </div>
<img src="screen_shots/8.png">

<h2>passing parameter into button</h2>
<pre>
//here we e,cuz to prevent default. which meaning we dont want to call this function when user req for this page
/*function abcd(e){
    e.preventDefault()
}*/
</pre>
<img src="screen_shots/9.png">
<h3>simple counter using button clock, ***have some doubts***</h3>
<img src="screen_shots/10.png">
<h1>Conditional Rendering:</h1>
<h3>logical && condition</h3>
<img src="screen_shots/11.png">
<h3>if else conditional statement</h3>
<img src="screen_shots/12.png">

<h1>Hooks</h1>
<h3>It will allow use to use state and other react features without using Class</h3>
<h3>simple counter using setstate hook</h3>
<img src="screen_shots/13.png">

