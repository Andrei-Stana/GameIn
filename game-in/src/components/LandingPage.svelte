<script>
    import Link from "svelte-navigator/src/Link.svelte";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#section-main">GameIn</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link fs-5 active" href="#section-about">About</a>
          <a class="nav-link fs-5 active" href="#section-goal">Goal</a>
          <Link class="nav-link fs-5 active" to="/login">Base</Link>
        </div>
      </div>
    </div>
</nav>

<section id="section-main">
    <div class="heart-shape hposi-1"></div>
    <p class="display-6 position-absolute txt-top start-50 translate-middle w-50">
        Welcome to <u>GameIn</u> a platform where <u>GAMERS</u> can find their <u>true love</u>.
    </p>
    <button class="btn btn-primary btn-lg position-absolute btn-top start-50 translate-middle fs-3 rounded-pill" style="height: 8vh; width: 15vw">Get Started!</button>

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
    @import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
    /*font-family: 'Arvo', serif;*/
nav{
    width: 100%;
    position: fixed;
    top: 0;
    line-height: 2.5;
    z-index: 10;
}

#section-main {
    height: 100vh;
    background-color: #e98686;
}

#section-about{
    height: 100vh;
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
}

#section-goal{
    background-color: #C9D7F8;
    height: 100vh;
}

.txt-top{
    top: 45%;
    font-family: 'Arvo', serif;
}

.btn-top{
    top: 65%;
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

.hposi-1{
    top: 35%;
    left: 30%;
}
    .heart-shape{
        position: relative;
        width: 200px;
        height: 200px;
        transform: rotate(55deg);
        background-color: #f48d8d;
    }
    .heart-shape:before,
    .heart-shape:after{
        position: absolute;
        width: 200px;
        height: 200px;
        content: '';
        border-radius: 50%;
        background-color: #f48d8d;
    }
    .heart-shape:before{
        bottom: 0px;
        left: -100px;
    }
    .heart-shape:after{
        top: -100px;
        right: 0px;
    }

</style>