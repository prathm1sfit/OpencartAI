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
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://awesomeqa.com/ui/", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class HomePage {
  4  |     private readonly page: Page;
  5  | 
  6  |     // Locators
  7  |     private readonly myAccountLink: Locator;
  8  |     private readonly registerLink: Locator;
  9  |     private readonly loginLink: Locator;
  10 |     private readonly searchInput: Locator;
  11 |     private readonly searchButton: Locator;
  12 |     private readonly cartButton: Locator;
  13 | 
  14 |     constructor(page: Page) {
  15 |         this.page = page;
  16 | 
  17 |         // Initialize locators
  18 |         this.myAccountLink = page.locator('.list-inline a').filter({ hasText: 'My Account' });
  19 |         this.registerLink = page.getByRole('link', { name: 'Register' });
  20 |         this.loginLink = page.getByRole('link', { name: 'Login' });
  21 |         this.searchInput = page.locator('#search input[name="search"]');
  22 |         this.searchButton = page.locator('#search button[type="button"]');
  23 |         this.cartButton = page.locator('#cart-total');
  24 |     }
  25 | 
  26 |     /**
  27 |      * Navigates to the application URL
  28 |      * @param url - The application URL
  29 |      */
  30 |     async navigateTo(url: string): Promise<void> {
> 31 |         await this.page.goto(url);
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  32 |     }
  33 | 
  34 |     /**
  35 |      * Clicks the My Account link to open the dropdown
  36 |      */
  37 |     async clickMyAccount(): Promise<void> {
  38 |         await this.myAccountLink.waitFor({ state: 'visible', timeout: 5000 });
  39 |         await this.page.waitForLoadState('domcontentloaded');
  40 |         await this.myAccountLink.click();
  41 |     }
  42 | 
  43 |     /**
  44 |      * Clicks the Register link from the My Account dropdown
  45 |      */
  46 |     async clickRegister(): Promise<void> {
  47 |         await this.registerLink.click();
  48 |         await this.page.waitForLoadState('domcontentloaded');
  49 |     }
  50 | 
  51 |     /**
  52 |      * Clicks the Login link from the My Account dropdown
  53 |      */
  54 |     async clickLogin(): Promise<void> {
  55 |         await this.loginLink.click();
  56 |         await this.page.waitForLoadState('load');
  57 |     }
  58 | 
  59 |     /**
  60 |      * Performs a product search
  61 |      * @param productName - The product name to search for
  62 |      */
  63 |     async searchProduct(productName: string): Promise<void> {
  64 |         await this.searchInput.fill(productName);
  65 |         await this.searchButton.click();
  66 |     }
  67 | 
  68 |     /**
  69 |      * Clicks the cart button in the header
  70 |      */
  71 |     async clickCartButton(): Promise<void> {
  72 |         await this.cartButton.click();
  73 |     }
  74 | 
  75 |     /**
  76 |      * Checks if the My Account link is visible
  77 |      * @returns Promise<boolean> - true if visible
  78 |      */
  79 |     async isMyAccountLinkVisible(): Promise<boolean> {
  80 |         try {
  81 |             await this.myAccountLink.waitFor({ state: 'visible', timeout: 5000 });
  82 |             return true;
  83 |         } catch (error) {
  84 |             console.log(`Error checking My Account link: ${error}`);
  85 |             return false;
  86 |         }
  87 |     }
  88 | }
```