export const imageMixin = {
  data() {
    return {
      isBordered: false,
    }
  },
  methods: {
    toggleBorder() {
      return this.isBordered = !this.isBordered
    }
  }
}
