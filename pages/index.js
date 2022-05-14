import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cartonescu.ro - Cumpara cutii de carton, folie cu bule si materiale de ambalare ieftine</title>
    <meta name="description" content="Sc Amc Light Pack SRL (www.cartonescu.ro) - cumpara materiale pentru ambalarea usoara si rapida a obiectelor tale. Transporta in siguranta produsele tale folosind materialele noastre de ambalat." />
    <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
    @import url(http://fonts.googleapis.com/css?family=Abel);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);

body { background-color:#fefdfb; color: #555; font-family: 'Abel', sans-serif; font-size: 93%; font-weight:normal;margin: 0; }
a:link, a:visited, a:active{ color:inherit; text-decoration: none; }
a:hover {color: #000; text-decoration:underline; }

.right {text-align:right; }
.hide {display: none;}

nav {
    display: table;
    table-layout: fixed;
    width: 75%;
    margin: 0 auto;
}

#menu {
    width:100%;
    min-height:35px;
    background-color: #000;
    position:fixed;
    z-index:100;
    top:0; left:0;
}

#menu a {
    background-color:inherit;
    color: #fff;
}

ul#topnav  {
    display: table-row;
    padding: 0;
    overflow: hidden;
    position:relative;
    bottom:0;
}

ul#topnav li {
    list-style-type: none;
    display: table-cell;
    text-align:center;
    vertical-align:middle;
}

ul#topnav li a {
    display:block;
    padding:8px;
    text-decoration:underline;
}


ul#topnav li a:hover {
    color:#777;
    text-decoration:none;
}

ul#topnav li> ul {
    list-style-type: none;
    margin:0;
    padding:0;
}


ul#topnav li> ul > li{
	font-size:120%;
    float:left;
    display:inline;
    padding-right:5px;
}
    
#container {
    width:100%;
    margin-top:48px;
}

#pageheader {
    display:table;
    width:80%;
    margin:auto;
}

.section {
    width:80%;
    border-top:1px solid #777;
    padding:20px 0;
    margin:auto;
}

.pageitem {
    display:table;
    table-layout:fixed;
    width:100%;
    margin-bottom:15px;
    padding-top:15px;
    text-align:justify;
}

.pageitem h1 {
    font-size:250%;
    font-weight:normal;
    color:#555;
    margin:0;
    text-align:left;
}

.pageitem h2 {
    font-size:180%;
    background-color:inherit;
    color:#444;
    margin-top:0;
}

.pageitem p {
    padding:0;
    margin:1em 0;
    font-size:115%;
    line-height:175%;
}

.pageitem a {
	text-decoration:underline;
}

.pageitem .col {
     padding:0 2% 0 1%;    
}

.col {
    display: table-cell;
}

#footer {
    display:table;
    width:100%;
    margin-bottom:15px;
    padding:15px 0;
    text-align:left;
    font-size:89%;
    color:#999;
}

#footer p {
     text-align:left;
     padding:0;
}

#credits {
    display:table;
    table-layout:fixed;
    width:100%;
    font-size:12px;
    color:#777;
    line-height:100%;
    text-align:center;
}

