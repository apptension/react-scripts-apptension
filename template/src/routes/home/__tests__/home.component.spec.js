import React from 'react';
import { HomeComponent } from '../home.component';
import { makeContextRenderer } from '../../../shared/utils/testUtils';

describe('Home: Component', () => {
  const defaultProps = {};

  const component = props => <HomeComponent {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render correctly', () => {
    const { container } = render();
    expect(container.firstChild).toMatchSnapshot();
  });
});
