import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './event.reducer';
import { IEvent } from 'app/shared/model/event.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEventDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class EventDetail extends React.Component<IEventDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { eventEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Event [<b>{eventEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="title">Title</span>
            </dt>
            <dd>{eventEntity.title}</dd>
            <dt>
              <span id="description">Description</span>
            </dt>
            <dd>{eventEntity.description}</dd>
            <dt>
              <span id="dueDate">Due Date</span>
            </dt>
            <dd>
              <TextFormat value={eventEntity.dueDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="eventCategory">Event Category</span>
            </dt>
            <dd>{eventEntity.eventCategory}</dd>
            <dt>
              <span id="status">Status</span>
            </dt>
            <dd>{eventEntity.status ? 'true' : 'false'}</dd>
            <dt>
              <span id="createdBy">Created By</span>
            </dt>
            <dd>
              <TextFormat value={eventEntity.createdBy} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="createdAt">Created At</span>
            </dt>
            <dd>
              <TextFormat value={eventEntity.createdAt} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="image">Image</span>
            </dt>
            <dd>
              {eventEntity.image ? (
                <div>
                  <a onClick={openFile(eventEntity.imageContentType, eventEntity.image)}>Open&nbsp;</a>
                  <span>
                    {eventEntity.imageContentType}, {byteSize(eventEntity.image)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="targetGroup">Target Group</span>
            </dt>
            <dd>{eventEntity.targetGroup}</dd>
            <dt>Event</dt>
            <dd>{eventEntity.event ? eventEntity.event.id : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/event" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/event/${eventEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ event }: IRootState) => ({
  eventEntity: event.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
