module.exports = {
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  menus: {
    config: {
      layouts: {
        menuItem: {
          // This is the menu item edit panel.
          media: [
            {
              input: {
                label: "Media",
                name: "logo",
                type: "media",
              },
            },
          ],
        },
      },
    },
  },
};
