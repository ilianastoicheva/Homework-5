
			numbers.num_1  = number_1()
			console.log("Първо число");
			console.log(numbers.num_1);
			
			if(+questionVariables.userBirthYear==1965){
				numbers.num_2 =0;
			} else 	{questionVariables.userSex      = prompt(questions.USER_SEX);
			//console.log(questionVariables.userSex);
			numbers.num_2  = number_2();			
			}
			console.log("Второ число");
			console.log(numbers.num_2);
            
			
		    numbers.num_3  = number_3();			
			console.log("Трето число");
			console.log(numbers.num_3);
			 
			numbers.num_4  = number_4();
			console.log("Четвърто число");
			console.log(numbers.num_4);
			   
			numbers.num_5  = number_5();
			console.log("Пето число");
			console.log(numbers.num_5);
			 
			numbers.num_6  = number_6();
			console.log("Шесто число");
			console.log(numbers.num_6);
			
			numbers.num_7  = number_7();
			console.log("Седмото число");
			console.log(numbers.num_7);
			
			numbers.num_8  = number_8();
			console.log("Осмото число");
			console.log(numbers.num_8);
			
			numbers.num_9  = number_9();
			console.log("Деветото число");
			console.log(numbers.num_9);
			
			console.log("Картата е с номер: " + numbers.num_1 + numbers.num_2 + numbers.num_3
			             + numbers.num_4 + numbers.num_5 + numbers.num_6
						 + numbers.num_7 + numbers.num_8 + numbers.num_9);
			
			numbers.num_1 = code[numbers.num_1];
			numbers.num_2 = code[numbers.num_2];
			numbers.num_3 = code[numbers.num_3];
			numbers.num_4 = code[numbers.num_4];
			numbers.num_5 = code[numbers.num_5];
			numbers.num_6 = code[numbers.num_6];
			numbers.num_7 = code[numbers.num_7];
			numbers.num_8 = code[numbers.num_8];
			numbers.num_9 = code[numbers.num_9];
			
			cardNumber = numbers.num_1 + numbers.num_2 + numbers.num_3
			             + numbers.num_4 + numbers.num_5 + numbers.num_6
						 + numbers.num_7 + numbers.num_8 + numbers.num_9;
			
			console.log("а закодирана е:");
			console.log(cardNumber);
			alert(cardNumber);
			
			
			//alert( fruits[0] ); // Яблоко
			
			
			