<!DOCTYPE html5>
<html lang="nl">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="K.H. De Vijverzonen is een harmonie in Dikkebus.  Wij organiseren concerten en maken uitstappen als stapharmonie.">
    <meta name="author" content="Ronny Dewaele">
    <link rel="icon" href="assets/img-sm/favicon.ico">
    <title>Koninklijke Harmonie De Vijverzonen</title>
    <script src="jquery/jquery-3.5.1.min.js"></script>
    <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    <style>
        #jumbotronbackground {
            background: url("assets/img-lg/tectonic2.webp") no-repeat center;
            background-size: cover;
        }
    </style>
    <script>
        $(document).ready(function () {
            $(".navbar a").on('click', function (event) {
                if (this.hash !== "" && this.hash !== "#carouselSponsors") {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 150
                    }, 800, function () {
                        window.location.hash = hash;
                    });
                }
            });
        });
    </script>
</head>

<body>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark pt-2 sticky-top">
        <a class="navbar-brand" href="#">
            <div class="row">
                <div>
                    <img src="assets/img-sm/vijverzonen.png" style="height:5rem;">
                </div>
                <div class="ml-4 my-auto">
                    <h5 class="text-center">K.H. De Vijverzonen</h5>
                </div>
            </div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarRB"
            aria-controls="navbarRB" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarRB">
            <ul class="navbar-nav m-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#contactus">
                        <h6 class="text-white">Contact</h6>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#activiteiten">
                        <h6 class="text-white">Activiteiten</h6>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#sponsors">
                        <h6 class="text-white">Sponsors</h6>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="historiek.html">
                        <h6 class="text-white">Geschiedenis</h6>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container-fluid bg-secondary" id="hidethis">
        <div class="row py-5">
            <div class="col-10 text-center mx-auto"><a href="#" data-toggle="modal" data-target="#contact">
                    <!-- <img class="zoom" id="hidethis" src="assets/img-lg/ZL21_970x250_NL.jpg" alt="Samen de tijd vergeten 2021."> -->
                    <img class="zoom" id="hidethis" src="assets/img-lg/under-construction.jpg"
                        alt="Samen de tijd vergeten 2021.">
                </a>
            </div>
        </div>
    </div>
    <div class="container-fluid h-100" id="jumbotronbackground">
        <div class="row h-100">
            <div class="col-12 col-sm-11 col-md-8 col-lg-6 m-auto">
                <div class="jumbotron jumbotron-logobackground transpbg">
                    <p class="lead">Koninklijke Harmonie De Vijverzonen is reeds meer dan 95 jaar actief als muzikale
                        vereniging vanuit Dikkebus.<br>
                        We verwelkomen steeds nieuwe leden jong en oud.
                    </p>
                    <hr class="my-4">
                    <div class="d-flex justify-content-center py-4">
                        <a class="btn btn-primary btn-lg" href="#" data-toggle="modal" data-target="#contact"
                            type="button">Contacteer ons</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="contact" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered model-large" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">Contacteer ons</h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="d-flex flex-column">
                        <a href="mailto:info@vijverzonen.be" class="text-info d-flex mb-4"><svg width="2em" height="2em"
                                viewbox="0 0 16 16" class="bi bi-envelope-open" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                            </svg><span class="ml-3 align-self-center">
                                <strong>Nathalie Vanhoutte</strong><br>
                                Reningelststraat 57<br>
                                8956 Kemmel<br>
                                info@vijverzonen.be</span></a>
                        <!-- <a href="tel:+3256358912" class="text-info d-flex mb-4">
                            <svg width="2em" height="2em" viewbox="0 0 16 16" class="bi bi-telephone"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.471 16.471 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                            </svg><span class="ml-3 align-self-center">056 35 89 12</span>
                        </a> -->
                        <a href="https://maps.google.com/maps?q=O.C.+Dikkebus" target="_blank"
                            class="text-info d-flex mb-2">
                            <svg width="2em" height="2em" viewbox="0 0 16 16" class="bi bi-shop" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M0 15.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM3.12 1.175A.5.5 0 0 1 3.5 1h9a.5.5 0 0 1 .38.175l2.759 3.219A1.5 1.5 0 0 1 16 5.37v.13h-1v-.13a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.13H0v-.13a1.5 1.5 0 0 1 .361-.976l2.76-3.22z" />
                                <path
                                    d="M2.375 6.875c.76 0 1.375-.616 1.375-1.375h1a1.375 1.375 0 0 0 2.75 0h1a1.375 1.375 0 0 0 2.75 0h1a1.375 1.375 0 1 0 2.75 0h1a2.375 2.375 0 0 1-4.25 1.458 2.371 2.371 0 0 1-1.875.917A2.37 2.37 0 0 1 8 6.958a2.37 2.37 0 0 1-1.875.917 2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.5h1c0 .76.616 1.375 1.375 1.375z" />
                                <path
                                    d="M4.75 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm3.75 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm3.75 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                <path fill-rule="evenodd"
                                    d="M2 7.846V7H1v.437c.291.207.632.35 1 .409zm-1 .737c.311.14.647.232 1 .271V15H1V8.583zm13 .271a3.354 3.354 0 0 0 1-.27V15h-1V8.854zm1-1.417c-.291.207-.632.35-1 .409V7h1v.437zM3 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V15H7v-5H4v5H3V9.5zm6 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4zm1 .5v3h2v-3h-2z" />
                            </svg><span class="ml-3 align-self-center"><strong>O.C. Dikkebus</strong><br>Dikkebusseweg
                                480<br>8900 Dikkebus</span>
                        </a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Sluit</button>
                </div>

            </div>
        </div>
    </div>
    <div class="container-fluid bg-secondary">
        <span id="activiteiten"></span>
        <div class="row py-5">
            <div class="col-12 col-sm-11 col-md-11 col-lg-10 col-xl-9 m-auto py-5">
                <div class="row">
                    <div class="col-12 col-lg-6 col-xl-5 m-auto">
                        <!-- <img src="assets/img-lg/lore tuinfeest.jpg" -->
                        <img src="assets/img-lg/solistenconcert.jpg" class="img-thumbnail d-flex my-2 mx-auto">
                    </div>
                    <div class="col-11 col-lg-6 col-xl-7 text-white m-auto">
                        <p class="lead d-flex m-auto font-weight-bold">
                            Gratis solistenconcert in het OC
                        </p>
                        <p class="lead d-flex m-auto">
                            Het laatste weekend van Augustus bieden we fans, sponsors, familie en vrienden een gratis
                            dubbelconcert aan. Dit gaat door in openlucht op de koer van het OC Dikkebus (beperkte
                            versie indoor bij regenweer).
                            <br>Beide concerten bieden een wisselwerking tussen de harmonie en telkens 8 top muzikanten
                            die een solo brengen. Ook onze trommelaars en de instapharmonie laten van zich horen.
                            <br>Iedereen is welkom, wegens de nog geldende maatregelen kunnen we maar 200 toeschouwers
                            toelaten per concert ! Na het concert is er gelegenheid om na te genieten met een hapje en
                            een drankje, en dit in samenwerking met de KSA.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="row py-5">
            <div class="col-10 text-center mx-auto"><a href="#" data-toggle="modal" data-target="#contact"><img
                        class="zoom" src="assets/img-lg/ZL21_970x250_NL.jpg" alt="Samen de tijd vergeten 2021."></a>
            </div>
        </div> -->
    </div>
    <div class="container-fluid bg-light py-5">
        <span id="sponsors"></span>
        <h4 class="text-center pt-5">Onze sponsors.</h4>
        <div id="carouselSponsors" class="carousel slide pb-5" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselSponsors" data-slide-to="0" class="active"></li>
                <li data-target="#carouselSponsors" data-slide-to="1"></li>
                <li data-target="#carouselSponsors" data-slide-to="2"></li>
                <li data-target="#carouselSponsors" data-slide-to="3"></li>
                <li data-target="#carouselSponsors" data-slide-to="4"></li>
                <li data-target="#carouselSponsors" data-slide-to="5"></li>
                <li data-target="#carouselSponsors" data-slide-to="6"></li>
                <li data-target="#carouselSponsors" data-slide-to="7"></li>
                <li data-target="#carouselSponsors" data-slide-to="8"></li>
                <li data-target="#carouselSponsors" data-slide-to="9"></li>
                <li data-target="#carouselSponsors" data-slide-to="10"></li>
                <li data-target="#carouselSponsors" data-slide-to="11"></li>
                <li data-target="#carouselSponsors" data-slide-to="12"></li>
                <li data-target="#carouselSponsors" data-slide-to="13"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/AAG-Projects.jpg" alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Anja-Vuylsteker.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Anneleen-De-Roo.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Ann-Moyaert.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                    <!-- <div class="carousel-caption d-none d-md-block">
                        <h5>AAG Projects</h5>
                        <p>Henry Ford Museum</p>
                    </div> -->
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Auto-Vandi.jpg" alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Bart-Caulier.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Beugnies-isabel.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Brigitte-Haghedooren.jpg"
                                alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Candaele-Koen.jpg" alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Catherine-Lucas.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Copy-Deleye.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/CRELAN-Lahoussekopie.jpg"
                                alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/DC-Colors.jpg" alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/De-Fijnbek.jpg" alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Dekorte-Sap.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/De-Krikke.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/De-Roo-Isabel.jpg" alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/De-Roo-Stefaan.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Dieter-Joseph.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Dirk-Heffinck.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Duhameeuw-foto.jpg"
                                alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Estate-Support.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Fietsen-Decoster.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Foto-De-Witte.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Keurslager.jpg" alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/kostumation.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/kqpsqlon-Carine.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Liantis.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Liesbeth-Haghedooren.jpg"
                                alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Lieven-Sonja.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Lindsays-hondensalon.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Luc-deknudt.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Maison-Julie.jpg" alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Martin-Brood-en-banket.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Mofys-verhuur.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Movetherm.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Naaiboetiek.jpg" alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Nathalie-vanhoutte.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/NC-SERVICE.jpg" alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Orbie-natuursteen.jpg"
                                alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Saartjes-salon.jpg"
                                alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Slagerij-Room.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Slagerij-Soenen.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Sporttrack.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Steve-Penet.jpg" alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/T-Carootjekopie.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/t-Kobbetje.jpg" alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/t-Kroketje.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Tommelin-dranken.jpg"
                                alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Tuinen-Dieflor.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Uitvaartzorg-LEO.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Vandamme-Guido.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Vandenberghe-Bartkopie.jpg"
                                alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Victorex.jpg" alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Voeders-De-Roo.jpg"
                                alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/VPE.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container-fluid w-75">
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Walbrou.jpg" alt="AAG-Projects">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Willaert-Volvo.jpg"
                                alt="Anja-Vuylsteker">
                        </div>
                        <div class="row">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Yellow.jpg" alt="Anneleen-De-Roo">
                            <img class="d-block w-50" src="assets/img-lg/carousel/Zitknipkopie.jpg" alt="Ann-Moyaert">
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselSponsors" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Vorige</span>
            </a>
            <a class="carousel-control-next" href="#carouselSponsors" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Volgende</span>
            </a>
        </div>
        <!-- <span id="activiteiten"></span> -->
    </div>
    <!-- <div class="container-fluid bg-secondary py-5">
        <div class="row">
            <div class="col-12 col-lg-6 mx-auto">

            </div>
        </div>
    </div>
    <div class="container-fluid bg-light py-5 d-flex flex-wrap justify-content-center">
        <div class="card border-info m-3" style="max-width: 20rem;">
            <div class="card-header lead">Avitour</div>
            <div class="card-body">
                <div class="card-text mb-3">Lid van Avitour, een samenwerkingsverband van onafhankelijke,
                    zelfstandige
                    reiskantoren.</div>
                <div class="d-flex justify-content-center">
                    <img class="d-block m-auto" src="assets/img-lg/avitour_logoavi.jpg" style="max-width:10rem;">
                </div>
            </div>
        </div>
        <div class="card border-info m-3" style="max-width: 20rem;">
            <div class="card-header lead">U bent beschermd</div>
            <div class="card-body">
                <div class="card-text mb-3">Lid van de <a href="https://www.vvr.be/" target="_blank">Vereniging
                        Vlaamse
                        Reisbureaus</a>. Erkenningsnummer 1023.</div>
                <img class="d-block m-auto" src="assets/img-lg/sticker_VSR_2020_01b-150x150.png"
                    style="max-width:10rem;">
            </div>
        </div>
        <div class=" card border-info m-3">
            <img src="assets/img-lg/RollUp01.png" style="max-height: 20rem;">
        </div>
    </div> -->
    <div class="container-fluid bg-secondary py-5" id="contactus">
        <div class="row justify-content-center my-4">
            <div class="col-7 col-lg-3 col-xl-2 bg-primary mx-lg-3 my-3 rounded hoverhighlight">
                <a class="text-white stretched-link" href="https://app.tamtam.to/vijverzonen" target="_blank">
                    <h4 class="text-center my-4">Bestuur</h4>
                    <p class="text-center">Nathalie Vanhoutte</p>
                    <p class="text-center">Reningelststraat 57</p>
                    <p class="text-center">8956 Kemmel</p>
                </a>
            </div>
            <!-- <div class="col-7 col-lg-3 col-xl-2 bg-primary mx-lg-3 my-3 rounded hoverhighlight">
                <a class="text-white stretched-link" href="tel:+3256358912" target="_blank">
                    <h4 class="text-center my-4">Telefoon</h4>
                    <p class="text-center">056 35 89 12</p>
                </a>
            </div> -->
            <div class="col-7 col-lg-3 col-xl-2 bg-primary mx-lg-3 my-3 rounded hoverhighlight">
                <a class="text-white stretched-link" href="mailto:info@vijverzonen.be" target="_blank">
                    <h4 class="text-center my-4">E-mail</h4>
                    <p class="text-center">info@vijverzonen.be</p>
                </a>
            </div>

        </div>
    </div>
    <div class="container-fluid bg-light py-5">
        <div class="d-flex justify-content-center"><span>Alle website inhoud is gecre&euml;erd door en eigendom van K.H.
                De Vijverzonen. Copyright &copy; 1925 - <span id="year"></span>.</span>
        </div>
        <div class="d-flex justify-content-center"> Deze site gebruikt geen cookies, wij respecteren uw privacy.
        </div>
        <div class=" d-flex justify-content-center">
            <button type="button" class="btn btn-primary btn-sm " data-toggle="modal" data-target="#bannerprivacy">
                Privacy verklaring
            </button>
        </div>
        <div class="modal fade" id="bannerprivacy" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title">Privacy Verklaring</h2>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h3>Algemeen Beleid inzake Gegevensverwerking</h3>
                        <p>K.H. De Vijverzonen neemt uw rechten bij gegevensverwerking ernstig. In deze verklaring legt
                            K.H. De Vijverzonen uit
                            hoe het uw persoonsgegevens verzamelt, verwerkt en gebruikt. Ze vormt aldus het algemene
                            beleid van K.H. De Vijverzonen op het vlak van gegevensverwerking.</p>
                        <p>K.H. De Vijverzonen verzamelt en verwerkt gegevens over u wanneer u actief lid of sponsor
                            wordt. Bent u leverancier, dan worden uw
                            gegevens of deze van uw
                            contactpersonen verwerkt in het kader van deze activiteiten. Verder worden uw gegevens, als
                            klant of als
                            leverancier, verwerkt bij het opmaken van facturen en andere boekhoudkundige documenten. In
                            sommige gevallen
                            verwerken wij uw gegevens met de bedoeling u onze diensten voor te stellen (direct
                            marketing). Tot slot kan het
                            zijn dat wij gegevens over u verwerken omdat dat van belang is of kan zijn voor onze
                            activiteiten, bijvoorbeeld
                            om op uw advies of diensten beroep te kunnen doen.</p>

                        <h3>Welke gegevens verzamelt en verwerkt K.H. De Vijverzonen ?</h3>
                        <p>Het gaat over de gegevens die u ons meedeelt en die wij nodig hebben voor de correcte
                            uitvoering van uw vakantie
                            of andere diensten waarvoor u op ons beroep doet, zoals uw naam, adres, e-mailadres,
                            telefoonnummer, enz… en
                            professionele gegevens, zoals bedrijfsnaam en BTW-nummer, en alle andere gegevens in dat
                            verband. De gegevens
                            kunnen ook betrekking hebben op uw interesses in, of plannen voor toekomstige reizen of
                            gerelateerde diensten.
                            Financiële gegevens moeten worden verwerkt in het kader van de boekhouding. Gegevens over uw
                            functie en
                            activiteiten worden verwerkt in het kader van communicatie of public relations.</p>

                        <h3>Voor welke doeleinden verzamelt en verwerkt K.H. De Vijverzonen gegevens?</h3>
                        <p>Deze gegevens verwerken wij voor ons ledenbeheer (het correct informeren in het kader van
                            activiteiten),
                            direct marketing
                            (om u te informeren over de diensten die wij aanbieden , leveranciersbeheer, boekhouding en
                            communicatie/public
                            relations).</p>

                        <h3>Wat zijn de grondslagen voor de verwerking van gegevens door K.H. De Vijverzonen ?</h3>
                        <p>In beginsel verzamelen en verwerken wij uw gegevens op basis van de contractuele relatie die
                            wij met u hebben als
                            gevolg van uw opdracht en het contract dat wij met u sluiten. Dat is ook de grondslag voor
                            de verwerking van
                            gegevens over leveranciers. Waar de verwerking niet noodzakelijk is om de contractuele
                            relatie uit te voeren,
                            zoals bij direct marketing en communicatie, is ze gebaseerd op onze gerechtvaardigde
                            belangen als onderneming,
                            in het bijzonder de vrijheid van onderneming en informatie. Daarbij zorgen wij er steeds
                            voor dat er tussen onze
                            en uw belangen een evenwicht bestaat, bijvoorbeeld door u een recht van verzet toe te
                            kennen.</p>

                        <h3>Worden de gegevens meegedeeld aan derden?</h3>
                        <p>Uw gegevens worden hoofdzakelijk intern verwerkt in het kader van ledenbeheer en
                            boekhouding. Ze kunnen worden
                            doorgegeven aan onderaannemers waar wij beroep op doen. Dit is concreet het geval voor de
                            verzekering die we voor de leden afsluiten. Soms zijn wij
                            verplicht om
                            gegevens over u door te geven. Dat is met name het geval wanneer wij hiertoe wettelijk
                            worden verplicht of
                            overheidsinstanties het recht hebben bij ons gegevens op te vragen. Uw gegevens worden in
                            beginsel niet
                            doorgegeven naar derde landen of internationale organisaties.</p>

                        <h3>Uw rechten</h3>
                        <p>Als wij uw gegevens verwerken met het oog op direct marketing, kan u zich hiertegen te allen
                            tijde verzetten.
                            Daartoe volstaat het contact op te nemen met K.H. De Vijverzonen. U kan de gegevens die wij
                            over u verwerken,
                            steeds inkijken en, indien nodig, laten verbeteren of wissen. Daartoe volstaat het dit aan
                            te vragen bij K.H. De Vijverzonen.</p>

                        <h3>Beveiliging</h3>
                        <p>Wij nemen de nodige maatregelen om uw persoonsgegevens passend te beveiligen.</p>

                        <h3>Wijzigingen</h3>
                        <p>K.H. De Vijverzonen behoudt zich het recht voor om deze verklaring en/of dit beleid te
                            wijzigen.
                            Wijzigingen zullen
                            via de website aan gebruikers worden gemeld.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Sluit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        document.getElementById("year").innerHTML = new Date().getFullYear();
    </script>

</body>

</html>