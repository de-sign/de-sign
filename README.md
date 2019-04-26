# Simple uikit website starter pack

- [x] Make Gulp work
- [x] Made SCSS structure files
- [x] Make Nunjucks work
- [x] Made JSON website data file
- [ ] Make Template components

# UIKit variables helper

## global

0001 - __global-margin__ : 20px<br/>
0003 - __global-medium-font-size__ : 1.25rem<br/>
0006 - __global-emphasis-color__ : #333<br/>
0008 - __global-color__ : #666<br/>
0011 - __global-inverse-color__ : #fff<br/>
0017 - __global-small-gutter__ : 15px<br/>
0020 - __global-muted-background__ : #f8f8f8<br/>
0025 - __global-primary-background__ : #1e87f0<br/>
0028 - __global-success-background__ : #32d296<br/>
0031 - __global-warning-background__ : #faa05a<br/>
0034 - __global-danger-background__ : #f0506e<br/>
0037 - __global-gutter__ : 30px<br/>
0040 - __global-medium-gutter__ : 40px<br/>
0049 - __global-large-margin__ : 70px<br/>
0051 - __global-xxlarge-font-size__ : 2.625rem<br/>
0055 - __global-small-font-size__ : 0.875rem<br/>
0058 - __global-muted-color__ : #999<br/>
0062 - __global-background__ : #fff<br/>
0066 - __global-secondary-background__ : #222<br/>
0082 - __global-font-family__ : -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"<br/>
0085 - __global-font-size__ : 16px<br/>
0087 - __global-line-height__ : 1.5<br/>
0090 - __global-link-color__ : #1e87f0<br/>
0093 - __global-link-hover-color__ : #0f6ecd<br/>
0112 - __global-medium-margin__ : 40px<br/>
0117 - __global-xlarge-font-size__ : 2rem<br/>
0121 - __global-large-font-size__ : 1.5rem<br/>
0132 - __global-border-width__ : 1px<br/>
0134 - __global-border__ : #e5e5e5<br/>
0140 - __global-small-margin__ : 10px<br/>
0170 - __global-control-height__ : 40px<br/>
0172 - __global-control-small-height__ : 30px<br/>
0174 - __global-control-large-height__ : 55px<br/>
0277 - __global-large-gutter__ : 70px<br/>
0353 - __global-z-index__ : 1000<br/>
0602 - __global-xlarge-margin__ : 140px<br/>
1021 - __global-small-box-shadow__ : 0 2px 8px rgba(0,0,0,0.08)<br/>
1022 - __global-medium-box-shadow__ : 0 5px 15px rgba(0,0,0,0.08)<br/>
1023 - __global-large-box-shadow__ : 0 14px 25px rgba(0,0,0,0.16)<br/>
1024 - __global-xlarge-box-shadow__ : 0 28px 50px rgba(0,0,0,0.16)<br/>

## accordion

0002 - __accordion-item-margin-top__ : *$global-margin*<br/>
0004 - __accordion-title-font-size__ : *$global-medium-font-size*<br/>
0005 - __accordion-title-line-height__ : 1.4<br/>
0007 - __accordion-title-color__ : *$global-emphasis-color*<br/>
0009 - __accordion-title-hover-color__ : *$global-color*<br/>
0010 - __accordion-content-margin-top__ : *$global-margin*<br/>

## inverse

