import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { ResponsiveThemeProvider as ThemeProvider } from '../shared/components/responsiveThemeProvider';

import { translationMessages } from '../i18n';
import { GlobalStyle } from '../theme/global';
import messages from './app.messages';
import theme from '../theme/theme';

export const AppComponent = ({ language, children }) => (
  <IntlProvider key={language} locale={language} messages={translationMessages[language]}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <FormattedMessage {...messages.pageTitle}>
          {pageTitle => <Helmet titleTemplate={`%s - ${pageTitle}`} defaultTitle={pageTitle} />}
        </FormattedMessage>

        <GlobalStyle />
        {React.Children.only(children)}
      </Fragment>
    </ThemeProvider>
  </IntlProvider>
);

AppComponent.propTypes = {
  language: PropTypes.string.isRequired,
  children: PropTypes.node,
};
