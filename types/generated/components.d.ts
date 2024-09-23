import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSharedMeta extends Schema.Component {
  collectionName: 'components_seo_shared_metas';
  info: {
    displayName: 'Shared Meta';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    canonical: Attribute.String;
    ogTitle: Attribute.String;
    ogDescription: Attribute.Text;
    ogImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ogUrl: Attribute.String;
    ogType: Attribute.Enumeration<['website', 'article', 'blog']>;
    twitterCard: Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app']
    >;
    jsonLD: Attribute.JSON;
  };
}

export interface OrganismsStaffTabContainer extends Schema.Component {
  collectionName: 'components_organisms_staff_tab_containers';
  info: {
    displayName: 'Staff Tab Container';
  };
  attributes: {
    tab: Attribute.Component<'molecules.staff-tab', true>;
  };
}

export interface OrganismsStaffPreviewSection extends Schema.Component {
  collectionName: 'components_organisms_staff_preview_sections';
  info: {
    displayName: 'Staff Preview Section';
    description: '';
  };
  attributes: {
    socialIcons: Attribute.Component<'molecules.icon-with-link', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    richText: Attribute.RichText;
    button: Attribute.Component<'atoms.button'>;
    staffOrder: Attribute.Integer;
  };
}

export interface OrganismsRichTextManyIconsLink extends Schema.Component {
  collectionName: 'components_organisms_rich_text_many_icons_links';
  info: {
    displayName: 'RichText Many Icons Link';
  };
  attributes: {
    icon: Attribute.Component<'molecules.icon-with-link', true>;
    richText: Attribute.RichText;
  };
}

export interface OrganismsRichTextButtonImage extends Schema.Component {
  collectionName: 'components_organisms_rich_text_button_images';
  info: {
    displayName: 'RichText Button Image';
    description: '';
  };
  attributes: {
    richText: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttons: Attribute.Component<'atoms.button', true>;
  };
}

export interface OrganismsFooter extends Schema.Component {
  collectionName: 'components_organisms_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    modalText: Attribute.RichText;
    column: Attribute.Component<'atoms.rich-text', true>;
    socialIcons: Attribute.Component<'molecules.icon-with-link', true>;
  };
}

