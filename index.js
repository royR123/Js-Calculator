
const calDisplay = document.querySelector('#display'); 

document.querySelector('section').addEventListener('click' , (e) => {
    // console.log(e.target.value);
    // console.log(typeof e.target.value);
    // console.log(e.target.);
    if(e.target.value === 'DEL'){
        calDisplay.value = calDisplay.value.slice(0,-1);

    }else if(e.target.value === 'AC'){
        calDisplay.value = ""

    }else if(e.target.value === '='){
        let tmp = eval(calDisplay.value);
        if(Number.isNaN(tmp)){
            calDisplay.value = '';
        }else{
            calDisplay.value = tmp;
        }

    }else if(e.target.value === '+' || e.target.value === '-' || e.target.value === '/' || e.target.value === '*'){
        if(calDisplay.value === ''){
            console.log("Enter some value...");
            return ;
        }
        let expr = calDisplay.value ;
        let n = expr.length;
        console.log("expr is" , expr);
        // return;
        if(expr[n-1] === '+' || expr[n-1] === '/' || expr[n-1] === '-' || expr[n-1] === '*'){
            console.log("HERE");
            return ;
        }else{
            calDisplay.value += e.target.value;
        }
    }else{
        console.log("Number is appended");
        calDisplay.value += e.target.value;
        console.log(calDisplay.value);
    }
})
