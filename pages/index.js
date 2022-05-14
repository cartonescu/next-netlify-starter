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
