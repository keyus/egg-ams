import Vue from 'vue'

Vue.filter('money', function (number) {
    const fallbackNumber = Number.isNaN(+number) ? 0 : +number;
    const val = new Intl.NumberFormat('zh-CN', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    }).format(fallbackNumber);
    return `${val}元`

})
