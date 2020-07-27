//taken from the last assignment lesson04
document.addEventListener('DOMContentLoaded', () => {
  // create array for different pieces of Art
  // temporarily using my own pieces, till time to dig into API
  const art = [
      {
        "index": 1,
        "img": "http://heatherdaniellehaws.com/images/FemaleNude1.jpg",
        "alt": "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
        "title": "Female Nude 1",
        "materials": "Oil Paint on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 2,
        "img": "http://heatherdaniellehaws.com/images/FemaleNude2.jpg",
        "alt": "Painting very light colors, topless woman from waist up.",
        "title": "Female Nude 2",
        "materials": "Oil Paint on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 3,
        "img": "http://heatherdaniellehaws.com/images/FemaleNude3.jpg",
        "alt": "Painting of a nude woman sitting backwards in a chair facing away.",
        "title": "Female Nude 3",
        "materials": "Oil Paint on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 4,
        "img": "http://heatherdaniellehaws.com/images/redHeadedNude.jpg",
        "alt": "Painting of red headed woman sitting on stool.",
        "title": "Red Headed Nude",
        "materials": "Oil Paint on Wood",
        "artist": "Heather Malloy"
      },
      {
        "index": 5,
        "img": "http://heatherdaniellehaws.com/images/MaleNude1.jpg",
        "alt": "Painting of a nude man, standing, from behind.",
        "title": "Male Nude 1",
        "materials": "Oil Paint on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 6,
        "img": "http://heatherdaniellehaws.com/images/MaleNude2.jpg",
        "alt": "Painting of a shirtless man wearing a hat with a red curtain hanging in the background. Focused in on waist up.",
        "title": "Male Nude 2",
        "materials": "Oil Paint on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 7,
        "img": "http://heatherdaniellehaws.com/images/MaleNude3.jpg",
        "alt": "Painting of a shirtless man leaning against a greenish colored cloth, focused on waist up.",
        "title": "Male Nude 3",
        "materials": "Oil Paint on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 8,
        "img": "http://heatherdaniellehaws.com/images/SelfStudy1.jpg",
        "alt": "Chalk drawing of woman baring her teeth, looking uncomfortable or upset. High contrast, red, black, and white colors.",
        "title": "Self Portrait",
        "materials": "Chalk on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 9,
        "img": "http://heatherdaniellehaws.com/images/StillLife1.jpg",
        "alt": "Painting of a still life.",
        "title": "Still Life 1",
        "materials": "Oil Paint on Canvas",
        "artist": "Heather Malloy"
      },
      {
        "index": 10,
        "img": "http://heatherdaniellehaws.com/images/StillLife2.jpg",
        "alt": "Charcoal drawing of a Barbie doll.",
        "title": "Still Life 2",
        "materials": "Charcoal on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 11,
        "img": "http://heatherdaniellehaws.com/images/StillLife3.jpg",
        "alt": "Painting of yellow banana sitting on a purple cloth.",
        "title": "Still Life 3",
        "materials": "Acrylic on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 12,
        "img": "http://heatherdaniellehaws.com/images/amy-portrait.jpg",
        "alt": "Color Pencil drawing of woman with arms outstretched, sunflowers in the background, fire at her feet.",
        "title": "Portrait of Amy",
        "materials": "Color Pencil on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 13,
        "img": "http://heatherdaniellehaws.com/images/evan-portrait.jpg",
        "alt": "Color Pencil drawing of two sides of a man - one of the king and one of the warrior, based on the King of Hearts from a deck of cards.",
        "title": "Portrait of Evan",
        "materials": "Color Pencil on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 14,
        "img": "http://heatherdaniellehaws.com/images/colonel.jpg",
        "alt": "Color Pencil drawing of a black and white dog dressed up like a Colonel with a patch over one eye and water in the background.",
        "title": "Portrait of the Colonel",
        "materials": "Color Pencil on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 15,
        "img": "http://heatherdaniellehaws.com/images/prince.jpg",
        "alt": "Color Pencil drawing of a yellow and tan dog dressed up as a prince with a black background.",
        "title": "Portrait of the Prince",
        "materials": "Color Pencil on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 16,
        "img": "http://heatherdaniellehaws.com/images/serra.jpg",
        "alt": "Color Pencil drawing in the style of Alfons Mucha of a woman with golden, curly hair",
        "title": "Portrait of Serra",
        "materials": "Color Pencil on Paper",
        "artist": "Heather Malloy"
      },
      {
        "index": 17,
        "img": "http://heatherdaniellehaws.com/images/AmyBeforeChristmas.jpg",
        "alt": "Color Pencil Drawing of a woman in Mexican Style Clothing and Make-Up standing in front of a Nightmare Before Christmas Background.",
        "title": "Portrait of Ami",
        "materials": "Color Pencil on Paper",
        "artist": "Heather Malloy"
      }
    ];
  // capture parent div for art pieces to be displayed in
  let artPieces = document.getElementById('art');
  // capture sidebar art space
  let artSideBar = document.getElementById('sidebar-art');

  // loop through art pieces above
  // pull data into templates provided
  if(artPieces){
    art.forEach(function(el) {
    // template for image figure
      let piece = (`<div class="col-12 col-sm-6 col-lg-4">

        <figure class="art" id="art-${el.index}">
          <div class="art__img border border-dark rounded-circle overflow-hidden bg-dark">
            <img class="art-tip img-fluid" src="${el.img}" alt="${el.alt}" data-toggle="popover" title="${el.title}" data-content="${el.materials} | by ${el.artist}"/>
          </div>
        </figure>
      </div>`);
      // add cards to section
      artPieces.innerHTML += piece;
    });
  }


  // BLOG
  // array of blog posts
  const posts = [
      {
        "index": 1,
        "date": "01-11-2020",
        "img": "http://heatherdaniellehaws.com/images/FemaleNude1.jpg",
        "alt": "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
        "title": "Blog Post Number One",
        "teaser":"Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony.",
        "content": `<p>Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony. Af kombucha id literally meditation selfies chartreuse. Health goth adipisicing tilde occaecat stumptown affogato pabst do pork belly, selvage venmo.</p>

        <p>Commodo slow-carb aute raw denim. Fingerstache gluten-free velit irure banjo exercitation. Tbh VHS crucifix, retro godard exercitation XOXO kombucha typewriter. Art party minim irure, godard dreamcatcher direct trade edison bulb glossier pabst. Brunch cred exercitation wolf meggings air plant poutine qui. Banjo aliqua chambray green juice, anim drinking vinegar authentic hoodie meggings hexagon. Microdosing culpa readymade 90's shaman selfies kickstarter commodo tumeric tousled eu.</p>

        <p>Authentic dolore affogato gluten-free, incididunt artisan you probably haven't heard of them coloring book kitsch humblebrag chillwave. Offal keytar dolore, VHS voluptate exercitation waistcoat polaroid. Intelligentsia waistcoat qui vaporware try-hard celiac pinterest you probably haven't heard of them godard dolore mollit. Literally eu single-origin coffee, ut pabst 8-bit roof party deserunt meggings magna.</p>`,
        "author": "Heather Malloy",
        "pic":"http://heatherdaniellehaws.com/images/heather-malloy2020.jpg"
      },
      {
        "index": 2,
        "date": "02-22-2019",
        "img": "http://heatherdaniellehaws.com/images/FemaleNude2.jpg",
        "alt": "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
        "title": "Blog Post Number Two",
        "teaser":"Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony.",
        "content": `<p>Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony. Af kombucha id literally meditation selfies chartreuse. Health goth adipisicing tilde occaecat stumptown affogato pabst do pork belly, selvage venmo.</p>

        <p>Commodo slow-carb aute raw denim. Fingerstache gluten-free velit irure banjo exercitation. Tbh VHS crucifix, retro godard exercitation XOXO kombucha typewriter. Art party minim irure, godard dreamcatcher direct trade edison bulb glossier pabst. Brunch cred exercitation wolf meggings air plant poutine qui. Banjo aliqua chambray green juice, anim drinking vinegar authentic hoodie meggings hexagon. Microdosing culpa readymade 90's shaman selfies kickstarter commodo tumeric tousled eu.</p>

        <p>Authentic dolore affogato gluten-free, incididunt artisan you probably haven't heard of them coloring book kitsch humblebrag chillwave. Offal keytar dolore, VHS voluptate exercitation waistcoat polaroid. Intelligentsia waistcoat qui vaporware try-hard celiac pinterest you probably haven't heard of them godard dolore mollit. Literally eu single-origin coffee, ut pabst 8-bit roof party deserunt meggings magna.</p>`,
        "author": "Heather Malloy",
        "pic":"http://heatherdaniellehaws.com/images/heather-malloy2020.jpg"
      },
      {
        "index": 3,
        "date": "03-03-2018",
        "img": "http://heatherdaniellehaws.com/images/FemaleNude3.jpg",
        "alt": "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
        "title": "Blog Post Number Three",
        "teaser":"Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony.",
        "content": `<p>Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony. Af kombucha id literally meditation selfies chartreuse. Health goth adipisicing tilde occaecat stumptown affogato pabst do pork belly, selvage venmo.</p>

        <p>Commodo slow-carb aute raw denim. Fingerstache gluten-free velit irure banjo exercitation. Tbh VHS crucifix, retro godard exercitation XOXO kombucha typewriter. Art party minim irure, godard dreamcatcher direct trade edison bulb glossier pabst. Brunch cred exercitation wolf meggings air plant poutine qui. Banjo aliqua chambray green juice, anim drinking vinegar authentic hoodie meggings hexagon. Microdosing culpa readymade 90's shaman selfies kickstarter commodo tumeric tousled eu.</p>

        <p>Authentic dolore affogato gluten-free, incididunt artisan you probably haven't heard of them coloring book kitsch humblebrag chillwave. Offal keytar dolore, VHS voluptate exercitation waistcoat polaroid. Intelligentsia waistcoat qui vaporware try-hard celiac pinterest you probably haven't heard of them godard dolore mollit. Literally eu single-origin coffee, ut pabst 8-bit roof party deserunt meggings magna.</p>`,
        "author": "Heather Malloy",
        "pic":"http://heatherdaniellehaws.com/images/heather-malloy2020.jpg"
      }
    ];
  // capture parent div for blog posts
  let blog = document.getElementById('blogAccordion');
  // capture sidebar blog space
  let blogSideBar = document.getElementById('sidebar-blog');

  // loop through blog posts above
  // pull data into templates provided
  if(blog){
    posts.forEach(function(el) {
      // template for blog posts
      let blogPost = (`<div class="card border-0">
        <div class="card-header p-0" id="heading-${el.index}">
          <h2 class="mb-0 p-0">
            <button class="btn btn-dark btn-block" type="button" data-toggle="collapse" data-target="#post-${el.index}" aria-expanded="false" aria-controls="post-${el.index}">
              <span class="float-left">
              <strong>${el.title}</strong>
              </span>
              <span class="float-right">
              ${el.date}
              </span>
            </button>
          </h2>
        </div>

        <div id="post-${el.index}" class="collapse" aria-labelledby="${el.title}" data-parent="#blogAccordion">
          <div class="card-body p-0 pt-3">
            <p class="small text-secondary">Written by ${el.author}</p>
            ${el.content}
          </div>
        </div>
      </div>
      `)

      // add blog posts to accordion
      blog.innerHTML += blogPost;
    });

    // make sure the first post is expanded initially
    let expanded = document.getElementById('post-1');
    expanded.classList.add("show");
  }


  // SIDEBAR
  if(artSideBar){
    let featured = art[Math.floor(Math.random()*art.length)];

    //artSideBar.innerHTML = featured.index;
    artSideBar.innerHTML = (`<figure class="m-0" id="art-${featured.index}">
      <div class="art__img text-center overflow-hidden"><img class="art w-75" src="${featured.img}" alt="${featured.alt}"></div>
      <figcaption class="text-center"><h5 class="art__title text-danger mt-2">${featured.title}</h5><span class="art__materials d-block">${featured.materials}</span><span class="art__artist d-block">${featured.artist}</span></figcaption>
    </figure>
    <p class="p-5 p-md-3 p-lg-4"><a class="btn btn-dark btn-block" href="art.html">See More >></a></p>`)
    console.log(featured.index);
  }

  if(blogSideBar) {
    let blogFeature = posts[0];
    blogSideBar.innerHTML = (`<h4 class="mb-0">Title: ${blogFeature.title}</h4>
      <small class="text-muted mt-0">by ${blogFeature.author}</small>
      <p>${blogFeature.teaser}</p>
      <p><a class="btn btn-dark btn-block" href="blog.html">Read More >></a></p>`);
  }

  // MAIN CAROUSEL
  // capture carousel inner space
  let carousel = document.getElementById('mainCarouselInner');

  if(carousel){
    let carouselImg = art.slice(0, 1, 2);
    console.log(carouselImg);
    carouselImg.forEach(function(el){
      let images = (`<div class="carousel-item">
       <img src="${el.img}" class="d-block w-100" alt="${el.alt}">
       <div class="carousel-caption d-none d-md-block bg-dark">
         <h5>${el.title}</h5>
         <p>${el.materials} | <small>by ${el.artist}</small>.</p>
       </div>
     </div>`);

      // add imagesto carousel
      carousel.innerHTML += images;

      // make sure the first image is visible on page load
      carousel.firstElementChild.classList.add("active");
    });
  }

 })
