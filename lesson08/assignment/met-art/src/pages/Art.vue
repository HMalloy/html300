<template>
  <div>
    <Heading>
      <h1 slot="heading">Art</h1>
    </Heading>
    <!-- LOOP through art pieces -->
    <div class="row">
      <div v-for="piece in art" class="col-12 col-sm-6 col-lg-4 art__container">
        <b-button variant="outline-danger" class="mb-4 p-2 rounded-circle art__btn" v-b-popover.hover.right="(piece.materials + ' | by ' + piece.artist)" v-bind:title="piece.title">
          <figure class="art mb-0">
            <div class="art__img border border-dark rounded-circle overflow-hidden bg-dark">
              <!-- BIND attritbutes to images -->
              <!-- image component pulled in here -->
              <ArtPiece
                :src="piece.src"
                :alt="piece.alt"
                :title="piece.title"
              >
              </ArtPiece>
            </div>
          </figure>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import ArtPiece from "@/components/ArtPiece";
import Heading from "@/components/Heading";
export default {
  name: 'Art',
  components: {ArtPiece, Heading},
  data () {
    return {
      art: [
        {
          index: 1,
          src: "http://heatherdaniellehaws.com/images/FemaleNude1.jpg",
          alt: "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
          title: "Female Nude 1",
          materials: "Oil Paint on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 2,
          src: "http://heatherdaniellehaws.com/images/FemaleNude2.jpg",
          alt: "Painting very light colors, topless woman from waist up.",
          title: "Female Nude 2",
          materials: "Oil Paint on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 3,
          src: "http://heatherdaniellehaws.com/images/FemaleNude3.jpg",
          alt: "Painting of a nude woman sitting backwards in a chair facing away.",
          title: "Female Nude 3",
          materials: "Oil Paint on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 4,
          src: "http://heatherdaniellehaws.com/images/redHeadedNude.jpg",
          alt: "Painting of red headed woman sitting on stool.",
          title: "Red Headed Nude",
          materials: "Oil Paint on Wood",
          artist: "Heather Malloy"
        },
        {
          index: 5,
          src: "http://heatherdaniellehaws.com/images/MaleNude1.jpg",
          alt: "Painting of a nude man, standing, from behind.",
          title: "Male Nude 1",
          materials: "Oil Paint on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 6,
          src: "http://heatherdaniellehaws.com/images/MaleNude2.jpg",
          alt: "Painting of a shirtless man wearing a hat with a red curtain hanging in the background. Focused in on waist up.",
          title: "Male Nude 2",
          materials: "Oil Paint on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 7,
          src: "http://heatherdaniellehaws.com/images/MaleNude3.jpg",
          alt: "Painting of a shirtless man leaning against a greenish colored cloth, focused on waist up.",
          title: "Male Nude 3",
          materials: "Oil Paint on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 8,
          src: "http://heatherdaniellehaws.com/images/SelfStudy1.jpg",
          alt: "Chalk drawing of woman baring her teeth, looking uncomfortable or upset. High contrast, red, black, and white colors.",
          title: "Self Portrait",
          materials: "Chalk on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 9,
          src: "http://heatherdaniellehaws.com/images/StillLife1.jpg",
          alt: "Painting of a still life.",
          title: "Still Life 1",
          materials: "Oil Paint on Canvas",
          artist: "Heather Malloy"
        },
        {
          index: 10,
          src: "http://heatherdaniellehaws.com/images/StillLife2.jpg",
          alt: "Charcoal drawing of a Barbie doll.",
          title: "Still Life 2",
          materials: "Charcoal on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 11,
          src: "http://heatherdaniellehaws.com/images/StillLife3.jpg",
          alt: "Painting of yellow banana sitting on a purple cloth.",
          title: "Still Life 3",
          materials: "Acrylic on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 12,
          src: "http://heatherdaniellehaws.com/images/amy-portrait.jpg",
          alt: "Color Pencil drawing of woman with arms outstretched, sunflowers in the background, fire at her feet.",
          title: "Portrait of Amy",
          materials: "Color Pencil on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 13,
          src: "http://heatherdaniellehaws.com/images/evan-portrait.jpg",
          alt: "Color Pencil drawing of two sides of a man - one of the king and one of the warrior, based on the King of Hearts from a deck of cards.",
          title: "Portrait of Evan",
          materials: "Color Pencil on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 14,
          src: "http://heatherdaniellehaws.com/images/colonel.jpg",
          alt: "Color Pencil drawing of a black and white dog dressed up like a Colonel with a patch over one eye and water in the background.",
          title: "Portrait of the Colonel",
          materials: "Color Pencil on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 15,
          src: "http://heatherdaniellehaws.com/images/prince.jpg",
          alt: "Color Pencil drawing of a yellow and tan dog dressed up as a prince with a black background.",
          title: "Portrait of the Prince",
          materials: "Color Pencil on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 16,
          src: "http://heatherdaniellehaws.com/images/serra.jpg",
          alt: "Color Pencil drawing in the style of Alfons Mucha of a woman with golden, curly hair",
          title: "Portrait of Serra",
          materials: "Color Pencil on Paper",
          artist: "Heather Malloy"
        },
        {
          index: 17,
          src: "http://heatherdaniellehaws.com/images/AmyBeforeChristmas.jpg",
          alt: "Color Pencil Drawing of a woman in Mexican Style Clothing and Make-Up standing in front of a Nightmare Before Christmas Background.",
          title: "Portrait of Ami",
          materials: "Color Pencil on Paper",
          artist: "Heather Malloy"
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
