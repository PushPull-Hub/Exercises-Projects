   
   let user="Poco7"
   let password="Powercoders"

   let answer=prompt("Hello , who's it ??") 
    
   if (answer == false || answer == null) {
    
    alert("you cancelled")
   }
   else if (answer!=user) {
       alert("Sorry System Didn't Identify You")

   }
   else if (answer==user)
    answer=prompt("Hi Admin ... Please Insert The Password")
    
   if(answer==false || answer==null) {
    alert("You've Cancelled ") }

   if (answer==password) {
        alert("Welcome")
    }
    else {
        alert("Password is wrong")
    }
    