import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, UncontrolledTooltip, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './assignment.reducer';
import { IAssignment } from 'app/shared/model/assignment.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAssignmentDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class AssignmentDetail extends React.Component<IAssignmentDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { assignmentEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Assignment [<b>{assignmentEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="dueDate">Due Date</span>
              <UncontrolledTooltip target="dueDate">fieldName</UncontrolledTooltip>
            </dt>
            <dd>
              <TextFormat value={assignmentEntity.dueDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="dueDay">Due Day</span>
            </dt>
            <dd>{assignmentEntity.dueDay}</dd>
            <dt>
              <span id="status">Status</span>
            </dt>
            <dd>{assignmentEntity.status ? 'true' : 'false'}</dd>
            <dt>
              <span id="createdAt">Created At</span>
            </dt>
            <dd>
              <TextFormat value={assignmentEntity.createdAt} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="createdBy">Created By</span>
            </dt>
            <dd>
              <TextFormat value={assignmentEntity.createdBy} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>Morning Session</dt>
            <dd>{assignmentEntity.morningSession ? assignmentEntity.morningSession.id : ''}</dd>
            <dt>Task</dt>
            <dd>{assignmentEntity.task ? assignmentEntity.task.id : ''}</dd>
            <dt>User</dt>
            <dd>
              {assignmentEntity.users
                ? assignmentEntity.users.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.login}</a>
                      {i === assignmentEntity.users.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}{' '}
            </dd>
          </dl>
          <Button tag={Link} to="/entity/assignment" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/assignment/${assignmentEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ assignment }: IRootState) => ({
  assignmentEntity: assignment.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignmentDetail);
