<template>
    <button class="btn" :class="types[type]" @click="$emit('click', $event)">
        <span>
            <slot></slot>
        </span>
    </button>
</template>
<script type="text/javascript">
export default {
    name: 'v-button',
    props: ['type'],
    data() {
        return {
            types: {
                primary: 'btn-primary'
            }
        }
    },
    mounted() {
        console.log('button')
        let a = 1234;
        console.log(a);
        const set = new Set([1, 2, 3, 4, 3, 2, 1]);
        Array.from(set).forEach(num => { console.log(num) })
    }
}
</script>
<style type="text/css">
button{
    padding: 3px 8px;
}
.btn {
    color: #333;
    background-color: #fff;
    border: 1px solid #f3f3f3;
}

.btn-primary {
    color: #e60000;
}
</style>