0012 - __inverse-global-emphasis-color__ : *$global-inverse-color*<br/>
0013 - __inverse-accordion-title-color__ : *$inverse-global-emphasis-color*<br/>
0014 - __inverse-global-color__ : rgba(*$global-inverse-color*, 0.7)<br/>
0015 - __inverse-accordion-title-hover-color__ : *$inverse-global-color*<br/>
0060 - __inverse-global-muted-color__ : rgba(*$global-inverse-color*, 0.5)<br/>
0061 - __inverse-article-meta-color__ : *$inverse-global-muted-color*<br/>
0076 - __inverse-global-primary-background__ : *$global-inverse-color*<br/>
0077 - __inverse-badge-background__ : *$inverse-global-primary-background*<br/>
0078 - __inverse-global-inverse-color__ : *$global-color*<br/>
0079 - __inverse-badge-color__ : *$inverse-global-inverse-color*<br/>
0080 - __inverse-badge-hover-color__ : *$inverse-global-inverse-color*<br/>
0150 - __inverse-base-color__ : *$inverse-global-color*<br/>
0151 - __inverse-base-link-color__ : *$inverse-global-emphasis-color*<br/>
0152 - __inverse-base-link-hover-color__ : *$inverse-global-emphasis-color*<br/>
0153 - __inverse-base-code-color__ : *$inverse-global-color*<br/>
0154 - __inverse-base-em-color__ : *$inverse-global-emphasis-color*<br/>
0155 - __inverse-base-heading-color__ : *$inverse-global-emphasis-color*<br/>
0156 - __inverse-global-border__ : rgba(*$global-inverse-color*, 0.2)<br/>
0157 - __inverse-base-hr-border__ : *$inverse-global-border*<br/>
0166 - __inverse-breadcrumb-item-color__ : *$inverse-global-muted-color*<br/>
0167 - __inverse-breadcrumb-item-hover-color__ : *$inverse-global-color*<br/>
0168 - __inverse-breadcrumb-item-active-color__ : *$inverse-global-color*<br/>
0169 - __inverse-breadcrumb-divider-color__ : *$inverse-global-muted-color*<br/>
0217 - __inverse-button-default-background__ : *$inverse-global-primary-background*<br/>
0218 - __inverse-button-default-color__ : *$inverse-global-inverse-color*<br/>
0219 - __inverse-button-default-hover-background__ : darken(*$inverse-button-default-background*, 5%)<br/>
0220 - __inverse-button-default-hover-color__ : *$inverse-global-inverse-color*<br/>
0221 - __inverse-button-default-active-background__ : darken(*$inverse-button-default-background*, 10%)<br/>
0222 - __inverse-button-default-active-color__ : *$inverse-global-inverse-color*<br/>
0223 - __inverse-button-primary-background__ : *$inverse-global-primary-background*<br/>
0224 - __inverse-button-primary-color__ : *$inverse-global-inverse-color*<br/>
0225 - __inverse-button-primary-hover-background__ : darken(*$inverse-button-primary-background*, 5%)<br/>
0226 - __inverse-button-primary-hover-color__ : *$inverse-global-inverse-color*<br/>
0227 - __inverse-button-primary-active-background__ : darken(*$inverse-button-primary-background*, 10%)<br/>
0228 - __inverse-button-primary-active-color__ : *$inverse-global-inverse-color*<br/>
0229 - __inverse-button-secondary-background__ : *$inverse-global-primary-background*<br/>
0230 - __inverse-button-secondary-color__ : *$inverse-global-inverse-color*<br/>
0231 - __inverse-button-secondary-hover-background__ : darken(*$inverse-button-secondary-background*, 5%)<br/>
0232 - __inverse-button-secondary-hover-color__ : *$inverse-global-inverse-color*<br/>
0233 - __inverse-button-secondary-active-background__ : darken(*$inverse-button-secondary-background*, 10%)<br/>
0234 - __inverse-button-secondary-active-color__ : *$inverse-global-inverse-color*<br/>
0235 - __inverse-button-text-color__ : *$inverse-global-muted-color*<br/>
0236 - __inverse-button-text-hover-color__ : *$inverse-global-color*<br/>
0237 - __inverse-button-text-disabled-color__ : *$inverse-global-muted-color*<br/>
0238 - __inverse-button-link-color__ : *$inverse-global-muted-color*<br/>
0239 - __inverse-button-link-hover-color__ : *$inverse-global-color*<br/>
0286 - __inverse-close-color__ : *$inverse-global-muted-color*<br/>
0287 - __inverse-close-hover-color__ : *$inverse-global-color*<br/>
0292 - __inverse-column-divider-rule-color__ : *$inverse-global-border*<br/>
0336 - __inverse-divider-icon-color__ : *$inverse-global-border*<br/>
0337 - __inverse-divider-icon-line-border__ : *$inverse-global-border*<br/>
0338 - __inverse-divider-small-border__ : *$inverse-global-border*<br/>
0339 - __inverse-divider-vertical-border__ : *$inverse-global-border*<br/>
0349 - __inverse-dotnav-item-background__ : rgba(*$inverse-global-color*, 0.5)<br/>
0350 - __inverse-dotnav-item-hover-background__ : rgba(*$inverse-global-color*, 0.9)<br/>
0351 - __inverse-dotnav-item-onclick-background__ : rgba(*$inverse-global-color*, 0.5)<br/>
0352 - __inverse-dotnav-item-active-background__ : rgba(*$inverse-global-color*, 0.9)<br/>
0427 - __inverse-global-muted-background__ : rgba(*$global-inverse-color*, 0.1)<br/>
0428 - __inverse-form-background__ : *$inverse-global-muted-background*<br/>
0429 - __inverse-form-color__ : *$inverse-global-color*<br/>
0430 - __inverse-form-focus-background__ : *$inverse-global-muted-background*<br/>
0431 - __inverse-form-focus-color__ : *$inverse-global-color*<br/>
0432 - __inverse-form-placeholder-color__ : *$inverse-global-muted-color*<br/>
0433 - __inverse-form-select-icon-color__ : *$inverse-global-color*<br/>
0434 - __inverse-form-radio-background__ : darken(*$inverse-global-muted-background*, 5%)<br/>
0435 - __inverse-form-radio-checked-background__ : *$inverse-global-primary-background*<br/>
0436 - __inverse-form-radio-checked-icon-color__ : *$inverse-global-inverse-color*<br/>
0437 - __inverse-form-radio-checked-focus-background__ : darken(*$inverse-global-primary-background*, 10%)<br/>
0438 - __inverse-form-icon-color__ : *$inverse-global-muted-color*<br/>
0439 - __inverse-form-icon-hover-color__ : *$inverse-global-color*<br/>
0454 - __inverse-grid-divider-border__ : *$inverse-global-border*<br/>
0499 - __inverse-heading-divider-border__ : *$inverse-global-border*<br/>
0500 - __inverse-heading-bullet-border__ : *$inverse-global-border*<br/>
0501 - __inverse-heading-line-border__ : *$inverse-global-border*<br/>
0517 - __inverse-icon-link-color__ : *$inverse-global-muted-color*<br/>
0518 - __inverse-icon-link-hover-color__ : *$inverse-global-color*<br/>
0519 - __inverse-icon-link-active-color__ : *$inverse-global-color*<br/>
0520 - __inverse-icon-button-background__ : *$inverse-global-muted-background*<br/>
0521 - __inverse-icon-button-color__ : *$inverse-global-muted-color*<br/>
0522 - __inverse-icon-button-hover-background__ : darken(*$inverse-icon-button-background*, 5%)<br/>
0523 - __inverse-icon-button-hover-color__ : *$inverse-global-color*<br/>
0524 - __inverse-icon-button-active-background__ : darken(*$inverse-icon-button-background*, 10%)<br/>
0525 - __inverse-icon-button-active-color__ : *$inverse-global-color*<br/>
0531 - __inverse-iconnav-item-color__ : *$inverse-global-muted-color*<br/>
0532 - __inverse-iconnav-item-hover-color__ : *$inverse-global-color*<br/>
0533 - __inverse-iconnav-item-active-color__ : *$inverse-global-color*<br/>
0534 - __inverse-global-color-mode__ : light<br/>
0547 - __inverse-label-background__ : *$inverse-global-primary-background*<br/>
0548 - __inverse-label-color__ : *$inverse-global-inverse-color*<br/>
0572 - __inverse-link-muted-color__ : *$inverse-global-muted-color*<br/>
0573 - __inverse-link-muted-hover-color__ : *$inverse-global-color*<br/>
0574 - __inverse-link-text-hover-color__ : *$inverse-global-muted-color*<br/>
0575 - __inverse-link-heading-hover-color__ : *$inverse-global-primary-background*<br/>
0593 - __inverse-list-divider-border__ : *$inverse-global-border*<br/>
0594 - __inverse-list-striped-background__ : *$inverse-global-muted-background*<br/>
0595 - __inverse-list-bullet-icon-color__ : *$inverse-global-color*<br/>
0608 - __inverse-marker-background__ : *$global-muted-background*<br/>
0609 - __inverse-marker-color__ : *$global-color*<br/>
0610 - __inverse-marker-hover-color__ : *$global-color*<br/>
0675 - __inverse-nav-parent-icon-color__ : *$inverse-global-color*<br/>
0676 - __inverse-nav-default-item-color__ : *$inverse-global-muted-color*<br/>
0677 - __inverse-nav-default-item-hover-color__ : *$inverse-global-color*<br/>
0678 - __inverse-nav-default-item-active-color__ : *$inverse-global-emphasis-color*<br/>
0679 - __inverse-nav-default-header-color__ : *$inverse-global-emphasis-color*<br/>
0680 - __inverse-nav-default-divider-border__ : *$inverse-global-border*<br/>
0681 - __inverse-nav-default-sublist-item-color__ : *$inverse-global-muted-color*<br/>
0682 - __inverse-nav-default-sublist-item-hover-color__ : *$inverse-global-color*<br/>
0683 - __inverse-nav-default-sublist-item-active-color__ : *$inverse-global-emphasis-color*<br/>
0684 - __inverse-nav-primary-item-color__ : *$inverse-global-muted-color*<br/>
0685 - __inverse-nav-primary-item-hover-color__ : *$inverse-global-color*<br/>
0686 - __inverse-nav-primary-item-active-color__ : *$inverse-global-emphasis-color*<br/>
0687 - __inverse-nav-primary-header-color__ : *$inverse-global-emphasis-color*<br/>
0688 - __inverse-nav-primary-divider-border__ : *$inverse-global-border*<br/>
0689 - __inverse-nav-primary-sublist-item-color__ : *$inverse-global-muted-color*<br/>
0690 - __inverse-nav-primary-sublist-item-hover-color__ : *$inverse-global-color*<br/>
0691 - __inverse-nav-primary-sublist-item-active-color__ : *$inverse-global-emphasis-color*<br/>
0727 - __inverse-navbar-nav-item-color__ : *$inverse-global-muted-color*<br/>
0728 - __inverse-navbar-nav-item-hover-color__ : *$inverse-global-color*<br/>
0729 - __inverse-navbar-nav-item-onclick-color__ : *$inverse-global-emphasis-color*<br/>
0730 - __inverse-navbar-nav-item-active-color__ : *$inverse-global-emphasis-color*<br/>
0731 - __inverse-navbar-item-color__ : *$inverse-global-color*<br/>
0732 - __inverse-navbar-toggle-color__ : *$inverse-global-muted-color*<br/>
0733 - __inverse-navbar-toggle-hover-color__ : *$inverse-global-color*<br/>
0777 - __inverse-pagination-item-color__ : *$inverse-global-muted-color*<br/>
0778 - __inverse-pagination-item-hover-color__ : *$inverse-global-color*<br/>
0779 - __inverse-pagination-item-active-color__ : *$inverse-global-color*<br/>
0780 - __inverse-pagination-item-disabled-color__ : *$inverse-global-muted-color*<br/>
0814 - __inverse-search-color__ : *$inverse-global-color*<br/>
0815 - __inverse-search-placeholder-color__ : *$inverse-global-muted-color*<br/>
0816 - __inverse-search-icon-color__ : *$inverse-global-muted-color*<br/>
0817 - __inverse-search-default-background__ : *$inverse-global-muted-background*<br/>
0818 - __inverse-search-default-focus-background__ : *$inverse-search-default-background*<br/>
0819 - __inverse-search-navbar-background__ : transparent<br/>
0820 - __inverse-search-large-background__ : transparent<br/>
0821 - __inverse-search-toggle-color__ : *$inverse-global-muted-color*<br/>
0822 - __inverse-search-toggle-hover-color__ : *$inverse-global-color*<br/>
0844 - __inverse-slidenav-color__ : rgba(*$inverse-global-color*, 0.7)<br/>
0845 - __inverse-slidenav-hover-color__ : rgba(*$inverse-global-color*, 0.95)<br/>
0846 - __inverse-slidenav-active-color__ : rgba(*$inverse-global-color*, 0.7)<br/>
0878 - __inverse-subnav-item-color__ : *$inverse-global-muted-color*<br/>
0879 - __inverse-subnav-item-hover-color__ : *$inverse-global-color*<br/>
0880 - __inverse-subnav-item-active-color__ : *$inverse-global-emphasis-color*<br/>
0881 - __inverse-subnav-divider-border__ : *$inverse-global-border*<br/>
0882 - __inverse-subnav-pill-item-background__ : transparent<br/>
0883 - __inverse-subnav-pill-item-color__ : *$inverse-global-muted-color*<br/>
0884 - __inverse-subnav-pill-item-hover-background__ : *$inverse-global-muted-background*<br/>
0885 - __inverse-subnav-pill-item-hover-color__ : *$inverse-global-color*<br/>
0886 - __inverse-subnav-pill-item-onclick-background__ : *$inverse-subnav-pill-item-hover-background*<br/>
0887 - __inverse-subnav-pill-item-onclick-color__ : *$inverse-subnav-pill-item-hover-color*<br/>
0888 - __inverse-subnav-pill-item-active-background__ : *$inverse-global-primary-background*<br/>
0889 - __inverse-subnav-pill-item-active-color__ : *$inverse-global-inverse-color*<br/>
0890 - __inverse-subnav-item-disabled-color__ : *$inverse-global-muted-color*<br/>
0899 - __inverse-tab-item-color__ : *$inverse-global-muted-color*<br/>
0900 - __inverse-tab-item-hover-color__ : *$inverse-global-color*<br/>
0901 - __inverse-tab-item-active-color__ : *$inverse-global-emphasis-color*<br/>
0902 - __inverse-tab-item-disabled-color__ : *$inverse-global-muted-color*<br/>
0922 - __inverse-table-header-cell-color__ : *$inverse-global-color*<br/>
0923 - __inverse-table-caption-color__ : *$inverse-global-muted-color*<br/>
0924 - __inverse-table-row-active-background__ : fade-out(*$inverse-global-muted-background*, 0.02)<br/>
0925 - __inverse-table-divider-border__ : *$inverse-global-border*<br/>
0926 - __inverse-table-striped-row-background__ : *$inverse-global-muted-background*<br/>
0927 - __inverse-table-hover-row-background__ : *$inverse-table-row-active-background*<br/>
0947 - __inverse-text-lead-color__ : *$inverse-global-color*<br/>
0948 - __inverse-text-meta-color__ : *$inverse-global-muted-color*<br/>
0949 - __inverse-text-muted-color__ : *$inverse-global-muted-color*<br/>
0950 - __inverse-text-emphasis-color__ : *$inverse-global-emphasis-color*<br/>
0951 - __inverse-text-primary-color__ : *$inverse-global-primary-background*<br/>
0952 - __inverse-text-secondary-color__ : *$inverse-global-primary-background*<br/>
0985 - __inverse-totop-color__ : *$inverse-global-muted-color*<br/>
0986 - __inverse-totop-hover-color__ : *$inverse-global-color*<br/>
0987 - __inverse-totop-active-color__ : *$inverse-global-emphasis-color*<br/>
1010 - __inverse-logo-color__ : *$inverse-global-color*<br/>
1011 - __inverse-logo-hover-color__ : *$inverse-global-color*<br/>

## alert

0016 - __alert-margin-vertical__ : *$global-margin*<br/>
0018 - __alert-padding__ : *$global-small-gutter*<br/>
0019 - __alert-padding-right__ : *$alert-padding + 14px*<br/>
0021 - __alert-background__ : *$global-muted-background*<br/>
0022 - __alert-color__ : *$global-color*<br/>
0023 - __alert-close-top__ : *$alert-padding + 5px*<br/>
0024 - __alert-close-right__ : *$alert-padding*<br/>
0026 - __alert-primary-background__ : lighten(mix(white, *$global-primary-background*, 40%), 20%)<br/>
0027 - __alert-primary-color__ : *$global-primary-background*<br/>
0029 - __alert-success-background__ : lighten(mix(white, *$global-success-background*, 40%), 25%)<br/>
0030 - __alert-success-color__ : *$global-success-background*<br/>
0032 - __alert-warning-background__ : lighten(mix(white, *$global-warning-background*, 45%), 15%)<br/>
0033 - __alert-warning-color__ : *$global-warning-background*<br/>
0035 - __alert-danger-background__ : lighten(mix(white, *$global-danger-background*, 40%), 20%)<br/>
0036 - __alert-danger-color__ : *$global-danger-background*<br/>

