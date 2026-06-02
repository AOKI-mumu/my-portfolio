if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// ─── Translations ───────────────────────────────────────────────────────────
const translations = {
  en: {
    'nav-works': 'Works',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'hero-kicker': 'PRODUCT DESIGNER & PM',
    'about-intro-1': 'Designer who ships. I work across research, Figma, and code — building AI SaaS products that grow.',
    'about-intro-2': 'Based in Guangzhou. Currently at a startup shipping AI image and video tools.',
    'tag-available': '● AVAILABLE FOR WORK',
    'tag-location': 'GUANGZHOU, CHINA',
    'section-projects': 'Selected Projects',
    'preview-cta': 'View full case study ↗',
    'featured-label': 'Featured Case',
    'featured-summary': 'Reframed AI try-on into an image and video creation platform, linking generation entry, SEO structure, and measurable growth.',
    'featured-metric-1': 'visit duration',
    'featured-metric-2': 'subscription conversion',
    'featured-metric-3': 'monthly net profit',
    'featured-focus-label': 'Case Focus',
    'featured-focus-1': 'Strategy',
    'featured-focus-2': 'Generation UX',
    'featured-focus-3': 'SEO System',
    'featured-focus-4': 'Studio Roadmap',
    'about-kicker': 'My Story',
    'about-title': 'About',
    'about-story-1-lead': 'I work where product, design, and growth meet.',
    'about-story-1-rest': 'My background started in industrial design and UI, then moved into C-end AI SaaS products, where I now handle product planning, UX/UI, SEO content, testing, and data review.',
    'about-story-2-lead': 'I like turning vague AI capabilities into usable workflows.',
    'about-story-2-rest': 'From research and competitor mapping to Figma, copy, handoff, and low-code collaboration, I care about whether the idea can actually ship.',
    'about-story-3-lead': 'My current focus is AI and growth.',
    'about-story-3-rest': 'I have worked on AI image, virtual try-on, 3D, video, and music creation products, using content systems and product iteration to connect traffic with conversion.',
    'about-experience': 'Experience',
    'about-role-1-company': 'Guangzhou 6677 Technology',
    'about-role-1-title': 'Product Manager · AI SaaS',
    'about-role-2-title': 'UI Designer',
    'about-role-3-company': 'Jiangsu Lidu Technology',
    'about-role-3-title': 'UI Designer',
    'about-role-4-company': 'Nanjing Institute of Technology Design Studio',
    'about-role-4-title': 'Intern Designer',
    'contact-kicker': 'GET IN TOUCH',
    'contact-location': 'Guangzhou, China',
    'contact-copy': '© 2026 Lin Han hui · Product Designer & PM',
    // Case study
    'cs-back': '← Back to works',
    'cs-title': 'From AI Try-On tool to AI image & video creation platform: aitryon.art product experience redesign',
    'cs-intro': 'aitryon.art started as a vertical tool centered on AI try-on. As image and video models grew stronger, user needs shifted from "trying a fun try-on tool" to "using different models to create product imagery, short videos, and social content." In this iteration I led product framing, competitive analysis, user paths, information architecture, UX wireframes, UI design, SEO content planning, copy, dev collaboration, and post-launch data review.',
    'cs-meta-role-label': 'Role',
    'cs-meta-role': 'Product strategy, UX/UI, SEO content system',
    'cs-meta-product-label': 'Product',
    'cs-meta-product': 'AI image & video creation platform',
    'cs-meta-duration-label': 'Duration',
    'cs-meta-duration': '~1 month, shipped via multiple small versions',
    'cs-meta-scope-label': 'Scope',
    'cs-meta-scope': 'Homepage, generation entry, tool pages, model landing pages, SEO structure',
    'cs-metric-1': 'visit duration lift',
    'cs-metric-2': 'pages per visit lift',
    'cs-metric-3': 'subscription conversion lift',
    'cs-metric-4': 'monthly net profit lift',
    'cs-h2-01': '01. Product Context',
    'cs-01-p1': 'Before this project, aitryon.art was still mainly perceived as an AI try-on tool. Vertical tools like this could work in the early days: users were drawn in by a single try-on toy — clothing, color, or tattoo — completed a trial, and sometimes even paid because it happened to solve their need.',
    'cs-01-p2': 'But AI model progress changed that premise. Many lightweight try-on needs that previously required dedicated models can now be handled by prompts on stronger general image models. Meanwhile, users with real paying potential started caring about model capability, generation quality, batch creation, product imagery, short videos, and social content — not just a one-off try-on gimmick.',
    'cs-01-note-label': 'Basis for the judgment',
    'cs-01-note': 'I built this judgment on three signals: first, our traffic came simultaneously from Google search, TikTok, YouTube, Reddit, Product Hunt, AI tool directories, and external links, showing users were not entering only from a single try-on context; second, public market data also showed general image models were spreading fast — OpenAI disclosed in April 2025 that ChatGPT image generation had 130M users producing over 700M images in its first week; third, video models were moving into creator tools, with CapCut announcing Dreamina Seedance 2.0 integration in March 2026. All of this pointed to attention shifting from "single small tools" toward "model capability + creation workflow."',
    'cs-01-grid-1-label': 'Old growth logic',
    'cs-01-grid-1': 'Use vertical try-on tools to catch curiosity traffic and long-tail search, solving one-off small needs.',
    'cs-01-grid-2-label': 'New user intent',
    'cs-01-grid-2': 'Try new models, generate images and videos, produce product imagery, short videos, or social content.',
    'cs-01-grid-3-label': 'Product pivot',
    'cs-01-grid-3': 'From a tool collection to a more professional AI image & video creation platform.',
    'cs-h2-02': '02. Core Problem',
    'cs-02-p1': 'The pre-redesign page was more like a simple hero showcase with product intro. Users coming in from Google, TikTok, YouTube, Reddit, Product Hunt, AI tool directories, or external links could see the product, but it was not easy to immediately understand that aitryon.art was no longer just try-on, nor was it easy to flow into generation.',
    'cs-02-p2': 'I split the problem into three layers: product positioning had not caught up with capability expansion; the homepage lacked a strong enough generation entry; SEO and tool pages drove traffic but content structure, page templates, and downstream generation experience were not unified.',
    'cs-02-li-1': 'The old homepage was display-first — users had to find a tool, enter the tool page, then upload, log in, and generate.',
    'cs-02-li-2': 'Outward narrative still skewed toward try-on, unable to express compound capabilities across image, video, UGC, and avatars.',
    'cs-02-li-3': 'Homepage generation entry and tool page forms could pass parameters, but UI style and experience rhythm were inconsistent.',
    'cs-02-li-4': 'History entry existed, but visuals were dated; reviewing older history required jumping between generation and history.',
    'cs-02-li-5': 'Model pages and tool pages had SEO potential but needed more stable templates and continuous update mechanisms.',
    'cs-h2-03': '03. Product Strategy',
    'cs-03-p1': 'My take: this should not be just about making the homepage prettier — it should turn the homepage into a platform-level generation entry, turn model and tool pages into a system that captures organic search traffic, and unify generation forms, model selection, results, and history later via AI Studio.',
    'cs-03-p2': 'I prioritized shifting the product narrative from a single-point try-on tool to an AI image & video creation platform. The homepage now defaults to AI Video, because video model heat and conversion potential are higher; AI Image and Virtual Try On are still preserved so old and new users can find their own entries.',
    'cs-03-grid-1-label': 'Capture generation intent first',
    'cs-03-grid-1': 'Let users upload an image, type a prompt, pick generation type, model, and template — all from the first screen.',
    'cs-03-grid-2-label': 'Treat SEO as product architecture',
    'cs-03-grid-2': 'Model pages attract search traffic, tool pages catch specific tasks, homepage builds platform awareness.',
    'cs-03-grid-3-label': 'Reduce risk via small releases',
    'cs-03-grid-3': 'Only adjusted color and entry stitching on the generation page first, avoiding a single big change that disrupts dev velocity.',
    'cs-03-grid-4-label': 'Leave space for AI Studio',
    'cs-03-grid-4': 'Treat the fragmented tool forms, result preview, and history as the next-phase unified experience.',
    'cs-fig-before': 'Before: the page felt like a lightweight try-on landing page with content showcase — platform capability was not clear.',
    'cs-h2-04': '04. Experience Redesign',
    'cs-04-p1': 'The new homepage moves "generation" to the first layer. From the first screen, users can upload an image, type a prompt, choose AI Video / AI Image / Virtual Try On, pick a model, pick a template, see credits, and click Generate. When not signed in or expired, the system prompts a login modal; after login, the user\'s inputs are preserved and carried to the matching tool page to continue generating.',
    'cs-04-li-1': 'Homepage defaults to AI Video to capture higher-heat, higher-conversion video generation intent.',
    'cs-04-li-2': 'Prompts, uploaded images, models, templates, and related generation params from the homepage carry into the tool page.',
    'cs-04-li-3': 'The generation page was not fully rebuilt in this version — only color and entry stitching were adjusted, because AI Studio comes next.',
    'cs-04-li-4': 'History entry was preserved as-is, but flagged as the key experience problem to unify in Studio next.',
    'cs-fig-after': 'After: product narrative pivoted to a more complete AI image & video creation platform. The image shows the structural alignment cut — live copy was adjusted later.',
    'cs-h2-05': '05. SEO Content System',
    'cs-05-p1': 'Beyond homepage and generation entry, I also treated SEO as a product growth system. Model landing pages are updated continuously by model name — Veo, Seedance, Kling, Nano Banana, etc.; tool pages catch specific tasks like image generation, video generation, virtual try-on, and so on.',
    'cs-05-p2': 'To let future model and tool pages keep scaling, I built a JSON-based copy generation skill. It can batch-produce baseline English copy while keeping examples, features, advantages, use cases, how-to guides, related tools, and FAQ modules consistent in structure, H2 phrasing, and SEO keywords. I then do human review so pages are not just keyword stuffing.',
    'cs-05-grid-1-label': 'Model landing pages',
    'cs-05-grid-1': 'Capture search intent by model name, introduce model capability, and guide users into the matching generation tool.',
    'cs-05-grid-2-label': 'Tool pages',
    'cs-05-grid-2': 'Catch needs by task — video generation, image generation, virtual try-on workflows.',
    'cs-05-grid-3-label': 'Articles',
    'cs-05-grid-3': 'Editorial content supplements long-tail keywords, tutorials, and topical pieces.',
    'cs-05-grid-4-label': 'Copy skill',
    'cs-05-grid-4': 'JSON content structure improves update efficiency and keeps English SEO copy and translation logic consistent.',
    'cs-fig-tool-before': 'Before: early tool pages had basic SEO modules, but structure was thin and visual / content templates were not unified.',
    'cs-fig-tool-after': 'After: tool pages became a clearer traffic-catching surface, including model, examples, features, related tools, FAQ, and articles.',
    'cs-h2-06': '06. Before / After',
    'cs-th-1': 'Dimension',
    'cs-th-2': 'Before',
    'cs-th-3': 'After',
    'cs-td-1-1': 'Product positioning',
    'cs-td-1-2': 'More like a single AI try-on tool',
    'cs-td-1-3': 'A more professional all-in-one AI image & video creation platform',
    'cs-td-2-1': 'Homepage role',
    'cs-td-2-2': 'Display product intro and hero image',
    'cs-td-2-3': 'Directly captures upload, prompt, model, and generation intent',
    'cs-td-3-1': 'Generation path',
    'cs-td-3-2': 'Users had to read the page first, then find a tool entry',
    'cs-td-3-3': 'After login, inputs are preserved and carried to the matching tool page to continue',
    'cs-td-4-1': 'SEO system',
    'cs-td-4-2': 'Page structure and copy update flow were not unified',
    'cs-td-4-3': 'Model pages, tool pages, articles, and the writing skill form a sustainable content system',
    'cs-td-5-1': 'Next phase',
    'cs-td-5-2': 'Generation page, tool page, and history experience were fragmented',
    'cs-td-5-3': 'Plan AI Studio to unify generation forms, results, and history into one workflow',
    'cs-h2-07': '07. Outcome',
    'cs-out-1': 'visit duration: 18s → 33s',
    'cs-out-2': 'pages per visit: 1.79 → 2.02',
    'cs-out-3': 'subscription conversion: 0.5% → 0.7%',
    'cs-out-4': 'monthly net profit: ~$1,250 → ~$3,000',
    'cs-07-p': 'I tracked post-launch impact across four layers: engagement, exploration depth, conversion, and revenue. Because this was shipped via small releases, I compared changes over equivalent periods: visit duration, page-view depth, visitor-to-paying conversion, and product monthly net profit all improved.',
    'cs-h2-08': '08. Next: AI Studio',
    'cs-08-p': 'This iteration solved platform narrative, homepage generation entry, and SEO content system — but it also exposed the more important next product direction: although the homepage entry can pass parameters to the tool page and the user\'s inputs persist after login, tool page forms, result preview, and history are still fragmented.',
    'cs-fig-studio-1': 'AI Studio concept: a unified generation workspace integrating model selection, parameter setup, and result preview.',
    'cs-fig-studio-2': 'AI Studio concept: history management and workflow optimization, reducing page-to-page jumps.',
    'cs-08-li-1': 'Unify model selection, templates, uploads, prompts, result preview, and history into AI Studio.',
    'cs-08-li-2': 'Let users filter history by model, type, and time to cut down jumps between generation and history.',
    'cs-08-li-3': 'Recommend the right image / video / virtual try-on workflow based on user source and search keywords.',
    'cs-08-li-4': 'Keep expanding organic search traffic via model pages, tool pages, and articles.',
    'cs-nav-overview': 'Overview',
    'cs-nav-context': 'Context',
    'cs-nav-problem': 'Problem',
    'cs-nav-strategy': 'Strategy',
    'cs-nav-ux': 'UX',
    'cs-nav-seo': 'SEO',
    'cs-nav-compare': 'Compare',
    'cs-nav-outcome': 'Outcome',
    'cs-nav-next': 'Next',
    'cs-nav-contact': 'Contact'
  },
  zh: {
    'nav-works': '作品',
    'nav-about': '关于',
    'nav-contact': '联系',
    'hero-kicker': '产品设计师 & PM',
    'about-intro-1': '设计师，也写代码。从调研到 Figma 到上线，全程参与 AI SaaS 产品的增长。',
    'about-intro-2': '广州。目前在做 AI 图像和视频工具。',
    'tag-available': '● 接受新项目',
    'tag-location': '中国 · 广州',
    'section-projects': '精选项目',
    'preview-cta': '查看完整案例 ↗',
    'featured-label': '精选案例',
    'featured-summary': '将 AI 试穿重构为图像与视频创作平台，把生成入口、SEO 结构和增长结果连接起来。',
    'featured-metric-1': '访问时长',
    'featured-metric-2': '订阅转化',
    'featured-metric-3': '月纯利润',
    'featured-focus-label': '案例重点',
    'featured-focus-1': '策略',
    'featured-focus-2': '生成体验',
    'featured-focus-3': 'SEO 系统',
    'featured-focus-4': 'Studio 路线',
    'about-kicker': '我的故事',
    'about-title': 'About',
    'about-story-1-lead': '我工作的交叉点是产品、设计和增长。',
    'about-story-1-rest': '我的背景从工业设计和 UI 开始，现在更多进入 C 端 AI SaaS 产品，负责产品规划、UX/UI、SEO 内容、测试和数据复盘。',
    'about-story-2-lead': '我喜欢把模糊的 AI 能力变成可以被用户理解和使用的工作流。',
    'about-story-2-rest': '从调研、竞品拆解到 Figma、文案、开发交接和低代码协作，我更关心一个想法能不能真的上线。',
    'about-story-3-lead': '目前我聚焦 AI 和增长方向。',
    'about-story-3-rest': '参与过 AI 生图、虚拟试穿、3D、视频和音乐创作产品，用内容系统和产品迭代把流量、体验和转化连接起来。',
    'about-experience': '经历',
    'about-role-1-company': '广州六六柒柒科技有限公司',
    'about-role-1-title': '产品经理 · AI SaaS',
    'about-role-2-title': 'UI 设计师',
    'about-role-3-company': '江苏粒度科技有限公司',
    'about-role-3-title': 'UI 设计师',
    'about-role-4-company': '南京工程学院设计工作坊',
    'about-role-4-title': '实习设计师',
    'contact-kicker': '联系我',
    'contact-location': '中国 · 广州',
    'contact-copy': '© 2026 Lin Han hui · 产品设计师 & PM',
    // Case study
    'cs-back': '← 返回作品',
    'cs-title': '从 AI Try-On 工具到 AI 图像视频创作平台：aitryon.art 产品体验重构',
    'cs-intro': 'aitryon.art 最初更像一个以 AI 试穿为核心的垂直工具。随着图像和视频模型能力变强，用户需求从"试一个好玩的 try-on 工具"逐渐转向"用不同模型完成商品图、短视频和社媒内容创作"。我在这次迭代中负责产品梳理、竞品分析、用户路径、信息架构、UX wireframe、UI design、SEO 内容规划、文案、开发沟通和上线后数据复盘。',
    'cs-meta-role-label': '角色',
    'cs-meta-role': '产品策略、UX/UI、SEO 内容系统',
    'cs-meta-product-label': '产品',
    'cs-meta-product': 'AI 图像与视频创作平台',
    'cs-meta-duration-label': '周期',
    'cs-meta-duration': '约 1 个月，通过多个小版本上线',
    'cs-meta-scope-label': '范围',
    'cs-meta-scope': '首页、生成入口、工具页、模型落地页、SEO 结构',
    'cs-metric-1': '访问时长提升',
    'cs-metric-2': '访问页数提升',
    'cs-metric-3': '订阅转化率提升',
    'cs-metric-4': '月纯利润提升',
    'cs-h2-01': '01. 产品背景',
    'cs-01-p1': '项目开始前，aitryon.art 的主要认知仍然停留在 AI 试穿工具。早期这样的垂直工具可以成立：用户会因为某个服装试穿、颜色试穿或纹身试穿小工具感到新鲜，完成一次试用，甚至因为刚好解决需求而付费。',
    'cs-01-p2': '但 AI 模型的发展改变了这个前提。很多原本需要专门模型承接的轻量试穿需求，现在可以通过 prompt 和更强的图像模型完成。与此同时，更有付费潜力的用户开始关心模型能力、生成质量、批量创作、商品图、短视频和社媒内容，而不只是一个单点 try-on 玩法。',
    'cs-01-note-label': '判断依据',
    'cs-01-note': '我把这个判断建立在三类信号上：第一，站内流量来源同时来自 Google 搜索、TikTok、YouTube、Reddit、Product Hunt、AI 工具导航站和外链，说明用户不是只从单一试穿场景进入；第二，公开市场数据也显示通用图像模型正在快速普及，OpenAI 在 2025 年 4 月披露 ChatGPT 图像生成功能上线首周已有 1.3 亿用户生成超过 7 亿张图片；第三，视频模型也正在进入创作者工具，CapCut 在 2026 年 3 月宣布把 Dreamina Seedance 2.0 带入编辑平台。这些变化都说明用户的注意力正在从"单个小工具"转向"模型能力 + 创作工作流"。',
    'cs-01-grid-1-label': '旧增长逻辑',
    'cs-01-grid-1': '用垂直试穿工具承接好奇流量和长尾搜索，解决一次性的小需求。',
    'cs-01-grid-2-label': '新用户意图',
    'cs-01-grid-2': '尝试新模型，生成图片和视频，完成商品图、短视频或社媒内容。',
    'cs-01-grid-3-label': '产品转向',
    'cs-01-grid-3': '从工具集合转向更专业的 AI 图像与视频创作平台。',
    'cs-h2-02': '02. 核心问题',
    'cs-02-p1': '改版前的页面更像一个简单 hero 图片展示和产品介绍。用户从 Google、TikTok、YouTube、Reddit、Product Hunt、AI 工具导航站或外链进入后，可以看到产品，但不容易立刻理解 aitryon.art 已经不只是 try-on，也不容易顺畅地进入生成。',
    'cs-02-p2': '我把问题拆成三个层面：产品定位没有跟上能力扩展，首页没有足够强的生成入口，SEO 页面和工具页虽然能带来流量，但内容结构、页面模板和后续生成体验还不够统一。',
    'cs-02-li-1': '旧首页以展示和介绍为主，用户需要先找工具，再进入工具页，再上传、登录和生成。',
    'cs-02-li-2': '产品对外仍然偏试穿工具叙事，无法充分表达图像、视频、UGC、头像生成等复合能力。',
    'cs-02-li-3': '首页生成入口和工具页表单可以传参，但 UI 风格和体验节奏不一致。',
    'cs-02-li-4': '历史记录入口存在，但视觉较旧，用户查看早期历史时需要在生成和历史之间来回跳转。',
    'cs-02-li-5': '模型页和工具页有 SEO 潜力，但需要更稳定的内容模板和持续更新机制。',
    'cs-h2-03': '03. 产品策略',
    'cs-03-p1': '我的判断是：这次不应该只是把首页做得更好看，而是要把首页变成平台级生成入口，把模型页和工具页变成自然搜索流量的承接系统，再通过后续 AI Studio 统一生成表单、模型选择、结果和历史记录。',
    'cs-03-p2': '我优先把产品叙事从单点试穿工具转为 AI 图像与视频创作平台。首页默认突出 AI Video，因为视频模型的热度和转化潜力更高，同时保留 AI Image 和 Virtual Try On，让旧用户和新用户都能找到自己的入口。',
    'cs-03-grid-1-label': '先承接生成意图',
    'cs-03-grid-1': '让用户在首屏上传图片、输入 prompt、选择生成类型、模型和模板。',
    'cs-03-grid-2-label': '把 SEO 当成产品架构',
    'cs-03-grid-2': '模型页负责吸引搜索流量，工具页负责承接具体任务，首页建立平台认知。',
    'cs-03-grid-3-label': '用小版本降低改动风险',
    'cs-03-grid-3': '生成页先做配色和入口衔接，避免一次性大改影响开发效率。',
    'cs-03-grid-4-label': '为 AI Studio 留出方向',
    'cs-03-grid-4': '把割裂的工具表单、结果预览和历史记录，作为下一阶段统一体验。',
    'cs-fig-before': '改版前：页面更像轻量试穿工具落地页和内容展示，平台能力不够清晰。',
    'cs-h2-04': '04. 体验重构',
    'cs-04-p1': '新版首页把"生成"放到了第一层。用户可以在首屏完成上传图片、输入 prompt、选择 AI Video / AI Image / Virtual Try On、选择模型、选择模板、查看 credit 并点击 Generate。未登录或登录过期时，系统弹出登录框；登录完成后保留用户刚才输入的内容，并带到对应工具页继续生成。',
    'cs-04-li-1': '首页默认选择 AI Video，优先承接更高热度和转化潜力的视频生成意图。',
    'cs-04-li-2': '首页输入的 prompt、上传图、模型、模板和相关生成参数会带到工具页。',
    'cs-04-li-3': '生成页没有在这一版彻底重构，只做了配色和入口衔接，因为后续会进入 AI Studio 方向。',
    'cs-04-li-4': '历史记录保留现有入口，但我把它识别为下一阶段需要统一进 Studio 的关键体验问题。',
    'cs-fig-after': '改版后：产品叙事转向更完整的 AI 图像与视频创作平台。图中为结构对齐稿，线上文案后续有调整。',
    'cs-h2-05': '05. SEO 内容系统',
    'cs-05-p1': '除了首页和生成入口，我还把 SEO 当成产品增长系统来做。模型落地页按模型名持续更新，例如 Veo、Seedance、Kling、Nano Banana 等；工具页则按能力承接图片生成、视频生成、虚拟试穿等具体任务。',
    'cs-05-p2': '为了让后续模型页和工具页能持续扩展，我沉淀了一套基于 JSON 的文案生成 skill。它可以批量生成英文基础文案，并保持示例、功能、优势、使用场景、使用指南、更多工具、FAQ 等模块的结构、H2 说法和 SEO 关键词一致。我再进行人工审核，避免页面只是机械堆关键词。',
    'cs-05-grid-1-label': '模型落地页',
    'cs-05-grid-1': '按模型名承接搜索意图，介绍模型能力，并引导用户进入对应生成工具。',
    'cs-05-grid-2-label': '工具页',
    'cs-05-grid-2': '按任务承接需求，例如视频生成、图片生成、虚拟试穿等工作流。',
    'cs-05-grid-3-label': '文章内容',
    'cs-05-grid-3': '运营内容用于补充长尾关键词、教程和专题内容。',
    'cs-05-grid-4-label': '文案 skill',
    'cs-05-grid-4': '用 JSON 内容结构提高更新效率，保证英文 SEO 文案和翻译逻辑一致。',
    'cs-fig-tool-before': '改版前：早期工具页已经有基础 SEO 模块，但结构偏轻，视觉和内容模板不够统一。',
    'cs-fig-tool-after': '改版后：工具页成为更清晰的流量承接面，包含模型、示例、功能、相关工具、FAQ 和文章模块。',
    'cs-h2-06': '06. 前后对比',
    'cs-th-1': '维度',
    'cs-th-2': '改版前',
    'cs-th-3': '改版后',
    'cs-td-1-1': '产品定位',
    'cs-td-1-2': '更像单一 AI try-on 工具',
    'cs-td-1-3': '更专业的一站式 AI 图像视频创作平台',
    'cs-td-2-1': '首页角色',
    'cs-td-2-2': '展示产品介绍和 hero 图片',
    'cs-td-2-3': '直接承接上传、prompt、模型和生成意图',
    'cs-td-3-1': '生成路径',
    'cs-td-3-2': '用户需要先理解页面，再寻找工具入口',
    'cs-td-3-3': '登录后保留输入内容，并带到对应工具页继续生成',
    'cs-td-4-1': 'SEO 系统',
    'cs-td-4-2': '页面结构和文案更新方式不够统一',
    'cs-td-4-3': '模型页、工具页、文章和 writing skill 形成可持续内容系统',
    'cs-td-5-1': '下一阶段',
    'cs-td-5-2': '生成页、工具页、历史记录体验割裂',
    'cs-td-5-3': '规划 AI Studio，把生成表单、结果和历史统一进一个工作流',
    'cs-h2-07': '07. 结果',
    'cs-out-1': '访问时长从 18s 提升到 33s',
    'cs-out-2': '访问页数从 1.79 提升到 2.02',
    'cs-out-3': '订阅转化率从 0.5% 提升到 0.7%',
    'cs-out-4': '月纯利润从约 $1,250 提升到约 $3,000',
    'cs-07-p': '我把上线后的效果按参与度、探索深度、转化和收入四层来观察。由于这次是分小版本上线，我对比了同等周期的数据变化：访问时长、页面浏览深度、访问用户到付费用户的转化率，以及产品本身的月纯利润都有提升。',
    'cs-h2-08': '08. 下一步：AI Studio',
    'cs-08-p': '这次迭代先解决了平台叙事、首页生成入口和 SEO 内容系统的问题，但它也暴露了下一步更重要的产品方向：首页入口虽然可以把参数带到工具页，用户输入也会在登录后保留，但工具页表单、结果预览和历史记录仍然是分散的。',
    'cs-fig-studio-1': 'AI Studio 概念：统一的生成工作区，整合模型选择、参数配置和结果预览。',
    'cs-fig-studio-2': 'AI Studio 概念：历史记录管理和工作流优化，减少页面跳转。',
    'cs-08-li-1': '把模型选择、模板、上传、prompt、结果预览和历史记录统一到 AI Studio。',
    'cs-08-li-2': '让用户可以按模型、类型和时间筛选历史生成记录，减少在生成页和历史页之间来回跳转。',
    'cs-08-li-3': '根据用户来源和搜索关键词，推荐更合适的图片、视频或虚拟试穿工作流。',
    'cs-08-li-4': '继续围绕模型页、工具页和文章扩展自然搜索流量。',
    'cs-nav-overview': '概述',
    'cs-nav-context': '背景',
    'cs-nav-problem': '问题',
    'cs-nav-strategy': '策略',
    'cs-nav-ux': '体验',
    'cs-nav-seo': 'SEO',
    'cs-nav-compare': '对比',
    'cs-nav-outcome': '结果',
    'cs-nav-next': '下一步',
    'cs-nav-contact': '联系'
  }
};

