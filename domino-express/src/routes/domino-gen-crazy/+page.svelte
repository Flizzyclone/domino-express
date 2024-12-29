<script lang="ts">
    import Domino from "$lib/components/Domino.svelte";

    import '$lib/styles/domino.css'

    let n1: number = 0;
    let n2: number = 0;

    let runner: number = 0;

    function run() {
        runner = setInterval(randGen, 200);
    }

    function stop() {
        clearInterval(runner);
    }

    function randGen() {
        n1 = Math.floor(Math.random() * 13);
        n2 = Math.floor(Math.random() * 13);
    }
</script>

<div id="canvasWrap">
    <svg id="canvas">
        <Domino num1={n1} num2={n2} x={5} y={5}/>
    </svg>
    <div id="modulationHolder">
        <div>
            <button class="btn btn-square btn-lg" on:click={() => { if (n1 < 12) n1++}}>+</button>
            <button class="btn btn-square btn-lg" on:click={() => { if (n1 > -1) n1--}}>-</button>
        </div>
        <div>
            <button class="btn btn-square btn-lg" on:click={() => { if (n2 < 12) n2++}}>+</button>
            <button class="btn btn-square btn-lg" on:click={() => { if (n2 > -1) n2--}}>-</button>
        </div>
    </div>
    <br>
    <div>
        <button class="btn btn-lg" on:click={run}>Run</button>
        <button class="btn btn-lg" on:click={stop}>Stop</button>
    </div>
</div>
