import { defineStore } from "pinia";

export const useSearch = defineStore("input", {
  state: () => ({
    input: "",
    itemData: [],
  }),
});
