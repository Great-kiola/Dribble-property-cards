console.log("Hello world!");

let press = document.querySelectorAll(".press");
let card = document.getElementById("container");

// console.log(data[0].link)

press.forEach((pressed) => {
  pressed.addEventListener("click", () => {
    pressed.classList.toggle("active");
  });
});

// fetch("./assets/data.json")
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
//     for (const element of data){
//         try {
//             card.innerHTML += `
//             <div class="imgDiv">

//                 <div class="status">
//                     <p>Active</p>
//                 </div>
//                 <img src= ${element[0].link} alt="apartment">

//                 <div class="actions">
//                     <i class="uil uil-link press"></i>
//                     <i class="uil uil-heart press"></i>
//                 </div>

//             </div>

//             <div class="apartDetails">
//                 <div class="heading">
//                     <h1>Luxe Apt</h1>
//                     <h2>USA, New York City</h2>
//                 </div>

//                 <div class="price">
//                     <p>Property Price</p>
//                     <p class="amount">$220,000</p>
//                 </div>
//             </div>

//             <div class="iconDiv">

//                 <div class="bed">
//                     <i class="uil uil-bed-double"></i>
//                     <span>1</span>
//                 </div>

//                 <div class="bath">
//                     <i class="uil uil-bath"></i>
//                     <span>1</span>
//                 </div>

//                 <div class="plan">
//                     <i class="uil uil-vector-square"></i>
//                     <span>1</span>
//                 </div>

//                 <div class="car">
//                     <i class="uil uil-car"></i>
//                     <span>1</span>
//                 </div>
//             </div>

//             <div class="finance">
//                 <div class="tokenPrice">
//                     <h2>Token Price</h2>
//                     <P>$50</P>
//                 </div>
//                 <div class="projIRR">
//                     <h2>Projecte IRR</h2>
//                     <P>12.3%</P>
//                 </div>
//                 <div class="projApr">
//                     <h2>Projecte APR</h2>
//                     <P>10.5%</P>
//                 </div>
//             </div>`
//         }
//     }
// });

fetch("./assets/data.json")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    for (const response of res) {
      try {
        card.innerHTML += `
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
                    <span>1</span>
                </div>

                <div class="bath">
                    <i class="uil uil-bath"></i>
                    <span>1</span>
                </div>

                <div class="plan">
                    <i class="uil uil-vector-square"></i>
                    <span>1</span>
                </div>

                <div class="car">
                    <i class="uil uil-car"></i>
                    <span>1</span>
                </div>
            </div>

            <div class="finance">
                <div class="tokenPrice">
                    <h2>Token Price</h2>
                    <P>$50</P>
                </div>
                <div class="projIRR">
                    <h2>Projecte IRR</h2>
                    <P>12.3%</P>
                </div>
                <div class="projApr">
                    <h2>Projecte APR</h2>
                    <P>10.5%</P>
                </div>
            </div>
        </div>
        `;
      } catch (err) {
        console.log(err);
      }
    }
  });
