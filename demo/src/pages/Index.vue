<template>
  <q-page class="flex flex-center">
    <q-form>
    <q-postal-code
      v-model="postalCode"
      :rules="[val => !!val || 'Field is required']"
      fill-mask
      locale="nl"
    ></q-postal-code>

    <q-btn color="primary" type="submit" label="submit" />
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      postalCode: ''
    }
  }
}
</script>
