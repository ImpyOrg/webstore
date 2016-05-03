import React from 'react';
import {
  renderIntoDocument,
  isCompositeComponentWithType,
  findRenderedComponentWithType as findWithType,
  findRenderedDOMComponentWithClass as findWithClass
} from 'react-addons-test-utils';
import { expect } from 'chai';

import App from '../../src/pages/app';
import Header from '../../src/components/header';

describe('App', () => {

  describe('raw:', () => {
    const component = renderIntoDocument(<App />);

    it('can be rendered', () => {
      expect(component).to.be.ok;
    });

    it('renders with "App" type', () => {
      const isValid = isCompositeComponentWithType(component, App);
      expect(isValid).to.equal(true);
    });

    it('renders a DOM node with "page" class', () => {
      const page = findWithClass(component, 'page');
      expect(page).to.be.ok;
    });

    it('renders Header component', () => {
      const header = findWithType(component, Header);
      expect(header).to.be.ok;
    });

  });

  describe('with children:', () => {

    it('renders this.props.children components', () => {
      const child = <div className="child">Child component content</div>;
      const component = renderIntoDocument(
        <App>{child}</App>
      );

      const renderedChild = findWithClass(component, 'child');
      expect(renderedChild).to.be.ok;
      expect(renderedChild.textContent).to.equal('Child component content');
    });

  });

});
