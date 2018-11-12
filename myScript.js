/* !Date:09.11.2018 Copyright ©2018 JavaScript & React code by Cătălin Anghel-Ursu @Madness2aMaze (https://codepen.io/Madness2aMaze)
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

window.onload = () => {
  d3
    .select(".container-fluid")
    .append("div")
    .attr("id", "title")
    .append("div")
    .attr("id", "logo")
    .append("h1")
    .attr("id", "dee")
    .text("D");

  d3
    .select("#logo")
    .append("h1")
    .attr("id", "three")
    .text("3");

  d3
    .select("#title")
    .append("h3")
    .attr("id", "subT")
    .text("TREEMAP");

  /*d3
    .select("#title")
    .append("h3")
    .attr("id", "subB")
    .text("MAP");*/
  
  d3
    .select(".container-fluid")
    .append("div")
    .attr("id", "chart");

  d3
    .select("#chart")
    .append("div")
    .attr("id", "legend");

  d3
    .select(".container-fluid")
    .append("div")
    .attr("id", "nfo");

  const gamesUrl =
        " https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json",
        moviesUrl =
        "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json",
        kickStUrl =
        "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/kickstarter-funding-data.json";

  const width = 1160,
        height = 640;

  const tooltip = d3
  .select("#chart")
  .append("div")
  .attr("id", "tooltip")
  .style("opacity", 0);

  const urls = [gamesUrl, moviesUrl, kickStUrl];

  Promise.all(urls.map(url => d3.json(url))).then(dataset => {
    const gamesData = dataset[0],
          moviesData = dataset[1],
          kickStData = dataset[2];

    console.log(gamesData);
    console.log(moviesData);
    console.log(kickStData);

    const root = d3
    .hierarchy(gamesData)
    .sum(d => d.value)
    .sort((a, b) => b.value - a.value);

    console.log(root);
    console.log(root.descendants());

    const treemapLayout = d3
    .treemap()
    .size([width, height])
    .paddingOuter(10);

    treemapLayout(root);
    
    let vidDescipt = "Top 100 Most Sold Video Games Grouped by Platform",
        movDescript = "Top 100 Highest Grossing Movies Grouped By Genre",
        kickDescript = "Top 100 Most Pledged Kickstarter Campaigns Grouped By Category";
    
    function description(title) {
       return title === "Video Game Sales Data Top 100" ? vidDescipt 
      : title === "Movies" ? movDescript
      : title === "Kickstarter" ? kickDescript : null;
    }
    
    function title(name) {
      return name === "Video Game Sales Data Top 100" ? "Video Game Sales" 
      : name === "Movies" ? "Movie Sales"
      : name === "Kickstarter" ? "Kickstarter Pledges" : null;
    }

    d3
      .select("#chart")
      .append("h1")
      .attr("id", "chart-title")
      .text(title(root.data.name));
    
    d3
      .select("#chart")
      .append("h6")
      .attr("id", "description")
      .text(description(root.data.name));

    d3
      .select("#chart")
      .append("svg")
      .attr("id", "main")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    const node = d3
      .select("svg g")
      .selectAll("g")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr('transform', (d) => 'translate(' + [d.x0, d.y0] + ')')
    
    node
      .append("rect")
      .attr("class", "tile")
      .attr("data-name", d => d.data.name)
      .attr("data-category", d => d.data.category === undefined ? 
              d.data.name + " Collection"
            : d.data.category
           )
      .attr("data-value", d => d.value)
      //.attr("x", d => d.x0)
      //.attr("y", d => d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0)
      .attr("fill", d =>
        d.data.category === "2600" ? "#d6616b"
      : d.data.category === "GB" ? "#7b4173"
      : d.data.category === "GBA" ? "#a55194"
      : d.data.category === "DS" ? "#ce6dbd"
      : d.data.category === "3DS" ? "#de9ed6"
      : d.data.category === "NES" ? "#9c9ede"
      : d.data.category === "SNES" ? "#6b6ecf"
      : d.data.category === "N64" ? "#5254a3"
      : d.data.category === "Wii" ? "#393b79"
      : d.data.category === "XB" ? "#637939"
      : d.data.category === "X360" ? "#8ca252"
      : d.data.category === "XOne" ? "#b5cf6b"
      : d.data.category === "PSP" ? "#cedb9c"
      : d.data.category === "PS" ? "#8c6d31"
      : d.data.category === "PS2" ? "#bd9e39"
      : d.data.category === "PS3" ? "#e7ba52"
      : d.data.category === "PS4" ? "#e7cb94"
      : d.data.category === "PC" ? "#843c39"
      : d.data.category === undefined ? "#343a40" : "#000"      
    )
      .on("mouseover", d => {
      tooltip
        .transition()
        .duration(50)
        .style("opacity", 0.8);
      tooltip
        .attr("data-value", d.value)
        .html( "Name: " + "<strong>" + d.data.name + "</strong>" + "<br/>" +
        "Category: " + "<strong>" + ( d.data.category === undefined ? 
                                      d.data.name + " Collection" 
                                    : d.data.category) + "</strong>" + "<br/>" +
        "Value: " + "<strong>" + d.value + "</strong>")
        .style("left", d3.event.pageX - width / 2 + "px")
        .style("top", d3.event.pageY - height / 5.5 + "px");
    })
      .on("mouseout", d => {
      tooltip
        .transition()
        .duration(500)
        .style("opacity", 0);
    });
    
    node
      .append("text")  
      .attr("id", "tile-text")
      .attr('x', 3)
      .attr('y', 8)
      .html((d) => 
            (d.data.name.length > 10) ? 
             d.data.name.slice(0, 10) : 
             d.data.name)
      .style("font-size", "8px")
      .style("fill", "#baffff");  
    
    
  });

  //Basic Legend colors chart
  const legendData = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const legend = d3
  .select("#legend")
  .append("svg")
  .attr("id", "sec")
  .attr("width", 265)
  .attr("height", 30);

  legend
    .selectAll("rect")
    .data(legendData)
    .enter()
    .append("rect")
    .attr("class", "legend-cell")
    .attr("x", (d, i) => 40 + i * 15)
    .attr("width", 15)
    .attr("height", 15)
    .attr(
    "fill",
    d =>
    d < 1
    ? "#065059"
    : d >= 1 && d < 2
    ? "#08616b"
    : d >= 2 && d < 3
    ? "#088d9c"
    : d >= 3 && d < 4
    ? "#20a6b5"
    : d >= 4 && d < 5
    ? "#42b8c6"
    : d >= 5 && d < 6
    ? "#6bcbd6"
    : d >= 6 && d < 7
    ? "#9edae1"
    : d >= 7 && d < 8 ? "#c6eaef" : d >= 8 ? "#fff" : "None"
  );

  legend
    .append("text")
    .attr("transform", "translate(" +  20 + " ," + 11 + ")")
    .style("text-anchor", "middle")
    .style("fill", "#75aaaa")
    .text("<3%")
    .style("font-size", "11px");

  legend
    .append("text")
    .attr("transform", "translate(" +  228 + " ," + 11 + ")")    
    .style("text-anchor", "middle")
    .style("fill", "#75aaaa")
    .text(">66%")
    .style("font-size", "11px");
};