Object.assign(translations.en, {
  'nav-resume': 'Resume',
  'about-resume': 'View full resume ↗',
  'work-title': 'Work',
  'resume-back': '← Back to about',
  'resume-title': 'Resume',
  'resume-intro': 'Lin Han hui is focused on AI and growth product management. With a background in industrial design and UI, he works across product planning, UX/UI, SEO content growth, development collaboration, and data review.',
  'resume-edu': 'Nanjing Institute of Technology · Bachelor',
  'resume-profile-title': 'Profile',
  'resume-profile': 'I am familiar with the full workflow from requirement breakdown, solution design, SEO content optimization, development handoff, version testing, to data review. I use AI tools to improve research, copywriting, and delivery efficiency, and can support low-code and frontend collaboration during product execution.',
  'resume-experience-title': 'Experience',
  'resume-exp-1-title': 'Guangzhou 6677 Technology · Product Manager',
  'resume-exp-1-desc': 'Overseas C-end AI SaaS products, including AI image generation, AI try-on, AI 3D, and AI video.',
  'resume-exp-1-li-1': 'Refined requirement documents and completed business logic and product details.',
  'resume-exp-1-li-2': 'Created high-fidelity designs and pushed requirements from proposal to shipped pages.',
  'resume-exp-1-li-3': 'Used AI to support SEO copy production and iteration for growth goals.',
  'resume-exp-1-li-4': 'Worked with frontend engineers on handoff and partial code collaboration to improve delivery speed.',
  'resume-exp-1-li-5': 'Handled version testing, acceptance, issue follow-up, and quality control.',
  'resume-exp-2-title': 'SIANEXX PTE. LTD (Hong Kong) · UI Designer',
  'resume-exp-2-li-1': 'Designed company website UI and online/offline marketing pages.',
  'resume-exp-2-li-2': 'Provided creative and design direction for a 0-1 official website build.',
  'resume-exp-2-li-3': 'Independently produced UI assets and followed implementation quality.',
  'resume-exp-3-title': 'Jiangsu Lidu Technology · UI Designer',
  'resume-exp-3-li-1': 'Designed product UI and marketing pages.',
  'resume-exp-3-li-2': 'Contributed visual concepts for new products and features.',
  'resume-exp-3-li-3': 'Supported operation design, product requirement analysis, and development follow-up.',
  'resume-exp-4-title': 'Nanjing Institute of Technology Design Studio · Intern Designer',
  'resume-exp-4-li-1': 'Assisted teachers with online product UI redesign work.',
  'resume-exp-4-li-2': 'Completed college promotional tasks including event planning, visual design, and materials.',
  'resume-projects-title': 'Projects',
  'resume-project-1-title': 'aitryon.art · Product Manager (Growth & Experience Optimization)',
  'resume-project-1-li-1': 'Independently proposed and promoted SEO operation and page structure optimization.',
  'resume-project-1-li-2': 'Completed redesign requirements, high-fidelity UI, and SEO copy optimization.',
  'resume-project-1-li-3': 'Collaborated with developers to ship the redesign and track key metrics.',
  'resume-project-1-li-4': 'Page views increased to 60K+, conversion doubled during one stage, and user stay rate improved to 33%.',
  'resume-project-2-title': 'musicmaker.im · Product Manager (0-1 Launch & Growth)',
  'resume-project-2-li-1': 'Assisted the project manager with product setup and version planning.',
  'resume-project-2-li-2': 'Used AI to complete multi-dimensional competitor research and structured swimlane maps.',
  'resume-project-2-li-3': 'Continued multiple rounds of interface and SEO copy upgrades.',
  'resume-project-2-li-4': 'Reached about 20K monthly traffic growth since launch, with current page conversion around 3%.',
  'resume-skills-title': 'Skills'
});

