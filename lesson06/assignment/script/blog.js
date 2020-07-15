
document.addEventListener('DOMContentLoaded', () => {
  // array of blog posts
  const posts = [
      {
        "index": 1,
        "date": "01-11-2011",
        "img": "http://heatherdaniellehaws.com/images/FemaleNude1.jpg",
        "alt": "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
        "title": "Blog Post Number One",
        "content": `<p>Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony. Af kombucha id literally meditation selfies chartreuse. Health goth adipisicing tilde occaecat stumptown affogato pabst do pork belly, selvage venmo.</p>

        <p>Commodo slow-carb aute raw denim. Fingerstache gluten-free velit irure banjo exercitation. Tbh VHS crucifix, retro godard exercitation XOXO kombucha typewriter. Art party minim irure, godard dreamcatcher direct trade edison bulb glossier pabst. Brunch cred exercitation wolf meggings air plant poutine qui. Banjo aliqua chambray green juice, anim drinking vinegar authentic hoodie meggings hexagon. Microdosing culpa readymade 90's shaman selfies kickstarter commodo tumeric tousled eu.</p>

        <p>Authentic dolore affogato gluten-free, incididunt artisan you probably haven't heard of them coloring book kitsch humblebrag chillwave. Offal keytar dolore, VHS voluptate exercitation waistcoat polaroid. Intelligentsia waistcoat qui vaporware try-hard celiac pinterest you probably haven't heard of them godard dolore mollit. Literally eu single-origin coffee, ut pabst 8-bit roof party deserunt meggings magna.</p>`,
        "author": "Heather Malloy",
        "pic":"http://heatherdaniellehaws.com/images/heather-malloy2020.jpg"
      },
      {
        "index": 2,
        "date": "02-22-2012",
        "img": "http://heatherdaniellehaws.com/images/FemaleNude2.jpg",
        "alt": "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
        "title": "Blog Post Number Two",
        "content": `<p>Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony. Af kombucha id literally meditation selfies chartreuse. Health goth adipisicing tilde occaecat stumptown affogato pabst do pork belly, selvage venmo.</p>

        <p>Commodo slow-carb aute raw denim. Fingerstache gluten-free velit irure banjo exercitation. Tbh VHS crucifix, retro godard exercitation XOXO kombucha typewriter. Art party minim irure, godard dreamcatcher direct trade edison bulb glossier pabst. Brunch cred exercitation wolf meggings air plant poutine qui. Banjo aliqua chambray green juice, anim drinking vinegar authentic hoodie meggings hexagon. Microdosing culpa readymade 90's shaman selfies kickstarter commodo tumeric tousled eu.</p>

        <p>Authentic dolore affogato gluten-free, incididunt artisan you probably haven't heard of them coloring book kitsch humblebrag chillwave. Offal keytar dolore, VHS voluptate exercitation waistcoat polaroid. Intelligentsia waistcoat qui vaporware try-hard celiac pinterest you probably haven't heard of them godard dolore mollit. Literally eu single-origin coffee, ut pabst 8-bit roof party deserunt meggings magna.</p>`,
        "author": "Heather Malloy",
        "pic":"http://heatherdaniellehaws.com/images/heather-malloy2020.jpg"
      },
      {
        "index": 3,
        "date": "03-03-2013",
        "img": "http://heatherdaniellehaws.com/images/FemaleNude3.jpg",
        "alt": "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
        "title": "Blog Post Number Three",
        "content": `<p>Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony. Af kombucha id literally meditation selfies chartreuse. Health goth adipisicing tilde occaecat stumptown affogato pabst do pork belly, selvage venmo.</p>

        <p>Commodo slow-carb aute raw denim. Fingerstache gluten-free velit irure banjo exercitation. Tbh VHS crucifix, retro godard exercitation XOXO kombucha typewriter. Art party minim irure, godard dreamcatcher direct trade edison bulb glossier pabst. Brunch cred exercitation wolf meggings air plant poutine qui. Banjo aliqua chambray green juice, anim drinking vinegar authentic hoodie meggings hexagon. Microdosing culpa readymade 90's shaman selfies kickstarter commodo tumeric tousled eu.</p>

        <p>Authentic dolore affogato gluten-free, incididunt artisan you probably haven't heard of them coloring book kitsch humblebrag chillwave. Offal keytar dolore, VHS voluptate exercitation waistcoat polaroid. Intelligentsia waistcoat qui vaporware try-hard celiac pinterest you probably haven't heard of them godard dolore mollit. Literally eu single-origin coffee, ut pabst 8-bit roof party deserunt meggings magna.</p>`,
        "author": "Heather Malloy",
        "pic":"http://heatherdaniellehaws.com/images/heather-malloy2020.jpg"
      }
    ];
  // capture parent div for blog posts
  let blog = document.getElementById('blogAccordion');

  // loop through blog posts above
  // pull data into templates provided
  posts.forEach(function(el) {
    // template for blog posts
    let blogPost = (`<div class="card">
      <div class="card-header p-0" id="heading-${el.index}">
        <h2 class="mb-0 p-0">
          <button class="btn btn-link btn-block" type="button" data-toggle="collapse" data-target="#post-${el.index}" aria-expanded="false" aria-controls="post-${el.index}">
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
        <div class="card-body">
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
 })
