let A,B
A=parseInt(prompt("Digite el valor de A"));
B=parseInt(prompt("Digite el valor de B"));
    function change(A,B){
        var Anew,Bnew,Mos;
        Anew = B;
        Bnew = A;
        Mos = ("Antes A valia "+A+" y B valia "+B+" ahora A vale "+Anew+" y B vale "+Bnew);
        return Mos;
    }
    alert(change(A,B))