yr = int(input ("Indique un año para saber si es bisiesto"))

def IsYearLeap(yr):

    if yr % 4 !=0 and yr % 100 !=0 and yr % 400 !=0 :
        print(yr, " no es año bisiesto")
    else:
        print(yr," es año bisiesto")

IsYearLeap(yr)

print ("Estoy\nAprendiendo\nPython")
TestData = [1900,2000, 2016, 1987]
TestResults = [False,True,True,False]
for 1 in range(len(TestData[])):
    yr = TestData[i]
    print(yr,"->",end=" ")
    result = IsYearLeap(yr)
    if result == TestResults[i]:
        print("OK")
    else
        print("Error")

    
