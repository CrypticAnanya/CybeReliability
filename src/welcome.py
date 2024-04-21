from tkinter import *
import os
root = Tk()
def register():
    root.destroy()
    os.system("register.py")
def login():
    root.destroy()
    os.system("Login.py")
root.geometry('450x250')

root.title("Welcome")


namel = Label(root, text = "Welcome to CybeReliability!",font=("Algerian",20),fg="darkblue").place(x = 20,y = 10)
registerbutton=Button(root,text="Register",command=register,height=2, width=10,font=("Arial",15),fg='darkblue').place(x=50,y=100)
loginbuton=Button(root,text="Login",command=login,height=2, width=10,font=("Arial",15),fg='darkblue').place(x=260,y=100)



root.mainloop()