Object.assign(translations.zh, {
  'nav-resume': 'Resume',
  'about-resume': '查看全部履历 ↗',
  'work-title': 'Work',
  'resume-back': '← 返回关于',
  'resume-title': 'Resume',
  'resume-intro': '林瀚辉，当前聚焦 AI / 增长方向产品经理。工业设计专业出身，具备 UI 设计、0-1 产品搭建、SEO 内容增长、开发协同和数据复盘经验。',
  'resume-edu': '南京工程学院 · 本科',
  'resume-profile-title': 'Profile',
  'resume-profile': '熟悉从需求拆解、方案设计、SEO 内容优化、开发协同、版本测试到数据复盘的完整流程。可结合 AI 工具提升调研、文案与交付效率，并在产品推进中承担部分低代码与前端协同工作，推动需求高质量落地。',
  'resume-experience-title': 'Experience',
  'resume-exp-1-title': '广州六六柒柒科技有限公司｜产品经理',
  'resume-exp-1-desc': 'C 端 AI SaaS 海外产品，包括 AI 生图、AI 换装、AI 生 3D、AI 生视频等方向。',
  'resume-exp-1-li-1': '细化并完善需求文档，补全业务逻辑与功能细节。',
  'resume-exp-1-li-2': '输出高保真设计稿，推动需求从方案到页面落地。',
  'resume-exp-1-li-3': '使用 AI 辅助产出 SEO 文案并持续迭代，支持增长目标。',
  'resume-exp-1-li-4': '协助前端进行开发交接并承担部分代码工作，提升交付效率。',
  'resume-exp-1-li-5': '负责版本测试验收，跟进问题闭环，保障版本质量。',
  'resume-exp-2-title': 'SIANEXX PTE. LTD（香港）｜UI 设计师',
  'resume-exp-2-li-1': '负责公司官网 UI 界面及线上线下宣传页面设计。',
  'resume-exp-2-li-2': '为官网 0-1 搭建提供创意与设计方案。',
  'resume-exp-2-li-3': '独立完成 UI 相关制作，并跟进设计落地效果。',
  'resume-exp-3-title': '江苏粒度科技有限公司｜UI 设计师',
  'resume-exp-3-li-1': '负责公司产品 UI 界面及宣传页面设计。',
  'resume-exp-3-li-2': '参与新产品、新功能创意与视觉方案输出。',
  'resume-exp-3-li-3': '协助运营设计、产品需求分析和开发落地跟进。',
  'resume-exp-4-title': '南京工程学院艺术设计学院设计工作坊｜实习设计师',
  'resume-exp-4-li-1': '协助老师完成在线产品 UI 改版工作。',
  'resume-exp-4-li-2': '完成学院宣发任务，包括活动策划、视觉设计与物料设计。',
  'resume-projects-title': 'Projects',
  'resume-project-1-title': 'aitryon.art｜产品经理（增长与体验优化）',
  'resume-project-1-li-1': '独立提出并推进网站 SEO 运营与页面结构优化方案。',
  'resume-project-1-li-2': '完成改版需求输出、高保真设计稿与 SEO 文案优化。',
  'resume-project-1-li-3': '协同开发推进改版上线并持续跟踪核心指标。',
  'resume-project-1-li-4': '页面浏览量提升至 60K+，阶段内转化率实现翻倍增长，用户停留率提升至 33%。',
  'resume-project-2-title': 'musicmaker.im｜产品经理（0-1 立项与增长）',
  'resume-project-2-li-1': '协助项目经理完成产品立项与版本规划。',
  'resume-project-2-li-2': '使用 AI 独立完成多维竞品调研，输出结构化泳道图。',
  'resume-project-2-li-3': '持续完成界面与 SEO 文案多轮升级优化。',
  'resume-project-2-li-4': '自立项起实现月均约 20K 浏览量增长，当前页面转化率约 3%。',
  'resume-skills-title': 'Skills'
});

