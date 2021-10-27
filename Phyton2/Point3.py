print ("Estoy\nAprendiendo\nPython")
TestData = [1900,2000, 2016, 1987]
TestResults = [False,True,True,False]
for 1 in range(len(TestData)):
    yr = TestData[i]
    print(yr,"->",end=" ")
    result = IsYearLeap(yr)
    if result == TestResults[i]:
        print("OK")
    else
        print("Error")

    