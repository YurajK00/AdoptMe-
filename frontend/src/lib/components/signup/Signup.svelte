<script>
    import { goto } from "$app/navigation";
    import { user } from "../../../lib/components/user.js";
  let username = "";
  let email ="";
  let password = "";
  let confirmedPassword = "";
  let error = false;
  let passwordMatchError = false;
  let usernameTakenError = false;
  let emailTakenError = false;
  let images = ["/src/lib/image/defaultPP-cat.png", "/src/lib/image/defaultPP-dog.png", "/src/lib/image/defaultPP-duck.png","/src/lib/image/defaultPP-hamster.png", "/src/lib/image/defaultPP-pig.png"];
  let currentImage = 0;

  function toggleImage() {
    currentImage = (currentImage + 1) % images.length; //setting default image
  }

  async function handleSignup() {
    error = false;
    passwordMatchError = false;
    usernameTakenError = false;
    emailTakenError = false;

    // Validation to make passwords matching
    if (password !== confirmedPassword) {
      passwordMatchError = true;
      return;
    }
    const response = await fetch("/api/signup", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, confirmedPassword })
    });

    if (response.status === 400) {
      // Handle signup failure, like username or email is already taken
      const data = await response.json();
      if (data.error === "username_taken") {
        usernameTakenError = true;
      } else if (data.error === "email_taken") {
        emailTakenError = true;
      } else {
        error = true;
      }
    } else {
      // Signup successful
      user.login({ username, email });
      goto("/", { invalidateAll: true, replaceState: true });
    }
  }
</script>

<svelte:head>
  <title>Register</title>
</svelte:head>

<h1 id="registerHeader">Register</h1>

    <form id="register-container" on:submit|preventDefault={handleSignup}> 
      <label for="username">Enter your username:</label>
      <input type="text" name ="username" bind:value={username} required />
      {#if usernameTakenError}
        <p style="color: red;">Username is already taken. Please choose another one.</p>
      {/if}
      <label for="email">Enter your email:</label>
      <input type="email" name="email" bind:value={email} required />
      {#if emailTakenError}
        <p style="color: red;">Email is already taken. Please use a different email address.</p>
      {/if}
      <label for="password">Enter your password:</label>
      <input type="password" name="password" bind:value={password} required />
      <label for="confirmedPassword">Confirm your password:</label>
      <input type="password" name="confirmedPassword" bind:value={confirmedPassword} required />
      {#if passwordMatchError}
      <p style="color: red;">Password does not match.</p>
      {/if}

      <div class="pickPP">
        <div class="pickPP-label">
          <label for="profilePicture">Profile pictures:</label>
        </div>
      <div class="pickPP-image">
        <img src={images[currentImage]} alt="nextImage">
        <button on:click={toggleImage}>next</button>
      </div>
    </div>

      <button id="registerButton" type="submit">Signup</button>
      <div class="login">
        <span class="signingin">Already have an account?
          <a href="login" on:click={() => goto("/login")}>&#x1F64C Log in</a> 
        </span>
      </div>
    </form>

    <style>

    #registerHeader{
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
  
    #register-container{
      background-color: rgba(255, 255, 255, 0.6);
      position: relative;
      margin: 0 auto;
      top: 50px;
      margin-bottom: 100px;
      width: 500px;
      height: 500px;
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

    #registerButton {
      grid-column: 1 / 3;
      padding: 10px;
      margin: 25px;
      font-size: 15px;
      border-radius: 12px;
      cursor: pointer;
    }

    .login{
      font-size: 19px;

      & a{
        text-decoration: underline;
        font-family: "roboto";
        font-size: 20px;
        position: relative;
        left:200px;
        color: #21492a;
      }
    }


    .pickPP{
      display: flex;
    }

    .pickPP-image{
      display: flex;
      flex-direction:column;
      gap: 10px;
      position: relative;
      top: 15px;
      left: 200px;
    
      & button{
        width: 100px;
        font-size: 15px;
        border-radius: 12px;
        cursor: pointer;
      }
    }

    img{
      width: 100px;
      height: 100px;

      &:hover {
        transition-duration: 0.5s;
        transform: scale(1.2);
      }
    }
      </style>