import User from "../models/user.js";
import UserService from "../services/userService.js"

console.log("Component Yüklendi...")

let userService=new UserService();
let user1=new User(1,"seyda","tatlı","ankara");
let user2=new User(2,"ali","veli","ankara");


userService.add(user1);
userService.add(user2);
console.log(userService.list());
console.log(userService.getById(1))