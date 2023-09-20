console.log("Hello world!");

let press = document.querySelectorAll(".press");
let card = document.getElementById("master");

const status = document.querySelector(".status");


press.forEach((pressed) => {
  pressed.addEventListener("click", () => {
    pressed.classList.toggle("active");
  });
});

fetch("./assets/data.json")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    for (const response of res) {
      try {
        card.innerHTML += `
        <div class="col">
            <div id="card">
                <div class="imgDiv">

                    <div class="status">
                        <p>${response.status}</p>
                    </div>
                    <img src=${response.url} alt="apartment">
                    
                    <div class="actions">
                        <i class="uil uil-link press"></i>
                        <i class="uil uil-heart press"></i>
                    </div>
                    

                </div>

                <div class="apartDetails">
                    <div class="heading">
                        <h1>${response.name}</h1>
                        <h2>${response.location}</h2>
                    </div>
                    
                    <div class="price">
                        <p>Property Price</p>
                        <p class="amount">$${response.price}</p>
                    </div>
                </div>

                <div class="iconDiv">
                    
                    <div class="bed">
                        <i class="uil uil-bed-double"></i>
                        <span>${response.bed}</span>
                    </div>

                    <div class="bath">
                        <i class="uil uil-bath"></i>
                        <span>${response.bath}</span>
                    </div>

                    <div class="plan">
                        <i class="uil uil-vector-square"></i>
                        <span>${response.sqrFt}</span>
                    </div>

                    <div class="car">
                        <i class="uil uil-car"></i>
                        <span>0</span>
                    </div>
                </div>

                <div class="finance">
                    <div class="tokenPrice">
                        <h2>Token Price</h2>
                        <P>$${response.tokenPrice}</P>
                    </div>
                    <div class="projIRR">
                        <h2>Projecte IRR</h2>
                        <P>${response.pIRR}%</P>
                    </div>
                    <div class="projApr">
                        <h2>Projecte APR</h2>
                        <P>${response.pAPR}%</P>
                    </div>
                </div>
            </div>
        </div>
        `;


        if (`${response.status}` === "Cancelled"){
            document.documentElement.style.setProperty('--active', "#ff6c66ff");
        } else{
            document.documentElement.style.setProperty('--active', "#0266ffff");
        }


      } catch (err) {
        console.log(err);
      }
    }
  });