## align

0038 - __align-margin-horizontal__ : *$global-gutter*<br/>
0039 - __align-margin-vertical__ : *$global-gutter*<br/>
0041 - __align-margin-horizontal-l__ : *$global-medium-gutter*<br/>

## animation

0042 - __animation-duration__ : 0.5s<br/>
0043 - __animation-fade-duration__ : 0.8s<br/>
0044 - __animation-stroke-duration__ : 2s<br/>
0045 - __animation-kenburns-duration__ : 15s<br/>
0046 - __animation-fast-duration__ : 0.1s<br/>
0047 - __animation-slide-small-translate__ : 10px<br/>
0048 - __animation-slide-medium-translate__ : 50px<br/>

## article

0050 - __article-margin-top__ : *$global-large-margin*<br/>
0052 - __article-title-font-size-m__ : *$global-xxlarge-font-size*<br/>
0053 - __article-title-font-size__ : *$article-title-font-size-m * 0.85*<br/>
0054 - __article-title-line-height__ : 1.2<br/>
0056 - __article-meta-font-size__ : *$global-small-font-size*<br/>
0057 - __article-meta-line-height__ : 1.4<br/>
0059 - __article-meta-color__ : *$global-muted-color*<br/>

## background

0063 - __background-default-background__ : *$global-background*<br/>
0064 - __background-muted-background__ : *$global-muted-background*<br/>
0065 - __background-primary-background__ : *$global-primary-background*<br/>
0067 - __background-secondary-background__ : *$global-secondary-background*<br/>

## badge

0068 - __badge-size__ : 22px<br/>
0069 - __badge-padding-vertical__ : 0<br/>
0070 - __badge-padding-horizontal__ : 5px<br/>
0071 - __badge-border-radius__ : 500px<br/>
0072 - __badge-background__ : *$global-primary-background*<br/>
0073 - __badge-color__ : *$global-inverse-color*<br/>
0074 - __badge-font-size__ : *$global-small-font-size*<br/>
0075 - __badge-hover-color__ : *$global-inverse-color*<br/>

## base

0081 - __base-body-background__ : *$global-background*<br/>
0083 - __base-body-font-family__ : *$global-font-family*<br/>
0084 - __base-body-font-weight__ : normal<br/>
0086 - __base-body-font-size__ : *$global-font-size*<br/>
0088 - __base-body-line-height__ : *$global-line-height*<br/>
0089 - __base-body-color__ : *$global-color*<br/>
0091 - __base-link-color__ : *$global-link-color*<br/>
0092 - __base-link-text-decoration__ : none<br/>
0094 - __base-link-hover-color__ : *$global-link-hover-color*<br/>
0095 - __base-link-hover-text-decoration__ : underline<br/>
0096 - __base-strong-font-weight__ : bolder<br/>
0097 - __base-code-font-size__ : *$global-small-font-size*<br/>
0098 - __base-code-font-family__ : Consolas, monaco, monospace<br/>
0099 - __base-code-color__ : *$global-danger-background*<br/>
0100 - __base-em-color__ : *$global-danger-background*<br/>
0101 - __base-ins-background__ : #ffd<br/>
0102 - __base-ins-color__ : *$global-color*<br/>
0103 - __base-mark-background__ : #ffd<br/>
0104 - __base-mark-color__ : *$global-color*<br/>
0105 - __base-quote-font-style__ : italic<br/>
0106 - __base-small-font-size__ : 80%<br/>
0107 - __base-margin-vertical__ : *$global-margin*<br/>
0108 - __base-heading-font-family__ : *$global-font-family*<br/>
0109 - __base-heading-font-weight__ : normal<br/>
0110 - __base-heading-color__ : *$global-emphasis-color*<br/>
0111 - __base-heading-text-transform__ : none<br/>
0113 - __base-heading-margin-top__ : *$global-medium-margin*<br/>
0114 - __base-h1-font-size-m__ : *$global-xxlarge-font-size*<br/>
0115 - __base-h1-font-size__ : *$base-h1-font-size-m * 0.85*<br/>
0116 - __base-h1-line-height__ : 1.2<br/>
0118 - __base-h2-font-size-m__ : *$global-xlarge-font-size*<br/>
0119 - __base-h2-font-size__ : *$base-h2-font-size-m * 0.85*<br/>
0120 - __base-h2-line-height__ : 1.3<br/>
0122 - __base-h3-font-size__ : *$global-large-font-size*<br/>
0123 - __base-h3-line-height__ : 1.4<br/>
0124 - __base-h4-font-size__ : *$global-medium-font-size*<br/>
0125 - __base-h4-line-height__ : 1.4<br/>
0126 - __base-h5-font-size__ : *$global-font-size*<br/>
0127 - __base-h5-line-height__ : 1.4<br/>
0128 - __base-h6-font-size__ : *$global-small-font-size*<br/>
0129 - __base-h6-line-height__ : 1.4<br/>
0130 - __base-list-padding-left__ : 30px<br/>
0131 - __base-hr-margin-vertical__ : *$global-margin*<br/>
0133 - __base-hr-border-width__ : *$global-border-width*<br/>
0135 - __base-hr-border__ : *$global-border*<br/>
0136 - __base-blockquote-font-size__ : *$global-medium-font-size*<br/>
0137 - __base-blockquote-line-height__ : 1.5<br/>
0138 - __base-blockquote-font-style__ : italic<br/>
0139 - __base-blockquote-margin-vertical__ : *$global-margin*<br/>
0141 - __base-blockquote-footer-margin-top__ : *$global-small-margin*<br/>
0142 - __base-blockquote-footer-font-size__ : *$global-small-font-size*<br/>
0143 - __base-blockquote-footer-line-height__ : 1.5<br/>
0144 - __base-pre-font-size__ : *$global-small-font-size*<br/>
0145 - __base-pre-line-height__ : 1.5<br/>
0146 - __base-pre-font-family__ : *$base-code-font-family*<br/>
0147 - __base-pre-color__ : *$global-color*<br/>
0148 - __base-selection-background__ : #39f<br/>
0149 - __base-selection-color__ : *$global-inverse-color*<br/>

## breadcrumb

0158 - __breadcrumb-item-font-size__ : *$global-small-font-size*<br/>
0159 - __breadcrumb-item-color__ : *$global-muted-color*<br/>
0160 - __breadcrumb-item-hover-color__ : *$global-color*<br/>
0161 - __breadcrumb-item-hover-text-decoration__ : none<br/>
0162 - __breadcrumb-item-active-color__ : *$global-color*<br/>
0163 - __breadcrumb-divider__ : "/"<br/>
0164 - __breadcrumb-divider-margin-horizontal__ : 20px<br/>
0165 - __breadcrumb-divider-color__ : *$global-muted-color*<br/>

## button

0171 - __button-line-height__ : *$global-control-height*<br/>
0173 - __button-small-line-height__ : *$global-control-small-height*<br/>
0175 - __button-large-line-height__ : *$global-control-large-height*<br/>
0176 - __button-font-size__ : *$global-font-size*<br/>
0177 - __button-small-font-size__ : *$global-small-font-size*<br/>
0178 - __button-large-font-size__ : *$global-medium-font-size*<br/>
0179 - __button-padding-horizontal__ : *$global-gutter*<br/>
0180 - __button-small-padding-horizontal__ : *$global-small-gutter*<br/>
0181 - __button-large-padding-horizontal__ : *$global-medium-gutter*<br/>
0182 - __button-default-background__ : *$global-muted-background*<br/>
0183 - __button-default-color__ : *$global-emphasis-color*<br/>
0184 - __button-default-hover-background__ : darken(*$button-default-background*, 5%)<br/>
0185 - __button-default-hover-color__ : *$global-emphasis-color*<br/>
0186 - __button-default-active-background__ : darken(*$button-default-background*, 10%)<br/>
0187 - __button-default-active-color__ : *$global-emphasis-color*<br/>
0188 - __button-primary-background__ : *$global-primary-background*<br/>
0189 - __button-primary-color__ : *$global-inverse-color*<br/>
0190 - __button-primary-hover-background__ : darken(*$button-primary-background*, 5%)<br/>
0191 - __button-primary-hover-color__ : *$global-inverse-color*<br/>
0192 - __button-primary-active-background__ : darken(*$button-primary-background*, 10%)<br/>
0193 - __button-primary-active-color__ : *$global-inverse-color*<br/>
0194 - __button-secondary-background__ : *$global-secondary-background*<br/>
0195 - __button-secondary-color__ : *$global-inverse-color*<br/>
0196 - __button-secondary-hover-background__ : darken(*$button-secondary-background*, 5%)<br/>
0197 - __button-secondary-hover-color__ : *$global-inverse-color*<br/>
0198 - __button-secondary-active-background__ : darken(*$button-secondary-background*, 10%)<br/>
0199 - __button-secondary-active-color__ : *$global-inverse-color*<br/>
0200 - __button-danger-background__ : *$global-danger-background*<br/>
0201 - __button-danger-color__ : *$global-inverse-color*<br/>
0202 - __button-danger-hover-background__ : darken(*$button-danger-background*, 5%)<br/>
0203 - __button-danger-hover-color__ : *$global-inverse-color*<br/>
0204 - __button-danger-active-background__ : darken(*$button-danger-background*, 10%)<br/>
0205 - __button-danger-active-color__ : *$global-inverse-color*<br/>
0206 - __button-disabled-background__ : *$global-muted-background*<br/>
0207 - __button-disabled-color__ : *$global-muted-color*<br/>
0208 - __button-text-line-height__ : *$global-line-height*<br/>
0209 - __button-text-color__ : *$global-muted-color*<br/>
0210 - __button-text-hover-color__ : *$global-color*<br/>
0211 - __button-text-disabled-color__ : *$global-muted-color*<br/>
0212 - __button-link-line-height__ : *$global-line-height*<br/>
0213 - __button-link-color__ : *$global-link-color*<br/>
0214 - __button-link-hover-color__ : *$global-link-hover-color*<br/>
0215 - __button-link-hover-text-decoration__ : underline<br/>
0216 - __button-link-disabled-color__ : *$global-muted-color*<br/>

