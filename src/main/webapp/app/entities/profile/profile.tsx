import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { openFile, byteSize, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './profile.reducer';
import { IProfile } from 'app/shared/model/profile.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IProfileProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class Profile extends React.Component<IProfileProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { profileList, match } = this.props;
    return (
      <div>
        <h2 id="profile-heading">
          Profiles
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Profile
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date Of Employment</th>
                <th>First Name</th>
                <th>Second Name</th>
                <th>Other Name</th>
                <th>Git Profile</th>
                <th>Image</th>
                <th>Bio</th>
                <th>Gender</th>
                <th>Project</th>
                <th>User</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {profileList.map((profile, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${profile.id}`} color="link" size="sm">
                      {profile.id}
                    </Button>
                  </td>
                  <td>
                    <TextFormat type="date" value={profile.dateOfEmployment} format={APP_DATE_FORMAT} />
                  </td>
                  <td>{profile.firstName}</td>
                  <td>{profile.secondName}</td>
                  <td>{profile.otherName}</td>
                  <td>{profile.gitProfile}</td>
                  <td>
                    {profile.image ? (
                      <div>
                        <a onClick={openFile(profile.imageContentType, profile.image)}>Open &nbsp;</a>
                        <span>
                          {profile.imageContentType}, {byteSize(profile.image)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{profile.bio}</td>
                  <td>{profile.gender}</td>
                  <td>{profile.project}</td>
                  <td>{profile.user ? profile.user.login : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${profile.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${profile.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${profile.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }: IRootState) => ({
  profileList: profile.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
