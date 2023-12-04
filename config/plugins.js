module.exports = {
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 15,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
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
