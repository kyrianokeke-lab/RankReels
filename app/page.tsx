"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetUrl = (path: string) => `${basePath}${path}`;

const reelCards = [
  {
    src: "/rankreels-assets/sample-reel-1.webp",
    alt: "Sample ranking reel generated with RankReels"
  },
  {
    src: "/rankreels-assets/sample-reel-2.webp",
    alt: "Sample creator ranking reel generated with RankReels"
  },
  {
    src: "/rankreels-assets/sample-reel-3.webp",
    alt: "Sample vertical ranking reel generated with RankReels"
  },
  {
    src: "/rankreels-assets/sample-reel-4.webp",
    alt: "Sample ranked list reel generated with RankReels"
  },
  {
    src: "/rankreels-assets/sample-reel-5.webp",
    alt: "Sample ranking reel collection generated with RankReels"
  }
];

const vslReels = [
  "/rankreels-assets/vsl-reel-1.mp4",
  "/rankreels-assets/vsl-reel-2.mp4",
  "/rankreels-assets/vsl-reel-3.mp4"
];

const twinScenes = [
  {
    src: "/rankreels-assets/digital-twin-scenes/scene-1.jpeg",
    title: "I Ranked The Best Traffic Sources",
    alt: "Digital twin scene showing the same founder face in a home office"
  },
  {
    src: "/rankreels-assets/digital-twin-scenes/scene-2.jpeg",
    title: "I Ranked Top AI Tools For Founders",
    alt: "Digital twin scene showing the same founder face in a creator desk setup"
  },
  {
    src: "/rankreels-assets/digital-twin-scenes/scene-3.jpeg",
    title: "I Ranked Social Media Strategies",
    alt: "Digital twin scene showing the same founder face inside a car"
  },
  {
    src: "/rankreels-assets/digital-twin-scenes/scene-4.jpeg",
    title: "I Ranked Common Marketing Mistakes",
    alt: "Digital twin scene showing the same founder face in a cafe"
  },
  {
    src: "/rankreels-assets/digital-twin-scenes/scene-5.jpeg",
    title: "I Ranked Content Ideas That Convert",
    alt: "Digital twin scene showing the same founder face in a library"
  }
];

const pipelineSteps = [
  "research",
  "script",
  "recording session",
  "supporting visuals",
  "voiceover",
  "editing",
  "captions",
  "final render"
];

const tradeOffs = [
  {
    title: "Film yourself more",
    text: "Your content stays authentic, but every new reel still demands your time, energy, and another recording session."
  },
  {
    title: "Pay someone else",
    text: "You reduce some of the workload, but take on an ongoing production cost – and you may still need to provide the ideas, record the footage, and manage the process."
  },
  {
    title: "Use generic AI Content",
    text: "You can produce videos faster, but they often lack the face, voice, and point of view that make the content recognisably yours."
  }
];

const workflowSteps = [
  {
    title: "Create your Digital Twin",
    text: "Add one clear photo or selfie and a short voice sample. Your Digital Twin is ready in less than five minutes and saved for every future reel.",
    asset: "/rankreels-assets/digital-twin-creation.png",
    focusAsset: "/rankreels-assets/workflow-twin-focus.png",
    alt: "RankReels digital twin setup screen",
    focusAlt: "Twin Details upload form for creating a digital twin",
    variant: "twin"
  },
  {
    title: "Choose what to Rank",
    text: "Bring your own idea or generate a batch tailored to your niche, audience, offer, and point of view",
    asset: "/rankreels-assets/idea-generation-workflow.png",
    focusAsset: "/rankreels-assets/workflow-idea-focus.png",
    alt: "RankReels idea generation screen",
    focusAlt: "RankReels idea prompt, reel settings, and ranking idea list",
    variant: "idea"
  },
  {
    title: "Review & Publish",
    text: "Edit the script, preview the video, replace individual assets, and download your finished vertical reel.",
    asset: "/rankreels-assets/final-render.png",
    focusAsset: "/rankreels-assets/workflow-render-focus.png",
    alt: "RankReels final rendered reel screen",
    focusAlt: "RankReels final render screen with finished reel and publishing options",
    variant: "publish"
  }
];

const handlesList = [
  "Ranking ideas tailored to your niche and audience.",
  "Scripts written around your point of view.",
  "Voiceovers that sound like you.",
  "Your Digital Twin’s presentation.",
  "Supporting visuals for the ranking.",
  "Captions, formatting, and video editing.",
  "The final vertical video."
];

const controlList = [
  "What you want to rank",
  "What appears in the final script.",
  "The order of your ranking.",
  "Which visuals and voiceovers are used.",
  "What gets rendered and published"
];

