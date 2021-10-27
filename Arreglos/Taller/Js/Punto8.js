let Nums=[],opc,atrib=0;
for(I=0;I<=9;I++){
            
    opc=parseInt(prompt("Digite el numero "+I));
    Nums.push(opc)
    document.write(opc+"<br>")

}
for(I=0;I<=9;I++){
    atrib=atrib;
    atrib=Nums[I]+atrib;
    
}

    document.write("<br>La suma en total da "+atrib)
