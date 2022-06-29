/*const applicationManager = {
    isApplicationRunning    : true,
    isSystemTurnOn          : false,
    isSystemTurnOff         : true,
    activeHandId            : null,

    handAonX                : 1,
    handAonY                : 1,

    handBonX                : 1,
    handBonY                : 1,    

    handConX                : 1,
    handConY                : 1,

    activeHoleCoefficient   : null
}

const applicationData = {
    oxigenQuantity  : 168,
    gasQuantity     : 90
}*/
let user_age            = null;
let answersCounter      = 0;
let randomNum           = null;
let number              = null;
let matherSLastNum      = null;
let number3             = null;
let bmi                 = null;
let cardNumber          = null;


const numbers = {
    num_1  : null,
    num_2  : null,
    num_3  : null,
    num_4  : null,
    num_5  : null,
    num_6  : null,
    num_7  : null,
    num_8  : null,
    num_9  : null,
	num_A  : null,
	num_B  : null,
   
};

let code = ["*", "!", "@", "#", "$", "%", "^", "&", "/", "+"];

const questions = {
    USER_BIRTH_YEAR    : "Въведете годината си на раждане:",
    USER_SEX           : "Въведете вашия пол F/M, а ако не желаете да отговорите натиснете cancel",
    MOTHER_BIRTH_YEAR  : "Въведете годината на раждане на вашата майка:",
    FATHER_BIRTH_YEAR  : "Въведете годината на раждане на вашият баща:",
    USER_HEIGHT        : "Моля въведете вашата височина в сантиментри",
    USER_WEIGHT        : "Не се стеснявайте да споделите колко тежите",
    FAVORITE_PRODUCT   : "Коя стока консумирате най-често? (1)плодове и зеленчуци (2)месо и месни продукти (3)цигари и алкохол (4)млечни продукти (5)захарни изделия",
	PURCHASE_FREQUENCY : "Колко често си купувате тази съока? (1)рядко (2)понякога (3)често",

	
	
};

const questionVariables = {
	userBirthYear      : null,
	userSex            : null,
	motherBirthYear    : null,
	fatherBirthYear    : null,
	userHeight         : null,
	userWeight         : null,
	favoriteProduct    : null,
	purchaseFrequency  : null
	
}