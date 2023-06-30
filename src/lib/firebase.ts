import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";

const firebaseConfig = {
    apiKey: "AIzaSyA4hIw9uAbEaMJ5hxrdxN32jaGwX3SC-dY",
    authDomain: "sveltekit1-0.firebaseapp.com",
    databaseURL: "https://sveltekit1-0-default-rtdb.firebaseio.com",
    projectId: "sveltekit1-0",
    storageBucket: "sveltekit1-0.appspot.com",
    messagingSenderId: "473626769958",
    appId: "1:473626769958:web:1434906be9cb86511284e7",
    measurementId: "G-X621364E6H"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

/**
 * @returns a store with the current firebase user
 */
function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  //auth?.currentUser ?? null means if currentUser is not there
  //return null
  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();