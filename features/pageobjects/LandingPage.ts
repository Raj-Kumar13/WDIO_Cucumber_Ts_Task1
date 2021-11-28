import Data from "../Data/Data.json";
class LandingPage{


   async openPage(){
        await browser.url("http://automationpractice.com/index.php");
    }

    async clickSignIn(){
        const  clickElement = $("//a[@class='login']")
        await clickElement.click();
    }

}

export default  new LandingPage