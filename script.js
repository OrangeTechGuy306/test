
// KEYWORD & VARIABLE
// const let var

var user = "orange"  //MUTABLE
 user =  "Baba"

 let username = "Techie"
  username = "Guy"

const unChange = "Immutable"
//  unChange = "redeclared"

// console.log(unChange)

const PORT = 5000
const Portable = "Capitalize"
const user_name = "orange"
const userName = "Camel"
const UserName = "Pascal"
// const username = ""


const num1 = 5

// DATA TYPES

// string
const isString = "orange"
// const email = "orange@gmail.com"

const imgFile = "WhatsApp_Image_2025-01-01_at_13.59.27_95f40630-removebg-preview.sql"


// BOOLEAN: TRUE OR FALSE

// NUMBER: INTEGER FLOAT
// ARITHMETIC OPERATORS

const num = 10
const num2 = 30




// console.log(Intl.NumberFormat(undefined, {
//   currency: "USD",
//   style: "percent"
// }).format(num2 ** num))


// MATH FUNCTIONS


// COMPARISON OPERATORS:
// console.log(10 === "10") // == === != !==


const users = [10, 50, "Orange", "Dada", "Lizzy", false, true, {name: "Dudu"}]
users[8] = "new added"

users.unshift("Mango", "Guava")
users.push("Pineapple", "Apple")

// users.shift()
// users.pop()

// users.reverse()
// users.splice(1, 3)


// LOOPS: FOR LOOP, WHILE LOOP, FOREACH,  MAP, FOR IN


// for(let i = 1; i < users.length ; i++){
//   if(i === 5){
//     continue
//   }
//   console.log(users[i])
// }

// for(let i in users){
//   if(i === 5){
//     break
//   }else{
//     console.log(users[i])
//   }
// }


// OBJECT: 

// const userInfo = {
//   fullname: "Hanafi Taofiq",
//   gender: "Male",
//   age: "16"
// }

// const updatedInfo = {...userInfo, email: "o@gmail.com"}
// const {age, fullname, gender, email} = updatedInfo


// JSON: 


const students = [
  {
    passport: "/assets/o.png",
    fullname: "Hanafi Taofiq",
    gender: "Male",
    subjects: ["Math", "Chemistry", "Physics"],
    level: 400
  },
  {
    passport: "/assets/a.png",
    fullname: "Abdullahi Abdullateef",
    gender: "Male",
    subjects: ["Math", "Chemistry", "Geography", "Physics"],
    level: 200
  },
  {
    passport: "/assets/a.png",
    fullname: "Akeem Baba",
    gender: "Male",
    subjects: ["English", "Government", "Literature", "Economics"],
    level: 100
  },
]

// TEMPLATE LITERAL || STRING INTERPOLATION
// students.map(function(student, index){
//   console.log(`Name: ${student.fullname} Subject: ${student.subjects}`)
//   console.log("Name: " + student.fullname + " Subject: " + student.subjects)
// })



// FUNCTIONS: NAMING || ARROW FUNCTION

// ARGUMENT & PARAMETERS || VARIABLE SCOPE
let fruit = "Banana"
function printName(fullname, age, gender){
  console.log(`Hello ${fullname} your age is: ${age} and your gender is: ${gender}`)
} // function declaration
// console.log(fruit)


// printName("Orange", 15, "male")
// printName("Hanafi", 40, "male")
// printName("Ganiyah", 24, "Female")


// CONDITIONAL STATEMENT || CONTROL FLOWS:
// let open = "orange"
// if(open.trim() === ""){
//   console.log("It is closed!")
// }else{
//   console.log("It is opened!")
// }

const firstName = "@orange"

// if(firstName.length === 0){
//   console.log("Empty Username")
// }else if(firstName.length < 3){
//   console.log("Invalid username")
// }else if(firstName.split("").includes("@")){
//   console.log("Name with special character not allowed")
// }else{
//   console.log(`${firstName} is a good name`)
// }


// const sub = "PREMIUM"
// switch(sub){

//   case "PREMIUM":
//     console.log("hello")
//     break;

//   case firstName.length < 3:
//     console.log("This is better")
//     break;
  
//     case firstName.split("").includes("@"):
//       console.log("Name with special character not allowed")
//       break;

//   default:
//     console.log("It works")

// }

// EVENT || DOM

// click | mouseover | keyup | keydown | mouseleave | submit | dblclick | mounseenter

// document
// console.log(document)


// document.getElementById("title")


// GETTER SELECTORS
// GET ELEMENT BY ID, CLASS NAME, TAG NAME, QUERY SELECTOR, QUERY SELECTOR ALL

// const header = document.getElementById("title")
// header.innerHTML = "<span style='color:red;'>Orange</span>"
// header.textContent = "orange coding"


// domContentLoaded

// SETTERS
// INNERHTML TEXTCONTENT INNERTEXT