#show-menu  {display:none;}
.open, .close { background-color:inherit; color:#fff; text-align:right; font-weight:normal; font-size:1.5em; padding: 0; position:absolute; top:10%; right:5%; display:none; }


/* start make items responsive */
@media screen and (max-width : 1024px){


/* menu */
ul#topnav {display:none;}
.hide, .open { display:block;}


#show-menu:checked ~ .open {display:none;}
#show-menu:checked ~ .close {font-size:1.6em; display:block;}
#show-menu:checked ~ ul#topnav { display: block; position: absolute; top:100%; right:0%; width:100%; margin:0; margin-bottom:1%; overflow:visible; }
ul#topnav li { display: block; text-align:center; margin:0; background-color:#000; padding:1% 0;}

ul#topnav li a { display: block; padding-right:0%; padding-bottom:5px; text-decoration:none;}
ul#topnav li a:hover {text-decoration:underline;}


ul#topnav li> ul { display:table; float:none; table-layout:fixed; margin:0 auto;}
ul#topnav li> ul > li {padding-left:10px; }

/* other items */
.pageitem h2 {font-size:120%;}
.pageitem p { padding:0; line-height:150%; font-size:99%;}
.pageitem .col {padding:0 3% 0 2%; }

}

@media screen and (max-width : 700px){

.col { float:left; margin:auto; width:100%; margin-bottom:10%;}
#credits p { text-align:center; margin-bottom:-10%;}

}
/* end make items responsive */
      </Head>

      <main>
        <Header title="Cartonescu.ro" />
        <p className="description">
          <code>Cutii de carton ieftine, Cutii carton cu autoformare, cumpara folie cu bule ieftina, banda adeziva, folie stretch</code>
        </p>
    <a href="https://amclightpack.ro">Sc Amc Light Pack SRL</a>
    <a href="https://www.cartonescu.ro">www.cartonescu.ro</a>
    
    
  
    <div id="menu">
<nav>
<input type="checkbox" id="show-menu" role="button">
<label for="show-menu" class="open"><span class="fa fa-bars"></span></label>
<label for="show-menu" class="close"><span class="fa fa-times"></span></label>
<ul id="topnav">  
<li><a href="#">Custom</a></li>
<li><a href="#">Premium</a></li>
<li><a href="#">Gratis</a></li>
<li><a href="#">Random</a></li>
<li><a href="#">Search</a></li>
<li>
	<ul>
	<li><a href="#"><i class="fa fa-facebook"></i></a></li>
	<li><a href="#"><i class="fa fa-instagram"></i></a></li>
	<li><a href="#"><i class="fa fa-twitter"></i></a></li>
	</ul>
</li>
</ul>
</nav>
</div>
<div id="container">
<div id="pageheader">
<h1>Random by mlpdesign.net</h1>
<p>Fluid. Responsive. HTML5.</p>
</div>

<div class="section">
<div class="pageitem">
<div id="slider">
<figure>
<img src="http://lorempixel.com/g/680/300/people/1" alt>
<img src="http://lorempixel.com/g/680/300/nature/1" alt>
<img src="http://lorempixel.com/g/680/300/city/1" alt>
<img src="http://lorempixel.com/g/680/300/people/1" alt> <!-- note 1st image is also the last -->
</figure>
</div>
</div>
</div>

<div class="section">
<div class="pageitem">
<div class="col">
<h2>Aenean at Ipsum</h2>
<p>Phasellus ac leo eget felis egestas vestibulum nec at velit. Vivamus venenatis, <a href="#">nibh ut tempus viverra</a>, tellus augue pulvinar sapien, at iaculis justo nisi non metus. Quisque quis malesuada arcu, sed ultricies nibh. Duis vehicula metus quis arcu rutrum faucibus eget ut ex. Curabitur lacus justo, iaculis congue suscipit quis, posuere at turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in quam non urna volutpat consequat. Proin mollis ut mauris et venenatis. Vivamus dui nibh, blandit vitae pellentesque sed, finibus sit amet nulla.</p>
</div>
<div class="col">
<h2>Etiam Eleifend Imperdiet Elit</h2>
<p>Nunc rhoncus convallis ex, eget viverra ex pulvinar non. Suspendisse enim ligula, varius sed rutrum id, bibendum vitae lectus. Mauris mollis pellentesque diam et congue. Praesent dignissim semper facilisis. Duis gravida, elit nec iaculis efficitur, sem orci commodo lectus, id cursus sem diam in eros. Maecenas porta mi sed diam condimentum gravida. Nam a ligula consectetur, imperdiet lacus nec, rutrum dui. Sed aliquam at magna non mollis. Duis fermentum purus eget nisi dictum, vitae bibendum nulla cursus.</p>
</div>
</div>
</div>

<div class="section">
<div class="pageitem">
<h2>Nec Pretium Condimentum</h2>
<p>Morbi bibendum faucibus placerat. Morbi vulputate, erat nunc tincidunt leo, scelerisque ullamcorper dui dolor porttitor neque. Donec ut faucibus erat, vel efficitur enim. Fusce sit amet ligula eu libero lacinia condimentum sed in turpis.</p><p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pulvinar metus vel neque sagittis, at pharetra tellus tincidunt. Sed semper euismod ipsum, feugiat consequat nisi eleifend et. Duis volutpat gravida efficitur. Nulla iaculis blandit semper. Maecenas eget aliquet libero. Donec sit amet sagittis erat. Sed elementum felis id interdum cursus. Phasellus ac urna feugiat, placerat massa et, vestibulum odio. Aenean eu nisl lobortis, tincidunt ligula rhoncus, convallis mi.</p>
</div>
</div>

<div class="section">
<div class="pageitem">
<div class="col">
<h2>Phasellus Ac Leo Eget</h2>
<p> Vivamus venenatis, nibh ut tempus viverra, tellus augue pulvinar sapien, at iaculis justo nisi non metus. Quisque quis malesuada arcu, sed ultricies nibh. Duis vehicula metus quis arcu rutrum faucibus eget ut ex. Curabitur lacus justo, iaculis congue suscipit quis, posuere at turpis. </p><p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in quam non urna volutpat consequat. Proin mollis ut mauris et venenatis. Vivamus dui nibh, blandit vitae pellentesque sed, finibus sit amet nulla.</p>
</div>
<div class="col">
<h2>Etiam Imperdiet Elit</h2>
<p>Nunc rhoncus convallis ex, eget viverra ex pulvinar non. Suspendisse enim ligula, varius sed rutrum id, bibendum vitae lectus. Mauris mollis pellentesque diam et congue. Praesent dignissim semper facilisis. Duis gravida, elit nec iaculis efficitur, sem orci commodo lectus, id cursus sem diam in eros. </p><p>Maecenas porta mi sed diam condimentum gravida. Nam a ligula consectetur, imperdiet lacus nec, rutrum dui. Sed aliquam at magna non mollis. Duis fermentum purus eget nisi dictum, vitae bibendum nulla cursus.</p>
</div>
<div class="col">
<h2>Morbi Bibendum</h2>
<p>Donec ut faucibus erat, vel efficitur enim. Fusce sit amet ligula eu libero lacinia condimentum sed in turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pulvinar metus vel neque sagittis, at pharetra tellus tincidunt. Sed semper euismod ipsum, feugiat consequat nisi eleifend et. Duis volutpat gravida efficitur. Nulla iaculis blandit semper. Maecenas eget aliquet libero. Donec sit amet sagittis erat. Sed elementum felis id interdum cursus. Phasellus ac urna feugiat, placerat massa et, vestibulum odio. Aenean eu nisl lobortis, tincidunt ligula rhoncus, convallis mi.</p>
</div>
</div>
</div>

<!-- footer items go here
<div class="section">
<div id="footer">

</div>
</div>
-->

<div class="section">
<div id="credits">
    <div class="col"><p>Random by MLPdesign.</p></div>
    <div class="col"><p><a href="#">Privacy</a> | <a href="#">Support</a> | <a href="#">Site Map</a></p></div>

<!-- This part has to be kept intact under the CC-NC Licence -->
    <div class="col"><p><a href="http://mlpdesign.net">HTML & CSS</a> by MLPdesign</p></div>
<!-- CC-NC Licence credit ends here -->

</div>
</div>

</div>
    
    
    
      </main>

      <Footer />
    </div>
  )
}
