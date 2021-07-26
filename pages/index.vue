<template>
  <v-container class="py-8 px-6" fluid>
    <!-- <SearchBooksForm />
    <div class="pencil-plus">
      <v-btn fab>
        <v-icon>mdi-pencil-plus</v-icon>
      </v-btn>
    </div> -->
    <TweetFormWrapper>
      <h1>テスト</h1>
    </TweetFormWrapper>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  useAsync,
  ssrRef,
  watch,
  ref
} from '@nuxtjs/composition-api'
// import { firestore } from '~/plugins/firebase'
import axios from 'axios'

// const _searchBooks = async (_q: string) => {
//   const res = await axios.get(
//     `https://www.googleapis.com/books/v1/volumes?q=${_q}&country=JP`
//   )
//   if (res.status !== 200) return console.log('GoogleBooksAPIs is failed')

//   return res.data.items
// }

// const _getBookItems = async (_q: string) => {
//   const books = await _searchBooks(_q)
//   return books.map((_book: any) => _book.volumeInfo.title)
// }

// const sleep = async (_ms: number) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, _ms)
//   })
// }

export default defineComponent({
  setup() {
    // const searchQuery = ssrRef<string>('')
    // const bookItems = ssrRef<string[]>([])
    // const selectedItem = ssrRef<any>('')
    // const unixDate = ref<number>(Date.now())
    // watch(
    //   () => searchQuery.value,
    //   async (_value) => {
    //     console.log(_value)
    //     if (!_value) return
    //     unixDate.value = Date.now()
    //     await sleep(300)
    //     if (Date.now() - unixDate.value >= 300) {
    //       bookItems.value = await _getBookItems(_value)
    //       console.log(bookItems.value)
    //     }
    //   }
    // )
    // watch(
    //   () => selectedItem.value,
    //   (_value) => {
    //     searchQuery.value = bookItems.value[_value]
    //   }
    // )
    // onMounted(async () => {
    //   bookItems.value = await _getBookItems('あ')
    // })
    // return {
    //   cards: ['Today', 'Yesterday'],
    //   searchQuery,
    //   bookItems,
    //   selectedItem
    // }
  }
})
</script>
