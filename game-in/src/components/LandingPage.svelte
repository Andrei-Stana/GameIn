<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#section-main">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link fs-5 active" href="#section-about">About</a>
          <a class="nav-link fs-5 active" href="#section-goal">Goal</a>
          <a class="nav-link fs-5 active" href="#section-goal">Login</a>
        </div>
      </div>
    </div>
</nav>

<section id="section-main">
    <div class="d-flex felx-flow align-items-center h-100">
        <p class="display-6 mb-5">
            Welcome to GameIn a platform where
            GAMERS can find their true love.
        </p>
        <hr>
        <div class="register-card w-50">
            <div class="register">
                <img src="https://img.icons8.com/color/150/000000/google-logo.png" alt="Google Logo"/>
                <img src="https://img.icons8.com/ios-filled/150/000000/steam.png" alt="Steam Logo">
                <img src="https://img.icons8.com/ios/150/000000/epic-games.png" alt="Epicgames Logo">
            </div>
        </div>
    </div>
</section>


<section id="section-about" class="d-flex justify-content-center align-items-center">
    <div class="col">
        <div class="card">
            <div class="d-flex justify-content-center mt-3">
                <img src="https://i.ibb.co/q7mT2M6/Close-Up-Cropped.jpg" alt="Kyaw" class="profile-pic border border-light border-2"/>
            </div>
            <div class="card-body text-white">
                <h1 class="display-6 text-center ">Kyaw Htet Htun</h1>
                <h1 class="fs-3 text-center ">Mostly Frontend / Backend</h1>
                <div class="sperate-line"></div>
                <p class="fs-5">I am 16 years old and I am attending an informatic school.
                    <br>This is a main project for me.
                    <br>I am a work mostly on the frontend.
                </p>
            </div>
            <div class="card-footer lead text-white">
                Socials:
                <a href="https://twitter.com/KyawHtetHtun65" target="_blank" style="margin-bottom: 100px">
                    <button type="button" class="btn btn-primary">
                        Twitter <img src="https://img.icons8.com/ios/30/000000/twitter--v1.png" alt="Twitter Icon"/>
                    </button></a>
                <a href="https://www.instagram.com/asian.boy_2005/" target="_blank">
                    <button type="button" class="btn btn-primary">
                        Instagram <img src="https://img.icons8.com/ios/30/000000/instagram-new--v1.png" alt="Instagram Icon"/>
                    </button>
                </a>
            </div>
        </div>
    </div>

    <div class="col">
        <div class="card">
            <div class="d-flex justify-content-center mt-3">
                <img src="" alt="Andrei Stana" class="profile-pic border border-light border-2"/>
            </div>
            <div class="card-body text-white">
                <h1 class="display-6 text-center ">Andrei Stana</h1>
                <h1 class="fs-3 text-center ">Frontend / Mostly Backend</h1>
                <div class="sperate-line"></div>
                <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, in.
                    <br>Lorem ipsum dolor sit amet.
                    <br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, porro.
                </p>
            </div>
            <div class="card-footer lead text-white">
                Socials:
                <a href="" target="_blank" style="margin-bottom: 100px">
                    <button type="button" class="btn btn-primary">
                        Twitter <img src="https://img.icons8.com/ios/30/000000/twitter--v1.png" alt="Twitter Icon"/>
                    </button></a>
                <a href="" target="_blank">
                    <button type="button" class="btn btn-primary">
                        Instagram <img src="https://img.icons8.com/ios/30/000000/instagram-new--v1.png" alt="Instagram Icon"/>
                    </button>
                </a>
            </div>
        </div>
    </div>
</section>

<section id="section-goal">
    <p class="imagine">Imagine</p>
    <p class="a-place">"A Place..."</p>
    <p class="idea-txt">
      Imagine you want to play something after a long school or work day and you don't have any idea with whom you should play cause your friends are busy or you don't have any.
      <span class="pop-out">Here is where we come in action.</span> We want to develop a platform where gamers can<span class="pop-out"> create online parties</span> and those who are searching for parties can see them in a feed.
      Aside from that we want to implement different party functionalities like <span class="pop-out">tournament</span> mode to make sure you have fun on our platform or a premium function where you can customize your account to show your friends how cool you are or to define your personality.
    </p>
    <p class="goal-txt">
      We want to make gaming and online socializing easier and funnier than ever. We also want to support people who want to start a career in e-sports as server owners and average gamers.
    </p>
</section>

<style>
nav{
    width: 100%;
    position: fixed;
    top: 0;
    line-height: 2.5;
    z-index: 10;
}
.felx-flow{
    flex-flow: wrap;
}

.register{
    background-color: rgba(66, 66, 66, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 150px 0px 150px 0px;
    filter: drop-shadow(20px 20px 10px rgba(0, 0, 0, 0.25));
    z-index: auto;
}

.register img{
    width: 100px;
    opacity: 0.8;
    transition: 0.2s;
}

.register img:hover{
    width: 120px;
    opacity: 1;
    cursor: pointer;
}

#section-main {
    height: 100vh;
    background-color: #434343;
}

#section-about{
    height: 100vh;
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
}

#section-goal{
    background-color: #C9D7F8;
    height: 100vh;
}

.col {
    width: 50%;
    padding: 40px;
}
.card {
    background: rgba( 139, 139, 139, 0.25 );
    box-shadow: 0 8px 32px 0 rgba(74, 74, 85, 0.37);
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.profile-pic{
    border-radius: 100%;
    display: block;
    width: 20%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
}
.sperate-line{
    width: 100%;
    height: 2px;
    background-color: #ffffff;
}

@keyframes fadeIn {
    0% {
        transform: translateY(-150px);
        opacity:0;
    }
    100% {
        transform: translateY(0px);
        opacity:1;
    }
}

@keyframes fadeInLaptop {
    0% {
        transform: translateX(1000px);
        opacity:0;
    }
    50% {
        transform: translateX(750px);
        opacity:0;
    }
    100% {
        transform: translateX(0px);
        opacity:1;
    }
}

@keyframes opacity {
    0% {
        opacity:0;
    }
    50% {
        opacity:0.8;
    }
    100% {
        opacity:1;
    }
}

@keyframes wave {
    0%   {
        left:0px;
        top:0px;}
      
      50%  {
        left:-2000px;
        top:200px;}
      
      100% {
        left:0px; 
        top:0px;}
}

@media screen and (max-width: 1352px) {
    nav{
        height: auto;
    }

    .register{
        width: 700px;
        height: 100px;
    }

    .register img{
        width: 75px;
    }

    .register img:hover{
        width: 80px;
    }

    
}

</style>