import React from "react";
import classNames from "classnames";

import "./index.less";
import { FAQItem, GamePlayItem } from "./components";
import Banner from "../assets/images/pc/img_banner@2x.png";
import HeaderBG from "../assets/images/pc/img_marbg@2x.png";
import HeaderLOGO from "../assets/images/pc/LOGO@2x.png";
import HeaderSignup from "../assets/images/pc/img_signup@2x.png";
import SuspensionBG from "../assets/images/pc/img_suspensionbg@2x.png";
import Twitter from "../assets/images/pc/Twitter@2x.png";
import Discord from "../assets/images/pc/Discord@2x.png";
import Medium from "../assets/images/pc/Medium@2x.png";
import IntroductionLeft from "../assets/images/pc/introductionLeft.png";
import IntroductionRight from "../assets/images/pc/introductionRight.png";
import Img_1 from "../assets/images/pc/img_1@2x.png";
import Img_ys from "../assets/images/pc/img_ys@2x.png";
import Img_ys1 from "../assets/images/pc/img_ys1@2x.png";
import Img_bg2 from "../assets/images/pc/img_bg2@2x.png";
import Tx_gamePlay1 from "../assets/images/pc/tx_gameplay1@2x.png";
import Tx_gamePlay2 from "../assets/images/pc/tx_gameplay2@2x.png";
import Img_free from "../assets/images/pc/img_free@2x.png";
import Img_survive from "../assets/images/pc/img_survive@2x.png";
import Img_explore from "../assets/images/pc/img_explore@2x.png";
import Img_earn from "../assets/images/pc/img_earn@2x.png";
import Img_token1 from "../assets/images/pc/img_token1@2x.png";
import Img_token2 from "../assets/images/pc/img_token2@2x.png";
import WASTELANDSETTLERS from "../assets/images/pc/WASTELANDSETTLERS@2x.png";
import Img_pool from "../assets/images/pc/img_pool@2x.png";
import Img_logo2 from "../assets/images/pc/img_logo2@2x.png";
import Img_staking from "../assets/images/pc/img_staking@2x.png";
import Img_roadmap from "../assets/images/pc/img_roadmap@2x.png";
import WASTELANDSETTLERS_r from "../assets/images/pc/WASTELANDSETTLERS_r@2x.png";
import Img_frank from "../assets/images/pc/img_frank@2x.png";
import Img_li from "../assets/images/pc/img_li@2x.png";
import FAQ_r from "../assets/images/pc/faq_r@2x.png";
import Img_faq1 from "../assets/images/pc/img_faq1@2x.png";
import Img_faq2 from "../assets/images/pc/img_faq2@2x.png";
import Img_ys4 from "../assets/images/pc/img_ys4@2x.png";
import Img_logo3 from "../assets/images/pc/img_logo3@2x.png";
import Copyright from "../assets/images/pc/copyright.png";
import { jumpToExternalLink } from "../utils/common";

