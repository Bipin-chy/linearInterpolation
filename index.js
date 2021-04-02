var btn = document.querySelector('#btn');

btn.addEventListener('click', calculation);

function calculation(){
    let X0 = document.querySelector('#x0').value;
    let X1 = document.querySelector('#x1').value;
    let Y0 = document.querySelector('#y0').value;
    let Y1 = document.querySelector('#y1').value;
    let Xp = document.querySelector('#xp').value;
    let y = Y1-Y0;
    console.log(y);
    let x = X1-X0;
    console.log(x);
    let xp = Xp- X0;
    console.log(xp);

    let Yp =  (y/x*xp) + parseInt(Y0);
    // console.log(typeof yp);

    alert('Your calculation point Yp is : ' + Yp);
}