Object.assign(translations.en, {
  'skill-card-label': 'Featured Case',
  'skill-card-meta': '2026 · AI Workflow · Product Ops / SEO / Automation',
  'skill-card-title': 'AI Skill System for Product, SEO, and Growth Work',
  'skill-card-summary': 'Turned repeated SEO writing, model documentation, asset cleanup, and product memory tasks into reusable local AI workflows.',
  'skill-card-metric-1': 'production skills',
  'skill-card-metric-2': 'memory-indexed pages',
  'skill-card-metric-3': 'workflow layers',
  'skill-card-focus-1': 'Skill Design',
  'skill-card-focus-2': 'Content Ops',
  'skill-card-focus-3': 'Local Memory',
  'skill-card-focus-4': 'Validation',
  'portfolio-card-label': 'Featured Case',
  'portfolio-card-meta': '2026 · Portfolio · Product Positioning / UXUI / Memory System',
  'portfolio-card-title': 'Designing a Portfolio Website as a Living Product System',
  'portfolio-card-summary': 'Designed this portfolio as a living product narrative with a dark editorial interface, reusable case structure, bilingual copy layer, and persistent memory.',
  'portfolio-card-metric-1': 'core pages',
  'portfolio-card-metric-2': 'case sections',
  'portfolio-card-metric-3': 'memory files',
  'portfolio-card-focus-1': 'Positioning',
  'portfolio-card-focus-2': 'Visual System',
  'portfolio-card-focus-3': 'Case Structure',
  'portfolio-card-focus-4': 'Memory',
  'skill-title': 'From repeated AI tasks to a reusable product design skill system',
  'skill-intro': 'I turned repeated SEO writing, model documentation, asset cleanup, and product memory tasks into a local AI skill system with structured rules, searchable memory, validation scripts, and review loops.',
  'skill-meta-role': 'Product workflow design, AI skill design, content system, QA rules',
  'skill-meta-product': 'Local AI-assisted working system',
  'skill-meta-scope': 'Skill library, memory structure, scripts, SEO copy workflow',
  'case-artifacts-label': 'Artifacts',
  'skill-meta-artifacts': '3 local skills, 156-page memory index, import and audit scripts',
  'skill-h2-context': '01. Project Context',
  'skill-context-p1': 'While working on AI SaaS products and this portfolio, I noticed that many tasks were not truly one-off. Model landing pages had to be updated whenever new AI models appeared. Tool pages needed consistent sections such as examples, core features, use cases, manuals, related tools, and FAQs. Model readmes needed to follow strict template logic. Website assets needed cleanup without breaking references. Portfolio decisions also needed to survive across multiple AI collaboration sessions.',
  'skill-context-p2': 'At first, these tasks looked like separate writing or maintenance jobs. But the deeper pattern was the same: each task needed a clear reference, reusable judgment, guardrails, validation, and a way to carry learning into the next task.',
  'skill-h2-problem': '02. Core Problem',
  'skill-problem-p': 'The problem was not simply speed. AI could generate copy quickly, but fast output was not enough if the structure drifted, product facts became loose, SEO sections changed randomly, or previous decisions had to be re-explained every time.',
  'skill-h2-strategy': '03. System Strategy',
  'skill-strategy-p': 'My strategy was to treat skills as small product systems. Each skill has a defined trigger, scope, workflow, guardrails, reference files, scripts, and output requirements. Instead of asking AI to "write better copy" or "clean assets", the system tells it how to think, what to inspect first, what must be preserved, and how to validate the result.',
  'skill-h2-workflow': '04. Workflow Design',
  'skill-workflow-p1': 'The clearest example is the SEO JSON Writer skill. It does not just draft SEO copy. It first treats the reference JSON as the source of truth, preserving key names, section order, H2 formulas, CTA fields, and nesting. Then it searches local memory for similar products, model families, or page patterns. After drafting, it validates the JSON structure and runs a competitor review to identify keyword and content gaps without copying competitors.',
  'skill-workflow-p2': 'The asset optimizer skill follows a similar principle. It does not directly compress or rename everything. It starts with an audit, reports conflicts, avoids hidden/system/build files, and only applies changes after the scope is clear. This made the workflow safer because asset cleanup can easily damage a website if file names or references are changed casually.',
  'skill-h2-library': '05. Skill Library',
  'skill-library-p': 'The current local skill library covers three recurring production areas. Together, they form a practical operating layer for AI product work: content creation, documentation, and asset maintenance each get their own rules instead of being handled by one generic prompt.',
  'skill-h2-compare': '06. Before / After',
  'skill-h2-outcome': '07. Outcome',
  'skill-outcome-p': 'This system helped me express a broader product design capability: I can not only use AI tools, but also design the process around them. For AI SaaS work, that means turning fast-changing models, SEO pages, content updates, and delivery constraints into a repeatable operating system.',
  'skill-h2-next': '08. Next Step',
  'portfolio-title': 'Designing a portfolio that remembers: from static showcase to living product narrative',
  'portfolio-intro': 'I designed this portfolio as a living product system: a dark editorial website, a bilingual content layer, a reusable case-study structure, and a local memory system that keeps design decisions consistent across iterations.',
  'portfolio-meta-role': 'Product positioning, UX/UI, content strategy, front-end collaboration',
  'portfolio-meta-product': 'Personal portfolio website',
  'portfolio-meta-scope': 'Homepage, case page, resume, visual system, bilingual copy, local memory',
  'portfolio-meta-artifacts': 'Website pages, design rules, content rules, current-state memory, backlog',
  'portfolio-h2-context': '01. Project Context',
  'portfolio-context-p1': 'This portfolio started with a simple need: present my work clearly as a product designer and PM focused on AI and growth. But the actual design problem was more layered. The site needed to explain a mixed capability set: product planning, UX/UI, SEO content systems, testing, data review, and code collaboration.',
  'portfolio-context-p2': 'A standard portfolio layout could show projects, but it would not fully express how I work. I needed a site that could show product thinking, shipped impact, design taste, and the ability to collaborate with AI and code without feeling like a generic template.',
  'portfolio-h2-problem': '02. Core Problem',
  'portfolio-problem-p': 'The core problem was positioning. I was not trying to present only as a UI designer, but also not as a pure product manager with no visual craft. The website had to hold both sides: design sensitivity and product/growth execution.',
  'portfolio-h2-strategy': '03. Product Strategy',
  'portfolio-strategy-p1': 'I treated the portfolio itself like a small product. The goal was not to add decorative sections, but to reduce friction between first impression and proof.',
  'portfolio-strategy-p2': 'The homepage acts as a fast positioning surface: name, role, short intro, availability, featured work, about, and contact. The case-study page acts as evidence: it slows down the reader and explains the product decision path. The resume page stays text-first, so recruiters can scan experience without fighting the visual system.',
  'portfolio-h2-experience': '04. Experience Design',
  'portfolio-experience-p1': 'The homepage is designed for quick scanning. It opens with a compact identity moment, then moves into one featured case instead of a crowded project grid. This keeps attention on the strongest proof: the aitryon.art product experience redesign.',
  'portfolio-experience-p2': 'The case-study page follows a stable structure so future cases can be added without reinventing the narrative every time. It also helps me avoid writing case studies as loose process diaries. Each section has a job: explain the business context, the product decision, the design move, and the result.',
  'portfolio-h2-visual': '05. Visual System',
  'portfolio-visual-p1': 'The visual direction is dark editorial / noir: clean black backgrounds, restrained contrast, sharp typography, and rare acid-lime accents. I chose this direction because the portfolio needs to feel focused and professional, not like a colorful template or a generic SaaS landing page.',
  'portfolio-visual-p2': 'The design system uses Syne for display type and IBM Plex Sans for body/UI text. The typographic scale is intentionally restrained. Earlier iterations felt too poster-like, especially on detail pages, so the current system favors calmer headings, readable body copy, and stronger spacing discipline.',
  'portfolio-h2-memory': '06. Memory System',
  'portfolio-memory-p1': 'The most important invisible part of the site is the memory system. I created local memory files to preserve decisions about positioning, typography, layout, content structure, bilingual rules, pending assets, and future backlog.',
  'portfolio-memory-p2': 'This matters because the website is not finished in one pass. It changes through many small design and content decisions. Without memory, each AI-assisted session risks reintroducing old choices, changing the visual language, or forgetting why a decision was made.',
  'portfolio-h2-compare': '07. Before / After',
  'portfolio-h2-outcome': '08. Outcome',
  'portfolio-outcome-p': 'This case shows a different kind of product design ability: not only designing pages, but designing the system that keeps pages consistent over time. The same thinking can apply to AI products, growth workflows, internal tools, and content operations.',
  'portfolio-h2-next': '09. Next Step'
});

