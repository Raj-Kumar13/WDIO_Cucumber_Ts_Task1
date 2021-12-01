import { Given, When, Then } from '@cucumber/cucumber'
import LandingPage from '../pageobjects/LandingPage'
import AuthenticationPage from '../pageobjects/SignUp/AuthenticationPage'
import CreatePage from '../pageobjects/SignUp/CreateAccountPage'
import MyAccountPage from '../pageobjects/SignUp/MyAccountPage'
import WomenCategoryPage from '../pageobjects/Menu/WomenCategoryPage';
import CartSummaryPage from '../pageobjects/Cart/CartSummaryPage'
import AddressPage from '../pageobjects/Cart/AddressPage';
import ShoppingPage from '../pageobjects/Cart/ShoppingPage'
import PaymentPage from '../pageobjects/Cart/PaymentPage';
import OrderSummaryPage from '../pageobjects/Cart/OrderSummaryPage'
import OrderConfirmationPage from '../pageobjects/Cart/OrderConfirmationPage'
import faker from 'faker'

Given("landing on automation pratices page", async () => {
     await LandingPage.openPage();
})

When("click on sign-in button", async () => {
     await LandingPage.clickSignIn();
})
//============================================================================================
Then('landing on {string} Page', async (headerText) => {
     await expect(browser).toHaveUrlContaining("authentication");
     await expect(AuthenticationPage.authenticationHeader).toHaveTextContaining(headerText);
})
When("provide email id click on create an account", async () => {
     await AuthenticationPage.emailAddress();
     await AuthenticationPage.createAnAccountElement.click()
})
//===============================================================================================
Then("landing on {string} page", async (headerText) => {
     await expect(CreatePage.createPageHeading).toHaveTextContaining(headerText);
})

When("fill personal infromation click register", async () => {
     await CreatePage.genderElement.click();
     await CreatePage.firstNameAndlastName();
     await CreatePage.password();
     await CreatePage.dateOfBirth();
     await CreatePage.click_CheckBoxes();
     await CreatePage.addressF_nameAndL_name();
     await CreatePage.company();
     await CreatePage.address();
     await CreatePage.additional();
     await CreatePage.phoneNumbers();
     await CreatePage.assignAddress();
     await CreatePage.register();
})

Then("should be landing on {string} page", async (headerText) => {
     await expect(browser).toHaveUrlContaining("my-account");
     await expect(MyAccountPage.myAccountElement).toHaveTextContaining(headerText);
})

When("click on Women element from header menu", async () => {
     await MyAccountPage.clickOnWomenElement();
})

Then("should be navigated to {string} category page", async (headerText) => {
     await expect(WomenCategoryPage.womenHeaderElement).toHaveTextContaining(headerText);
})

When("select the Product and click add to cart", async () => {
     await WomenCategoryPage.addToCart()
})

Then("should get pop-up Product successfully added to your shopping cart", async () => {
     await WomenCategoryPage.popUpHeader.waitForDisplayed();
     await expect(WomenCategoryPage.popUpHeader).toBeDisplayed();
})
When("click the Proceed to checkout button to navigate SHOPPING-CART SUMMARY page", async () => {
     await WomenCategoryPage.clickProceedToCheckout();
})
Then("Should be navigated to {string} Page", async (headerText) => {
     await expect(CartSummaryPage.summaryPageHeaderElement).toHaveTextContaining(headerText)
})
When("click the Proceed to checkout botton of SHOPPING-CART SUMMARY", async () => {
     await CartSummaryPage.clickCartProceedToCheckButton();
})
Then("should be navigated to {string} page", async (headerText) => {
     await expect(AddressPage.AddressPageHeaderElement).toHaveTextContaining(headerText)
})
When("click the Proceed to checkout botton of Address Page", async () => {
     await AddressPage.clickProceedToCheckoutButtonAddressPage();
})

Then("Should be navigated to {string} page", async (headerText) => {
     await expect(ShoppingPage.shoppingPageHeaderElement).toHaveTextContaining(headerText)
})
When("click the checkbox of Terms and conditions box", async () => {
     await ShoppingPage.clickAgreeCheckBox();
})
When("click the Proceed to checkout boutton of Shopping page", async () => {
     await ShoppingPage.clickShoppingPagePTC();
})
Then("should be navigated to {string} Page", async (headerText) => {
     await expect(PaymentPage.paymentPageHeaderElement).toHaveTextContaining(headerText);
     await expect(browser).toHaveUrlContaining("order")
})
When("select any one Payment method from display and click", async () => {
     await PaymentPage.clickPayByBankWire();
})
Then("should me navigate to {string}", async (headerText) => {
     await expect(OrderSummaryPage.orderSummaryPageHeader).toHaveTextContaining(headerText)
     await expect(browser).toHaveUrlContaining("payment")
})
When("click the CONFIRM MY ORDER button", async () => {
     await OrderSummaryPage.clickConfirmOrder();
})
Then("You will navigated to {string} Page", async (headerText) => {
     await expect(OrderConfirmationPage.orderConfirmationHeaderElement).toHaveTextContaining(headerText)
})
Then("You will receive Your order on My Store is complete message", async () => {
     await expect(OrderConfirmationPage.confirmationMessage).toBeDisplayed();
})
