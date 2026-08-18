# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: db\customer-registration-e2e.spec.ts >> OpenCart Customer Registration - UI + Admin + DB Validation @master @end-to-end @db >> Register customer, verify in admin portal and MySQL @db
- Location: tests\db\customer-registration-e2e.spec.ts:22:9

# Error details

```
Error: Customer with email Eusebio.Lindgren25@hotmail.com should appear in the admin customer list

expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=f6e2]:
  - banner [ref=f6e3]:
    - generic [ref=f6e4]:
      - link [ref=f6e6] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o
        - img "OpenCart" [ref=f6e7]
      - text: 
      - list [ref=f6e8]:
        - listitem [ref=f6e9]:
          - link "John DoeJohn Doe " [ref=f6e10] [cursor=pointer]:
            - /url: "#"
            - img "John Doe" [ref=f6e11]
            - text: John Doe
            - generic [ref=f6e12]: 
          - text:    
        - listitem [ref=f6e13]:
          - link " Logout" [ref=f6e14] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=common/logout&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o
            - generic [ref=f6e15]: 
            - text: Logout
  - navigation [ref=f6e16]:
    - generic [ref=f6e17]:
      - generic [ref=f6e18]: 
      - text: Navigation
    - list [ref=f6e19]:
      - listitem [ref=f6e20]:
        - link " Dashboard" [ref=f6e21] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o
          - generic [ref=f6e22]: 
          - text: Dashboard
      - listitem [ref=f6e23]:
        - link " Catalog " [ref=f6e24] [cursor=pointer]:
          - /url: "#collapse1"
          - generic [ref=f6e25]: 
          - text: Catalog 
        - text:             
      - listitem [ref=f6e26]:
        - link " Extensions " [ref=f6e27] [cursor=pointer]:
          - /url: "#collapse2"
          - generic [ref=f6e28]: 
          - text: Extensions 
        - text:     
      - listitem [ref=f6e29]:
        - link " Design " [ref=f6e30] [cursor=pointer]:
          - /url: "#collapse3"
          - generic [ref=f6e31]: 
          - text: Design 
        - text:     
      - listitem [ref=f6e32]:
        - link " Sales " [ref=f6e33] [cursor=pointer]:
          - /url: "#collapse4"
          - generic [ref=f6e34]: 
          - text: Sales 
        - text:       
      - listitem [ref=f6e35]:
        - link " Customers " [ref=f6e36] [cursor=pointer]:
          - /url: "#collapse5"
          - generic [ref=f6e37]: 
          - text: Customers 
        - list [ref=f6e38]:
          - listitem [ref=f6e39]:
            - link "Customers" [ref=f6e40] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o
          - listitem [ref=f6e41]:
            - link "Customer Groups" [ref=f6e42] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer_group&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o
          - listitem [ref=f6e43]:
            - link "Customer Approvals" [ref=f6e44] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer_approval&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o
          - listitem [ref=f6e45]:
            - link "Custom Fields" [ref=f6e46] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/custom_field&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o
      - listitem [ref=f6e47]:
        - link " Marketing " [ref=f6e48] [cursor=pointer]:
          - /url: "#collapse6"
          - generic [ref=f6e49]: 
          - text: Marketing 
        - text:      
      - listitem [ref=f6e50]:
        - link " System " [ref=f6e51] [cursor=pointer]:
          - /url: "#collapse7"
          - generic [ref=f6e52]: 
          - text: System 
        - text:                                
      - listitem [ref=f6e53]:
        - link " Reports " [ref=f6e54] [cursor=pointer]:
          - /url: "#collapse8"
          - generic [ref=f6e55]: 
          - text: Reports 
        - text:   
    - list [ref=f6e57]:
      - listitem [ref=f6e58]:
        - generic [ref=f6e59]:
          - text: Orders Completed
          - generic [ref=f6e60]: 0%
        - generic [ref=f6e61]:
          - progressbar:
            - generic [ref=f6e62]: 0%
      - listitem [ref=f6e63]:
        - generic [ref=f6e64]:
          - text: Orders Processing
          - generic [ref=f6e65]: 0%
        - generic [ref=f6e66]:
          - progressbar:
            - generic [ref=f6e67]: 0%
      - listitem [ref=f6e68]:
        - generic [ref=f6e69]:
          - text: Other Statuses
          - generic [ref=f6e70]: 0%
        - generic [ref=f6e71]:
          - progressbar:
            - generic [ref=f6e72]: 0%
  - generic [ref=f6e73]:
    - generic [ref=f6e75]:
      - generic [ref=f6e76]:
        - text: 
        - link "" [ref=f6e77] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer/add&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o&filter_email=Eusebio.Lindgren25%40hotmail.com
        - button "" [ref=f6e79] [cursor=pointer]
      - heading "Customers" [level=1] [ref=f6e81]
      - list [ref=f6e82]:
        - listitem [ref=f6e83]:
          - link "Home" [ref=f6e84] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o
        - listitem [ref=f6e85]:
          - text: 
          - link "Customers" [ref=f6e86] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o&filter_email=Eusebio.Lindgren25%40hotmail.com
    - generic [ref=f6e88]:
      - generic [ref=f6e90]:
        - heading " Filters" [level=3] [ref=f6e92]:
          - generic [ref=f6e93]: 
          - text: Filters
        - generic [ref=f6e94]:
          - generic [ref=f6e95]:
            - generic [ref=f6e96]: Customer Name
            - textbox "Customer Name" [ref=f6e97]
          - generic [ref=f6e98]:
            - generic [ref=f6e99]: E-Mail
            - textbox "E-Mail" [ref=f6e100]: Eusebio.Lindgren25@hotmail.com
          - generic [ref=f6e101]:
            - generic [ref=f6e102]: Customer Group
            - combobox "Customer Group" [ref=f6e103]:
              - option [selected]
              - option "Default"
          - generic [ref=f6e104]:
            - generic [ref=f6e105]: Status
            - combobox "Status" [ref=f6e106]:
              - option [selected]
              - option "Enabled"
              - option "Disabled"
          - generic [ref=f6e107]:
            - generic [ref=f6e108]: IP
            - textbox "IP" [ref=f6e109]
          - generic [ref=f6e110]:
            - generic [ref=f6e111]: Date Added
            - generic [ref=f6e112]:
              - textbox "Date Added" [ref=f6e113]
              - button "" [ref=f6e115] [cursor=pointer]
          - button " Filter" [ref=f6e118] [cursor=pointer]:
            - generic [ref=f6e119]: 
            - text: Filter
      - generic [ref=f6e121]:
        - heading " Customer List" [level=3] [ref=f6e123]:
          - generic [ref=f6e124]: 
          - text: Customer List
        - generic [ref=f6e125]:
          - table [ref=f6e128]:
            - rowgroup [ref=f6e129]:
              - row [ref=f6e130]:
                - cell [ref=f6e131]:
                  - checkbox [ref=f6e132]
                - cell [ref=f6e133]:
                  - link "Customer Name " [ref=f6e134] [cursor=pointer]:
                    - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o&sort=name&filter_email=Eusebio.Lindgren25%40hotmail.com&order=DESC
                - cell [ref=f6e135]:
                  - link "E-Mail" [ref=f6e136] [cursor=pointer]:
                    - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o&sort=c.email&filter_email=Eusebio.Lindgren25%40hotmail.com&order=DESC
                - cell [ref=f6e137]:
                  - link "Customer Group" [ref=f6e138] [cursor=pointer]:
                    - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o&sort=customer_group&filter_email=Eusebio.Lindgren25%40hotmail.com&order=DESC
                - cell [ref=f6e139]:
                  - link "Status" [ref=f6e140] [cursor=pointer]:
                    - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o&sort=c.status&filter_email=Eusebio.Lindgren25%40hotmail.com&order=DESC
                - cell [ref=f6e141]:
                  - link "IP" [ref=f6e142] [cursor=pointer]:
                    - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o&sort=c.ip&filter_email=Eusebio.Lindgren25%40hotmail.com&order=DESC
                - cell [ref=f6e143]:
                  - link "Date Added" [ref=f6e144] [cursor=pointer]:
                    - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=0FA6aPLscFTSYzFziXdWKdoduO60Pp5o&sort=c.date_added&filter_email=Eusebio.Lindgren25%40hotmail.com&order=DESC
                - cell "Action" [ref=f6e145]
            - rowgroup [ref=f6e146]:
              - row [ref=f6e147]:
                - cell "No results!" [ref=f6e148]
          - generic [ref=f6e149]: Showing 0 to 0 of 0 (0 Pages)
  - contentinfo [ref=f6e152]:
    - link "OpenCart" [ref=f6e153] [cursor=pointer]:
      - /url: http://www.opencart.com
    - text: © 2009-2026 All Rights Reserved.Version 3.0.4.1
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
  16  | const ADMIN_URL = process.env.ADMIN_URL || 'http://localhost/opencart/upload/admin/index.php';
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
  33  |             await homePage.navigateTo(process.env.WEB_APP_URL || 'http://localhost/opencart/upload/');
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
  57  |             await page.waitForURL(/route=common\/dashboard/);
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
> 71  |             expect(isRowVisible, `Customer with email ${email} should appear in the admin customer list`).toBeTruthy();
      |                                                                                                           ^ Error: Customer with email Eusebio.Lindgren25@hotmail.com should appear in the admin customer list
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