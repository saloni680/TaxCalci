function calculate() {
    let Aninc = parseFloat(document.getElementById('AnnInc').value);
    let extra = parseFloat(document.getElementById('ExtraInc').value);
    let age = document.getElementById('Age').value; 
    let deduct = parseFloat(document.getElementById('Deduction').value);

    console.log(age);

    let total = Aninc + extra - deduct;
    let Ftotal = total.toString();
    let Ftwodig = Ftotal.slice(0,2)
    console.log("first two dig"+Ftwodig);
    

    console.log(total);

    let tax = 0;

    if (isNaN(Aninc) || Aninc === '' || isNaN(extra) || extra === '' || isNaN(deduct) || deduct === '') {
        document.getElementById('annIncError').innerHTML = '<abbr title="Enter number only"><i class="fa-solid fa-circle-info"></i></abbr>';
        document.getElementById('ExtraError').innerHTML = '<abbr title="Enter number only"><i class="fa-solid fa-circle-info"></i></abbr>';
        document.getElementById('deductError').innerHTML = '<abbr title="Enter number only"><i class="fa-solid fa-circle-info"></i></abbr>';
        return;
    } else {
        document.getElementById('annIncError').textContent = "";
        document.getElementById('ExtraError').textContent = "";
        document.getElementById('deductError').textContent = "";
    }

    if (total < 800000 ) {
        tax = 0; 
        console.log("in if");
    } else {
        console.log("in else");
 
        switch (age) {
            
            case '1':
            tax = 0.3 * (Ftwodig - 8);
                console.log("in < 40",+tax);
                break;
            case '2':
                tax = 0.4 * (Ftwodig - 8);
                console.log("in ≥ 40 & < 60");
                break;
            case '3':
                tax = 0.1 * (Ftwodig - 8);
                console.log("in ≥ 60");
                break;
            default:
                break;
        }
    }


    // Display result in modal
    document.getElementById('taxResult').innerHTML = "<h3>Your overall income is <br>" + total +" tax is " + tax.toFixed(2) + "<br>after tax deductions</h3>";
    document.getElementById('myModal').style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById('myModal').style.display = "none";
}

window.onclick = function (event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}

