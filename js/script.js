if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// ─── Translations ───────────────────────────────────────────────────────────
const translations = {
  en: {
    'nav-works': 'Works',
    'nav-about': 'About',
    'nav-resume': 'Resume',
    'nav-contact': 'Contact',
    'hero-kicker': 'PRODUCT DESIGNER & PM',
    'about-intro-1': 'Designer who ships. I work across research, Figma, and code — building AI SaaS products that grow.',
    'about-intro-2': 'Based in Guangzhou. Currently at a startup shipping AI image and video tools.',
    'tag-available': '● AVAILABLE FOR WORK',
    'tag-location': 'GUANGZHOU, CHINA',
    'section-projects': 'Selected Projects',
    'preview-cta': 'View full case study ↗',
    'featured-summary': 'Reframed AI try-on into an image and video creation platform, linking generation entry, SEO structure, and measurable growth.',
    'featured-metric-1': 'visit duration',
    'featured-metric-2': 'subscription conversion',
    'featured-metric-3': 'monthly net profit',
    'featured-focus-1': 'Product Narrative',
    'featured-focus-2': 'Generation Entry',
    'featured-focus-3': 'SEO Path',
    'featured-focus-4': 'Studio Next',
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
    'contact-line-1': 'Say hi!',
    'contact-line-2': "Let's talk",
    'contact-location': 'Guangzhou, China',
    'contact-copy': '© 2026 Lin Han hui · Product Designer & PM',
    // Case study
    'cs-back': 'Back to works',
    'cs-title': 'From AI Try-On tool to AI image & video creation platform: aitryon.art product experience redesign',
    'cs-intro': 'aitryon.art had outgrown its original try-on positioning. I reframed it as an AI image and video creation platform, redesigned the homepage generation entry, and connected that entry with tool pages, model pages, and the post-login flow. After launch, visit duration rose 83.3%, subscription conversion rose 40%, and monthly net profit was about 2.4x higher.',
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
    'cs-01-p1': 'Before this project, aitryon.art was still mainly perceived as an AI try-on tool. Vertical tools like this could work in the early days: users were drawn in by a single try-on toy, such as clothing, color, or tattoo, completed a trial, and sometimes even paid because it happened to solve their need.',
    'cs-01-p2': 'That premise started to break as general image models improved. Many lightweight try-on needs no longer required a dedicated tool. At the same time, higher-intent users cared more about model quality, batch creation, product images, short videos, and social content.',
    'cs-01-note-label': 'Basis for the judgment',
    'cs-01-note': 'The signal did not come from one channel. Users were arriving through Google, TikTok, YouTube, Reddit, Product Hunt, AI directories, and external links. That told me the product was no longer being discovered only as a try-on tool. The market was moving the same way: general image models were absorbing simple try-on use cases, while video models were becoming part of creator workflows. The product needed to move with that shift.',
    'cs-01-grid-1-label': 'Old growth logic',
    'cs-01-grid-1': 'Use vertical try-on tools to catch curiosity traffic and long-tail search, solving one-off small needs.',
    'cs-01-grid-2-label': 'New user intent',
    'cs-01-grid-2': 'Try new models, generate images and videos, produce product imagery, short videos, or social content.',
    'cs-01-grid-3-label': 'Product pivot',
    'cs-01-grid-3': 'From a tool collection to a more professional AI image & video creation platform.',
    'cs-h2-02': '02. Core Problem',
    'cs-02-p1': 'The old page introduced the product, but it did not explain fast enough what aitryon.art had become. Users still had to read, choose a tool, move to another page, upload, log in, and then generate. The path had too many small handoffs.',
    'cs-02-p2': 'I split the problem into three layers: product positioning had not caught up with capability expansion; the homepage lacked a strong enough generation entry; SEO and tool pages drove traffic but content structure, page templates, and downstream generation experience were not unified.',
    'cs-02-li-1': 'The old homepage was display-first. Users had to find a tool, enter the tool page, then upload, log in, and generate.',
    'cs-02-li-2': 'Outward narrative still skewed toward try-on, unable to express compound capabilities across image, video, UGC, and avatars.',
    'cs-02-li-3': 'Homepage generation entry and tool page forms could pass parameters, but UI style and experience rhythm were inconsistent.',
    'cs-02-li-4': 'History entry existed, but visuals were dated; reviewing older history required jumping between generation and history.',
    'cs-02-li-5': 'Model pages and tool pages had SEO potential but needed more stable templates and continuous update mechanisms.',
    'cs-h2-03': '03. Product Strategy',
    'cs-03-p1': 'A visual refresh would not solve the problem. The homepage needed to become a generation entry. Model pages and tool pages also needed to work as part of the product path instead of stopping at traffic.',
    'cs-03-p2': 'I prioritized shifting the product narrative from a single-point try-on tool to an AI image & video creation platform. The homepage now defaults to AI Video, because video model heat and conversion potential are higher; AI Image and Virtual Try On are still preserved so old and new users can find their own entries.',
    'cs-03-grid-1-label': 'Start generation earlier',
    'cs-03-grid-1': 'Users can upload, write a prompt, choose a type, pick a model, and continue from the first screen.',
    'cs-03-grid-2-label': 'Make SEO pages useful after the click',
    'cs-03-grid-2': 'Model and tool pages should help users understand what to generate next after they land.',
    'cs-03-grid-3-label': 'Ship in smaller steps',
    'cs-03-grid-3': 'I changed the homepage and entry stitching first, while leaving the full generation workspace for the next phase.',
    'cs-03-grid-4-label': 'Keep the Studio direction open',
    'cs-03-grid-4': 'The fragmented form, result, and history experience became the next product problem to solve.',
    'cs-fig-before': 'Before: the page felt like a lightweight try-on landing page with a content display. Platform capability was not clear.',
    'cs-h2-04': '04. Experience Redesign',
    'cs-04-p1': 'The redesigned homepage lets users start before they fully understand the whole site. They can upload an image, write a prompt, choose AI Video, AI Image, or Virtual Try On, then pick a model and template. If they need to log in, their input is preserved and carried into the right tool page afterward.',
    'cs-04-li-1': 'Homepage defaults to AI Video to capture higher-heat, higher-conversion video generation intent.',
    'cs-04-li-2': 'Prompts, uploaded images, models, templates, and related generation params from the homepage carry into the tool page.',
    'cs-04-li-3': 'The generation page was not fully rebuilt in this version. I only adjusted color and entry stitching, because AI Studio comes next.',
    'cs-04-li-4': 'History entry was preserved as-is, but flagged as the key experience problem to unify in Studio next.',
    'cs-fig-after': 'After: the product narrative moved toward an AI image and video creation platform. The image shows the structural alignment cut; live copy was adjusted later.',
    'cs-h2-05': '05. SEO Content System',
    'cs-05-p1': 'SEO was not a separate content task in this project. It was part of the product path. Model pages captured demand by model name, and tool pages captured task-based intent. Both needed to guide users toward generation.',
    'cs-05-p2': 'To let future model and tool pages keep scaling, I built a JSON-based copy generation skill. It can batch-produce baseline English copy while keeping examples, features, advantages, use cases, how-to guides, related tools, and FAQ modules consistent in structure, H2 phrasing, and SEO keywords. I still review the output by hand so the pages read like product copy, not keyword stuffing.',
    'cs-05-grid-1-label': 'Model landing pages',
    'cs-05-grid-1': 'Capture search intent by model name, introduce model capability, and guide users into the matching generation tool.',
    'cs-05-grid-2-label': 'Tool pages',
    'cs-05-grid-2': 'Catch task-based needs such as video generation, image generation, and virtual try-on workflows.',
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
    'cs-td-4-3': 'Model pages, tool pages, articles, and the writing skill now support the same generation path',
    'cs-td-5-1': 'Next phase',
    'cs-td-5-2': 'Generation page, tool page, and history experience were fragmented',
    'cs-td-5-3': 'Plan AI Studio to unify generation forms, results, and history into one workflow',
    'cs-h2-07': '07. Outcome',
    'cs-out-1': 'visit duration: 18s → 33s',
    'cs-out-2': 'pages per visit: 1.79 → 2.02',
    'cs-out-3': 'subscription conversion: 0.5% → 0.7%',
    'cs-out-4': 'monthly net profit: ~$1,250 → ~$3,000',
    'cs-07-p': 'I checked whether users stayed longer, opened more pages, subscribed more often, and whether the business result moved. All four moved in the right direction after the small releases.',
    'cs-h2-08': '08. Next: AI Studio',
    'cs-08-p': 'This release fixed the positioning and made generation easier to start. It also made the next problem more obvious: generation forms, result preview, and history still lived in separate places. AI Studio is the next step toward putting that workflow in one workspace.',
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
    'nav-resume': '履历',
    'nav-contact': '联系',
    'hero-kicker': '产品设计师 & PM',
    'about-intro-1': '设计师，也写代码。从调研到 Figma 到上线，全程参与 AI SaaS 产品的增长。',
    'about-intro-2': '广州。目前在做 AI 图像和视频工具。',
    'tag-available': '● 接受新项目',
    'tag-location': '中国 · 广州',
    'section-projects': '精选项目',
    'preview-cta': '查看完整案例 ↗',
    'featured-summary': '将 AI 试穿重构为图像与视频创作平台，把生成入口、SEO 结构和增长结果连接起来。',
    'featured-metric-1': '访问时长',
    'featured-metric-2': '订阅转化',
    'featured-metric-3': '月纯利润',
    'featured-focus-1': '产品叙事',
    'featured-focus-2': '生成入口',
    'featured-focus-3': 'SEO 路径',
    'featured-focus-4': 'Studio 下一步',
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
    'contact-line-1': 'Say hi!',
    'contact-line-2': "Let's talk",
    'contact-location': '中国 · 广州',
    'contact-copy': '© 2026 Lin Han hui · 产品设计师 & PM',
    // Case study
    'cs-back': '返回作品',
    'cs-title': '从 AI Try-On 工具到 AI 图像视频创作平台：aitryon.art 产品体验重构',
    'cs-intro': 'aitryon.art 已经不再适合原来的 AI 试穿定位。我把它重新定义为 AI 图像与视频创作平台，重做首页生成入口，并把这个入口和工具页、模型页、登录后的生成流程接起来。上线后，访问时长提升 83.3%，订阅转化提升 40%，月净利润约提升 2.4 倍。',
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
    'cs-01-p2': '随着通用图像模型变强，这个前提开始松动。很多轻量试穿需求不再需要专门工具。与此同时，意图更强的用户更关心模型质量、批量创作、商品图、短视频和社媒内容。',
    'cs-01-note-label': '判断依据',
    'cs-01-note': '这个信号不是来自单一渠道。用户同时从 Google、TikTok、YouTube、Reddit、Product Hunt、AI 工具导航站和外链进入，这说明产品已经不只是通过试穿场景被发现。市场也在往同一个方向走：通用图像模型正在吸收简单试穿场景，视频模型也开始进入创作者工作流。产品需要跟上这个变化。',
    'cs-01-grid-1-label': '旧增长逻辑',
    'cs-01-grid-1': '用垂直试穿工具承接好奇流量和长尾搜索，解决一次性的小需求。',
    'cs-01-grid-2-label': '新用户意图',
    'cs-01-grid-2': '尝试新模型，生成图片和视频，完成商品图、短视频或社媒内容。',
    'cs-01-grid-3-label': '产品转向',
    'cs-01-grid-3': '从工具集合转向更专业的 AI 图像与视频创作平台。',
    'cs-h2-02': '02. 核心问题',
    'cs-02-p1': '旧页面介绍了产品，但没有足够快地解释 aitryon.art 已经变成什么。用户仍然需要先阅读、选择工具、跳到另一个页面、上传、登录，然后才能生成。中间有太多小跳转。',
    'cs-02-p2': '我把问题拆成三个层面：产品定位没有跟上能力扩展，首页没有足够强的生成入口，SEO 页面和工具页虽然能带来流量，但内容结构、页面模板和后续生成体验还不够统一。',
    'cs-02-li-1': '旧首页是展示优先。用户需要先找到工具，进入工具页，再上传、登录和生成。',
    'cs-02-li-2': '产品对外仍然偏试穿工具叙事，无法充分表达图像、视频、UGC、头像生成等复合能力。',
    'cs-02-li-3': '首页生成入口和工具页表单可以传参，但 UI 风格和体验节奏不一致。',
    'cs-02-li-4': '历史记录入口存在，但视觉较旧，用户查看早期历史时需要在生成和历史之间来回跳转。',
    'cs-02-li-5': '模型页和工具页有 SEO 潜力，但需要更稳定的内容模板和持续更新机制。',
    'cs-h2-03': '03. 产品策略',
    'cs-03-p1': '只做一次视觉刷新解决不了问题。首页需要变成生成入口，模型页和工具页也不能只停留在承接流量，而要进入产品路径。',
    'cs-03-p2': '我优先把产品叙事从单点试穿工具转为 AI 图像与视频创作平台。首页默认突出 AI Video，因为视频模型的热度和转化潜力更高，同时保留 AI Image 和 Virtual Try On，让旧用户和新用户都能找到自己的入口。',
    'cs-03-grid-1-label': '更早开始生成',
    'cs-03-grid-1': '用户可以在首屏上传、输入提示词、选择类型和模型，然后继续往下走。',
    'cs-03-grid-2-label': '让 SEO 页面在点击后也有用',
    'cs-03-grid-2': '模型页和工具页不只带来流量，也要帮助用户理解下一步该生成什么。',
    'cs-03-grid-3-label': '分小步上线',
    'cs-03-grid-3': '我先改首页和入口衔接，把完整生成工作区留到下一阶段。',
    'cs-03-grid-4-label': '保留 Studio 方向',
    'cs-03-grid-4': '表单、结果和历史记录分散的问题，变成下一步要解决的产品问题。',
    'cs-fig-before': '改版前：页面更像轻量试穿工具落地页和内容展示，平台能力不够清晰。',
    'cs-h2-04': '04. 体验重构',
    'cs-04-p1': '新版首页让用户在还没完全理解整个网站之前，就可以先开始。用户可以上传图片、输入提示词、选择 AI Video、AI Image 或 Virtual Try On，再选择模型和模板。如果需要登录，输入内容会被保留，并在登录后带到对应工具页。',
    'cs-04-li-1': '首页默认选择 AI Video，优先承接更高热度和转化潜力的视频生成意图。',
    'cs-04-li-2': '首页输入的提示词、上传图、模型、模板和相关生成参数会带到工具页。',
    'cs-04-li-3': '这次没有完整重建生成页。我只先调整颜色和入口衔接，因为下一步会进入 AI Studio。',
    'cs-04-li-4': '历史记录保留现有入口，但我把它识别为下一阶段需要统一进 Studio 的关键体验问题。',
    'cs-fig-after': '改版后：产品叙事转向 AI 图像与视频创作平台。图中为结构对齐稿，线上文案后续有调整。',
    'cs-h2-05': '05. SEO 内容系统',
    'cs-05-p1': '在这个项目里，SEO 不是单独的内容任务，而是产品路径的一部分。模型页承接模型名需求，工具页承接具体任务需求，两者都要把用户引向生成。',
    'cs-05-p2': '为了让后续模型页和工具页能持续扩展，我沉淀了一套基于 JSON 的文案生成技能。它可以批量生成英文基础文案，并保持示例、功能、优势、使用场景、使用指南、更多工具、FAQ 等模块的结构、H2 说法和 SEO 关键词一致。我仍然会人工评审输出，确保页面读起来像产品文案，而不是关键词堆砌。',
    'cs-05-grid-1-label': '模型落地页',
    'cs-05-grid-1': '按模型名承接搜索意图，介绍模型能力，并引导用户进入对应生成工具。',
    'cs-05-grid-2-label': '工具页',
    'cs-05-grid-2': '承接按任务搜索的需求，例如视频生成、图片生成和虚拟试穿流程。',
    'cs-05-grid-3-label': '文章内容',
    'cs-05-grid-3': '运营内容用于补充长尾关键词、教程和专题内容。',
    'cs-05-grid-4-label': '文案技能',
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
    'cs-td-2-2': '展示产品介绍和首屏图片',
    'cs-td-2-3': '直接承接上传、提示词、模型和生成意图',
    'cs-td-3-1': '生成路径',
    'cs-td-3-2': '用户需要先理解页面，再寻找工具入口',
    'cs-td-3-3': '登录后保留输入内容，并带到对应工具页继续生成',
    'cs-td-4-1': 'SEO 系统',
    'cs-td-4-2': '页面结构和文案更新方式不够统一',
    'cs-td-4-3': '模型页、工具页、文章和文案技能现在都服务同一条生成路径',
    'cs-td-5-1': '下一阶段',
    'cs-td-5-2': '生成页、工具页、历史记录体验割裂',
    'cs-td-5-3': '规划 AI Studio，把生成表单、结果和历史统一进一个工作流',
    'cs-h2-07': '07. 结果',
    'cs-out-1': '访问时长从 18s 提升到 33s',
    'cs-out-2': '访问页数从 1.79 提升到 2.02',
    'cs-out-3': '订阅转化率从 0.5% 提升到 0.7%',
    'cs-out-4': '月纯利润从约 $1,250 提升到约 $3,000',
    'cs-07-p': '我主要看四件事：用户有没有停留更久、打开更多页面、更多订阅，以及业务结果有没有变化。分小版本上线后，这四个方向都往好的方向移动了。',
    'cs-h2-08': '08. 下一步：AI Studio',
    'cs-08-p': '这次发布修正了定位，也让生成更容易开始。但它也让下一个问题更明显：生成表单、结果预览和历史记录仍然分散在不同地方。AI Studio 的下一步，就是把这条工作流放进同一个工作区。',
    'cs-fig-studio-1': 'AI Studio 概念：统一的生成工作区，整合模型选择、参数配置和结果预览。',
    'cs-fig-studio-2': 'AI Studio 概念：历史记录管理和工作流优化，减少页面跳转。',
    'cs-08-li-1': '把模型选择、模板、上传、提示词、结果预览和历史记录统一到 AI Studio。',
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
  'about-resume': 'View full resume',
  'work-title': 'Work',
  'resume-back': 'Back to home',
  'resume-title': 'Resume',
  'resume-intro': 'I am Lin Han hui, a product manager with a design background. I have worked on 0-1 product builds, SEO growth, page redesigns, release acceptance, low-code tweaks, and frontend collaboration, pushing requirements from idea to launch.',
  'resume-role': 'Target Role: Product Manager',
  'resume-edu': 'Nanjing Institute of Technology · Bachelor · Industrial Design',
  'resume-phone': 'Phone: 15895838711',
  'resume-wechat': 'WeChat: l15895838711 (lowercase)',
  'resume-site': 'Website: linhanhui.cn',
  'resume-location': 'Guangzhou, China',
  'resume-profile-title': 'Profile',
  'resume-profile': 'With a design background, I work as a product manager across 0-1 product builds, SEO growth, page redesigns, release acceptance, low-code tweaks, and frontend collaboration. I am good at breaking down requirements from user pain points, page conversion, and implementation cost, then coordinating design, content, and development through delivery.',
  'resume-experience-title': 'Experience',
  'resume-exp-1-title': 'Guangzhou 6677 Technology · Product Manager',
  'resume-exp-1-time': '2025.05 - Now',
  'resume-exp-1-desc': 'Consumer AI SaaS products for overseas users, covering AI image generation, virtual try-on, 3D generation, and AI video.',
  'resume-exp-1-li-1': 'Broke down AI generation requirements and clarified user flows, edge cases, generation limits, and admin configuration logic.',
  'resume-exp-1-li-2': 'Produced high-fidelity screens and interaction notes, then aligned frontend states, components, and responsive details with engineers.',
  'resume-exp-1-li-3': 'Used AI to draft SEO pages at scale, then rewrote them around keywords, search intent, and conversion paths.',
  'resume-exp-1-li-4': 'Supported frontend handoff with page styling, copy configuration, and low-code changes to reduce rework between design and development.',
  'resume-exp-1-li-5': 'Handled release acceptance by logging generation failures, payment flow issues, responsive bugs, and copy display problems through to launch.',
  'resume-exp-2-title': 'SIANEXX PTE. LTD (Hong Kong) · UI Designer',
  'resume-exp-2-li-1': 'Designed company website UI and online/offline promotional pages, providing creative and design solutions for the company website build.',
  'resume-exp-2-li-2': 'Independently delivered UI assets and created matching UI screens based on product design direction.',
  'resume-exp-2-li-3': 'Followed up on implementation quality in product, keeping design quality and final delivery quality aligned.',
  'resume-exp-3-title': 'Jiangsu Lidu Technology · UI Designer',
  'resume-exp-3-li-1': 'Designed product UI and online/offline promotional pages, providing creative and design solutions for new products and features.',
  'resume-exp-3-li-2': 'Independently delivered UI assets and created matching UI screens based on product design direction.',
  'resume-exp-3-li-3': 'Followed up on implementation quality in product, keeping design quality and final delivery quality aligned.',
  'resume-exp-3-li-4': 'Assisted operations designers with materials including banners and H5 long-form pages.',
  'resume-exp-3-li-5': 'Assisted product managers with product requirement analysis.',
  'resume-exp-4-title': 'Nanjing Institute of Technology Design Studio · Intern Designer',
  'resume-exp-4-li-1': 'Assisted teachers with online product UI redesign work.',
  'resume-exp-4-li-2': 'Completed college promotional tasks including event planning, visual design, and materials.',
  'resume-projects-title': 'Projects',
  'resume-project-1-title': 'aitryon.art · Product Manager (Growth & Experience Optimization)',
  'resume-project-1-type': '2025.05 - Now',
  'resume-project-1-li-1': 'Used keyword research and competitor pages to propose an SEO page matrix and site structure improvements.',
  'resume-project-1-li-2': 'Wrote the redesign PRD, high-fidelity pages, and SEO copy, with focus on hero messaging, feature entry points, and conversion paths.',
  'resume-project-1-li-3': 'Worked with developers to ship the redesign and track PV, conversion, stay rate, and search traffic changes.',
  'resume-project-1-li-4': 'After the redesign, page views increased to 60K+, core conversion doubled during the tracked stage, and stay rate rose to 33%.',
  'resume-project-2-title': 'flaq.ai · AI API Platform (0-1 Project)',
  'resume-project-2-type': '2025.11 - Now',
  'resume-project-2-li-1': 'Separated developer API lookup and creator model trial entry points, then mapped how model pages, docs pages, and free generation tools should connect.',
  'resume-project-2-li-2': 'Planned free generation pages for high-search-demand models such as Nano Banana and GPT Image 2, including hero messaging, examples, parameter notes, and conversion entries.',
  'resume-project-2-li-3': 'Created reusable README and API example templates for image, video, and LLM models, reducing the cost of expanding multi-vendor model docs.',
  'resume-project-2-li-4': 'Used local AI workflows to produce and validate model introductions, multilingual SEO copy, and docs content across 78 model pages, 450 docs files, and 1000+ localized READMEs.',
  'resume-project-3-title': 'heydream.im · AI Image / Video / 3D Tool Matrix (0-1 Project)',
  'resume-project-3-type': '2025.08 - Now',
  'resume-project-3-li-1': 'Mapped the AI image, video, 3D, and free tool product system, then defined launch priorities for feature pages, model pages, and tool pages.',
  'resume-project-3-li-2': 'Filled out forms, examples, feature messaging, tutorials, and FAQs for pages such as virtual try-on, AI video, image generation, and image to 3D.',
  'resume-project-3-li-3': 'Translated tool capabilities into form fields, upload limits, example prompts, and conversion buttons, then aligned implementation details with developers.',
  'resume-project-3-li-4': 'Supported page copy and SEO metadata across 15 languages, laying the groundwork for indexing and later page expansion.',
  'resume-project-4-title': 'musicmaker.im · AI Music Product & Audio Tool Matrix (0-1 Project)',
  'resume-project-4-type': '2025.09 - Now',
  'resume-project-4-li-1': 'Joined AI music product planning and helped define MVP scope, version rhythm, and core feature priorities.',
  'resume-project-4-li-2': 'Split AI Song Generator, Lyrics, Vocal Remover, Music to MIDI, Audio Converter, and related tools by user task and product positioning.',
  'resume-project-4-li-3': 'Owned page design and SEO content, adjusting hero messaging, feature copy, tutorials, and FAQs based on competitors, search terms, and generation flow.',
  'resume-project-4-li-4': 'Monthly page views were about 20K in the early launch stage, then grew to around 100K monthly after page matrix and SEO content optimization, with page conversion around 3%.',
  'resume-project-5-title': 'ugcmaker.org · UGC Ad Generation Tool Matrix',
  'resume-project-5-type': 'UGC Ads / Image / Video',
  'resume-project-5-li-1': 'Split product entries around UGC ads, TikTok videos, product images, and Pinterest Pin creation scenarios.',
  'resume-project-5-li-2': 'Structured examples, prompts, feature messaging, use cases, tutorials, and FAQs for 7 core feature pages.',
  'resume-project-5-li-3': 'Built example content standards for product images, ad scripts, and Pinterest Pins so pages clearly connect input materials with generated results.',
  'resume-project-5-li-4': 'Organized page JSON content across 15 languages and worked with developers to sync page entries across navigation, sidebar, footer, and sitemap.',
  'resume-skills-title': 'Skills',
  'resume-skill-group-1': 'Product & UX',
  'resume-skill-group-2': 'Growth & SEO',
  'resume-skill-group-3': 'Delivery',
  'resume-skill-group-4': 'Tools',
  'resume-skill-group-5': 'Language',
  'resume-skill-1': 'Requirement Analysis',
  'resume-skill-2': 'Information Architecture',
  'resume-skill-3': 'Interaction Design',
  'resume-skill-4': 'High-fidelity Design',
  'resume-skill-5': 'Release Testing',
  'resume-skill-6': 'Data Review',
  'resume-skill-7': 'SEO Content System',
  'resume-skill-8': 'Multilingual SEO',
  'resume-skill-9': 'Content Structuring',
  'resume-skill-10': 'Frontend Collaboration',
  'resume-skill-11': 'Low-code Adjustment',
  'resume-skill-12': 'Figma',
  'resume-skill-13': 'Claude Code',
  'resume-skill-14': 'Codex',
  'resume-skill-15': 'Cursor',
  'resume-skill-16': 'CET-6 English'
});

