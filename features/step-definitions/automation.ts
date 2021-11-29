import { Given, When, Then } from '@cucumber/cucumber'
import LandingPage from '../pageobjects/LandingPage'
import AuthenticationPage from '../pageobjects/AuthenticationPage'
import CreatePage from '../pageobjects/CreatePage'
import MyAccountPage from '../pageobjects/MyAccountPage'
import WomenCategoryPage from '../pageobjects/WomenCategoryPage';
import CartSummaryPage from '../pageobjects/CartSummaryPage'
import AddressPage from '../pageobjects/AddressPage';
import ShoppingPage from '../pageobjects/ShoppingPage'
import PaymentPage from '../pageobjects/PaymentPage';
import OrderSummaryPage from '../pageobjects/OrderSummaryPage'
import OrderConfirmationPage from '../pageobjects/OrderConfirmationPage'

Given("landing on automation pratices page", async () => {
     await LandingPage.openPage();
     await browser.maximizeWindow();
     //await browser.pause(5000);

})

When("click on sign-in button", async () => {

     await LandingPage.clickSignIn()
     //await browser.pause(5000);
})
//============================================================================================
Then("landing on AUTHENTICATION page", async () => {
     //await console.log(LandingPage.authenticationHeader.getText());
     await expect(browser).toHaveUrlContaining("authentication");
     await expect(AuthenticationPage.authenticationHeader).toBeDisplayed();

})
When("provide email id click on create an account", async () => {
     await AuthenticationPage.emailAddress();
     await AuthenticationPage.createAnAccountElement.click()
     //await browser.pause(5000);
})
//===============================================================================================
Then("landing on CREATE AN ACCOUNT page", async () => {
     await expect(CreatePage.createPageHeading).toHaveTextContaining("CREATE AN ACCOUNT");

})
When("fill personal infromation click register", async () => {
     await CreatePage.genderElement.click();
     await CreatePage.firstName();
     await CreatePage.lastName();
     //await CreatePage.f_email();
     await CreatePage.password();
     await CreatePage.days();
     await CreatePage.months();
     await CreatePage.years();
     await CreatePage.clickLetterCheckBox();
     await CreatePage.CheckBox2();
     await CreatePage.address_firstName();
     await CreatePage.address_lastName();
     await CreatePage.company();
     await CreatePage.address();
     await CreatePage.address2();
     await CreatePage.city();
     await CreatePage.state();
     await CreatePage.postalCode();
     await CreatePage.country();
     await CreatePage.additional();
     await CreatePage.homePhone();
     await CreatePage.mobilePhone();
     await CreatePage.assignAddress();
     await CreatePage.register();
})

Then("should be landing on MY ACCOUNT page", async () => {
     await expect(browser).toHaveUrlContaining("my-account");
     await expect(MyAccountPage.myAccountElement).toHaveTextContaining("MY ACCOUNT");
})

When("click on Women element from header menu", async () => {
     await MyAccountPage.clickOnWomenElement();

})

Then("should be navigated to WOMEN category page", async () => {
     await expect(WomenCategoryPage.womenHeaderElement).toHaveTextContaining("WOMEN");
})

When("select the Product and click add to cart", async () => {
     await WomenCategoryPage.addToCart()
     //await browser.pause(5000);
})

Then("should get pop-up Product successfully added to your shopping cart", async () => {
     await WomenCategoryPage.popUpHeader.waitForDisplayed();
     await expect(WomenCategoryPage.popUpHeader).toBeDisplayed();
})
When("click the Proceed to checkout button to navigate SHOPPING-CART SUMMARY page", async () => {
     await WomenCategoryPage.clickProceedToCheckout();
     //await browser.pause(5000);
})
Then("Should be navigated to SHOPPING-CART SUMMARY page", async () => {

     await expect(CartSummaryPage.summaryPageHeaderElement).toHaveTextContaining("SHOPPING-CART SUMMARY")

})
When("click the Proceed to checkout botton of SHOPPING-CART SUMMARY", async () => {
     await CartSummaryPage.clickCartProceedToCheckButton();
     //await browser.pause(5000);
})
Then("should be navigated to Address Page", async () => {
     await expect(AddressPage.AddressPageHeaderElement).toHaveTextContaining("ADDRESSES")
})
When("click the Proceed to checkout botton of Address Page", async () => {
     await AddressPage.clickProceedToCheckoutButtonAddressPage();
})

Then("should be navigated to Shopping page", async () => {
     await expect(ShoppingPage.shoppingPageHeaderElement).toHaveTextContaining("SHIPPING")
})

When("click the checkbox of Terms and conditions box", async () => {
     await ShoppingPage.clickAgreeCheckBox();
})
When("click the Proceed to checkout boutton of Shopping page", async () => {
     await ShoppingPage.clickShoppingPagePTC();
})
Then("should be navigated to Payment Page", async () => {
     await expect(PaymentPage.paymentPageHeaderElement).toBeDisplayed();
     //await expect(browser).toHaveUrlContaining("shopping")
})
When("select any one Payment method from display and click", async () => {
     await PaymentPage.clickPayByBankWire();
     //await browser.pause(5000);
})
Then("should me navigate to ORDER SUMMARY", async () => {
     await expect(OrderSummaryPage.orderSummaryPageHeader).toHaveTextContaining("ORDER SUMMARY")
     //await expect(browser).toHaveUrlContaining("payment")   
})
When("click the CONFIRM MY ORDER button", async () => {
     await OrderSummaryPage.clickConfirmOrder();
})
Then("You will navigated to ORDER CONFIRMATION DETAILS Page", async () => {
     await expect(OrderConfirmationPage.orderConfirmationHeaderElement).toHaveTextContaining("ORDER CONFIRMATION")
})
Then("You will receive Your order on My Store is complete message", async () => {
     await expect(OrderConfirmationPage.confirmationMessage).toBeDisplayed();
})
