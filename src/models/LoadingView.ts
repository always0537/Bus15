import type { Modal } from "bootstrap";
import { writable } from "svelte/store";

export const LoadingViewStore = writable<Modal>();
export let LoadingView: Modal | undefined;

LoadingViewStore.subscribe(n => LoadingView = n);