Object.assign(translations.zh, {
  'nav-resume': '简历',
  'about-resume': '查看全部履历',
  'work-title': 'Work',
  'resume-back': '返回主页',
  'resume-title': '简历',
  'resume-intro': '林瀚辉，设计背景转产品经理，做过 0-1 产品搭建、SEO 增长、页面改版和版本验收，也能参与低代码与前端协作，推动需求从想法到上线。',
  'resume-role': '意向岗位：产品经理',
  'resume-edu': '南京工程学院 · 本科 · 工业设计',
  'resume-phone': '电话：15895838711',
  'resume-wechat': '微信：l15895838711（小写）',
  'resume-site': '个人站：linhanhui.cn',
  'resume-location': '中国 · 广州',
  'resume-profile-title': '个人简介',
  'resume-profile': '设计背景转产品经理，做过 0-1 产品搭建、SEO 增长、页面改版和版本验收，也能参与低代码与前端协作，推动需求从想法到上线。擅长从用户痛点、页面转化和实现成本出发拆解需求，并推动设计、内容与开发协同落地。',
  'resume-experience-title': '工作经历',
  'resume-exp-1-title': '广州六六柒柒科技有限公司｜产品经理',
  'resume-exp-1-time': '2025.05 - 至今',
  'resume-exp-1-desc': '面向海外用户的 C 端 AI SaaS 产品，覆盖 AI 图像生成、虚拟试衣、3D 生成和 AI 视频等场景。',
  'resume-exp-1-li-1': '拆解 AI 生成类功能需求，补齐用户路径、异常状态、生成限制和后台配置逻辑。',
  'resume-exp-1-li-2': '输出高保真页面和交互说明，与前端对齐状态、组件和响应式细节。',
  'resume-exp-1-li-3': '使用 AI 批量生成 SEO 页面初稿，再根据关键词、搜索意图和转化路径做人工改写。',
  'resume-exp-1-li-4': '参与前端交接，补充部分页面样式、文案配置和低代码调整，减少设计到开发之间的返工。',
  'resume-exp-1-li-5': '负责版本验收，记录生成失败、支付链路、页面适配和文案展示问题，并跟进修复上线。',
  'resume-exp-2-title': 'SIANEXX PTE. LTD（香港）｜UI 设计师',
  'resume-exp-2-li-1': '负责公司网站 UI 界面设计和线上线下宣传页面设计，为公司网站搭建提供创意及设计方案。',
  'resume-exp-2-li-2': '独立完成 UI 相关制作，能根据产品的设计思路设计相应配套的 UI 界面。',
  'resume-exp-2-li-3': '跟进设计效果在产品上的实现效果，保证设计品质与最终实现品质的统一。',
  'resume-exp-3-title': '江苏粒度科技有限公司｜UI 设计师',
  'resume-exp-3-li-1': '负责公司产品 UI 界面设计和线上线下宣传页面设计，为公司新产品与新功能提供创意及设计方案。',
  'resume-exp-3-li-2': '独立完成 UI 相关制作，能根据产品的设计思路设计相应配套的 UI 界面。',
  'resume-exp-3-li-3': '跟进设计效果在产品上的实现效果，保证设计品质与最终实现品质的统一。',
  'resume-exp-3-li-4': '辅助公司运营设计师进行运营设计，包括但不限于 banner、H5 长页等。',
  'resume-exp-3-li-5': '辅助产品经理进行产品需求分析。',
  'resume-exp-4-title': '南京工程学院艺术设计学院设计工作坊｜实习设计师',
  'resume-exp-4-li-1': '协助老师完成在线产品 UI 改版工作。',
  'resume-exp-4-li-2': '完成学院宣发任务，包括活动策划、视觉设计与物料设计。',
  'resume-projects-title': '项目经历',
  'resume-project-1-title': 'aitryon.art｜产品经理（增长与体验优化）',
  'resume-project-1-type': '2025.05 - 至今',
  'resume-project-1-li-1': '基于关键词和竞品页面，提出 SEO 页面矩阵和站内结构优化方案。',
  'resume-project-1-li-2': '输出改版 PRD、高保真页面和 SEO 文案，重点优化首屏信息、功能入口和转化路径。',
  'resume-project-1-li-3': '与开发推进改版上线，跟踪 PV、转化率、停留率和搜索流量变化。',
  'resume-project-1-li-4': '改版后页面浏览量提升至 60K+，核心转化率在阶段内翻倍，页面停留表现提升至 33%。',
  'resume-project-2-title': 'flaq.ai｜AI API 平台（0-1 项目）',
  'resume-project-2-type': '2025.11 - 至今',
  'resume-project-2-li-1': '区分开发者查 API 和创作者试模型两类入口，梳理模型页、文档页和免费生成工具页的承接关系。',
  'resume-project-2-li-2': '围绕 Nano Banana、GPT Image 2 等高搜索需求模型，规划免费生成页的首屏表达、示例内容、参数说明和转化入口。',
  'resume-project-2-li-3': '为图像、视频、LLM 等模型沉淀 README 和 API 示例模板，降低多厂商模型文档的扩展成本。',
  'resume-project-2-li-4': '结合本地 AI 工作流产出并校验模型介绍、多语言 SEO 文案和文档内容，覆盖 78 个模型页、450 份文档和 1000+ 本地化 README。',
  'resume-project-3-title': 'heydream.im｜AI 图像 / 视频 / 3D 工具矩阵（0-1 项目）',
  'resume-project-3-type': '2025.08 - 至今',
  'resume-project-3-li-1': '梳理 AI 图像、视频、3D 和免费工具的产品地图，确定功能页、模型页和工具页的上线优先级。',
  'resume-project-3-li-2': '为虚拟试穿、AI 视频、图像生成、图片转 3D 等页面补齐表单、示例、功能卖点、教程和 FAQ 内容。',
  'resume-project-3-li-3': '把不同工具能力转成表单字段、上传限制、示例提示词和转化按钮，与开发对齐页面实现细节。',
  'resume-project-3-li-4': '支持 15 种语言的页面文案与 SEO metadata，为工具页收录和后续扩展打基础。',
  'resume-project-4-title': 'musicmaker.im｜AI 音乐产品与音频工具矩阵（0-1 项目）',
  'resume-project-4-type': '2025.09 - 至今',
  'resume-project-4-li-1': '参与 AI 音乐产品立项，协助梳理 MVP 范围、版本节奏和核心功能优先级。',
  'resume-project-4-li-2': '按用户任务拆分 AI Song Generator、Lyrics、Vocal Remover、Music to MIDI、Audio Converter 等工具页的产品定位。',
  'resume-project-4-li-3': '负责页面设计与 SEO 内容，结合竞品、搜索词和生成流程调整首屏表达、功能文案、教程和 FAQ。',
  'resume-project-4-li-4': '项目上线初期月浏览量约 20K，经过页面矩阵和 SEO 内容优化后增长至月均约 100K，页面转化率约 3%。',
  'resume-project-5-title': 'ugcmaker.org｜UGC 广告生成工具矩阵',
  'resume-project-5-type': 'UGC 广告 / 图像 / 视频',
  'resume-project-5-li-1': '围绕 UGC 广告、TikTok 视频、商品图和 Pinterest Pin 等场景拆分产品入口。',
  'resume-project-5-li-2': '为 7 个核心功能页整理示例素材、提示词、功能卖点、应用场景、教程和 FAQ。',
  'resume-project-5-li-3': '建立商品图、广告脚本、Pinterest Pin 等示例内容标准，让页面能直观看出输入素材和生成结果的对应关系。',
  'resume-project-5-li-4': '按 15 种语言组织页面 JSON 内容，与开发协作同步导航、侧边栏、Footer 和 Sitemap 的页面入口。',
  'resume-skills-title': '技能',
  'resume-skill-group-1': '产品与体验',
  'resume-skill-group-2': '增长与 SEO',
  'resume-skill-group-3': '交付协作',
  'resume-skill-group-4': '工具',
  'resume-skill-group-5': '语言',
  'resume-skill-1': '需求分析',
  'resume-skill-2': '信息架构',
  'resume-skill-3': '交互设计',
  'resume-skill-4': '高保真设计',
  'resume-skill-5': '版本测试',
  'resume-skill-6': '数据复盘',
  'resume-skill-7': 'SEO 内容系统',
  'resume-skill-8': '多语言 SEO',
  'resume-skill-9': '内容结构化',
  'resume-skill-10': '前端协同',
  'resume-skill-11': '低代码调整',
  'resume-skill-12': 'Figma',
  'resume-skill-13': 'Claude Code',
  'resume-skill-14': 'Codex',
  'resume-skill-15': 'Cursor',
  'resume-skill-16': '英语六级'
});

