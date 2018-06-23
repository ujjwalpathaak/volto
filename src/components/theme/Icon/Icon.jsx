/**
 * Icon component.
 * @module components/theme/Icon/Icon
 */
import React from 'react';
import PropTypes from 'prop-types';

const defaultSize = '100%';

/**
 * Component to display an Icon.
 * @function Field
 * @param {Object} props Component properties.
 * @param {string} props.name Name source object.
 * @param {string} props.size Size of the Icon (in px).
 * @param {string} props.color Color of the Icon.
 * @param {string} props.className className to add to the component.
 * @param {string} props.title Title (a11y).
 * @returns {string} Markup of the component.
 */
const Icon = ({ name, size, color, className, title }) => (
  <svg
    xmlns={name.attributes.xmlns}
    viewBox={name.attributes.viewBox}
    style={{ height: size, width: 'auto', fill: color || 'currentColor' }}
    className={className ? `icon ${className}` : 'icon'}
    dangerouslySetInnerHTML={{
      __html: title ? `<title>${title}</title>${name.content}` : name.content,
    }}
  />
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Icon.propTypes = {
  name: PropTypes.shape({
    xmlns: PropTypes.string,
    viewBox: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
Icon.defaultProps = {
  size: defaultSize,
  color: null,
  className: null,
  title: null,
};

export default Icon;
