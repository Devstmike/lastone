// alert("joui")
// let allListings =  document.querySelectorAll("#theapplicantmanager .listing")

// allListings.forEach(list => {
// list.insertAdjacentHTML("afterend", `<button> Apply <button>`);
// console.log("heg")
// })


// setInterval(() => {
    
// }, interval);








// <script src="https://kit.fontawesome.com/26aafe571c.js" crossorigin="anonymous"></script>

// <!-- search -->
// <div class="customMadeWrapper">
//    <div class="jobSearch">
//        <i class="fa-solid fa-magnifying-glass"></i>
//        <input type="text" name="" id="" placeholder="Job title, Keywords..."  class="SearchBox" oninput="function ()    {document.querySelector('.listing').style.backgroundColor = 'red'}">
//     </div>
//     <div class="city">
//         <i class="fa-solid fa-location-dot"></i>
//       	<input type="text" name="" id="" placeholder="City or Post code">
//       </div>
//       <div class="categories">
//          <i class="fa-solid fa-briefcase"></i>
//          <select name="" id="">
//                 <option value="">All Categories</option>
//             </select>
//         </div>
//         <button>Find Jobs</button>
//     </div>


// <strong> </strong><strong><script  src="https://theapplicantmanager.com/jobfeeds/by.js"></script></strong>


// <!-- style search -->

// <style>

//           .customMadeWrapper{
//             display: flex;
//             align-items: center;
//             background-color: white;
//             padding: 20px;
//             border-radius:10px;
//         }

//         .customMadeWrapper  > *{
//             width: 100%;
//             /* border: 1px solid; */
//             padding: 20px;
//             /* border-right: 1px solid gray; */
//         }

//         .customMadeWrapper  > *:not(:nth-child(3)){
//             border-right: 1px solid gray;
//         }

//         .customMadeWrapper > *:last-child{
//             background-color: #3F6F75;
//             padding: 20px;
//             width: 500px;
//             border-radius: 10px;
//             color: white;
//         }

//         .customMadeWrapper input, .customMadeWrapper select{
//             border: none;
//             display: inline-block;
//             width: 80%;
//             background-color: transparent;
//         }

  
//        .customMadeWrapper input:focus, .customMadeWrapper select:focus{
// 			            outline: none;
//   		}	
  
//   .listing{
//     border: 1px solid gray;
//     padding:30px 20px;
//     background-color:white;
//     margin:20px 0;
//      border-radius:10px;
//   }
  
//   .listing a{
//     color:black;
//     font-family:sans-serif;
//     font-size:1rem
//   }
  
//   iframe.wuksD5{
//         scrollbar-width: none;
//   }
  
//   @media only screen and (max-width: 900px) {
//     .customMadeWrapper{
//      flex-direction:column; 
//     }
//   }
// </style
  
  
 
//  <script>
//   	    let a = document.querySelector(".SearchBox");
//  		 a.style.border = "10px solid red"
//     function runSearch{
//    	alert("testimn")
//   }
  
//   	setInterval(() => {
//     	alert("hi")
// 	}, 1000);
//  </script>


let found
let searchBox = document.querySelector(".jobSearch input");
searchBox.oninput = () => {
    let RealsearchBox = document.querySelector(".jobSearch input").value;
    if(RealsearchBox == ""){
        document.querySelectorAll(".listing").forEach((element) => {
            element.classList.remove("hideFilter")
        })
  }
}

// let searchCity = document.querySelector(".city input");
// searchCity.oninput = () => {
//     let RealsearchBox = document.querySelector(".city input").value;
//     if(RealsearchBox == ""){
//         document.querySelectorAll(".listing").forEach((element) => {
//             element.classList.remove("hideFilter")
//         })
//   }
// }




















// WORKING VERSION LAST VERSION
// let searchButton = document.querySelector(".customMadeWrapper button")
// searchButton.onclick = () => {
//     // document.querySelector(".noResult").classList.add("hideFilter")
//     document.querySelectorAll(".listing").forEach((element) => {
//         element.classList.remove("hideFilter")
//     })
//     found = false
//     document.querySelectorAll(".listing").forEach((element, index) => {
//     let searchText = document.querySelector(".jobSearch input").value;
//     let searchCity = document.querySelector(".city select").value;

    
//     console.log(searchCity + "city")
    
//         let myRegex = `/${searchText}/i`
//         // console.log("concatenate  = " + (element.innerText).toUpperCase() + " %% " + searchText.toUpperCase())
//         if(searchText != ""){
//                 if(((element.innerText).toUpperCase()).search(searchCity.toUpperCase()) >= 0 && ((element.innerText).toUpperCase()).search(searchText.toUpperCase()) >= 0){
//                     element.classList.remove("hideFilter")
//                     //  element.classList.add("bgC")
//                     found = false
//                 //  console.log("found  = " + index + ")" +  (element.innerText).toUpperCase() + " %% " + searchText.toUpperCase())
//                 console.log(((element.innerText).toUpperCase()).search(searchCity.toUpperCase())) 
//                 }else {
//                     element.classList.add("hideFilter")
//                     found = true
//                 }
//         }

         
//     })  

// }



let searchButton = document.querySelector(".customMadeWrapper button")
searchButton.onclick = () => {
    // document.querySelector(".noResult").classList.add("hideFilter")
    document.querySelectorAll(".listing").forEach((element) => {
        element.classList.remove("hideFilter")
    })
    found = false
    document.querySelectorAll(".listing").forEach((element, index) => {
    let searchText = document.querySelector(".jobSearch input").value;
    let countries = document.querySelector(".countries select").value
    console.log(countries)
    let searchCity
    if(countries == "united States"){
        searchCity = document.getElementById("Usa").value; 
    }else if(countries == "Mexico"){
        searchCity = document.getElementById("mexico").value; 
    } else if(countries == "Canada"){
        searchCity = document.getElementById("canada").value; 
    }

    
    console.log(searchCity + "city")
    
        let myRegex = `/${searchText}/i`
        // console.log("concatenate  = " + (element.innerText).toUpperCase() + " %% " + searchText.toUpperCase())
        if(searchText != "" && searchCity != "all"){
            // if(searchText != "" && ){
                if(((element.innerText).toUpperCase()).search(searchCity.toUpperCase()) >= 0 && ((element.innerText).toUpperCase()).search(searchText.toUpperCase()) >= 0){
                    element.classList.remove("hideFilter")
                    //  element.classList.add("bgC")
                    found = false
                //   console.log("found  = " + index + ")" +  (element.innerText).toUpperCase() + " %% " ""+ searchCity.toUpperCase())
                console.log(((element.innerText).toUpperCase()).search(searchCity.toUpperCase())) 
                }else {
                    element.classList.add("hideFilter")
                    found = true
                // }
            }

        } else  if(searchText != "" && searchCity == "all"){
            // if(searchText != "" && ){
                if(((element.innerText).toUpperCase()).search(searchText.toUpperCase()) >= 0){
                    element.classList.remove("hideFilter")
                    //  element.classList.add("bgC")
                    found = false
                  console.log("found  = " + index + ")" +  (element.innerText).toUpperCase())
                console.log(((element.innerText).toUpperCase()).search(searchCity.toUpperCase())) 
                }else {
                    element.classList.add("hideFilter")
                    found = true
                // }
            }

        }

         
    })  

}
