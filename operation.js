            
			questionVariables.userBirthYear = prompt(questions.USER_BIRTH_YEAR);
			while (!questionVariables.userBirthYear){
			questionVariables.userBirthYear = prompt(questions.USER_BIRTH_YEAR);
			console.log("не сте въвели годината си на раждане!");
			}
			console.log(questionVariables.userBirthYear);
			
			
			
			user_age  = ((new Date()).getFullYear())- +questionVariables.userBirthYear;

                        // първото  число от номера на картата
			
			function number_1(){
				     
					 let remaindeOfDivision   = null;

				if(+questionVariables.userBirthYear >1965){	
				
		 		     randomNum            = getRandomNumber(1, 7);			
			         number               = Math.ceil(user_age/randomNum);
			         remaindeOfDivision   = number%2;
					 
					if (remaindeOfDivision==1){while(remaindeOfDivision==1){					 
			         randomNum            = getRandomNumber(1, 7);			
			         number               = Math.ceil(user_age/randomNum);
			         remaindeOfDivision   = number%2;					 
					}
					}
					
				}
					
				if(+questionVariables.userBirthYear<1965){	
                     randomNum            = getRandomNumber(1, 7);			
			         number               = Math.ceil(user_age/randomNum);
			         remaindeOfDivision   = number%2;

		 		
					if (remaindeOfDivision==0){while(remaindeOfDivision==0){					 
			         randomNum            = getRandomNumber(1, 7);			
			         number               = Math.ceil(user_age/randomNum);
			         remaindeOfDivision   = number%2;					 
					}
					}					
					
				}
				
				if(+questionVariables.userBirthYear==1965){
					number = 0;						
				}
				
				if((number/10)>=1){
					number               = Math.floor(number/10);					
				}
															
				return number;
			
				
			}

                         // второто  число от номера на картата
			
			function number_2(){
				if(questionVariables.userSex=='F'){
					number  = 3;
				  } else if(questionVariables.userSex=='M'){
					     number  = 1;
				        }   else if(questionVariables.userSex!="F"&&questionVariables.userSex!="M"){
							      let kay = 0;
							       number=3;
							      while(number==3||number==1){							   
							        number = getRandomNumber(1, 9)								    								  
							           }									   
				                  }				
				return number;
				
			}

			// третото  число от номера на картата
			
			function number_3(){

				if(user_age < 18){
				number = 0;
				 // майка				
				questionVariables.motherBirthYear  = prompt(questions.MOTHER_BIRTH_YEAR);								
				while(!questionVariables.motherBirthYear){
					
					alert("Не сте въвели годината на раждане на майка си");
					questionVariables.motherBirthYear  = prompt(questions.MOTHER_BIRTH_YEAR);
				}
				
				let matherLastNum = (+questionVariables.motherBirthYear % 10);
				//let mathetSLastNumber = 
				//console.log(questionVariables.motherBirthYear);
				//console.log(matherLastNum);
				number = Math.floor(+questionVariables.motherBirthYear % 100/10);
				
				// баща
				questionVariables.fatherBirthYear  = prompt(questions.FATHER_BIRTH_YEAR);
				while(!questionVariables.fatherBirthYear){
					
					alert("Не сте въвели годината на раждане на баща си");
					questionVariables.fatherBirthYear  = prompt(questions.FATHER_BIRTH_YEAR);
				}
				
				let fatherLastNum = (+questionVariables.fatherBirthYear % 10);				
	
                // сравняване на последните цифри от рожденните години
				
				if(matherLastNum!=fatherLastNum){
					number = fatherLastNum;
					
				} 
				
			}
			if(user_age >= 18){				
				number = 0;					
			}
				return number;
				
			}
            
			
			// четвъртото  число от номера на картата
		 	
			
			function number_4(){
			
			    questionVariables.userHeight  = prompt(questions.USER_HEIGHT);								
		        while(!questionVariables.userHeight){
					
					alert("Не сте въвели височината си");
					questionVariables.userHeight  = prompt(questions.USER_HEIGHT);
				}
				
				
				
				// килограми
		        questionVariables.userWeight  = prompt(questions.USER_WEIGHT);
			    while(!questionVariables.userWeight){
					
					alert("Не се притеснявайте и моля споделете колко тежите");
					questionVariables.userWeight  = prompt(questions.USER_WEIGHT);
				}
			  
			    bmi = (+questionVariables.userWeight/Math.pow((+questionVariables.userHeight/100),2));
				
			    //console.log(bmi);
				
			    if(bmi<16){
				   number = 1;				   
			    }
		        if(bmi >=16 && bmi <16.99){
				   number = 2;				   
			    }
			    if(bmi >=17 && bmi <18.49){
				   number = 3;				   
			    }
			    if(bmi >=18.5 && bmi <24.99){
				   number = 4;				   
			    }
			    if(bmi >=25 && bmi <29.99){
				   number = 5;				   
			    }
			    if(bmi >=30 && bmi <34.99){
				   number = 6;				   
			    }
			    if(bmi >=35 && bmi <39.99){
				   number = 7;				   
			    }
			    if(bmi >=40){
				   number = 8;				   
			    }
			  
				return number;
			}
			
			// петото  число от номера на картата
		 	
			
			function number_5(){
				 questionVariables.favoriteProduct  = prompt(questions.FAVORITE_PRODUCT);								
		        while(!questionVariables.favoriteProduct){
					
					alert("Не сте въвели вашите килограми");
					questionVariables.favoriteProduct  = prompt(questions.FAVORITE_PRODUCT);
				}
				
				
				
				// килограми
		        questionVariables.purchaseFrequency  = prompt(questions.PURCHASE_FREQUENCY);
			    while(!questionVariables.purchaseFrequency){
					
					alert("Не сте въвели годината на раждане на баща си");
					questionVariables.purchaseFrequency  = prompt(questions.PURCHASE_FREQUENCY);
				}
				
				number = +questionVariables.favoriteProduct + +questionVariables.purchaseFrequency;
				return number;
			}
			
			// шестото  число от номера на картата
		 	
			
			function number_6(){
				
				number = +numbers.num_1 + +numbers.num_2 + +numbers.num_3 + +numbers.num_4 + +numbers.num_5;
				
				if((number/10)>=1){
					let number1       = Math.floor(number/10);	
					let number2       = +number - +number1*10;
					number = +number1 + +number2;
				}
				
				
				return number;
												
			}
			
			// седмото  число от номера на картата
		 	
			
			function number_7(){
			let num1remainder = +numbers.num_1%2;
			let num2remainder = +numbers.num_2%2;
			let num3remainder = +numbers.num_3%2;
			let num4remainder = +numbers.num_4%2;
			let num5remainder = +numbers.num_5%2;
			let num6remainder = +numbers.num_6%2;
													 
			let priority  =  1;
				
			
			if ((numbers.num_1+numbers.num_2+numbers.num_3+numbers.num_4+numbers.num_5+numbers.num_6)>10){
				number   = 7;
				priority = 0;
	 		} else   if ((numbers.num_1+numbers.num_2+numbers.num_3+numbers.num_4+numbers.num_5+numbers.num_6)<10){
				number   = 6;
				priority = 0;
			  }   else   if (numbers.num_1<numbers.num_2<numbers.num_3<numbers.num_4<numbers.num_5<numbers.num_6){
				  number   = 5;
				  priority = 0;
			    }    else   if (numbers.num_1==numbers.num_2==numbers.num_3==numbers.num_4==numbers.num_5==numbers.num_6){
				    number   = 4;
					priority = 0;
			      }    else   if ( (num1remainder==0&&num2remainder==0)||(num3remainder==1&&num4remainder==1&&num5remainder==1)){
				         number   = 3;
						 priority = 0;
			         }     else   if (num1remainder==1||num3remainder==1||num5remainder==1){
				             number   = 2;
							 priority = 0;
			             }   else   if (num1remainder==1&&num3remainder==1&&num5remainder==1){
				               number   = 1;
							   priority = 0;
			               }   else   if (num1remainder==0&&num3remainder==0&&num5remainder==0){
				                  number   = 0;
								  priority = 0;
			                 }
							 
			if(priority  =  1)	{
				number   = 9;
			}			
			return number;
			}
			
			
			// осмото  число от номера на картата
		 	
			
			function number_8(){
				
				if(user_age>=18&&(numbers.num_4==6||numbers.num_4==7||numbers.num_4==8)&&questionVariables.favoriteProduct==5){
				
					randomNum   = getRandomNumber(1, 9);			
                    if((randomNum%2)==1){
						number = randomNum;
					}
					if((randomNum%2)==0){
						while((randomNum%2)==0){
							randomNum   = getRandomNumber(1, 9);
						}						
						number = randomNum;
					}			
			} else if(user_age<18&&numbers.num_4==3&&questionVariables.favoriteProduct!=1){
				
					randomNum   = getRandomNumber(1, 9);			
                    if((randomNum%2)==0){
						number = randomNum;
					}
					if((randomNum%2)==1){
						while((randomNum%2)==1){
							randomNum   = getRandomNumber(1, 9);
						}						
						number = randomNum;
					}			
			        } else {
						number = 0;
					       }
			return number;			   
		    
			}
			
			// деветото  число от номера на картата
		 	
			
			function number_9(){
				
			     numbers.num_A = Math.max(numbers.num_1, numbers.num_3, numbers.num_5, numbers.num_7);
			     //console.log(numbers.num_A);
			     numbers.num_B = Math.max(numbers.num_2, numbers.num_4, numbers.num_6, numbers.num_8);
			    // console.log(numbers.num_B);
			
			     if(numbers.num_A > numbers.num_B){
				     number = numbers.num_A + 1;				
			     }
			     if(numbers.num_A < numbers.num_B){
				     number = numbers.num_A - 1;				
			     }
			     if(numbers.num_A == numbers.num_B){
				     number = 0;				
			     }
				 // променям граничното число на 10, защото, ако А е 9 и е > от Б => деветото число става 9+1=10
			     if(number==10){
				     number = 0;
			     }
			     if(number==0){
			       	number = 1;
			     }
			return number;
			}
