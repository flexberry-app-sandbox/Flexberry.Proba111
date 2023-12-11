import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba11.caption'),
          title: i18n.t('forms.application.sitemap.proba11.title'),
          children: [{
            link: 'i-i-s-proba11-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-рег-результ-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-proba11-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-сотрудники-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-proba11-организация-l',
            caption: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-организация-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-proba11-должности-l',
            caption: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-должности-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-proba11-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-планир-собес-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-proba11-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba11.i-i-s-proba11-регист-анкеты-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})