const featureCards = [
  {
    title: "Never Run Out of Things to Rank",
    text: "Generate batches of content ideas tailored to your niche, audience, offer, and point of view.",
    asset: {
      src: "/rankreels-assets/feature-ideas.png",
      focusSrc: "/rankreels-assets/feature-ideas-focus.png",
      alt: "RankReels ideas screen showing saved ranking topics",
      focusAlt: "RankReels ideas list with saved ranking topics",
      variant: "ideas"
    },
    size: "large"
  },
  {
    title: "Turn Ideas into Scripts Faster",
    text: "Transform any topic into a complete ranking script, then edit the order, wording, and opinions until they feel right.",
    asset: {
      src: "/rankreels-assets/feature-script.png",
      focusSrc: "/rankreels-assets/feature-script-focus.jpeg",
      alt: "RankReels script writer screen",
      focusAlt: "RankReels script review with editable ranking fields",
      variant: "script"
    },
    size: "large"
  },
  {
    title: "Keep Every Video on Brand",
    text: "Your brand information and writing style guide the content, so each reel stays connected to how you communicate.",
    asset: {
      variant: "brand",
      outputs: [
        "/rankreels-assets/feature-brand-output-1.jpeg",
        "/rankreels-assets/feature-brand-output-2.jpeg",
        "/rankreels-assets/feature-brand-output-3.jpeg"
      ]
    },
    size: "small"
  },
  {
    title: "Change Anything Before Rendering",
    text: "Edit the script, replace visuals or voiceovers, and regenerate individual assets before completing the final video.",
    asset: {
      src: "/rankreels-assets/feature-review-bg.png",
      focusSrc: "/rankreels-assets/feature-review-panel-voiceovers.png",
      secondaryFocusSrc: "/rankreels-assets/feature-review-panel-images.png",
      alt: "RankReels review and edit screen before rendering",
      focusAlt: "RankReels edit reel voiceover panel",
      secondaryFocusAlt: "RankReels edit reel images panel",
      variant: "review"
    },
    size: "small"
  },
  {
    title: "Stay Visible Throughout The Year",
    text: "Create up to 300 watermark-free ranking reels every year, ready to download and share across your social platforms.",
    asset: {
      src: "/rankreels-assets/feature-publish-bg.png",
      focusSrc: "/rankreels-assets/feature-publish-socials.png",
      alt: "RankReels publishing connections screen",
      focusAlt: "RankReels social publishing platforms",
      variant: "publish"
    },
    size: "small"
  }
];

const audienceCards = [
  {
    title: "Founders & Business Owners",
    text: "Turn your experience, opinions, favourite tools, and lessons from running your business into consistent content that keeps you visible."
  },
  {
    title: "Coaches & Consultants",
    text: "Rank common mistakes, useful strategies, industry advice, and proven methods to educate your audience and demonstrate your expertise."
  },
  {
    title: "Marketers",
    text: "Transform campaign insights, tool comparisons, trends, and practical marketing lessons into reels that attract attention and start conversations."
  },
  {
    title: "Creators & Educators",
    text: "Build a recognisable content series around your niche, share what you know, and publish more frequently without increasing your production workload."
  }
];

const toolStackRows = [
  {
    need: "Film & edit every reel yourself",
    requires: "Hours of recording & production every week."
  },
  {
    need: "Video editor or VA",
    requires: "Ongoing fees, instructions, feedback & revisions."
  },
  {
    need: "AI Avatar & voice cloning tools",
    requires: "Additional monthly subscriptions"
  },
  {
    need: "Ideas & scriptwriting tools",
    requires: "Another subscription & more tools to manage"
  },
  {
    need: "Visual, captioning & editing tools",
    requires: "More subscriptions & manual production work."
  }
];

const foundersIncludes = [
  "12 months of RankReels access",
  "Credits for up to 300 Ranking reels",
  "Multiple reusable digital twin",
  "AI-powered idea generation",
  "Personalised Scriptwriting",
  "Complete video production",
  "Full review & editing control",
  "High-quality downloads",
  "RankReels agent skills & developer API."
];

