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
    <div class="controller-shape">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 58.189 58.189" style="enable-background:new 0 0 58.189 58.189;" xml:space="preserve">
        <path style="fill:#38454F;" d="M29.095,39.268h9.446c1.701,0,3.346,0.609,4.638,1.716l9.128,7.828
            c0.611,0.524,1.505,0.614,2.184,0.183c9.496-6.01-2.022-29.728-4.305-34.034c-0.242-0.457-0.641-2.936-1.126-3.113l-7.676-2.791
            c-0.673-0.245-1.422-0.155-2.017,0.242c0,0-2.164,1.383-2.649,1.383h-8.425h-6.549c-0.485,0-2.921-1.383-2.921-1.383
            c-0.596-0.397-1.345-0.487-2.017-0.242L9.13,11.848c-0.486,0.177-0.884,2.656-1.126,3.113C5.721,19.267-5.797,42.985,3.699,48.995
            c0.68,0.43,1.574,0.34,2.184-0.183l9.128-7.828c1.292-1.107,2.937-1.716,4.638-1.716H29.095z"/>
        <circle style="fill:#546A79;" cx="36.786" cy="30.268" r="4"/>
        <circle style="fill:#546A79;" cx="13.786" cy="20.268" r="4"/>
        <circle style="fill:#EBBA16;" cx="43.786" cy="16.268" r="2"/>
        <circle style="fill:#7383BF;" cx="39.786" cy="20.268" r="2"/>
        <circle style="fill:#D75A4A;" cx="47.786" cy="20.268" r="2"/>
        <circle style="fill:#61B872;" cx="43.786" cy="24.268" r="2"/>
        <path style="fill:#AFB6BB;" d="M31.786,11.712c0-0.192-0.019-0.38-0.054-0.561c-0.035-0.181-0.111-0.338-0.215-0.469
            c-1.171,0-2.08,0-2.479,0c-0.085,0.007-0.165,0.03-0.251,0.03c-0.087,0-0.167-0.022-0.251-0.03c-0.013,0-0.242,0-0.242,0h-2.247
            c-0.088,0.114-0.158,0.245-0.192,0.4c-0.087,0.398-0.094,0.827,0,1.271c0.248,1.17,1.225,2.113,2.404,2.314
            C30.148,14.989,31.786,13.542,31.786,11.712z"/>
        <path style="fill:#546A79;" d="M27.286,27.921H24v-3.286c0-0.395-0.32-0.714-0.714-0.714h-2.571c-0.395,0-0.714,0.32-0.714,0.714
        v3.286h-3.286c-0.395,0-0.714,0.32-0.714,0.714v2.571c0,0.395,0.32,0.714,0.714,0.714H20v3.286c0,0.395,0.32,0.714,0.714,0.714
        h2.571c0.395,0,0.714-0.32,0.714-0.714v-3.286h3.286c0.395,0,0.714-0.32,0.714-0.714v-2.571C28,28.241,27.68,27.921,27.286,27.921z"
        />
        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
    </div>
    <p class="display-6 position-absolute txt-top start-50 translate-middle w-50">
        Welcome to <u>GameIn</u> a platform where <u>GAMERS</u> can find their <u>true love</u>.
    </p>
    <button class="btn btn-primary btn-lg position-absolute btn-top start-50 translate-middle display-2 rounded-pill" style="height: 8vh; width: 15vw">Get Started!</button>

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
    background-color: #bcffb6;
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
    left: 60%;
}

.controller-shape{
    position: absolute;
    top: 25%;
    left: 20%;
    width : 20%;
    transform: rotate(-40deg);
    opacity: 0.3;
}
.heart-shape{
    position: absolute;
    width: 200px;
    height: 200px;
    transform: rotate(75deg);
    background-color: #ffa9a9;
}
.heart-shape:before,
.heart-shape:after{
    position: absolute;
    width: 200px;
    height: 200px;
    content: '';
    border-radius: 50%;
    background-color: #ffa9a9;
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