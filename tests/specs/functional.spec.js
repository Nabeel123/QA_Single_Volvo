import { VolvoHomepage } from '../pageobjects/home.page.js';
import { assert, expect } from 'chai';
import testData from "../testData/testData.json" assert { type: "json" };


describe('Volvo Software Test Suite', () => {


    it('Volvo Header links Test', async () => {

        let [isVolvoLogo, headerLinks] = await VolvoHomepage.validateVolvoHeaderLinks();
        expect(isVolvoLogo).to.be.true;
        expect(headerLinks).to.have.members(headerLinks)
        console.log(headerLinks)
    })
    it('Volvo Home page welcome Text Test', async () => {

        let [HomePageWelcomText, homePageWelcomPara] = await VolvoHomepage.validateHomePageWelcomText();
        expect(HomePageWelcomText).to.contains(testData.homePageWelcomText1);
        expect(homePageWelcomPara).to.contains(testData.homePageWelcomPara);

    })


    it('Volvo Home page Video Section Test', async () => {

        let videoAttribute = await VolvoHomepage.validateHomePageVideoSection();

        expect(videoAttribute).to.be.equal('auto')



    })

    it('Volvo Home page features Section Test', async () => {

        let [featuresText] = await VolvoHomepage.validateHomePageFeaturesSection();

        expect(featuresText[0]).to.contains(testData.speedCapText);
        expect(featuresText[1]).to.contains(testData.HighwaypilotText);
        expect(featuresText[2]).to.contains(testData.DrivermonitoringcamerasText);
        expect(featuresText[3]).to.contains(testData.CareKeyText);


    })
    // it('Volvo Home page videos cards Section Test', async () => {

    //     let [videoCardSRCLinks] = await VolvoHomepage.validateHomePageVideoCardsSection();
    //   console.log(videoCardSRCLinks)
    //     // expect(videoCardSRCLinks[0]).to.contains('https://www.volvocars.com/images');
    //     // expect(videoCardSRCLinks[1]).to.contains('https://www.volvocars.com/images');
    //     // expect(videoCardSRCLinks[2]).to.contains('https://www.volvocars.com/images');
    //     // expect(videoCardSRCLinks[3]).to.contains('https://www.volvocars.com/images');

    // })

    it('Volvo Home page Explore models Section Test', async () => {

        let [exploreModelsLinks] = await VolvoHomepage.validateExploreModelsSection();
        expect(exploreModelsLinks).to.have.members([
            true, true, true,
            true, true, true,
            true, true
        ])
    })

    it('Volvo Home page Footer Links Test', async () => {

        let [footerLinks] = await VolvoHomepage.validateFooterLinks();
        expect(footerLinks).to.have.members([ 'Facebook', 'Instagram', 'Twitter', 'YouTube', 'Linkedin' ])

  
    })
});


