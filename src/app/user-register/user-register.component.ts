import { Component } from '@angular/core';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  userDB: any = [
    {firstName: 'ARBAB',lastName: 'SHAFI',email: 'arbabshafi81@gmail.com',address: 'PAMPORE',password: '1313',confirmPassword: '1313',},
    {firstName: 'FARHAZ',lastName: 'SHAFI',email: 'farhazshafi@gmail.com',address: 'PAMPORE',password: '1212',confirmPassword: '1212',},
    {firstName: 'LUBNA',lastName: 'SHAFI',email: 'lubnashafi@gmail.com',address: 'PAMPORE',password: '1111',confirmPassword: '1111',},
    {firstName: 'MOHAMMAD',lastName: 'SHAFI',email: 'mohdshafi@gmail.com',address: 'PAMPORE',password: '1010',confirmPassword: '1010',},
    {firstName: 'HAFEEZA',lastName: 'AKHTER',email: 'hafeezaakhter@gmail.com',address: 'PAMPORE',password: '0909',confirmPassword: '0909',},
]
  user: any = {firstName: '',lastName: '',email: '',address: '',password: '',confirmPassword: '',};
  loginData: any = {email: '',password: '',};
  showLogin: boolean = true ;
  showReg: boolean = false;  
  editingUser: any | null
  firstName: any;
  lastName: any;
  address: any;
  email: any;
  constructor() { }
  register() {
    // Check if the email is already registered
    const isEmailRegistered = this.userDB.some((user: any) => user.email === this.user.email);
    if (isEmailRegistered) {
      alert('Email already registered!')
    } else if (this.user.password === this.user.confirmPassword) {
      this.userDB.push(this.user);
      alert('User registered successfully')
      this.toggle()
    } else {
      alert('Password does not match!')
    }
  }
  login() {
    const isUser = this.userDB.some((user: any) => user.email === this.loginData.email && user.password === this.loginData.password)
    if (isUser) {
      alert('Logged in successfully!')
      this.showLogin=!this.showLogin
    } else {
      alert('Invalid Credentials!')
    }
  }
  editUser(user: any) {
    this.editingUser = true;
    this.showReg=!this.showReg;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.address = user.address;
    this.email = user.email;
  }
  updateUser() {
    const user = this.userDB.find((u: { email: 'string' }) => u.email === this.email)
    if (user) {
      user.firstName = this.firstName;
      user.lastName = this.lastName;
      user.address = this.address;
      user.email = this.email;
      alert('User data has been updated successfully!')
      this.showReg=this.showLogin
    }
  }
  showRegistrationForm() {
    this.toggle()
  }
  showLoginForm() {
    this.toggle()
    this.loginData = {}
  }
  selectedUser: any = null;
  viewUser(user: any) {
    this.selectedUser = user;
  }
  deleteUser(user: any) {
    const index = this.userDB.indexOf(user);
    if (index !== -1) {
      const confirmation = confirm('Are you sure you want to delete this user?');
      if (confirmation) {
        this.userDB.splice(index, 1);
      }
    }
  }
  logout() {
    this.showLogin=!this.showReg
    this.editingUser=false
    alert('You have been logged out')
  }
  toggle() {
    this.showLogin = !this.showLogin
    this.showReg=!this.showReg
  }
}