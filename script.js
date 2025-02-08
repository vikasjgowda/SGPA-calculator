function calci(event) {
    event.preventDefault();

    let total = 0;
    let crd = 0;
    let sgpaSum = 0;

    for (let i = 1; i <= 8; i++) {
        let cie = parseFloat(document.getElementById("cie" + i)?.value) || 0;
        let see = parseFloat(document.getElementById("see" + i)?.value) || 0;
        let credits = parseFloat(document.getElementById("cr" + i)?.value) || 0;

        let tot = cie + see;
        document.getElementById("tot" + i)?.value = tot;
        total += tot;
        
        let grade;
        if (tot > 89) grade = 10;
        else if (tot > 79) grade = 9;
        else if (tot > 69) grade = 8;
        else if (tot > 59) grade = 7;
        else if (tot > 49) grade = 6;
        else if (tot > 39) grade = 5;
        else if (tot > 29) grade = 4;
        else if (tot > 19) grade = 3;
        else if (tot > 9) grade = 2;
        else if (tot > 0) grade = 1;
        else grade = 0;

        document.getElementById("grd" + i)?.value = grade;
        sgpaSum += credits * grade;
        crd += credits;
    }

    document.getElementById("total").value = total;
    document.getElementById("sgpa").value = (crd > 0) ? (sgpaSum / crd).toFixed(2) : 0;
}
