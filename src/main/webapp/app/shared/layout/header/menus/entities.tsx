import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';

export const EntitiesMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name="Entities" id="entity-menu">
    <DropdownItem tag={Link} to="/entity/assignment">
      <FontAwesomeIcon icon="asterisk" fixedWidth />
      &nbsp;Assignment
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/task">
      <FontAwesomeIcon icon="asterisk" fixedWidth />
      &nbsp;Task
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/morning-sessions">
      <FontAwesomeIcon icon="asterisk" fixedWidth />
      &nbsp;Morning Sessions
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/notifications">
      <FontAwesomeIcon icon="asterisk" fixedWidth />
      &nbsp;Notifications
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/event-type">
      <FontAwesomeIcon icon="asterisk" fixedWidth />
      &nbsp;Event Type
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/event">
      <FontAwesomeIcon icon="asterisk" fixedWidth />
      &nbsp;Event
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/profile">
      <FontAwesomeIcon icon="asterisk" fixedWidth />
      &nbsp;Profile
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/comment">
      <FontAwesomeIcon icon="asterisk" fixedWidth />
      &nbsp;Comment
    </DropdownItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
