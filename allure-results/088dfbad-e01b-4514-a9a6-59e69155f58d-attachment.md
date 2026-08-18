# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: db\customer-registration-e2e.spec.ts >> OpenCart Customer Registration - UI + Admin + DB Validation @master @end-to-end @db >> Register customer, verify in admin portal and MySQL @db
- Location: tests\db\customer-registration-e2e.spec.ts:22:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - banner [ref=f4e3]:
    - link [ref=f4e6] [cursor=pointer]:
      - /url: https://awesomeqa.com/ui/admin/index.php?route=common/login
      - img "OpenCart" [ref=f4e7]
  - generic [ref=f4e12]:
    - heading " Please enter your login details." [level=1] [ref=f4e14]:
      - generic [ref=f4e15]: 
      - text: Please enter your login details.
    - generic [ref=f4e16]:
      - generic [ref=f4e17]:
        - generic [ref=f4e18]: 
        - text: No match for Username and/or Password.
        - button "×" [ref=f4e19] [cursor=pointer]
      - generic [ref=f4e20]:
        - generic [ref=f4e21]:
          - generic [ref=f4e22]: Username
          - generic [ref=f4e23]:
            - generic [ref=f4e24]: 
            - textbox "Username" [ref=f4e26]: admin
        - generic [ref=f4e27]:
          - generic [ref=f4e28]: Password
          - generic [ref=f4e29]:
            - generic [ref=f4e30]: 
            - textbox "Password" [ref=f4e32]: admin
          - link "Forgotten Password" [ref=f4e34] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/admin/index.php?route=common/forgotten
        - button " Login" [ref=f4e36] [cursor=pointer]:
          - generic [ref=f4e37]: 
          - text: Login
  - contentinfo [ref=f4e38]:
    - link "OpenCart" [ref=f4e39] [cursor=pointer]:
      - /url: http://www.opencart.com
    - text: © 2009-2026 All Rights Reserved.
