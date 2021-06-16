export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60ca50e8132bc12d910860ef",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-jdesq97o",
                  apiId: "3bb9c413-181c-4835-ae11-9e78d257f2f3",
                },
                {
                  buildHookId: "60ca50e85ceee825acd0953e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9wot48fu",
                  apiId: "f5485f02-edb7-4c51-9361-9b1b92c5a296",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/btayl/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9wot48fu.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