export interface MoleculesTestimonialCard extends Schema.Component {
  collectionName: 'components_molecules_testimonial_cards';
  info: {
    displayName: 'Testimonial Card';
  };
  attributes: {
    quote: Attribute.Text;
    name: Attribute.String;
    location: Attribute.String;
    avatar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MoleculesStaffTab extends Schema.Component {
  collectionName: 'components_molecules_staff_tabs';
  info: {
    displayName: 'Staff Tab';
  };
  attributes: {
    tabHeading: Attribute.String;
    tabContent: Attribute.RichText;
  };
}

export interface MoleculesRichTextImage extends Schema.Component {
  collectionName: 'components_organisms_rich_text_images';
  info: {
    displayName: 'RichText Image';
    description: '';
  };
  attributes: {
    richText: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MoleculesRichTextIcon extends Schema.Component {
  collectionName: 'components_organisms_rich_text_icons';
  info: {
    displayName: 'RichText Icon';
    description: '';
  };
  attributes: {
    icon: Attribute.String &
      Attribute.CustomField<'plugin::strapi-react-icons.icon'>;
    richText: Attribute.RichText;
  };
}

export interface MoleculesRichTextIconLink extends Schema.Component {
  collectionName: 'components_molecules_rich_text_icon_links';
  info: {
    displayName: 'RichText Icon Link';
  };
  attributes: {
    icon: Attribute.Component<'molecules.icon-with-link'>;
    richText: Attribute.RichText;
  };
}

export interface MoleculesRichTextIconButton extends Schema.Component {
  collectionName: 'components_molecules_rich_text_icon_buttons';
  info: {
    displayName: 'RichText Icon Button';
  };
  attributes: {
    icon: Attribute.String &
      Attribute.CustomField<'plugin::strapi-react-icons.icon'>;
    richText: Attribute.RichText;
    button: Attribute.Component<'atoms.button'>;
  };
}

export interface MoleculesRichTextButton extends Schema.Component {
  collectionName: 'components_organisms_rich_text_buttons';
  info: {
    displayName: 'RichText Button';
    description: '';
  };
  attributes: {
    richText: Attribute.RichText;
    buttons: Attribute.Component<'atoms.button', true>;
  };
}

export interface MoleculesRepeatableTextCardIcon extends Schema.Component {
  collectionName: 'components_molecules_repeatable_text_card_icons';
  info: {
    displayName: 'Repeatable Text Card Icon';
  };
  attributes: {
    icon: Attribute.String &
      Attribute.CustomField<'plugin::strapi-react-icons.icon'>;
    header: Attribute.String;
    content: Attribute.String;
  };
}

export interface MoleculesMultiTextIconCard extends Schema.Component {
  collectionName: 'components_molecules_multi_text_icon_cards';
  info: {
    displayName: 'Multi Text Icon Card';
    description: '';
  };
  attributes: {
    services_card_header: Attribute.Component<'atoms.basic-icon-with-text'>;
    services_card_description: Attribute.Text;
    services_card_content: Attribute.Component<
      'atoms.basic-icon-with-text',
      true
    >;
  };
}

export interface MoleculesLandingPageHero extends Schema.Component {
  collectionName: 'components_molecules_landing_page_heroes';
  info: {
    displayName: 'Landing Page Hero';
  };
  attributes: {
    header: Attribute.String;
    subheader: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heroButton: Attribute.Component<'atoms.button', true>;
  };
}

export interface MoleculesImageWithRepeatableTextAndLink
  extends Schema.Component {
  collectionName: 'components_molecules_image_with_repeatable_text_and_links';
  info: {
    displayName: 'Image with Repeatable Text and Link';
    description: '';
  };
  attributes: {
    avatar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
    title: Attribute.String;
    href: Attribute.String;
  };
}

export interface MoleculesIconWithLink extends Schema.Component {
  collectionName: 'components_molecules_icon_with_links';
  info: {
    displayName: 'Icon with Link';
  };
  attributes: {
    href: Attribute.String;
    icon: Attribute.String &
      Attribute.CustomField<'plugin::strapi-react-icons.icon'>;
    newTab: Attribute.Boolean;
  };
}

export interface MoleculesExpandCard extends Schema.Component {
  collectionName: 'components_molecules_expand_cards';
  info: {
    displayName: 'Expand Card';
  };
  attributes: {
    cardTitle: Attribute.RichText;
    cardBody: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cardButton: Attribute.Component<'atoms.button'>;
  };
}

export interface AtomsRichText extends Schema.Component {
  collectionName: 'components_atoms_rich_texts';
  info: {
    displayName: 'RichText';
  };
  attributes: {
    richText: Attribute.RichText;
  };
}

export interface AtomsButton extends Schema.Component {
  collectionName: 'components_molecules_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    newTab: Attribute.Boolean;
    icon: Attribute.String &
      Attribute.CustomField<'plugin::strapi-react-icons.icon'>;
  };
}

export interface AtomsBasicText extends Schema.Component {
  collectionName: 'components_atoms_basic_texts';
  info: {
    displayName: 'Basic Text';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface AtomsBasicIconWithText extends Schema.Component {
  collectionName: 'components_atoms_basic_icon_with_texts';
  info: {
    displayName: 'Basic Icon with Text';
  };
  attributes: {
    icon: Attribute.String &
      Attribute.CustomField<'plugin::strapi-react-icons.icon'>;
    content: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.shared-meta': SeoSharedMeta;
      'organisms.staff-tab-container': OrganismsStaffTabContainer;
      'organisms.staff-preview-section': OrganismsStaffPreviewSection;
      'organisms.rich-text-many-icons-link': OrganismsRichTextManyIconsLink;
      'organisms.rich-text-button-image': OrganismsRichTextButtonImage;
      'organisms.footer': OrganismsFooter;
      'molecules.testimonial-card': MoleculesTestimonialCard;
      'molecules.staff-tab': MoleculesStaffTab;
      'molecules.rich-text-image': MoleculesRichTextImage;
      'molecules.rich-text-icon': MoleculesRichTextIcon;
      'molecules.rich-text-icon-link': MoleculesRichTextIconLink;
      'molecules.rich-text-icon-button': MoleculesRichTextIconButton;
      'molecules.rich-text-button': MoleculesRichTextButton;
      'molecules.repeatable-text-card-icon': MoleculesRepeatableTextCardIcon;
      'molecules.multi-text-icon-card': MoleculesMultiTextIconCard;
      'molecules.landing-page-hero': MoleculesLandingPageHero;
      'molecules.image-with-repeatable-text-and-link': MoleculesImageWithRepeatableTextAndLink;
      'molecules.icon-with-link': MoleculesIconWithLink;
      'molecules.expand-card': MoleculesExpandCard;
      'atoms.rich-text': AtomsRichText;
      'atoms.button': AtomsButton;
      'atoms.basic-text': AtomsBasicText;
      'atoms.basic-icon-with-text': AtomsBasicIconWithText;
    }
  }
}
