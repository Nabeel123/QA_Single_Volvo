
import { BasePage } from './base.page.js';
import testData from "../testData/testData.json" assert { type: "json" };
import { driver } from '@wdio/globals';


export class VolvoElement {
    static Element(locator) {

        return new BasePage(locator);
    }
}

export class VolvoHomepage extends VolvoElement {

    static volvoLogo() { return this.Element(`(//img[@alt='Volvo'])[2]`) };
    static acceptCookiesBtn() { return this.Element(`//button[@id='onetrust-accept-btn-handler']`) };
    static homePageWelcomText() { return this.Element(`//h2[contains(text(),'Ideas that change the world are often the most controversial.')]`) };
    static homePageWelcomPara() { return this.Element(`//p[contains(text(),'After we introduced the 3-point safety belt, we')]`) };
    static videoSection() { return this.Element(`//video[@class='a dj dk dl dm dn do dp dq dr ds dt du dv dw']`) };
    static videoSectio1n() { return this.Element(`//video[@data-autoid='videoTestimonials:video-0']//source`) };




    static async validateVolvoHeaderLinks() {
        await driver.url(testData.base_url);
        await driver.maximizeWindow()
        await this.acceptCookiesBtn().waitForDisplayed();
        await this.acceptCookiesBtn().click();
        let isVolvoLogo = await this.volvoLogo().isDisplayed();
        let headerLinks  = await $$(`//ul//li//button//em`).map(async ele =>await ele.getText())
       
        return [isVolvoLogo,headerLinks]
    }
    static async validateHomePageWelcomText() {
        
        let HomePageWelcomText = await this.homePageWelcomText().getVisibleText();
        let homePageWelcomPara = await this.homePageWelcomPara().getVisibleText();
     
       
        return [HomePageWelcomText,homePageWelcomPara]
    }
    static async validateHomePageVideoSection() {
        
        let videoAttribute = await this.videoSection().getAttribute('preload')
     
       
        return videoAttribute
    }
    static async validateHomePageFeaturesSection() {
        let featuresText  = await $$(`//div[@class='a cu gh gi i']//div[@class='a']//p`).map(async ele =>await ele.getText())
     
       
        return [featuresText]
     
    }
    // static async validateHomePageVideoCardsSection() {
   
    //     await driver.refresh()
    //     await this.videoSectio1n().scrollIntoView()
    //     let videoCardSRCLinks  = await this.videoSectio1n().getAttribute('src')
     
    //    console.log(videoCardSRCLinks)
    //     return [videoCardSRCLinks]
     
    // }
    static async validateExploreModelsSection() {
        let exploreModelsLinks  = await $$(`//div[@data-autoid='springCarouselPane:carouselItem']`).map(async ele =>await ele.isClickable())
     
       
        return [exploreModelsLinks]
     
    }
    static async validateFooterLinks() {
        let footerLinks  = await $$(`//ul[@class='_SF-a _SF-av _SF-bk _SF-d _SF-e _SF-f _SF-g _SF-i _SF-n _SF-q _SF-w']//li//a`).map(async ele =>await ele.getAttribute('aria-label'))
     
       
        return [footerLinks]
     
    }
}


