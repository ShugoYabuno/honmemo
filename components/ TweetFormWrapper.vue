<template>
  <div class="tweet-form-wrapper">
    <slot></slot>
    <div class="tweet-form">
      <SearchBooksForm />
      <div class="tweet-button">
        <v-btn fab>
          <v-icon>mdi-pencil-plus</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>
