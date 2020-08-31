<template lang="html">
  <div class="border border-danger rounded mt-5">
    <h4 class="bg-danger text-white p-2 text-center mb-0 rounded-top">Latest Blog Post</h4>
    <div>
      <!-- featured art-piece here -->
      <div class="border border-danger p-5 p-md-3 p-lg-4" id="sidebar-blog">
        <!-- latest blog post here -->
        <h4 class="mb-0">Title: {{posts[0].title}}</h4>
        <small class="text-muted mt-0">by {{posts[0].author}}</small>
        <p>{{posts[0].teaser}}</p>
        <p><b-button block variant="dark" to="Blog">See More >></b-button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'LatestBlog',
  data () {
    return {
      posts: [
          {
            id: "post-1",
            heading: "header-1",
            date: "01-11-2020",
            img: "http://heatherdaniellehaws.com/images/FemaleNude1.jpg",
            alt: "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
            title: "Blog Post Number One",
            teaser:"Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony.",
            content: `<p>Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony. Af kombucha id literally meditation selfies chartreuse. Health goth adipisicing tilde occaecat stumptown affogato pabst do pork belly, selvage venmo.</p>

            <p>Commodo slow-carb aute raw denim. Fingerstache gluten-free velit irure banjo exercitation. Tbh VHS crucifix, retro godard exercitation XOXO kombucha typewriter. Art party minim irure, godard dreamcatcher direct trade edison bulb glossier pabst. Brunch cred exercitation wolf meggings air plant poutine qui. Banjo aliqua chambray green juice, anim drinking vinegar authentic hoodie meggings hexagon. Microdosing culpa readymade 90's shaman selfies kickstarter commodo tumeric tousled eu.</p>

            <p>Authentic dolore affogato gluten-free, incididunt artisan you probably haven't heard of them coloring book kitsch humblebrag chillwave. Offal keytar dolore, VHS voluptate exercitation waistcoat polaroid. Intelligentsia waistcoat qui vaporware try-hard celiac pinterest you probably haven't heard of them godard dolore mollit. Literally eu single-origin coffee, ut pabst 8-bit roof party deserunt meggings magna.</p>`,
            author: "Heather Malloy",
            pic:"http://heatherdaniellehaws.com/images/heather-malloy2020.jpg"
          },
          {
            id: "post-2",
            heading: "header-2",
            date: "02-22-2019",
            img: "http://heatherdaniellehaws.com/images/FemaleNude2.jpg",
            alt: "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
            title: "Blog Post Number Two",
            teaser:"Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony.",
            content: `<p>Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony. Af kombucha id literally meditation selfies chartreuse. Health goth adipisicing tilde occaecat stumptown affogato pabst do pork belly, selvage venmo.</p>

            <p>Commodo slow-carb aute raw denim. Fingerstache gluten-free velit irure banjo exercitation. Tbh VHS crucifix, retro godard exercitation XOXO kombucha typewriter. Art party minim irure, godard dreamcatcher direct trade edison bulb glossier pabst. Brunch cred exercitation wolf meggings air plant poutine qui. Banjo aliqua chambray green juice, anim drinking vinegar authentic hoodie meggings hexagon. Microdosing culpa readymade 90's shaman selfies kickstarter commodo tumeric tousled eu.</p>

            <p>Authentic dolore affogato gluten-free, incididunt artisan you probably haven't heard of them coloring book kitsch humblebrag chillwave. Offal keytar dolore, VHS voluptate exercitation waistcoat polaroid. Intelligentsia waistcoat qui vaporware try-hard celiac pinterest you probably haven't heard of them godard dolore mollit. Literally eu single-origin coffee, ut pabst 8-bit roof party deserunt meggings magna.</p>`,
            author: "Heather Malloy",
            pic:"http://heatherdaniellehaws.com/images/heather-malloy2020.jpg"
          },
          {
            id: "post-3",
            heading: "header-3",
            date: "03-03-2018",
            img: "http://heatherdaniellehaws.com/images/FemaleNude3.jpg",
            alt: "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
            title: "Blog Post Number Three",
            teaser:"Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony.",
            content: `<p>Nisi dolor ethical, do ut enim nostrud mumblecore hexagon narwhal. Swag offal exercitation DIY franzen. Labore in brooklyn et mumblecore cliche nisi irony. Af kombucha id literally meditation selfies chartreuse. Health goth adipisicing tilde occaecat stumptown affogato pabst do pork belly, selvage venmo.</p>

            <p>Commodo slow-carb aute raw denim. Fingerstache gluten-free velit irure banjo exercitation. Tbh VHS crucifix, retro godard exercitation XOXO kombucha typewriter. Art party minim irure, godard dreamcatcher direct trade edison bulb glossier pabst. Brunch cred exercitation wolf meggings air plant poutine qui. Banjo aliqua chambray green juice, anim drinking vinegar authentic hoodie meggings hexagon. Microdosing culpa readymade 90's shaman selfies kickstarter commodo tumeric tousled eu.</p>

            <p>Authentic dolore affogato gluten-free, incididunt artisan you probably haven't heard of them coloring book kitsch humblebrag chillwave. Offal keytar dolore, VHS voluptate exercitation waistcoat polaroid. Intelligentsia waistcoat qui vaporware try-hard celiac pinterest you probably haven't heard of them godard dolore mollit. Literally eu single-origin coffee, ut pabst 8-bit roof party deserunt meggings magna.</p>`,
            author: "Heather Malloy",
            pic:"http://heatherdaniellehaws.com/images/heather-malloy2020.jpg"
          }
        ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
