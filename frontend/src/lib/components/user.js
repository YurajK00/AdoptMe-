// Import necessary dependencies
import { writable } from 'svelte/store';

// Define the user store
const userStore = writable({
  isLoggedIn: false,
  // Add other user data properties as needed
});

// Export user store methods
export const user = {
  subscribe: userStore.subscribe,
  login: (userData) => {
    userStore.set({
      isLoggedIn: true,
      ...userData,
    });
  },
  logout: () => {
    userStore.set({
      isLoggedIn: false,
    });
  },
};













//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











  // checkAuthentication: async () => {
  //   try {
  //     const response = await fetch(AUTH_URL, {
  //       method: 'GET',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (response.ok) {
  //       const { username } = await response.json();
  //       user.login({ username });
  //     } else {
  //       user.logout();
  //     }
  //   } catch (error) {
  //     console.error('Error checking authentication:', error);
  //     user.logout();
  //   }
  // },

  // signup: async (userData) => {
  //   try {
  //     const response = await fetch(SIGNUP_URL, {
  //       method: 'POST',
  //       credentials: 'include',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(userData),
  //     });

  //     if (response.status === 401) {
  //       const data = await response.json();
  //       if (data.error === 'username_taken') {
  //         throw new Error('Username is already taken. Please choose another one.');
  //       } else if (data.error === 'email_taken') {
  //         throw new Error('Email is already taken. Please use a different email address.');
  //       } else {
  //         throw new Error('Signup failed.');
  //       }
  //     } else {
  //       const { username, email } = userData;
  //       user.login({ username, email });
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  
  // Add other user-related methods
