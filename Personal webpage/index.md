<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="雨玲 — AI 产品经理个人作品集：人与智能体共创未来的产品设计实践。" />
  <title>雨玲 | AI Product Manager</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <!-- Navigation -->
  <nav class="nav" aria-label="主导航">
    <a href="#hero" class="logo">Yuling<span>.</span>AI</a>
    <ul class="nav-links">
      <li><a href="#about">关于我</a></li>
      <li><a href="#projects">项目作品</a></li>
      <li><a href="#growth">Growth</a></li>
      <li><a href="#methodology">AI PM 特质</a></li>
      <li><a href="#contact">联系合作</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section id="hero" class="hero">
    <!-- Glowing arc -->
    <div class="arc" aria-hidden="true">
      <svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#4deeea" stop-opacity="0.2" />
            <stop offset="50%" stop-color="#69a4ec" stop-opacity="1" />
            <stop offset="100%" stop-color="#4deeea" stop-opacity="0.2" />
          </linearGradient>
        </defs>
        <path class="arc-path" d="M 60 480 Q 600 -120 1140 480" />
      </svg>
    </div>

    <!-- Particles -->
    <div class="particles" aria-hidden="true"></div>

    <!-- 3D Character with entrance animation -->
    <div class="character-stage" aria-label="3D 卡通形象出场动画">
      <div class="character">
        <div class="character-mask">
          <img src="assets/avatar-3d.png" alt="雨玲的卡通形象" loading="eager" />
        </div>
        <div class="character-shadow"></div>
        <div class="wink-eye" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M2 12 Q 12 17 22 12" /></svg>
        </div>
        <div class="sparkle left" aria-hidden="true"></div>
        <div class="sparkle right" aria-hidden="true"></div>
        <div class="sparkle top" aria-hidden="true"></div>
      </div>
    </div>

    <!-- Hero Content -->
    <div class="hero-content">
      <div class="badge">
        <span class="badge-dot"></span>
        <span>AI Product Manager · Agent Builder</span>
      </div>
      <h1 class="gradient-text glow-text">
        人与智能体<br />共创未来
      </h1>
      <p class="hero-subtitle">
        我负责把大模型的不确定性，转化为可落地、可验证、可规模化的产品价值。专注 Agent 设计、Workflow 编排与多模态体验。
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          查看项目
        </a>
        <a href="#contact" class="btn btn-ghost">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          联系合作
        </a>
      </div>
    </div>

    <!-- Trust bar -->
    <div class="trust-bar" aria-hidden="true">
      <span class="trust-label">聚焦领域</span>
      <span class="trust-logo">Agentic AI</span>
      <span class="trust-logo">RAG</span>
      <span class="trust-logo">Multi-modal</span>
      <span class="trust-logo">Workflow</span>
      <span class="trust-logo">Growth</span>
    </div>

    <div class="scroll-hint" aria-hidden="true">
      <span>向下滚动</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about">
    <div class="section-inner">
      <div class="about-grid">
        <div class="about-bio reveal">
          <h2>关于我</h2>
          <p class="about-lead">
            我想要成为一名 <strong>AI PM</strong>，并正在持续向这个方向靠近。
          </p>
          <blockquote class="about-quote">
            不谈具体场景的 AI 都是空中楼阁。真正优秀的 AIPM，得一只脚踩在泥泞里，另一只脚紧跟模型迭代的步伐；仰望星空，也要扎根泥土。
          </blockquote>
          <p>
            我相信好产品的本质不是模型参数，而是把技术能力封装成用户愿意用的体验。我擅长在工程、设计与业务之间做翻译，把不确定的模型输出变成确定的产品交付。
          </p>
          <div class="about-tag-strip" aria-label="AI PM 能力标签">
            <span class="tag accent">Agent 设计</span>
            <span class="tag">Prompt 工程</span>
            <span class="tag">模型选型</span>
            <span class="tag accent">Workflow 编排</span>
            <span class="tag">RAG 落地</span>
            <span class="tag">多模态体验</span>
            <span class="tag accent">数据飞轮</span>
            <span class="tag">AB 测试</span>
            <span class="tag">增长策略</span>
          </div>
          <div class="about-stats">
            <div class="stat">
              <span class="stat-value">3</span>
              <span class="stat-label">实习经历</span>
            </div>
            <div class="stat">
              <span class="stat-value">5+</span>
              <span class="stat-label">项目经历</span>
            </div>
            <div class="stat">
              <span class="stat-value">3</span>
              <span class="stat-label">比赛经历</span>
            </div>
          </div>
        </div>

        <div class="about-photo-wrap reveal" aria-label="雨玲的照片">
          <div class="about-photo-frame">
            <img src="assets/about-photo.jpg" alt="雨玲" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="projects">
    <div class="section-inner">
      <div class="section-header reveal">
        <span class="section-label">Selected Works</span>
        <h2 class="section-title gradient-text">项目作品</h2>
        <p class="section-desc">点击卡片可翻转查看项目背景、我的角色与关键成果。</p>
      </div>

      <div class="project-grid">
        <!-- Project 1 -->
        <div class="flip-card reveal" tabindex="0" role="button" aria-label="查看社区科普 AI 工作台详情">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3>社区科普 AI 工作台</h3>
              <p>面向社区运营的 Agent 协作平台：AI 脚本生成、海报设计、物料分发与活动复盘一站式完成。</p>
              <div class="card-tags">
                <span class="card-tag">Agent</span>
                <span class="card-tag">海报生成</span>
                <span class="card-tag">活动管理</span>
              </div>
              <div class="card-hint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a3.1 3.1 0 0 0-2.325-2.325C16.316 3.826 14.4 4 12 4s-4.316-.174-5.849-.513A3.1 3.1 0 0 0 3.826 6.812C3.487 8.344 3.5 10 3.5 10s-.013 1.657.326 3.188a3.1 3.1 0 0 0 2.325 2.325C8.316 16.174 10.224 16 12 16s3.684.174 5.349.513a3.1 3.1 0 0 0 2.325-2.325C20.513 14.657 20.5 13 20.5 13s.013-1.657-.326-3.188z"/><path d="M9.75 9.75 12 12l-2.25 2.25"/><path d="M14.25 9.75 12 12l2.25 2.25"/></svg>
                点击翻转
              </div>
            </div>
            <div class="flip-card-back">
              <div>
                <h4>项目详情</h4>
                <ul>
                  <li>负责从 0 到 1 的产品架构与功能规划</li>
                  <li>设计 5 大 Agent 模块：文案、海报、视频、问卷、数据</li>
                  <li>推动前后端、设计与算法三方协作</li>
                </ul>
              </div>
              <div class="card-metric">
                <span class="metric-value">80%</span>
                <span>活动筹备时间缩短</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="flip-card reveal" tabindex="0" role="button" aria-label="查看 AI 视频调研助手详情">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
              </div>
              <h3>AI 视频调研助手</h3>
              <p>自动生成 AI 科普视频市场调研报告：数据采集、类型分析、社区落地路径与一页 PPT 输出。</p>
              <div class="card-tags">
                <span class="card-tag">研报生成</span>
                <span class="card-tag">PPT 自动化</span>
                <span class="card-tag">内容分析</span>
              </div>
              <div class="card-hint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a3.1 3.1 0 0 0-2.325-2.325C16.316 3.826 14.4 4 12 4s-4.316-.174-5.849-.513A3.1 3.1 0 0 0 3.826 6.812C3.487 8.344 3.5 10 3.5 10s-.013 1.657.326 3.188a3.1 3.1 0 0 0 2.325 2.325C8.316 16.174 10.224 16 12 16s3.684.174 5.349.513a3.1 3.1 0 0 0 2.325-2.325C20.513 14.657 20.5 13 20.5 13s.013-1.657-.326-3.188z"/><path d="M9.75 9.75 12 12l-2.25 2.25"/><path d="M14.25 9.75 12 12l2.25 2.25"/></svg>
                点击翻转
              </div>
            </div>
            <div class="flip-card-back">
              <div>
                <h4>项目详情</h4>
                <ul>
                  <li>定义调研框架：本体论、MECE 分类、落地路径</li>
                  <li>联动多源搜索与 AI 汇总，输出 Markdown + PPT + HTML</li>
                  <li>设计可复用的研报模板</li>
                </ul>
              </div>
              <div class="card-metric">
                <span class="metric-value">3h</span>
                <span>原需 2 天压缩至 3 小时</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="flip-card reveal" tabindex="0" role="button" aria-label="查看企业智能知识库详情">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
              </div>
              <h3>企业智能知识库</h3>
              <p>基于 RAG 的内部问答系统：文档向量化、多路召回、答案溯源与权限隔离，降低客服重复响应成本。</p>
              <div class="card-tags">
                <span class="card-tag">RAG</span>
                <span class="card-tag">向量检索</span>
                <span class="card-tag">知识管理</span>
              </div>
              <div class="card-hint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a3.1 3.1 0 0 0-2.325-2.325C16.316 3.826 14.4 4 12 4s-4.316-.174-5.849-.513A3.1 3.1 0 0 0 3.826 6.812C3.487 8.344 3.5 10 3.5 10s-.013 1.657.326 3.188a3.1 3.1 0 0 0 2.325 2.325C8.316 16.174 10.224 16 12 16s3.684.174 5.349.513a3.1 3.1 0 0 0 2.325-2.325C20.513 14.657 20.5 13 20.5 13s.013-1.657-.326-3.188z"/><path d="M9.75 9.75 12 12l-2.25 2.25"/><path d="M14.25 9.75 12 12l2.25 2.25"/></svg>
                点击翻转
              </div>
            </div>
            <div class="flip-card-back">
              <div>
                <h4>项目详情</h4>
                <ul>
                  <li>主导需求分析与产品原型</li>
                  <li>设计分段、嵌入、检索与重排序链路</li>
                  <li>建立答案置信度与人工兜底机制</li>
                </ul>
              </div>
              <div class="card-metric">
                <span class="metric-value">65%</span>
                <span>重复问题覆盖率</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="flip-card reveal" tabindex="0" role="button" aria-label="查看增长实验平台详情">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h3>增长实验平台</h3>
              <p>AI 驱动的 AB 测试分析与实验管理：自动归因、结论生成与下一组实验推荐，提升产品决策效率。</p>
              <div class="card-tags">
                <span class="card-tag">AB Test</span>
                <span class="card-tag">数据分析</span>
                <span class="card-tag">Growth</span>
              </div>
              <div class="card-hint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a3.1 3.1 0 0 0-2.325-2.325C16.316 3.826 14.4 4 12 4s-4.316-.174-5.849-.513A3.1 3.1 0 0 0 3.826 6.812C3.487 8.344 3.5 10 3.5 10s-.013 1.657.326 3.188a3.1 3.1 0 0 0 2.325 2.325C8.316 16.174 10.224 16 12 16s3.684.174 5.349.513a3.1 3.1 0 0 0 2.325-2.325C20.513 14.657 20.5 13 20.5 13s.013-1.657-.326-3.188z"/><path d="M9.75 9.75 12 12l-2.25 2.25"/><path d="M14.25 9.75 12 12l2.25 2.25"/></svg>
                点击翻转
              </div>
            </div>
            <div class="flip-card-back">
              <div>
                <h4>项目详情</h4>
                <ul>
                  <li>设计实验配置、指标绑定与流量分配</li>
                  <li>AI 自动输出实验结论与下一步建议</li>
                  <li>沉淀增长方法论与实验知识库</li>
                </ul>
              </div>
              <div class="card-metric">
                <span class="metric-value">1.5x</span>
                <span>实验迭代速度提升</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 5 -->
        <div class="flip-card reveal" tabindex="0" role="button" aria-label="查看 AI 海报生成器详情">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              </div>
              <h3>AI 海报生成器</h3>
              <p>活动物料自动化工具：输入主题与模块参数，自动生成多尺寸、多风格的社交媒体海报。</p>
              <div class="card-tags">
                <span class="card-tag">ImageGen</span>
                <span class="card-tag">模板引擎</span>
                <span class="card-tag">营销工具</span>
              </div>
              <div class="card-hint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a3.1 3.1 0 0 0-2.325-2.325C16.316 3.826 14.4 4 12 4s-4.316-.174-5.849-.513A3.1 3.1 0 0 0 3.826 6.812C3.487 8.344 3.5 10 3.5 10s-.013 1.657.326 3.188a3.1 3.1 0 0 0 2.325 2.325C8.316 16.174 10.224 16 12 16s3.684.174 5.349.513a3.1 3.1 0 0 0 2.325-2.325C20.513 14.657 20.5 13 20.5 13s.013-1.657-.326-3.188z"/><path d="M9.75 9.75 12 12l-2.25 2.25"/><path d="M14.25 9.75 12 12l2.25 2.25"/></svg>
                点击翻转
              </div>
            </div>
            <div class="flip-card-back">
              <div>
                <h4>项目详情</h4>
                <ul>
                  <li>定义 5 模块海报结构（标题、信息、描述、提示、二维码）</li>
                  <li>打通多模型图像生成与本地渲染流水线</li>
                  <li>支持一键导出与多平台尺寸适配</li>
                </ul>
              </div>
              <div class="card-metric">
                <span class="metric-value">10x</span>
                <span>海报产出效率提升</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 6 -->
        <div class="flip-card reveal" tabindex="0" role="button" aria-label="查看智能会议纪要详情">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v14a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v4a7 7 0 0 1-14 0v-4"/><line x1="12" y1="19" x2="12" y2="23"/></svg>
              </div>
              <h3>智能会议纪要</h3>
              <p>语音转结构化纪要：识别发言人、提取待办、生成决策清单，并自动同步至协作工具。</p>
              <div class="card-tags">
                <span class="card-tag">语音转写</span>
                <span class="card-tag">NLP</span>
                <span class="card-tag">效率工具</span>
              </div>
              <div class="card-hint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a3.1 3.1 0 0 0-2.325-2.325C16.316 3.826 14.4 4 12 4s-4.316-.174-5.849-.513A3.1 3.1 0 0 0 3.826 6.812C3.487 8.344 3.5 10 3.5 10s-.013 1.657.326 3.188a3.1 3.1 0 0 0 2.325 2.325C8.316 16.174 10.224 16 12 16s3.684.174 5.349.513a3.1 3.1 0 0 0 2.325-2.325C20.513 14.657 20.5 13 20.5 13s.013-1.657-.326-3.188z"/><path d="M9.75 9.75 12 12l-2.25 2.25"/><path d="M14.25 9.75 12 12l2.25 2.25"/></svg>
                点击翻转
              </div>
            </div>
            <div class="flip-card-back">
              <div>
                <h4>项目详情</h4>
                <ul>
                  <li>设计会议音频处理与说话人分离链路</li>
                  <li>定义待办、决策、争议三类信息抽取</li>
                  <li>对接飞书 / 企微机器人自动推送</li>
                </ul>
              </div>
              <div class="card-metric">
                <span class="metric-value">30min</span>
                <span>1 小时会议整理时间</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Growth Section -->
  <section id="growth" class="growth">
    <div class="section-inner">
      <div class="section-header reveal">
        <span class="section-label">Growth Path</span>
        <h2 class="section-title gradient-text">Where I've Been</h2>
        <p class="section-desc">A timeline of internships, projects and competitions that shaped my product mindset.</p>
      </div>

      <!-- Timeline overview -->
      <div class="growth-timeline reveal" aria-label="Experience timeline">
        <div class="timeline-line"></div>
        <div class="timeline-item">
          <span class="timeline-dot internship"></span>
          <span class="timeline-date">2024.01</span>
          <span class="timeline-title">Uman Cartoon TV</span>
        </div>
        <div class="timeline-item">
          <span class="timeline-dot competition"></span>
          <span class="timeline-date">2024.03</span>
          <span class="timeline-title">E-commerce Challenge</span>
        </div>
        <div class="timeline-item">
          <span class="timeline-dot project"></span>
          <span class="timeline-date">2024.09</span>
          <span class="timeline-title">Toutiao Health</span>
        </div>
        <div class="timeline-item">
          <span class="timeline-dot project"></span>
          <span class="timeline-date">2024.10</span>
          <span class="timeline-title">Industrial Dashboard</span>
        </div>
        <div class="timeline-item">
          <span class="timeline-dot internship"></span>
          <span class="timeline-date">2025.07</span>
          <span class="timeline-title">Lexin Shengwen</span>
        </div>
      </div>

      <!-- Category filter -->
      <div class="growth-filters reveal" aria-label="Filter by experience type">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="internship">Internship</button>
        <button class="filter-btn" data-filter="project">Project</button>
        <button class="filter-btn" data-filter="competition">Competition</button>
      </div>

      <!-- Experience cards -->
      <div class="growth-grid">
        <!-- Internship 1 -->
        <article class="growth-card reveal" data-category="internship">
          <div class="growth-card-meta">
            <span class="growth-badge internship">Internship</span>
            <span class="growth-date">2024.01 - 2024.02</span>
          </div>
          <h3>Uman Cartoon TV</h3>
          <h4>New Media Operations · Media & Entertainment</h4>
          <p>Interviewed 552 users at Tianfu Square to capture real needs for children's entertainment videos. Created user personas, requirement docs and 100 research reports. Analyzed weekly search/direct data with Excel and optimized weak campaigns.</p>
          <p>Co-planned the "Travel with You" short video contest and star future support plan, improving user stickiness.</p>
          <div class="growth-metrics">
            <span><strong>250K+</strong> views in 30 days</span>
            <span><strong>552</strong> field interviews</span>
          </div>
        </article>

        <!-- Internship 2 -->
        <article class="growth-card reveal" data-category="internship">
          <div class="growth-card-meta">
            <span class="growth-badge internship">Internship</span>
            <span class="growth-date">2025.07 - 2025.09</span>
          </div>
          <h3>Lexin Shengwen</h3>
          <h4>Information Flow Operations</h4>
          <p>Provided continuous creative ideas for Tile products by analyzing real-person, cartoon, real-shot and generic creative elements of Tile connect / Match categories. Monitored weekly ROI, install and ret1-21 data to guide growth.</p>
          <p>Documented winning creative directions in PRD format and produced live-action creative scripts.</p>
          <div class="growth-metrics">
            <span><strong>Weekly</strong> ROI tracking</span>
            <span><strong>Creative</strong> PRDs</span>
          </div>
        </article>

        <!-- Project 1 -->
        <article class="growth-card reveal" data-category="project">
          <div class="growth-card-meta">
            <span class="growth-badge project">Project</span>
            <span class="growth-date">2024.10 - 2024.11</span>
          </div>
          <h3>Industrial Internet Dashboard</h3>
          <h4>Product Design · Data Visualization</h4>
          <p>Built an operations dashboard for a Chengde rose-industry enterprise on an industrial internet platform. Mapped the full business flow from planting to sales and defined key data indicators for four modules: planting, processing, logistics and sales.</p>
          <div class="growth-metrics">
            <span><strong>4</strong> dashboard modules</span>
            <span><strong>Real-time</strong> data</span>
          </div>
        </article>

        <!-- Project 2 -->
        <article class="growth-card reveal" data-category="project">
          <div class="growth-card-meta">
            <span class="growth-badge project">Project</span>
            <span class="growth-date">2024.09 - 2024.10</span>
          </div>
          <h3>Toutiao Health Vertical Operations</h3>
          <h4>Content Operations · Growth</h4>
          <p>Designed user acquisition and activation strategies for Toutiao's health vertical. Built user profiles, analyzed hit content across food, emotion and health categories, cleaned data and designed a Top100 hit formula to guide creator operations.</p>
          <div class="growth-metrics">
            <span><strong>10K+</strong> new creators</span>
            <span><strong>5K+</strong> external activations</span>
          </div>
        </article>

        <!-- Project 3 -->
        <article class="growth-card reveal" data-category="project">
          <div class="growth-card-meta">
            <span class="growth-badge project">Project</span>
            <span class="growth-date">2024.08 - 2024.09</span>
          </div>
          <h3>DiDi 99pay Digital Wallet</h3>
          <h4>Product Optimization · Overseas Market</h4>
          <p>Optimized DiDi's 99pay wallet for the Brazilian market. Benchmarked Meituan Pay, Douyin Pay and Alipay; analyzed BOLETO and PIX transfer flows; wrote PRDs for home traffic diversion and secondary-page retention.</p>
          <div class="growth-metrics">
            <span><strong>+20%</strong> new registrations</span>
            <span><strong>+15%</strong> DAU</span>
          </div>
        </article>

        <!-- Competition 1 -->
        <article class="growth-card reveal" data-category="competition">
          <div class="growth-card-meta">
            <span class="growth-badge competition">Competition</span>
            <span class="growth-date">2024.01 - 2024.05</span>
          </div>
          <h3>National E-commerce Triple-Create Challenge</h3>
          <h4>Team Leader · Fishery-Tourism Integration</h4>
          <p>Led a team to address employment and market challenges in Beizha Village, Fujian. Wrote business plans, operated fishery-tourism products, promoted via new media, developed a mini-program and designed travel routes.</p>
          <div class="growth-metrics">
            <span><strong>50K+</strong> sales in 25 days</span>
            <span><strong>350K+</strong> views</span>
          </div>
        </article>

        <!-- Competition 2 -->
        <article class="growth-card reveal" data-category="competition">
          <div class="growth-card-meta">
            <span class="growth-badge competition">Competition</span>
            <span class="growth-date">2024.03 - 2024.06</span>
          </div>
          <h3>China "Internet+" Innovation Contest</h3>
          <h4>Team Leader · Rural Revitalization</h4>
          <p>Continued the Beizha fishery-tourism project with a sharper business model. Coordinated team resources, refined project advantages and led the defense. Created IP characters and peripheral products.</p>
          <div class="growth-metrics">
            <span><strong>100K+</strong> fishermen impacted</span>
            <span><strong>267%</strong> tourism heat index</span>
          </div>
        </article>

        <!-- Competition 3 -->
        <article class="growth-card reveal" data-category="competition">
          <div class="growth-card-meta">
            <span class="growth-badge competition">Competition</span>
            <span class="growth-date">2024.09</span>
          </div>
          <h3>National Mathematical Modeling Contest</h3>
          <h4>Paper Writer · Magnetic Loss Prediction</h4>
          <p>Built a machine learning pipeline to predict magnetic material core loss. Extracted waveform features and trained a Random Forest classifier; applied temperature correction and regression models to improve prediction accuracy.</p>
          <div class="growth-metrics">
            <span><strong>National</strong> Third Prize</span>
            <span><strong>Random Forest</strong> + Temperature Correction</span>
          </div>
        </article>

        <!-- Competition 4 -->
        <article class="growth-card reveal" data-category="competition">
          <div class="growth-card-meta">
            <span class="growth-badge competition">Competition</span>
            <span class="growth-date">2024.03 - 2024.10</span>
          </div>
          <h3>China "Internet+" Innovation Contest · Smart Filter Pioneer</h3>
          <h4>Project Leader · AI Content Safety</h4>
          <p>Led the team to design a deep-learning sensitive-word detection product. Defined product positioning, divided team roles, wrote the business plan and led the roadshow答辩. Validated market fit through user research and competitive analysis.</p>
          <div class="growth-metrics">
            <span><strong>National</strong> Third Prize</span>
            <span><strong>Deep Learning</strong> Sensitive-Word Detection</span>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- AI PM Traits Section -->
  <section id="methodology" class="methodology">
    <div class="section-inner">
      <div class="section-header reveal">
        <span class="section-label">AI PM DNA</span>
        <h2 class="section-title gradient-text">顶尖 AI PM 的特质</h2>
        <p class="section-desc">除了项目经验，一个 AI 产品经理还需要这些底层能力。它们是我持续修炼的方向。</p>
      </div>

      <div class="methodology-grid">
        <div class="trait-card reveal">
          <div class="trait-number">01</div>
          <h3>模型翻译力</h3>
          <p>能把业务问题拆解成模型可理解的任务：定义输入、输出、约束与评估标准，让技术与产品语言互通。</p>
        </div>
        <div class="trait-card reveal">
          <div class="trait-number">02</div>
          <h3>边界判断力</h3>
          <p>清楚知道 AI 能做什么、不能做什么，何时该用模型、何时该用规则，何时必须引入人工兜底。</p>
        </div>
        <div class="trait-card reveal">
          <div class="trait-number">03</div>
          <h3>体验收敛力</h3>
          <p>模型输出充满不确定性，能用 UX 与流程设计把模糊结果收敛成用户可预期、可接受的体验。</p>
        </div>
        <div class="trait-card reveal">
          <div class="trait-number">04</div>
          <h3>数据验证力</h3>
          <p>用指标体系替代主观判断，持续监测幻觉率、满意度、转化率与业务收益，让价值被看见。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="section-inner">
      <div class="contact-box reveal">
        <h2 class="gradient-text">一起做点酷的事</h2>
        <p>如果你在寻找一位能把 AI 能力落地成产品的搭档，欢迎聊聊。</p>
        <div class="contact-links">
          <a href="mailto:j987376485@qq.com" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            发送邮件
          </a>
          <a href="https://github.com/Just-younth-life" target="_blank" rel="noopener" class="btn btn-ghost">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.3-5.36-.3-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="section-inner">
      <p>2026 Yuling.AI · Built with curiosity, caffeine and a lot of prompts.</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
