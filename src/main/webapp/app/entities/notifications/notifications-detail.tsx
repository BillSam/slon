import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './notifications.reducer';
import { INotifications } from 'app/shared/model/notifications.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface INotificationsDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class NotificationsDetail extends React.Component<INotificationsDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { notificationsEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Notifications [<b>{notificationsEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="title">Title</span>
            </dt>
            <dd>{notificationsEntity.title}</dd>
            <dt>
              <span id="body">Body</span>
            </dt>
            <dd>{notificationsEntity.body}</dd>
            <dt>
              <span id="createdBy">Created By</span>
            </dt>
            <dd>{notificationsEntity.createdBy}</dd>
            <dt>
              <span id="createdAt">Created At</span>
            </dt>
            <dd>
              <TextFormat value={notificationsEntity.createdAt} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="attachment">Attachment</span>
            </dt>
            <dd>
              {notificationsEntity.attachment ? (
                <div>
                  <a onClick={openFile(notificationsEntity.attachmentContentType, notificationsEntity.attachment)}>Open&nbsp;</a>
                  <span>
                    {notificationsEntity.attachmentContentType}, {byteSize(notificationsEntity.attachment)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="status">Status</span>
            </dt>
            <dd>{notificationsEntity.status ? 'true' : 'false'}</dd>
            <dt>
              <span id="targetGroup">Target Group</span>
            </dt>
            <dd>{notificationsEntity.targetGroup}</dd>
            <dt>User</dt>
            <dd>{notificationsEntity.user ? notificationsEntity.user.login : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/notifications" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/notifications/${notificationsEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ notifications }: IRootState) => ({
  notificationsEntity: notifications.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsDetail);