Object.assign(translations.en, {
  'skill-card-meta': '2026 · AI Workflow · Product Ops / SEO / Automation',
  'skill-card-title': 'Four local AI skills for repeated production work',
  'skill-card-summary': 'Separated SEO JSON copy, Flaq readmes, cover/carousel prompts, and asset cleanup so each task has its own rules.',
  'skill-card-metric-1': 'production skills',
  'skill-card-metric-2': 'memory-indexed pages',
  'skill-card-metric-3': 'workflow layers',
  'skill-card-focus-1': 'Skill Design',
  'skill-card-focus-2': 'Content Ops',
  'skill-card-focus-3': 'Local Memory',
  'skill-card-focus-4': 'Validation',
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
  'skill-title': 'Turning content, docs, visuals, and asset cleanup into four local AI skills',
  'skill-intro': 'I split four recurring jobs into four local skills: SEO JSON Writer for website JSON copy, Flaq Readme for model readmes, Flaq Visual Prompts for cover/carousel image prompts, and Asset Optimizer for file naming and compression. They are not four steps from one project. They are four different jobs that should not share one generic prompt.',
  'skill-meta-role': 'Product workflow design, AI skill design, content system, QA rules',
  'skill-meta-product': 'Local AI-assisted working system',
  'skill-meta-scope': 'SEO JSON, Flaq readmes, cover/carousel visual prompts, asset cleanup',
  'case-artifacts-label': 'Artifacts',
  'skill-meta-artifacts': '4 local skills, 156-page memory index, import and audit scripts',
  'skill-h2-context': '01. Project Context',
  'skill-context-p1': 'The problem first showed up in website SEO copy. aitryon.art, heydream.im, ugcmaker.org, and musicmaker.im all need generator, model, or tool pages written as structured JSON. Each page has its own schema for titles, descriptions, examples, features, use cases, FAQs, related tools, and calls to action.',
  'skill-context-p2': 'Later I saw the same pattern in flaq.ai model readmes, cover/carousel visual prompts, and everyday media cleanup, but those were not variants of SEO JSON work. Readmes need fixed templates. Visual prompts need taste checks and repeatable image logic. Asset cleanup needs naming and conflict checks before anything is changed. One generic prompt makes those rules leak into each other.',
  'skill-h2-problem': '02. Core Problem',
  'skill-problem-p': 'The issue was not whether AI could write. It was whether it had the right rules for the job. SEO JSON Writer cannot change keys or section order. Flaq Readme cannot borrow the shape of a landing page. Flaq Visual Prompts cannot chase style consistency at the cost of the image itself. Asset Optimizer cannot skip file checks. When the boundary is vague, speed turns into cleanup.',
  'skill-h2-strategy': '03. System Strategy',
  'skill-strategy-p': 'I stopped trying to make one assistant handle everything. I split the work by task type. SEO JSON Writer handles website JSON copy. Flaq Readme handles flaq.ai model readmes. Flaq Visual Prompts handles cover and carousel prompts. Asset Optimizer handles image and video files. Each skill answers the same practical questions: when to use it, what to read first, what not to touch, and how I review the result.',
  'skill-h2-workflow': '04. Workflow Design',
  'skill-workflow-p1': 'SEO JSON Writer is the most important skill in this system. It serves SEO-oriented website JSON copy, mainly for aitryon.art, heydream.im, ugcmaker.org, and musicmaker.im. It does not improvise page structure. It treats the reference JSON as the source of truth for keys, nesting, section order, H2 patterns, and CTA fields. Before writing, it searches local memory for similar pages. After writing, it validates the JSON and runs SEO competitor review to find keyword or intent gaps without copying competitor copy.',
  'skill-workflow-p2': 'Flaq Readme is a separate path. It only writes flaq.ai model readmes. Flaq.ai is an API aggregation site, similar to WaveSpeed, so the output is closer to model/API documentation than a landing page. The skill reads fixed templates and follows their H1/H2 structure, paragraph rhythm, and SEO logic while keeping the copy constrained by model parameters.',
  'skill-workflow-p3': 'Flaq Visual Prompts is the one skill directly tied to flaq.ai 1.6. That release added homepage carousel images, model entries, and more cover needs, so visual prompts became a repeated job. The first step is not to force one style. The first step is to make the image work: covers need a clear subject and thumbnail recognition; carousel images need horizontal rhythm, crop safety, and a text-safe area. Once enough good images exist, I can write the useful patterns back into memory and slowly narrow the brand style.',
  'skill-workflow-p4': 'Asset Optimizer is more execution-heavy: it maps to my local rename-file workflow for image and video assets, including naming precheck, conflict detection, WebP conversion, and compression.',
  'skill-h2-library': '05. Skill Library',
  'skill-library-p': 'These four skills sit side by side. They are not four steps in one large workflow. SEO JSON Writer keeps web page structure stable. Flaq Readme keeps model documentation tied to templates. Flaq Visual Prompts keeps cover/carousel prompts from becoming random nice images. Asset Optimizer catches the boring file mistakes before they become cleanup.',
  'skill-h2-compare': '06. Before / After',
  'skill-h2-outcome': '07. Outcome',
  'skill-outcome-p': 'The point is not to make AI do everything. The point is to stop it from mixing up the job. SEO pages, model readmes, cover/carousel visual prompts, and media cleanup each have their own inputs, rules, and acceptance checks. AI only helps inside those boundaries.',
  'skill-h2-next': '08. Next Step',
  'portfolio-title': 'Designing a portfolio that remembers: from static project display to living product narrative',
  'portfolio-intro': 'I did not want this portfolio to be a gallery of screenshots. It needed to explain a mixed role: product thinking, UX/UI, AI SaaS work, SEO content, data review, and code collaboration. So I built it from zero as a bilingual portfolio with a dark editorial interface, reusable case-study structure, and local memory files that keep future iterations from drifting.',
  'portfolio-meta-role': 'Product positioning, UX/UI, content strategy, front-end collaboration',
  'portfolio-meta-product': 'Personal portfolio website',
  'portfolio-meta-scope': 'Homepage, case page, resume, visual system, bilingual copy, local memory',
  'portfolio-meta-artifacts': 'Website pages, design rules, content rules, current-state memory, backlog',
  'portfolio-h2-context': '01. Project Context',
  'portfolio-context-p1': 'My work does not fit neatly into a pure UI portfolio. A lot of it happens in page structure, SEO systems, model updates, product decisions, data review, and developer handoff.',
  'portfolio-context-p2': 'If I only showed final screens, the most important parts of the work would disappear. I needed a site that could show product thinking, shipped impact, design taste, and the ability to collaborate with AI and code without feeling like a generic template.',
  'portfolio-h2-problem': '02. Core Problem',
  'portfolio-problem-p': 'The positioning was the hard part. I did not want to present myself only as a UI designer, but I also did not want the site to feel like a product manager resume with nicer typography. It had to show both sides: product judgment and visual execution.',
  'portfolio-h2-strategy': '03. Product Strategy',
  'portfolio-strategy-p1': 'I treated the site like a small product. The homepage had one job: help visitors understand who I am and get them to the strongest proof quickly.',
  'portfolio-strategy-p2': 'The case pages slow down and explain the work. The resume page stays plain enough for quick scanning.',
  'portfolio-h2-experience': '04. Experience Design',
  'portfolio-experience-p1': 'The homepage is designed for quick scanning. It opens with a compact identity moment, then moves into one featured case instead of a crowded project grid. This keeps attention on the strongest proof: the aitryon.art product experience redesign.',
  'portfolio-experience-p2': 'The case-study page follows a stable structure so future cases can be added without reinventing the narrative every time. It also helps me avoid writing case studies as loose process diaries. Each section has a job: explain the business context, the product decision, the design move, and the result.',
  'portfolio-h2-visual': '05. Visual System',
  'portfolio-visual-p1': 'I avoided the bright SaaS-template look on purpose. The site needed to feel focused and a little sharper, because I wanted the work to lead, not the decoration. That is why I used a dark editorial direction, restrained contrast, and only a small amount of acid-lime accent.',
  'portfolio-visual-p2': 'The design system keeps Syne for signature display headings, uses Space Grotesk for longer case titles, and relies on Urbanist for body and UI text. The typographic scale is intentionally restrained. Earlier iterations felt too poster-like, especially on detail pages, so the current system favors calmer headings, readable body copy, and stronger spacing discipline.',
  'portfolio-h2-memory': '06. Memory System',
  'portfolio-memory-p1': 'The memory files are what make the site easier to keep improving. They record the current state, type choices, content rules, bilingual decisions, and backlog.',
  'portfolio-memory-p2': 'When I come back later with AI assistance, I do not have to explain the same design decisions again or remind it why the site should not turn into a generic template.',
  'portfolio-h2-compare': '07. From Zero to System',
  'portfolio-th-start': 'Starting Point',
  'portfolio-th-system': 'System Built',
  'portfolio-h2-outcome': '08. Outcome',
  'portfolio-outcome-p': 'This portfolio became a case study in itself: define the positioning, build the structure, set the visual rules, and leave enough memory for the next iteration to continue from the same place.',
  'portfolio-h2-next': '09. Next Step'
});

