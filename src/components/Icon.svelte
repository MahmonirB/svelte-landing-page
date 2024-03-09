<script lang="ts">
    export let icon: string;
  </script>
  
  {#if icon}
    <img src={`src/assets/icons/${icon}.svg`} alt="icon" class="ml-1 mr-1 w-4 h-4" />
  {/if}
  