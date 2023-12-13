let pizza=document.getElementById('pizza')
let burger=document.getElementById('burgr')
let mcflurry=document.getElementById('McFlurry')
let pizzamc=document.getElementById('pizzamc')
let frenchfries=document.getElementById('frenchfries')
let coldDrink = document.getElementById('cold drink')
let freshVeggie=document.getElementById('freshveggie')
let id=document.getElementById('orderId')
let output=document.getElementById('outputpic')
let mainoutput=document.querySelector('.output')

let image1=document.getElementById('img1')



let kitchenArr=['https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg','https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-05/burger.jpg','https://www.bing.com/th?id=OIP.BD55ObZ3yukK8QZe85aIdgHaJ4&pid=3.1&cb=&w=300&h=300&p=0','https://th.bing.com/th/id/OIP._g3Y4GUN_bI2gx7szQV15AHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7','https://th.bing.com/th/id/OIP.v2OMqRYHnbHiETnL5IAC7QHaE8?w=278&h=185&c=7&r=0&o=5&dpr=1.6&pid=1.7','https://th.bing.com/th/id/OIP.o1tQPM3YYB1k01nrg2LSsgHaE7?w=252&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7','https://th.bing.com/th/id/OIP.rQAqkr_rULH2lt7dXx-Q4wHaKH?w=186&h=255&c=7&r=0&o=5&dpr=1.6&pid=1.7']

//function imagestyle(img){
   // img.style.width="50vh"
    //img.style.objectFit="cover"
    //img.style.visibiliy="visible"
    
//}



let button= document.querySelector('#Ordbtn')
button.addEventListener("click",()=>{
    
   
    let pizza_c = pizza.checked
    let burger_c = burger.checked
    let mcflurry_c = mcflurry.checked
    let pizzamc_c = pizzamc.checked
    let frenchfries_c = frenchfries.checked
    let coldDrink_c = coldDrink.checked
    let freshveggie_c = freshVeggie.checked
   
    function generateOrderId() {
        return Math.floor(Math.random() * 10000) + 1; // Generating a random order ID
      }
    


    let food1 = new Promise((res,rej)=>{


        setTimeout(()=>{
            res("Order Placed");
            if(pizza_c == true){
                
                image1.src=kitchenArr[0]
                output.style.visibility="visible"
                mainoutput.style.visibility="visible"
             
            }
            if(burger_c == true){
                image1.src=kitchenArr[1]
                mainoutput.style.visibility="visible"
                output.style.visibility="visible"
            }
            if(mcflurry_c == true){
                image1.src=kitchenArr[2]
                mainoutput.style.visibility="visible"
                output.style.visibility="visible"
            }
            if(pizzamc_c == true){
                image1.src=kitchenArr[3]
                mainoutput.style.visibility="visible"
                output.style.visibility="visible"
            }
            if(frenchfries_c == true){
                image1.src=kitchenArr[4]
                mainoutput.style.visibility="visible"
                output.style.visibility="visible"
            }
            if(coldDrink_c == true){
                image1.src=kitchenArr[5]
                mainoutput.style.visibility="visible"
                output.style.visibility="visible"
            }
            if(freshveggie_c == true){
                image1.src=kitchenArr[6]
                output.style.visibility="visible"
                mainoutput.style.visibility="visible"
            }


            let a= generateOrderId()
            id.innerText=`Order Id:${a}`;
            id.style.visibility="visible"

        },1000)
    })

    food1.then((a)=>{
        console.log(a)
    }).catch((error)=>{
        console.log("Order failed",error)
    })
   
})





/*let a= generateOrderId()
id.innerText=`Order Id:${a}`;
id.style.visibility="visible"

function generateOrderId() {
    return Math.floor(Math.random() * 10000) + 1; // Generating a random order ID
  }

*/