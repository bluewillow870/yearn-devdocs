"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[356],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=u(r),h=a,p=k["".concat(i,".").concat(h)]||k[h]||c[h]||l;return r?n.createElement(p,o(o({ref:t},d),{},{components:r})):n.createElement(p,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},202:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return c}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o={},s="Risk Scores",i={unversionedId:"risk-score",id:"risk-score",isDocsHomePage:!1,title:"Risk Scores",description:"Yearn works with risk scores to quantify and assess the amount of risk of each strategy and vault, this document describes how we define risk vectors and work with them to reach a good balance between secure and innovative strategies",source:"@site/docs/security/risk-score.md",sourceDirName:".",slug:"/risk-score",permalink:"/security/risk-score",tags:[],version:"current",lastUpdatedBy:"Marco Guaspari Worms",lastUpdatedAt:1654094038,formattedLastUpdatedAt:"6/1/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"Multisig",permalink:"/security/multisig"}},u=[{value:"Strategy Risk Score",id:"strategy-risk-score",children:[{value:"Audit",id:"audit",children:[]},{value:"Code Review",id:"code-review",children:[]},{value:"Complexity",id:"complexity",children:[]},{value:"Longevity",id:"longevity",children:[]},{value:"Protocol Safety",id:"protocol-safety",children:[]},{value:"Team knowledge",id:"team-knowledge",children:[]},{value:"Testing score",id:"testing-score",children:[]},{value:"TVL Impact",id:"tvl-impact",children:[]}]},{value:"Vault Risk Score",id:"vault-risk-score",children:[]},{value:"Overall Risk Score",id:"overall-risk-score",children:[]}],d={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"risk-scores"},"Risk Scores"),(0,l.kt)("p",null,"Yearn works with risk scores to quantify and assess the amount of risk of each strategy and vault, this document describes how we define risk vectors and work with them to reach a good balance between secure and innovative strategies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#strategy-risk-score"},(0,l.kt)("strong",{parentName:"a"},"Strategy Risk Score"))," defines each dimension of risk for a strategy and how we quantify them"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#vault-risk-score"},(0,l.kt)("strong",{parentName:"a"},"Vault Risk Score"))," aggregates all strategies scores for a vault averaging by TVL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overall-risk-score"},(0,l.kt)("strong",{parentName:"a"},"Overall Risk Score"))," aggregates strategy/vault scores into overall scores")),(0,l.kt)("h2",{id:"strategy-risk-score"},"Strategy Risk Score"),(0,l.kt)("p",null,"Risk for different strategies is measured using a point scoring system developed internally from yearn\u2019s strategy deployment process. The higher the risk score number, the more riskier the strategy is. Calculating the risk assesses eight dimensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#audit"},"Audit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#code-review"},"Code Review")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#complexity"},"Complexity")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#longevity"},"Longevity")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#protocol-safety"},"Protocol Safety")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#team-knowledge"},"Team Knowledge")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#testing-score"},"Testing Score")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tvl-impact"},"TVL Impact"))),(0,l.kt)("p",null,"This risk framework is an ongoing process regarding the security of yearn\u2019s strategies. The security team realized that given yearn\u2019s unique approach to deploying strategies constantly, it couldn\u2019t rely on a waterfall process (heavy analysis/design, testing, several audits before a release, etc.) to deploy contracts. The strategies are deployed and capped by their risk score, and as we mitigate each dimension and improve something in the scoring, the strategy can grow its TVL. Think of it as calculated bets based on our internal security process. This allows yearn to compare the risk score of two strategies and prioritize mitigations/preventive actions like forming a committee to spread knowledge on the code, get more audits, migrate current code for improved versions of the strat, etc. "),(0,l.kt)("p",null,"The current version works for yearn\u2019s current needs. Still, we are always looking to improve and extend this scoring system to the vaults to be able to get a weighted average risk score that makes reasonable assumptions. We want to help our users know what\u2019s going on behind the scenes in the vaults. Vault risk scoring is still under development at the moment!"),(0,l.kt)("h3",{id:"audit"},"Audit"),(0,l.kt)("p",null,"Auditing is the process where an audit firm or an external security researcher reviews the code for any potential vulnerabilities and presents a report for mitigation. Audits usually take longer than an internal security review and are not immediately available given the demand for audits in the space, so most strategies are sent to production with no audits (thus high-risk score) to keep their TVL limited. This strikes a balance of validating the strategy in production with a calculated risk while we schedule a proper audit. The risk score helps us prioritize which strategies should get audited first, based on impact and other dimensions of scoring:"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Score")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Audit"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"5"),(0,l.kt)("td",null,"No audit by a trusted firm or security researcher")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"Audit by trusted firm or security researcher took place 6 months+ ago")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"Audit by trusted firm or security researcher took place 3 months+ ago")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"Audit less than 3 months ago. Independent audit by a trusted firm.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"Audit less than 3 months ago. In total, 3 or more independent audits by trusted firms."))),(0,l.kt)("h3",{id:"code-review"},"Code Review"),(0,l.kt)("p",null,"This is the process that reviews strategy code going to production. It is done in two major phases:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Phase 1:")," Two internal peers (strategists) review the strategy for any potential issues regarding handling accounts, profits, losses, etc. After this phase is completed, the strategy can go to ape.tax for live testing and validation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Phase 2:")," An internal security reviewer from yearn will review the code focusing on security concerns. Once phase 2 is completed, the strategy gets a risk score in all dimensions and is usually deemed enough for a strategy to go to production with limited TVL based on scoring."),(0,l.kt)("p",null,"After these steps a recurring review is scheduled, where either a second either internal or external security reviewer will have another look at the code:"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Score")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Code Review"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"5"),(0,l.kt)("td",null,"0 - 1 reviewer of the code only or most recent was done 6 months+ ago")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"2 reviewers of the code, the most recent of which was done 3+ months ago")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"3 reviewers of the code, the most recent of which was done 3+ months ago (1 of the reviewers is an internal security dev)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"4 reviewers of the code (2 peers and 2 internal security devs)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"5 reviewers of the code, (2 strategists peers and 2 security reviewers and either external protocol devs reviewed or external security researchers reviewed)"))),(0,l.kt)("h3",{id:"complexity"},"Complexity"),(0,l.kt)("p",null,"This is how the strategy earns its returns: is it a simple strategy like a masterchef staking or does it have complex mechanics like leverage, risk of liquidation, many protocols involved, etc? The more pieces and components it needs will require a higher complexity score. This score is key in an emergency to evaluate how difficult it is to mitigate a live issue:"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Score")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Complexity"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"5"),(0,l.kt)("td",null,"Strategy is very complex, uses leverage or debt, not easy to unwind. No health check")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"Uses leverage or debt, not easy to unwind. No health check")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"Has loss potential, withdrawal fee or requires detailed queue management to avoid losses. No health check")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"Strategy is simple, easy to migrate/unwind. Has health check")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"Strategy is simple, easy to migrate/unwide. No leverage and zero public unrestricted methods. Is highly unlikely to have a loss."))),(0,l.kt)("h3",{id:"longevity"},"Longevity"),(0,l.kt)("p",null,"How long the strategy has been running live on yearn.finance:"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Score")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Longevity"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"5"),(0,l.kt)("td",null,"New code. Did not go to ape tax before going live on yearn.finance")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"Code has been live less than a month")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"Code has been live 1-4 months")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"Code live 4+ months")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"Code live 8+ months. No critical issues and no changes in code base over this time"))),(0,l.kt)("h3",{id:"protocol-safety"},"Protocol Safety"),(0,l.kt)("p",null,"Internal evaluation from yearn\u2019s point-of-view of how resilient are the protocols that the strategy works with. It regards safety measures given the current DeFi security standards, it's heavily based on informed opinions regarding our internal assessments and due diligence compared to the top projects in DeFI. Accounts for multisig health, decentralization, bounty programs, audits, etc. "),(0,l.kt)("p",null,"We hope to improve this dimension with the help of the DeFI community to potentially use a standard scoring system that is widely accepted in the ecosystem to replace our current scoring table:"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Score")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Protocol Safety"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"5"),(0,l.kt)("td",null,"No due diligence (DD) document for this strategy. The protocol contracts used are very recent and not audited/verified. An EOA (externally owned account) owns the contracts and can upgrade them. ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"DD took place. Protocol contracts audited/verified. A multisig is required or contracts are Upgradable. Multisig has a low threshold of signers. No bounty program.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"DD took place. Protocol contracts are audited/verified by at least ",(0,l.kt)("strong",null,"one reputable audit "),"firm. A multisig with a good threshold is required and/or contracts are immutable. Has a good bounty program.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"DD took place. Currently deployed protocol contracts are audited/verified by at least ",(0,l.kt)("strong",null,"two reputable audit "),"firms. A multisig with a good threshold is required and/or contracts are immutable. Has a good bounty program.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"Protocols involved in contracts are trusted blue chip protocols with a good record of security. For example: Maker, Uniswap, Curve, AAVE, and Compound. These protocols handle at least all the criteria specified in item 2 and more."))),(0,l.kt)("h3",{id:"team-knowledge"},"Team knowledge"),(0,l.kt)("p",null,"Measures how much expertise on a strategy is shared amongst Yearn contributors. How many contributors can manage the strategy and respond in an emergency? The less people can manage and respond during an emergency the riskier the strategy assessment in this dimension:"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Score")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Team Knowledge"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"5"),(0,l.kt)("td",null,"1 person in the team is the only one that has in-depth knowledge of the strategy code")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"1 strategist has in-depth knowledge, and 1 strategist is somewhat familiar with the strategy code.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"2 strategists have in-depth knowledge of the strategy code.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"2 strategists have in-depth knowledge, and 1 strategist is somewhat familiar with the strategy code.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"Team of 3+ strategists are very familiar with the strategy code and the protocol the strategy is utilising. "))),(0,l.kt)("h3",{id:"testing-score"},"Testing score"),(0,l.kt)("p",null,"Testing score is a metric of how much of the codebase for the strategy has been tested. It uses the test coverage number as a reference, higher coverage means the developer/strategist took time to test most of the operations of the strategy in a unit test or fork environment. This score assumes a less tested strategy entails more risk since we know less about what is expected from the code:"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Score")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Testing Score"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"5"),(0,l.kt)("td",null,"Less than 20% coverage in testing")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"Less than 40% coverage in testing")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"40% to 80% coverage")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"Over 80% coverage")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"Over 90% coverage in testing. Second developer validated and added tests and also added new ones for uncovered cases while reviewing. You can pull repository and test are currently passing"))),(0,l.kt)("h3",{id:"tvl-impact"},"TVL Impact"),(0,l.kt)("p",null,"The TVL (total value locked) impact is a figure between 1 and 5 as well, where 5 is the highest impact labeled \u201cextreme\u201d (above 100MM) and 1 is the lowest impact in TVL less than 1MM. This table measures how to allocate to new riskier strategies without having a catastrophic event in case of a hack or issue. The lower the impact, the more likely yearn\u2019s treasury can recover from an incident. The TVL is measured in USD and grows dynamically based on strategies allocations onchain. Through ",(0,l.kt)("a",{parentName:"p",href:"https://yearn.watch/"},"yearn.watch")," we keep track of the TVL and risk score to make fund allocation decisions and mitigations if a strategy group has fallen into the \u201cred\u201d high-risk zone:"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Score")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"TVL Impact"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"5"),(0,l.kt)("td",null,"Extreme: > USD 100 MM")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"Very high: less than USD 100 MM")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"High: less than USD 50 MM")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"Medium: less than USD 10 MM")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"Low: less than USD 1 MM"))),(0,l.kt)("h2",{id:"vault-risk-score"},"Vault Risk Score"),(0,l.kt)("p",null,"A vault is a contract that holds funds for up to 20 strategies, the vault risk score is a TVL weighted average for each active strategy, for example:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Strategy X")," has ",(0,l.kt)("strong",{parentName:"p"},"5000$")," funds deposited",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Strategy Y")," has ",(0,l.kt)("strong",{parentName:"p"},"1000$")," funds deposited"),(0,l.kt)("p",null,"This vault's risk score would be calculated like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(\n  (Strategy X risk) * 5000\n  +\n  (Strategy Y risk) * 1000\n)\n\xf7\n6000\n")),(0,l.kt)("h2",{id:"overall-risk-score"},"Overall Risk Score"),(0,l.kt)("p",null,"Risks on some projects may have more relevance than others, so before calculating the overall score we first define the weight for the context we want to apply the framework on and then we do a weighted average between all risk dimensions and risk profiles:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Risk Profile")," = Weighted table of which risk dimension is more important given the current context",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Risk Score")," = Weighted average of all 8 dimensions using the risk profile weights"),(0,l.kt)("p",null,"A project may have many risk profiles, so for each profile the score is calculated and the final list that remains is then used with medians to reach the final result:"),(0,l.kt)("p",null,"The projects overall risk score will be presented in 3 variables:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"high:")," profile score for a risk-averse user"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"low:")," profile score for a risk-seeking user"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"median:")," profile score for a median representative user")),(0,l.kt)("p",null,"Where each one of these use the final list median:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"high:")," median + 1.5 IQR"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"low:")," median - 1.5 IQR"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"median:")," the median value from the distribution")),(0,l.kt)("p",null,"Where IQR stands for the interquartile range of the distribution"),(0,l.kt)("p",null,"Here is what the final result looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{\n  'overallScore': {\n    'high': 3.37675585284281,\n    'low': 2.5463210702341135,\n    'median': 2.9615384615384617,\n  },\n}\n")))}c.isMDXComponent=!0}}]);