import { useState } from "react";
import classNames from "classnames";
import { Popup } from "antd-mobile";

import "./index.less";
import GamePlayItem from "../components/GamePlayItem";
import { Header, FAQItem } from "./components";
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
                onClick={() => jumpToExternalLink("SIGNUP")}
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
          {/* <Header title="THE SUPPORTERS" /> */}
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
              <FAQItem
                title="How do I start to play the game?"
                desc={
                  <div>
                    When you start the game, there is a tutorial that will guide
                    you through to let you know the basic elements of the game:
                    Pick fruits, hunt, have a baby and explore. You may hunt or
                    find fruits, so you have basic foods to survive, or you can
                    buy workplaces and tools to help you to collect other foods
                    to increase your villagers' happiness. You may explore and
                    collect chests, you may find other people, weapons, armories
                    and even pets. You can either wear those NFTs, or contribute
                    those NFTs through the portal to earn $WASTE tokens right
                    away.
                  </div>
                }
                initStatus={true}
              />
              <FAQItem
                title="How can I participate in the game and earn income?"
                desc={
                  <div>
                    <div>
                      There will be multiple ways for players to participate in
                      the game economy for both Active and Passive players.
                    </div>
                    <div>
                      Players don't need to pay any fee to play the game, it's
                      free to play. Players just collect food, go exploring and
                      contribute your NFTs to earn game tokens. It's slow, but
                      what you got is what you earned.
                    </div>
                    <div>
                      Or, you can purchase workplaces to produce foods, open
                      chests to get more NFTs, trade NFTs with other players,
                      fight in the arena to get weekly PVP rewards.
                    </div>
                  </div>
                }
              />
              <FAQItem
                title="How do I buy Player Identity NFTs?"
                desc={
                  <div>
                    <div>
                      Identity NFTs are only for pre-sale, please keep an eye on
                      Wasteland Settlers website and follow us on social media
                      for the dates of upcoming events.
                    </div>
                    <br />
                    <div>
                      Identity NFT provides players additional features, and
                      also your profile picture shows different colored frames
                      in the game.
                    </div>
                    <div>
                      Green Identity - Increase all player's villagers attribute
                      7% when the villager has a job assigned. Blue Identity -
                      Increase all player's villagers attribute 14% when the
                      villager has a job assigned. Orange Identity - Increase
                      all player's villagers attribute 21% when the villager has
                      a job assigned.
                    </div>
                  </div>
                }
              />
              <FAQItem
                title="Can I use my existing NFT as my profile picture?"
                desc={
                  <div>
                    <div>
                      Yes, currently, we are supporting many NFT and you can use
                      your NFT as the profile picture if your NFT is in the
                      list.
                    </div>
                    <br />
                    <div>
                      Bored Ape Yacht Club, Mutant Ape Yacht Club, CryptoPunks,
                      Bored Ape Kennel Club, MURI by Haus, Azuki, CLONE X,
                      ZombieClub Token, Doodles, Meebits, CrypToadz by GREMPLIN,
                      Bored Ape Chemistry Club, Cool Cats NFT, DourDarcels,
                      World of Women, GNSS by MGXS, MPL Official, 3Landers,
                      CyberBrokers, Gutter Juice, NFT Worlds, Invisible Friends,
                      mfers, Loser Club Official, RaidParty Fighters, Kibatsu
                      Mecha, VeeFriends, Metroverse Genesis, Gutter Cat Gang, I
                      Like You, You're Weird, SKULLTOONS Gavroche, Cool Pets
                      NFT, White Sands Parcel Pass, Decentraland, Chromie
                      Squiggle by Snowfro, RaidParty Heroes, Coolman's Universe,
                      hausphases by Haus, Kaiju Kingz, Villagers of XOLO,
                      Decentral Games ICE Poker, Llamaverse Genesis, ASM Brains,
                      Acrocalypse, Karafuru, Super Ordinary Villains, Broskees
                      NFTs, MultiverseVM, Cryptoshack Club, PhantaBear
                    </div>
                  </div>
                }
              />
              <FAQItem
                title="What is the tokennomics model in Wasteland Settlers?"
                desc={
                  <div>
                    <div>
                      The $WASTE token is the protocol token from the Wasteland
                      Settlers ecosystem. It is an ERC-20 token deployed on the
                      Ethereum blockchain. $WASTE has a supply cap of 1 billion
                      tokens. Players can purchase NFTs with $WASTE in the game,
                      get rewards from the contribution pool, and stake $WASTE
                      to get additional token rewards.
                    </div>
                    <br />
                    <div>
                      The Wasteland Settlers community owns 85% of the total
                      $WASTE tokens. Others are reserved for private investors
                      and the team. Details of the allocation are listed in the
                      following table:
                    </div>
                    <img
                      style={{ width: "100%" }}
                      src={Img_token1}
                      alt="Img_token1"
                    />
                  </div>
                }
              />
              <FAQItem
                title="When will be airdrop?"
                desc={
                  <div>
                    The airdrop is definitely there for fans of game, please
                    keep an eye on Wasteland Settlers website and follow us on
                    social media for the dates of upcoming airdrop
                  </div>
                }
              />
              <FAQItem
                title="When will Wasteland Settlers be accessed to play?"
                desc={
                  <div>
                    Please keep an eye on Wasteland Settlers website and follow
                    us on social media for the dates of launch.
                  </div>
                }
              />
              <FAQItem
                title="Is Wasteland Settlers a free-to-play game?"
                desc={<div>Yes</div>}
              />
              <FAQItem
                title="Compared with other blockchain game, what are the key advantages of Wasteland Settlers?"
                desc={
                  <div>
                    <div>We summarized the differentiations below:</div>
                    <ul>
                      <li>
                        Wasteland is a <b>free-to-play game</b>, you don't need
                        to pay any token upfront to play the game. Everyone is
                        welcome to start enjoying the fun of the game, learning
                        how to play and understanding tokenomics and calculation
                        of ROI. Of course, purchasing tools and chests will help
                        the players to gain more from exploration and rewards.
                      </li>
                      <li>
                        Wasteland Settlers is wasteland-type RPG game We are
                        building the wasteland metaverse, players survives in
                        the nuclear-bombed land.{" "}
                        <b>Players don't need to level up</b>, simply explore
                        the land and equip their villagers, or increase the
                        power of the space shuttle for launching it one day to
                        find a new planet.
                      </li>
                      <li>
                        An unique tokenomics - Contribution Pool, it{" "}
                        <b>
                          solves the problem of Hyperinflationary and that NFTs
                          are hard to sell
                        </b>
                        . The Contribution Pool takes all NFTs and rewards
                        contributors fairly. Every player enjoys lifetime
                        rewards from the Contribution Pool, the more
                        contributions, the more rewards.
                      </li>
                      <li>
                        <b>
                          The future of this game is driven by the community, in
                          which 85% of $WASTE tokens are distributed to the
                          community
                        </b>
                        , the DAO tokens are staked and used based on the
                        voting. The projects will move to DAO model of
                        governance.. The source codes are open and audited. It's
                        transparent to all players.
                      </li>
                    </ul>
                  </div>
                }
              />
              <FAQItem
                title="Where can I trade tokens and NFTs from Wasteland Settlers?"
                desc={
                  <div>
                    We are engaging with major exchanges and DEXs. please keep
                    an eye on Wasteland Settlers website and follow us on social
                    media. To trade NFTs, you can find ‘Market' in the game to
                    trade NFTs directly.
                  </div>
                }
              />
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
            <div
              className={classNames(`${prefix}-popup-container-nav-item`)}
              onClick={() => jumpToExternalLink("WHITERAPER")}
            >
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
              <img
                src={Button_signup}
                alt="Button_signup"
                onClick={() => jumpToExternalLink("SIGNUP")}
              />
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
