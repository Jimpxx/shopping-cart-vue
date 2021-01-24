<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card {
    border: 1px solid #eee;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem;
    // padding: 1rem;
    // width: 300px;
    // height: 100%;
}
</style>
