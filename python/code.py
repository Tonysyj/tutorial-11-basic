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

from unicodedata import name


fruits=('apple','banana','orange','grapes')
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

person={'age':23,'name':"Tony"}
person['height']="176cm"
print(person)
print(person['name'])
print(person['height'])
# del person['name']
# print(person)
result=person.pop('age')
print(person)
print(result)