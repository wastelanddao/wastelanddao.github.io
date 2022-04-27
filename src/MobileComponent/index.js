import { useState } from "react";
import classNames from "classnames";
import { Popup } from "antd-mobile";

import "./index.less";
import GamePlayItem from "../components/GamePlayItem";
import { Header, FAQItem } from "./components";
import { FAQ } from "../utils/constant";
import LOGO from "../assets/images/mobile/LOGO@2x.png";
import Icon_mar from "../assets/images/mobile/icon_mar@2x.png";
import Img_banner from "../assets/images/mobile/img_banner@2x.png";
import Img_1 from "../assets/images/mobile/img_1@2x.png";
import Img_ys1 from "../assets/images/mobile/img_ys1@2x.png";
import Img_ys2 from "../assets/images/mobile/img_ys2@2x.png";
import Img_ys3 from "../assets/images/mobile/img_ys3@2x.png";
import Img_bg2 from "../assets/images/mobile/img_bg2@2x.png";
import Tx_gameplay1 from "../assets/images/mobile/tx_gameplay1@2x.png";
import Tx_gameplay2 from "../assets/images/mobile/tx_gameplay2@2x.png";
import Img_free from "../assets/images/mobile/img_free@2x.png";
import Img_survive from "../assets/images/mobile/img_survive@2x.png";
import Img_explore from "../assets/images/mobile/img_explore@2x.png";
import Img_earn from "../assets/images/mobile/img_earn@2x.png";
import Img_token1 from "../assets/images/mobile/img_token1@2x.png";
import Img_token2 from "../assets/images/mobile/img_token2@2x.png";
import WASTELANDSETTLERS_l from "../assets/images/mobile/WASTELANDSETTLERS_l@2x.png";
import WASTELANDSETTLERS_r from "../assets/images/mobile/WASTELANDSETTLERS_r@2x.png";
import Img_pool from "../assets/images/mobile/img_pool@2x.png";
import Img_reward from "../assets/images/mobile/img_reward@2x.png";
import Img_roadmap from "../assets/images/mobile/img_roadmap@2x.png";
import Img_frank from "../assets/images/mobile/img_frank@2x.png";
import Img_li from "../assets/images/mobile/img_li@2x.png";
import Img_faq1 from "../assets/images/mobile/img_faq1@2x.png";
import Img_faq3 from "../assets/images/mobile/img_faq3@2x.png";
import Img_faq2 from "../assets/images/mobile/img_faq2@2x.png";
import Img_ys4 from "../assets/images/mobile/img_ys4@2x.png";
import Img_logo4 from "../assets/images/mobile/img_logo4@2x.png";
import Twitter from "../assets/images/mobile/Twitter@2x.png";
import Medium from "../assets/images/mobile/Medium@2x.png";
import Discord from "../assets/images/mobile/Discord@2x.png";
import Icon_c from "../assets/images/mobile/icon_c@2x.png";
import Button_signup from "../assets/images/mobile/button_signup@2x.png";
import { jumpToExternalLink } from "../utils/common";