Object.assign(translations.zh, {
  'skill-card-label': '精选案例',
  'skill-card-meta': '2026 · AI 工作流 · 产品运营 / SEO / 自动化',
  'skill-card-title': '面向产品、SEO 和增长工作的 AI Skill 系统',
  'skill-card-summary': '把重复的 SEO 写作、模型文档、资产整理和产品记忆任务，沉淀成可复用的本地 AI 工作流。',
  'skill-card-metric-1': '生产型 skills',
  'skill-card-metric-2': 'memory 索引页面',
  'skill-card-metric-3': '工作流层级',
  'skill-card-focus-1': 'Skill 设计',
  'skill-card-focus-2': '内容运营',
  'skill-card-focus-3': '本地记忆',
  'skill-card-focus-4': '校验机制',
  'portfolio-card-label': '精选案例',
  'portfolio-card-meta': '2026 · 作品集 · 产品定位 / UXUI / Memory System',
  'portfolio-card-title': '把作品集网站设计成一个持续生长的产品系统',
  'portfolio-card-summary': '将这个作品集设计成一个持续生长的产品叙事：包含暗色 editorial 界面、可复用案例结构、双语文案层和持续记忆系统。',
  'portfolio-card-metric-1': '核心页面',
  'portfolio-card-metric-2': '案例结构段落',
  'portfolio-card-metric-3': 'memory 文件',
  'portfolio-card-focus-1': '定位',
  'portfolio-card-focus-2': '视觉系统',
  'portfolio-card-focus-3': '案例结构',
  'portfolio-card-focus-4': '记忆系统',
  'skill-title': '从重复 AI 任务到可复用的产品设计 Skill 系统',
  'skill-intro': '我把重复的 SEO 写作、模型文档、资产整理和产品记忆任务，沉淀成一套本地 AI Skill 系统：包含结构化规则、可搜索 memory、校验脚本和复盘闭环。',
  'skill-meta-role': '产品工作流设计、AI Skill 设计、内容系统、质量规则',
  'skill-meta-product': '本地 AI 辅助工作系统',
  'skill-meta-scope': 'Skill 库、memory 结构、脚本、SEO 文案工作流',
  'case-artifacts-label': '产物',
  'skill-meta-artifacts': '3 个本地 skills、156 页 memory 索引、导入与 audit 脚本',
  'skill-h2-context': '01. 项目背景',
  'skill-context-p1': '在做 AI SaaS 产品和这个作品集的过程中，我发现很多任务并不是真正的一次性工作。每当新模型出现，模型落地页就需要更新；工具页需要稳定的示例、核心功能、使用场景、操作指南、相关工具和 FAQ；模型 README 需要严格遵循模板；网站资产整理不能破坏引用关系；作品集决策也需要跨越多次 AI 协作会话被保留下来。',
  'skill-context-p2': '一开始这些任务看起来像分散的写作或维护工作，但它们背后的模式是一样的：每个任务都需要清晰参考、可复用判断、边界规则、结果校验，以及把经验带入下一次工作的机制。',
  'skill-h2-problem': '02. 核心问题',
  'skill-problem-p': '问题不只是效率。AI 可以很快生成内容，但如果结构漂移、产品事实变松、SEO 模块被随意改写，或者每次都要重新解释之前的判断，快并没有真正解决问题。',
  'skill-h2-strategy': '03. 系统策略',
  'skill-strategy-p': '我的策略是把 skills 当成小型产品系统来设计。每个 skill 都有明确触发条件、范围、工作流、边界、参考文件、脚本和输出要求。它不是让 AI 简单地“写得更好”或“清理资产”，而是告诉 AI 应该如何判断、先检查什么、必须保留什么，以及如何验证结果。',
  'skill-h2-workflow': '04. 工作流设计',
  'skill-workflow-p1': '最清晰的例子是 SEO JSON Writer。它不只是生成 SEO 文案，而是先把参考 JSON 当成唯一结构来源，保留 key 名、section 顺序、H2 公式、CTA 字段和嵌套方式。然后搜索本地 memory 里的相似产品、模型家族或页面模式。初稿完成后，再校验 JSON 结构，并做竞品 review 来识别关键词和内容缺口，同时避免复制竞品。',
  'skill-workflow-p2': 'Asset Optimizer 也遵循类似原则。它不会直接压缩或重命名所有文件，而是先 audit，报告冲突，跳过隐藏文件、系统文件和构建产物，并且只在范围清楚后执行。这样让资产整理更安全，因为文件名和引用关系一旦随意改动，很容易破坏网站。',
  'skill-h2-library': '05. Skill 库',
  'skill-library-p': '当前本地 skill 库覆盖了三个高频生产环节。它们共同组成了一层面向 AI 产品工作的操作系统：内容生成、模型文档和资产维护都有各自的规则，而不是被一个通用 prompt 粗略处理。',
  'skill-h2-compare': '06. 前后对比',
  'skill-h2-outcome': '07. 结果',
  'skill-outcome-p': '这套系统帮助我表达了一种更完整的产品设计能力：我不只是会使用 AI 工具，也能设计围绕 AI 的工作流程。放在 AI SaaS 场景里，就是把快速变化的模型、SEO 页面、内容更新和交付约束，整理成可复用的工作系统。',
  'skill-h2-next': '08. 下一步',
  'portfolio-title': '让作品集记住决策：从静态展示到持续生长的产品叙事',
  'portfolio-intro': '我把这个作品集设计成一个持续生长的产品系统：它包含暗色 editorial 网站、双语内容层、可复用案例结构，以及让设计决策在多次迭代中保持一致的本地 memory 系统。',
  'portfolio-meta-role': '产品定位、UX/UI、内容策略、前端协作',
  'portfolio-meta-product': '个人作品集网站',
  'portfolio-meta-scope': '首页、案例页、简历页、视觉系统、双语文案、本地 memory',
  'portfolio-meta-artifacts': '网站页面、设计规则、内容规则、当前状态 memory、backlog',
  'portfolio-h2-context': '01. 项目背景',
  'portfolio-context-p1': '这个作品集最初的需求很简单：清楚展示我作为聚焦 AI 和增长方向的产品设计师 / PM 的工作。但真正的设计问题更复杂。网站需要解释一组混合能力：产品规划、UX/UI、SEO 内容系统、测试、数据复盘和代码协作。',
  'portfolio-context-p2': '标准作品集布局可以展示项目，但不一定能表达我的工作方式。我需要一个网站，既能呈现产品思考、上线结果和设计品味，也能表达我与 AI 和代码协作的能力，同时避免变成普通模板。',
  'portfolio-h2-problem': '02. 核心问题',
  'portfolio-problem-p': '核心问题是定位。我不想只呈现为 UI 设计师，也不是没有视觉能力的纯产品经理。这个网站需要同时承载两侧能力：设计敏感度，以及产品 / 增长执行力。',
  'portfolio-h2-strategy': '03. 产品策略',
  'portfolio-strategy-p1': '我把作品集本身当成一个小产品来设计。目标不是增加装饰性 section，而是降低访客从第一印象到看到证据之间的摩擦。',
  'portfolio-strategy-p2': '首页承担快速定位：姓名、角色、短介绍、可合作状态、精选作品、关于和联系。案例页承担证据：放慢阅读节奏，解释产品决策路径。简历页保持文本优先，让招聘者能快速扫描经历，而不会被视觉系统干扰。',
  'portfolio-h2-experience': '04. 体验设计',
  'portfolio-experience-p1': '首页为快速浏览而设计。它从紧凑的身份展示进入精选案例，而不是堆满项目网格。这样能把注意力集中在最强的证据：aitryon.art 产品体验重构。',
  'portfolio-experience-p2': '案例页采用稳定结构，让未来案例不需要每次重新发明叙事方式。它也避免我把 case study 写成松散的过程日记。每一段都有明确任务：解释业务背景、产品决策、设计动作和结果。',
  'portfolio-h2-visual': '05. 视觉系统',
  'portfolio-visual-p1': '视觉方向是 dark editorial / noir：干净的深色背景、克制对比、锐利字体，以及少量酸性黄绿色强调。我选择这个方向，是因为作品集需要显得专注、专业，而不是彩色模板或通用 SaaS 落地页。',
  'portfolio-visual-p2': '设计系统使用 Syne 做展示字体，IBM Plex Sans 做正文和 UI。字号层级有意保持克制。早期迭代在详情页上过于海报化，所以当前系统更偏向冷静标题、可读正文和更严格的间距纪律。',
  'portfolio-h2-memory': '06. Memory 系统',
  'portfolio-memory-p1': '这个网站最重要的不可见部分是 memory 系统。我创建了本地 memory 文件，用来保存定位、字体、布局、内容结构、双语规则、待补资产和未来 backlog。',
  'portfolio-memory-p2': '这很重要，因为网站不是一次完成的。它会在很多小设计和内容决策中持续变化。没有 memory，每次 AI 协作都可能重新引入旧选择、改变视觉语言，或者忘记某个决策为什么成立。',
  'portfolio-h2-compare': '07. 前后对比',
  'portfolio-h2-outcome': '08. 结果',
  'portfolio-outcome-p': '这个案例展示的是另一种产品设计能力：不只是设计页面，也设计让页面长期保持一致的系统。同样的思考方式也可以用于 AI 产品、增长工作流、内部工具和内容运营。',
  'portfolio-h2-next': '09. 下一步'
});

