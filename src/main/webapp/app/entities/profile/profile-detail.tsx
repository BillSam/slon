import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './profile.reducer';
import { IProfile } from 'app/shared/model/profile.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IProfileDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class ProfileDetail extends React.Component<IProfileDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { profileEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Profile [<b>{profileEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="dateOfEmployment">Date Of Employment</span>
            </dt>
            <dd>
              <TextFormat value={profileEntity.dateOfEmployment} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="firstName">First Name</span>
            </dt>
            <dd>{profileEntity.firstName}</dd>
            <dt>
              <span id="secondName">Second Name</span>
            </dt>
            <dd>{profileEntity.secondName}</dd>
            <dt>
              <span id="otherName">Other Name</span>
            </dt>
            <dd>{profileEntity.otherName}</dd>
            <dt>
              <span id="gitProfile">Git Profile</span>
            </dt>
            <dd>{profileEntity.gitProfile}</dd>
            <dt>
              <span id="image">Image</span>
            </dt>
            <dd>
              {profileEntity.image ? (
                <div>
                  <a onClick={openFile(profileEntity.imageContentType, profileEntity.image)}>Open&nbsp;</a>
                  <span>
                    {profileEntity.imageContentType}, {byteSize(profileEntity.image)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="bio">Bio</span>
            </dt>
            <dd>{profileEntity.bio}</dd>
            <dt>
              <span id="gender">Gender</span>
            </dt>
            <dd>{profileEntity.gender}</dd>
            <dt>
              <span id="project">Project</span>
            </dt>
            <dd>{profileEntity.project}</dd>
            <dt>User</dt>
            <dd>{profileEntity.user ? profileEntity.user.login : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/profile" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/profile/${profileEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ profile }: IRootState) => ({
  profileEntity: profile.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetail);
