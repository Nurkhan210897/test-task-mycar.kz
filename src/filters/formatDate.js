import Vue from "vue"

Vue.filter('formatDate', function(date) {
    const options = {}

    options.day = '2-digit'
    options.month = 'long'
    options.year = 'numeric'

    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
})