Object.assign(translations.en, {
  'image-placeholder-01': 'Image Placeholder 01',
  'image-placeholder-02': 'Image Placeholder 02',
  'image-placeholder-03': 'Image Placeholder 03',
  'image-placeholder-05': 'Image Placeholder 05',
  'image-placeholder-06': 'Image Placeholder 06',
  'skill-metric-1': 'production skill modules',
  'skill-metric-2': 'indexed content pages in local memory',
  'skill-metric-3': 'workflow layers: skill, reference, memory, script, review',
  'skill-metric-4': 'from prompt habit to reusable operating system',
  'skill-fig-architecture': 'System architecture: a local workflow that connects request framing, skill rules, memory, scripts, review, and future learning.',
  'skill-problem-li-1': 'Repeated tasks were scattered across prompts, memory, local notes, and manual habits.',
  'skill-problem-li-2': 'Different page types needed strict structure, but AI tended to improvise when the reference was not enforced.',
  'skill-problem-li-3': 'SEO optimization needed competitor awareness, but not at the cost of copying competitors or breaking the site schema.',
  'skill-problem-li-4': 'Portfolio and product decisions needed a persistent memory layer, otherwise each session started with too much rediscovery.',
  'skill-strategy-1-title': 'Skill rules',
  'skill-strategy-1-text': 'Task-specific instructions, trigger conditions, scope boundaries, and output requirements.',
  'skill-strategy-2-title': 'Reference patterns',
  'skill-strategy-2-text': 'Templates, page schemas, writing structures, and known section logic.',
  'skill-strategy-3-title': 'Local memory',
  'skill-strategy-3-text': 'Searchable summaries of existing pages and accepted SEO learnings.',
  'skill-strategy-4-title': 'Scripts',
  'skill-strategy-4-text': 'Repeatable helpers for importing, indexing, auditing, and validating output.',
  'skill-strategy-5-title': 'Human review',
  'skill-strategy-5-text': 'Final judgment on positioning, factual accuracy, conversion quality, and taste.',
  'skill-ph-architecture-title': 'System architecture diagram',
  'skill-ph-architecture-text': 'User request -> skill rules -> reference files -> memory search -> script validation -> draft output -> human review -> memory update.',
  'skill-ph-architecture-caption': 'Needed image: a clean architecture diagram showing how the AI collaboration loop is constrained and improved.',
  'skill-workflow-1-title': 'Reference matching',
  'skill-workflow-1-text': 'Keeps page schema, section order, and naming stable instead of letting AI improvise.',
  'skill-workflow-2-title': 'Memory search',
  'skill-workflow-2-text': 'Reuses historical judgment without copying old pages directly.',
  'skill-workflow-3-title': 'Competitor review',
  'skill-workflow-3-text': 'Improves search intent coverage while keeping copy original and grounded.',
  'skill-workflow-4-title': 'Validation',
  'skill-workflow-4-text': 'Checks JSON structure, naming drift, and risky changes before output is accepted.',
  'skill-ph-before-after-title': 'Before / after workflow graphic',
  'skill-ph-before-after-text': 'Left: prompt + manual memory + inconsistent output. Right: skill + reference + memory + validation + review.',
  'skill-ph-before-after-caption': 'Needed image: a before/after workflow comparison that makes the system benefit visible at a glance.',
  'skill-library-1-text': 'Creates and updates structured SEO page JSON while preserving schema, local style, keyword logic, and competitor review discipline.',
  'skill-library-2-text': 'Writes model readmes against fixed reference templates, keeping model documentation consistent without copying template sentences.',
  'skill-library-3-text': 'Audits and optimizes media assets with scope control, conflict detection, and safe apply behavior.',
  'skill-fig-library': 'Skill library map: SEO JSON Writer, Flaq Readme, and Asset Optimizer as reusable production modules.',
  'skill-table-1-1': 'SEO page writing',
  'skill-table-1-2': 'One-off AI drafts and manual edits',
  'skill-table-1-3': 'Structured JSON workflow with reference matching, memory search, validation, and review',
  'skill-table-2-1': 'Model documentation',
  'skill-table-2-2': 'Rewriting from examples by hand',
  'skill-table-2-3': 'Template-aligned readme workflow with model-specific constraints',
  'skill-table-3-1': 'Asset cleanup',
  'skill-table-3-2': 'Risky manual compression or renaming',
  'skill-table-3-3': 'Audit-first optimizer with conflict checks and scoped execution',
  'skill-table-4-1': 'Knowledge reuse',
  'skill-table-4-2': 'Decisions lived in chat history or memory',
  'skill-table-4-3': 'Searchable local memory and skill rules carry judgment forward',
  'skill-table-5-1': 'Human role',
  'skill-table-5-2': 'Repeating instructions and fixing drift',
  'skill-table-5-3': 'Reviewing positioning, accuracy, and quality',
  'skill-outcome-1-title': 'Reusable',
  'skill-outcome-1-text': 'AI assistance became a set of productized workflows instead of a blank chat window.',
  'skill-outcome-2-title': 'Consistent',
  'skill-outcome-2-text': 'Reference files, schemas, and memory reduce drift across repeated work.',
  'skill-outcome-3-title': 'Reviewable',
  'skill-outcome-3-text': 'Audit and validation steps expose risk before output is accepted or applied.',
  'skill-outcome-4-title': 'Compounding',
  'skill-outcome-4-text': 'Accepted decisions can be written back into memory to improve future work.',
  'skill-next-li-1': 'A portfolio case-study writing skill that keeps narrative, evidence, bilingual copy, and image requirements aligned.',
  'skill-next-li-2': 'A design review skill that checks spacing, typography, visual hierarchy, and page consistency against local design rules.',
  'skill-next-li-3': 'A bilingual content sync workflow that keeps English and Chinese copy updated together.',
  'skill-next-li-4': 'A stronger visual asset workflow for process diagrams, evidence screenshots, and case-study covers.',
  'skill-ph-future-title': 'Future memory loop diagram',
  'skill-ph-future-text': 'Product work -> skill rules -> AI collaboration -> output -> review -> memory -> next product work.',
  'skill-ph-future-caption': 'Needed image: a future loop diagram showing how this system can keep expanding.',
  'skill-nav-workflow': 'Workflow',
  'skill-nav-library': 'Library',
  'portfolio-metric-1': 'core pages: home, case study, resume',
  'portfolio-metric-2': 'language modes planned through one content layer',
  'portfolio-metric-3': 'repeatable case-study sections',
  'portfolio-metric-4': 'memory files guiding future iteration',
  'portfolio-ph-cover-title': 'Portfolio cover image',
  'portfolio-ph-cover-text': 'Suggested content: homepage hero and case-study page shown as a dark editorial spread. Use real screenshots of the site if possible.',
  'portfolio-ph-cover-caption': 'Needed image: a strong cover that shows the portfolio as a designed product, not only a personal page.',
  'portfolio-problem-li-1': 'The homepage needed to let visitors understand my focus quickly.',
  'portfolio-problem-li-2': 'The case-study page needed to feel like the same website, not a separate article template.',
  'portfolio-problem-li-3': 'The project story needed to show context, problem, strategy, decision, evidence, outcome, and next step.',
  'portfolio-problem-li-4': 'The site needed bilingual support without duplicating every page manually.',
  'portfolio-problem-li-5': 'AI collaboration needed persistent memory so design decisions would not drift across sessions.',
  'portfolio-strategy-1-title': 'Homepage',
  'portfolio-strategy-1-text': 'Fast positioning and one strongest project signal instead of a crowded grid.',
  'portfolio-strategy-2-title': 'Case page',
  'portfolio-strategy-2-text': 'Evidence-led narrative that explains context, decisions, systems, and outcome.',
  'portfolio-strategy-3-title': 'Resume',
  'portfolio-strategy-3-text': 'Text-first scan path for recruiters who need direct experience and skills.',
  'portfolio-strategy-4-title': 'Memory layer',
  'portfolio-strategy-4-text': 'Local rules and current-state files that keep future iterations coherent.',
  'portfolio-ph-ia-title': 'Website information architecture',
  'portfolio-ph-ia-text': 'Home -> Featured Case -> Case Study -> Resume -> Contact, with notes for what each page is responsible for.',
  'portfolio-ph-ia-caption': 'Needed image: an IA diagram showing how the portfolio moves visitors from first impression to evidence.',
  'portfolio-experience-1-title': 'Context',
  'portfolio-experience-1-text': 'Explain the product and market situation before showing design work.',
  'portfolio-experience-2-title': 'Problem',
  'portfolio-experience-2-text': 'Turn scattered pain points into a clear product challenge.',
  'portfolio-experience-3-title': 'Strategy',
  'portfolio-experience-3-text': 'Show the decision logic and tradeoffs behind the redesign.',
  'portfolio-experience-4-title': 'Outcome',
  'portfolio-experience-4-text': 'Connect visual and product changes to measurable or directional impact.',
  'portfolio-ph-structure-title': 'Case-study structure flow',
  'portfolio-ph-structure-text': 'Eight numbered sections in a vertical editorial flow, matching the rhythm of the aitryon case page.',
  'portfolio-ph-structure-caption': 'Needed image: a narrative flow diagram for the reusable case-study structure.',
  'portfolio-visual-1-title': 'Coherence',
  'portfolio-visual-1-text': 'Homepage, case page, and resume share one visual language.',
  'portfolio-visual-2-title': 'Restraint',
  'portfolio-visual-2-text': 'Accent color is used only for active states, proof points, and key actions.',
  'portfolio-visual-3-title': 'Rhythm',
  'portfolio-visual-3-text': 'Stable image ratios and compact typography protect the editorial reading flow.',
  'portfolio-fig-visual': 'Visual system board: typography, color, spacing, navigation states, and case-page rhythm in one dark editorial language.',
  'portfolio-memory-1-text': 'Records the active state of the site and the preferred first-read context.',
  'portfolio-memory-2-text': 'Defines the current visual direction, typography, layout logic, and guardrails.',
  'portfolio-memory-3-text': 'Keeps copy, case-study narrative, metrics, and bilingual rules aligned.',
  'portfolio-memory-4-text': 'Tracks pending visual assets, evidence, polish, and future structure decisions.',
  'portfolio-fig-memory': 'Memory system: local markdown files preserve decisions, rationale, backlog, and future iteration context.',
  'portfolio-table-1-1': 'Positioning',
  'portfolio-table-1-2': 'Mixed identity across UI design, product, and AI tools',
  'portfolio-table-1-3': 'Clearer AI / growth-focused Product Designer & PM direction',
  'portfolio-table-2-1': 'Homepage',
  'portfolio-table-2-2': 'Risk of becoming a generic portfolio index',
  'portfolio-table-2-3': 'Focused first impression with one featured case and direct proof',
  'portfolio-table-3-1': 'Case study',
  'portfolio-table-3-2': 'Could drift into a standalone page style',
  'portfolio-table-3-3': 'Shares the same dark editorial system as the homepage',
  'portfolio-table-4-1': 'Content',
  'portfolio-table-4-2': 'Decisions lived in chat or temporary notes',
  'portfolio-table-4-3': 'Current state, design rules, content rules, and backlog guide each iteration',
  'portfolio-table-5-1': 'Language',
  'portfolio-table-5-2': 'Future bilingual copy was easy to forget',
  'portfolio-table-5-3': 'Translation rules keep English and Chinese content paired',
  'portfolio-outcome-1-title': 'Sharper',
  'portfolio-outcome-1-text': 'The site presents product design, AI SaaS, growth, SEO content, and shipped work as one connected identity.',
  'portfolio-outcome-2-title': 'Coherent',
  'portfolio-outcome-2-text': 'Homepage, case page, and resume now share a consistent editorial system.',
  'portfolio-outcome-3-title': 'Reusable',
  'portfolio-outcome-3-text': 'The case-study structure can support future projects without starting from a blank page.',
  'portfolio-outcome-4-title': 'Persistent',
  'portfolio-outcome-4-text': 'The memory layer keeps design decisions available for future AI-assisted iterations.',
  'portfolio-next-li-1': 'Add stronger case-study cover images and process visuals.',
  'portfolio-next-li-2': 'Add evidence screenshots or source notes for metrics.',
  'portfolio-next-li-3': 'Build future case pages from the same narrative structure.',
  'portfolio-next-li-4': 'Improve bilingual polish across homepage, case page, and resume.',
  'portfolio-next-li-5': 'Turn design review and case-study drafting into reusable skills.',
  'portfolio-ph-roadmap-title': 'Portfolio roadmap visual',
  'portfolio-ph-roadmap-text': 'Current site foundation -> stronger visuals -> more cases -> bilingual polish -> reusable portfolio workflow.',
  'portfolio-ph-roadmap-caption': 'Needed image: a roadmap visual for how this portfolio system should mature next.',
  'portfolio-nav-visual': 'Visual',
  'portfolio-nav-memory': 'Memory'
});

