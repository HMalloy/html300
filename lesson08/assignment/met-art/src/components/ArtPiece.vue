<script>
import { imageMixin } from '../mixins/imageBorderMixin.js';
export default {
  name: 'ArtPiece',
  mixins: [imageMixin],
  props: {
    img: {
      type:String
    },
    alt: {
      type:String,
      required:true,
      default: 'A lovely piece from the Met archives.'
    },
    title: {
      type:String,
      required:true,
      default: 'Untitled.'
    }
  },
  template: `<img class="art-tip img-fluid rounded-circle" src="${this.img}" alt="${this.alt}" title="${this.title}" @click="toggleBorder()" :class="{ active: isBordered }"/>`
}
</script>
