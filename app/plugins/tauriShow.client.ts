import { defineNuxtPlugin } from '#app'

import { invoke } from '@tauri-apps/api';

export default defineNuxtPlugin(() => {  
	onNuxtReady(async () => {
	    if (window.__TAURI_IPC__) {
      			invoke("window_ready");
    	}
	})
})