Object.assign(translations.zh, {
  'image-placeholder-01': '配图占位 01',
  'image-placeholder-02': '配图占位 02',
  'image-placeholder-03': '配图占位 03',
  'image-placeholder-05': '配图占位 05',
  'image-placeholder-06': '配图占位 06',
  'skill-metric-1': '生产型 skill 模块',
  'skill-metric-2': '本地 memory 索引内容页',
  'skill-metric-3': '工作流层级：skill、参考、memory、脚本、审核',
  'skill-metric-4': '从临时 prompt 习惯到可复用操作系统',
  'skill-fig-architecture': '系统架构：把需求判断、skill 规则、memory、脚本、审核和后续学习连接成一个本地工作流。',
  'skill-problem-li-1': '重复任务分散在 prompt、memory、本地笔记和人工习惯里。',
  'skill-problem-li-2': '不同页面类型需要严格结构，但参考不明确时 AI 容易自由发挥。',
  'skill-problem-li-3': 'SEO 优化需要竞品意识，但不能因此复制竞品或破坏站点 schema。',
  'skill-problem-li-4': '作品集和产品决策需要持久 memory，否则每次协作都会重新发现问题。',
  'skill-strategy-1-title': 'Skill 规则',
  'skill-strategy-1-text': '任务专属说明、触发条件、范围边界和输出要求。',
  'skill-strategy-2-title': '参考模式',
  'skill-strategy-2-text': '模板、页面 schema、写作结构和已确认的 section 逻辑。',
  'skill-strategy-3-title': '本地 memory',
  'skill-strategy-3-text': '可搜索的历史页面摘要和已采纳 SEO 经验。',
  'skill-strategy-4-title': '脚本',
  'skill-strategy-4-text': '用于导入、索引、audit 和校验输出的可重复工具。',
  'skill-strategy-5-title': '人工审核',
  'skill-strategy-5-text': '最终判断定位、事实准确性、转化质量和设计品味。',
  'skill-ph-architecture-title': '系统架构图',
  'skill-ph-architecture-text': '用户请求 -> skill 规则 -> 参考文件 -> memory 检索 -> 脚本校验 -> 初稿输出 -> 人工审核 -> memory 更新。',
  'skill-ph-architecture-caption': '待补配图：展示 AI 协作如何被约束、校验并持续改进的架构图。',
  'skill-workflow-1-title': '参考匹配',
  'skill-workflow-1-text': '保持页面 schema、section 顺序和命名稳定，避免 AI 随意发挥。',
  'skill-workflow-2-title': 'Memory 检索',
  'skill-workflow-2-text': '复用历史判断，但不直接复制旧页面。',
  'skill-workflow-3-title': '竞品 Review',
  'skill-workflow-3-text': '补足搜索意图覆盖，同时保持文案原创和事实可靠。',
  'skill-workflow-4-title': '校验',
  'skill-workflow-4-text': '在接受输出前检查 JSON 结构、命名漂移和风险改动。',
  'skill-ph-before-after-title': 'Before / After 工作流图',
  'skill-ph-before-after-text': '左侧：prompt + 人工记忆 + 不稳定输出。右侧：skill + 参考 + memory + 校验 + 审核。',
  'skill-ph-before-after-caption': '待补配图：一眼看懂系统化前后差异的工作流对比图。',
  'skill-library-1-text': '创建和更新结构化 SEO 页面 JSON，同时保留 schema、本地语气、关键词逻辑和竞品 review 纪律。',
  'skill-library-2-text': '基于固定参考模板撰写模型 README，保持文档一致性，同时避免复制模板句子。',
  'skill-library-3-text': '通过范围控制、冲突检测和安全执行来 audit 与优化媒体资产。',
  'skill-fig-library': 'Skill 库地图：SEO JSON Writer、Flaq Readme 和 Asset Optimizer 被整理成可复用生产模块。',
  'skill-table-1-1': 'SEO 页面写作',
  'skill-table-1-2': '一次性 AI 初稿和人工修改',
  'skill-table-1-3': '带参考匹配、memory 检索、校验和 review 的结构化 JSON 工作流',
  'skill-table-2-1': '模型文档',
  'skill-table-2-2': '手动参考示例重写',
  'skill-table-2-3': '与模板对齐、带模型约束的 README 工作流',
  'skill-table-3-1': '资产整理',
  'skill-table-3-2': '手动压缩或重命名，风险较高',
  'skill-table-3-3': '先 audit，再做冲突检查和范围内执行',
  'skill-table-4-1': '知识复用',
  'skill-table-4-2': '决策散落在聊天历史或临时记忆里',
  'skill-table-4-3': '可搜索本地 memory 和 skill 规则承接判断',
  'skill-table-5-1': '人的角色',
  'skill-table-5-2': '重复解释要求并修正漂移',
  'skill-table-5-3': '集中审核定位、准确性和质量',
  'skill-outcome-1-title': '可复用',
  'skill-outcome-1-text': 'AI 协助从空白聊天窗口变成一组产品化工作流。',
  'skill-outcome-2-title': '更一致',
  'skill-outcome-2-text': '参考文件、schema 和 memory 减少重复工作中的漂移。',
  'skill-outcome-3-title': '可审核',
  'skill-outcome-3-text': 'Audit 和校验步骤会在接受或应用输出前暴露风险。',
  'skill-outcome-4-title': '可积累',
  'skill-outcome-4-text': '已采纳决策可以写回 memory，让后续工作继续变好。',
  'skill-next-li-1': '建立作品集 case-study 写作 skill，让叙事、证据、双语文案和配图需求保持一致。',
  'skill-next-li-2': '建立设计 review skill，检查间距、字体、视觉层级和页面一致性。',
  'skill-next-li-3': '建立双语内容同步工作流，让英文和中文文案一起更新。',
  'skill-next-li-4': '完善视觉资产工作流，用于流程图、证据截图和案例封面。',
  'skill-ph-future-title': '未来 memory 循环图',
  'skill-ph-future-text': '产品工作 -> skill 规则 -> AI 协作 -> 输出 -> 审核 -> memory -> 下一次产品工作。',
  'skill-ph-future-caption': '待补配图：展示这个系统如何继续扩展的未来循环图。',
  'skill-nav-workflow': '工作流',
  'skill-nav-library': 'Skill 库',
  'portfolio-metric-1': '核心页面：首页、案例页、简历页',
  'portfolio-metric-2': '通过一个内容层规划双语模式',
  'portfolio-metric-3': '可复用 case-study 段落结构',
  'portfolio-metric-4': '指导未来迭代的 memory 文件',
  'portfolio-ph-cover-title': '作品集封面图',
  'portfolio-ph-cover-text': '建议内容：首页 hero 和案例页以暗色 editorial 拼贴展示。尽量使用真实网站截图。',
  'portfolio-ph-cover-caption': '待补配图：让作品集看起来像一个被设计过的产品，而不只是个人页面。',
  'portfolio-problem-li-1': '首页需要让访客快速理解我的方向。',
  'portfolio-problem-li-2': '案例页需要和首页像同一个网站，而不是独立文章模板。',
  'portfolio-problem-li-3': '项目故事需要展示背景、问题、策略、决策、证据、结果和下一步。',
  'portfolio-problem-li-4': '网站需要双语支持，但不应该手动复制两套页面。',
  'portfolio-problem-li-5': 'AI 协作需要持久 memory，避免设计决策在多次会话中漂移。',
  'portfolio-strategy-1-title': '首页',
  'portfolio-strategy-1-text': '快速定位，并突出最强项目证据，而不是拥挤项目网格。',
  'portfolio-strategy-2-title': '案例页',
  'portfolio-strategy-2-text': '用证据导向的叙事解释背景、决策、系统和结果。',
  'portfolio-strategy-3-title': '简历页',
  'portfolio-strategy-3-text': '给招聘者一条文本优先的快速扫描路径。',
  'portfolio-strategy-4-title': 'Memory 层',
  'portfolio-strategy-4-text': '用本地规则和当前状态文件保持未来迭代的一致性。',
  'portfolio-ph-ia-title': '网站信息架构',
  'portfolio-ph-ia-text': '首页 -> 精选案例 -> 案例页 -> 简历 -> 联系，并标注每个页面承担的职责。',
  'portfolio-ph-ia-caption': '待补配图：展示作品集如何把访客从第一印象带到证据的 IA 图。',
  'portfolio-experience-1-title': '背景',
  'portfolio-experience-1-text': '先解释产品和市场情况，再展示设计工作。',
  'portfolio-experience-2-title': '问题',
  'portfolio-experience-2-text': '把分散痛点整理成清晰产品挑战。',
  'portfolio-experience-3-title': '策略',
  'portfolio-experience-3-text': '展示重构背后的决策逻辑和取舍。',
  'portfolio-experience-4-title': '结果',
  'portfolio-experience-4-text': '把视觉和产品变化连接到可衡量或方向性的影响。',
  'portfolio-ph-structure-title': '案例结构流程',
  'portfolio-ph-structure-text': '用纵向 editorial 流程展示八个编号段落，和 aitryon 案例节奏保持一致。',
  'portfolio-ph-structure-caption': '待补配图：展示可复用 case-study 结构的叙事流程图。',
  'portfolio-visual-1-title': '一致性',
  'portfolio-visual-1-text': '首页、案例页和简历页共用一套视觉语言。',
  'portfolio-visual-2-title': '克制',
  'portfolio-visual-2-text': '强调色只用于 active 状态、证明点和关键操作。',
  'portfolio-visual-3-title': '节奏',
  'portfolio-visual-3-text': '稳定图片比例和紧凑排版保护 editorial 阅读节奏。',
  'portfolio-fig-visual': '视觉系统板：字体、颜色、间距、导航状态和案例页节奏被统一到一套暗色 editorial 语言里。',
  'portfolio-memory-1-text': '记录网站当前状态和未来会话优先读取的上下文。',
  'portfolio-memory-2-text': '定义当前视觉方向、字体、布局逻辑和设计边界。',
  'portfolio-memory-3-text': '让文案、案例叙事、指标和双语规则保持一致。',
  'portfolio-memory-4-text': '跟踪待补视觉资产、证据、打磨项和未来结构决策。',
  'portfolio-fig-memory': 'Memory 系统：本地 markdown 文件保存决策、理由、backlog 和未来迭代上下文。',
  'portfolio-table-1-1': '定位',
  'portfolio-table-1-2': 'UI 设计、产品和 AI 工具能力混在一起',
  'portfolio-table-1-3': '更清晰的 AI / 增长方向 Product Designer & PM 定位',
  'portfolio-table-2-1': '首页',
  'portfolio-table-2-2': '容易变成通用作品集索引',
  'portfolio-table-2-3': '用一个精选案例和直接证据建立第一印象',
  'portfolio-table-3-1': '案例页',
  'portfolio-table-3-2': '可能漂移成独立页面风格',
  'portfolio-table-3-3': '和首页共享同一套 dark editorial 系统',
  'portfolio-table-4-1': '内容',
  'portfolio-table-4-2': '决策散落在聊天或临时笔记里',
  'portfolio-table-4-3': '当前状态、设计规则、内容规则和 backlog 指导每次迭代',
  'portfolio-table-5-1': '语言',
  'portfolio-table-5-2': '未来双语文案容易被忘记',
  'portfolio-table-5-3': '翻译规则让英文和中文内容成对维护',
  'portfolio-outcome-1-title': '更清晰',
  'portfolio-outcome-1-text': '网站把产品设计、AI SaaS、增长、SEO 内容和上线工作连接成一个身份。',
  'portfolio-outcome-2-title': '更统一',
  'portfolio-outcome-2-text': '首页、案例页和简历页现在共享一致的 editorial 系统。',
  'portfolio-outcome-3-title': '可复用',
  'portfolio-outcome-3-text': '案例结构可以支持未来项目，不需要从空白页面开始。',
  'portfolio-outcome-4-title': '可持续',
  'portfolio-outcome-4-text': 'Memory 层让设计决策能被未来 AI 协作继续使用。',
  'portfolio-next-li-1': '补充更强的案例封面和过程图。',
  'portfolio-next-li-2': '为指标补充证据截图或来源说明。',
  'portfolio-next-li-3': '用同一叙事结构继续搭建未来案例页。',
  'portfolio-next-li-4': '继续打磨首页、案例页和简历页的双语体验。',
  'portfolio-next-li-5': '把设计 review 和 case-study 起草沉淀成可复用 skill。',
  'portfolio-ph-roadmap-title': '作品集路线图',
  'portfolio-ph-roadmap-text': '当前网站基础 -> 更强视觉 -> 更多案例 -> 双语打磨 -> 可复用作品集工作流。',
  'portfolio-ph-roadmap-caption': '待补配图：展示这个作品集系统下一步如何成熟。',
  'portfolio-nav-visual': '视觉',
  'portfolio-nav-memory': 'Memory'
});

