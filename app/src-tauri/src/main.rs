#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

// https://github.com/NanoAi/tauri-vite-svelte-demo/blob/master/src-tauri/src/main.rs
// Author: https://github.com/NanoAi
#[tauri::command]
fn window_ready(window: tauri::Window) {
    window.show().expect("Failed to Show Window");
    window.set_focus().expect("Failed to Focus Window");
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![window_ready]) // Author: https://github.com/NanoAi
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