const MobileComponent = () => {
  const prefix = "page-home-mobile";

  const [visible, setVisible] = useState(false);

  const handleMenu = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className={classNames(prefix)} id="Home">
        <div className={classNames(`${prefix}-header`)}>
          <div
            className={classNames(`${prefix}-header-logo`)}
            onClick={() => scrollToAnchor("Home")}
          >
            <img src={LOGO} alt="LOGO" />
          </div>
          <div className={classNames(`${prefix}-header-signup`)}>
            <div className={classNames(`${prefix}-header-signup-content`)}>
              <div
                className={classNames(`${prefix}-header-signup-content-text`)}
              >
                SIGN UP
              </div>
            </div>
          </div>
          <div
            className={classNames(`${prefix}-header-menu`)}
            onClick={handleMenu}
          >
            <img src={Icon_mar} alt="Icon_mar" />
          </div>
        </div>
        <div className={classNames(`${prefix}-banner`)}>
          <img src={Img_banner} alt="Img_banner" />
        </div>
        <div className={classNames(`${prefix}-introduction`)}>
          <div className={classNames(`${prefix}-introduction-header`)}>
            <Header title="INTRO" />
          </div>
          <div className={classNames(`${prefix}-introduction-content`)}>
            <img src={Img_1} alt="Img_1" />
            <div className={classNames(`${prefix}-introduction-content-ys`)}>
              <img src={Img_ys1} alt="Img_ys1" />
            </div>
          </div>
          <div className={classNames(`${prefix}-introduction-desc`)}>
            A fun and free Play-to-Earn game, you enjoy excitements of wasteland
            metaverse, with rewarding yourself with your efforts and
            contributions through NFT & DeFi.
            <div className={classNames(`${prefix}-introduction-desc-ys1`)}>
              <img src={Img_ys2} alt="Img_ys2" />
            </div>
            <div className={classNames(`${prefix}-introduction-desc-ys2`)}>
              <img src={Img_ys3} alt="Img_ys3" />
            </div>
          </div>
        </div>
        <div className={classNames(`${prefix}-gamePlay`)}>
          <div className={classNames(`${prefix}-gamePlay-bg`)}>
            <img src={Img_bg2} alt="Img_bg2" />
          </div>
          <div className={classNames(`${prefix}-gamePlay-content`)}>
            <div className={classNames(`${prefix}-gamePlay-content-header`)}>
              <div
                className={classNames(`${prefix}-gamePlay-content-header-img`)}
              >
                <img src={Tx_gameplay1} alt="Tx_gameplay1" />
              </div>
              <div
                className={classNames(`${prefix}-gamePlay-content-header-text`)}
              >
                GAMEPLAY
              </div>
              <div
                className={classNames(`${prefix}-gamePlay-content-header-img`)}
              >
                <img src={Tx_gameplay2} alt="Tx_gameplay2" />
              </div>
            </div>
            <div className={classNames(`${prefix}-gamePlay-content-free`)}>
              <img src={Img_free} alt="Img_free" />
            </div>
            <div className={classNames(`${prefix}-gamePlay-content-body`)}>
              <GamePlayItem
                img={Img_survive}
                text="SURVIVE"
                desc="Hunt, collect and buy workplaces to make different foods to survive"
              />
              <GamePlayItem
                img={Img_explore}
                text="EXPLORE"
                desc="Send your villagers out, find the unknown chests and upgrade your villagers"
              />
              <GamePlayItem
                img={Img_earn}
                text="EARN"
                desc="Contribute your collected NFTs to earn $WASTE for a lifetime."
              />
            </div>
          </div>
        </div>
        <div className={classNames(`${prefix}-token`)} id="TOKENOMICS">
          <div className={classNames(`${prefix}-token-ys`)}>
            <img src={WASTELANDSETTLERS_l} alt="WASTELANDSETTLERS_l" />
          </div>
          <Header title="TOKEN ECONOMICS" />
          <div className={classNames(`${prefix}-token-desc`)}>
            WASTE is an EVM compatible tokens deployed on multiple blockchains. WASTE has a supply cap of 1 billion tokens.
          </div>
          <div className={classNames(`${prefix}-token-distribution`)}>
            <div className={classNames(`${prefix}-token-distribution-title`)}>
              WASTE TOKEN DISTRIBUTION
            </div>
            <div className={classNames(`${prefix}-token-distribution-content`)}>
              <img src={Img_token1} alt="Img_token1" />
            </div>
          </div>
          <div className={classNames(`${prefix}-token-waste`)}>
            <div className={classNames(`${prefix}-token-waste-title`)}>
              TOKEN RELEASE SCHEDULE OF STAKABKE $WASTE
            </div>
            <div className={classNames(`${prefix}-token-waste-content`)}>
              <img src={Img_token2} alt="Img_token2" />
            </div>
          </div>
        </div>
        <div className={classNames(`${prefix}-pool`)}>
          <Header title="CONTRIBUTION POOL" />
          <div className={classNames(`${prefix}-pool-img`)}>
            <img src={Img_pool} alt="Img_pool" />
          </div>
          <div className={classNames(`${prefix}-pool-desc`)}>
            The Contribution Pool contains 5 elements: Fire, Earth, Metal, Water
            and Wood, it burns NFTs and sends contributors different element
            pool rewards to the contributors. Contribution Pool solves the
            problem of Hyperinflationary and that NFTs are hard to sell.
          </div>
        </div>
        <div className={classNames(`${prefix}-reward`)}>
          <Header title="STAKING REWARD" />
          <div className={classNames(`${prefix}-reward-desc`)}>
            19.89% of $WASTE tokens are allocated for staking incentives, and
            they are emitted based on a pre-defined schedule as described in the
            following table.
          </div>
          <div className={classNames(`${prefix}-reward-img`)}>
            <img src={Img_reward} alt="Img_reward" />
          </div>
        </div>
        <div className={classNames(`${prefix}-roadmap`)} id="ROADMAP">
          <Header title="ROADMAP" />
          <div className={classNames(`${prefix}-roadmap-img`)}>
            <img src={Img_roadmap} alt="Img_roadmap" />
          </div>
        </div>
        {/* <div className={classNames(`${prefix}-team`)}>
          <div className={classNames(`${prefix}-team-ys`)}>
            <img src={WASTELANDSETTLERS_r} alt="WASTELANDSETTLERS_r" />
          </div>
          <Header title="THE TEAM" />
          <div className={classNames(`${prefix}-team-member`)}>
            <div className={classNames(`${prefix}-team-member-left`)}>
              <img src={Img_frank} alt="Img_frank" />
            </div>
            <div className={classNames(`${prefix}-team-member-right`)}>
              <div className={classNames(`${prefix}-team-member-right-name`)}>
                Frank
              </div>
              <div className={classNames(`${prefix}-team-member-right-desc`)}>
                Frank is a gamer and blockchain enthusiast. He had senior
                position in a top 10 blockchain project, and also senior
                positions in many multinational companies and listed companies.
                He has more than 20 years of gaming and blockchain working
                experience.
              </div>
            </div>
          </div>
          <div className={classNames(`${prefix}-team-member`)}>
            <div className={classNames(`${prefix}-team-member-left`)}>
              <img src={Img_li} alt="Img_li" />
            </div>
            <div className={classNames(`${prefix}-team-member-right`)}>
              <div className={classNames(`${prefix}-team-member-right-name`)}>
                0xswiftfox
              </div>
              <div className={classNames(`${prefix}-team-member-right-desc`)}>
                A seasoned crypto player, bitcoin and blockchain advocator,
                former IBM consultant and senior executive of a public listed
                company.
              </div>
            </div>
          </div>
        </div> */}
        <div className={classNames(`${prefix}-supporters`)} id="FAQ">
          <Header title="THE SUPPORTERS" />
          <div className={classNames(`${prefix}-supporters-content`)}>
            <div className={classNames(`${prefix}-supporters-content-ys`)}>
              <img src={Img_ys4} alt="Img_ys4" />
            </div>
            <div className={classNames(`${prefix}-supporters-content-top`)}>
              <img src={Img_faq1} alt="Img_faq1" />
              <div
                className={classNames(`${prefix}-supporters-content-top-ys`)}
              >
                <div
                  className={classNames(
                    `${prefix}-supporters-content-top-ys-text`
                  )}
                >
                  FAQ
                </div>
                <div
                  className={classNames(
                    `${prefix}-supporters-content-top-ys-img`
                  )}
                >
                  <img src={Img_faq3} alt="Img_faq3" />
                </div>
              </div>
            </div>
            <div className={classNames(`${prefix}-supporters-content-center`)}>
              {FAQ.map((item, index) => {
                return (
                  <FAQItem
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    initStatus={index === 0}
                  />
                );
              })}
            </div>
            <div className={classNames(`${prefix}-supporters-content-bottom`)}>
              <img src={Img_faq2} alt="Img_faq2" />
            </div>
          </div>
        </div>
        <div className={classNames(`${prefix}-contact`)}>
          <div className={classNames(`${prefix}-contact-logo`)}>
            <img src={Img_logo4} alt="Img_logo4" />
          </div>
          <div className={classNames(`${prefix}-contact-suspension`)}>
            <div
              className={classNames(`${prefix}-contact-suspension-item`)}
              onClick={() => jumpToExternalLink("Twitter")}
            >
              <img src={Twitter} alt="Twitter" />
            </div>
            <div
              className={classNames(`${prefix}-contact-suspension-item`)}
              onClick={() => jumpToExternalLink("Medium")}
            >
              <img src={Medium} alt="Medium" />
            </div>
            <div
              className={classNames(`${prefix}-contact-suspension-item`)}
              onClick={() => jumpToExternalLink("Discord")}
            >
              <img src={Discord} alt="Discord" />
            </div>
          </div>
        </div>
      </div>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        position="top"
        bodyStyle={{ height: "100vh" }}
        className={classNames(`${prefix}-popup`)}
      >
        <div className={classNames(`${prefix}-popup-container`)}>
          <div className={classNames(`${prefix}-popup-container-header`)}>
            <div
              className={classNames(`${prefix}-popup-container-header-ys`)}
              onClick={handleCancel}
            >
              <img src={Icon_c} alt="Icon_c" />
            </div>
            <div
              className={classNames(`${prefix}-popup-container-header-logo`)}
            >
              <img src={LOGO} alt="LOGO" />
            </div>
          </div>
          <div className={classNames(`${prefix}-popup-container-nav`)}>
            <div
              className={classNames(`${prefix}-popup-container-nav-item`)}
              onClick={() => {
                scrollToAnchor("Home");
                setVisible(false);
              }}
            >
              HOME
            </div>
            <div className={classNames(`${prefix}-popup-container-nav-item`)}>
              WHITERAPER
            </div>
            <div
              className={classNames(`${prefix}-popup-container-nav-item`)}
              onClick={() => {
                scrollToAnchor("TOKENOMICS");
                setVisible(false);
              }}
            >
              TOKENOMICS
            </div>
            <div
              className={classNames(`${prefix}-popup-container-nav-item`)}
              onClick={() => {
                scrollToAnchor("ROADMAP");
                setVisible(false);
              }}
            >
              ROADMAP
            </div>
            <div
              className={classNames(`${prefix}-popup-container-nav-item`)}
              onClick={() => {
                scrollToAnchor("FAQ");
                setVisible(false);
              }}
            >
              FAQ
            </div>
            <div className={classNames(`${prefix}-popup-container-nav-item`)}>
              CONTACT
            </div>
          </div>
          <div className={classNames(`${prefix}-popup-container-footer`)}>
            <div
              className={classNames(`${prefix}-popup-container-footer-signup`)}
            >
              <img src={Button_signup} alt="Button_signup" />
            </div>
            <div
              className={classNames(`${prefix}-popup-container-footer-contact`)}
            >
              <div
                className={classNames(
                  `${prefix}-popup-container-footer-contact-item`
                )}
                onClick={() => jumpToExternalLink("Twitter")}
              >
                <img src={Twitter} alt="Twitter" />
              </div>
              <div
                className={classNames(
                  `${prefix}-popup-container-footer-contact-item`
                )}
                onClick={() => jumpToExternalLink("Medium")}
              >
                <img src={Medium} alt="Medium" />
              </div>
              <div
                className={classNames(
                  `${prefix}-popup-container-footer-contact-item`
                )}
                onClick={() => jumpToExternalLink("Discord")}
              >
                <img src={Discord} alt="Discord" />
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default MobileComponent;