const projects = [
  {
    title: "aitryon.art Product Experience Redesign",
    displayTitle: "aitryon.art",
    year: "2026",
    type: "AI SaaS · Product Strategy / UXUI / Growth",
    detailUrl: "./case-study-aitryon.html",
    image: "./assets/aitryon-featured-cover.png",
    summary: "AI SaaS product experience reframed from a vertical try-on tool into a broader image and video creation platform."
  }
];

const loader = document.querySelector("#loader");
const app = document.querySelector("#app");
const loaderCount = document.querySelector("#loaderCount");
const projectList = document.querySelector("#projectList");
const preview = document.querySelector("#preview");
const previewImage = document.querySelector("#previewImage");
const previewLink = document.querySelector("#previewLink");
const previewMeta = document.querySelector("#previewMeta");
const previewTitle = document.querySelector("#previewTitle");
const previewText = document.querySelector("#previewText");
const themeToggle = document.querySelector("#themeToggle");
const langToggle = document.querySelector("#langToggle");

const isIndexPage = !!loader;

let activeIndex = 0;
let count = 0;
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeLabel();

document.documentElement.setAttribute('lang', currentLang);
applyTranslations();

document.body.classList.add("is-loading");

if (!isIndexPage) {
  document.body.classList.remove("is-loading");
}

if (projectList) {
  projects.forEach((project, index) => {
    const item = document.createElement("button");
    item.className = "project-item";
    item.type = "button";
    item.innerHTML = `
      <span class="project-year">${project.year}</span>
      <span class="project-title">${project.displayTitle || project.title}</span>
      <span class="project-type">${project.type}</span>
    `;
    item.addEventListener("mouseenter", () => setActiveProject(index));
    item.addEventListener("focus", () => setActiveProject(index));
    item.addEventListener("click", () => setActiveProject(index));
    projectList.appendChild(item);
  });
}

function setActiveProject(index) {
  if (index === activeIndex) {
    syncActiveButton();
    return;
  }
  activeIndex = index;
  const project = projects[index];
  if (!preview || !previewImage || !previewLink || !previewMeta || !previewTitle || !previewText) return;

  preview.classList.add("is-changing");
  window.setTimeout(() => {
    previewImage.src = project.image;
    previewImage.alt = `${project.title} preview`;
    previewLink.href = project.detailUrl;
    previewLink.setAttribute("aria-label", `View ${project.title} case study`);
    previewMeta.textContent = `${project.year} / ${project.type}`;
    const previewTitleText = previewTitle.querySelector('span') || previewTitle;
    previewTitleText.textContent = project.title;
    previewText.textContent = project.summary;
    syncActiveButton();
    preview.classList.remove("is-changing");
  }, 140);
}

function syncActiveButton() {
  if (!projectList) return;
  [...projectList.children].forEach((item, index) => {
    item.classList.toggle("is-active", index === activeIndex);
  });
}

function updateThemeLabel() {
  if (!themeToggle) return;
  const label = themeToggle.querySelector('.theme-label');
  if (label) label.textContent = currentTheme === 'dark' ? 'LIGHT' : 'DARK';
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  if (langToggle) {
    const langText = langToggle.querySelector('.lang-text');
    if (langText) langText.textContent = currentLang === 'en' ? '中文' : 'EN';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeLabel();
  });
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.documentElement.setAttribute('lang', currentLang);
    localStorage.setItem('lang', currentLang);
    applyTranslations();
  });
}

if (projectList) {
  syncActiveButton();
  previewLink.href = projects[activeIndex].detailUrl;
  previewLink.setAttribute("aria-label", `View ${projects[activeIndex].title} case study`);
} else if (previewLink && projects[activeIndex]) {
  previewLink.href = projects[activeIndex].detailUrl;
  previewLink.setAttribute("aria-label", `View ${projects[activeIndex].title} case study`);
}

if (isIndexPage && !window.location.hash) {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  window.addEventListener('pageshow', () => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  });
}

// ─── Scroll reveal (scroll position triggers one-shot animation) ───────────
function initScrollReveal() {
  const revealSections = Array.from(document.querySelectorAll('.reveal-section'));
  if (!revealSections.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    revealSections.forEach(section => section.classList.add('is-visible'));
    return;
  }

  const pendingSections = new Set(
    revealSections.filter(section => !section.classList.contains('hero-about'))
  );
  const pendingLineMasks = new Set(document.querySelectorAll('.contact-headline .title-mask'));
  if (!pendingSections.size && !pendingLineMasks.size) return;

  let ticking = false;

  const update = () => {
    ticking = false;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const triggerLine = viewportHeight * 0.58;
    const contactLineTrigger = viewportHeight * 0.76;

    pendingSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= triggerLine) {
        section.classList.add('is-visible');
        pendingSections.delete(section);
      }
    });

    pendingLineMasks.forEach(mask => {
      const rect = mask.getBoundingClientRect();
      if (rect.top <= contactLineTrigger) {
        mask.classList.add('is-line-visible');
        pendingLineMasks.delete(mask);
      }
    });

    if (!pendingSections.size && !pendingLineMasks.size) {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    }
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
}

// ─── Loader (only on index page) ───────────────────────────────────────────
if (isIndexPage) {
  const timer = window.setInterval(() => {
    count += 5;
    const progress = Math.min(count, 100);
    loaderCount.textContent = String(progress).padStart(2, "0");
    loader.style.setProperty("--load-progress", `${progress}%`);
    if (progress >= 100) {
      window.clearInterval(timer);
      loader.classList.add("is-hidden");
      document.body.classList.remove("is-loading");
      setTimeout(() => {
        const hero = document.querySelector('.hero-about');
        if (hero) hero.classList.add('is-visible');
        initScrollReveal();
      }, 700);
    }
  }, 55);
}
