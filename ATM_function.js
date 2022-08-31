var userName,
	correctPass = (/^[0-9]{4}$/),
	passTry = 3,
	currentBalance = 50000;
	
// Input a userName
function chkuserName() {
	userName = prompt("Enter your name");
	if (userName !== "" && userName !== null) {
		chkPassword();
	} else {
		chkuserName();
	}
}
// Input a valid password
function chkPassword() {
	var userPw = parseInt(prompt("hi " + userName + ", enter your PIN number"));
	checkPassword(userPw);
}
// Verify Password meets requirements
function checkPassword(userInput) {
    if (correctPass.test(userInput)){
        accountType();
    } else {
        while (!(correctPass.test(userInput))) {
            if (passTry === 1) {
				alert("Incorrect PIN.");
            	alert("Your account has been locked. Contact to bank plz."); 
                exit();
                break;
            } else {
				passTry -= 1;
				alert("Incorrect PIN. Please try again.");
				alert("You have " + passTry + " chance/s to try");
            	chkPassword();
			}
        }
    }
}
function again(){
	accountType()
}
// Select Which account type to use
function accountType() {
    var accountType = parseInt(prompt("Which type of account do you have? \n 1. Savings \n 2. Current \n 3. Credit \n 4. Exit"));
	if (accountType !== "" && accountType !== null && !isNaN(accountType)) {
		if(accountType ==1 || accountType ==2 || accountType ==3){
			selectCategory();
		}else{
			if(accountType ==4){
				exit();
			}else{
				alert("Please select a valid selection");
				again()	
			}	
		}
	} else {
		alert("Please make a valid selection");
		again()
	}
}
// Select what the user wishes to do
function selectCategory() {
	var atmCategory = parseInt(prompt("Hello " + userName + ", what can we do for you? \n 1. Inquiry \n 2. Withdrawal \n 3. Deposit \n 4. Exit"));
	if (atmCategory !== "" && atmCategory !== null && !isNaN(atmCategory)) {
		switch (atmCategory) {
			case 1:
				inquiry();
				break;
			case 2:
				withdrawal();
				break;
			case 3:
				deposit();
				break;
			case 4:
				exit();
				break;
			default:
				alert("Please make a valid selection");
				selectCategory();
		}
	} else {
		alert("Please make a valid selection");
		selectCategory();
	}
}
// Inquiry
function inquiry() {
	alert("Your current balance is $" + currentBalance);
	toContinue();
}
// Deposit
function deposit() {
	var depositAmount = parseInt(prompt("How much do you want to deposit?"));
	if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
		currentBalance += depositAmount;
		alert("successfully deposited! $" + depositAmount + "\n" + "now you have $" + currentBalance);
		toContinue();
	} else {
		alert("Error: please enter a number!");
		deposit();
	}
}
// Withdrawal
function withdrawal() {
	var withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $100"));
	if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
		if (withdrawalAmount >= 100) {
			if (withdrawalAmount <= currentBalance) {
				currentBalance -= withdrawalAmount;
				alert("Transaction successful!");
				alert("remaining balance : $" + currentBalance);
				toContinue();
			} else {
				alert("do not have sufficient :(");
				withdrawal();
			}
		} else {
			alert("You must withdraw at least $100");
			withdrawal();
		}
	} else {
		alert("Error: please enter a number!");
		withdrawal();
	}
}	
// Does the user wish to continue using the ATM
function toContinue(){
    var yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
	if (yesOrNo !== "" && yesOrNo !== null) {
    	if (yesOrNo === 2){
			exit();
    	}
		else {
			accountType(); 
    	}
	} else {
		alert("Please make a valid selection");
		toContinue();
	}
}
// Exit the ATM
function exit() {
	alert("Thank you for coming and see you again :)");
		// To simulate a real ATM, get ready for next user
		// chkuserName();
}