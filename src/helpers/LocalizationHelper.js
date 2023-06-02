import {I18n} from 'i18n-js';
import en from '../../translations/en.json';
import ur from '../../translations/ur.json';
import uk from '../../translations/uk.json';

const i18n = new I18n({
  ...en,
  ...ur,
  ...uk,
});

// i18n.defaultLocale = 'en';
i18n.locale = 'en';

export default i18n;
