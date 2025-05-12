import type { Schema, Struct } from '@strapi/strapi';

export interface BlogBlogSlider1 extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_slider_1s';
  info: {
    description: '';
    displayName: 'Blog Slider 1';
    icon: 'bulletList';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    cta: Schema.Attribute.Component<'common.button', false>;
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    pre_headline: Schema.Attribute.String;
    sub_header: Schema.Attribute.String;
  };
}

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    button_class: Schema.Attribute.String;
    button_id: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    is_active: Schema.Attribute.Boolean;
    link: Schema.Attribute.String;
  };
}

export interface CommonFaqList extends Struct.ComponentSchema {
  collectionName: 'components_common_faq_lists';
  info: {
    displayName: 'FAQ List';
    icon: 'bulletList';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.button', true>;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    questions: Schema.Attribute.Relation<'oneToMany', 'api::question.question'>;
  };
}

export interface CommonFeatureImageCard extends Struct.ComponentSchema {
  collectionName: 'components_common_feature_image_cards';
  info: {
    displayName: 'feature_image_card';
    icon: 'calendar';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonFeatureImageCard2 extends Struct.ComponentSchema {
  collectionName: 'components_common_feature_image_card_2s';
  info: {
    displayName: 'feature_image_card_2';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.button', false>;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonIconCards extends Struct.ComponentSchema {
  collectionName: 'components_common_icon_cards';
  info: {
    description: '';
    displayName: 'icon_cards';
    icon: 'apps';
  };
  attributes: {
    background_color: Schema.Attribute.Enumeration<
      ['green', 'white', 'black', 'tan']
    >;
    button: Schema.Attribute.Component<'common.button', false>;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonIconTags extends Struct.ComponentSchema {
  collectionName: 'components_common_icon_tags';
  info: {
    displayName: 'Icon Tags';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tag_name: Schema.Attribute.String;
  };
}

export interface CommonImageCards extends Struct.ComponentSchema {
  collectionName: 'components_common_image_cards';
  info: {
    displayName: 'Image Cards';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_position: Schema.Attribute.Enumeration<
      ['left', 'right', 'top', 'bottom']
    > &
      Schema.Attribute.DefaultTo<'left'>;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface Ctas3StepWCta extends Struct.ComponentSchema {
  collectionName: 'components_ctas_3_step_w_ctas';
  info: {
    displayName: '3 Step wCTA';
    icon: 'bulletList';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'common.button', true>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'common.icon-cards', true>;
  };
}

export interface CtasCtaCenteredButtons extends Struct.ComponentSchema {
  collectionName: 'components_ctas_cta_centered_buttons';
  info: {
    displayName: 'cta_centered_buttons';
    icon: 'bulletList';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'common.button', true>;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    subtext: Schema.Attribute.String;
  };
}

export interface CtasCtaStackedButtons extends Struct.ComponentSchema {
  collectionName: 'components_ctas_cta_stacked_buttons';
  info: {
    displayName: 'CTA Stacked Buttons';
    icon: 'bulletList';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'common.button', true>;
    description: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
  };
}

export interface FactsFacts1 extends Struct.ComponentSchema {
  collectionName: 'components_facts_facts_1s';
  info: {
    displayName: 'Facts 1';
    icon: 'bulletList';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.button', true>;
    description: Schema.Attribute.Text;
    facts: Schema.Attribute.Component<'shared.stats', true>;
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
  };
}

export interface Features5Features extends Struct.ComponentSchema {
  collectionName: 'components_features_5_features';
  info: {
    description: '';
    displayName: 'features-8';
    icon: 'apps';
  };
  attributes: {
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    pre_headline: Schema.Attribute.String;
    sub_header: Schema.Attribute.String;
    three_col_features: Schema.Attribute.Component<
      'common.feature-image-card',
      true
    >;
    two_col_features: Schema.Attribute.Component<
      'common.feature-image-card-2',
      true
    >;
  };
}

export interface FeaturesAlternatingCards extends Struct.ComponentSchema {
  collectionName: 'components_features_alternating_cards';
  info: {
    displayName: 'Alternating Cards';
    icon: 'bulletList';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'common.image-cards', true>;
    buttons: Schema.Attribute.Component<'common.button', true>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    subtext: Schema.Attribute.String;
  };
}

export interface FeaturesFeatureBlocks extends Struct.ComponentSchema {
  collectionName: 'components_features_feature_blocks';
  info: {
    description: '';
    displayName: 'features2-8';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'common.icon-cards', true>;
    cta: Schema.Attribute.Component<'common.button', false>;
    description: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    pre_headline: Schema.Attribute.String;
  };
}

export interface FeaturesFeatureIconList extends Struct.ComponentSchema {
  collectionName: 'components_features_feature_icon_lists';
  info: {
    displayName: 'Feature Icon List';
    icon: 'bulletList';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'common.icon-tags', true>;
  };
}

export interface FormsContact1 extends Struct.ComponentSchema {
  collectionName: 'components_forms_contact_1s';
  info: {
    displayName: 'Contact 1';
    icon: 'apps';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    description: Schema.Attribute.String;
    feedback: Schema.Attribute.Relation<'oneToOne', 'api::feedback.feedback'>;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    subtext: Schema.Attribute.String;
  };
}

export interface HeadersHeader4 extends Struct.ComponentSchema {
  collectionName: 'components_headers_header_4s';
  info: {
    description: '';
    displayName: 'Hero-5';
    icon: 'dashboard';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'common.button', true>;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    left_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    right_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HeadersHeaderText extends Struct.ComponentSchema {
  collectionName: 'components_headers_header_texts';
  info: {
    displayName: 'Header Text';
    icon: 'discuss';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.button', true>;
    description: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_iid: Schema.Attribute.String;
    pre_headline: Schema.Attribute.String;
  };
}

export interface HeadersHero10 extends Struct.ComponentSchema {
  collectionName: 'components_headers_hero_10s';
  info: {
    displayName: 'Hero 10';
    icon: 'chartBubble';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'common.icon-cards', true>;
    buttons: Schema.Attribute.Component<'common.button', true>;
    description: Schema.Attribute.String;
    header_line1: Schema.Attribute.String;
    header_line2: Schema.Attribute.String;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
  };
}

export interface HeadersHero4 extends Struct.ComponentSchema {
  collectionName: 'components_headers_hero_4s';
  info: {
    displayName: 'Hero 4';
    icon: 'bulletList';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.button', true>;
    description: Schema.Attribute.Text;
    Headline: Schema.Attribute.String;
    image_position: Schema.Attribute.Enumeration<['left', 'right']>;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    slider: Schema.Attribute.Component<'shared.image-slider', true>;
    subtext: Schema.Attribute.String;
  };
}

export interface SharedImageSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_sliders';
  info: {
    displayName: 'image_slider';
    icon: 'bulletList';
  };
  attributes: {
    link: Schema.Attribute.String;
    slider_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialProof extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_proofs';
  info: {
    displayName: 'Social Proof';
    icon: 'bulletList';
  };
  attributes: {
    headline: Schema.Attribute.String;
    logos: Schema.Attribute.Component<'shared.image-slider', true>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal;
    subtext: Schema.Attribute.String;
  };
}

export interface SharedStats extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stats';
    icon: 'bulletList';
  };
  attributes: {
    statistic: Schema.Attribute.String;
    subtext: Schema.Attribute.String;
  };
}

export interface TestimonialsSingleFeedback extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_single_feedbacks';
  info: {
    displayName: 'Single Feedback';
    icon: 'discuss';
  };
  attributes: {
    feedback: Schema.Attribute.Relation<'oneToOne', 'api::feedback.feedback'>;
    headline: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
  };
}

export interface TestimonialsSingleFeedbackImage
  extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_single_feedback_images';
  info: {
    displayName: 'Single Feedback - Image';
    icon: 'bulletList';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'common.button', true>;
    feedback: Schema.Attribute.Relation<'oneToOne', 'api::feedback.feedback'>;
    module_id: Schema.Attribute.String;
    module_text: Schema.Attribute.String;
  };
}

export interface TestimonialsTestimonialSlider1 extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_testimonial_slider_1s';
  info: {
    description: '';
    displayName: 'testimonial_slider_1';
    icon: 'bulletList';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.button', false>;
    feedbacks: Schema.Attribute.Relation<'oneToMany', 'api::feedback.feedback'>;
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.blog-slider-1': BlogBlogSlider1;
      'common.button': CommonButton;
      'common.faq-list': CommonFaqList;
      'common.feature-image-card': CommonFeatureImageCard;
      'common.feature-image-card-2': CommonFeatureImageCard2;
      'common.icon-cards': CommonIconCards;
      'common.icon-tags': CommonIconTags;
      'common.image-cards': CommonImageCards;
      'ctas.3-step-w-cta': Ctas3StepWCta;
      'ctas.cta-centered-buttons': CtasCtaCenteredButtons;
      'ctas.cta-stacked-buttons': CtasCtaStackedButtons;
      'facts.facts-1': FactsFacts1;
      'features.5-features': Features5Features;
      'features.alternating-cards': FeaturesAlternatingCards;
      'features.feature-blocks': FeaturesFeatureBlocks;
      'features.feature-icon-list': FeaturesFeatureIconList;
      'forms.contact-1': FormsContact1;
      'headers.header-4': HeadersHeader4;
      'headers.header-text': HeadersHeaderText;
      'headers.hero-10': HeadersHero10;
      'headers.hero-4': HeadersHero4;
      'shared.image-slider': SharedImageSlider;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-proof': SharedSocialProof;
      'shared.stats': SharedStats;
      'testimonials.single-feedback': TestimonialsSingleFeedback;
      'testimonials.single-feedback-image': TestimonialsSingleFeedbackImage;
      'testimonials.testimonial-slider-1': TestimonialsTestimonialSlider1;
    }
  }
}
