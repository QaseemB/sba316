// import stylesheet from './sba.css'

let body = document.querySelector('body');

body.style.backgroundColor = "rgb(3, 37, 78)";

let app = document.getElementById('app');

let bio = document.querySelector('.bio');

let form = document.querySelector('form');

let divform = document.querySelector('.form');

let guess = document.querySelector('.guess');

let h1 = document.createElement('h1');

let bioheader = document.createElement('h2')

let section1 = document.createElement('section')

let section2 = document.createElement('section')

let section3 = document.createElement('section')

h1.textContent = "PartyNextDoor Tribute";
h1.style.textAlign = "center";
h1.style.color = "rgb(243, 247, 240)";
h1.style.border = "solid 5px #bc6c25";
h1.style.backgroundColor = "#bc6c25";
body.insertBefore(h1, app);

bioheader.textContent = "who is PND and how he changed Rnb"
bioheader.style.textAlign = "center"
bioheader.style.color = "rgb(243, 247, 240)"
bio.insertBefore(bioheader,section1.nextSibling)

// bio.style.border = "solid 8px black";
bio.style.width = "30%"
// bio.style.padding = "20px"
bio.style.paddingLeft = "5%"
app.insertBefore(bio,app.firstChild);

section1.classList.add('earlyLife')
section1.textContent = `Early life: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ipsum elegantius poni meliusque potuit. Quacumque enim ingredimur, in aliqua historia vestigium ponimus. Istic sum, inquit. Si quicquam extra virtutem habeatur in bonis. Qui est in parvis malis. Hoc loco tenere se Triarius non potuit. Sed ille, ut dixi, vitiose. Sed videbimus. Duo Reges: constructio interrete. Hoc non est positum in nostra actione. Et ille ridens: Video, inquit, quid agas; Videsne quam sit magna dissensio? Consequens enim est et post oritur, ut dixi. Sed quot homines, tot sententiae; Sed fac ista esse non inportuna; Quorum sine causa fieri nihil putandum est.g`
section1.style.color = "rgb(243, 247, 240)"
bio.appendChild(section1)

section2.classList.add('career')
var s2Text = "Career: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Num igitur eum postea censes anxio animo aut sollicito fuisse? Qui potest igitur habitare in beata vita summi mali metus? Tum, Quintus et Pomponius cum idem se velle dixissent, Piso exorsus est. Quae cum magnifice primo dici viderentur, considerata minus probabantur. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur?<br>Paupertas si malum est, mendicus beatus esse nemo potest, quamvis sit sapiens. An dolor longissimus quisque miserrimus, voluptatem non optabiliorem diuturnitas facit? Beatus sibi videtur esse moriens. Universa enim illorum ratione cum tota vestra confligendum puto.<br>Ea possunt paria non esse. Duo Reges: constructio interrete. Isto modo ne improbos quidem, si essent boni viri. Duo enim genera quae erant, fecit tria. Tanti autem aderant vesicae et torminum morbi, ut nihil ad eorum magnitudinem posset accedere. Quodsi ipsam honestatem undique pertectam atque absolutam. Quo plebiscito decreta a senatu est consuli quaestio Cn. Tecum optime, deinde etiam cum mediocri amico."
section2.innerHTML = s2Text
section2.style.paddingTop = "20px";
section2.style.color = "rgb(243, 247, 240)";
bio.appendChild(section2)

section3.classList.add('personalLife')
let s3text = 'Personal Life Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim inter se dissentiunt. Hic ambiguo ludimur. Si longus, levis; Nihil illinc huc pervenit. <br>Paria sunt igitur. Inquit, dasne adolescenti veniam? Hoc loco tenere se Triarius non potuit. Immo alio genere;</br>Sed residamus, inquit, si placet. Equidem e Cn. Murenam te accusante defenderem. Bork Bork Graece donan, Latine voluptatem vocant. Sed haec omittamus; Multoque hoc melius nos veriusque quam Stoici.</br>Quamvis enim depravatae non sint, pravae tamen esse possunt. Ut optime, secundum naturam affectum esse possit. Duo Reges: constructio interrete. Hoc loco tenere se Triarius non potuit. Neutrum vero, inquit ille. At multis malis affectus. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba.<br>'
section3.innerHTML = s3text;
section3.style.paddingTop = "20px";
section3.style.color = "rgb(243, 247, 240)";
bio.appendChild(section3)



const pForm = document.createElement('p')
pForm.textContent = "Sign Up For Updates About PND"
// pForm.style.textAlign = "center"
pForm.style.marginLeft = "20%"
pForm.style.color = "rgb(243, 247, 240)"
divform.insertBefore(pForm,form)

const name = form.elements["name"];
const email = form.elements["email"];
const zip = form.elements["zip"];
const country = form.elements["country"];
const password = form.elements["password"];
function validateEmail(evt) {
  let emailVal = email.value;

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert("your email must include @ and not at he beggining ");
    email.focus();
    evt.returnValue = false;
    return false;
  }
  if (dotpos - atpos < 2) {
    alert("invalid ");
    email.focus();
    evt.returnValue = false;
    return false;
  }
  evt.returnValue = true;
  return emailVal;
}
form.addEventListener("submit", validateEmail);
// form.style.border = "solid black 8px"
form.style.minHeight = "95%"

// madder red #a31621


const container1 = document.createElement("div");
container1.classList.add("contianer")
const work = document.createElement("div");
const wildTHoughts = document.createElement("div");
const GhostTown = document.createElement("div");
work.setAttribute("class", "row1");
work.textContent = "work";
work.style.textAlign = "center"
work.style.color = "rgb(243, 247, 240)";
work.style.background = "#368f8b";
work.style.border = "solid 40px #368f8b";

wildTHoughts.setAttribute("class", "row1");
wildTHoughts.textContent = "Wild THoughts";
wildTHoughts.style.textAlign = "center"
wildTHoughts.style.background = "#4a442d";
wildTHoughts.style.color = "rgb(243, 247, 240)";
wildTHoughts.style.border = "solid 40px #4a442d";

GhostTown.setAttribute("class", "row1");
GhostTown.textContent = "Ghost Town"
// GhostTown.style.width = "10%"
GhostTown.style.textAlign = "center"
// GhostTown.style.maxWidth = "30%"
GhostTown.style.background = "#bc6c25";
GhostTown.style.color = "rgb(243, 247, 240)";
GhostTown.style.border = "solid 40px #bc6c25";

container1.appendChild(work);
container1.appendChild(wildTHoughts);
container1.appendChild(GhostTown);
// container1.style.display = "flex";
container1.style.gap = "100px";
const Pickone = document.createElement("h2")
Pickone.textContent = "Guess the biggest song hes Written"
Pickone.style.textAlign ="center"
guess.appendChild(Pickone)
// guess.style.flex
// guess.style.border = "5px black solid"
guess.style.height = "50%"
guess.appendChild(container1)

const correctAnswer = "work";
function handleGuess(event) {
    const clickedElement = event.target;
    const guess = clickedElement.textContent;

    if (guess === correctAnswer) {
        alert("Correct! " + guess + " is the biggest song.");
    } else {
        alert("Incorrect. Try again!");
    }
}
work.addEventListener("click", handleGuess);
wildTHoughts.addEventListener("click", handleGuess);
GhostTown.addEventListener("click", handleGuess);
app.appendChild(guess)
// claret #750d37
// rosy brown ##BF8B85

// let testbutton = document.getElementById('testbutton');


// testbutton.addEventListener('click',function() {
//     document.body.style.backgroundColor = "red";

// }) 
   