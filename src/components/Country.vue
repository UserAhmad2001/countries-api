<script>
export default {
    props:['props']
}
</script>


<template>
    <div class="country">
        <img :src="props.flags.png" alt="country flag">
        <h1 class="title">{{ props.name.common }}</h1>
        <h1 class="population">Population: <p>{{ props.population }}</p></h1>
        <h1 class="region">Region: <p>{{ props.region }}</p></h1>
        <h1 class="capital">Capital: <p> {{ props.capital }}</p></h1>
    </div>
</template>


