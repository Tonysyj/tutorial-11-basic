def odd_number(odd_list):
    number_list=[]
    for i in odd_list:
        if i %2==1:
            number_list.append(i)
    return number_list
odd_list=(range(0,20))

print(odd_number(odd_list))