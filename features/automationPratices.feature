Feature: Creating a User and  buying Product

    Feature Description

    Scenario: create User and select Product add to cart Placing Order 

        Given landing on automation pratices page
        When click on sign-in button
        Then landing on "AUTHENTICATION" Page
        When provide email id click on create an account
        Then landing on "CREATE AN ACCOUNT" page
        When  fill personal infromation click register
        Then should be landing on "MY ACCOUNT" page
        When click on Women element from header menu
        Then should be navigated to "WOMEN" category page
        When select the Product and click add to cart
        Then should get pop-up Product successfully added to your shopping cart
        When click the Proceed to checkout button to navigate SHOPPING-CART SUMMARY page
        Then Should be navigated to "SHOPPING-CART SUMMARY" Page
        When click the Proceed to checkout botton of SHOPPING-CART SUMMARY
        Then should be navigated to "ADDRESSES" page
        When click the Proceed to checkout botton of Address Page
        Then should be navigated to "SHIPPING" page
        When click the checkbox of Terms and conditions box 
        And click the Proceed to checkout boutton of Shopping page 
        Then should be navigated to "PLEASE CHOOSE YOUR PAYMENT METHOD" Page
        When select any one Payment method from display and click 
        Then should me navigate to "ORDER SUMMARY"
        When click the CONFIRM MY ORDER button
        Then You will navigated to "ORDER CONFIRMATION" Page 
        And You will receive Your order on My Store is complete message