// TELEGRAM BOT API TOKEN
// TOKEN: 7670169507:AAHVuE2QQMOAtSzuf94Ts0y7PItIRJva4pM
// CHAT_ID: 7670169507
// GET URL: https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getMe
// MESSAGE URL: https://api.telegram.org/bot<YOUR_BOT_TOKEN>/SendMessage?chat_id= chat_id&text=text_string
async function showText(){

  const value = document.getElementById("inputValue").value
  // const input = document.getElementById("inputValue")
  // const header = document.getElementById("title")
  // header.innerHTML = `<span style='color:red;'>${value}</span>`
const url = `https://api.telegram.org/bot7670169507:AAHVuE2QQMOAtSzuf94Ts0y7PItIRJva4pM/sendMessage?chat_id=5455615410&text=${value}`

const api = new XMLHttpRequest()
api.open("GET", url, true)
api.send()

// 
  // console.log(value)
  // if(value.length <= 0){
  //   input.style.border = "1px solid red"
  //   header.innerHTML = `<span style='color:red;'>Invalid value</span>`
  //   setTimeout(()=>{
  //     input.style.border= "0.5px solid black"
  //     header.innerHTML = ``
  //   },2000)
  // }else if(value.length < 3){
  //   header.innerHTML = `<span style='color:red;'>Unaccepted</span>`
  // }else{
  //   header.innerHTML = `<span style='color:green;'>${value}</span>`
  // }


  // const colors = ['orange', 'blue', "purple", 'green', 'red']
  // const randomNumber = Math.floor(Math.random() * colors.length)
  // document.body.style.backgroundColor = colors[randomNumber]

}



const images = [
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/3.webp",
  "/assets/4.png",
  "/assets/5.png",
]

let count = 0


const img = document.querySelector(".imageContainer img")
img.setAttribute("src", images[count])

function showNext(){
  if(count < images.length - 1){
    count++
    img.setAttribute("src", images[count])
  }
}


const headingtag = document.createElement("h1")

headingtag.textContent = "orange"
document.body.appendChild(headingtag)

const imgContainer = document.createElement("div")
const imgTag = document.createElement("img")
const titleTag = document.createElement("h4")
imgContainer.style.width = "300px"
imgContainer.style.height = "300px"
imgContainer.style.borderRadius = "10px"
imgContainer.style.backgroundColor = "silver"

titleTag.innerHTML = "Nike Shoe"

imgTag.setAttribute("width", "200px")
imgTag.setAttribute("src", "/assets/1.png")

imgContainer.append(imgTag, titleTag)
 document.body.appendChild(imgContainer)


//  const products = [
//   {
//     id: 1,
//     image: "/assets/1.png",
//     name: "Nike Shoe",
//     price: 350,
//     quantity: 5,
//     color: "red"
//   },
//   {
//     id: 2,
//     image: "/assets/2.png",
//     name: "Addidas Shoe",
//     price: 250,
//     quantity: 3,
//     color: "black"
//   },
//   {
//     id: 3,
//     image: "/assets/3.png",
//     name: "Puma Shoe",
//     price: 400,
//     quantity: 10,
//     color: "orange"
//   },
//   {
//     id: 4,
//     image: "/assets/4.png",
//     name: "*Vasaci Shoe",
//     price: 300,
//     quantity: 2,
//     color: "purple"
//   },
//  ]

 function displayProduct(name, price, quantity, color, image){

    const productContainer = document.createElement("div")
    const titleTag = document.createElement('h3')
    const priceTag = document.createElement("h1")
    const qTag = document.createElement("h4")
    const cTag = document.createElement("div")
    const imgTag = document.createElement("img")

    imgTag.setAttribute("src", image)
    imgTag.setAttribute("width", "200px")

    titleTag.textContent = name
    priceTag.textContent = `$${price}`
    qTag.textContent = `Quantity: ${quantity}`
    cTag.setAttribute("style", `background-color: ${color}; width: 20px; height: 20px; border-radius: 50%;`)


    productContainer.append(imgTag, titleTag, priceTag, qTag, cTag)

    document.body.appendChild(productContainer)

 }

//  products.map((p)=>{
//   displayProduct(p.name, p.price, p.quantity, p.color, p.image)
//  })

//  STORAGE
// LOCAL STARAGE
// SESSION STORAGE
// COOKIES

// SET ITEM | GET ITEM | REMOVE ITEM | CLEAR
// const storedData  = localStorage.setItem("product", JSON.stringify(products))
// localStorage.removeItem("product")
// const getStoreData = JSON.parse(localStorage.getItem("product"))
// if(getStoreData){
//   getStoreData.map((p)=>{
//     displayProduct(p.name, p.price, p.quantity, p.color, p.image)
//    })
// }else{
//   console.log("No data found")
// }

// PROMISE: 
// ASYNC & AWAIT 

// FETCH API

fetch("https://dummyjson.com/products").then(function(p){
  return p.json()
}).then(function(data){
  // console.log(data.products)
  data.products.map((p)=>{
    displayProduct(p.title, p.price, p.quantity, p.review, p.images[0])
    // console.log(p.title)
   })
})

// console.log(products.json())