## card

0240 - __card-body-padding-horizontal__ : *$global-gutter*<br/>
0241 - __card-body-padding-vertical__ : *$global-gutter*<br/>
0242 - __card-body-padding-horizontal-l__ : *$global-medium-gutter*<br/>
0243 - __card-body-padding-vertical-l__ : *$global-medium-gutter*<br/>
0244 - __card-header-padding-horizontal__ : *$global-gutter*<br/>
0245 - __card-header-padding-vertical__ : round(*$global-gutter* / 2)<br/>
0246 - __card-header-padding-horizontal-l__ : *$global-medium-gutter*<br/>
0247 - __card-header-padding-vertical-l__ : round(*$global-medium-gutter* / 2)<br/>
0248 - __card-footer-padding-horizontal__ : *$global-gutter*<br/>
0249 - __card-footer-padding-vertical__ : (*$global-gutter* / 2)<br/>
0250 - __card-footer-padding-horizontal-l__ : *$global-medium-gutter*<br/>
0251 - __card-footer-padding-vertical-l__ : round(*$global-medium-gutter* / 2)<br/>
0252 - __card-title-font-size__ : *$global-large-font-size*<br/>
0253 - __card-title-line-height__ : 1.4<br/>
0254 - __card-badge-top__ : *$global-gutter*<br/>
0255 - __card-badge-right__ : *$card-badge-top*<br/>
0256 - __card-hover-background__ : *$global-muted-background*<br/>
0257 - __card-default-background__ : *$global-muted-background*<br/>
0258 - __card-default-color__ : *$global-color*<br/>
0259 - __card-default-title-color__ : *$global-emphasis-color*<br/>
0260 - __card-default-hover-background__ : darken(*$card-default-background*, 5%)<br/>
0261 - __card-primary-background__ : *$global-primary-background*<br/>
0262 - __card-primary-color__ : *$global-inverse-color*<br/>
0263 - __card-primary-title-color__ : *$card-primary-color*<br/>
0264 - __card-primary-hover-background__ : darken(*$card-primary-background*, 5%)<br/>
0265 - __card-primary-color-mode__ : light<br/>
0266 - __card-secondary-background__ : *$global-secondary-background*<br/>
0267 - __card-secondary-color__ : *$global-inverse-color*<br/>
0268 - __card-secondary-title-color__ : *$card-secondary-color*<br/>
0269 - __card-secondary-hover-background__ : darken(*$card-secondary-background*, 5%)<br/>
0270 - __card-secondary-color-mode__ : light<br/>
0271 - __card-small-body-padding-horizontal__ : *$global-margin*<br/>
0272 - __card-small-body-padding-vertical__ : *$global-margin*<br/>
0273 - __card-small-header-padding-horizontal__ : *$global-margin*<br/>
0274 - __card-small-header-padding-vertical__ : round(*$global-margin*/ 1.5)<br/>
0275 - __card-small-footer-padding-horizontal__ : *$global-margin*<br/>
0276 - __card-small-footer-padding-vertical__ : round(*$global-margin*/ 1.5)<br/>
0278 - __card-large-body-padding-horizontal-l__ : *$global-large-gutter*<br/>
0279 - __card-large-body-padding-vertical-l__ : *$global-large-gutter*<br/>
0280 - __card-large-header-padding-horizontal-l__ : *$global-large-gutter*<br/>
0281 - __card-large-header-padding-vertical-l__ : round(*$global-large-gutter* / 2)<br/>
0282 - __card-large-footer-padding-horizontal-l__ : *$global-large-gutter*<br/>
0283 - __card-large-footer-padding-vertical-l__ : round(*$global-large-gutter* / 2)<br/>

## close

0284 - __close-color__ : *$global-muted-color*<br/>
0285 - __close-hover-color__ : *$global-color*<br/>

## column

0288 - __column-gutter__ : *$global-gutter*<br/>
0289 - __column-gutter-l__ : *$global-medium-gutter*<br/>
0290 - __column-divider-rule-color__ : *$global-border*<br/>
0291 - __column-divider-rule-width__ : 1px<br/>

## comment

0293 - __comment-header-margin-bottom__ : *$global-margin*<br/>
0294 - __comment-title-font-size__ : *$global-medium-font-size*<br/>
0295 - __comment-title-line-height__ : 1.4<br/>
0296 - __comment-meta-font-size__ : *$global-small-font-size*<br/>
0297 - __comment-meta-line-height__ : 1.4<br/>
0298 - __comment-meta-color__ : *$global-muted-color*<br/>
0299 - __comment-list-margin-top__ : *$global-large-margin*<br/>
0300 - __comment-list-padding-left__ : 30px<br/>
0301 - __comment-list-padding-left-m__ : 100px<br/>

## container

0302 - __container-max-width__ : 1200px<br/>
0303 - __container-xsmall-max-width__ : 750px<br/>
0304 - __container-small-max-width__ : 900px<br/>
0305 - __container-large-max-width__ : 1600px<br/>
0306 - __container-padding-horizontal__ : 15px<br/>
0307 - __container-padding-horizontal-s__ : *$global-gutter*<br/>
0308 - __container-padding-horizontal-m__ : *$global-medium-gutter*<br/>

## countdown

0309 - __countdown-item-line-height__ : 70px<br/>
0310 - __countdown-number-font-size__ : 2rem<br/>
0311 - __countdown-number-font-size-s__ : 4rem<br/>
0312 - __countdown-number-font-size-m__ : 6rem<br/>
0313 - __countdown-separator-font-size__ : 1rem<br/>
0314 - __countdown-separator-font-size-s__ : 2rem<br/>
0315 - __countdown-separator-font-size-m__ : 3rem<br/>

## description

0316 - __description-list-term-color__ : *$global-emphasis-color*<br/>
0317 - __description-list-term-margin-top__ : *$global-margin*<br/>
0318 - __description-list-divider-term-margin-top__ : *$global-margin*<br/>
0319 - __description-list-divider-term-border-width__ : *$global-border-width*<br/>
0320 - __description-list-divider-term-border__ : *$global-border*<br/>

## divider

0321 - __divider-margin-vertical__ : *$global-margin*<br/>
0322 - __divider-icon-width__ : 50px<br/>
0323 - __divider-icon-height__ : 20px<br/>
0324 - __divider-icon-color__ : *$global-border*<br/>
0325 - __divider-icon-line-top__ : 50%<br/>
0326 - __divider-icon-line-width__ : 100%<br/>
0327 - __divider-icon-line-border-width__ : *$global-border-width*<br/>
0328 - __divider-icon-line-border__ : *$global-border*<br/>
0330 - __divider-small-width__ : 100px<br/>
0331 - __divider-small-border-width__ : *$global-border-width*<br/>
0332 - __divider-small-border__ : *$global-border*<br/>
0333 - __divider-vertical-height__ : 100px<br/>
0334 - __divider-vertical-border-width__ : *$global-border-width*<br/>
0335 - __divider-vertical-border__ : *$global-border*<br/>

## internal

0329 - __internal-divider-icon-image__ : "data<br/>
0423 - __internal-form-select-image__ : "data<br/>
0424 - __internal-form-radio-image__ : "data<br/>
0425 - __internal-form-checkbox-image__ : "data<br/>
0426 - __internal-form-checkbox-indeterminate-image__ : "data<br/>
0592 - __internal-list-bullet-image__ : "data<br/>
0673 - __internal-nav-parent-close-image__ : "data<br/>
0674 - __internal-nav-parent-open-image__ : "data<br/>

## dotnav

0340 - __dotnav-margin-horizontal__ : 12px<br/>
0341 - __dotnav-margin-vertical__ : *$dotnav-margin-horizontal*<br/>
0342 - __dotnav-item-width__ : 10px<br/>
0343 - __dotnav-item-height__ : *$dotnav-item-width*<br/>
0344 - __dotnav-item-border-radius__ : 50%<br/>
0345 - __dotnav-item-background__ : rgba(*$global-color*, 0.2)<br/>
0346 - __dotnav-item-hover-background__ : rgba(*$global-color*, 0.6)<br/>
0347 - __dotnav-item-onclick-background__ : rgba(*$global-color*, 0.2)<br/>
0348 - __dotnav-item-active-background__ : rgba(*$global-color*, 0.6)<br/>

## drop

0354 - __drop-z-index__ : *$global-z-index + 20*<br/>
0355 - __drop-width__ : 300px<br/>
0356 - __drop-margin__ : *$global-margin*<br/>

## dropdown

0357 - __dropdown-z-index__ : *$global-z-index + 20*<br/>
0358 - __dropdown-min-width__ : 200px<br/>
0359 - __dropdown-padding__ : 15px<br/>
0360 - __dropdown-background__ : *$global-muted-background*<br/>
0361 - __dropdown-color__ : *$global-color*<br/>
0362 - __dropdown-margin__ : *$global-small-margin*<br/>
0363 - __dropdown-nav-item-color__ : *$global-muted-color*<br/>
0364 - __dropdown-nav-item-hover-color__ : *$global-color*<br/>
0365 - __dropdown-nav-header-color__ : *$global-emphasis-color*<br/>
0366 - __dropdown-nav-divider-border-width__ : *$global-border-width*<br/>
0367 - __dropdown-nav-divider-border__ : *$global-border*<br/>
0368 - __dropdown-nav-sublist-item-color__ : *$global-muted-color*<br/>
0369 - __dropdown-nav-sublist-item-hover-color__ : *$global-color*<br/>

## form

