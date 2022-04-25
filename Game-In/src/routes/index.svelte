
<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="Images/logo.svg" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled">Disabled</a>
            </div>
        </div>
    </div>
</nav>
<main>
    <div class="container-fluid d-flex vh-100 bg-primary" id="main-section">
        <div class="row justify-content-center align-self-center col-3" id="title">
            <div class="main-title">GameIn</div><br>
            <div class="slogan">A place where you can get the best out of you</div>
        </div>
        <img id="gaming-img" class="row justify-content-center col align-self-center" src="Images/undraw_gaming_re_cma2.svg" alt="">
    </div>
</main>
<section class="container-fluid d-flex vh-50 bg-light">
    <img id="img" class="" src="Images/undraw_social.svg" alt="">
    <div class="my-auto">
        <h1 class="col-sm-10 mx-5 ">Discover the world right in your room!<br></h1>
        <p id="info1" class="col-sm-9 mx-5">Our goal is to connect gamers all over the world and create new friendships. With our party radar system you can choose to create new adventures in public parties all over the world. You can create private parties too if you want to have a gaming night with your bros. The most important thing for us is for you to have fun!</p>
    </div>
</section>
<section class="container-fluid d-flex vh-50">
    <div class="my-auto">
        <h1 class="col-sm-10  mx-5">Climb to the top!<br></h1>
        <p id="info2" class="col-sm-9  mx-5 ">We want to support beginner and professional esports teams and players. For this reason we want to create the perfect enviroment for them to compete and achieve the best results in their career. There will be a plenty of esports teams waiting for you to show them who you are!</p>
    </div>
    <img id="img2" class="row justify-content-center col align-self-center" src="Images/undraw_esports.svg" alt="">
</section>
<section class="container-fluid d-flex vh-50 bg-light">
    <img id="img3" class="" src="Images/undraw_streamer.svg" alt="">
    <div class="my-auto">
        <h1 class="col-sm-10 mx-5 ">Streamer friendly<br></h1>
        <p id="info1" class="col-sm-9 mx-5">Streamers are a very important factor for the gaming industry. That's why we intend to develop our platform as streamer friendly as possible. The main feature for this will be the "streamer lounges" where streamers can invite their viewers into a party and the viewers can get the permission from the streamer to talk if they want.</p>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Roboto:ital,wght@1,900&display=swap');



    #title{
        font-family: 'Roboto', sans-serif;
        font-family: 'Roboto Mono', monospace;
        color: white;
        font-size: 5em;
    }

    #gaming-img{
        width: 60%;
        height: 60%;
    }

    #img{
        width: 70%;
    }

    #img2{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 65%;
    }

    #img3{
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .main-title{
        margin-bottom: 0;
    }

    .slogan{
        font-size: 0.2em;
        margin-left: 23px;
    }

    #info1, #info2{
        font-size: 1.2em;
        font-weight: 300;
    }

    #insta{
        width: 5%;
        color: aliceblue;
    }

    #main-section{
        background: hsla(258, 100%, 35%, 1);

        background: linear-gradient(90deg, hsla(258, 100%, 35%, 1) 0%, hsla(295, 94%, 76%, 1) 100%);

        background: -moz-linear-gradient(90deg, hsla(258, 100%, 35%, 1) 0%, hsla(295, 94%, 76%, 1) 100%);

        background: -webkit-linear-gradient(90deg, hsla(258, 100%, 35%, 1) 0%, hsla(295, 94%, 76%, 1) 100%);

    }
</style>