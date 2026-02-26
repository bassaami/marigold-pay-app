# Marigold pay app

This is a Bill Management website that allows users to pay utility bills.  Users can see the list of bills, such as electricity, gas, water, internet, etc. Those bills can be paid using their balance. 

Assignment Category:  Assignment-09_category_Marigold

🚩🚩update: All the updates will be declared here.  
You need to implement forget password method, but skip email verification. 

Requirements (Video: B11_Assignment_09_Marigold_DEMO.mp4)
https://drive.google.com/file/d/1M16WEkO5JV4llP5ywvlMyfmSHN4m9pK4/view

PROJECT NAME
Project Theme

This is a Bill Management website that allows users to pay utility bills.  Users can see the list of bills, such as electricity, gas, water, internet, etc. Those bills can be paid using their balance. 

Ensure the Following things to get 100% mark

GitHub Commits: Include at least 10 meaningful commits with descriptive messages.

Readme.md: Include a README file with the project name, purpose, live URL, key features, and any npm packages you have used.

Responsiveness: Ensure the website is fully responsive on mobile, tablet, and desktop.
Environment Variables: Secure Firebase configuration keys using environment variables.

Unique Design:  Create a unique design that encourages local support. You can use this blog for these kinds of resources 

Host your Application:  You can host deployment systems like Netlify, Surge, and Firebase. As you develop a single-page application, 
ensure that the page doesn't throw any errors on reloading from any routes.  
Add the authorized domain to Firebase if you use Netlify / surge

Main Requirements
Layout Structure

For this website, the layout structure is very simple. Navbar, Main Content, and Footer.    
	<Navbar/>
	<Outlet/>
	<Footer/>
will work just fine.                                     

JSON Data Generation

You will need JSON data for your -> My Cards and Bills pages. Below are the requirements for these pages, with an example object structure. 

You can simply copy them, and ask AI tools to generate more data as necessary. 


Home
You can take inspiration from any Mobile Banking or any sort of Financial or Economical website to get ideas for design. Simply search
Bangladeshi Mobile Banking
Bangladeshi Banks
Financial / Economical Websites
You can also use Unsplash or FreePik for the necessary images for your website.




At least, add
A Navbar
A Slider / Carousel (using SwiperJS or any library except DaisyUI Carousel)
Different Icons of the Organizations such as - DESCO, NESCO, WASA etc (Card Grid or Card Slider / Carousel)

The purpose of above two sections is to show which Organizations or Banks the website works with. You can see these kinds of sections in your mobile banking apps, where there are many icons showing which utility bills you can pay.


Apart from the above sections, add 4 extra sections by taking inspiration from different banking website’s home page. You can google search using these keywords -> “ Bangladesh Bank Websites ” 
A Footer

[ ❗] Important


Except the Home page, Login and Register page, all the other pages will be protected. That means, don’t allow visiting those pages without signing / logging in.

For Navbar
Put these links as you think it looks fine. 
A logo (at the left)
Bills Page, My Profile Page at the middle 
Login , Register buttons at right side. Keep it simple. 
Conditionally render Login / Register if user is NOT signed in, and show User Profile picture if Signed In instead of Login / Register buttons.
Clicking the User Profile button will appear a dropdown menu, showing these  
Users current balance. (Default value must be 10000 BDT)
Log Out menu (Clicking this will Log out the user)

4. Authentication

Tell them where the user can land on the Login page.  you can use this frame for this requirement below  
User Login
User will show a Login page with a form, so that the user can Log in this application. 
Show a Title for Login.  
 Form with the following fields 
 Email, 
Password, 
Forget Password, 
Login button 

If the user logs in successfully then 
navigate him to his desired Route / Home page.
If not, show him an error with a toast/error message anywhere in the form.

There will be some other options like 
Show the user a Link for Register so that he can go to the register page. 
Show users a Social Login Button ( Google only ) on clicking it 
user authenticates with Google
 Navigate him to his desired Route / Home page.

User Registration
Create a register page with a form, so that the user can register himself in this application. 
Show a Title for registration and a Form with the following fields
(Name, Email, Photo-URL, Password & Register Button ) 

If the user registers successfully then 
navigate him to his desired Route / Home page.
If not, show him an error with a toast/error message anywhere in the form.

Implement password validation
For password validation, you need to follow the below criteria. Show a password error in the form, and don't Register for an invalid password
Must have an Uppercase letter in the password 
Must have a Lowercase letter in the password  
Length must be at least 6 character 


There will be some other options like 
Show the user a Link for Login so that he can go to the Login page. 
Show users a Social Login Button ( Google only ) . on Clicking it 
user authenticates with Google
 Navigate the user to the Home page.

 💡Don’t implement email verification method as it will inconvenience the examiner. If you want, you can add these after receiving the assignment result.

5. My Profile 

 This page will contain the User profile picture, Display Name and email. 

 There will be an update feature for name & photo. define this requirement in the challenge section. 






6. Bills page
This page will contain various bills such as - Electricity, Gas, Internet, Water, Credit Card Bill, Tuition / School / College Monthly Fee, etc.
For this page, the fake JSON data will contain these properties
id : Unique Identifier for the bill . ( This will be useful to find a single bill information )
bill_type : example - electricity, gas, internet, water, credit card bill, tuition / school / college
icon : this will contain a url for icon / logo / image indicating the bill_type
organization : example - For electricity - DESCO, NESCO, WAPDA, PDB etc, For water - WASA, For gas - Tista, For credit card bill - various bank names, you get the idea
amount: Required payment amount
due-date: Date before the payment must be done
For this page, create json data as given below. Create at least 4 objects within the array. Example is given below: 
[
	{
		"id": 1,
		"bill_type" : "electricity",
		"icon": "https://icon-to-indicate-electricity-bill",
		"organization" : "DESCO",
		"amount" : 1890,
		"due-date": "2025-03-22T06:57:58.110Z"
	},
	{
		"id": 2,
		"bill_type" : "gas",
		"icon": "https://icon-to-indicate-gas-bill",
		"organization" : "Tista",
		"amount" : 1488,
		"due-date": "2025-03-28T06:57:58.110Z"
	}
	//.... And So on
]

Using these data, create a single column card grid. Each bill will have a “Pay” button. By clicking this button, user will redirect to the bill details page, and asked to select a bank card to pay the bill.

7. Bill Details Page

In this page, users would pay a single / particular bill using the balance amount shown in the Navbar menu. This page will be a Two Column layout. Left column will contain the Large Icon of the organization logo. Then at the bottom right corner, the bill_type icon will show. Right column will show the other fields such as Organization Name, Bill type, Amount, Due Date, And “Pay Bill” button.  

After clicking the “Pay Bill” button, the bill amount will be reduced from the balance amount. 



Challenges 
After successful payment, the user will be redirected to the Bills page, and at the paid bill, there would be a added a green tick ✅ icon indicating that, the bill was paid successfully.
If a user visit a protected route without logging in / Sign in, Redirect the user to the Login Page, After successful Login the user must return the the protected route
Don’t allow paying the same bill twice.
There would be a drop-down menu in the Bills Page where the bill-type can be selected, and then bills will be filtered according to the bill-type.
Update Information Feature
In my-profile route, there will be an update button on Clicking it.  Take the user to another route 
Show the user a form with 2 input fields ( photo-URL  and Name ) 
An Update Information button.

What to Submit 
Your Github Repo Link : 
Your Live Link : 

































This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