0370 - __form-range-thumb-height__ : 15px<br/>
0371 - __form-range-thumb-border-radius__ : 500px<br/>
0372 - __form-range-thumb-background__ : *$global-color*<br/>
0373 - __form-range-track-height__ : 3px<br/>
0374 - __form-range-track-background__ : darken(*$global-muted-background*, 5%)<br/>
0375 - __form-range-track-focus-background__ : darken(*$global-muted-background*, 15%)<br/>
0376 - __form-height__ : *$global-control-height*<br/>
0377 - __form-line-height__ : *$form-height*<br/>
0378 - __form-padding-horizontal__ : 10px<br/>
0379 - __form-padding-vertical__ : 4px<br/>
0380 - __form-background__ : *$global-muted-background*<br/>
0381 - __form-color__ : *$global-color*<br/>
0382 - __form-focus-background__ : *$global-muted-background*<br/>
0383 - __form-focus-color__ : *$global-color*<br/>
0384 - __form-disabled-background__ : *$global-muted-background*<br/>
0385 - __form-disabled-color__ : *$global-muted-color*<br/>
0386 - __form-placeholder-color__ : *$global-muted-color*<br/>
0387 - __form-small-height__ : *$global-control-small-height*<br/>
0388 - __form-small-padding-horizontal__ : 8px<br/>
0389 - __form-small-line-height__ : *$form-small-height*<br/>
0390 - __form-small-font-size__ : *$global-small-font-size*<br/>
0391 - __form-large-height__ : *$global-control-large-height*<br/>
0392 - __form-large-padding-horizontal__ : 12px<br/>
0393 - __form-large-line-height__ : *$form-large-height*<br/>
0394 - __form-large-font-size__ : *$global-medium-font-size*<br/>
0395 - __form-danger-color__ : *$global-danger-background*<br/>
0396 - __form-success-color__ : *$global-success-background*<br/>
0397 - __form-width-xsmall__ : 50px<br/>
0398 - __form-width-small__ : 130px<br/>
0399 - __form-width-medium__ : 200px<br/>
0400 - __form-width-large__ : 500px<br/>
0401 - __form-select-padding-right__ : 20px<br/>
0402 - __form-select-icon-color__ : *$global-color*<br/>
0403 - __form-select-option-color__ : #444<br/>
0404 - __form-select-disabled-icon-color__ : *$global-muted-color*<br/>
0405 - __form-radio-size__ : 16px<br/>
0406 - __form-radio-margin-top__ : -4px<br/>
0407 - __form-radio-background__ : darken(*$global-muted-background*, 5%)<br/>
0408 - __form-radio-checked-background__ : *$global-primary-background*<br/>
0409 - __form-radio-checked-icon-color__ : *$global-inverse-color*<br/>
0410 - __form-radio-checked-focus-background__ : darken(*$global-primary-background*, 10%)<br/>
0411 - __form-radio-disabled-background__ : *$global-muted-background*<br/>
0412 - __form-radio-disabled-icon-color__ : *$global-muted-color*<br/>
0413 - __form-legend-font-size__ : *$global-large-font-size*<br/>
0414 - __form-legend-line-height__ : 1.4<br/>
0415 - __form-stacked-margin-bottom__ : *$global-small-margin*<br/>
0416 - __form-horizontal-label-width__ : 200px<br/>
0417 - __form-horizontal-label-margin-top__ : 7px<br/>
0418 - __form-horizontal-controls-margin-left__ : 215px<br/>
0419 - __form-horizontal-controls-text-padding-top__ : 7px<br/>
0420 - __form-icon-width__ : *$form-height*<br/>
0421 - __form-icon-color__ : *$global-muted-color*<br/>
0422 - __form-icon-hover-color__ : *$global-color*<br/>

## grid

0440 - __grid-gutter-horizontal__ : *$global-gutter*<br/>
0441 - __grid-gutter-vertical__ : *$grid-gutter-horizontal*<br/>
0442 - __grid-gutter-horizontal-l__ : *$global-medium-gutter*<br/>
0443 - __grid-gutter-vertical-l__ : *$grid-gutter-horizontal-l*<br/>
0444 - __grid-small-gutter-horizontal__ : *$global-small-gutter*<br/>
0445 - __grid-small-gutter-vertical__ : *$grid-small-gutter-horizontal*<br/>
0446 - __grid-medium-gutter-horizontal__ : *$global-gutter*<br/>
0447 - __grid-medium-gutter-vertical__ : *$grid-medium-gutter-horizontal*<br/>
0448 - __grid-large-gutter-horizontal__ : *$global-medium-gutter*<br/>
0449 - __grid-large-gutter-vertical__ : *$grid-large-gutter-horizontal*<br/>
0450 - __grid-large-gutter-horizontal-l__ : *$global-large-gutter*<br/>
0451 - __grid-large-gutter-vertical-l__ : *$grid-large-gutter-horizontal-l*<br/>
0452 - __grid-divider-border-width__ : *$global-border-width*<br/>
0453 - __grid-divider-border__ : *$global-border*<br/>

## heading

0455 - __heading-medium-font-size-l__ : 4rem<br/>
0456 - __heading-small-font-size-m__ : *$heading-medium-font-size-l * 0.8125*<br/>
0457 - __heading-small-font-size__ : *$heading-small-font-size-m * 0.8*<br/>
0458 - __heading-medium-font-size-m__ : *$heading-medium-font-size-l * 0.875*<br/>
0459 - __heading-medium-font-size__ : *$heading-medium-font-size-m * 0.825*<br/>
0460 - __heading-large-font-size-m__ : *$heading-medium-font-size-l*<br/>
0461 - __heading-large-font-size__ : *$heading-large-font-size-m * 0.85*<br/>
0462 - __heading-xlarge-font-size__ : *$heading-large-font-size-m*<br/>
0463 - __heading-large-font-size-l__ : 6rem<br/>
0464 - __heading-xlarge-font-size-m__ : *$heading-large-font-size-l*<br/>
0465 - __heading-2xlarge-font-size__ : *$heading-xlarge-font-size-m*<br/>
0466 - __heading-xlarge-font-size-l__ : 8rem<br/>
0467 - __heading-2xlarge-font-size-m__ : *$heading-xlarge-font-size-l*<br/>
0468 - __heading-2xlarge-font-size-l__ : 11rem<br/>
0469 - __heading-small-line-height__ : 1.2<br/>
0470 - __heading-medium-line-height__ : 1.1<br/>
0471 - __heading-large-line-height__ : 1.1<br/>
0472 - __heading-xlarge-line-height__ : 1<br/>
0473 - __heading-2xlarge-line-height__ : 1<br/>
0474 - __heading-divider-padding-bottom__ : unquote('calc(10px + 0.1em)')<br/>
0475 - __heading-divider-border-width__ : unquote('calc(0.2px + 0.05em)')<br/>
0476 - __heading-divider-border__ : *$global-border*<br/>
0477 - __heading-bullet-top__ : unquote('calc(-0.1 * 1em)')<br/>
0478 - __heading-bullet-height__ : unquote('calc(4px + 0.7em)')<br/>
0479 - __heading-bullet-margin-right__ : unquote('calc(5px + 0.2em)')<br/>
0480 - __heading-bullet-border-width__ : unquote('calc(5px + 0.1em)')<br/>
0481 - __heading-bullet-border__ : *$global-border*<br/>
0482 - __heading-line-top__ : 50%<br/>
0483 - __heading-line-border-width__ : unquote('calc(0.2px + 0.05em)')<br/>
0484 - __heading-line-height__ : *$heading-line-border-width*<br/>
0485 - __heading-line-width__ : 2000px<br/>
0486 - __heading-line-border__ : *$global-border*<br/>
0487 - __heading-line-margin-horizontal__ : unquote('calc(5px + 0.3em)')<br/>
0488 - __heading-primary-font-size-l__ : 3.75rem<br/>
0489 - __heading-primary-line-height-l__ : 1.1<br/>
0490 - __heading-primary-font-size-m__ : *$heading-primary-font-size-l * 0.9*<br/>
0491 - __heading-primary-font-size__ : *$heading-primary-font-size-l * 0.8*<br/>
0492 - __heading-primary-line-height__ : 1.2<br/>
0493 - __heading-hero-font-size-l__ : 8rem<br/>
0494 - __heading-hero-line-height-l__ : 1<br/>
0495 - __heading-hero-font-size-m__ : *$heading-hero-font-size-l * 0.75*<br/>
0496 - __heading-hero-line-height-m__ : 1<br/>
0497 - __heading-hero-font-size__ : *$heading-hero-font-size-l * 0.5*<br/>
0498 - __heading-hero-line-height__ : 1.1<br/>

## height

0502 - __height-small-height__ : 150px<br/>
0503 - __height-medium-height__ : 300px<br/>
0504 - __height-large-height__ : 450px<br/>

## icon

0505 - __icon-image-size__ : 20px<br/>
0506 - __icon-link-color__ : *$global-muted-color*<br/>
0507 - __icon-link-hover-color__ : *$global-color*<br/>
0508 - __icon-link-active-color__ : darken(*$global-color*, 5%)<br/>
0509 - __icon-button-size__ : 36px<br/>
0510 - __icon-button-border-radius__ : 500px<br/>
0511 - __icon-button-background__ : *$global-muted-background*<br/>
0512 - __icon-button-color__ : *$global-muted-color*<br/>
0513 - __icon-button-hover-background__ : darken(*$icon-button-background*, 5%)<br/>
0514 - __icon-button-hover-color__ : *$global-color*<br/>
0515 - __icon-button-active-background__ : darken(*$icon-button-background*, 10%)<br/>
0516 - __icon-button-active-color__ : *$global-color*<br/>

## iconnav

0526 - __iconnav-margin-horizontal__ : *$global-small-margin*<br/>
0527 - __iconnav-margin-vertical__ : *$iconnav-margin-horizontal*<br/>
0528 - __iconnav-item-color__ : *$global-muted-color*<br/>
0529 - __iconnav-item-hover-color__ : *$global-color*<br/>
0530 - __iconnav-item-active-color__ : *$global-color*<br/>

## label

