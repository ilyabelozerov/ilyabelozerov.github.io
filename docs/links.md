# Useful links

[Vojta Harok blog (in Czech)](https://krasajachtingu.cz/author/vojta-harok/): brave sailing with his wife in north Sardinia winds with Orca 375.

  <ul>
    <li
      v-for="page in pages"
      :key="page.key"
    >
      <RouterLink :to="page.path">{{ page.title }}</RouterLink>
      <span v-if="page.frontmatter.date">
        [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]
      </span>
    </li>
  </ul>

<script>
import { defineComponent } from 'vue'
import { usePages } from '@temp/planned'

export default defineComponent({
  setup() {
    const pages = usePages()
    console.log(pages)
    return { pages }
  },
})
</script>