Object.assign(translations.zh, {
  'skill-card-meta': '2026 · AI 工作流 · 产品运营 / SEO / 自动化',
  'skill-card-title': '四个本地 AI skills，处理四类重复生产任务',
  'skill-card-summary': '把 SEO JSON 文案、Flaq README、cover/carousel 提示词和素材整理拆开，每类任务用自己的规则。',
  'skill-card-metric-1': '生产型技能',
  'skill-card-metric-2': '记忆索引页面',
  'skill-card-metric-3': '工作流层级',
  'skill-card-focus-1': '技能设计',
  'skill-card-focus-2': '内容运营',
  'skill-card-focus-3': '本地记忆',
  'skill-card-focus-4': '校验机制',
  'portfolio-card-meta': '2026 · 作品集 · 产品定位 / UXUI / 记忆系统',
  'portfolio-card-title': '把作品集网站设计成一个持续生长的产品系统',
  'portfolio-card-summary': '将这个作品集设计成一个持续生长的产品叙事：包含暗色编辑感界面、可复用案例结构、双语文案层和持续记忆系统。',
  'portfolio-card-metric-1': '核心页面',
  'portfolio-card-metric-2': '案例结构段落',
  'portfolio-card-metric-3': '记忆文件',
  'portfolio-card-focus-1': '定位',
  'portfolio-card-focus-2': '视觉系统',
  'portfolio-card-focus-3': '案例结构',
  'portfolio-card-focus-4': '记忆系统',
  'skill-title': '把内容、文档、视觉和素材整理，拆成四个本地 AI 技能',
  'skill-intro': '我把四类重复任务拆成四个本地技能：SEO JSON Writer 写网页 JSON 文案，Flaq Readme 写模型 README，Flaq Visual Prompts 写 cover/carousel 视觉提示词，Asset Optimizer 处理素材命名和压缩。它们不是同一个项目里的四个步骤，而是四种不同工作，不能混在一个通用提示词里。',
  'skill-meta-role': '产品工作流设计、AI 技能设计、内容系统、质量规则',
  'skill-meta-product': '本地 AI 辅助工作系统',
  'skill-meta-scope': 'SEO JSON、Flaq README、cover/carousel 视觉提示词、素材整理',
  'case-artifacts-label': '产物',
  'skill-meta-artifacts': '4 个本地技能、156 页记忆索引、导入与审查脚本',
  'skill-h2-context': '01. 项目背景',
  'skill-context-p1': '这个问题最先出现在网页 SEO 文案里。aitryon.art、heydream.im、ugcmaker.org 和 musicmaker.im 都有大量生成器、模型页或工具页；每个页面都要按固定 JSON 结构写标题、描述、示例、功能、使用场景、FAQ、相关工具和 CTA。',
  'skill-context-p2': '后来我发现 flaq.ai 的模型 README、cover/carousel 视觉提示词和日常素材整理也有类似问题，但它们不是 SEO JSON 的变体。README 要跟固定模板，视觉提示词要先判断图片是否好看、能不能复制，素材处理要先检查命名和冲突。放进同一个提示词，只会互相污染。',
  'skill-h2-problem': '02. 核心问题',
  'skill-problem-p': '问题不是 AI 会不会写，而是它有没有被放进对的规则里。SEO JSON Writer 不能乱改字段名和模块顺序；Flaq Readme 不能套网页 SEO 的结构；Flaq Visual Prompts 不能为了统一风格牺牲单张图；Asset Optimizer 不能跳过文件预检。边界一模糊，后面就全是返工。',
  'skill-h2-strategy': '03. 系统策略',
  'skill-strategy-p': '我的做法很简单：按任务拆，不做万能助手。SEO JSON Writer 管网页 JSON 文案，Flaq Readme 管 flaq.ai 模型 README，Flaq Visual Prompts 管 cover 和 carousel 的视觉提示词，Asset Optimizer 管图片和视频素材。每个技能只回答一件事：什么时候用，先看什么，哪些地方不能乱动，最后怎么验收。',
  'skill-h2-workflow': '04. 工作流设计',
  'skill-workflow-p1': 'SEO JSON Writer 是这套系统里最重要的技能。它服务的是网页 SEO JSON 文案，主要用在 aitryon.art、heydream.im、ugcmaker.org 和 musicmaker.im。它不会自由发挥页面结构，而是先把参考 JSON 当成唯一结构来源，保留字段名、嵌套、模块顺序、H2 模式和 CTA 字段。写作前会检索本地记忆，写完后再做 JSON 校验和 SEO 竞品评审，用来补关键词和搜索意图，但不复制竞品。',
  'skill-workflow-p2': 'Flaq Readme 是另一条完全不同的线。它只服务 flaq.ai 的模型 README 写作，flaq.ai 是类似 WaveSpeed 的 API 聚合站，所以 README 更像模型/API 文档，而不是网页落地页。这个技能会读取固定模板，跟随模板的 H1、H2、段落节奏和 SEO 逻辑，同时根据模型参数约束文案。',
  'skill-workflow-p3': 'Flaq Visual Prompts 和 flaq.ai 1.6 的关系最直接。1.6 增加了首页 carousel、模型入口和更多 cover 需求，视觉图开始变成高频交付物。这个技能的第一步不是统一风格，而是先让图过关：cover 要有主体和缩略图识别度，carousel 要有横向节奏、裁切安全和文字安全区。好图多了以后，再把有效经验写进记忆，慢慢收敛成更稳定的品牌风格。',
  'skill-workflow-p4': 'Asset Optimizer 则更偏执行：它对应本地 rename-file 工作流，用来给图片和视频素材做命名预检、冲突检查、WebP 转换和压缩。',
  'skill-h2-library': '05. 技能库',
  'skill-library-p': '这四个技能是并列的，不是一个大流程里的四步。SEO JSON Writer 解决网页结构稳定，Flaq Readme 解决模型文档模板，Flaq Visual Prompts 解决 cover/carousel 的审美和复用，Asset Optimizer 解决文件处理里的低级错误。',
  'skill-h2-compare': '06. 前后对比',
  'skill-h2-outcome': '07. 结果',
  'skill-outcome-p': '这套技能的价值不在于让 AI “什么都做”，而是让它少混淆任务。SEO 页面、模型 README、cover/carousel 视觉提示词和素材整理各有自己的输入、规则和验收方式，AI 只在这些边界里工作。',
  'skill-h2-next': '08. 下一步',
  'portfolio-title': '让作品集记住决策：从静态展示到持续生长的产品叙事',
  'portfolio-intro': '我不想把这个作品集做成项目截图合集。它需要解释一个混合型角色：产品思考、UX/UI、AI SaaS 工作、SEO 内容、数据复盘和代码协作。所以我从 0 到 1 搭了一个双语作品集，用暗色编辑感界面、可复用案例结构和本地记忆文件，避免后续迭代越改越散。',
  'portfolio-meta-role': '产品定位、UX/UI、内容策略、前端协作',
  'portfolio-meta-product': '个人作品集网站',
  'portfolio-meta-scope': '首页、案例页、简历页、视觉系统、双语文案、本地记忆',
  'portfolio-meta-artifacts': '网站页面、设计规则、内容规则、当前状态记忆、待办事项',
  'portfolio-h2-context': '01. 项目背景',
  'portfolio-context-p1': '我的工作不太适合被放进纯 UI 作品集里。很多工作发生在页面结构、SEO 系统、模型更新、产品决策、数据复盘和开发交接里。',
  'portfolio-context-p2': '如果只展示最终界面，最重要的工作会被藏掉。我需要一个网站，既能呈现产品思考、上线结果和设计品味，也能表达我与 AI 和代码协作的能力，同时避免变成普通模板。',
  'portfolio-h2-problem': '02. 核心问题',
  'portfolio-problem-p': '最难的是定位。我不想只呈现为 UI 设计师，也不想让网站像一份排版更漂亮的产品经理简历。它必须同时让人看到两面：产品判断和视觉执行。',
  'portfolio-h2-strategy': '03. 产品策略',
  'portfolio-strategy-p1': '我把这个网站当成一个小产品来做。首页只有一个任务：让访客快速理解我是谁，并尽快进入最有说服力的证据。',
  'portfolio-strategy-p2': '案例页负责放慢阅读节奏，解释具体工作。简历页则保持足够朴素，方便快速扫描。',
  'portfolio-h2-experience': '04. 体验设计',
  'portfolio-experience-p1': '首页为快速浏览而设计。它从紧凑的身份展示进入精选案例，而不是堆满项目网格。这样能把注意力集中在最强的证据：aitryon.art 产品体验重构。',
  'portfolio-experience-p2': '案例页采用稳定结构，让未来案例不需要每次重新发明叙事方式。它也避免我把案例写成松散的过程日记。每一段都有明确任务：解释业务背景、产品决策、设计动作和结果。',
  'portfolio-h2-visual': '05. 视觉系统',
  'portfolio-visual-p1': '我有意避开明亮的 SaaS 模板感。这个网站需要更专注，也稍微锋利一点，因为我希望读者先看工作，而不是先被装饰吸引。所以我选择了暗色编辑感方向、克制对比，以及少量酸性黄绿色强调。',
  'portfolio-visual-p2': '设计系统保留 Syne 做标志性展示标题，用 Space Grotesk 处理更长的案例标题，并用 Urbanist 承载正文和 UI。字号层级有意保持克制。早期迭代在详情页上过于海报化，所以当前系统更偏向冷静标题、可读正文和更严格的间距纪律。',
  'portfolio-h2-memory': '06. 记忆系统',
  'portfolio-memory-p1': '真正让这个网站后续更好维护的，是记忆文件。它们记录当前状态、字体选择、内容规则、双语决策和待办事项。',
  'portfolio-memory-p2': '下次我再借助 AI 继续改时，不需要重新解释同一批设计决策，也不用提醒它为什么这个网站不能变成普通模板。',
  'portfolio-h2-compare': '07. 从 0 到 1',
  'portfolio-th-start': '起点',
  'portfolio-th-system': '形成的系统',
  'portfolio-h2-outcome': '08. 结果',
  'portfolio-outcome-p': '这个作品集本身也变成了一个案例：先定义定位，再搭结构、定视觉规则，并留下足够的记忆，让下一次迭代能从同一个地方继续。',
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
  'skill-metric-4': 'main SEO sites: aitryon, heydream, ugcmaker, musicmaker',
  'skill-fig-architecture': 'System architecture: decide the task type first, then route it to the right skill so SEO JSON, model readmes, and media cleanup do not share one blurry prompt.',
  'skill-problem-li-1': 'Four SEO sites need stable JSON page copy, but each site has its own schema and tone.',
  'skill-problem-li-2': 'Flaq readmes are model documentation, not landing page copy.',
  'skill-problem-li-3': 'Cover and carousel prompts can make one nice image, then drift on the next one.',
  'skill-problem-li-4': 'Image and video assets arrive in volume, and manual naming checks or compression can miss conflicts.',
  'skill-strategy-1-title': 'Task routing',
  'skill-strategy-1-text': 'First decide whether the task is SEO JSON, Flaq README, visual prompt, or media cleanup.',
  'skill-strategy-2-title': 'Reference lock',
  'skill-strategy-2-text': 'SEO follows reference JSON, Flaq follows fixed readme templates, visual prompts follow taste memory, and media cleanup follows the selected directory scope.',
  'skill-strategy-3-title': 'Memory search',
  'skill-strategy-3-text': 'Reuse indexed page summaries, accepted SEO notes, and visual preferences.',
  'skill-strategy-4-title': 'Script checks',
  'skill-strategy-4-text': 'Import, index, preflight, and audit scripts reduce manual checking.',
  'skill-strategy-5-title': 'Human review',
  'skill-strategy-5-text': 'I keep final judgment on facts, structure, SEO intent, and delivery quality.',
  'skill-ph-architecture-title': 'System architecture diagram',
  'skill-ph-architecture-text': 'User request -> task routing -> matching skill -> reference file / memory / preflight script -> output -> human review.',
  'skill-ph-architecture-caption': 'Needed image: a routing diagram showing how four production task types enter different skills instead of one generic prompt.',
  'skill-workflow-1-title': 'Reference JSON',
  'skill-workflow-1-text': 'Treats the reference file as the only schema source, keeping keys and section order intact.',
  'skill-workflow-2-title': 'Memory search',
  'skill-workflow-2-text': 'Searches similar slugs, models, tool pages, and accepted SEO learnings.',
  'skill-workflow-3-title': 'Competitor review',
  'skill-workflow-3-text': 'Finds search intent and keyword gaps without copying competitor sentences.',
  'skill-workflow-4-title': 'JSON validation',
  'skill-workflow-4-text': 'Checks valid JSON, schema drift, product names, and site tone.',
  'skill-ph-before-after-title': 'Task routing graphic',
  'skill-ph-before-after-text': 'SEO JSON -> schema / memory / review; Flaq README -> fixed templates / model parameters; media -> naming precheck / compression.',
  'skill-ph-before-after-caption': 'Needed image: a simple map of the four skills, their inputs, constraints, and outputs.',
  'skill-library-1-text': 'Serves SEO JSON pages across four AI product sites, with schema matching, memory search, competitor review, and validation.',
  'skill-library-2-text': 'Serves flaq.ai model readmes by reading fixed templates and writing around model parameters.',
  'skill-library-3-text': 'Serves flaq.ai cover and carousel prompts. It is the only skill here directly tied to the 1.6 visual work.',
  'skill-library-4-text': 'Uses the local rename-file workflow for image/video naming precheck, conversion, and compression.',
  'skill-fig-library': 'Skill library map: four modules separated by task type instead of one shared rule set.',
  'skill-table-1-1': 'SEO page writing',
  'skill-table-1-2': 'Temporary prompts for page copy, then manual JSON cleanup',
  'skill-table-1-3': 'Reference schema, memory search, SEO review, and JSON validation',
  'skill-table-2-1': 'Model documentation',
  'skill-table-2-2': 'Manually matching flaq.ai examples for each model readme',
  'skill-table-2-3': 'Fixed templates, model parameter constraints, and stable readme output',
  'skill-table-3-1': 'Cover / carousel visuals',
  'skill-table-3-2': 'Temporary prompts can make one nice image, then drift on the next one',
  'skill-table-3-3': 'Separate rules for cover, carousel, crop safety, subject, and memory',
  'skill-table-4-1': 'Asset cleanup',
  'skill-table-4-2': 'Manual naming checks and compression with easy-to-miss conflicts',
  'skill-table-4-3': 'Naming precheck first, then scoped conversion and compression',
  'skill-table-5-1': 'Task boundary',
  'skill-table-5-2': 'SEO, readmes, visual prompts, and media tasks mixed in one instruction set',
  'skill-table-5-3': 'Different task types enter different skills, reducing rule leakage',
  'skill-table-6-1': 'Human role',
  'skill-table-6-2': 'Repeating rules and fixing AI improvisation afterward',
  'skill-table-6-3': 'Reviewing facts, structure, taste, and final delivery quality',
  'skill-outcome-1-title': 'Stable SEO production',
  'skill-outcome-1-text': 'SEO JSON pages across four sites can be produced against reference schemas without re-explaining structure each time.',
  'skill-outcome-2-title': 'Stable Flaq docs',
  'skill-outcome-2-text': 'Model readmes follow fixed templates, produce stable quality, and are already integrated into the project skill set.',
  'skill-outcome-3-title': 'Repeatable visual production',
  'skill-outcome-3-text': 'Cover and carousel prompts now start from image quality and placement needs, then feed useful patterns back into memory.',
  'skill-outcome-4-title': 'Cleaner media delivery',
  'skill-outcome-4-text': 'Image and video assets go through naming and conflict precheck before conversion or compression.',
  'skill-next-li-1': 'Use cover and carousel results to refine visual memory: collect good images first, then gradually narrow flaq.ai into a more unified brand style.',
  'skill-next-li-2': 'Bring more existing GitHub skills into the daily workflow instead of writing prompts from scratch.',
  'skill-next-li-3': 'Use skills like humanizer to catch AI-sounding web copy before publishing.',
  'skill-next-li-4': 'Use skills like design-taste-frontend to review visual hierarchy, interaction quality, and frontend execution.',
  'skill-ph-future-title': 'Future skill expansion map',
  'skill-ph-future-text': 'SEO copy -> image needs -> copy humanizing -> design review -> final output review.',
  'skill-ph-future-caption': 'Needed image: a map showing how more production skills can connect to the current workflow.',
  'skill-nav-workflow': 'Workflow',
  'skill-nav-library': 'Library',
  'portfolio-metric-1': 'core pages: home, case study, resume',
  'portfolio-metric-2': 'language modes planned through one content layer',
  'portfolio-metric-3': 'repeatable case-study sections',
  'portfolio-metric-4': 'memory files guiding future iteration',
  'portfolio-ph-cover-title': 'Portfolio cover image',
  'portfolio-ph-cover-text': 'Suggested content: homepage hero and case-study page shown as a dark editorial spread. Use real screenshots of the site if possible.',
  'portfolio-ph-cover-caption': 'Needed image: a strong cover that shows the portfolio as a designed product rather than only a personal page.',
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
  'portfolio-table-1-2': 'I needed to combine UI, product, AI, and growth work into one readable identity.',
  'portfolio-table-1-3': 'The site now frames me as an AI / Growth Product Designer & PM.',
  'portfolio-table-2-1': 'Homepage',
  'portfolio-table-2-2': 'Visitors needed a fast path to the strongest proof.',
  'portfolio-table-2-3': 'The homepage moves from identity to featured work, about, and contact without becoming a project dump.',
  'portfolio-table-3-1': 'Case study',
  'portfolio-table-3-2': 'Future projects needed a repeatable story format.',
  'portfolio-table-3-3': 'I built an 8-section case structure that shares the same dark editorial style as the homepage.',
  'portfolio-table-4-1': 'Content',
  'portfolio-table-4-2': 'Design and content decisions needed to survive across multiple AI-assisted sessions.',
  'portfolio-table-4-3': 'Current state, design rules, content rules, and backlog keep each iteration pointed in the same direction.',
  'portfolio-table-5-1': 'Language',
  'portfolio-table-5-2': 'The site needed to serve both Chinese and English readers.',
  'portfolio-table-5-3': 'It now has bilingual switching and content rules that keep English and Chinese copy paired.',
  'portfolio-outcome-1-title': 'Positioning',
  'portfolio-outcome-1-text': 'The site brings product design, AI SaaS, growth, SEO content, and shipped work into one identity.',
  'portfolio-outcome-2-title': 'Page consistency',
  'portfolio-outcome-2-text': 'Homepage, case page, and resume now feel like parts of the same site.',
  'portfolio-outcome-3-title': 'Case expansion',
  'portfolio-outcome-3-text': 'Future projects can use the same case-study structure instead of starting from a blank page.',
  'portfolio-outcome-4-title': 'Future collaboration',
  'portfolio-outcome-4-text': 'The memory files keep design decisions available for later AI-assisted iterations.',
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
  'skill-metric-1': '生产型技能模块',
  'skill-metric-2': '本地记忆索引内容页',
  'skill-metric-3': '工作流层级：技能、参考、记忆、脚本、审核',
  'skill-metric-4': '主要 SEO 站点：aitryon、heydream、ugcmaker、musicmaker',
  'skill-fig-architecture': '系统架构：先判断任务类型，再进入对应技能，避免 SEO JSON、模型 README 和素材处理混在同一个提示词里。',
  'skill-problem-li-1': '四个 SEO 站点需要稳定 JSON 页面文案，但每个站点都有自己的结构和语气。',
  'skill-problem-li-2': 'Flaq README 属于模型文档，不应该套用网页落地页的写法。',
  'skill-problem-li-3': 'Cover 和 carousel 临时写提示词时，可能这张好看，下一张就跑偏。',
  'skill-problem-li-4': '图片和视频素材数量多，人工命名检查、压缩和转换很容易漏掉冲突。',
  'skill-strategy-1-title': '任务分流',
  'skill-strategy-1-text': '先判断是 SEO JSON、Flaq README、视觉提示词，还是素材处理。',
  'skill-strategy-2-title': '参考锁定',
  'skill-strategy-2-text': 'SEO 跟参考 JSON，Flaq 跟固定 README 模板，视觉提示词跟审美记忆，素材处理跟目录范围。',
  'skill-strategy-3-title': '记忆检索',
  'skill-strategy-3-text': '复用历史页面摘要、已采纳 SEO 经验和视觉偏好。',
  'skill-strategy-4-title': '脚本校验',
  'skill-strategy-4-text': '用导入、索引、预检和审查脚本减少手动检查。',
  'skill-strategy-5-title': '人工审核',
  'skill-strategy-5-text': '我保留最终判断：事实、结构、SEO 意图和交付质量。',
  'skill-ph-architecture-title': '系统架构图',
  'skill-ph-architecture-text': '用户请求 -> 任务分流 -> 对应技能 -> 参考文件 / 记忆 / 预检脚本 -> 输出 -> 人工审核。',
  'skill-ph-architecture-caption': '待补配图：展示三类任务如何进入不同技能，而不是被一个通用提示词处理。',
  'skill-workflow-1-title': '参考 JSON',
  'skill-workflow-1-text': '把参考文件作为唯一结构来源，不改字段名和模块顺序。',
  'skill-workflow-2-title': '记忆检索',
  'skill-workflow-2-text': '查找相似页面路径、模型、工具页和历史 SEO 经验。',
  'skill-workflow-3-title': '竞品评审',
  'skill-workflow-3-text': '补足搜索意图和关键词簇，但不复制竞品句子。',
  'skill-workflow-4-title': 'JSON 校验',
  'skill-workflow-4-text': '检查合法 JSON、结构漂移、产品名和站点语气。',
  'skill-ph-before-after-title': '任务分流图',
  'skill-ph-before-after-text': 'SEO JSON -> 结构 / 记忆 / 评审；Flaq README -> 固定模板 / 模型参数；素材 -> 命名预检 / 压缩。',
  'skill-ph-before-after-caption': '待补配图：展示四个技能的输入、约束和输出差异。',
  'skill-library-1-text': '服务四个 AI 产品站点的 SEO JSON 页面，负责结构保真、记忆检索、竞品评审和结构校验。',
  'skill-library-2-text': '服务 flaq.ai 模型 README，读取固定模板并根据模型参数写稳定文档。',
  'skill-library-3-text': '服务 flaq.ai cover 和 carousel。它是这里唯一直接跟 1.6 视觉工作有关的 skill。',
  'skill-library-4-text': '基于本地 rename-file 工作流，处理图片和视频素材的命名预检、转换和压缩。',
  'skill-fig-library': '技能库地图：四个模块按任务类型拆开，而不是共享一套模糊规则。',
  'skill-table-1-1': 'SEO 页面写作',
  'skill-table-1-2': '临时提示词写页面，后面再人工改 JSON 结构',
  'skill-table-1-3': '参考结构 + 记忆检索 + SEO 评审 + JSON 校验',
  'skill-table-2-1': '模型文档',
  'skill-table-2-2': '手动对照 flaq.ai 模板写模型 README',
  'skill-table-2-3': '固定模板 + 模型参数约束 + 稳定 README 输出',
  'skill-table-3-1': 'Cover / carousel 视觉',
  'skill-table-3-2': '临时写提示词，这张可能好看，下一张容易跑偏',
  'skill-table-3-3': '按 cover / carousel、裁切、安全区、主体和记忆来写',
  'skill-table-4-1': '资产整理',
  'skill-table-4-2': '手动检查命名、压缩图片视频，容易漏冲突',
  'skill-table-4-3': '先命名预检，再按确认范围转换和压缩',
  'skill-table-5-1': '任务边界',
  'skill-table-5-2': 'SEO、README、视觉提示词、素材处理混在同一套要求里',
  'skill-table-5-3': '按任务类型进入不同技能，减少规则串台',
  'skill-table-6-1': '人的角色',
  'skill-table-6-2': '重复解释规则，并修正 AI 自由发挥后的偏差',
  'skill-table-6-3': '集中审核事实、结构、审美判断和最终交付质量',
  'skill-outcome-1-title': 'SEO 生产更稳',
  'skill-outcome-1-text': '四个站点的 SEO JSON 页面可以按参考结构生产，不再每次重讲结构。',
  'skill-outcome-2-title': 'Flaq 文档稳定',
  'skill-outcome-2-text': '模型 README 能跟固定模板走，产出质量稳定，已经整合到项目技能中。',
  'skill-outcome-3-title': '视觉生产可复制',
  'skill-outcome-3-text': 'Cover 和 carousel 先看图能不能用，再把有效经验写回记忆。',
  'skill-outcome-4-title': '素材处理更省心',
  'skill-outcome-4-text': '图片和视频素材先预检命名和冲突，再做转换压缩，减少手动漏项。',
  'skill-next-li-1': '继续用 cover 和 carousel 的生成结果反推视觉记忆，先积累好图，再逐步统一 flaq.ai 的品牌视觉风格。',
  'skill-next-li-2': '把更多 GitHub 里的现成技能纳入日常流程，而不是每次从零写提示词。',
  'skill-next-li-3': '用 humanizer 这类技能检查网页文案里的 AI 痕迹。',
  'skill-next-li-4': '用 design-taste-frontend 这类技能辅助检查页面视觉、交互和前端实现质量。',
  'skill-ph-future-title': '未来技能扩展图',
  'skill-ph-future-text': 'SEO 文案 -> 配图需求 -> 文案润色 -> 设计检查 -> 输出审核。',
  'skill-ph-future-caption': '待补配图：展示未来如何把更多生产型技能接到现有流程里。',
  'skill-nav-workflow': '工作流',
  'skill-nav-library': '技能库',
  'portfolio-metric-1': '核心页面：首页、案例页、简历页',
  'portfolio-metric-2': '通过一个内容层规划双语模式',
  'portfolio-metric-3': '可复用案例段落结构',
  'portfolio-metric-4': '指导未来迭代的记忆文件',
  'portfolio-ph-cover-title': '作品集封面图',
  'portfolio-ph-cover-text': '建议内容：首页首屏和案例页以暗色编辑感拼贴展示。尽量使用真实网站截图。',
  'portfolio-ph-cover-caption': '待补配图：让作品集看起来像一个被设计过的产品，而不只是个人页面。',
  'portfolio-problem-li-1': '首页需要让访客快速理解我的方向。',
  'portfolio-problem-li-2': '案例页需要和首页像同一个网站，而不是独立文章模板。',
  'portfolio-problem-li-3': '项目故事需要展示背景、问题、策略、决策、证据、结果和下一步。',
  'portfolio-problem-li-4': '网站需要双语支持，但不应该手动复制两套页面。',
  'portfolio-problem-li-5': 'AI 协作需要持久记忆，避免设计决策在多次会话中漂移。',
  'portfolio-strategy-1-title': '首页',
  'portfolio-strategy-1-text': '快速定位，并突出最强项目证据，而不是拥挤项目网格。',
  'portfolio-strategy-2-title': '案例页',
  'portfolio-strategy-2-text': '用证据导向的叙事解释背景、决策、系统和结果。',
  'portfolio-strategy-3-title': '简历页',
  'portfolio-strategy-3-text': '给招聘者一条文本优先的快速扫描路径。',
  'portfolio-strategy-4-title': '记忆层',
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
  'portfolio-ph-structure-text': '用纵向编辑感流程展示八个编号段落，和 aitryon 案例节奏保持一致。',
  'portfolio-ph-structure-caption': '待补配图：展示可复用案例结构的叙事流程图。',
  'portfolio-visual-1-title': '一致性',
  'portfolio-visual-1-text': '首页、案例页和简历页共用一套视觉语言。',
  'portfolio-visual-2-title': '克制',
  'portfolio-visual-2-text': '强调色只用于激活状态、证明点和关键操作。',
  'portfolio-visual-3-title': '节奏',
  'portfolio-visual-3-text': '稳定图片比例和紧凑排版保护编辑感阅读节奏。',
  'portfolio-fig-visual': '视觉系统板：字体、颜色、间距、导航状态和案例页节奏被统一到一套暗色编辑感语言里。',
  'portfolio-memory-1-text': '记录网站当前状态和未来会话优先读取的上下文。',
  'portfolio-memory-2-text': '定义当前视觉方向、字体、布局逻辑和设计边界。',
  'portfolio-memory-3-text': '让文案、案例叙事、指标和双语规则保持一致。',
  'portfolio-memory-4-text': '跟踪待补视觉资产、证据、打磨项和未来结构决策。',
  'portfolio-fig-memory': '记忆系统：本地 markdown 文件保存决策、理由、待办事项和未来迭代上下文。',
  'portfolio-table-1-1': '定位',
  'portfolio-table-1-2': '需要把 UI、产品、AI 和增长能力组织成一个可理解身份',
  'portfolio-table-1-3': '形成 AI / Growth Product Designer & PM 的清晰定位',
  'portfolio-table-2-1': '首页',
  'portfolio-table-2-2': '需要一个让访客快速进入重点证据的首页',
  'portfolio-table-2-3': '用身份、精选案例、关于和联系构成第一屏到证据的路径',
  'portfolio-table-3-1': '案例页',
  'portfolio-table-3-2': '需要一种能持续复用的项目叙事方式',
  'portfolio-table-3-3': '建立 8 段式案例结构，并和首页共享同一套暗色编辑感系统',
  'portfolio-table-4-1': '内容',
  'portfolio-table-4-2': '需要让设计和内容判断能跨多次 AI 协作延续',
  'portfolio-table-4-3': '当前状态、设计规则、内容规则和待办事项指导每次迭代',
  'portfolio-table-5-1': '语言',
  'portfolio-table-5-2': '需要同时服务中文和英文读者',
  'portfolio-table-5-3': '已上线双语切换，并用内容规则让英文和中文文案成对维护',
  'portfolio-outcome-1-title': '更清晰',
  'portfolio-outcome-1-text': '网站把产品设计、AI SaaS、增长、SEO 内容和上线工作连接成一个身份。',
  'portfolio-outcome-2-title': '更统一',
  'portfolio-outcome-2-text': '首页、案例页和简历页现在共享一致的编辑感系统。',
  'portfolio-outcome-3-title': '可复用',
  'portfolio-outcome-3-text': '案例结构可以支持未来项目，不需要从空白页面开始。',
  'portfolio-outcome-4-title': '可持续',
  'portfolio-outcome-4-text': '记忆层让设计决策能被未来 AI 协作继续使用。',
  'portfolio-next-li-1': '补充更强的案例封面和过程图。',
  'portfolio-next-li-2': '为指标补充证据截图或来源说明。',
  'portfolio-next-li-3': '用同一叙事结构继续搭建未来案例页。',
  'portfolio-next-li-4': '继续打磨首页、案例页和简历页的双语体验。',
  'portfolio-next-li-5': '把设计评审和案例起草沉淀成可复用技能。',
  'portfolio-ph-roadmap-title': '作品集路线图',
  'portfolio-ph-roadmap-text': '当前网站基础 -> 更强视觉 -> 更多案例 -> 双语打磨 -> 可复用作品集工作流。',
  'portfolio-ph-roadmap-caption': '待补配图：展示这个作品集系统下一步如何成熟。',
  'portfolio-nav-visual': '视觉',
  'portfolio-nav-memory': '记忆'
});

