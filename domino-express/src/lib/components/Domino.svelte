<script lang="ts">
    import assets from '$lib/assets/dominoes/DominoAssets';

    import '$lib/styles/domino.css'

    export let num1: number = 0;
    export let num2: number = 0;

    export let x: number = 0;
    export let y: number = 0;
</script>

<g>
    <rect class="dominoBase" x={x} y={y} width="50" height="25" rx="2"/>
    <rect class="dominoDivider" x={x+24} y={y+2.5} width="2" height="20"/>
    <g class="dominoOneSlot">
        {#await assets[num1] then number}
            {@html number.default}
        {/await}
    </g>
    <g class="dominoTwoSlot">
        {#await assets[num2] then number}
            {@html number.default}
        {/await}
    </g>
</g>