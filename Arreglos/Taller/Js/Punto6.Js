let N,Num=[],k,Varb;
for(I=0;I<=8;I++){
    N=parseInt(prompt("Digite el numero "+I));
    Num.push(N)
}
function burbuja(Num)
	{
		for(i=1;i<9;i++)
		{
			for(j=0;j<(9-i);j++)
			{
				if(Num[j]>Num[j+1])
				{
					k=Num[j+1];
					Num[j+1]=Num[j];
					Num[j]=k;
				}
			}
		}
		return Num;
	}
document.write("Valores iniciales <br>");
for(i=0;i<Num.length;i++)
{
    document.write(Num[i]+"<br>");
}
Varb=burbuja(Num);
 
	document.write("Valores ordenados<br>");
	for(i=0;i<Varb.length;i++)
	{
		document.write(arrayB[i]+"<br>");
	}