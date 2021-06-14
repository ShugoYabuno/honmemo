<template>
  <div id="search-books-form">
    <div class="_title-form">
      <v-text-field
        name="search-query"
        label="書籍名"
        id="search-query"
        v-model="searchQuery"
        @focus="focusInput()"
        @blur="blurInput()"
        hide-details
      ></v-text-field>
      <v-list dense class="_list" v-if="isShowList">
        <v-list-item-group v-model="selectedIndex" color="primary">
          <v-list-item
            v-for="(book, index) in getBookTitles"
            :key="index"
            class="_list-item"
            @click="selectList(index)"
          >
            <v-list-item-content class="pa-0">
              <v-list-item-title
                v-text="book"
                class="_item-title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
    <div class="_content-form">
      <v-textarea
        name="content"
        label="感想"
        counter="140"
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        rows="1"
        auto-grow
      ></v-textarea>
    </div>
    <v-img v-if="getBookImg" :src="getBookImg"></v-img>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ssrRef,
  watch,
  ref,
  computed
} from '@nuxtjs/composition-api'
// import { firestore } from '~/plugins/firebase'
import axios from 'axios'

const _searchBooks = async (_q: string) => {
  const res = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${_q}&country=JP`
  )
  if (res.status !== 200) {
    console.log('GoogleBooksAPIs is failed')
    return []
  }

  console.log(res)

  return res.data.items as Book[]
}

const sleep = async (_ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, _ms)
  })
}

interface Book {
  volumeInfo: {
    title: string
    imageLinks: {
      smallThumbnail: string
    }
  }
}

export default defineComponent({
  setup() {
    const searchQuery = ssrRef<string>('')
    const selectedIndex = ssrRef<number>(0)
    const bookRef = ssrRef<Book>(Object)
    const booksRef = ssrRef<Book[]>([])

    const unixDate = ref<number>(Date.now())
    watch(
      () => searchQuery.value,
      async (_value) => {
        if (!_value) return (booksRef.value = [])

        unixDate.value = Date.now()
        await sleep(300)
        if (Date.now() - unixDate.value >= 300) {
          booksRef.value = await _searchBooks(_value)
        }
      }
    )

    const isShowList = computed(() => {
      return isFocusInput.value && getBookTitles.value.length >= 1
    })

    const isFocusInput = ssrRef<boolean>(false)
    const focusInput = () => {
      isFocusInput.value = true
    }
    const blurInput = async () => {
      await sleep(300)
      isFocusInput.value = false
    }

    const getBookTitles = computed(() => {
      return booksRef.value.map((_book) => _book.volumeInfo.title)
    })

    const selectList = (_index: number) => {
      console.log(_index)
      searchQuery.value = getBookTitles.value[_index]
      isFocusInput.value = false
      bookRef.value = booksRef.value[_index]
    }

    const getBookImg = computed(() => {
      const book = bookRef.value
      if (
        book.volumeInfo &&
        book.volumeInfo.imageLinks &&
        book.volumeInfo.imageLinks.smallThumbnail
      ) {
        return book.volumeInfo.imageLinks.smallThumbnail
      } else {
        return ''
      }
    })

    return {
      cards: ['Today', 'Yesterday'],
      searchQuery,
      getBookTitles,
      selectedIndex,
      isShowList,
      focusInput,
      blurInput,
      selectList,
      getBookImg
    }
  }
})
</script>
