import { writable } from "svelte/store";
import { fetchEntries } from "../api/index";

export const posts = writable(null)
fetchEntries().then(entries => {
    posts.set(entries.items);
})