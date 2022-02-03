<script>
    import Link from "svelte-navigator/src/Link.svelte";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#section-main">
            <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
            GameIn
        </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav-item-align" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link fs-5 active" href="#section-about">About</a>
          <a class="nav-link fs-5 active" href="#section-goal">Goal</a>
          <Link class="nav-link fs-5 active" to="/login">Login</Link>
        </div>
      </div>
    </div>
</nav>

<section id="section-main">
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

    <div class="console-shape">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 59 59" style="enable-background:new 0 0 59 59;" xml:space="preserve">
        <g>
            <g>
                <path d="M58.142,30.228c-0.081-0.234-0.214-0.451-0.414-0.622l-8.884-8.179c-0.251-0.201-0.565-0.312-0.888-0.312h-1.072
                    C46.299,16.14,43.497,10.4,42.247,8.042c-0.254-0.479-0.678-0.847-1.194-1.035L36.605,5.39c-0.688-0.251-1.459-0.156-2.066,0.248
                    l-0.591,0.395c-0.07,0.047-0.151,0.071-0.235,0.071h-9.139c-0.084,0-0.166-0.024-0.234-0.07l-0.592-0.395
                    c-0.607-0.406-1.379-0.5-2.066-0.249l-4.447,1.617c-0.517,0.188-0.941,0.556-1.194,1.034c-1.25,2.358-4.053,8.098-4.639,13.074
                    H11.25c-0.321,0-0.637,0.11-0.93,0.349l-9.012,8.113c-0.219,0.175-0.366,0.404-0.451,0.652C0.339,30.636,0,31.26,0,31.967V51.53
                    c0,1.224,0.996,2.219,2.219,2.219h54.562c1.224,0,2.219-0.995,2.219-2.219V31.967C59,31.259,58.66,30.634,58.142,30.228z
                     M2.194,32.104H27v1.645H2v-1.674C2.065,32.083,2.126,32.104,2.194,32.104z M2,35.749h25v12H2V35.749z M29,35.749h28v12H29V35.749
                    z M29,33.749v-1.645h27.807c0.067,0,0.128-0.021,0.193-0.03v1.674L29,33.749L29,33.749z M17.808,8.978
                    c0.022-0.043,0.059-0.072,0.111-0.092l4.447-1.617c0.033-0.012,0.068-0.018,0.104-0.018c0.059,0,0.118,0.017,0.168,0.051
                    l0.595,0.396c0.399,0.266,0.863,0.405,1.342,0.405h9.139c0.479,0,0.944-0.141,1.344-0.406l0.593-0.396
                    c0.08-0.055,0.18-0.066,0.272-0.033l4.446,1.617c0.052,0.019,0.088,0.049,0.111,0.093c2.906,5.481,6.775,15.424,2.763,17.894
                    l-5.289-4.533c-0.221-0.19-0.459-0.359-0.71-0.507c-0.79-0.472-1.697-0.729-2.628-0.729H23.671c-0.048,0-0.094,0.011-0.142,0.013
                    h-0.017c-0.02,0.001-0.039,0.006-0.058,0.007c-0.272,0.012-0.541,0.039-0.805,0.093c-0.013,0.003-0.025,0.008-0.038,0.01
                    c-0.27,0.057-0.535,0.131-0.791,0.23c-0.045,0.017-0.086,0.043-0.131,0.062c-0.22,0.093-0.437,0.189-0.643,0.312
                    c-0.251,0.148-0.49,0.318-0.712,0.508l-5.368,4.553c-0.219-0.138-0.404-0.308-0.576-0.49c-0.041-0.043-0.081-0.086-0.12-0.132
                    c-0.16-0.19-0.304-0.396-0.422-0.625c-0.011-0.022-0.02-0.048-0.031-0.071c-0.107-0.218-0.193-0.453-0.265-0.701
                    c-0.017-0.06-0.035-0.119-0.05-0.181c-0.146-0.578-0.212-1.224-0.204-1.925c0-0.025,0.001-0.052,0.002-0.078
                    C13.378,18.578,15.817,12.733,17.808,8.978z M11.296,23.274c0.002,0.047,0.008,0.09,0.01,0.137
                    c0.009,0.189,0.024,0.374,0.042,0.557c0.009,0.089,0.015,0.181,0.026,0.268c0.032,0.25,0.073,0.495,0.125,0.733
                    c0.016,0.072,0.038,0.139,0.055,0.21c0.042,0.169,0.087,0.336,0.14,0.499c0.029,0.089,0.063,0.175,0.096,0.261
                    c0.051,0.136,0.105,0.27,0.165,0.4c0.039,0.085,0.08,0.168,0.123,0.25c0.065,0.125,0.135,0.245,0.209,0.364
                    c0.047,0.075,0.093,0.15,0.143,0.222c0.082,0.118,0.172,0.23,0.264,0.342c0.052,0.062,0.1,0.127,0.154,0.186
                    c0.106,0.116,0.223,0.225,0.342,0.333c0.05,0.045,0.095,0.094,0.146,0.137c0.174,0.145,0.358,0.282,0.558,0.409
                    c0.753,0.478,1.761,0.4,2.452-0.191l5.288-4.533c0.136-0.116,0.281-0.218,0.433-0.309c0.118-0.07,0.243-0.126,0.369-0.18
                    c0.034-0.015,0.066-0.034,0.1-0.047c0.145-0.056,0.295-0.098,0.446-0.131c0.018-0.004,0.035-0.011,0.053-0.014
                    c0.167-0.034,0.337-0.055,0.507-0.06l11.171-0.001c0.537,0.017,1.056,0.169,1.507,0.435c0.151,0.09,0.296,0.192,0.431,0.308
                    l5.289,4.534c0.159,0.136,0.338,0.238,0.524,0.319c0.024,0.011,0.047,0.024,0.071,0.033c0.178,0.07,0.364,0.111,0.553,0.131
                    c0.035,0.004,0.068,0.007,0.103,0.009c0.038,0.002,0.076,0.01,0.114,0.01c0.106,0,0.21-0.027,0.314-0.043
                    c0.068-0.01,0.136-0.011,0.204-0.028c0.198-0.051,0.39-0.128,0.567-0.24c0.202-0.128,0.388-0.266,0.563-0.413
                    c0.057-0.047,0.107-0.101,0.161-0.151c0.115-0.105,0.228-0.211,0.331-0.324c0.059-0.064,0.112-0.134,0.167-0.201
                    c0.089-0.109,0.175-0.219,0.255-0.335c0.053-0.077,0.102-0.156,0.152-0.236c0.072-0.118,0.14-0.238,0.203-0.361
                    c0.044-0.085,0.087-0.171,0.128-0.26c0.061-0.134,0.114-0.273,0.165-0.413c0.032-0.086,0.066-0.169,0.095-0.258
                    c0.071-0.222,0.132-0.449,0.182-0.683c0.018-0.084,0.03-0.175,0.046-0.261c0.031-0.169,0.059-0.339,0.08-0.514
                    c0.013-0.108,0.023-0.218,0.032-0.329c0.015-0.177,0.026-0.355,0.033-0.537c0.002-0.065,0.01-0.124,0.012-0.189h0.732l7.202,6.633
                    H4.105L11.296,23.274z M2.219,51.749C2.098,51.749,2,51.651,2,51.53v-1.781h25v2H2.219z M56.781,51.749H29v-2h28v1.781
                    C57,51.651,56.902,51.749,56.781,51.749z"/>
                <rect x="5" y="40.749" width="15" height="2"/>
                <rect x="22" y="40.749" width="2" height="2"/>
                <path d="M50,37.749c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S52.206,37.749,50,37.749z M50,43.749c-1.103,0-2-0.897-2-2
                    s0.897-2,2-2s2,0.897,2,2S51.103,43.749,50,43.749z"/>
                <path d="M35.5,19.749c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5S33.57,19.749,35.5,19.749z M35.5,14.749
                    c0.827,0,1.5,0.673,1.5,1.5s-0.673,1.5-1.5,1.5s-1.5-0.673-1.5-1.5C34,15.422,34.673,14.749,35.5,14.749z"/>
                <path d="M20.5,15.749c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5S18.57,15.749,20.5,15.749z M20.5,10.749
                    c0.827,0,1.5,0.673,1.5,1.5s-0.673,1.5-1.5,1.5s-1.5-0.673-1.5-1.5S19.673,10.749,20.5,10.749z"/>
                <polygon points="24,16.749 22,16.749 22,18.749 24,18.749 24,20.749 26,20.749 26,18.749 28,18.749 28,16.749 26,16.749
                    26,14.749 24,14.749 		"/>
                <rect x="32" y="9.749" width="2" height="2"/>
                <rect x="36" y="8.749" width="2" height="2"/>
            </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
    </div>
    <p class="display-6 position-absolute txt-top start-50 translate-middle w-50">
        Welcome to <u>GameIn</u> a platform where <u class="bg-primary bg-gradient bg-opacity-50 rounded p-1">GAMERS</u> can find their <u class="bg-danger bg-gradient bg-opacity-50 rounded p-1">true love</u>.
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
                <h1 class="fs-3 text-center ">Fullstack</h1>
                <div class="sperate-line"></div>
                <p class="fs-5">I am 17 years old and I am attending an informatic school.
                    <br>This is a main project for me.
                    <br>I work mostly on the frontend.
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
    <p class="display-1 text-center" style="padding-top: 4rem">Freedom</p>
    <div class="text-center display-4 card container">
        <p class="mt-3">A PLACE where you have <u class="bg-primary bg-gradient bg-opacity-50 rounded p-1">freedom</u>.</p>
        <div class="sperate-line"></div>
        <p class="mt-3">A PLACE where you can feel <u class="bg-danger bg-gradient bg-opacity-50 rounded p-1">home</u>.</p>
        <div class="sperate-line"></div>
        <p class="mt-3">A PLACE where you can meet the <u class="bg-primary bg-gradient bg-opacity-50 rounded p-1">right people</u>.</p>
        <div class="sperate-line"></div>
        <p class="mt-3">A PLACE where you can join <u class="bg-danger bg-gradient bg-opacity-50 rounded p-1">everyone</u>.</p>
        <div class="sperate-line"></div>
        <p class="mt-3">A PLACE where you can be your <u class="bg-primary bg-gradient bg-opacity-50 rounded p-1">true self</u>.</p>
    </div>
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
    background: linear-gradient(#D4CDF4, #aaa4dc);
}


#section-about{
    height: 100vh;
    background: linear-gradient(#aaa4dc, #88ecc2);

}

#section-goal{
    background: linear-gradient(#88ecc2, #D4CDF4);
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

.nav-item-align{
    display: flex;
    justify-content: end;
}

.controller-shape{
    position: absolute;
    top: 30%;
    left: 20%;
    width : 250px;
    transform: rotate(-40deg);
    opacity: 0.5;
}

.console-shape{
    position: absolute;
    top: 30%;
    right: 25%;
    width : 250px;
    transform: rotate(40deg);
    opacity: 0.2;
}

@media only screen and (max-width: 992px) {
    .nav-item-align{
        display: flex;
        justify-content: start;
    }

    .controller-shape{
        top: 35%;
        left: 20%;
        width : 150px;
    }

    .console-shape{
        top: 35%;
        right: 20%;
        width : 150px;
    }
}

</style>