```

# Test source

```ts
  1   | /**
  2   |  * Test Case: OpenCart UI + Admin + MySQL End-to-End Customer Registration Validation
  3   |  *
  4   |  * Tags: @master @end-to-end @db @regression
  5   |  *
  6   |  * Steps:
  7   |  * 1) Register a unique customer through the frontend
  8   |  * 2) Verify the customer in the OpenCart Admin Portal
  9   |  * 3) Verify the customer record in the MySQL oc_customer table
  10  |  */
  11  | 
  12  | import { test, expect } from '../../fixtures/pageFixtures';
  13  | import { RandomDataUtil } from '../../utils/dataGenerator';
  14  | import { executeQuery } from '../../utils/dbClient';
  15  | 
  16  | const ADMIN_URL = process.env.ADMIN_URL || 'https://awesomeqa.com/ui/admin/index.php';
  17  | const ADMIN_USERNAME = process.env.ADMIN_USERNAME || '';
  18  | const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
  19  | 
  20  | test.describe('OpenCart Customer Registration - UI + Admin + DB Validation @master @end-to-end @db', () => {
  21  | 
  22  |     test('Register customer, verify in admin portal and MySQL @db', async ({
  23  |         page, homePage, registerPage, successPage, adminLoginPage, adminCustomersPage, adminCustomerEditPage
  24  |     }) => {
  25  |         // Generate unique customer data once, reused across all three layers
  26  |         const firstName = RandomDataUtil.getFirstName();
  27  |         const lastName = RandomDataUtil.getLastName();
  28  |         const email = RandomDataUtil.getEmail();
  29  |         const telephone = RandomDataUtil.getPhoneNumber();
  30  |         const password = RandomDataUtil.getPassword();
  31  | 
  32  |         await test.step('1) Register a new customer through the frontend', async () => {
  33  |             await homePage.navigateTo(process.env.WEB_APP_URL || 'https://awesomeqa.com/ui/');
  34  |             await homePage.clickMyAccount();
  35  |             await homePage.clickRegister();
  36  | 
  37  |             const isRegisterPage = await registerPage.isRegisterPageExists();
  38  |             expect(isRegisterPage, 'Register Account page should be displayed').toBeTruthy();
  39  | 
  40  |             await registerPage.completeRegistration(firstName, lastName, email, telephone, password);
  41  | 
  42  |             const isSuccess = await successPage.isSuccessPageExists();
  43  |             expect(isSuccess, 'Account created success page should be displayed').toBeTruthy();
  44  | 
  45  |             const headingText = await successPage.getSuccessHeadingText();
  46  |             expect(headingText).toContain('Your Account Has Been Created!');
  47  |         });
  48  | 
  49  |         await test.step('2) Verify the customer in the Admin Portal', async () => {
  50  |             await page.goto(ADMIN_URL);
  51  | 
  52  |             const isLoginPage = await adminLoginPage.isAdminLoginPageExists();
  53  |             expect(isLoginPage, 'Admin login page should be displayed').toBeTruthy();
  54  | 
  55  |             await adminLoginPage.login(ADMIN_USERNAME, ADMIN_PASSWORD);
  56  | 
> 57  |             await page.waitForURL(/route=common\/dashboard/);
      |                        ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  58  | 
  59  |             await adminCustomersPage.dismissSecurityModal();
  60  | 
  61  |             await adminCustomersPage.clickCustomersMenu();
  62  |             await adminCustomersPage.clickCustomersSubmenu();
  63  |             await page.waitForURL(/route=customer\/customer/);
  64  | 
  65  |             const isCustomersPage = await adminCustomersPage.isCustomersPageExists();
  66  |             expect(isCustomersPage, 'Admin Customers list page should be displayed').toBeTruthy();
  67  | 
  68  |             await adminCustomersPage.searchCustomerByEmail(email);
  69  | 
  70  |             const isRowVisible = await adminCustomersPage.isCustomerRowExists(email);
  71  |             expect(isRowVisible, `Customer with email ${email} should appear in the admin customer list`).toBeTruthy();
  72  | 
  73  |             await adminCustomersPage.clickEditCustomer(email);
  74  | 
  75  |             const isEditPage = await adminCustomerEditPage.isEditCustomerPageExists();
  76  |             expect(isEditPage, 'Edit Customer page should be displayed').toBeTruthy();
  77  | 
  78  |             expect(await adminCustomerEditPage.getFirstNameValue(), 'First name should match').toBe(firstName);
  79  |             expect(await adminCustomerEditPage.getLastNameValue(), 'Last name should match').toBe(lastName);
  80  |             expect(await adminCustomerEditPage.getEmailValue(), 'Email should match').toBe(email);
  81  |             expect(await adminCustomerEditPage.getStatusValue(), 'Customer status should be enabled (1)').toBe('1');
  82  |         });
  83  | 
  84  |         await test.step('3) Verify the customer in the MySQL oc_customer table', async () => {
  85  |             const rows: any[] = (await executeQuery(
  86  |                 'SELECT customer_id, firstname, lastname, email, status, date_added FROM oc_customer WHERE email = ?',
  87  |                 [email]
  88  |             )) as any[];
  89  | 
  90  |             expect(rows.length, `Exactly one customer record should exist for email ${email}`).toBe(1);
  91  | 
  92  |             const customer = rows[0];
  93  |             expect(customer.firstname, 'DB firstname should match generated first name').toBe(firstName);
  94  |             expect(customer.lastname, 'DB lastname should match generated last name').toBe(lastName);
  95  |             expect(customer.email, 'DB email should match generated email').toBe(email);
  96  |             expect(customer.status, 'DB status should be 1 (enabled)').toBe(1);
  97  |             expect(customer.date_added, 'DB date_added should exist').toBeTruthy();
  98  |         });
  99  | 
  100 |         console.log('✅ Customer registration validated across UI, Admin and MySQL successfully!');
  101 |     });
  102 | });
  103 | 
```