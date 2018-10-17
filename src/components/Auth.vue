<script>
export default {
  props: ['auth', 'authenticated'],
  created: function () {
    if (!this.authenticated) {
      this.auth.login()
    }
  },
  render: function () {
    return null
  }
}
</script>