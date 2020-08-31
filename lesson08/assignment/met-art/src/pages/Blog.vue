<template>
  <div>
    <Heading>
      <h1 slot="heading">Blog</h1>
    </Heading>
    <div role="tablist" id="my-accordion">
      <!-- use bootstrap-vue accordion component -->
      <!-- LOOP through blog posts -->
      <b-card v-for="post in posts" :key="post" no-body class="mb-1">
        <b-card-header header-tag="header" class="p-0 m-0" role="tab">
          <b-button block data-toggle="collapse" :data-target="('#' + post.id)" role="button" aria-expanded="false" v-bind:aria-controls="post.id" variant="dark">
            <span class="float-left">
              <strong>{{ post.title }}</strong>
            </span>
            <span class="float-right">
              {{ post.date }}
            </span>
          </b-button>
        </b-card-header>
        <b-collapse v-bind:id="post.id" :visible="post.visible" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text small class="text-secondary">Written by {{ post.author }}</b-card-text>
            <b-card-text v-html="post.content">
              <!-- load content for each blog post from data-->
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      posts: [
          {
            id: "post-1",
            visible: true,
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
            visible: false,
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
            visible: false,
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

<style>
/* I cannot get the accordion to work by building it iteratively.
I can see the correct classes being added via dev tools, but the style attribute is not being
removed. This is a hacky-temporary solution so that I can submit this assignment
I think that it has something to do with "visible" in the attributes */
/* .collapse.show {
  display: block!important;
} */
</style>