const DesktopComponent = () => {
  const prefix = "page-home-desktop";

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
    <div className={classNames(prefix)}>
      <div className={classNames(`${prefix}-header`)}>
        <img
          className={classNames(`${prefix}-header-bg`)}
          src={HeaderBG}
          alt="headerBg"
        />
        <div className={classNames(`${prefix}-header-content`)}>
          <div className={classNames(`${prefix}-header-content-left`)}>
            <img src={HeaderLOGO} alt="HeaderLOGO" />
          </div>
          <div className={classNames(`${prefix}-header-content-center`)}>
            <div
              className={classNames(`${prefix}-header-content-center-active`)}
            >
              HOME
            </div>
            <div onClick={() => jumpToExternalLink("WHITERAPER")}>
              WHITERAPER
            </div>
            <div onClick={() => scrollToAnchor("TOKENOMICS")}>TOKENOMICS</div>
            <div onClick={() => scrollToAnchor("ROADMAP")}>ROADMAP</div>
            <div onClick={() => scrollToAnchor("FAQ")}>FAQ</div>
            <div>CONTACT</div>
          </div>
          <div className={classNames(`${prefix}-header-content-right`)}>
            <img
              src={HeaderSignup}
              alt="HeaderSignup"
              onClick={() => jumpToExternalLink("SIGNUP")}
            />
          </div>
        </div>
      </div>
      <div className={classNames(`${prefix}-suspension`)}>
        <img
          className={classNames(`${prefix}-suspension-bg`)}
          src={SuspensionBG}
          alt="SuspensionBG"
        />
        <div className={classNames(`${prefix}-suspension-content`)}>
          <div
            className={classNames(`${prefix}-suspension-content-item`)}
            onClick={() => jumpToExternalLink("Twitter")}
          >
            <img src={Twitter} alt="Twitter" />
          </div>
          <div
            className={classNames(`${prefix}-suspension-content-item`)}
            onClick={() => jumpToExternalLink("Discord")}
          >
            <img src={Discord} alt="Discord" />
          </div>
          <div
            className={classNames(`${prefix}-suspension-content-item`)}
            onClick={() => jumpToExternalLink("Medium")}
          >
            <img src={Medium} alt="Medium" />
          </div>
        </div>
      </div>
      <div className={classNames(`${prefix}-banner`)}>
        <img src={Banner} alt="banner" />
      </div>
      <div className={classNames(`${prefix}-introduction`)}>
        <div className={classNames(`${prefix}-introduction-header`)}>
          <div className={classNames(`${prefix}-introduction-header-img`)}>
            <img src={IntroductionLeft} alt="IntroductionLeft" />
          </div>
          <div className={classNames(`${prefix}-introduction-header-text`)}>
            INTRO
          </div>
          <div className={classNames(`${prefix}-introduction-header-img`)}>
            <img src={IntroductionRight} alt="IntroductionRight" />
          </div>
        </div>
        <div className={classNames(`${prefix}-introduction-content`)}>
          <div className={classNames(`${prefix}-introduction-content-left`)}>
            <img src={Img_1} alt="Img_1" />
          </div>
          <div className={classNames(`${prefix}-introduction-content-right`)}>
            <div
              className={classNames(`${prefix}-introduction-content-right-img`)}
            >
              <img src={Img_ys} alt="Img_ys" />
            </div>
            <div
              className={classNames(
                `${prefix}-introduction-content-right-text`
              )}
            >
              A fun and free Play-to-Earn game, you enjoy excitements of
              wasteland metaverse, with rewarding yourself with your efforts and
              contributions through NFT & DeFi.
              <div
                className={classNames(
                  `${prefix}-introduction-content-right-text-ys1`
                )}
              >
                <img src={Img_ys1} alt="Img_ys1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(`${prefix}-gamePlay`)}>
        <img
          className={classNames(`${prefix}-gamePlay-bg`)}
          src={Img_bg2}
          alt="Img_bg2"
        />
        <div className={classNames(`${prefix}-gamePlay-content`)}>
          <div className={classNames(`${prefix}-gamePlay-content-header`)}>
            <div
              className={classNames(`${prefix}-gamePlay-content-header-img`)}
            >
              <img src={Tx_gamePlay1} alt="Tx_gamePlay1" />
            </div>
            <div
              className={classNames(`${prefix}-gamePlay-content-header-text`)}
            >
              GAMEPLAY
            </div>
            <div
              className={classNames(`${prefix}-gamePlay-content-header-img`)}
            >
              <img src={Tx_gamePlay2} alt="Tx_gamePlay2" />
            </div>
          </div>
          <div className={classNames(`${prefix}-gamePlay-content-desc`)}>
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
      <div id="TOKENOMICS" className={classNames(`${prefix}-token`)}>
        <div className={classNames(`${prefix}-token-wastelandsettlers`)}>
          <img src={WASTELANDSETTLERS} alt="WASTELANDSETTLERS" />
        </div>
        <div className={classNames(`${prefix}-token-header`)}>
          <div className={classNames(`${prefix}-token-header-img`)}>
            <img src={IntroductionLeft} alt="IntroductionLeft" />
          </div>
          <div className={classNames(`${prefix}-token-header-text`)}>
            TOKEN ECONOMICS
          </div>
          <div className={classNames(`${prefix}-token-header-img`)}>
            <img src={IntroductionRight} alt="IntroductionRight" />
          </div>
        </div>
        <div className={classNames(`${prefix}-token-desc`)}>
          WASTE is an EVM compatible tokens deployed on multiple blockchains. WASTE has a supply cap of 1 billion tokens.
        </div>
        <div className={classNames(`${prefix}-token-distribution`)}>
          <div className={classNames(`${prefix}-token-distribution-title`)}>
            WASTE TOKEN DISTRIBUTION
          </div>
          <div className={classNames(`${prefix}-token-distribution-content`)}>
            <div
              className={classNames(`${prefix}-token-distribution-content-img`)}
            >
              <img src={Img_token1} alt="Img_token1" />
            </div>
          </div>
        </div>
        <div className={classNames(`${prefix}-token-waste`)}>
          <div className={classNames(`${prefix}-token-waste-title`)}>
            TOKEN RELEASE SCHEDULE OF STAKABKE $WASTE
          </div>
          <div className={classNames(`${prefix}-token-waste-content`)}>
            <div className={classNames(`${prefix}-token-waste-content-img`)}>
              <img src={Img_token2} alt="Img_token2" />
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(`${prefix}-pool`)}>
        <div className={classNames(`${prefix}-pool-header`)}>
          <div className={classNames(`${prefix}-pool-header-img`)}>
            <img src={IntroductionLeft} alt="IntroductionLeft" />
          </div>
          <div className={classNames(`${prefix}-pool-header-text`)}>
            CONTRIBUTION POOL
          </div>
          <div className={classNames(`${prefix}-pool-header-img`)}>
            <img src={IntroductionRight} alt="IntroductionRight" />
          </div>
        </div>
        <div className={classNames(`${prefix}-pool-content`)}>
          <div className={classNames(`${prefix}-pool-content-left`)}>
            <div className={classNames(`${prefix}-pool-content-left-img`)}>
              <img src={Img_pool} alt="Img_pool" />
            </div>
          </div>
          <div className={classNames(`${prefix}-pool-content-right`)}>
            <div className={classNames(`${prefix}-pool-content-right-top`)}>
              <div
                className={classNames(`${prefix}-pool-content-right-top-img`)}
              >
                <img src={Img_logo2} alt="Img_logo2" />
              </div>
            </div>
            <div className={classNames(`${prefix}-pool-content-right-bottom`)}>
              The Contribution Pool contains 5 elements: Fire, Earth, Metal,
              Water and Wood, it burns NFTs and sends contributors different
              element pool rewards to the contributors. Contribution Pool solves
              the problem of Hyperinflationary and that NFTs are hard to sell.
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(`${prefix}-reward`)}>
        <div className={classNames(`${prefix}-reward-header`)}>
          <div className={classNames(`${prefix}-reward-header-img`)}>
            <img src={IntroductionLeft} alt="IntroductionLeft" />
          </div>
          <div className={classNames(`${prefix}-reward-header-text`)}>
            STAKING REWARD
          </div>
          <div className={classNames(`${prefix}-reward-header-img`)}>
            <img src={IntroductionRight} alt="IntroductionRight" />
          </div>
        </div>
        <div className={classNames(`${prefix}-reward-desc`)}>
          <div className={classNames(`${prefix}-reward-desc-text`)}>
            19.89% of $WASTE tokens are allocated for staking incentives,
          </div>
          <div className={classNames(`${prefix}-reward-desc-text`)}>
            and they are emitted based on a pre-defined schedule as described in
            the following table.
          </div>
        </div>
        <div className={classNames(`${prefix}-reward-content`)}>
          <div className={classNames(`${prefix}-reward-content-img`)}>
            <img src={Img_staking} alt="Img_staking" />
          </div>
        </div>
      </div>
      <div id="ROADMAP" className={classNames(`${prefix}-roadmap`)}>
        <div className={classNames(`${prefix}-roadmap-WASTELANDSETTLERS_r`)}>
          <img src={WASTELANDSETTLERS_r} alt="WASTELANDSETTLERS_r" />
        </div>
        <div className={classNames(`${prefix}-roadmap-header`)}>
          <div className={classNames(`${prefix}-roadmap-header-img`)}>
            <img src={IntroductionLeft} alt="IntroductionLeft" />
          </div>
          <div className={classNames(`${prefix}-roadmap-header-text`)}>
            ROADMAP
          </div>
          <div className={classNames(`${prefix}-roadmap-header-img`)}>
            <img src={IntroductionRight} alt="IntroductionRight" />
          </div>
        </div>
        <div className={classNames(`${prefix}-roadmap-content`)}>
          <div className={classNames(`${prefix}-roadmap-content-img`)}>
            <img src={Img_roadmap} alt="Img_roadmap" />
          </div>
        </div>
      </div>
      {/* <div className={classNames(`${prefix}-team`)}>
        <div className={classNames(`${prefix}-team-header`)}>
          <div className={classNames(`${prefix}-team-header-img`)}>
            <img src={IntroductionLeft} alt="IntroductionLeft" />
          </div>
          <div className={classNames(`${prefix}-team-header-text`)}>
            THE TEAM
          </div>
          <div className={classNames(`${prefix}-team-header-img`)}>
            <img src={IntroductionRight} alt="IntroductionRight" />
          </div>
        </div>
        <div className={classNames(`${prefix}-team-content`)}>
          <div className={classNames(`${prefix}-team-content-item`)}>
            <div className={classNames(`${prefix}-team-content-item-left`)}>
              <div
                className={classNames(`${prefix}-team-content-item-left-img`)}
              >
                <img src={Img_frank} alt="Img_frank" />
              </div>
            </div>
            <div className={classNames(`${prefix}-team-content-item-right`)}>
              <div
                className={classNames(`${prefix}-team-content-item-right-name`)}
              >
                Frank
              </div>
              <div
                className={classNames(`${prefix}-team-content-item-right-desc`)}
              >
                Frank has over 20 years of working experience in gaming and
                blockchain industry. Former COO at UDAP Blockchain, Former
                Managing Director at True Corp China, Former BD Director at
                The9, Former Publishing Director at In-Fusio, he had MS from
                CSULB.
              </div>
            </div>
          </div>
          <div className={classNames(`${prefix}-team-content-item`)}>
            <div className={classNames(`${prefix}-team-content-item-left`)}>
              <div
                className={classNames(`${prefix}-team-content-item-left-img`)}
              >
                <img src={Img_li} alt="Img_li" />
              </div>
            </div>
            <div className={classNames(`${prefix}-team-content-item-right`)}>
              <div
                className={classNames(`${prefix}-team-content-item-right-name`)}
              >
                0xswiftfox
              </div>
              <div
                className={classNames(`${prefix}-team-content-item-right-desc`)}
              >
                A seasoned crypto player, bitcoin and blockchain advocator,
                former IBM consultant and senior executive of a public listed
                company.
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div id="FAQ" className={classNames(`${prefix}-supporters`)}>
        {/* <div className={classNames(`${prefix}-supporters-header`)}>
          <div className={classNames(`${prefix}-supporters-header-img`)}>
            <img src={IntroductionLeft} alt="IntroductionLeft" />
          </div>
          <div className={classNames(`${prefix}-supporters-header-text`)}>
            THE SUPPORTERS
          </div>
          <div className={classNames(`${prefix}-supporters-header-img`)}>
            <img src={IntroductionRight} alt="IntroductionRight" />
          </div>
        </div> */}
        <div className={classNames(`${prefix}-supporters-content`)}>
          <div className={classNames(`${prefix}-supporters-content-ys4`)}>
            <img src={Img_ys4} alt="Img_ys4" />
          </div>
          <div className={classNames(`${prefix}-supporters-content-item`)}>
            <div
              className={classNames(`${prefix}-supporters-content-item-top`)}
            >
              <div
                className={classNames(
                  `${prefix}-supporters-content-item-top-bg`
                )}
              >
                <img src={Img_faq1} alt="Img_faq1" />
              </div>
              <div
                className={classNames(
                  `${prefix}-supporters-content-item-top-title`
                )}
              >
                <div
                  className={classNames(
                    `${prefix}-supporters-content-item-top-title-text`
                  )}
                >
                  FAQ
                </div>
                <div
                  className={classNames(
                    `${prefix}-supporters-content-item-top-title-img`
                  )}
                >
                  <img src={FAQ_r} alt="FAQ_r" />
                </div>
              </div>
            </div>
            <div
              className={classNames(`${prefix}-supporters-content-item-center`)}
            >
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
            <div
              className={classNames(`${prefix}-supporters-content-item-bottom`)}
            >
              <img src={Img_faq2} alt="Img_faq2" />
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(`${prefix}-contact`)}>
        <div className={classNames(`${prefix}-contact-logo`)}>
          <img src={Img_logo3} alt="img_logo3" />
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
      <footer className={classNames(`${prefix}-footer`)}>
        <div>Copyright</div>
        <div className={classNames(`${prefix}-footer-copyright`)}>
          <img src={Copyright} alt="Copyright" />
        </div>
        <div>2022 Liquidplay LTD. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default DesktopComponent;