const projects = [
  {
    title: "aitryon.art Product Experience Redesign",
    titleZh: "aitryon.art 产品体验重构",
    displayTitle: "aitryon.art",
    year: "2026",
    type: "AI SaaS · Product Strategy / UXUI / Growth",
    typeZh: "AI SaaS · 产品策略 / UXUI / 增长",
    detailUrl: "./case-study-aitryon.html",
    image: "./assets/cases/aitryon/aitryon-macbook-cover.webp",
    summary: "AI SaaS product experience reframed from a vertical try-on tool into a broader image and video creation platform.",
    summaryZh: "将垂直试穿工具重构为更完整的 AI 图像与视频创作平台。"
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
const topbar = document.querySelector(".topbar");
const navMenuToggle = document.querySelector(".nav-menu-toggle");
const navLinks = document.querySelector(".nav-links");

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
    previewImage.alt = `${getProjectTitle(project)} preview`;
    previewLink.href = project.detailUrl;
    previewLink.setAttribute("aria-label", `View ${getProjectTitle(project)} case study`);
    previewMeta.textContent = `${project.year} · ${getProjectType(project)}`;
    const previewTitleText = previewTitle.querySelector('span') || previewTitle;
    previewTitleText.textContent = getProjectTitle(project);
    previewText.textContent = getProjectSummary(project);
    syncActiveButton();
    preview.classList.remove("is-changing");
  }, 140);
}

