//Sumulating a Database  
let userName ="jsmith@sdgu.edu";
let userPassword="Test1234";

// ------- login functionality ----------

        //1. get username and password from the user using a prompt
        //2. Compare the username and password with uname/pass
        //3. Display welcome message
        //4. Display invalid credentials


        //) get the uname and pass from the user using a prompt
        let uname = prompt("Enter your username");
        let pass = prompt("Enter your password");

        //2) compare the uname and upass with the userName and pass
            if(uname === userName && pass === userPassword){
                console.log("Login and password match DB")
                //3) displays success message
                document.write(`Welcome to SDGKU ${userName}`);
                //4) displays invlaid credentials message.
            }else{
                document.write(`You provided invalid creds`);
            }

         