0535 - __label-padding-vertical__ : 0<br/>
0536 - __label-padding-horizontal__ : *$global-small-margin*<br/>
0537 - __label-background__ : *$global-primary-background*<br/>
0538 - __label-line-height__ : *$global-line-height*<br/>
0539 - __label-font-size__ : *$global-small-font-size*<br/>
0540 - __label-color__ : *$global-inverse-color*<br/>
0541 - __label-success-background__ : *$global-success-background*<br/>
0542 - __label-success-color__ : *$global-inverse-color*<br/>
0543 - __label-warning-background__ : *$global-warning-background*<br/>
0544 - __label-warning-color__ : *$global-inverse-color*<br/>
0545 - __label-danger-background__ : *$global-danger-background*<br/>
0546 - __label-danger-color__ : *$global-inverse-color*<br/>

## leader

0549 - __leader-fill-content__ : unquote('.')<br/>
0550 - __leader-fill-margin-left__ : *$global-small-gutter*<br/>

## lightbox

0551 - __lightbox-z-index__ : *$global-z-index + 10*<br/>
0552 - __lightbox-background__ : #000<br/>
0553 - __lightbox-item-color__ : rgba(255,255,255,0.7)<br/>
0554 - __lightbox-item-max-width__ : 100vw<br/>
0555 - __lightbox-item-max-height__ : 100vh<br/>
0556 - __lightbox-toolbar-padding-vertical__ : 10px<br/>
0557 - __lightbox-toolbar-padding-horizontal__ : 10px<br/>
0558 - __lightbox-toolbar-background__ : rgba(0,0,0,0.3)<br/>
0559 - __lightbox-toolbar-color__ : rgba(255,255,255,0.7)<br/>
0560 - __lightbox-toolbar-icon-padding__ : 5px<br/>
0561 - __lightbox-toolbar-icon-color__ : rgba(255,255,255,0.7)<br/>
0562 - __lightbox-toolbar-icon-hover-color__ : #fff<br/>
0563 - __lightbox-button-size__ : 50px<br/>
0564 - __lightbox-button-background__ : *$lightbox-toolbar-background*<br/>
0565 - __lightbox-button-color__ : rgba(255,255,255,0.7)<br/>
0566 - __lightbox-button-hover-color__ : #fff<br/>

## link

0567 - __link-muted-color__ : *$global-muted-color*<br/>
0568 - __link-muted-hover-color__ : *$global-color*<br/>
0569 - __link-text-hover-color__ : *$global-muted-color*<br/>
0570 - __link-heading-hover-color__ : *$global-primary-background*<br/>
0571 - __link-heading-hover-text-decoration__ : none<br/>

## list

0576 - __list-margin-top__ : *$global-small-margin*<br/>
0577 - __list-nested-padding-left__ : *$global-gutter*<br/>
0578 - __list-divider-margin-top__ : *$global-small-margin*<br/>
0579 - __list-divider-border-width__ : *$global-border-width*<br/>
0580 - __list-divider-border__ : *$global-border*<br/>
0581 - __list-striped-padding-vertical__ : *$global-small-margin*<br/>
0582 - __list-striped-padding-horizontal__ : *$global-small-margin*<br/>
0583 - __list-striped-background__ : *$global-muted-background*<br/>
0584 - __list-bullet-width__ : (*$global-line-height* * 1em)<br/>
0585 - __list-bullet-height__ : *$list-bullet-width*<br/>
0586 - __list-bullet-margin-right__ : *$global-small-margin*<br/>
0587 - __list-bullet-icon-color__ : *$global-color*<br/>
0588 - __list-large-margin-top__ : *$global-margin*<br/>
0589 - __list-large-divider-margin-top__ : *$global-margin*<br/>
0590 - __list-large-striped-padding-vertical__ : *$global-margin*<br/>
0591 - __list-large-striped-padding-horizontal__ : *$global-small-margin*<br/>

## margin

0596 - __margin-margin__ : *$global-margin*<br/>
0597 - __margin-small-margin__ : *$global-small-margin*<br/>
0598 - __margin-medium-margin__ : *$global-medium-margin*<br/>
0599 - __margin-large-margin__ : *$global-medium-margin*<br/>
0600 - __margin-large-margin-l__ : *$global-large-margin*<br/>
0601 - __margin-xlarge-margin__ : *$global-large-margin*<br/>
0603 - __margin-xlarge-margin-l__ : *$global-xlarge-margin*<br/>

## marker

0604 - __marker-padding__ : 5px<br/>
0605 - __marker-background__ : *$global-secondary-background*<br/>
0606 - __marker-color__ : *$global-inverse-color*<br/>
0607 - __marker-hover-color__ : *$global-inverse-color*<br/>

## modal

0611 - __modal-z-index__ : *$global-z-index + 10*<br/>
0612 - __modal-background__ : rgba(0,0,0,0.6)<br/>
0613 - __modal-padding-horizontal__ : 15px<br/>
0614 - __modal-padding-horizontal-s__ : *$global-gutter*<br/>
0615 - __modal-padding-horizontal-m__ : *$global-medium-gutter*<br/>
0616 - __modal-padding-vertical__ : *$modal-padding-horizontal*<br/>
0617 - __modal-padding-vertical-s__ : 50px<br/>
0618 - __modal-dialog-width__ : 600px<br/>
0619 - __modal-dialog-background__ : *$global-background*<br/>
0620 - __modal-container-width__ : 1200px<br/>
0621 - __modal-body-padding-horizontal__ : *$global-gutter*<br/>
0622 - __modal-body-padding-vertical__ : *$global-gutter*<br/>
0623 - __modal-header-padding-horizontal__ : *$global-gutter*<br/>
0624 - __modal-header-padding-vertical__ : (*$modal-header-padding-horizontal* / 2)<br/>
0625 - __modal-header-background__ : *$global-muted-background*<br/>
0626 - __modal-footer-padding-horizontal__ : *$global-gutter*<br/>
0627 - __modal-footer-padding-vertical__ : (*$modal-footer-padding-horizontal* / 2)<br/>
0628 - __modal-footer-background__ : *$global-muted-background*<br/>
0629 - __modal-title-font-size__ : *$global-xlarge-font-size*<br/>
0630 - __modal-title-line-height__ : 1.3<br/>
0631 - __modal-close-position__ : *$global-small-margin*<br/>
0632 - __modal-close-padding__ : 5px<br/>
0633 - __modal-close-outside-position__ : 0<br/>
0634 - __modal-close-outside-translate__ : 100%<br/>
0635 - __modal-close-outside-color__ : lighten(*$global-inverse-color*, 20%)<br/>
0636 - __modal-close-outside-hover-color__ : *$global-inverse-color*<br/>

## nav

0637 - __nav-item-padding-vertical__ : 5px<br/>
0638 - __nav-item-padding-horizontal__ : 0<br/>
0639 - __nav-sublist-padding-vertical__ : 5px<br/>
0640 - __nav-sublist-padding-left__ : 15px<br/>
0641 - __nav-sublist-deeper-padding-left__ : 15px<br/>
0642 - __nav-sublist-item-padding-vertical__ : 2px<br/>
0643 - __nav-parent-icon-width__ : (*$global-line-height* * 1em)<br/>
0644 - __nav-parent-icon-height__ : *$nav-parent-icon-width*<br/>
0645 - __nav-parent-icon-color__ : *$global-color*<br/>
0646 - __nav-header-padding-vertical__ : *$nav-item-padding-vertical*<br/>
0647 - __nav-header-padding-horizontal__ : *$nav-item-padding-horizontal*<br/>
0648 - __nav-header-font-size__ : *$global-small-font-size*<br/>
0649 - __nav-header-text-transform__ : uppercase<br/>
0650 - __nav-header-margin-top__ : *$global-margin*<br/>
0651 - __nav-divider-margin-vertical__ : 5px<br/>
0652 - __nav-divider-margin-horizontal__ : 0<br/>
0653 - __nav-default-item-color__ : *$global-muted-color*<br/>
0654 - __nav-default-item-hover-color__ : *$global-color*<br/>
0655 - __nav-default-item-active-color__ : *$global-emphasis-color*<br/>
0656 - __nav-default-header-color__ : *$global-emphasis-color*<br/>
0657 - __nav-default-divider-border-width__ : *$global-border-width*<br/>
0658 - __nav-default-divider-border__ : *$global-border*<br/>
0659 - __nav-default-sublist-item-color__ : *$global-muted-color*<br/>
0660 - __nav-default-sublist-item-hover-color__ : *$global-color*<br/>
0661 - __nav-default-sublist-item-active-color__ : *$global-emphasis-color*<br/>
0662 - __nav-primary-item-font-size__ : *$global-large-font-size*<br/>
0663 - __nav-primary-item-line-height__ : *$global-line-height*<br/>
0664 - __nav-primary-item-color__ : *$global-muted-color*<br/>
0665 - __nav-primary-item-hover-color__ : *$global-color*<br/>
0666 - __nav-primary-item-active-color__ : *$global-emphasis-color*<br/>
0667 - __nav-primary-header-color__ : *$global-emphasis-color*<br/>
0668 - __nav-primary-divider-border-width__ : *$global-border-width*<br/>
0669 - __nav-primary-divider-border__ : *$global-border*<br/>
0670 - __nav-primary-sublist-item-color__ : *$global-muted-color*<br/>
0671 - __nav-primary-sublist-item-hover-color__ : *$global-color*<br/>
0672 - __nav-primary-sublist-item-active-color__ : *$global-emphasis-color*<br/>

## navbar

