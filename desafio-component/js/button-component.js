Vue.component('my-button', {
    template: `
        <button @click="rotate(rotateValue)">Rotate</button>
    `,
    props: ['value']
})