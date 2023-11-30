/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import strapiReactIcons from "@prestonator4000/strapi-react-icons/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import sitemap from "strapi-plugin-sitemap/strapi-admin";
import strapiTiptapEditor from "strapi-tiptap-editor/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    "strapi-react-icons": strapiReactIcons,
    graphql: graphql,
    i18n: i18N,
    "users-permissions": usersPermissions,
    sitemap: sitemap,
    "strapi-tiptap-editor": strapiTiptapEditor,
  },
});
