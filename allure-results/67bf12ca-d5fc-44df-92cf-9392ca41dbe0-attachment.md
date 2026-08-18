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
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - banner [ref=f4e3]:
    - generic [ref=f4e4]:
      - link [ref=f4e6] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=eJ41Yo8q32s8oiTWjUQgodPCO29TYZ4o
        - img "OpenCart" [ref=f4e7]
      - text: 
      - list [ref=f4e8]:
        - listitem [ref=f4e9]:
          - link "John DoeJohn Doe " [ref=f4e10] [cursor=pointer]:
            - /url: "#"
            - img "John Doe" [ref=f4e11]
            - text: John Doe
            - generic [ref=f4e12]: 
          - text:    
        - listitem [ref=f4e13]:
          - link " Logout" [ref=f4e14] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=common/logout&user_token=eJ41Yo8q32s8oiTWjUQgodPCO29TYZ4o
            - generic [ref=f4e15]: 
            - text: Logout
  - navigation [ref=f4e16]:
    - generic [ref=f4e17]:
      - generic [ref=f4e18]: 
      - text: Navigation
    - list [ref=f4e19]:
      - listitem [ref=f4e20]:
        - link " Dashboard" [ref=f4e21] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=eJ41Yo8q32s8oiTWjUQgodPCO29TYZ4o
          - generic [ref=f4e22]: 
          - text: Dashboard
      - listitem [ref=f4e23]:
        - link " Catalog " [ref=f4e24] [cursor=pointer]:
          - /url: "#collapse1"
          - generic [ref=f4e25]: 
          - text: Catalog 
        - text:             
      - listitem [ref=f4e26]:
        - link " Extensions " [ref=f4e27] [cursor=pointer]:
          - /url: "#collapse2"
          - generic [ref=f4e28]: 
          - text: Extensions 
        - text:     
      - listitem [ref=f4e29]:
        - link " Design " [ref=f4e30] [cursor=pointer]:
          - /url: "#collapse3"
          - generic [ref=f4e31]: 
          - text: Design 
        - text:     
      - listitem [ref=f4e32]:
        - link " Sales " [ref=f4e33] [cursor=pointer]:
          - /url: "#collapse4"
          - generic [ref=f4e34]: 
          - text: Sales 
        - text:       
      - listitem [ref=f4e35]:
        - link " Customers " [ref=f4e36] [cursor=pointer]:
          - /url: "#collapse5"
          - generic [ref=f4e37]: 
          - text: Customers 
        - text:    
      - listitem [ref=f4e38]:
        - link " Marketing " [ref=f4e39] [cursor=pointer]:
          - /url: "#collapse6"
          - generic [ref=f4e40]: 
          - text: Marketing 
        - text:      
      - listitem [ref=f4e41]:
        - link " System " [ref=f4e42] [cursor=pointer]:
          - /url: "#collapse7"
          - generic [ref=f4e43]: 
          - text: System 
        - text:                                
      - listitem [ref=f4e44]:
        - link " Reports " [ref=f4e45] [cursor=pointer]:
          - /url: "#collapse8"
          - generic [ref=f4e46]: 
          - text: Reports 
        - text:   
    - list [ref=f4e48]:
      - listitem [ref=f4e49]:
        - generic [ref=f4e50]:
          - text: Orders Completed
          - generic [ref=f4e51]: 0%
        - generic [ref=f4e52]:
          - progressbar:
            - generic [ref=f4e53]: 0%
      - listitem [ref=f4e54]:
        - generic [ref=f4e55]:
          - text: Orders Processing
          - generic [ref=f4e56]: 0%
        - generic [ref=f4e57]:
          - progressbar:
            - generic [ref=f4e58]: 0%
      - listitem [ref=f4e59]:
        - generic [ref=f4e60]:
          - text: Other Statuses
          - generic [ref=f4e61]: 0%
        - generic [ref=f4e62]:
          - progressbar:
            - generic [ref=f4e63]: 0%
  - generic [ref=f4e64]:
    - generic [ref=f4e66]:
      - button "" [ref=f4e68] [cursor=pointer]
      - heading "Dashboard" [level=1] [ref=f4e70]
      - list [ref=f4e71]:
        - listitem [ref=f4e72]:
          - link "Home" [ref=f4e73] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=eJ41Yo8q32s8oiTWjUQgodPCO29TYZ4o
        - listitem [ref=f4e74]:
          - text: 
          - link "Dashboard" [ref=f4e75] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=eJ41Yo8q32s8oiTWjUQgodPCO29TYZ4o
    - generic [ref=f4e76]:
      - generic [ref=f4e77]:
        - generic [ref=f4e79]:
          - generic [ref=f4e80]:
            - text: Total Orders
            - generic [ref=f4e81]: 0%
          - generic [ref=f4e82]:
            - generic [ref=f4e83]: 
            - heading "0" [level=2] [ref=f4e84]
          - link "View more..." [ref=f4e86] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=sale/order&user_token=eJ41Yo8q32s8oiTWjUQgodPCO29TYZ4o
        - generic [ref=f4e88]:
          - generic [ref=f4e89]:
            - text: Total Sales
            - generic [ref=f4e90]: 0%
          - generic [ref=f4e91]:
            - generic [ref=f4e92]: 
            - heading "0" [level=2] [ref=f4e93]
          - link "View more..." [ref=f4e95] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=sale/order&user_token=eJ41Yo8q32s8oiTWjUQgodPCO29TYZ4o
        - generic [ref=f4e97]:
          - generic [ref=f4e98]:
            - text: Total Customers
            - generic [ref=f4e99]:
              - generic [ref=f4e100]: 
              - text: 100%
          - generic [ref=f4e101]:
            - generic [ref=f4e102]: 
            - heading "103" [level=2] [ref=f4e103]
          - link "View more..." [ref=f4e105] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=eJ41Yo8q32s8oiTWjUQgodPCO29TYZ4o
        - generic [ref=f4e107]:
          - generic [ref=f4e108]: People Online
          - generic [ref=f4e109]:
            - generic [ref=f4e110]: 
            - heading "0" [level=2] [ref=f4e111]
          - link "View more..." [ref=f4e113] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=report/online&user_token=eJ41Yo8q32s8oiTWjUQgodPCO29TYZ4o
      - heading " World Map" [level=3] [ref=f4e118]:
        - generic [ref=f4e119]: 
        - text: World Map
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class AdminLoginPage {
  4  |     private readonly page: Page;
  5  | 
  6  |     // Locators
  7  |     private readonly usernameInput: Locator;
  8  |     private readonly passwordInput: Locator;
  9  |     private readonly loginButton: Locator;
  10 |     private readonly loginHeading: Locator;
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page;
  14 | 
  15 |         // Initialize locators
  16 |         this.usernameInput = page.locator('#input-username');
  17 |         this.passwordInput = page.locator('#input-password');
  18 |         this.loginButton = page.getByRole('button', { name: 'Login' });
  19 |         this.loginHeading = page.getByRole('heading', { name: 'Please enter your login details.' });
  20 |     }
  21 | 
  22 |     /**
  23 |      * Checks if the Admin login page is displayed
  24 |      * @returns Promise<boolean> - true if the login heading is visible
  25 |      */
  26 |     async isAdminLoginPageExists(): Promise<boolean> {
  27 |         try {
  28 |             await this.loginHeading.waitFor({ state: 'visible', timeout: 5000 });
  29 |             return true;
  30 |         } catch (error) {
  31 |             console.log(`Error checking admin login page: ${error}`);
  32 |             return false;
  33 |         }
  34 |     }
  35 | 
  36 |     /**
  37 |      * Sets the Username field
  38 |      * @param username - Admin username
  39 |      */
  40 |     async setUsername(username: string): Promise<void> {
  41 |         await this.usernameInput.fill(username);
  42 |     }
  43 | 
  44 |     /**
  45 |      * Sets the Password field
  46 |      * @param password - Admin password
  47 |      */
  48 |     async setPassword(password: string): Promise<void> {
  49 |         await this.passwordInput.fill(password);
  50 |     }
  51 | 
  52 |     /**
  53 |      * Clicks the Login button
  54 |      */
  55 |     async clickLogin(): Promise<void> {
  56 |         await this.loginButton.click();
> 57 |         await this.page.waitForLoadState('load');
     |                         ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  58 |     }
  59 | 
  60 |     /**
  61 |      * Performs a complete admin login action
  62 |      * @param username - Admin username
  63 |      * @param password - Admin password
  64 |      */
  65 |     async login(username: string, password: string): Promise<void> {
  66 |         await this.setUsername(username);
  67 |         await this.setPassword(password);
  68 |         await this.clickLogin();
  69 |     }
  70 | }
  71 | 
```