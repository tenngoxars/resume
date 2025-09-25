//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach(responsiveNavItem => {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Language toggle and translation handling
    const translations = {
        en: {
            'page.title': 'Zecheng Li | Developer Advocacy & Technical Communications',
            'about.navName': 'Zecheng Li',
            'nav.about': 'About',
            'nav.education': 'Education',
            'nav.experience': 'Experience',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.self': 'Self Assessment',
            'nav.honors': 'Honors',
            'controls.toggle': '中文',
            'about.fullName': 'Zecheng Li',
            'about.tagline': 'Developer Advocacy & Technical Communications · 10 Years’ Experience',
            'about.contact': "<strong>Location:</strong> Shenzhen · <strong>Email:</strong> <a href='mailto:tenngoxars@hotmail.com'>tenngoxars@hotmail.com</a> · <strong>Phone/WeChat:</strong> 180090294792 · <strong>Age:</strong> 32",
            'about.focus': 'Career Focus: Content Strategy / Open Source Operations / Technical Communications',
            'education.sectionTitle': 'Education',
            'education.university.name': 'Shaanxi University of Technology',
            'education.university.degree': 'Bachelor of Economics',
            'education.university.dates': 'Sep 2011 – Jul 2015',
            'experience.sectionTitle': 'Professional Experience',
            'experience.gitee.title': 'Gitee | Head of Content',
            'experience.gitee.summary': 'Lead content communications, developer ecosystem building, and product promotion across open source, DevOps, and AI offerings',
            'experience.gitee.content.heading': 'Content Strategy & Distribution',
            'experience.gitee.content.item1.main': "Owned planning and creation for Gitee’s owned-media channels (WeChat, Zhihu, Bilibili, Channels, etc.)",
            'experience.gitee.content.item1.result1': 'Grew WeChat followers 733% and Zhihu followers 161% in five years, reaching ~22M total impressions',
            'experience.gitee.content.item1.result2': 'Produced 1,000+ articles and videos covering product features, developer stories, and technical methodologies',
            'experience.gitee.ecosystem.heading': 'Developer Ecosystem & Product Evangelism',
            'experience.gitee.ecosystem.item1.main': 'Launched the “Open Source Compass” program, covering topic selection, writing, and page development end to end',
            'experience.gitee.ecosystem.item1.result1': 'Earned 3,200+ stars, 110+ contributors, and 110K+ visits on Gitee',
            'experience.gitee.ecosystem.item2': 'Authored and promoted the 2021–2023 China Open Source Developer Report, establishing industry influence',
            'experience.gitee.ecosystem.item3': 'Co-created developer activities such as livestreams, salons, launches, and feature coverage',
            'experience.gitee.devops.heading': 'DevOps Product Communications & Intelligent R&D Content',
            'experience.gitee.devops.item1': 'Co-built the content framework for Gitee DevSecOps across intelligent delivery, collaboration, governance, and compliance',
            'experience.gitee.devops.item2': 'Produced feature explainers, go-to-market copy, and video scripts to accelerate enterprise adoption',
            'experience.gitee.devops.item3': 'Repurposed assets for proposals, industry events, media briefings, and customer training to unify messaging',
            'experience.gitee.ai.heading': 'Moli Ark Platform & AI Ecosystem Storytelling',
            'experience.gitee.ai.item1': 'Created narratives for domestic LLM releases, fine-tuning, Serverless APIs, integrations, AI apps, and compute marketplace',
            'experience.gitee.ai.item2': 'Partnered with product and engineering on model guides, tutorials, and scripts that drove traffic and conversions',
            'experience.gitee.pr.heading': 'PR & Marketing Collaboration',
            'experience.gitee.pr.item1': 'Delivered press materials for government, enterprise, media, and developer audiences—cited by MIIT and tier-one outlets',
            'experience.gitee.pr.item2': 'Supported sales, business, and marketing with launch copy, campaign pages, and brand storytelling',
            'experience.gitee.pr.item3': 'Provided naming, messaging, and channel plans for product releases and feature rollouts',
            'experience.gitee.dates': 'Feb 2020 – Present',
            'experience.pgyer.title': 'Pgyer Developer Platform | Marketing & Operations Manager',
            'experience.pgyer.summary': 'Led growth and user operations for developer tooling across Chinese and English channels',
            'experience.pgyer.item1': 'Owned content and growth for three tools (beta distribution, Tracup, FrontJS)',
            'experience.pgyer.item2': 'Produced the “Coder Legends” interview series featuring 25 developer stories',
            'experience.pgyer.item3': 'Created product demo videos covering scripting, filming, and editing',
            'experience.pgyer.item4': 'Managed Baidu/Google SEO and SEM campaigns, lifting traffic by 40%+',
            'experience.pgyer.item5': 'Drove overseas growth via Facebook and Quora content plus paid campaigns',
            'experience.pgyer.item6': 'Growth impact: scaled Pgyer from 700K to 2M users; Tracup to six figures; FrontJS to five figures',
            'experience.pgyer.dates': 'Apr 2016 – Jul 2019',
            'experience.lieyun.title': 'Lieyunwang | Technology Reporter',
            'experience.lieyun.item1': 'Published 62 startup features, including three deep interviews with Series A founders',
            'experience.lieyun.dates': 'Sep 2015 – Apr 2016',
            'skills.sectionTitle': 'Core Skills',
            'skills.item1': 'Content Creation: Craft developer-friendly docs, tutorials, and marketing assets across languages and formats with strong structure and clarity',
            'skills.item2': 'Community Operations: Navigate open-source and tech social ecosystems; plan livestreams, content drives, and campaigns that sustain engagement',
            'skills.item3': 'Product Evangelism: Led DevOps and AI launches by aligning product, engineering, and marketing to deliver features and convert users',
            'skills.item4': 'Technical Fluency: Understand front/back-end workflows, ship lightweight web apps, and leverage AI tools for prototyping and iteration',
            'projects.sectionTitle': 'Projects & Portfolio',
            'projects.content.heading': 'Content Highlights',
            'projects.content.item1': "<strong><a href='https://gitee.com/gitee-community/opensource-guide' target='_blank' rel='noopener'>Open Source Compass</a></strong>: Open-source knowledge project with 3K+ stars, 100+ contributors, and 100K+ annual views",
            'projects.content.item2': '“China Open Source Developer Report (2021-2024)”: Lead writer and structure designer with industry-wide impact',
            'projects.content.item3': "TVC/Motion Graphics: Produced the <a href='https://www.xinpianchang.com/a11316121' target='_blank' rel='noopener'>Gitee 10th Anniversary TVC</a>, <a href='https://www.xinpianchang.com/a12118602' target='_blank' rel='noopener'>Gitee Enterprise Edition MG</a>, and <a href='https://www.xinpianchang.com/a13153675' target='_blank' rel='noopener'>Moli Ark (Gitee AI) MG</a>",
            'projects.content.item4': "Technical Articles (recent originals):<ul><li><a href='https://mp.weixin.qq.com/s/tFkFUrCuG3z1je2l_-LKgQ' target='_blank' rel='noopener'>Gitee AI Joins Dify to Accelerate AI App Delivery</a></li><li><a href='https://mp.weixin.qq.com/s/UKy6D9SNdX3rtBtezcbD2A' target='_blank' rel='noopener'>Autoflow + Gitee AI: Build a Local Knowledge-Base Bot without Coding</a></li><li><a href='https://mp.weixin.qq.com/s/Gf-Kl3wJLJXafty-UXaaYw' target='_blank' rel='noopener'>Gitee SBOM Scanning Protects the Open-Source Supply Chain</a></li><li><a href='https://mp.weixin.qq.com/s/kLlcwMJ4xkx8H_WXLmIfMQ' target='_blank' rel='noopener'>DeepSeek and Open Source: Fertile Ground for AI Breakthroughs</a></li></ul>",
            'projects.serchain.heading': 'Serchain | Ethereum Transfer Explorer (Vibe Coding side project)',
            'projects.serchain.summary': 'Open-source transfer explorer focused on visualizing Ethereum address flows and exportable data',
            'projects.serchain.item1': 'Designed the product architecture and built full stack with Flask + Tailwind CSS',
            'projects.serchain.item2': 'Supports any ETH address with real-time direction, amount, fee, and key metrics',
            'projects.serchain.item3': 'Offers CSV export, direction filters, one-click copy, history, dark mode, and bilingual toggle',
            'projects.serchain.item4': 'Shipped a companion CLI to cover both web and terminal workflows',
            'projects.serchain.item5': 'Deployed on Vercel with roadmap toward multi-chain querying',
            'projects.serchain.links': "Project site: <a href='https://serchain.xyz' target='_blank' rel='noopener'>serchain.xyz</a> | GitHub: <a href='https://github.com/tenngoxars/serchain' target='_blank' rel='noopener'>github.com/tenngoxars/serchain</a>",
            'self.sectionTitle': 'Self Assessment',
            'self.description': 'Bridge developers and products with content that articulates technical value. Deep knowledge of open-source communities and developer mindset; translate capabilities into real-world scenarios. Multilingual, multimedia communicator focused on measurable impact and community growth.',
            'honors.sectionTitle': 'Honors & Awards',
            'honors.gitee.title': 'Gitee Public Cloud Quarterly MVP (Q1 2025)',
            'honors.gitee.tagline': 'Award Tags: Storytelling Maestro, Communications Trailblazer',
            'honors.gitee.item1': 'Partnered with R&D during Lunar New Year to localize DeepSeek PR; flagship story reposted by People’s Daily with 500K+ reads',
            'honors.gitee.item2': 'Strengthened Moli Ark and Gitee brand positioning to enable the AI + DevSecOps strategy',
            'honors.gitee.item3': 'Generated 30+ sales-qualified leads through data-driven cross-functional content collaboration'
        },
        zh: {
            'page.title': '李泽辰｜开发者内容布道 / 技术传播方向',
            'about.navName': '李泽辰',
            'nav.about': '关于我',
            'nav.education': '教育背景',
            'nav.experience': '工作经历',
            'nav.skills': '技能标签',
            'nav.projects': '项目与作品',
            'nav.self': '自我评价',
            'nav.honors': '荣誉与奖项',
            'controls.toggle': 'English',
            'about.fullName': '李泽辰',
            'about.tagline': '开发者内容布道 / 技术传播方向｜10 年经验',
            'about.contact': "<strong>坐标：</strong> 深圳 · <strong>邮箱：</strong> <a href='mailto:tenngoxars@hotmail.com'>tenngoxars@hotmail.com</a> · <strong>手机/微信：</strong> 180090294792 · <strong>年龄：</strong> 32 岁",
            'about.focus': '职业方向：内容策略 / 开源运营 / 技术传播',
            'education.sectionTitle': '教育背景',
            'education.university.name': '陕西理工大学',
            'education.university.degree': '经济学学士',
            'education.university.dates': '2011.09 - 2015.07',
            'experience.sectionTitle': '工作经历',
            'experience.gitee.title': 'Gitee｜内容负责人',
            'experience.gitee.summary': '围绕开源、DevOps、人工智能产品进行内容传播、开发者生态建设与产品推广工作',
            'experience.gitee.content.heading': '内容策划与传播',
            'experience.gitee.content.item1.main': '独立负责 Gitee 自媒体矩阵（微信公众号/知乎/B站/视频号等）内容策划与撰写',
            'experience.gitee.content.item1.result1': '五年公众号粉丝增长 733%，知乎粉丝增长 161%，累计曝光近 2200 万次',
            'experience.gitee.content.item1.result2': '产出图文/视频内容超 1000 篇，覆盖产品功能、开发者案例、技术方法论等',
            'experience.gitee.ecosystem.heading': '开发者生态建设与项目布道',
            'experience.gitee.ecosystem.item1.main': '策划并推动开源知识项目《开源指北》，从选题、写作到页面开发全流程负责',
            'experience.gitee.ecosystem.item1.result1': '在 Gitee 获得 3200+ Star，110+ 贡献者，累计访问超 11 万次',
            'experience.gitee.ecosystem.item2': '负责《2021-2023 中国开源开发者报告》撰写与推广，形成行业影响力',
            'experience.gitee.ecosystem.item3': '协助策划多场开发者活动，包括直播、沙龙、线上发布、专题报道等内容',
            'experience.gitee.devops.heading': 'DevOps 产品传播与智能化研发内容建设',
            'experience.gitee.devops.item1': '参与 Gitee DevSecOps 产品线内容体系搭建，围绕智能研发、效能协同、版本治理、安全合规等议题策划传播内容',
            'experience.gitee.devops.item2': '负责核心模块功能解读、落地文案及视频脚本撰写，推动产品在企业级用户中的理解与采用',
            'experience.gitee.devops.item3': '内容用于客户提案、行业活动、媒体发布与客户培训，支撑智能化研发体系表达统一',
            'experience.gitee.ai.heading': '模力方舟平台与 AI 应用生态传播',
            'experience.gitee.ai.item1': '围绕模力方舟平台产出内容，覆盖国产大模型上线、微调、Serverless API、第三方平台联动、AI 应用、算力市场等模块',
            'experience.gitee.ai.item2': '与产品研发团队协同，撰写模型介绍、使用教程及视频脚本，驱动平台访问与开发者使用转化',
            'experience.gitee.pr.heading': 'PR 与市场协作',
            'experience.gitee.pr.item1': '撰写面向政企、媒体、开发者的外宣稿件，获得工信部与头部媒体引用',
            'experience.gitee.pr.item2': '支持销售/商务/市场团队内容物料，涵盖发布文案、活动页、品牌故事等',
            'experience.gitee.pr.item3': '为产品上线与功能推广提供命名建议、文案包装与传播路径设计',
            'experience.gitee.dates': '2020.02 - 至今',
            'experience.pgyer.title': '蒲公英开发者平台｜市场&运营经理',
            'experience.pgyer.summary': '面向开发者工具的内容增长与用户运营，覆盖中英文双渠道',
            'experience.pgyer.item1': '主导三款工具型产品（内测分发、Tracup、FrontJS）的内容与增长运营',
            'experience.pgyer.item2': '策划专题专栏「猿传奇」，采访并撰写开发者故事 25 篇',
            'experience.pgyer.item3': '制作产品演示视频，完成脚本、拍摄与剪辑工作',
            'experience.pgyer.item4': '负责百度/谷歌 SEO 与 SEM 广告，提升访问量 40%+',
            'experience.pgyer.item5': '海外用户增长运营：负责 Facebook/Quora 内容与广告投放',
            'experience.pgyer.item6': '产品用户增长成果：蒲公英平台用户从 70 万增至 200 万；Tracup 从 0 增至六位数用户，FrontJS 增至五位数',
            'experience.pgyer.dates': '2016.04 - 2019.07',
            'experience.lieyun.title': '猎云网｜科技媒体记者',
            'experience.lieyun.item1': '共发布 62 篇创业项目报道，含 3 篇核心人物深度访谈（A 轮公司创始人）',
            'experience.lieyun.dates': '2015.09 - 2016.04',
            'skills.sectionTitle': '技能标签',
            'skills.item1': '内容产出：擅长撰写开发者友好的技术文档、产品教程与市场稿件，支持多语言、多形式内容表达，具备较强的结构感与表达力',
            'skills.item2': '社区运营：熟悉开源社区与技术社媒生态，能策划执行直播、内容征集、话题互动等活动，持续推动开发者参与',
            'skills.item3': '产品布道：参与多个 DevOps 与 AI 工具模块的发布传播，协同产品、研发、市场推动功能上线、内容落地与用户转化',
            'skills.item4': '技术理解力：理解前后端开发流程，能独立完成简单网页搭建与部署，熟练使用 AI 工具辅助原型验证与内容迭代',
            'projects.sectionTitle': '项目与作品展示',
            'projects.content.heading': '内容作品',
            'projects.content.item1': "<strong><a href='https://gitee.com/gitee-community/opensource-guide' target='_blank' rel='noopener'>开源指北</a></strong>：开源百科项目，项目 Star 数超 3000，100+ 贡献者，年浏览量超 10 万",
            'projects.content.item2': '《中国开源开发者报告（2021-2024）》：主笔并参与结构策划，形成行业影响力',
            'projects.content.item3': "TVC/MG 动画：主导 <a href='https://www.xinpianchang.com/a11316121' target='_blank' rel='noopener'>Gitee 十周年 TVC</a> 拍摄、<a href='https://www.xinpianchang.com/a12118602' target='_blank' rel='noopener'>Gitee 企业版 MG 动画</a>、<a href='https://www.xinpianchang.com/a13153675' target='_blank' rel='noopener'>模力方舟（Gitee AI）MG 动画</a> 的制作",
            'projects.content.item4': "技术向文章（近期原创内容）：<ul><li><a href='https://mp.weixin.qq.com/s/tFkFUrCuG3z1je2l_-LKgQ' target='_blank' rel='noopener'>Gitee AI 入驻 Dify，成倍加速 AI 应用开发落地</a></li><li><a href='https://mp.weixin.qq.com/s/UKy6D9SNdX3rtBtezcbD2A' target='_blank' rel='noopener'>一行代码不用写，用 Autoflow + Gitee AI 搭建本地知识库问答机器人</a></li><li><a href='https://mp.weixin.qq.com/s/Gf-Kl3wJLJXafty-UXaaYw' target='_blank' rel='noopener'>Gitee SBOM 扫描上线，全面守护开源软件供应链安全</a></li><li><a href='https://mp.weixin.qq.com/s/kLlcwMJ4xkx8H_WXLmIfMQ' target='_blank' rel='noopener'>DeepSeek 与开源：肥沃土壤孕育 AI 硕果</a></li></ul>",
            'projects.serchain.heading': 'Serchain｜以太坊转账浏览器（Vibe Coding 练习项目）',
            'projects.serchain.summary': '一款开源链上转账浏览器，聚焦以太坊地址转账可视化与数据导出体验',
            'projects.serchain.item1': '独立完成产品结构设计与前后端搭建，使用 Flask + Tailwind CSS 构建响应式界面',
            'projects.serchain.item2': '支持输入任意 ETH 地址，实时展示转账方向、金额、手续费等核心信息',
            'projects.serchain.item3': '提供 CSV 导出、方向筛选、一键复制、查询历史、深色主题与中英文切换等功能',
            'projects.serchain.item4': '同步构建 CLI 工具，适配网页端与开发者终端使用场景',
            'projects.serchain.item5': '已部署至 Vercel，项目处于初期版本迭代阶段，计划逐步支持多链查询',
            'projects.serchain.links': "项目主页：<a href='https://serchain.xyz' target='_blank' rel='noopener'>serchain.xyz</a> ｜ GitHub 地址：<a href='https://github.com/tenngoxars/serchain' target='_blank' rel='noopener'>github.com/tenngoxars/serchain</a>",
            'self.sectionTitle': '自我评价',
            'self.description': '长期站在开发者与产品之间，擅长用内容的形式讲清楚技术的价值。熟悉开源社区逻辑与开发者心智，具备将产品能力翻译为实际场景的经验。擅长多语言、多媒介传播，习惯以结果导向优化传播路径与社区构建方式。',
            'honors.sectionTitle': '荣誉与奖项',
            'honors.gitee.title': 'Gitee 公有云季度最佳员工（2025 Q1）',
            'honors.gitee.tagline': '获奖标签：文采斐然、宣传先锋',
            'honors.gitee.item1': '春节期间配合研发团队完成国产大模型 DeepSeek 适配 PR 内容，代表文章被人民日报转载，阅读量突破 50 万',
            'honors.gitee.item2': '推动模力方舟与 Gitee 品牌形象建设，助力公司 AI+DevSecOps 战略转型',
            'honors.gitee.item3': '横向协作中累计贡献超 30 条销售线索，体现以数据为导向的内容传播成效'
        }
    };

    const languageToggle = document.querySelector('#languageToggle');
    const translatableElements = () => document.querySelectorAll('[data-i18n]');
    const supportedLanguages = Object.keys(translations);
    const savedLanguage = window.localStorage.getItem('resumeLanguage');
    let currentLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'zh';

    const applyTranslations = lang => {
        translatableElements().forEach(element => {
            const key = element.dataset.i18n;
            if (!key) {
                return;
            }
            const translation = translations[lang][key];
            if (!translation) {
                return;
            }
            if (element.dataset.i18nType === 'html') {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });

        document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hans' : 'en');

        if (languageToggle) {
            languageToggle.textContent = translations[lang]['controls.toggle'];
            languageToggle.setAttribute(
                'aria-label',
                lang === 'en' ? 'Switch to Chinese' : '切换到英文'
            );
        }

        window.localStorage.setItem('resumeLanguage', lang);
    };

    applyTranslations(currentLanguage);

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
            applyTranslations(currentLanguage);
        });
    }

});
