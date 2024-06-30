# Warehouse Management System
<p><a  href="https://github.com/Shiranakther"><img  src="https://skillicons.dev/icons?i=mongo,express,react,nodejs,vite,redux,tailwind,vscode,github"  width=350></a></p>
This is a comprehensive warehouse management system specifically designed for a client. The system includes features such as stock addition, stock monitoring, inventory level alert system, shipping management, stock management, and report generation.

We built this project using the MERN stack, which includes **MongoDB**, **Express**, **React**, and **Node.js**.

## Team Members

|  Name              |Contribution                                            
|----------------|-------------------------------|
|Shiran Akther|`Inventory Request Management`            |
|Sahan Upendra          |`Item Management`            |
|Tashika Dilshani|`Item Distribution Management`|
|Dinuni Dewangani|`Shipping Management`|
|Ishan Pinto|`Stock Management`|
|Kasun Shameera|`Return and Wastage Management`|
|Nawoda Manamendra|`Employee Management`|
|Dilshan Chamikara|`Supplier Management`|

## Features

- Add Items
- Update/Delete Items
- Create Purchase Order 
- Update/Delete Purchase Orders
- Check Low Inventory Level
- Update Low Inventory level
- Create Custom orders
- Shipping Management
-  Manage Wastage and Retern
- Stock management
- Employee Management
- Supplier Management



## Instalation
 **01.Open Main Derectory** <br>
**02.Create .env File**  <br>
**03.MONGO - your password and SECRET - your secret key**  <br>
**04.Open Main Directory**  <br>
**05.Install Dependence** ```npm i```  <br>
**06.Open client Directory**   <br>
**07.Install Dependence**  ```npm i``` <br>
**08.Run Both client and server** ```npm run dev```  <br>

## System User Interfaces 

## Supplier Management Supper Side

### Starting UI
![home page](https://github.com/DCKumara07/ITP-project-MERN/assets/159523598/a18e04a7-a203-49a1-b082-bc1d8d32f618)

### About Us
![about us](https://github.com/DCKumara07/ITP-project-MERN/assets/159523598/3cae5bba-80a9-416a-ab0d-70eb5e1b0263)

### Login
![login](https://github.com/DCKumara07/ITP-project-MERN/assets/159523598/219eee00-e119-41b4-a0a3-224e5f052afb)

### Register
![image](https://github.com/Shiranakther/WMS_Intigrate/assets/127624730/9c7d6b25-53ab-4936-8000-b6ff86aaa0d7)

### Profile
![profile new](https://github.com/DCKumara07/ITP-project-MERN/assets/159523598/7f42f682-ae81-403f-a451-6e374480cc7b)

### showing supplier items 
![itmes](https://github.com/DCKumara07/ITP-project-MERN/assets/159523598/93074df0-e99e-4a5c-bb50-381c2acf4a1b)

### Create Supplier Items
![create supplier items](https://github.com/DCKumara07/ITP-project-MERN/assets/159523598/3fbe57ac-8aac-432d-b2c9-bb53d84675d2)

### Update upplier Items
![update s items](https://github.com/DCKumara07/ITP-project-MERN/assets/159523598/e7b86a45-5901-41a4-99bc-dc8aae6c81b7)


## Supplier Management Admin Side 

### Supplier pending request
![pending request](https://github.com/DCKumara07/ITP-project-MERN/assets/159523598/ae777f00-bc07-4093-b557-df20342f92e7)

### Supplier Items List (Admin Side)
![supplier item list](https://github.com/DCKumara07/ITP-project-MERN/assets/159523598/a643320a-ff10-498a-ac31-f755488a8830)

### Supplier report (admin)
![report ui](https://github.com/DCKumara07/ITP-project-MERN/assets/159523598/d16b6857-678e-4d6b-b3b1-106a61185f19)



## Supplier Management System Overview !

<p>For our second-year, second-semester project, we developed a warehouse management system using the MERN stack. My part was focused on supplier management. We decided that suppliers shouldn't have direct access to the main system and should interact with it externally.<br>

After creating a separate system for suppliers, we ensured that their activities were visible on the admin side. Suppliers can register in the system, but they cannot access it directly. Their requests go to the admin's supplier request page, where the admin can approve or reject them. Once approved, the supplier can access the supplier system.<br>

In this system, suppliers can update and delete their accounts. They can also add items, which are then displayed on the admin side. The admin has a supplier items list page and can generate reports with all supplier details and item lists.</p>





