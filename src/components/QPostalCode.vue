<template>
  <q-input
    v-bind="$attrs"
    :mask="masks[locale]"
    :rules="validationRules"
    v-on="$listeners"
  />
</template>

<script>
const availableLocales = ['nl']

export default {
  inheritAttrs: false,
  props: {
    locale: {
      type: String,
      default: 'nl',
      validator: function (value) {
        return availableLocales.indexOf(value) !== -1
      }
    }
  },
  data () {
    return {
      lang: {
        qPostalCode: {}
      },
      masks: {
        nl: '#### AA'
      },
      validations: {
        nl: [
          val =>
            !val || // Do not check an empty string
            /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(val) ||
            this.lang.qPostalCode.validationError
        ]
      }
    }
  },
  computed: {
    validationRules () {
      if (this.$attrs.rules) {
        return [...this.validations[this.locale], ...this.$attrs.rules]
      } else {
        return this.validations[this.locale]
      }
    }
  },
  watch: {
    '$q.lang.isoName' (val) {
      this.__setupLang()
    }
  },
  beforeMount () {
    this.__setupLang()
  },
  methods: {
    __setupLang () {
      let isoName = this.$q.lang.isoName || 'en-us'
      let lang
      try {
        lang = require(`./lang/${isoName}`)
      } catch (e) {}

      if (lang !== void 0) {
        this.lang['qPostalCode'] = { ...lang.default.qPostalCode }
      }
    }
  }
}
</script>
