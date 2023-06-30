<script lang="ts">
    //flip animation function which stands
    //for first last invert play and calculate
    //starting and end position of an element to
    //animate between them
    import { flip } from "svelte/animate";
    import { createEventDispatcher } from "svelte";
   
    interface Item {
      id: string;
      index: number;
      [key: string]: any;
    }
   
    export let list: any[];
   
    let isOver: string | boolean = false;
   
    const dispatch = createEventDispatcher();
   

    //recursive function which will determine the actual HTML element b
    //being dragged; that element will hava dataset
    //that will have information on the item
    //reason we need this is because the initial drag event might
    //happen on a child element that won't contain
    //the dataset that we need
    function getDraggedParent(node: any): Item {
      if (!node.dataset.index) {
        return getDraggedParent(node.parentNode);
      } else {
        return { ...node.dataset } as Item;
      }
    }
    function onDragStart(e: DragEvent) {
      // @ts-ignore
      const dragged = getDraggedParent(e.target);
      e.dataTransfer?.setData("source", dragged?.index.toString());
    }
    function onDragOver(e: DragEvent) {
      // @ts-ignore
      const id = e.target.dataset?.id;
      const dragged = getDraggedParent(e.target);
      isOver = dragged?.id ?? false;
    }
    function onDragLeave(e: DragEvent) {
      const dragged = getDraggedParent(e.target);
      isOver === dragged.id && (isOver = false);
    }
    function onDrop(e: DragEvent) {
      isOver = false;
      const dragged = getDraggedParent(e.target);
      reorder({
        from: e.dataTransfer?.getData("source"),
        to: dragged.index,
      });
    }

    // custom function which will re-order the list whenever it is sorted 
    const reorder = ({ from, to }: any) => {
      const newList = [...list];
      newList[from] = [newList[to], (newList[to] = newList[from])][0];
      dispatch("sort", newList);
    };
  </script>
  
  {#if list?.length}
    <ul class="list-none p-0 flex flex-col items-center">
      <!-- item id is used as index of the list  -->
        {#each list as item, index (item.id)}
        <li
          class="border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full"
          class:over={item.id === isOver}
          data-index={index}
          data-id={item.id}
          draggable="true"
          on:dragstart={onDragStart}
          on:dragover|preventDefault={onDragOver}
          on:dragleave={onDragLeave}
          on:drop|preventDefault={onDrop}
          animate:flip={{ duration: 300 }}
        >
        <!-- slot props used here  -->
          <slot {item} {index} />
        </li>
      {/each}
    </ul>
  {:else}
    <p class="text-center my-12 text-lg font-bold">No items</p>
  {/if}
  
  <style>
    .over {
      @apply border-gray-400 scale-105;
    }
  </style>