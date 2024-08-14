export const templates = [
  {
    name: "Blog Topic Ideas",
    desc: "Generate unique and engaging blog topic ideas to inspire your next post.",
    category: "Blog",
    icon: "/logo/blog-ideas.png",
    aiPrompt:
      "Generate unique and engaging blog topic ideas related to the following theme or keywords: ",
    slug: "blog-topic-ideas",
    form: [
      {
        label: "Enter a theme or keywords",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Blog Writer",
    desc: "Craft compelling content with ease, and watch your blog come to life with a professional and polished design. Get ready to take your blog to the next level!",
    category: "Blog",
    icon: "/logo/blog.png",
    aiPrompt:
      "Write a blog post for the following topic with a catchy title, an introduction, body and conclusion in a creative and ready-to-read format. Use pointers to list down stuff wherever necessary. Use quotes from famous personalities wherever necessary. Include the following keywords in your blog post: ",
    slug: "blog-writer",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter your keywords",
        field: "input",
        name: "keywords",
      },
    ],
  },
  {
    name: "YouTube SEO Title",
    desc: "Create SEO-optimized titles for your YouTube videos to attract more viewers.",
    category: "YouTube",
    icon: "/logo/youtube-title.png",
    aiPrompt:
      "Generate an SEO-optimized YouTube title for the following video content: ",
    slug: "youtube-seo-title",
    form: [
      {
        label: "Enter video content description",
        field: "input",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Video Description",
    desc: "Craft detailed and engaging YouTube video descriptions to improve searchability and viewer engagement.",
    category: "YouTube",
    icon: "/logo/youtube-description.png",
    aiPrompt:
      "Write a detailed and engaging YouTube video description for the following content: ",
    slug: "youtube-video-description",
    form: [
      {
        label: "Enter video content description",
        field: "input",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Tags",
    desc: "Generate relevant tags for your YouTube videos to improve discoverability.",
    category: "YouTube",
    icon: "/logo/youtube-tags.png",
    aiPrompt:
      "Generate relevant tags for the following YouTube video description: ",
    slug: "youtube-tags",
    form: [
      {
        label: "Enter video content description",
        field: "input",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "Rewrite Article Plagiarism-Free",
    desc: "Rewrite your article to make it plagiarism-free while retaining the original meaning.",
    category: "Content",
    icon: "/logo/rewrite.png",
    aiPrompt:
      "Rewrite the following article to make it plagiarism-free while retaining the original meaning: ",
    slug: "rewrite-article-plagiarism-free",
    form: [
      {
        label: "Enter the article content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "Grammar and Spell Check",
    desc: "Check and correct grammar and spelling errors in your text.",
    category: "Content",
    icon: "/logo/grammar-check.png",
    aiPrompt:
      "Check and correct grammar and spelling errors in the following text: ",
    slug: "grammar-and-spell-check",
    form: [
      {
        label: "Enter your text",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Caption Generator",
    desc: "Generate catchy and engaging captions for your Instagram posts.",
    category: "Social Media",
    icon: "/logo/instagram-caption.png",
    aiPrompt:
      "Generate a catchy and engaging Instagram caption for the following post description: ",
    slug: "instagram-post-caption-generator",
    form: [
      {
        label: "Enter post description",
        field: "input",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Hashtag Generator",
    desc: "Generate relevant and popular hashtags for your social media posts.",
    category: "Social Media",
    icon: "/logo/hashtag-generator.png",
    aiPrompt:
      "Generate relevant and popular hashtags for the following post description: ",
    slug: "social-media-hashtag-generator",
    form: [
      {
        label: "Enter post description",
        field: "input",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "Generate Code Snippet",
    desc: "Generate code snippets for various programming tasks and scenarios.",
    category: "Code",
    icon: "/logo/code-snippet.png",
    aiPrompt:
      "Generate a code snippet for the following programming task or scenario: ",
    slug: "generate-code-snippet",
    form: [
      {
        label: "Enter programming task or scenario",
        field: "input",
        name: "task",
        required: true,
      },
    ],
  },
  {
    name: "Code Explainer in Simple Words",
    desc: "Explain complex code snippets in simple words along with an example and a dry run.",
    category: "Code",
    icon: "/logo/code-explainer.png",
    aiPrompt:
      "Explain the following code snippet in simple words along with an example and a dry run: ",
    slug: "code-explainer-in-simple-words",
    form: [
      {
        label: "Enter code snippet",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },
  {
    name: "Sybase to MSSQL Query Converter",
    desc: "Convert Sybase SQL queries to MSSQL compatible queries seamlessly.",
    category: "Database",
    icon: "/logo/sybase-to-mssql.png",
    aiPrompt:
      "Convert the following Sybase SQL query to an MSSQL compatible query: ",
    slug: "sybase-to-mssql-query-converter",
    form: [
      {
        label: "Enter Sybase SQL query",
        field: "textarea",
        name: "sybaseQuery",
        required: true,
      },
    ],
  },
  {
    name: "Code Translator",
    desc: "Translate code snippets from one programming language to another with ease.",
    category: "Code",
    icon: "/logo/code-translator.png",
    aiPrompt:
      "Translate the following code snippet to the specified programming language: ",
    slug: "code-translator",
    form: [
      {
        label: "Enter code snippet",
        field: "textarea",
        name: "codeSnippet",
        required: true,
      },
      {
        label: "Select target programming language",
        field: "select",
        name: "targetLanguage",
        options: [
          "Python",
          "JavaScript",
          "Java",
          "C++",
          "C#",
          "Ruby",
          "Go",
          "Swift",
        ],
        required: true,
      },
    ],
  },
  {
    name: "Text Translator",
    desc: "Translate text to the specified language quickly and accurately.",
    category: "Language",
    icon: "/logo/text-translator.png",
    aiPrompt: "Translate the following text to the specified language: ",
    slug: "text-translator",
    form: [
      {
        label: "Enter text",
        field: "textarea",
        name: "text",
        required: true,
      },
      {
        label: "Write target language",
        field: "input",
        name: "targetLanguage",
        required: true,
      },
    ],
  },
  {
    name: "Article Summarizer",
    desc: "Summarize lengthy articles into concise bullet points for quick reading.",
    category: "Content",
    icon: "/logo/article-summarizer.png",
    aiPrompt: "Summarize the following article into concise bullet points: ",
    slug: "article-summarizer",
    form: [
      {
        label: "Enter article content",
        field: "textarea",
        name: "articleContent",
        required: true,
      },
    ],
  },
  {
    name: "Generate an insert query with test data",
    desc: "Generate an insert query with a random data for the provided table structure.",
    category: "Content",
    icon: "/logo/insert-record.png",
    aiPrompt:
      "Write an insert sql query for the following table structure with dummy data: ",
    slug: "insert-record",
    form: [
      {
        label: "Enter Table Structure",
        field: "textarea",
        name: "tableStructureContent",
        required: true,
      },
    ],
  },
];