0692 - __navbar-background__ : *$global-muted-background*<br/>
0693 - __navbar-color-mode__ : none<br/>
0694 - __navbar-nav-item-height__ : 80px<br/>
0695 - __navbar-nav-item-padding-horizontal__ : 15px<br/>
0696 - __navbar-nav-item-color__ : *$global-muted-color*<br/>
0697 - __navbar-nav-item-font-size__ : *$global-font-size*<br/>
0698 - __navbar-nav-item-font-family__ : *$global-font-family*<br/>
0699 - __navbar-nav-item-hover-color__ : *$global-color*<br/>
0700 - __navbar-nav-item-onclick-color__ : *$global-emphasis-color*<br/>
0701 - __navbar-nav-item-active-color__ : *$global-emphasis-color*<br/>
0702 - __navbar-item-color__ : *$global-color*<br/>
0703 - __navbar-toggle-color__ : *$global-muted-color*<br/>
0704 - __navbar-toggle-hover-color__ : *$global-color*<br/>
0705 - __navbar-subtitle-font-size__ : *$global-small-font-size*<br/>
0706 - __navbar-dropdown-z-index__ : *$global-z-index + 20*<br/>
0707 - __navbar-dropdown-width__ : 200px<br/>
0708 - __navbar-dropdown-margin__ : 0<br/>
0709 - __navbar-dropdown-padding__ : 15px<br/>
0710 - __navbar-dropdown-background__ : *$global-muted-background*<br/>
0711 - __navbar-dropdown-color__ : *$global-color*<br/>
0712 - __navbar-dropdown-grid-gutter-horizontal__ : *$global-gutter*<br/>
0713 - __navbar-dropdown-grid-gutter-vertical__ : *$navbar-dropdown-grid-gutter-horizontal*<br/>
0714 - __navbar-dropdown-dropbar-margin-top__ : 0<br/>
0715 - __navbar-dropdown-dropbar-margin-bottom__ : *$navbar-dropdown-dropbar-margin-top*<br/>
0716 - __navbar-dropdown-nav-item-color__ : *$global-muted-color*<br/>
0717 - __navbar-dropdown-nav-item-hover-color__ : *$global-color*<br/>
0718 - __navbar-dropdown-nav-item-active-color__ : *$global-emphasis-color*<br/>
0719 - __navbar-dropdown-nav-header-color__ : *$global-emphasis-color*<br/>
0720 - __navbar-dropdown-nav-divider-border-width__ : *$global-border-width*<br/>
0721 - __navbar-dropdown-nav-divider-border__ : *$global-border*<br/>
0722 - __navbar-dropdown-nav-sublist-item-color__ : *$global-muted-color*<br/>
0723 - __navbar-dropdown-nav-sublist-item-hover-color__ : *$global-color*<br/>
0724 - __navbar-dropdown-nav-sublist-item-active-color__ : *$global-emphasis-color*<br/>
0725 - __navbar-dropbar-background__ : *$navbar-dropdown-background*<br/>
0726 - __navbar-dropbar-z-index__ : *$global-z-index - 20*<br/>

## notification

0734 - __notification-position__ : 10px<br/>
0735 - __notification-z-index__ : *$global-z-index + 40*<br/>
0736 - __notification-width__ : 350px<br/>
0737 - __notification-message-margin-top__ : 10px<br/>
0738 - __notification-message-padding__ : *$global-small-gutter*<br/>
0739 - __notification-message-background__ : *$global-muted-background*<br/>
0740 - __notification-message-color__ : *$global-color*<br/>
0741 - __notification-message-font-size__ : *$global-medium-font-size*<br/>
0742 - __notification-message-line-height__ : 1.4<br/>
0743 - __notification-close-top__ : *$notification-message-padding + 5px*<br/>
0744 - __notification-close-right__ : *$notification-message-padding*<br/>
0745 - __notification-message-primary-color__ : *$global-primary-background*<br/>
0746 - __notification-message-success-color__ : *$global-success-background*<br/>
0747 - __notification-message-warning-color__ : *$global-warning-background*<br/>
0748 - __notification-message-danger-color__ : *$global-danger-background*<br/>

## offcanvas

0749 - __offcanvas-z-index__ : *$global-z-index*<br/>
0750 - __offcanvas-bar-width__ : 270px<br/>
0751 - __offcanvas-bar-padding-vertical__ : *$global-margin*<br/>
0752 - __offcanvas-bar-padding-horizontal__ : *$global-margin*<br/>
0753 - __offcanvas-bar-background__ : *$global-secondary-background*<br/>
0754 - __offcanvas-bar-color-mode__ : light<br/>
0755 - __offcanvas-bar-width-m__ : 350px<br/>
0756 - __offcanvas-bar-padding-vertical-m__ : *$global-medium-gutter*<br/>
0757 - __offcanvas-bar-padding-horizontal-m__ : *$global-medium-gutter*<br/>
0758 - __offcanvas-close-position__ : 20px<br/>
0759 - __offcanvas-close-padding__ : 5px<br/>
0760 - __offcanvas-overlay-background__ : rgba(0,0,0,0.1)<br/>

## overlay

0761 - __overlay-padding-horizontal__ : *$global-gutter*<br/>
0762 - __overlay-padding-vertical__ : *$global-gutter*<br/>
0763 - __overlay-default-background__ : rgba(*$global-background*, 0.8)<br/>
0764 - __overlay-primary-background__ : rgba(*$global-secondary-background*, 0.8)<br/>
0765 - __overlay-primary-color-mode__ : light<br/>

## padding

0766 - __padding-padding__ : *$global-gutter*<br/>
0767 - __padding-padding-l__ : *$global-medium-gutter*<br/>
0768 - __padding-small-padding__ : *$global-small-gutter*<br/>
0769 - __padding-large-padding__ : *$global-gutter*<br/>
0770 - __padding-large-padding-l__ : *$global-large-gutter*<br/>

## pagination

0771 - __pagination-margin-horizontal__ : 20px<br/>
0772 - __pagination-item-color__ : *$global-muted-color*<br/>
0773 - __pagination-item-hover-color__ : *$global-color*<br/>
0774 - __pagination-item-hover-text-decoration__ : none<br/>
0775 - __pagination-item-active-color__ : *$global-color*<br/>
0776 - __pagination-item-disabled-color__ : *$global-muted-color*<br/>

## placeholder

0781 - __placeholder-margin-vertical__ : *$global-margin*<br/>
0782 - __placeholder-padding-vertical__ : *$global-gutter*<br/>
0783 - __placeholder-padding-horizontal__ : *$global-gutter*<br/>
0784 - __placeholder-background__ : *$global-muted-background*<br/>

## position

0785 - __position-small-margin__ : *$global-small-gutter*<br/>
0786 - __position-medium-margin__ : *$global-gutter*<br/>
0787 - __position-large-margin__ : *$global-gutter*<br/>
0788 - __position-large-margin-l__ : 50px<br/>

## progress

0789 - __progress-height__ : 15px<br/>
0790 - __progress-margin-vertical__ : *$global-margin*<br/>
0791 - __progress-background__ : *$global-muted-background*<br/>
0792 - __progress-bar-background__ : *$global-primary-background*<br/>

## search

0793 - __search-color__ : *$global-color*<br/>
0794 - __search-placeholder-color__ : *$global-muted-color*<br/>
0795 - __search-icon-color__ : *$global-muted-color*<br/>
0796 - __search-default-width__ : 180px<br/>
0797 - __search-default-height__ : *$global-control-height*<br/>
0798 - __search-default-padding-horizontal__ : 6px<br/>
0799 - __search-default-background__ : *$global-muted-background*<br/>
0800 - __search-default-focus-background__ : *$search-default-background*<br/>
0801 - __search-default-icon-width__ : *$global-control-height*<br/>
0802 - __search-navbar-width__ : 400px<br/>
0803 - __search-navbar-height__ : 40px<br/>
0804 - __search-navbar-background__ : transparent<br/>
0805 - __search-navbar-font-size__ : *$global-large-font-size*<br/>
0806 - __search-navbar-icon-width__ : 40px<br/>
0807 - __search-large-width__ : 500px<br/>
0808 - __search-large-height__ : 80px<br/>
0809 - __search-large-background__ : transparent<br/>
0810 - __search-large-font-size__ : *$global-xxlarge-font-size*<br/>
0811 - __search-large-icon-width__ : 80px<br/>
0812 - __search-toggle-color__ : *$global-muted-color*<br/>
0813 - __search-toggle-hover-color__ : *$global-color*<br/>

## section

0823 - __section-padding-vertical__ : *$global-medium-margin*<br/>
0824 - __section-padding-vertical-m__ : *$global-large-margin*<br/>
0825 - __section-xsmall-padding-vertical__ : *$global-margin*<br/>
0826 - __section-small-padding-vertical__ : *$global-medium-margin*<br/>
0827 - __section-large-padding-vertical__ : *$global-large-margin*<br/>
0828 - __section-large-padding-vertical-m__ : *$global-xlarge-margin*<br/>
0829 - __section-xlarge-padding-vertical__ : *$global-xlarge-margin*<br/>
0830 - __section-xlarge-padding-vertical-m__ : (*$global-large-margin + *$global-xlarge*-margin)<br/>
0831 - __section-default-background__ : *$global-background*<br/>
0832 - __section-muted-background__ : *$global-muted-background*<br/>
0833 - __section-primary-background__ : *$global-primary-background*<br/>
0834 - __section-primary-color-mode__ : light<br/>
0835 - __section-secondary-background__ : *$global-secondary-background*<br/>
0836 - __section-secondary-color-mode__ : light<br/>

## slidenav

0837 - __slidenav-padding-vertical__ : 5px<br/>
0838 - __slidenav-padding-horizontal__ : 10px<br/>
0839 - __slidenav-color__ : rgba(*$global-color*, 0.5)<br/>
0840 - __slidenav-hover-color__ : rgba(*$global-color*, 0.9)<br/>
0841 - __slidenav-active-color__ : rgba(*$global-color*, 0.5)<br/>
0842 - __slidenav-large-padding-vertical__ : 10px<br/>
0843 - __slidenav-large-padding-horizontal__ : *$slidenav-large-padding-vertical*<br/>

## sortable

0847 - __sortable-dragged-z-index__ : *$global-z-index + 50*<br/>
0848 - __sortable-placeholder-opacity__ : 0<br/>
0849 - __sortable-empty-height__ : 50px<br/>

## spinner

0850 - __spinner-size__ : 30px<br/>
0851 - __spinner-stroke-width__ : 1<br/>
0852 - __spinner-radius__ : floor((*$spinner-size - *$spinner-stroke-*width) / 2)<br/>
0853 - __spinner-circumference__ : round(2 * 3.141 * **$spinner-radius)<br/>
0854 - __spinner-duration__ : 1.4s<br/>

