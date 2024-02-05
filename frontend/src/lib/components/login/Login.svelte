<script>
    import { goto } from "$app/navigation";
    import { AUTH_URL } from "../../../lib/js/api-urls.js";
    let username = "";
    let password = "";
    let error = false;
  
  
    /**
     * Handles logging in by sending a POST request to /api/auth, with the given username and password.
     *
     * If successful, redirect the user back to the homepage. Otherwise, display an error message.
     */
     async function handleSubmit() {
  error = false;
  
  try {
    const response = await fetch(AUTH_URL, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      // If response is not okay (status code other than 2xx)
      if (response.status === 401) {
        // Unauthorized: Incorrect username or password
        error = true;
      } else {
        // Other server errors
        console.error("Server error:", response.statusText);
      }
    } else {
      // Successful login, redirect user to homepage
      goto("/", { invalidateAll: true, replaceState: true });
    }
  } catch (error) {
    console.error("Error while processing login:", error);
    error = true; // Set error flag for unexpected errors
  }
}
    
  </script>
  
  <svelte:head>
    <title>Login</title>
  </svelte:head>
  
  <h1 id="loginHeader">Login</h1>
  
    <form id="login-container" on:submit|preventDefault={handleSubmit}>
    <label for="username">Username:</label>
    <input type="text" name="username" bind:value={username} required />
    <label for="password">Password:</label>
    <input type="password" name="password" bind:value={password} required />
    <button id="loginButton" type="submit">Login</button>
    {#if error}
      <span class="error">username or password not correct, please try again.</span>
    {/if}
    <div class="signup">
      <span class="signingup">Don't have an account?
        <a href="/signup" on:click={() => goto("/signup")}>&#x1F64C Sign up</a>
          </span>
      </div>
    </form>
  
  <style>
    
  #loginHeader{
  position: relative;
  top: 30px;
  color: #a85337;
  text-align: left;
  box-shadow: 0 5px 3px lightgray;
  margin: 20px;
  padding: 20px;
  font-family: "welovepeace";
  font-size: 30px;
  letter-spacing: 5px;
}
    
    #login-container{
      background-color: rgba(255, 255, 255, 0.6);
      position: relative;
      margin: 0 auto;
      top: 50px;
      margin-bottom: 100px;
      width: 500px;
      height: 250px;
      border: dotted rgb(10, 20, 10);
      border-radius: 12px;
      padding: 15px 32px;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 10px;

      & label{
        font-size: 20px;
        padding: 5px;
      }
    }
  
    #loginButton {
      grid-column: 1 / 3;
      padding: 10px;
      margin: 25px;
      font-size: 15px;
      border-radius: 12px;
      cursor: pointer;
    }
  
    .error {
      grid-column: 1 / 3;
      font-weight: bold;
      color: darkred;
      background-color: lightcoral;
      padding: 5px;
      text-align: center;
    }

    .signup{
      font-size: 20px;

      & a{
        text-decoration: underline;
        font-family: "roboto";
        font-size: 20px;
        position: relative;
        left:200px;
        color: #21492a;
      }
    }
  </style>
  