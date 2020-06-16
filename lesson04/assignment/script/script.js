document.addEventListener('DOMContentLoaded', function() {
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
  let project = document.getElementById('projects');
  // capture parent div for image controls
  let control = document.getElementById('projects__controls');

  // loop through art pieces above
  // pull data into template provided
  art.forEach(function(el) {
    let piece = (`<figure class="art opaque">
      <img src="${el.img}" alt="${el.alt}">
      <figcaption><span class="art__title">${el.title}</span><span class="art__materials">${el.materials}</span><span class="art__artist">${el.artist}</span></figcaption>
    </figure>`);

    let btn = (`<button class="btn btn__nav">${el.index}</button>`)
    // add cards to section
    project.innerHTML += piece;
    control.innerHTML += btn;
  });

  let btn = control.getElementsByTagName('button');
  let img = project.getElementsByTagName('figure');

  // $(".projects__controls").on('click', 'button', function() {
  //   $(".projects figure").removeClass("opaque");
  //
  //   var newImage = $(this).index();
  //
  //   $(".projects img").eq(newImage).addClass("opaque");
  //
  //   $(".projects__controls button").removeClass("selected");
  //   $(this).addClass("selected");
  // });
})
