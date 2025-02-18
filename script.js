function calci(event) {
    event.preventDefault();  // Prevents form submission and page refresh

    var cie1 = parseFloat(document.getElementById("cie1").value) || 0;
    var cie2 = parseFloat(document.getElementById("cie2").value) || 0;
    var cie3 = parseFloat(document.getElementById("cie3").value) || 0;
    var cie4 = parseFloat(document.getElementById("cie4").value) || 0;
    var cie5 = parseFloat(document.getElementById("cie5").value) || 0;
    var cie6 = parseFloat(document.getElementById("cie6").value) || 0;

    var see1 = parseFloat(document.getElementById("see1").value) || 0;
    var see2 = parseFloat(document.getElementById("see2").value) || 0;
    var see3 = parseFloat(document.getElementById("see3").value) || 0;
    var see4 = parseFloat(document.getElementById("see4").value) || 0;
    var see5 = parseFloat(document.getElementById("see5").value) || 0;
    var see6 = parseFloat(document.getElementById("see6").value) || 0;

    var tot1 = cie1 + see1;
    var tot2 = cie2 + see2;
    var tot3 = cie3 + see3;
    var tot4 = cie4 + see4;
    var tot5 = cie5 + see5;
    var tot6 = cie6 + see6;

    document.getElementById("tot1").value = tot1;
    document.getElementById("tot2").value = tot2;
    document.getElementById("tot3").value = tot3;
    document.getElementById("tot4").value = tot4;
    document.getElementById("tot5").value = tot5;
    document.getElementById("tot6").value = tot6;

    document.getElementById("total").value = tot1 + tot2 + tot3 + tot4 + tot5 + tot6;

    function getGrade(marks) {
        if (marks > 89) return 10;
        if (marks > 79) return 9;
        if (marks > 69) return 8;
        if (marks > 59) return 7;
        if (marks > 49) return 6;
        if (marks > 39) return 5;
        if (marks > 29) return 4;
        if (marks > 19) return 3;
        if (marks > 9) return 2;
        return 1;
    }

    document.getElementById("grd1").value = getGrade(tot1);
    document.getElementById("grd2").value = getGrade(tot2);
    document.getElementById("grd3").value = getGrade(tot3);
    document.getElementById("grd4").value = getGrade(tot4);
    document.getElementById("grd5").value = getGrade(tot5);
    document.getElementById("grd6").value = getGrade(tot6);

    var cr1 = parseFloat(document.getElementById("cr1").value) || 0;
    var cr2 = parseFloat(document.getElementById("cr2").value) || 0;
    var cr3 = parseFloat(document.getElementById("cr3").value) || 0;
    var cr4 = parseFloat(document.getElementById("cr4").value) || 0;
    var cr5 = parseFloat(document.getElementById("cr5").value) || 0;
    var cr6 = parseFloat(document.getElementById("cr6").value) || 0;

    var totalCredits = cr1 + cr2 + cr3 + cr4 + cr5 + cr6;

    var grd1 = parseFloat(document.getElementById("grd1").value) || 0;
    var grd2 = parseFloat(document.getElementById("grd2").value) || 0;
    var grd3 = parseFloat(document.getElementById("grd3").value) || 0;
    var grd4 = parseFloat(document.getElementById("grd4").value) || 0;
    var grd5 = parseFloat(document.getElementById("grd5").value) || 0;
    var grd6 = parseFloat(document.getElementById("grd6").value) || 0;

    var sgpa = ((cr1 * grd1) + (cr2 * grd2) + (cr3 * grd3) + (cr4 * grd4) + (cr5 * grd5) + (cr6 * grd6)) / totalCredits;

    document.getElementById("sgpa").value = sgpa.toFixed(2);
}