const faqItems = [
  {
    question: "What’s the founder’s deal, and do I keep the price?",
    answer:
      "The Founders’ Deal gives you RankReels for $297/year instead of the regular $708/year. As long as your subscription remains active, you’ll continue renewing at the Founders’ price."
  },
  {
    question: "Will the videos look & sound like me?",
    answer:
      "RankReels uses your photo, voice, brand information, and writing style to create videos designed to look, sound, and feel like you."
  },
  {
    question: "How much setup is involved?",
    answer:
      "You’ll upload a photo, record a short voice sample, and add information about your brand and writing style. You only need to do this once."
  },
  {
    question: "Can I review & change anything before rendering?",
    answer:
      "Yes. You can edit your script and ranking, replace assets, and regenerate parts of the video. A credit is only used when you render the finished reel."
  },
  {
    question: "What do I receive when my reel is finished?",
    answer:
      "A complete, vertical MP4 with your Digital Twin, voiceover, visuals, captions, and editing – ready to download and post."
  },
  {
    question: "What is the refund policy",
    answer:
      "If RankReels doesn’t work as advertised, you may request a refund within 14 days, provided you haven’t used any credits to render a finished reel."
  }
];

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      gsap.from(".hero-copy > *", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12
      });

      gsap.utils.toArray<HTMLElement>(".motion-media").forEach((item) => {
        gsap.fromTo(
          item,
          { scale: 0.86, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              end: "bottom 35%",
              scrub: true
            }
          }
        );
      });

    },
    { scope: pageRef }
  );

  return (
    <main ref={pageRef} className="site-shell overflow-x-hidden w-full max-w-full">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#" aria-label="RankReels home">
          <img src={assetUrl("/rankreels-assets/rankreels-logo.svg")} alt="" />
          <span>RankReels</span>
        </a>
        <div className="nav-links">
          <a href="#samples">Samples</a>
          <a href="#proof">Proof</a>
        </div>
        <a className="nav-cta" href="#start">
          Get Early Access
        </a>
      </nav>

      <section className="hero-section" id="start">
        <div className="ambient-grid" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">AI-POWERED RANKING REELS FOR BUSY FOUNDERS</p>
            <h1>Turn Your Ideas Into Ranking Reels People Want to Watch.</h1>
            <p className="hero-lede">
              Create ready-to-post reels that look and sound exactly like you..
              <br />
              Without stepping in front of a camera.
            </p>
            <p className="hero-support">
              Post daily, show up consistently & increase visibility - no scripting, no editing.
            </p>

            <div className="vsl-frame motion-media" aria-label="RankReels VSL preview">
              <div className="phone-stack" aria-hidden="true">
                {vslReels.map((src, index) => (
                  <span key={src}>
                    <video
                      src={assetUrl(src)}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={`RankReels VSL reel ${index + 1}`}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="samples-section" id="samples" aria-labelledby="samples-title">
        <div className="section-heading">
          <h2 id="samples-title">
            One Idea In. A Finished <br />
            Ranking Reel Out
          </h2>
        </div>

        <div className="reel-grid">
          {reelCards.map((reel) => (
            <article className="reel-card group motion-media" key={reel.src}>
              <div className="reel-visual">
                <img src={assetUrl(reel.src)} alt={reel.alt} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-section" id="proof" aria-labelledby="proof-title">
        <div className="proof-inner">
          <h2 id="proof-title">Same Creator. Different Results.</h2>

          <aside className="proof-card motion-media" aria-label="Ranking reel proof board">
            <div className="proof-window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="proof-evidence-stack" aria-label="Creator profile screenshots showing ranking videos with higher view counts">
              <figure className="proof-phone-card proof-phone-card-back">
                <img src={assetUrl("/rankreels-assets/proof-ranking-54k.jpeg")} alt="Creator profile grid showing a ranking reel with 54.5K views" />
              </figure>
              <figure className="proof-phone-card proof-phone-card-front">
                <img src={assetUrl("/rankreels-assets/proof-ranking-64k.jpeg")} alt="Creator profile grid showing a ranking reel with 64.3K views" />
              </figure>
            </div>
            <div className="proof-insight-card">
              <ul>
                <li><span>Normal posts</span><strong>500–2K views</strong></li>
                <li><span>Ranking reel</span><strong>64.3K views</strong></li>
                <li><span>Another ranking reel</span><strong>54.5K views</strong></li>
              </ul>
              <small>Same person. Same niche.</small>
            </div>
          </aside>

          <div className="proof-text">
            <p>This creator posts videos about job hunting.</p>
            <p>
              When you scroll through her profile, you’ll notice that most of her videos get
              between 500 and 2,000 views.
            </p>
            <p>Then two of her ranking videos broke out:</p>
            <blockquote>64,300 views and 54,500 views</blockquote>
            <p>
              Same account.
              <br />
              Same creator.
              <br />
              Same niche.
            </p>
            <p>The standout difference was the format.</p>
            <p>But the question is: what’s the big deal about this format? Why does it work?</p>
          </div>
        </div>
      </section>

      <section className="ranking-section" aria-labelledby="ranking-title">
        <div className="ranking-inner">
          <div className="ranking-copy">
            <p className="section-kicker">WHY RANKING CONTENT WORKS?</p>
            <h2 id="ranking-title">
              Your Audience Has to Know What <br />
              Made Number One..
            </h2>
            <div className="ranking-body">
              <p>
                The moment you rank a list from worst to best, you create an open loop.
              </p>
              <p>
                People want to know what takes the top spot, and as the list progresses, they
                begin comparing your choices with their own.
              </p>
              <p>
                That curiosity keeps them watching longer, signalling to the algorithm that the
                video is holding people’s attention and may be worth showing to more viewers.
              </p>
              <p>And it goes beyond watch time. They also spark conversations.</p>
              <p>
                Viewers form opinions about where each item belongs, and whether they agree or
                disagree with your ranking, they’re naturally drawn to share those opinions in
                the comments.
              </p>
              <p>
                That combination of attention and engagement gives ranking reels a much better
                chance of reaching more people - and potentially going viral.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bottleneck-section" aria-labelledby="bottleneck-title">
        <div className="bottleneck-heading">
          <h2 id="bottleneck-title">
            <span className="bottleneck-title-primary">
              The Reel Takes 30 Seconds
              <br />
              to Watch..
            </span>
            <span className="bottleneck-title-secondary">
              But Creating It Can <span>Take Hours</span>
            </span>
          </h2>
        </div>

        <div className="bottleneck-inner">
          <div className="bottleneck-copy">
            <p>
              You probably already have ideas you could start ranking – tools you use,
              mistakes you’ve seen, strategies you recommend, trends you disagree with, and
              lessons you’ve learned from running your business.
            </p>
            <p>The problem is turning those ideas into finished videos.</p>
            <p>Every ranking reel still requires effort (research, scripting, recording..)</p>
            <p>
              And once you publish one, you have to start the entire process again for the
              next.
            </p>
            <p>
              The finished video may last only 30 seconds, but everything required to create it
              can take hours.
            </p>
          </div>

          <div className="pipeline-panel motion-media" aria-label="Ranking reel production pipeline">
            {pipelineSteps.map((step) => (
              <div className="pipeline-item" key={step}>
                <p>{step}</p>
              </div>
            ))}
          </div>

          <p className="bottleneck-wide">
            As a founder, you’re already busy running a business. Finding the time to repeat
            that process consistently
            <br />
            is difficult. Which usually leaves you with three options –
            film more, pay someone else to do it, or
            <br />
            settle for content that doesn’t really feel
            like you.
          </p>
        </div>
      </section>

      <section className="tradeoffs-section" aria-labelledby="tradeoffs-title">
        <div className="tradeoffs-inner">
          <div className="tradeoffs-heading">
            <h2 id="tradeoffs-title">
              More Time. More Money.
              <br />
              Or Content That Doesn’t Feel Like You.
            </h2>
            <p>Each option solves one part of the problem and creates another.</p>
          </div>

          <div className="tradeoffs-grid">
            {tradeOffs.map((item) => (
              <article className="trade-card motion-media" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <p className="tradeoffs-close">
            So you’re forced to choose between giving up more time, spending more money, or
            losing the personal identity behind your content.
          </p>

          <p className="tradeoffs-complexity">
            But creating consistently shouldn’t require
            <br />
            so much complexity..
          </p>
        </div>
      </section>

      <section className="idea-section" aria-labelledby="idea-title">
        <div className="idea-inner">
          <div className="idea-copy">
            <h2 id="idea-title">
              Your Next Ranking Reel Only
              <br />
              Needs An Idea..
            </h2>
            <p>
              Imagine setting up your face, voice & brand once, then reusing them whenever
              you have something new to rank.
            </p>
            <p>
              You choose the topic, shape the opinions, and approve the message... without
              getting back in front of a camera, recording another voiceover, or piecing the
              video together yourself.
            </p>
            <p>
              Instead of rebuilding every reel from scratch, you have a repeatable way to
              create content that already looks, sounds, and feels like you.
            </p>
          </div>
        </div>
      </section>

      <section className="intro-section" aria-labelledby="intro-title">
        <div className="intro-inner">
          <p className="section-kicker">INTRODUCING RANKREELS</p>
          <h2 id="intro-title">
            Turn Your Ideas Into Ranking Reels
            <br />
            That Look & Sound Like You
          </h2>

          <div className="product-reveal motion-media" aria-label="RankReels product reveal">
            <div className="product-reveal-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="product-reveal-logo" aria-hidden="true">
              <span className="rankreels-mark">R</span>
              <span>RankReels</span>
            </div>
            <img
              className="product-reveal-bg"
              src={assetUrl("/rankreels-assets/product-reveal-dashboard.png")}
              alt=""
              aria-hidden="true"
            />
            <svg className="product-map-lines" viewBox="0 0 1080 520" aria-hidden="true">
              <path d="M214 134 H328 V260 H520" />
              <path d="M214 218 H328 V260" />
              <path d="M214 302 H328 V260" />
              <path d="M214 386 H328 V260" />
              <path d="M520 260 H760" />
              <path d="M760 260 H840" />
              <circle cx="214" cy="134" r="3.3" />
              <circle cx="214" cy="218" r="3.3" />
              <circle cx="214" cy="302" r="3.3" />
              <circle cx="214" cy="386" r="3.3" />
              <circle cx="520" cy="260" r="4.6" />
              <circle cx="840" cy="260" r="3.6" />
            </svg>

            <div className="product-component-rail" aria-label="Reusable RankReels inputs">
              <article className="product-component-card product-component-face">
                <div className="component-face-crop" aria-hidden="true">
                  <video
                    src={assetUrl("/rankreels-assets/finished-ranking-reel.mp4")}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>
                <div>
                  <span>Face</span>
                </div>
              </article>

              <article className="product-component-card">
                <div className="component-voice-icon" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div>
                  <span>Voice</span>
                </div>
              </article>

              <article className="product-component-card">
                <div className="component-idea-icon" aria-hidden="true">
                  <span />
                </div>
                <div>
                  <span>Idea</span>
                </div>
              </article>

              <article className="product-component-card">
                <div className="component-brand-icon" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div>
                  <span>Brand</span>
                </div>
              </article>
            </div>

            <div className="product-workspace-core" aria-hidden="true">
              <span className="rankreels-hub-mark">R</span>
            </div>

            <div className="product-output-stack">
              <div className="product-phone-player" aria-label="Finished ranking reel video player">
              <video
                src={assetUrl("/rankreels-assets/finished-ranking-reel.mp4")}
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
              </div>
            </div>
          </div>

          <div className="intro-copy">
            <p>
              RankReels is an AI-powered platform built to help busy founders create ranking
              videos, stay visible, and attract new leads.
            </p>
            <p className="intro-note">
              Setup your digital twin once, post daily - without filming, recording your voice
              <br />
              or editing videos
            </p>
          </div>
        </div>
      </section>

      <section className="workflow-section" id="how" aria-labelledby="workflow-title">
        <div className="workflow-inner">
          <div className="workflow-heading">
            <h2 id="workflow-title">
              From One Idea to a Finished Reel
              <br />
              In Three Simple Steps
            </h2>
            <p>
              Create your Digital Twin in less than five minutes with one photo or selfie and
              a short voice sample, then reuse it for every reel.
            </p>
          </div>

          <div className="workflow-grid">
            {workflowSteps.map((step, index) => (
              <article
                className={`workflow-card ${index % 2 === 1 ? "workflow-card-reversed" : ""}`}
                key={step.title}
              >
                <div className="workflow-card-copy">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <div className={`workflow-asset workflow-asset-${step.variant}`}>
                  <div className="workflow-product-frame">
                    <div className="workflow-product-bar" aria-hidden="true">
                      <strong>RankReels</strong>
                    </div>

                    <div className="workflow-product-canvas">
                      <img className="workflow-frame-image workflow-frame-image-bg" src={assetUrl(step.asset)} alt="" aria-hidden="true" />
                      <div className="workflow-focus-window">
                        <img src={assetUrl(step.focusAsset)} alt={step.focusAlt} />
                      </div>

                      {step.variant === "twin" && (
                        <div className="workflow-avatar-preview" aria-hidden="true">
                          <span />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-section" aria-labelledby="demo-title">
        <div className="demo-inner">
          <div className="demo-heading">
            <h2 id="demo-title">
              Don’t Take Our Word.
              <br />
              See For Yourself.
            </h2>
          </div>

          <div className="demo-content-box" aria-label="RankReels demo video content box">
            <div className="demo-video motion-media" aria-label="RankReels demo video">
              <iframe
                src="https://player.vimeo.com/video/1225887161?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                title="RankReels demo"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <a className="button demo-button" href="#start">
            Start Creating with RankReels
          </a>
        </div>
      </section>

      <section className="control-section" aria-labelledby="control-title">
        <div className="control-inner">
          <div className="control-heading">
            <h2 id="control-title">
              RankReels Handles Production.
              <br />
              You Have the Final Say.
            </h2>
            <p>
              RankReels takes care of the work required to turn your idea into a finished
              video, without taking creative control away from you.
            </p>
          </div>

          <div className="control-grid">
            <article className="control-card motion-media">
              <h3>RankReels handles:</h3>
              <ul>
                {handlesList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="control-card control-card-accent motion-media">
              <h3>You Control:</h3>
              <ul>
                {controlList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <p className="control-note">
            You can edit the script, replace individual assets, and preview the video until it
            feels right. Your credit is only used when you complete the final render.
          </p>
        </div>
      </section>

      <section className="identity-section" aria-labelledby="identity-title">
        <div className="identity-inner">
          <div className="identity-copy">
            <h2 id="identity-title">
              Your Face, Your Voice –
              <br />
              Built into Every Reel.
            </h2>
            <p>Most AI video tools can create a video.</p>
            <p>
              The problem is, the finished content often looks and sounds like something
              anyone could have made.
            </p>
            <p>Your Digital Twin changes that.</p>
            <p>
              Upload one clear photo or selfie, add a short voice sample, and tell RankReels
              about your brand and writing style. In less than five minutes, it creates an AI
              version of you that can be reused for every reel that follows.
            </p>
            <p>
              Your Digital Twin presents each ranking with your likeness and voice, while your
              brand information guides the message. So even though you didn’t film the video
              yourself, it still feels connected to you and your business.
            </p>
            <p className="identity-close">Create it once. Use it again and again.</p>
          </div>

          <div className="identity-visual" aria-label="Digital Twin scenes showing one face reused across different reels">
            <div className="identity-scene-board">
              <svg className="identity-scene-lines" viewBox="0 0 900 360" aria-hidden="true">
                <path d="M278 180 H358" />
                <path d="M358 180 V92 H414" />
                <path d="M358 180 V268 H414" />
                <path d="M358 92 H604" />
                <path d="M358 268 H604" />
                <circle cx="278" cy="180" r="4" />
                <circle cx="358" cy="180" r="4" />
                <circle cx="414" cy="92" r="3.2" />
                <circle cx="414" cy="268" r="3.2" />
                <circle cx="604" cy="92" r="3.2" />
                <circle cx="604" cy="268" r="3.2" />
              </svg>
              {twinScenes.map((scene, index) => (
                <figure
                  className={`identity-scene-card ${index === 0 ? "identity-scene-card-hero" : ""}`}
                  key={scene.title}
                >
                  <img src={assetUrl(scene.src)} alt={scene.alt} />
                  {index > 0 && <figcaption>{scene.title}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="features-section" id="benefits" aria-labelledby="features-title">
        <div className="features-inner">
          <div className="features-heading">
            <h2 id="features-title">
              Everything You Need to
              <br />
              Show Up Daily Without
              <br />
              <span>Starting From Scratch</span>
            </h2>
            <p>
              RankReels brings the ideas, writing, production, and personalisation together
              in one place, so creating content no longer has to compete with running your
              business.
            </p>
          </div>

          <div className="features-grid">
            {featureCards.map((feature) => (
              <article
                className={`feature-card ${feature.asset ? "" : "feature-card-standalone"} ${
                  typeof feature.asset === "string" || !feature.asset ? "" : `feature-card-${feature.asset.variant}`
                }`}
                key={feature.title}
              >
                {feature.asset ? (
                  <div
                    className={`feature-asset ${
                      typeof feature.asset === "string" ? "" : `feature-asset-${feature.asset.variant}`
                    }`}
                    aria-label={`${feature.title} visual`}
                  >
                    {typeof feature.asset === "string" ? (
                      <span>{feature.asset}</span>
                    ) : feature.asset.variant === "brand" ? (
                      <div className="feature-ideas-frame feature-brand-frame">
                        <div className="feature-window-dots" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="feature-brand-board" aria-hidden="true">
                          <div className="brand-input-stack">
                            <div className="brand-input-card">Brand info</div>
                            <div className="brand-input-card">Writing guide</div>
                          </div>
                          <svg className="brand-connector-map" viewBox="0 0 520 300">
                            <path d="M130 92 H180 V150 H250" />
                            <path d="M130 208 H180 V150" />
                            <path d="M250 150 H360" />
                            <path d="M360 150 V62 H370" />
                            <path d="M360 150 H370" />
                            <path d="M360 150 V238 H370" />
                            <circle cx="130" cy="92" r="2.5" />
                            <circle cx="130" cy="208" r="2.5" />
                            <circle cx="250" cy="150" r="2.8" />
                            <circle cx="370" cy="62" r="2.5" />
                            <circle cx="370" cy="150" r="2.5" />
                            <circle cx="370" cy="238" r="2.5" />
                          </svg>
                          <div className="brand-output-stack">
                            {(feature.asset.outputs ?? []).map((src, outputIndex) => (
                              <div className="brand-output-card" key={src}>
                                <img src={assetUrl(src)} alt={`Consistent branded reel output ${outputIndex + 1}`} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : feature.asset.variant === "review" ? (
                      <div className="feature-ideas-frame feature-review-frame">
                        <div className="feature-window-dots" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </div>
                        <img className="feature-ideas-bg" src={assetUrl(feature.asset.src!)} alt="" aria-hidden="true" />
                        <div className="feature-review-panel feature-review-panel-back">
                          <img src={assetUrl(feature.asset.secondaryFocusSrc!)} alt={feature.asset.secondaryFocusAlt} />
                        </div>
                        <div className="feature-review-panel feature-review-panel-front">
                          <img src={assetUrl(feature.asset.focusSrc!)} alt={feature.asset.focusAlt} />
                        </div>
                      </div>
                    ) : feature.asset.variant === "publish" ? (
                      <div className="feature-ideas-frame feature-publish-frame">
                        <div className="feature-window-dots" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </div>
                        <img className="feature-ideas-bg" src={assetUrl(feature.asset.src!)} alt="" aria-hidden="true" />
                        <div className="feature-publish-focus">
                          <img src={assetUrl(feature.asset.focusSrc!)} alt={feature.asset.focusAlt} />
                        </div>
                      </div>
                    ) : (
                      <div className="feature-ideas-frame">
                        <div className="feature-window-dots" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </div>
                        <img className="feature-ideas-bg" src={assetUrl(feature.asset.src!)} alt="" aria-hidden="true" />
                        <div className="feature-ideas-focus">
                          <img src={assetUrl(feature.asset.focusSrc!)} alt={feature.asset.focusAlt} />
                        </div>
                      </div>
                    )}
                  </div>
                ) : null}
                <div className="feature-copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience-section" aria-labelledby="audience-title">
        <div className="audience-inner">
          <div className="audience-heading">
            <h2 id="audience-title">
              Built For Busy Experts
              <br />
              Who Need to Stay Visible
              <br />
              <span>Without Living on Camera.</span>
            </h2>
            <p>
              RankReels is designed for people whose visibility helps their business grow,
              but can’t spend hours filming and editing content every week.
            </p>
          </div>

          <div className="audience-grid">
            {audienceCards.map((audience) => (
              <article className="audience-card motion-media" key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="founders-section" aria-labelledby="founders-title">
        <div className="founders-inner">
          <h2 id="founders-title">Get in Early & Lock In the Founder’s Deal</h2>
          <div className="founders-copy">
            <p>This is your opportunity to get RankReels before we open it to the public.</p>
            <p>
              The Founders’ Deal gives you the lowest price RankReels will ever be sold for..
              Plus, once you join, you’re locked in on that price forever.
            </p>
            <p>The price when it goes public is $708/year.</p>
            <p>But with the Founders’ Deal, you’ll only pay $297/year.</p>
            <p>
              That’s a massive savings of $411 – not just in your first year, but every year
              that follows.
            </p>
          </div>
          <a className="button founders-button" href="#start">
            Lock In My Founder’s Price
          </a>
        </div>
      </section>

      <section className="tool-stack-section" aria-labelledby="tool-stack-title">
        <div className="tool-stack-inner">
          <div className="tool-stack-heading">
            <h2 id="tool-stack-title">
              One Reel Shouldn’t Require
              <br />
              5 Different Tools.
            </h2>
            <p>
              Piecing everything together yourself means paying for every tool – and still
              doing most of the work
            </p>
          </div>

          <div className="tool-stack-table">
            <div className="tool-stack-row tool-stack-header">
              <p>What you would need</p>
              <p>What it requires</p>
            </div>
            {toolStackRows.map((row) => (
              <div className="tool-stack-row" key={row.need}>
                <p>{row.need}</p>
                <p>{row.requires}</p>
              </div>
            ))}
          </div>

          <div className="tool-stack-close">
            <div>
              <h3>Get Everything For Just $297</h3>
              <p>
                Instead of paying for separate tools or people and managing the entire workflow
                yourself, RankReels brings everything together in one place.
              </p>
            </div>
            <a className="button tool-stack-button" href="#start">
              Lock In My Founder’s Price
            </a>
          </div>
        </div>
      </section>

      <section className="unit-section" aria-labelledby="unit-title">
        <div className="unit-inner">
          <div className="unit-copy">
            <h2 id="unit-title">
              Up to 300 Ranking Reels.
              <br />
              As Little as <span>99 cents each</span>
            </h2>
            <p>
              Your Founders’ Deal gives you enough credits to create over 300 ranking reels.
            </p>
            <p>Enough to show up daily for an entire year.</p>
            <p>
              Imagine what that level of consistency could do for your business.
            </p>
            <p>
              Three hundred opportunities to share your expertise, reach new people, start
              conversations, grow your audience, and attract potential customers.
            </p>
            <p>
              Now spread the $297 Founders’ price across all 300 reels, and here’s what it
              works out to:
            </p>
            <p>
              $297 ÷ 300 Reels = <span>$0.99 Per Reel</span>
            </p>
            <p>
              That’s less than $1 per finished reel - complete with your Digital Twin,
              voiceover, script, visuals, captions, and editing.
            </p>
          </div>
        </div>
      </section>

      <section className="included-section" id="offer" aria-labelledby="included-title">
        <div className="included-inner">
          <div className="included-copy">
            <h2 id="included-title">
              Everything You Get With
              <br />
              the Founder’s Deal.
            </h2>
            <p>
              The founder’s deal gives you unlimited access to the complete RankReel system
            </p>
          </div>

          <div className="included-card">
            <ul>
              {foundersIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="price-lock">
              <p>Lock in this price forever when you join today:</p>
              <div>
                <span>$708/year</span>
                <strong>$297/year</strong>
              </div>
              <a className="button included-button" href="#start">
                Get RankReels Now!
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantee-section" aria-labelledby="guarantee-title">
        <div className="guarantee-inner">
          <h2 id="guarantee-title">
            14-Day <span>Money-Back</span> Guarantee
          </h2>
          <div className="guarantee-copy">
            <p>
              Everything you’ve seen on this page – from the sample videos to the product
              demonstration – is what you should expect when you join RankReels.
            </p>
            <p>
              If the platform doesn’t work as advertised, contact our support team within 14
              days of purchase to get your money back.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <div className="faq-inner">
          <h2 id="faq-title">Before Creating Your First Ranking Reel</h2>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-close-section" aria-labelledby="final-close-title">
        <div className="final-close-inner">
          <p>GET IN BEFORE THE LAUNCH EXPIRES!</p>
          <h2 id="final-close-title">
            Pay Less Today. Lock In the
            <br />
            Founders’ Price Forever.
          </h2>
          <p className="final-close-lede">
            This is your only opportunity to get RankReels at the founder&apos;s price.
          </p>
          <p className="final-close-price">
            Once the launch closes, the price increases to the regular $708 per year.
          </p>
          <a className="button final-close-button" href="#start">
            Lock In My $297 Founder’s Price
          </a>
          <div className="final-close-divider" aria-hidden="true" />
          <div className="countdown-placeholder" aria-label="Countdown timer placeholder">
            [Countdown Timer]
          </div>
          <p className="countdown-note">Founder&apos;s deal expires once the timer hits zero.</p>
        </div>
      </section>

      <footer className="site-footer" aria-label="RankReels footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand-column">
              <a className="footer-brand-link" href="#" aria-label="RankReels home">
                <img src={assetUrl("/rankreels-assets/rankreels-logo.svg")} alt="" />
                <span>RankReels</span>
              </a>
              <p>AI-assisted ranking-reel creation for marketers, founders, coaches, and creators.</p>
            </div>

            <nav className="footer-column" aria-label="Product links">
              <h2>Product</h2>
              <div className="footer-links">
                <a href="#how">How it works</a>
                <a href="#benefits">Benefits</a>
                <a href="#faq">FAQ</a>
                <a href="#offer">Create an account</a>
              </div>
            </nav>

            <nav className="footer-column" aria-label="Legal links">
              <h2>Legal</h2>
              <div className="footer-links">
                <a href="https://rankreels.ai/privacy">Privacy policy</a>
                <a href="https://rankreels.ai/terms">Terms of service</a>
                <a href="https://rankreels.ai/disclaimer">Disclaimer</a>
                <a href="https://rankreels.ai/terms#subscriptions">Refund policy</a>
                <a href="https://rankreels.ai/privacy#cookies">Cookie notice</a>
              </div>
            </nav>

            <div className="footer-column">
              <h2>Support</h2>
              <address className="footer-contact">
                <a href="mailto:support@rankreels.ai">support@rankreels.ai</a>
                <p>For product, billing, privacy, and legal requests.</p>
              </address>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 RankReels. All rights reserved.</p>
            <p>
              Results vary. RankReels does not guarantee views, reach, rankings, engagement,
              followers, sales, or revenue.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