function getProjectTitle(project) {
  return currentLang === 'zh' && project.titleZh ? project.titleZh : project.title;
}

function getProjectType(project) {
  return currentLang === 'zh' && project.typeZh ? project.typeZh : project.type;
}

function getProjectSummary(project) {
  return currentLang === 'zh' && project.summaryZh ? project.summaryZh : project.summary;
}

function updatePreviewContent() {
  const project = projects[activeIndex];
  if (!project || !previewMeta || !previewTitle || !previewText || !previewLink || !previewImage) return;
  previewMeta.textContent = `${project.year} · ${getProjectType(project)}`;
  const previewTitleText = previewTitle.querySelector('span') || previewTitle;
  previewTitleText.textContent = getProjectTitle(project);
  previewText.textContent = getProjectSummary(project);
  previewImage.alt = `${getProjectTitle(project)} preview`;
  previewLink.setAttribute("aria-label", `View ${getProjectTitle(project)} case study`);
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

function updateMenuLabel(isOpen = topbar?.classList.contains('is-nav-open')) {
  if (!navMenuToggle) return;
  const label = navMenuToggle.querySelector('span');
  if (label) {
    label.textContent = isOpen ? 'CLOSE' : 'MENU';
  }
  navMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  navMenuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
}

function setNavOpen(isOpen) {
  if (!topbar || !navMenuToggle) return;
  topbar.classList.toggle('is-nav-open', isOpen);
  document.body.classList.toggle('nav-open', isOpen);
  updateMenuLabel(isOpen);
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
  updatePreviewContent();
  updateMenuLabel();
}

if (navMenuToggle) {
  navMenuToggle.addEventListener('click', () => {
    setNavOpen(!topbar?.classList.contains('is-nav-open'));
  });
}

if (navLinks) {
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setNavOpen(false));
  });
}

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    setNavOpen(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    setNavOpen(false);
  }
});

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

function initWorkCaseReveal() {
  const workCases = Array.from(document.querySelectorAll('.work-stage .featured-case'));
  if (!workCases.length) return;

  const showCase = caseCard => {
    caseCard.classList.add('is-case-visible');
  };

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) {
    workCases.forEach(showCase);
    return;
  }

  const observer = new IntersectionObserver((entries, caseObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      showCase(entry.target);
      caseObserver.unobserve(entry.target);
    });
  }, {
    root: null,
    rootMargin: '0px 0px -18% 0px',
    threshold: 0.18
  });

  workCases.forEach(caseCard => observer.observe(caseCard));
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
        initWorkCaseReveal();
      }, 700);
    }
  }, 55);
}
