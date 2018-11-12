/* !Date:09.11.2018 Copyright ©2018 SCSS code by Cătălin Anghel-Ursu @Madness2aMaze (https://codepen.io/Madness2aMaze)
- All Rights Reserved!

MIT License

Copyright (c) 2018 Cătălin Anghel-Ursu (https://github.com/Madness2aMaze/D3-Treemap)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

@mixin radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

@mixin box-shadow-ext($x, $y, $blur, $spread, $color) {
  -webkit-box-shadow: $x $y $blur $spread $color;
  -moz-box-shadow: $x $y $blur $spread $color;
  -ms-box-shadow: $x $y $blur $spread $color;
  box-shadow: $x $y $blur $spread $color;
}
@mixin box-shadow($x, $y, $blur, $color) {
  -webkit-box-shadow: $x $y $blur $color;
  -moz-box-shadow: $x $y $blur $color;
  -ms-box-shadow: $x $y $blur $color;
  box-shadow: $x $y $blur $color;
}
@mixin box-shadow-in($inset, $x, $y, $blur, $spread, $color) {
  -webkit-box-shadow: $inset $x $y $blur $spread $color;
  -moz-box-shadow: $inset $x $y $blur $spread $color;
  -ms-box-shadow: $inset $x $y $blur $spread $color;
  box-shadow: $inset $x $y $blur $spread $color;
}

.bg-grad-transp-black-transp {
  background: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8),
    transparent
  );
}

.text-grad-dark-to-light-to-dark {
  background: #8b80fc;
  background: -webkit-linear-gradient(to right, #4b6d6d, #d8ffff, #4b6d6d);
  background: linear-gradient(to right, #4b6d6d, #d8ffff, #4b6d6d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

body {
  //background: linear-gradient(to right, #eef2f3, #8e9eab, #8e9eab, #eef2f3);
  background: linear-gradient(to right, #8e9eab, #eef2f3, #eef2f3, #8e9eab);
}

.container-fluid {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: auto;
  margin-top: 1%;
  transition: 0.3s;
}

#title {
  display: flex;
  //position: fixed;
  //margin-left: 5%;
  flex-direction: column;
  margin: auto;
}

#logo {
  display: flex;
  flex-direction: row;
}

#dee {
  //font-family: 'Source Sans Pro', sans-serif;
  //font-family: 'Catamaran', sans-serif;
  //background: #7c858e;
  font-family: "Expletus Sans", cursive;
  font-size: 250px;
  letter-spacing: -30px;
  margin: auto;
  color: #343a40;
  opacity: 0.6;
  //text-shadow: 4px 4px 10px #000;
  //@include box-shadow-ext(0px, 8px, 10px, -6px, #111);
}

#three {
  //background: #7c858e;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 300px;
  margin-top: -30px;
  color: #75aaaa;
  z-index: -2;
  opacity: 0.8;
  //text-shadow: 4px 4px 10px #222;
  //@include box-shadow-ext(0px, 8px, 10px, -6px, #111);
}

#subT {
  //background: #7c858e;
  font-family: "Expletus Sans", cursive;
  font-size: 56px;
  color: #343a40;
  margin: 0 auto;
  padding: 10px;
  margin-top: -82px;
  opacity: 0.6;
  //text-shadow: 1px 1px 2px #111;
}

#subB {
  //background: #7c858e;
  font-family: "Expletus Sans", cursive;
  font-size: 52px;
  color: #343a40;
  margin: 0 auto;
  padding: 10px;
  margin-top: -28px;
  opacity: 0.6;
  //text-shadow: 1px 1px 2px #111;
}

#chart {
  @include radius(15px);
  padding: 15px 45px 65px 45px;
  position: relative;
  background: #343a40;
  margin: 0 auto;
  transition: 0.3s;
  margin-left: 0px;
  border: 2px solid #75aaaa;
  //z-index: 1;
  @include box-shadow-ext(0px, 8px, 10px, -6px, #111);
}

#chart:before,
#chart:after {  
  position: absolute;
  background: #111; 
  content: "";
  bottom: 15px;
  left: 5px;
  width: 60%;
  top: 85%;
  max-width: 400px;   
  -webkit-transform: rotate(-5deg);
  -moz-transform: rotate(-5deg);
  -o-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);
  @include box-shadow(0px, 20px, 35px, #222);
  z-index: -1;
}

#chart:after {
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  -o-transform: rotate(5deg);
  -ms-transform: rotate(5deg);
  transform: rotate(5deg);
  right: 10px;
  left: auto;
}

#tooltip {
  font-family: 'Quicksand', sans-serif;
  color: #baffff;
  position: absolute;
  text-align: center;
  //width: 150px;
  //height: 85px;
  padding: 10px;
  font-size: 12px;
  background: #262b30;
  border: 2px solid #baffff;
  @include radius(10px);
  pointer-events: none;
  @include box-shadow(0px, 10px, 25px, #262b30);
  z-index: 99;
}

//svg graph
#main {
  //margin: 40px 0px 0px 0px ;
  color: #baffff;
  //@include radius(15px);
  background: #343a40;
  .tile {
    display: flex;
    margin: auto;
    //fill: #75aaaa;
    opacity: .5;
    stroke: #000;
    stroke-width: 1px;
    text-anchor: middle;
  }
  .tile:hover {
    //fill: #343a40;
    fill: #baffff;
    //width: 6px;
  }  
}


#legend {
  //background: #262b30;
  position: absolute;
  margin: 51.5% 0 0 38%;
  padding: 5px 5px 10px 5px;
  color: #f8f8f8;
  text-align: right;
  font-size: 12px;
  //border: 1px solid #75aaaa;
  //@include radius(10px);
  z-index: 98;
  p {
    margin: 0px ;
  }
}

#chart-title {
  font-family: "Expletus Sans", cursive;
  //position: absolute;
  //margin: -7% 0 0 32%;
  //padding-top: 40px;
  text-align: center;
  color: #75aaaa;
}

#description {
  font-family: "Expletus Sans", cursive;
  //position: absolute;
  //margin: -3% 0 0 29%;
  //padding-top: 40px;
  margin-top: -10px;
  text-align: center;
  color: #75aaaa;
}

#nfo {
  width: 20%;
  position: fixed;
}

#footer {
  @extend .bg-grad-transp-black-transp;
  //background: #222; //rgba(52, 58, 64, 1);
  h6 {
    margin-bottom: 0;
    font-size: 12px;
    color: #828c96;
    a {
      color: #75aaaa;
      transition: 0.2s;
    }
    a:hover {
      color: #baffff;
      transition: 0.2s;
      text-decoration: none;
    }
  }
}

@media (max-width: 1280px) {
  .container-fluid {
    margin-top: 0%;
    transform: scale(0.9, 0.9);
    transition: 0.3s;
  }
  /*#chart {
    transform: scale(0.9, 0.9);
    transition: 0.3s;
  }*/
  #footer {
    margin-bottom: -145px;
  }
}

@media (max-width: 960px) {
  .container-fluid {
    margin-top: 0%;
    transform: scale(0.7, 0.7);
    transition: 0.3s;
  }
  /*#chart {
    transform: scale(0.7, 0.7);
    transition: 0.3s;
  }*/
  #footer {
    margin-bottom: -145px;
  }
}
