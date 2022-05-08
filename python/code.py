# from re import X


# print("hello world")
# print(3+4)
# print(5-2)
# print(6*4)
# print(9/3)
# print(int((2+4)/3))
# print(round((2+4)/7,2))

# x=5
# y=x*2+3
# print(x)
# print(y)

# a="I love my \"phone\""
# print(a)

# a='py'+'thon'
# b='hello'*3
# c='abcde'*4
# print(a)
# print(b)
# print(c)
# print(b[6])
# print(c[2:7])

# from unicodedata import name


# fruits=('apple','banana','orange','grapes')
# print(fruits)
# fruits.append('cherry')
# print(fruits)
# fruits.remove('orange')
# print(fruits)
# fruits.pop(-1)
# print(fruits)
# print(len(fruits))
# new_fruits=('cherry',)
# fruits+=new_fruits
# +=是自增运算符。效果和fruits=fruits+new_fruits是一样的。同理还有，-=，*=和/=
# print(fruits)
# print(len(fruits))

# person={'age':23,'name':"Tony"}
# person['height']="176cm"
# print(person)
# print(person['name'])
# print(person['height'])
# del person['name']
# print(person)
# result=person.pop('age')
# print(person)
# print(result)

# from unicodedata import name


# print(3>2 and 4<2)
# print(3>2 or 4<2)

# name="Tony"
# if name not in ["Tony", "Jack", "Ricky"]:
#     print("male")
# print("female")

# x=40
# if x>0:
#     x=-5
#     print("change to negtive number")
#     print(x)

# i=30
# while i<35:
#     print(i)
#     i += 1

from pyrsistent import b


def add(a, b):
    inner_result=a+b
    return inner_result

result=add(5,8)
print(result)
