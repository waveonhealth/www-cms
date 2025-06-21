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
    description: '';
    displayName: 'Button';
  };
  attributes: {
    button_class: Schema.Attribute.String;
    button_icon: Schema.Attribute.String;
    button_icon_position: Schema.Attribute.Enumeration<['left', 'right']>;
    button_id: Schema.Attribute.String;
    button_style: Schema.Attribute.Enumeration<
      [
        'green-back-white-text',
        'white-back-green-text-boxed',
        'lightgreen-back-black-text',
        'green-text-arrow',
        'black-back-white-text',
        'grey-outline-black-text',
        'green-outline-green-text-transparent',
      ]
    >;
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

export interface CommonFeatureImageCard3 extends Struct.ComponentSchema {
  collectionName: 'components_common_feature_image_card_3s';
  info: {
    description: '';
    displayName: 'Feature Image Card 3';
    icon: 'bulletList';
  };
  attributes: {
    card_id: Schema.Attribute.String;
    cardimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.String;
    feedback: Schema.Attribute.Relation<'oneToOne', 'api::feedback.feedback'>;
    headline: Schema.Attribute.String;
    link: Schema.Attribute.Component<'common.button', false>;
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

export interface CommonOffsetImage extends Struct.ComponentSchema {
  collectionName: 'components_common_offset_images';
  info: {
    description: '';
    displayName: 'Offset Image';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagewidth: Schema.Attribute.Integer;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    showbackground: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface CommonTeam extends Struct.ComponentSchema {
  collectionName: 'components_common_teams';
  info: {
    description: '';
    displayName: 'Team';
  };
  attributes: {
    link: Schema.Attribute.Component<'common.button', false>;
    members: Schema.Attribute.Component<'shared.team-members', true>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface Ctas3StepWCta extends Struct.ComponentSchema {
  collectionName: 'components_ctas_3_step_w_ctas';
  info: {
    description: '';
    displayName: '3 Step wCTA';
    icon: 'bulletList';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'common.button', true>;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
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

export interface CtasCtaImage extends Struct.ComponentSchema {
  collectionName: 'components_ctas_cta_images';
  info: {
    displayName: 'CTA Image';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    button_footer_text: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface FactsFacts2 extends Struct.ComponentSchema {
  collectionName: 'components_facts_facts_2s';
  info: {
    description: '';
    displayName: 'Facts 2';
  };
  attributes: {
    description: Schema.Attribute.Text;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'shared.stats', true>;
    title: Schema.Attribute.String;
  };
}

export interface FactsTimeline extends Struct.ComponentSchema {
  collectionName: 'components_facts_timelines';
  info: {
    description: '';
    displayName: 'Timeline';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.timeline-items', true>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
    description: '';
    displayName: 'Alternating Cards';
    icon: 'bulletList';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'common.image-cards', true>;
    buttons: Schema.Attribute.Component<'common.button', true>;
    description: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    pre_headline: Schema.Attribute.String;
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

export interface FeaturesFeatureCards2Col extends Struct.ComponentSchema {
  collectionName: 'components_features_feature_cards_2_cols';
  info: {
    displayName: 'Feature Cards 2Col';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.feature-card', true>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface FeaturesKeyFeatureCards extends Struct.ComponentSchema {
  collectionName: 'components_features_key_feature_cards';
  info: {
    displayName: 'Key Feature Cards';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String;
    features: Schema.Attribute.Component<'shared.key-feature-card', true>;
    headline: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
  };
}

export interface FeaturesStackedFeatureCards extends Struct.ComponentSchema {
  collectionName: 'components_features_stacked_feature_cards';
  info: {
    displayName: 'Stacked Feature Cards';
    icon: 'bulletList';
  };
  attributes: {
    features: Schema.Attribute.Component<'common.feature-image-card-3', true>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
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

export interface HeadersAboutHeader extends Struct.ComponentSchema {
  collectionName: 'components_headers_about_headers';
  info: {
    displayName: 'About Header';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface PricingPricing1 extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_1s';
  info: {
    displayName: 'Pricing 1';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String;
    footer_text: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    options: Schema.Attribute.Component<'shared.pricing-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface PricingPricing4Col extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_4_cols';
  info: {
    description: '';
    displayName: 'Pricing 4 Col';
  };
  attributes: {
    description: Schema.Attribute.String;
    footer_text: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    options: Schema.Attribute.Component<'shared.pricing-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    displayName: 'feature-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SharedKeyFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_key_feature_cards';
  info: {
    displayName: 'Key Feature Card';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLogoLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Links';
    icon: 'bulletList';
  };
  attributes: {
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface SharedPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricing_cards';
  info: {
    displayName: 'Pricing Card';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    button_subtext: Schema.Attribute.String;
    description: Schema.Attribute.String;
    features: Schema.Attribute.Text;
    features_title: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    month_price: Schema.Attribute.Decimal;
    price_description: Schema.Attribute.String;
    price_month_title: Schema.Attribute.String;
    price_year_title: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    tag_color: Schema.Attribute.Enumeration<
      ['green', 'beige', 'white', 'black']
    >;
    title: Schema.Attribute.String;
    year_price: Schema.Attribute.Decimal;
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
    description: '';
    displayName: 'Stats';
    icon: 'bulletList';
  };
  attributes: {
    statistic: Schema.Attribute.String;
    subtext: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
  };
}

export interface SharedTeamMembers extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    description: '';
    displayName: 'team-members';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkedin_url: Schema.Attribute.String;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTimelineItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_items';
  info: {
    displayName: 'timeline-items';
  };
  attributes: {
    caption: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface TestimonialsTestimonialImageSlider
  extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_testimonial_image_sliders';
  info: {
    displayName: 'Testimonial Image Slider';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String;
    feedbacks: Schema.Attribute.Relation<'oneToMany', 'api::feedback.feedback'>;
    footer_text: Schema.Attribute.String;
    module_class: Schema.Attribute.String;
    module_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface TestimonialsTrustedBy extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_trusted_bies';
  info: {
    displayName: 'Trusted By';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    footer_text: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    logos: Schema.Attribute.Component<'shared.logo-links', true>;
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
      'common.feature-image-card-3': CommonFeatureImageCard3;
      'common.icon-cards': CommonIconCards;
      'common.icon-tags': CommonIconTags;
      'common.image-cards': CommonImageCards;
      'common.offset-image': CommonOffsetImage;
      'common.team': CommonTeam;
      'ctas.3-step-w-cta': Ctas3StepWCta;
      'ctas.cta-centered-buttons': CtasCtaCenteredButtons;
      'ctas.cta-image': CtasCtaImage;
      'ctas.cta-stacked-buttons': CtasCtaStackedButtons;
      'facts.facts-1': FactsFacts1;
      'facts.facts-2': FactsFacts2;
      'facts.timeline': FactsTimeline;
      'features.5-features': Features5Features;
      'features.alternating-cards': FeaturesAlternatingCards;
      'features.feature-blocks': FeaturesFeatureBlocks;
      'features.feature-cards-2-col': FeaturesFeatureCards2Col;
      'features.feature-icon-list': FeaturesFeatureIconList;
      'features.key-feature-cards': FeaturesKeyFeatureCards;
      'features.stacked-feature-cards': FeaturesStackedFeatureCards;
      'forms.contact-1': FormsContact1;
      'headers.about-header': HeadersAboutHeader;
      'headers.header-4': HeadersHeader4;
      'headers.header-text': HeadersHeaderText;
      'headers.hero-10': HeadersHero10;
      'headers.hero-4': HeadersHero4;
      'pricing.pricing-1': PricingPricing1;
      'pricing.pricing-4-col': PricingPricing4Col;
      'shared.feature-card': SharedFeatureCard;
      'shared.image-slider': SharedImageSlider;
      'shared.key-feature-card': SharedKeyFeatureCard;
      'shared.logo-links': SharedLogoLinks;
      'shared.media': SharedMedia;
      'shared.pricing-card': SharedPricingCard;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-proof': SharedSocialProof;
      'shared.stats': SharedStats;
      'shared.team-members': SharedTeamMembers;
      'shared.timeline-items': SharedTimelineItems;
      'testimonials.single-feedback': TestimonialsSingleFeedback;
      'testimonials.single-feedback-image': TestimonialsSingleFeedbackImage;
      'testimonials.testimonial-image-slider': TestimonialsTestimonialImageSlider;
      'testimonials.testimonial-slider-1': TestimonialsTestimonialSlider1;
      'testimonials.trusted-by': TestimonialsTrustedBy;
    }
  }
}