## sticky

0855 - __sticky-z-index__ : *$global-z-index - 20*<br/>
0856 - __sticky-animation-duration__ : 0.2s<br/>
0857 - __sticky-reverse-animation-duration__ : 0.2s<br/>

## subnav

0858 - __subnav-margin-horizontal__ : 20px<br/>
0859 - __subnav-item-color__ : *$global-muted-color*<br/>
0860 - __subnav-item-hover-color__ : *$global-color*<br/>
0861 - __subnav-item-hover-text-decoration__ : none<br/>
0862 - __subnav-item-active-color__ : *$global-emphasis-color*<br/>
0863 - __subnav-divider-margin-horizontal__ : *$subnav-margin-horizontal*<br/>
0864 - __subnav-divider-border-height__ : 1.5em<br/>
0865 - __subnav-divider-border-width__ : *$global-border-width*<br/>
0866 - __subnav-divider-border__ : *$global-border*<br/>
0867 - __subnav-pill-item-padding-vertical__ : 5px<br/>
0868 - __subnav-pill-item-padding-horizontal__ : 10px<br/>
0869 - __subnav-pill-item-background__ : transparent<br/>
0870 - __subnav-pill-item-color__ : *$subnav-item-color*<br/>
0871 - __subnav-pill-item-hover-background__ : *$global-muted-background*<br/>
0872 - __subnav-pill-item-hover-color__ : *$global-color*<br/>
0873 - __subnav-pill-item-onclick-background__ : *$subnav-pill-item-hover-background*<br/>
0874 - __subnav-pill-item-onclick-color__ : *$subnav-pill-item-hover-color*<br/>
0875 - __subnav-pill-item-active-background__ : *$global-primary-background*<br/>
0876 - __subnav-pill-item-active-color__ : *$global-inverse-color*<br/>
0877 - __subnav-item-disabled-color__ : *$global-muted-color*<br/>

## tab

0891 - __tab-margin-horizontal__ : 20px<br/>
0892 - __tab-item-padding-horizontal__ : 10px<br/>
0893 - __tab-item-padding-vertical__ : 5px<br/>
0894 - __tab-item-color__ : *$global-muted-color*<br/>
0895 - __tab-item-hover-color__ : *$global-color*<br/>
0896 - __tab-item-hover-text-decoration__ : none<br/>
0897 - __tab-item-active-color__ : *$global-emphasis-color*<br/>
0898 - __tab-item-disabled-color__ : *$global-muted-color*<br/>

## table

0903 - __table-margin-vertical__ : *$global-margin*<br/>
0904 - __table-cell-padding-vertical__ : 16px<br/>
0905 - __table-cell-padding-horizontal__ : 12px<br/>
0906 - __table-header-cell-font-size__ : *$global-font-size*<br/>
0907 - __table-header-cell-font-weight__ : bold<br/>
0908 - __table-header-cell-color__ : *$global-color*<br/>
0909 - __table-footer-font-size__ : *$global-small-font-size*<br/>
0910 - __table-caption-font-size__ : *$global-small-font-size*<br/>
0911 - __table-caption-color__ : *$global-muted-color*<br/>
0912 - __table-row-active-background__ : #ffd<br/>
0913 - __table-divider-border-width__ : *$global-border-width*<br/>
0914 - __table-divider-border__ : *$global-border*<br/>
0915 - __table-striped-row-background__ : *$global-muted-background*<br/>
0916 - __table-hover-row-background__ : *$table-row-active-background*<br/>
0917 - __table-small-cell-padding-vertical__ : 10px<br/>
0918 - __table-small-cell-padding-horizontal__ : 12px<br/>
0919 - __table-large-cell-padding-vertical__ : 22px<br/>
0920 - __table-large-cell-padding-horizontal__ : 12px<br/>
0921 - __table-expand-min-width__ : 150px<br/>

## text

0928 - __text-lead-font-size__ : *$global-large-font-size*<br/>
0929 - __text-lead-line-height__ : 1.5<br/>
0930 - __text-lead-color__ : *$global-emphasis-color*<br/>
0931 - __text-meta-font-size__ : *$global-small-font-size*<br/>
0932 - __text-meta-line-height__ : 1.4<br/>
0933 - __text-meta-color__ : *$global-muted-color*<br/>
0934 - __text-small-font-size__ : *$global-small-font-size*<br/>
0935 - __text-small-line-height__ : 1.5<br/>
0936 - __text-large-font-size__ : *$global-large-font-size*<br/>
0937 - __text-large-line-height__ : 1.5<br/>
0938 - __text-bold-font-weight__ : bolder<br/>
0939 - __text-muted-color__ : *$global-muted-color*<br/>
0940 - __text-emphasis-color__ : *$global-emphasis-color*<br/>
0941 - __text-primary-color__ : *$global-primary-background*<br/>
0942 - __text-secondary-color__ : *$global-secondary-background*<br/>
0943 - __text-success-color__ : *$global-success-background*<br/>
0944 - __text-warning-color__ : *$global-warning-background*<br/>
0945 - __text-danger-color__ : *$global-danger-background*<br/>
0946 - __text-background-color__ : *$global-primary-background*<br/>

## thumbnav

0953 - __thumbnav-margin-horizontal__ : 15px<br/>
0954 - __thumbnav-margin-vertical__ : *$thumbnav-margin-horizontal*<br/>

## tile

0955 - __tile-padding-horizontal__ : 15px<br/>
0956 - __tile-padding-horizontal-s__ : *$global-gutter*<br/>
0957 - __tile-padding-horizontal-m__ : *$global-medium-gutter*<br/>
0958 - __tile-padding-vertical__ : *$global-medium-margin*<br/>
0959 - __tile-padding-vertical-m__ : *$global-large-margin*<br/>
0960 - __tile-xsmall-padding-vertical__ : *$global-margin*<br/>
0961 - __tile-small-padding-vertical__ : *$global-medium-margin*<br/>
0962 - __tile-large-padding-vertical__ : *$global-large-margin*<br/>
0963 - __tile-large-padding-vertical-m__ : *$global-xlarge-margin*<br/>
0964 - __tile-xlarge-padding-vertical__ : *$global-xlarge-margin*<br/>
0965 - __tile-xlarge-padding-vertical-m__ : (*$global-large-margin + *$global-xlarge*-margin)<br/>
0966 - __tile-default-background__ : *$global-background*<br/>
0967 - __tile-muted-background__ : *$global-muted-background*<br/>
0968 - __tile-primary-background__ : *$global-primary-background*<br/>
0969 - __tile-primary-color-mode__ : light<br/>
0970 - __tile-secondary-background__ : *$global-secondary-background*<br/>
0971 - __tile-secondary-color-mode__ : light<br/>

## tooltip

0972 - __tooltip-z-index__ : *$global-z-index + 30*<br/>
0973 - __tooltip-max-width__ : 200px<br/>
0974 - __tooltip-padding-vertical__ : 3px<br/>
0975 - __tooltip-padding-horizontal__ : 6px<br/>
0976 - __tooltip-background__ : #666<br/>
0977 - __tooltip-border-radius__ : 2px<br/>
0978 - __tooltip-color__ : *$global-inverse-color*<br/>
0979 - __tooltip-font-size__ : 12px<br/>
0980 - __tooltip-margin__ : 10px<br/>

## totop

0981 - __totop-padding__ : 5px<br/>
0982 - __totop-color__ : *$global-muted-color*<br/>
0983 - __totop-hover-color__ : *$global-color*<br/>
0984 - __totop-active-color__ : *$global-emphasis-color*<br/>

## transition

0988 - __transition-duration__ : 0.3s<br/>
0989 - __transition-scale__ : 1.1<br/>
0990 - __transition-slide-small-translate__ : 10px<br/>
0991 - __transition-slide-medium-translate__ : 50px<br/>
0992 - __transition-slow-duration__ : 0.7s<br/>

## panel

0993 - __panel-scrollable-height__ : 170px<br/>
0994 - __panel-scrollable-padding__ : 10px<br/>
0995 - __panel-scrollable-border-width__ : *$global-border-width*<br/>
0996 - __panel-scrollable-border__ : *$global-border*<br/>

## border

0997 - __border-rounded-border-radius__ : 5px<br/>

## box

0998 - __box-shadow-duration__ : 0.1s<br/>
0999 - __box-shadow-bottom-height__ : 30px<br/>
1000 - __box-shadow-bottom-border-radius__ : 100%<br/>
1001 - __box-shadow-bottom-background__ : #444<br/>
1002 - __box-shadow-bottom-blur__ : 20px<br/>

## dropcap

1003 - __dropcap-margin-right__ : 10px<br/>
1004 - __dropcap-font-size__ : ((*$global-line-height * *3) * 1em)<br/>

## logo

1005 - __logo-font-size__ : *$global-large-font-size*<br/>
1006 - __logo-font-family__ : *$global-font-family*<br/>
1007 - __logo-color__ : *$global-color*<br/>
1008 - __logo-hover-color__ : *$global-color*<br/>

## dragover

1009 - __dragover-box-shadow__ : 0 0 20px rgba(100,100,100,0.3)<br/>

## deprecated

1012 - __deprecated__ : false<br/>

## breakpoint

1013 - __breakpoint-small__ : 640px<br/>
1014 - __breakpoint-medium__ : 960px<br/>
1015 - __breakpoint-large__ : 1200px<br/>
1016 - __breakpoint-xlarge__ : 1600px<br/>
1017 - __breakpoint-xsmall-max__ : (*$breakpoint-small* - 1)<br/>
1018 - __breakpoint-small-max__ : (*$breakpoint-medium* - 1)<br/>
1019 - __breakpoint-medium-max__ : (*$breakpoint-large* - 1)<br/>
1020 - __breakpoint-large-max__ : (*$breakpoint-xlarge* - 1)<br/>

## width

1025 - __width-small-width__ : 150px<br/>
1026 - __width-medium-width__ : 300px<br/>
1027 - __width-large-width__ : 450px<br/>
1028 - __width-xlarge-width__ : 600px<br/>
1029 - __width-xxlarge-width__ : 750px<br/>

# Dependencies