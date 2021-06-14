<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col>
        <SearchBooksForm />
      </v-col>
      <!-- <v-col v-for="card in cards" :key="card" cols="12">
        <v-card>
          <v-subheader>{{ card }}</v-subheader>

          <v-list two-line>
            <template v-for="n in 6">
              <v-list-item :key="n">
                <v-list-item-avatar color="grey darken-1"> </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Message {{ n }}</v-list-item-title>

                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil repellendus distinctio similique
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col> -->
    </v-row>
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
